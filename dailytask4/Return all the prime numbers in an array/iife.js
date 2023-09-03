let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function(arr) {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isPrime = true;
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num > 1) {
      primes.push(num);
    }
  }
  return primes;
})(numbers);

console.log(primeNumbers);

