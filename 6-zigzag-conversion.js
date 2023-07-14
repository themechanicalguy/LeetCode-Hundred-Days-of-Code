/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (str, rows) {
  if (rows === 1) return str;
  const res = [];
  let s = 0;
  let i = 0;
  let j = 0;
  for (let i = 0; i < rows; i++) res.push([]);
  while (s < str.length) {
    while (j < rows && s < str.length) {
      res[j][i] = str[s++];
      i++;
      j++;
    }
    j = j - 1;
    i = i - 1;
    while (j > 0 && s < str.length) {
      j--;
      i++;
      res[j][i] = str[s++];
    }
    i++;
    j++;
  }

  let x = "";
  res.forEach((item) => {
    item.forEach((ele) => {
      if (ele) {
        x += ele;
      }
    });
  });

  return x;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let res = [];
  let count = 0;
  let up = true;
  for (let i = 0; i < s.length; i++) {
    if (!res[count]) res[count] = [];
    res[count].push(s[i]);

    count = up ? count + 1 : count - 1;

    if (count + 1 == numRows) up = false;
    else if (count == 0) up = true;
  }
  let result = "";
  for (let i of res) {
    result += i.join("");
  }
  return result;
};
