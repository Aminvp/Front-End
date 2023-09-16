
const n = parseInt(readline());

const fib = n => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

const range = n => Array.from(Array(n).keys());

const out = range(n).map(fib).join(', ');

console.log(out);
// #####################################
const n = parseInt(readline());

const fib = n => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

const range = n => Array.from(Array(n).keys());

const out = range(n).map(fib).join(', ');

console.log(out);
