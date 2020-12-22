//functional programming means all about function

/**
 * Imperative Programming
 */
let name = 'Apple';
let greet = 'Hello';
console.log(greet + ',' + name);

/**
 * Declarative programming ---> (used in functional programming).
 * it is separate from full another programme.
 * it is not related other programme.
 * it does not harm any single programme
 */

function greetings(name,greet) {
    return name + ' ' + greet;
};
console.log(greetings('Apple', 'Hello'));
/**
 * KISS --> Keep It Simple,Stupid(this is theory)
 */

/**
 * Functional Programming has some Buzz Word
 * Buzz word -->Buzzword definition is - an important-sounding usually technical
 * word or phrase often of little meaning used chiefly to impress laymen.
 * Buzz Word ::
 * (1)Pure function : does not depend another function,always one
                    * input one output (like one to one)
 * (2)Function composition : like gof fog
                           * Example : 
                           * input x = 3,f(x) = x^2,output f(x) = 9,then 9 would be the input of nex function
                           * now input x = 9,f(x) = x + 1,output f(x) = 10
 * (3)Shared State : does not share any data or state with other
 * (4)Mutable Data : passed letiable data can be changed in function scope
 * (5)Side Effect : no side effect on another function or anything
 */

/* -------------------------- First Class Function -------------------------- */
/**
 * A function could be first class function if it follows the belows topics :
 * (1) A function can be stored in a letiable.
 * (2) A function can be stored in an array.
 * (3) A function can be stored as an Object field or Property.
 * (4) We can create function as needed.
 * (5) We can pass function as an arguments.
 * (6) We can return function from another function.
 */
function sayName(name) {
    return 'Hello' + ' ' + name;
}

 /**
  * (1)
  */

let hello = sayName;
let fun = sayName();

console.log(hello); //there is no function call just reference set.
console.log(fun);

//function calling by letiable and also stored in letiable.
let result = hello('Apple');
console.log(result);
let anotherHello = hello;
console.log(anotherHello('Apple'));

/**
 * (2)
 */

//function include into array
let arr = [1, 2, 3, anotherHello];
//or
arr.push(sayName);
console.log(arr);

/**
 * (3)
 */

let person = {
    name: 'Orange',
    sayNme: sayName,
    sayName: hello,
    print:function () {
        console.log('Hi');
    }
}
console.log(person);

/**
 * (4)
 */

//self invoking function : closed with function parameter itself(closed with first bracket)
//self executing function
//inline function
let sum = 10 + (function () { return 10 })();
console.log(sum);

/**
 * (5)
 */

function wow(name, fun) {
    return fun(name);
}
//passing function as parameter
let res = wow('Apple', sayName);
console.log(res);

/**
 * (6)
 */

function base(b) {
    return function (n) {
        let result = 1;
        for (let i = 0; i < b; i++){
            result *= n;
        }
        return result;
     }
}
let power = base(2);
console.log(power);
let result1 = power(10);
console.log(result1);   
//another process to access the method
let result2 = base(2)(5);
console.log(result2); 










