let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  return arr;
})(array, k);

console.log(rotatedArray);





