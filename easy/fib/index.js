/**
 * @param {number}  n
 * @return {number}
 */
function fib(n) {
  if (n == 1 || n === 2) return 1;
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}