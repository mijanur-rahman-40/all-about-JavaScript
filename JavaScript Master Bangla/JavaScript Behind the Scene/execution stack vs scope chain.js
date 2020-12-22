//scope chain
//here chain create down to up
let a = 10;
A();
function A() {
    let b = 5;
    B()
    function B() {
        let c = 15;
        C(b,c);
    }
}
function C(b,c) {
    let d = 20;
    console.log(a + b + c + d);
}

/**
 * Execution stack and scope chain are totally different,scope chain followed
 * by order but function can call from anywhere that is execution.
 * Execution stack : which function is called one after another function
 * Scope chain : which order is followed in the code.
 */

/**
 * Execution Stack Schedules
 * (1) Execution Stack for C
 * (2) Execution Stack for B
 * (3) Execution Stack for A
 * (4) Execution Stack 
 */