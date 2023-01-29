/**
  Problem Statement:  
    Given an array[] of unique integers and an integer target
    Return an array that contains indices of 2 numbers from the array, that sums up target
    Assume there is exactly 1 solution in the array

*/
/*
  Brute Force Approach:

    Create a variable N to store length of array
    Run a loop i from 0 to N-1
    Run a inner loop j from i+1 to N
    Check if array[i] + array[j] equals target, if it satisfies return [i,j]
    Return -1 if not found

    Time Complexity: O(n)
    Space Complexity: O(1)

 */

function naiveTwoSum(arr, target) {
  let N = arr.length;
  // console.log(N);
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

// console.log(naiveTwoSum([2, 7, 11, 15], 9));
// console.log(naiveTwoSum([3, 2, 4], 6));
// console.log(naiveTwoSum([3, 3], 6));

// Refactored Approach

//Create a variable N to store length of the array
//Create a freqMap to hold the index and respective item of array
//Run a loop and store item of array and its respective index
//Run a loop from i=0 to N
//  create a var reqNum to store the difference between traget and array[i]
//    if reqNum is present in map and is unique, return i, index of item in map
// return -1

function refactoredTwoSum(arr, target) {
  // variable N to store length of the array
  let N = arr.length;
  // freqMap to hold the index and respective item of array
  const freqMap = new Map();
  // loop to store item of array and its respective index
  for (let i = 0; i < N; i++) {
    freqMap.set(arr[i], i);
  }
  // loop from i=0 to N to check if item exists
  for (let i = 0; i < N; i++) {
    // var to store the difference between traget and array[i]
    let reqNum = target - arr[i];
    // if reqNum is present in map && its unique, return i, index of item in map
    if (freqMap.has(reqNum) && freqMap.get(reqNum) !== i) {
      return [i, freqMap.get(reqNum)];
    }
  }
  return -1;
}

console.log(refactoredTwoSum([2, 7, 11, 15], 9));
console.log(refactoredTwoSum([3, 2, 4], 6));
console.log(refactoredTwoSum([3, 3], 6));
