function decode(message) {
  //edge cases
  if (message.length === 0) return "";
  if (message[0].length === 0) return "";

  //length of rows and columns
  let rows = message.length;
  let cols = message[0].length;

  //result array to store message
  let result = "";

  //movement in Y direction
  let moveY = 1;

  //starting row and col from 0
  let row = 0,
    col = 0;

  while (col < cols) {
    result += message[row][col];
    //moving cols ahead
    col += 1;
    //increasing rows in y direction
    row += moveY;

    if (row > rows - 1) {
      //make moveY -1 so that row - moveY proceeds in upward direction
      moveY = -1;
      //as row would have increased to beyond
      row -= 2;
    }
    //if rows become less than 0
    if (row < 0) {
      //move Y downwards
      moveY = 1;
      //increase row count with 2
      row += 2;
    }
  }
  return result;
}

let res = decode([
  ["I", "B", "C", "A", "L"],
  ["D", "R", "F", "C", "A"],
  ["G", "H", "O", "E", "L"],
]);

console.log(res);
