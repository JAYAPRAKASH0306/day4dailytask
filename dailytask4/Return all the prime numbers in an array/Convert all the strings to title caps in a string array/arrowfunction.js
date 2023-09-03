let strings = ["hello", "world", "javascript"];

let convertToTitleCaps = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  console.log(arr);
};

convertToTitleCaps(strings);

