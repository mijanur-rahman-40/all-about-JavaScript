//when execution context is cerate then also create new scope.
/**
 * Lexical Scope Definition : 
 * A lexical scope in Javascript means that a variable defined 
 * outside a function can be accessible inside another function
 * defined after the variable declaration. But the opposite
 * is not true, the variables defined inside a function will
 * not be accessible outside that function.
 */

let a = 100;
console.log(a);
function A() {
    //console.log(a);
    //console.log(b);
    let a = 300;
    console.log(a);
    console.log(b);
    function B() {
        let b = 300;
        console.log(a);
        function C() {
            console.log(a);
        }
        C();
    }
    B();
}
//let b = 200;
A();