/**
 * Given an array nums of n integers, return an array of all the unique 
 * quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === target) {
            res.push([arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b));
          }
        }
      }
    }
  }
  const unique = Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
  return unique;
};

// Time limit exceed - O(n4)

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// [2,2,2,2,2] 8
// console.log(fourSum([2, 2, 2, 2, 2], 8));

const fourSum2 = function (arr, target) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const hashMap = new Map();
      for (let k = j + 1; k < arr.length; k++) {
        const partialSum = arr[i] + arr[j] + arr[k];
        const reqNum = target - partialSum;
        // console.log(reqNum);
        if (hashMap.has(reqNum)) {
          res.push([arr[i], arr[j], arr[k], reqNum].sort((a, b) => a - b));
        }
        hashMap.set(reqNum);
      }
      console.log(hashMap);
    }
  }
  const unique = Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
  return unique;
};

// console.log(fourSum2([2, 2, 2, 2, 2], 8));
console.log(fourSum2([1, 0, -1, 0, -2, 2], 0));
