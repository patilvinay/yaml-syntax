/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-eval */

const yamljs = require("yaml-js").load;

function parse(src, opts) {
  if (!opts) opts = {};
  return yamljs(src);
}

function ParseError(err, src, file) {
  SyntaxError.call(this);
  this.message = err.message.replace(/\s+\(\d+:\d+\)$/, "");

  this.line = err.loc.line + 1;
  this.column = err.loc.column + 1;

  this.annotated = `\n${file || "(anonymous file)"}:${this.line}\n${
    src.split("\n")[this.line - 1]
  }\n${Array(this.column).join(" ")}^  \n
  ParseError: ${this.message}`;
}

function errorInfo(src, file, opts) {
  try {
    parse(src, opts);
  } catch (err) {
    err.message = err.problem;
    err.loc = {};
    err.loc.line = err.problem_mark.line;
    err.loc.column = err.problem_mark.column;
    return new ParseError(err, src, file);
  }
  return undefined;
}

module.exports = function (src, file, opts) {
  if (typeof src !== "string") src = String(src);

  try {
    eval(`throw "STOP"; (function () { ${src}\n})()`);
    return;
  } catch (err) {
    if (err === "STOP") return undefined;
    if (err.constructor.name !== "SyntaxError") return err;
    return errorInfo(src, file, opts);
  }
};

// ParseError.prototype = Object.create(SyntaxError.prototype);

// ParseError.prototype.toString = function () {
//   // return this.annotated;
// };

// ParseError.prototype.inspect = function () {
//   //  return this.annotated;
// };
