/**
 Given a array of N strings, find the longest common prefix among all strings present in the array.


Example 1:

Input:
N = 4
arr[] = {geeksforgeeks, geeks, geek,
         geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.
 */

longestCommonPrefix(arr, n){ 
    let longestPrefix = arr[0];
    for(let i=1; i<arr.length; i++){
      let temp = '';
      let j = 0;
      while(j < arr[i].length){
        if(longestPrefix[j] !== arr[i][j ]) {
          break;
        } else {
          temp = temp + arr[i][j];
          j++;
          
        }
      }
      longestPrefix = temp;
      
     
    }
    if(longestPrefix === ''){
          return -1
      }else{
          return longestPrefix;
      }
    
    }