const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    res.push(+(n.slice(0, i) + n.slice(i + 1)));
  }
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
