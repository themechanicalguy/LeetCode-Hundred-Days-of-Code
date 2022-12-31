/**
 * 31-12-2022
 * 
 * Given an Array A of postive integers
 * Your task is to find the leaders in the array
 * Leader - An element of array is leader if it is greater than or equal to all 
    the elements to its right side.The right most element is always leader
 */

function leaderArray(arr) {
  let res = [];
  let n = arr.length;
  // for(let i=0;i<=n;i++){
  //     let j = i+1;
  //     while(j < n){
  //         if(arr[i] < arr[j]) break;
  //         j++;
  //     }
  //     if( j === n) res.push(arr[i])
  // }
  // return res;
  let leader = arr[n - 1];
  res.push(leader);
  let i = n - 2;
  while (i >= 0) {
    if (arr[i] > leader) {
      res.push(arr[i]);
      leader = arr[i];
    }
    i--;
  }
  return res;
}

leaderArray([1, 2, 3, 4, 5, 2]);

// Optimized

function printLeaders(arr, size) {
  /* create stack to store leaders*/
  let stack = [];
  stack.push(arr[size - 1]);

  for (let i = size - 2; i >= 0; i--) {
    let temp = stack.pop();
    stack.push(temp);
    if (arr[i] >= temp) {
      stack.push(arr[i]);
    }
  }

  /* print stack elements*/
  /* run loop till stack is not empty*/
  while (stack.length > 0) {
    console.log(stack.pop() + " ");
  }
}
