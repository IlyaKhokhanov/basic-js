const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let str2 = s2;

  for (let i in s1) {
    if (str2.includes(s1[i])) {
      str2 = str2.replace(s1[i], "");
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
