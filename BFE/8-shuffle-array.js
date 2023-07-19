let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

function shuffleArr(array) {
  array.sort(() => Math.random() - 0.5);
}
function shuffle(arr) {
  // modify the arr inline to change the order randomly
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
