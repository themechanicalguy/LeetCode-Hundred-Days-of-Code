/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

/*

Algorithm:
Create a function flat that takes 2 arguments. Array[] arr and depth
Create a variable res to store the result
Start a for..of loop with item variable to iterate through the arr[]
  Check if arr item isArray and depth > 0
    Call flat inside res.push with arguments as item and depth-1( i.e res.push(...flat(item, depth-1)
  Else push item to res
Return res


*/

function flat(arr, depth = 1) {
  const res = [];
  for (let item of arr) {
    if (Array.isArray(item) && depth > 0) {
      // const res = ;
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr));
// [1, 2, 3, [4]]

console.log(flat(arr, 1));
// [1, 2, 3, [4]]

console.log(flat(arr, 2));
