/**
 * When variable object create : 
 * 1. The argument object is created.
 * 2. Code is scanned for variable declaration.
 * 3. Code is scanned for function declaration.
 */
/**
 * The way javascript engine declare and define.
 * variables and function is totally different. 
 */
/**
 * 1. It store empty variable and initialize it with undefined.
 * and store function reference.That's why we can call initially
 */

 /**
  * Hoisting means they are available before executing starts.
  */
console.log(x);
//here x is undefined because x variable is include but value is not define
let x = 10;

print('Apple');
function print(name) {
  console.log(name);
}
print('Orange');