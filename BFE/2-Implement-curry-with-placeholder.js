/*

Algorithm:
Write a function declaration curry that takes function func as argument
Create a variable fnArgsLen to store the length of func arguments length
Return curried function that takes all args as argument
  Create a variable to argsClone and clone the args using slice()
  Create a variable isPlaceHolder to check if cloneArgs has curry.placeholder
  Check if args length >= fnArgsLen and doesn’t have placeholder
  Return func with all argos.  i.e return func(...args)
  Else return anonymous function with nextArgs
    Create a variable processArgs  
    processArgs = map the args 
      check if arg === curry.placeholder && nextArgs.length < args.length
        Skip the element and return the next element(i.e nextArgs.shift)
      Else return arg
    Create an array mergedArray and merge processArgs and nextArgs
    Return curried func with mergedArray as arguments

*/

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(func) {
  const fnArgsLen = func.length;
  return function curried(...args) {
    const argsClone = args.slice(0, fnArgsLen);
    const isPlaceHolder = argsClone.includes(curry.placeholder);

    if (args.length >= fnArgsLen && !isPlaceHolder) {
      return func(...args);
    }
    return function (...nextArgs) {
      const processArgs = args.map((arg) =>
        arg === curry.placeholder && nextArgs.length < args.length
          ? nextArgs.shift()
          : arg
      );
      const mergedArr = [...processArgs, ...nextArgs];
      return curried(...mergedArr);
    };
  };
}
