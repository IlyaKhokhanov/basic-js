const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return "";
  let res = [];
  let char = "";
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) continue;
    char = str[i];
    num = num + 1;
    if (str[i] === str[i + 1]) {
      for (let j = i; j < str.length; j++) {
        if (str[j] !== str[j + 1]) {
          break;
        } else {
          num = num + 1;
        }
      }
    }
    num > 1 ? res.push(num, char) : res.push(char);
    num = 0;
  }
  return res.join("");
}

module.exports = {
  encodeLine,
};
