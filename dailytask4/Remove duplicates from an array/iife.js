let array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

let uniqueArray = (function(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
})(array);

console.log(uniqueArray);



