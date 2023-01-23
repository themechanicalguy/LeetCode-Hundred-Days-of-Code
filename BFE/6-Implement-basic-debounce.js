/**
Algorithm:
  Create a function debounce that takes a func and delay as arguments
  Create a timer variable outside the return function(closure)
  Return an anonymous function that takes all argument
    Create a variable context and copy ‘this’ context outside setTimeout
    Call clearTimeout(timer) - clearing the timer before calling setTimeout, so that we don’t create multiple timer instance.
    Call setTimeout() with delay, assign it to timer.
      Inside setTimeout call handler function func and pass context object and arguments to it.
 */

// This is a JavaScript coding problem from BFE.dev

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  // your code here
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), wait);
  };
}
