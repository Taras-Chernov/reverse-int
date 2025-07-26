module.exports = function reverse(n) {
  n = n < 0 ? -n : n;
  const arr = Array.from(String(n));
  arr.reverse();
  const reversN = Number(arr.join(''));
  return reversN;
};
