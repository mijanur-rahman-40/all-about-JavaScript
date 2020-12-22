/**
 * Closure : in function, if we use such type/kind of data/variable those are
 * out of that function scope then it is called closure.
 * Basically data are come from out of function.
 * javascript scope is around the function bracket scope
 */

//simple closure
let name = 'Apple';

function sayName() {
    console.log('Hello ' + name);
}

//console.dir(sayName);
sayName();

function greeting(message) {
    function ret(name) {
        console.log(message + ' ' + name);
    }
    return ret;
}
let good = greeting('Good morning');
good('Twinkle cats');