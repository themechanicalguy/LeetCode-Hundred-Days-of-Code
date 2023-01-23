/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

/**
 * Algorithm
    With Arguments:

    Create a function throttle,  that takes a function func and interval as arguments.
    Create a variable shouldTrigger, and initialize it as true.
    Create a variable called lastArgs
    Return anonymous function
      Check if shouldTrigger is true
        Call the func
        Set shouldTrigger as false
        Set a setTimeout function with interval and inside callback function make 
            shouldTrigger as true and If lastArgs is not empty call func with lastArgs
      Else
        Store arguments in lastArgs( we need to store lastArgs because, when time
           is up, shouldTrigger is still false. And we don’t want to miss this last arguments) – doubt
    
 
 */

function throttle(func, wait) {
  let trigger = true;
  let lastArg;
  return function () {
    //initial run
    if (trigger) {
      func(...arguments);
      trigger = false;

      setTimeout(() => {
        //when wait time's up
        trigger = true;
        if (lastArg) {
          //if there's any run left, run it
          func(...lastArg);
        }
      }, wait);
    } else {
      // we need to store the last args because when time's up,
      // cooling flag is still false, and we don't want miss this last args
      lastArg = [...arguments];
    }
  };
}
