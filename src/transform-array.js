const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i = (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') ? i + 2 : i + 1;
        break;
      case '--discard-prev':
        if (new_arr.length) new_arr.pop();
        break;
      case '--double-next':
        if (arr[i + 1]) {
          new_arr.push(arr[i + 1]);
          new_arr.push(arr[i + 1]);
          i++;
        }
        break;
      case '--double-prev':
        if (new_arr.length) new_arr.push(new_arr[new_arr.length - 1]);
        break;
      default:
        new_arr.push(arr[i]);
        break;
    }
  }
  return new_arr;
}

module.exports = {
  transform
};
