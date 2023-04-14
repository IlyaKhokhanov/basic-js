const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str; //.toString();
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition /* .toString() */ || "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";

  let dop = (addition + additionSeparator).repeat(additionRepeatTimes);
  dop = dop.slice(0, dop.length - additionSeparator.length);

  let res = (string + dop + separator).repeat(repeatTimes);
  res = res.slice(0, res.length - separator.length);

  return res;
}

module.exports = {
  repeater,
};
