/**
 * The cost of stock on each day is given in an array A[] of size N. 
    Find all the segments of days on which you buy and sell the stock so that in between 
    those days your profit is maximum.

Note: Since there can be multiple solutions, the driver code will print 1 if your answer is correct, 
otherwise, it will return 0. 
In case there's no profit the driver code will print the string "No Profit" for a correct solution.

Example 1:

Input:
N = 7
A[] = {100,180,260,310,40,535,695}
Output:
1
Explanation:
One possible solution is (0 3) (4 6)
We can buy stock on day 0,
and sell it on 3rd day, which will 
give us maximum profit. Now, we buy 
stock on day 4 and sell it on day 6.
Example 2:

Input:
N = 5
A[] = {4,2,2,2,4}
Output:
1
Explanation:
There are multiple possible solutions.
one of them is (3 4)
We can buy stock on day 3,
and sell it on 4th day, which will 
give us maximum profit.

Your Task:
The task is to complete the function stockBuySell() which takes an array A[] and N as input parameters and finds the days of buying and selling stock. The function must return a 2D list of integers containing all the buy-sell pairs i.e. first value of pair will represent the day on which you buy the stock and second value represent the day on which you sell that stock. If there is No Profit, return an empty list.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)
 */

function stockBuySell(arr, n);
{
  //your code here
  let boughtIndex = 0; //
  let bought = arr[0]; //2
  let res = [];
  for (let i = 1; i < n; i++) {
    //1
    //buy the current stock if it is less then cheapPrice
    if (arr[i] > bought) {
      // 2 < 4 T
      res.push(boughtIndex, i);
      bought = arr[i]; //2
      boughtIndex = i; //1
      return 1;
    } else if (arr[i] < bought) {
      bought = arr[i];
      boughtIndex = i;
    }
  }
  return res;
}
