/**
 Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.


Example 1:

Input:
n = 6, X = 13
arr[] = [1 4 45 6 10 8]
Output:
1
Explanation:
The triplet {1, 4, 8} in 
the array sums up to 13.
 */

find3Numbers(arr, n, target);
{
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === target) return true;
      if (sum < target) left++;
      else right--;
    }
  }
  return false;
}
