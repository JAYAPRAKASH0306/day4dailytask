let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let getMedian = function(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray.sort((a, b) => a - b);
  let length = mergedArray.length;
  let midIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    return mergedArray[midIndex];
  }
};

console.log(getMedian(arr1, arr2));

