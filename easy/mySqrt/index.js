/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0, h = x, ans = -1;

  while(l <= h) {
    let mid = Math.floor(l + (h - l) / 2);
    if (mid * mid <= x) {
      ans = mid;
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return ans;
};