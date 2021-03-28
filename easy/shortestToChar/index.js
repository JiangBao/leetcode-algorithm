/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  let cIndex = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cIndex.push(i);
    }
  }

  const res = Array(s.length).fill(Infinity);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      res[i] = 0;
      continue;
    }

    cIndex.map(index => {
      const len = Math.abs(index - i);
      if (len < res[i]) {
        res[i] = len;
      };
    })
  }

  return res;
};