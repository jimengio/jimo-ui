"use strict";

/**
 * Contains uppercase letters
 *
 * @param {string} word
 */
function containsUppercaseLetters(word) {
  return /[A-Z]/g.test(word);
}

/**
 * kebabCase to camelCase
 * "abc-def" -> "AbcDef"
 *
 * @param {string} string
 */
function camelCase(string) {
  let result = string;

  result = result.toLowerCase();

  result = result.replace(/-./g, match => match.substr(1, 1).toUpperCase());

  result = result.substr(0, 1).toUpperCase() + result.substr(1);

  return result;
}

module.exports = { camelCase, containsUppercaseLetters };
