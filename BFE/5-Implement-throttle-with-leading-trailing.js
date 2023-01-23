/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */

/*
    We implement throttle with {leading: true, trainling: true} by default, 
    throttle with {leading: true} will invoke the function immediately 
    and then it works in the same way as {leading: false, trailing: true}.
*/
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let readyToCall = true,
    lastArgs;

  return function throttled(...args) {
    if (readyToCall) {
      const context = this;

      if (option.leading) {
        func.apply(context, args);
      }

      function setTimer() {
        // so that other calls made during the wait time can't enter inside the if block
        readyToCall = false;

        setTimeout(() => {
          if (option.trailing && lastArgs) {
            func.apply(context, lastArgs);
            lastArgs = null;

            setTimer(); // to invoke the function with arguments of last call made during the wait time, this won't invoke the function if `lastArgs` is null
          } else {
            readyToCall = true;
          }
        }, wait);
      }

      setTimer();
    } else {
      lastArgs = args;
    }
  };
}
