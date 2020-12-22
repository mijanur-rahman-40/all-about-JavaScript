//inner function or nested function
/**
 * When a function is declare into another function then it is called 
 * nested function. 
 */

 // here outer function is a global function because it is outer from 
 // everything
function outer() {
    let b = 10;
    function inner() {
        //b
        let a = 10;
        console.log('I am inner function');
    }
    //a
    inner();
    console.log('I am outer function');
}
//inner()
outer(); 

/**
 *example of this topic
 */
//by using this inner function we can easily user outer function
 function calculate(a, b) {
     function sum() {
         return a + b;
     }
     function sub() {
         return a - b;
     }
     function times() {
         return a * b;
     }
     function div() {
         return a / b;
     }
     return sum() + sub() + times() + div();
 }
let result = calculate(10, 5);
console.log(result);


