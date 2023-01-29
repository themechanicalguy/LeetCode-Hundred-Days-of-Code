/*

3Sum or Find Triplet with 0 sum

Problem Statement:

Given an arr[] of integers 
Return all unique triplets which sums 0,
arr[i] + arr[j] + arr[k]  , such that i != j, i != k,  j != k
Assume that the solution set must not contains duplicate triplets
*/

/*
Brute Force Approach:
Not recommended way

First of all sort the array.
Create a variable N to store array length
Create a result array to store unique triplets
Start a loop from  i= 0 to N
Start a loop from j=i+1 to N
Start a loop from k = j+1 to N
Check if arr[i] + arr[j]+arr[k] === 0
If true push items to result array
Now result is having all triplets, but we need unique triplets
Create a variable unique to store below result
Use Array.from( new Set(result.map(JSON.Stringify)), JSON.parse) to filter unique values.
Return unique.

Time Complexity:  O(n3) 
Space Complexity: O(1) 
*/
function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          res.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  // filtering unique values
  console.log(new Set(res.map(JSON.stringify)));
  const unique = Array.from(new Set(res.map(JSON.stringify)), JSON.parse);

  return unique;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//Optimized Approach

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // First of all sort the array.
  nums.sort((a, b) => a - b);
  // Create a result array to store triplets
  let res = [];
  // Start a for loop from i =0 to N,
  for (let i = 0; i < nums.length; i++) {
    /**
      Create a variable low, and initialize with i+1.
      Create a variable high, and initialize with N-1.
      Create a variable sum, and initialize it with 0.
     */
    let low = i + 1,
      high = nums.length - 1,
      sum = 0;

    // Start a while loop
    while (low < high) {
      // Calculate sum
      sum = nums[i] + nums[low] + nums[high];
      // Check if sum === 0
      if (sum === 0) {
        // If true push i, low, high to result
        res.push([nums[i], nums[low], nums[high]]);
        // Increment low until unique,
        while (nums[low] === nums[low + 1]) low++;
        // Decrement high until unique,
        while (nums[high] === nums[high - 1]) high--;
        // once they are different increment & decrement low, high
        low++;
        high--;
      } else if (sum < 0) low++; // if sum is less increment low
      else high--; // if sum is more decrement high
    }
    // Check duplicates for i, increment untill unique
    while (nums[i] === nums[i + 1]) i++;
  }
  return res;
};
