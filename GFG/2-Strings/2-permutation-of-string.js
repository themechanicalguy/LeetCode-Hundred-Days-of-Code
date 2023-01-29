function solve(arr, ans, index) {
  //base case
  if (index >= arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let j = index; j < arr.length; j++) {
    [arr[index], arr[j]] = [arr[j], arr[index]];
    solve(arr, ans, index + 1);
    //backtracking
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
}

function permutation(arr) {
  let ans = [];
  let index = 0;
  solve(arr, ans, index);
  return ans;
}

permutation([1, 2, 3]);
