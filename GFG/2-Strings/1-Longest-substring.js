// Longest Substring without repeating characters
/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

//Naive Approach - O(n3)
const subNoRepeat = (s) => {
  let subStr = "";
  let maxLen = "";
  for (let i of str) {
    const key = s[i];
    subStr = subStr.split(key);
    subStr = subStr[subStr.length - 1] + s[i];

    if (maxLen.length < subStr.length) {
      maxLen = subStr;
    }
  }
  return maxLen.length;
};

//Optimised Approach
const lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;
  let hashMap = new Map();
  let len = 0;
  while (right < s.length) {
    let key = s[right];
    if (hashMap.has(key)) left = Math.max(hashMap.get(key) + 1, left);
    hashMap.set(key, right);
    console.log(hashMap);
    len = Math.max(len, right - left + 1);
    right++;
  }

  return len;
};

lengthOfLongestSubstring("pwwkew");
