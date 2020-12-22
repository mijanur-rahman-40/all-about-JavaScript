//--------------------- Data Types -----------------------
let name = "Apple Orange";
let age = 22;
let skills = ['Java', 'Javascript', 'Angular'];

/*
Data types are given value :
Number,String,Boolean,Undefined,null,Array,Object,Function
*/

console.log(typeof name);
let something;  // here something is undefined cause we do not give any value initially.
let all = null; // here something is defined,we do not know what value is assigned in something
/*
Truthy value: it could be true value. Ex: let a = 23,'aa'
Falsy value: it could be false value. Ex: let a = 0,null,undefined,'',
 */
// Equality check
console.log(undefined === null); // check with the value and data types
console.log(100 == '100'); // check with the value

//------------------------ function -----------------------------
/*
* in javascript function can be variable, value, parameter,function can be returned from another function,function can be share
 */

//function declaration
function add(a, b) {
    return a + b;
}

//function expression
let sub = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
console.log(sub(1, 2));

//-------------------- callback ---------------------
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */
//callback is not a default function
//callback function as parameter with foreach method
let names = ['apple', 'orange', 'banana', 'flower', 'cricket'];
//here callback works : when each data comes from array,he decide what have to do
names.forEach(function (name) {
    console.log(name);
});

console.log('\n');
//also given by function reference
names.forEach(all_names);


function all_names(name) {
    let upper = name.toUpperCase()
    console.log(upper)
}

//another example for callback
//here we do not use hard code function,we use call back reference
function operation(a, b, callback) {
    let sum = a + b;
    let sub = a - b;
    callback(sum, sub);
    a = 3 + 2;
}

//abstract function 
function print(sum, sub) {
    console.log(sum, sub);
}

function multiply(sum, sub) {
    console.log(sum * sub);
}

operation(10, 5, print);
operation(10, 5, multiply);

//or
operation(10, 5, function (sum, sub) {
    console.log(sum, sub);
});
operation(10, 5, function (sum, sub) {
    console.log(sum * sub);
});
//another callback works like foreach but without foreach
let fruits = ['apple', 'orange', 'banana', 'flower', 'cricket'];

function traverse(fruits, callback) {
    for (let i = 0; i < fruits.length; i++) {
        callback(fruits[i]);
    }
}

traverse(fruits, function (fruit) {
    console.log(fruit.toUpperCase());
});

//---------------------------- object --------------------------//
/*
in javascript object means second bracket and array means third bracket
 */
let person = {};
person.name = 'Apple';
person.age = 22;
person.arr = ['JavaScript', 'Angular', 'Java'];
person.print = function () {
    console.log(this.name + ' ' + this.age + ' ' + this.arr);
};
let org = {
    name: 'aa',
    age: 22
};
person.name = 'Orange';
person.print();
console.log(person['name']);
//getting object properties
for (let i in person) {
    console.log(person[i]);
}

//object in array
let people = [
    {
        name: 'A',
        age: 22,
        skills: [1, 2, 3],
        show: function () {
            return 'are you ready?';
        },
    },
    {
        name: 'B',
        age: 30,
        skills: [4, 5, 6],
        show: function () {
            return 'i am ready';
        },
    }
];

people.forEach(function (person) {
    console.log(person);
});
people.forEach(function (person) {
    console.log(person.name);
});
people.forEach(function (person) {
    console.log(person.show());
});

