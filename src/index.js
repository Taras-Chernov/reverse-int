module.exports = function reverse(n) {
  const x = n < 0 ? -n : n;
  const str = String(x);
  const result = Number(str.split('').reverse().join(''));
  return result;
};
