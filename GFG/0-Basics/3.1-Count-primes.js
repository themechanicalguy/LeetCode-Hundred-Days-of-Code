/*
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 Input: n = 10
 Output: 4
 Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 Example 2:

 Input: n = 0
 Output: 0
 Example 3:

 Input: n = 1
 Output: 0
 */

//navie approach

function isPrime(n) {
  // 0,1 are not Prime numbers
  // smallest prime number is 2
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrime(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      ++count;
    }
  }
  return count;
}

//Approach 2 -square root approach

function isPrime1(n) {
  // 0,1 are not Prime numbers
  // smallest prime number is 2
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrime1(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      ++count;
    }
  }
  return count;
}

//Sieve of Eratosthenes Theorem
function SieveOfEratosthenes(n) {
  if (n === 0) return 0;
  let prime = new Array(n);
  prime.fill(true);
  prime[0] = false;
  // console.log(prime);
  let count = 0;

  for (let i = 2; i < n; i++) {
    //10
    if (prime[i]) {
      //true
      console.log(i); //7
      count++; //4
      let j = 2 * i; //14
      while (j < n) {
        //T
        prime[j] = false;
        j = j + i; //9
      }
    }
  }
  return count;
}

SieveOfEratosthenes(10);
