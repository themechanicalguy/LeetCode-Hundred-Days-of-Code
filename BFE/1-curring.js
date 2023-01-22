/*Problem Statement:
Write a curry function, which accepts a function
Returns a curried one

Algorithm:
1-Write a function declaration curry that takes a function func to be curried
2-Return curried function with all args — (...args)
    2.1- Check if args.length >= func.length
    2.2- If true call func with all args – func(...args)
    2.3- Else bind args to  curried function with this as null 
        and return it(i.e return curried.bind(null, …args))
*/

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(func) {
  return function curried(...args) {
    // 1. if enough args, call func
    // 2. if not enough, bind the args and wait for the new one
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return curried.bind(null, ...args);
    }
  };
}
