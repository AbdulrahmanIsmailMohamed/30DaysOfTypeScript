// Apply Transform Over Each Element in Array

const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  let returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
