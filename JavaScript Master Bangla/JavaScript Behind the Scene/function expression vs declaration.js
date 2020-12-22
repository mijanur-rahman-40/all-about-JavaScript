/**
 * function expression and declaration are include into hoisting
 */

 //function expression

declaration();

function declaration() {
    console.log('I am callable from everywhere...');
}
 
declaration();

console.log('no 1 : ' + express);
//express();
/**
 * here express is a variable,as we know variable is stored in creational
 * phase undefined
 */
let express = function () {
    console.log('I am function expression...');
}

console.log('no 2 : ' + express);
express();