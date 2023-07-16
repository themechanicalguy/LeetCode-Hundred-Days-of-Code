/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX_INT = 2147483647;
  const MIN_INT = -2147483648;
  if (s.length === 1 && +s < MAX_INT) return +s;
  const x = s.trim().split(" ");
  for (let i = 0; i < x.length; i++) {
    if (+x[i]) {
      if (+x[i] > MIN_INT && +x[i] < MAX_INT) {
        return +x[i];
      } else if (+x[i] < MIN_INT) {
        return MIN_INT;
      } else if (+x[i] > MAX_INT) {
        return MAX_INT;
      }
    } else {
      return 0;
    }
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let oput = '';
    for(let i=0; i<s.length; i++) {
        if(parseInt(s[i]) != NaN) {
            oput += s[i]
        }
    }
    let res = parseInt(oput) ? parseInt(oput) : 0
    
    if(res > Math.pow(2, 31)-1) {
        return Math.pow(2, 31)-1;
    } else if(res < -1*Math.pow(2, 31)) {
        return -1*Math.pow(2, 31);
    } else {
        return res;
    }
};
console.log(myAtoi("21474836460"));