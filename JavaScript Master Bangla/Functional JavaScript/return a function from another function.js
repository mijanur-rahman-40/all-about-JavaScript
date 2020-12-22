function host() {
    console.log('I am host function');
    return function () {
        console.log('I am child')
    }
    /*
    function child() {
        console.log('I am child')
    }
    return child;
     */
}

let a = host();
a();

//another example

function greeting(message) {
    return function (name) {
        console.log(message + ' ' + name);
    }
}
//or same output with another process
function greeting(message) {
    function ret(name) {
        console.log(message + ' ' + name);
    }
    return ret;
}
let good = greeting('Good morning');
let hello = greeting('hello');

hello('Twinkle cats');
good('Twinkle cats');