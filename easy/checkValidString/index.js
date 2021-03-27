/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let low = 0;
  let high = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      low++;
      high++;
    } else if (s[i] === ')') {
      if (low > 0) {
        --low;
      }
      if (high > 0) {
        --high;
      } else {
        return false;
      }
    } else {
      if (low > 0) {
        low--;
      }
      high++;
    }
  }

  return low <= 0 && high >= 0;
};