let strings = ["hello", "madam", "racecar", "world"];

let getPalindromes = function(arr) {
  let palindromes = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
      palindromes.push(str);
    }
  }
  return palindromes;
};

console.log(getPalindromes(strings));

