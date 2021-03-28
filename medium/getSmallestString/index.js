/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let str = '';

  for (let i = 1; i <= n; i++) {
    let position = k - (n - i) * 26;
    if (position <= 0 ) {
      position = 1;
    }
    k = k - position;
    str += String.fromCharCode(96 + position);
  }

  return str;
};