var reverse = function (num) {
  const splitted = num.toString().split("");
  let res = "";
  if (splitted[0] === "-") res = "-";
  for (let i = splitted.length - 1; i >= 0; i--) {
    if (splitted[i] === "-") continue;
    res += splitted[i];
  }
  if (+res > Math.pow(2, 31) - 1 || +res < Math.pow(-2, 31)) return 0;
  return +res;
};
console.log(reverse(1230));
