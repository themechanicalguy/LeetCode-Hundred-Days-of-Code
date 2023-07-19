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
  const funParameterLen = func.length;
  return function curried(...args) {
    const argsClone = [...args];
    const isPlaceHolder = argsClone.includes(curry.placeholder);

    if (args.length >= funParameterLen && !isPlaceHolder) {
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

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
const _ = curry.placeholder;

// curriedJoin(1, 2, 3); // '1_2_3'

// curriedJoin(_, 2)(1, 3); // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2); // '1_2_3'
