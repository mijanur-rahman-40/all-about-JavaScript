/**
 * Higher order function is a function which parameter or argument
 * can be a function pass
 */
/**
 * when a function return another function then it also called higher
 * order function
 */

let num_arr = [4, 5, 6, 0, 67, 8];
/**
 * anonymous function is a function which there is no name, just calling
 * with function keyword
 */
//with anonymous function
num_arr.forEach(function (a) {
    console.log(a);
});
//or
//with call back function
function callback(a) {
    console.log(a);
}

num_arr.forEach(callback);

//return function
function caller() {
    return function (name) {
        return 'Caller calling you ' + name;
    }
}

let x = caller();
var y = x('Apple');
console.log(y);
//another process to call the function
let a = caller()('Apple');
console.log(a);

