const input = readline().split(" ");

const isPrime = (num) => {
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const output = input.filter((el) => isPrime(el));

console.log(output.join(" "));
// #####################################

const input = readline()
  .split(' ')
  .map(x => parseInt(x));

const range = n => Array.from(Array(n).keys());

const isPrime = n =>
  range(n)
    .map(x => n % x === 0)
    .filter(x => x).length === 1;

console.log(input.filter(isPrime).join(' '));
