/**
 Given an array, Arr of N numbers, and another number target, find three integers in the array 
 such that the sum is closest to the target. Return the sum of the three integers.

Note: If there are multiple solutions, print the maximum one.

Example 1:

Input:
  N = 6, target = 2
  A[] = {-7,9,8,3,1,1}
Output: 2
  Explanation: There is one triplet with sum
  2 in the array. Triplet elements are -7,8,
  1 whose sum is 2.

Example 2:

Input:
  N = 4, target = 13
  A[] = {5,2,7,5}
Output: 14
  Explanation: There is one triplet with sum
  12 and other with sum 14 in the array.
  Triplet elements are 5, 2, 5 and 2, 7, 5
  respectively. Since abs(13-12) ==
  abs(13-14) maximum triplet sum will be
  preferred i.e 14.
 
 
 */

// Brute Force

function threeSumNaive(arr, target) {
  let n = arr.length;
  let ans = 0;
  let diff = Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === target) {
          return sum;
        } else if (Math.abs(sum - target) < diff) {
          diff = Math.abs(sum - target);
          ans = sum;
        }
      }
    }
  }
  return ans;
}

console.log(threeSumNaive([5, 2, 7, 5], 13));
// console.log(threeSumNaive([-7, 8, 3], 2));

// Optimized Approach

/*
Sort the array
Create a variable n to store the length of array
Create a variable res to store the closest target.
Create a variable globalDiff and initialize it with a large value(Infinity).
Loop a for loop over the array from 0 to N
Create a variable left, initialize with i+1.
Create a variable right, initialize with n-1.
Start a While loop with left < right
Create a variable sum, sum = arr[i] + arr[left] + arr[right]
Create a variable tempDiff = Math.abs(sum-target)
Check if sum === target, return target.
Else if temp < globalDiff
Assign tempDiff to globalDiff
Assign sum to res
Check if sum < target, increase left
Check if sum > target, decrease right
Return res


*/

function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);
  let res;
  let n = arr.length;
  let globalDiff = Infinity;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let tempDiff = Math.abs(sum - target);
      if (sum === target) {
        return target;
      } else if (tempDiff < globalDiff) {
        globalDiff = tempDiff;
        res = sum;
      }
      if (sum < target) left++;
      if (sum > target) right--;
    }
  }
  return res;
}

console.log(threeSumClosest([5, 2, 7, 5], 13));
console.log(threeSumClosest([-7, 8, 3], 2));
