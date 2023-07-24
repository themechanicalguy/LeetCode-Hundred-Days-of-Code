/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Approach:
1- loop through array, and get individual string
2- //hold 2 strings at once
3- //compare both the strings and store their matching in a temporary varible
4- then start checking that variable for the following strings and update accordingly
5- return the res

//1- Find the smallest string among all, and set it to res -O(n)
//2- Use charAt and find the 

*/
const longestCommonPrefix = (strs) => {
  let res = "";
  // let smallestLen = "";
  // strs.forEach((item, i, arr) => {
  //   let next;
  //   if (i < arr.length) {
  //     next = arr[i + 1];
  //   }
  //   if (item.length < next?.length) {
  //     smallestLen = item;
  //   }
  // });
  // console.log(smallestLen);
  // strs.forEach((item, index, arr) => {
  //   const t = item.charAt("->", smallestLen);
  //   console.log("iii", t);
  // });
  strs.forEach((item, index, arr) => {
    //check if it is not the last element
    let next;
    if (index + 1 < arr.length) {
      next = arr[index + 1];
    }
    for (let i = 0; i < item.length; i++) {
      if (next) {
        if (item[i] === next[i]) {
          if (!res.charAt(item[i])) res += item[i];
        }
      }
    }
  });
  // for (let i = 0; i < strs.length;i++) {
  //   for (let j = 0;j<)
  // }

  console.log(res);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
