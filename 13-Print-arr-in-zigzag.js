/**
 * Given an array arr of distinct elements of size N,
 * the task is to rearrange the elements of the array in a zig-zag fashion so that the converted array should be in the below form:
 */

function zigZag(arr, n) {
  // code here
  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      //swap
      if (arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        // swap(arr[i],arr[i-1]);
      }
      //swap
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // swap(arr[i],arr[i+1]);
      }
    }
  }
}
