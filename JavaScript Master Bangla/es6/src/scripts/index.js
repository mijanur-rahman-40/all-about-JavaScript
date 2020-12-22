console.log("HHH");
const a = 10;
const sum = (a, b) => a + b;
console.log(sum(1, 2));

/**
 * Let VS Const VS Var
 */

//<------------------ CONST ------------------>
const x = 25;
//const can not be changed
//x = 34;
console.log(x);

//push data into array with const
const arr = [];
arr.push(10);
arr.push(14);
//arr = []
console.log(arr);

//<------------------ VAR LET------------------>
var p = 10;
if (true) {
    var p = 20;
    console.log(p);
}
console.log(p);
//here we see that p value is changed into if scope,but we do not want it
//for this reason we have to use let
let q = 10;

if (true) {
    let q = 20;
    console.log(q);
}
console.log(q);

/**
 * let : block level declaration
 */
//another example with same category
function demo()
{
    {
        let x = 10;
        {
            const x = 15;
            console.log(x);
            //x = 24;
        }
        x = 50;
        console.log(x);
    }
    //console.log(x);
}

demo();

/**
 * Template String : a process of declaring string.
 */

const name = "Apple";
const age = 22;
const email = "apple@gmail.com";

const details = "Name : " + name + " Age : " + age + " Email : " + email;
//but it is not more efficient and now we use template string
//es6
const detail = `
     Name : ${name };
     Age : ${age };
     Email : ${email };
`;
console.log(details);
console.log(detail);

/**
 * ARROW FUNCTION : a shortcut method for function declaration
 *
 */

//basic types of function
const print1 = function ()
{
    console.log("t");
};

function print2()
{
    console.log("t");
}

//if don't have any parameter
const print3 = () =>
{
    console.log("t");
};
//es6
//if have one parameter
const print4 = name =>
{
    console.log("t " + name);
};
//or
//es6 also we can write this way also
const print5 = name =>
{
    console.log("t " + name);
};
// more simplify
const print6 = name => console.log("t " + name);
// es6
const addMe = (a, b) =>
{
    return a + b;
};
// es6
// if function return one line then can write like before
const subMe = (a, b) => a - b;
//if have one parameter
const sqr = x => x * x;

let simple = a => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10
print1();
print2();
print3();
print4("apple");
print5("apple");
print6("apple");
console.log(addMe(5, 2));
console.log(subMe(5, 2));
console.log(sqr(5));

/**
 * Lexical This_Problem with this
 */
const obj1 = {
    name: "Apple",
    print: function ()
    {
        setTimeout(
            function ()
            {
                console.log(this);
                //if we want to get the reference of obj by this from
                //the print function we use bind method
            }.bind(this),
            1000
        );
    }
};
obj1.print();

//this is undefined
const obj2 = {
    name: "Apple",
    print: function ()
    {
        setTimeout(function ()
        {
            console.log(this.name);
        }, 1000);
    }
};
obj2.print();

//this is write
const obj3 = {
    name: "Apple",
    print: function ()
    {
        setTimeout(
            function ()
            {
                console.log(this.name);
            }.bind(this),
            1000
        );
    }
};
obj3.print();

//same thing is done by arrow function
//es6
const obj4 = {
    name: "Apple",
    print: function ()
    {
        setTimeout(() =>
        {
            console.log(this);
        }, 1000);
    }
};
obj4.print();

/**
 * Enhance Object_New Object Syntax
 */

let habit = "apple";
let eam = "apple@gmail.com";

const Cat = {
    habit,
    eam,
    print()
    {
        console.log(this.habit, this.eam);
    }
};

Cat.print();

/**
 * Destructuring Array and Object
 */

//Destructuring means to destructuring a structure
//basically it converts array elements into variables
//object properties convert into variables

//de-structure an array
const number = [1, 2, 3];

let s = number[0];
let h = number[2];

//but same thing is done by destructuring
let [c, d, e] = number;
console.log(c);

//de structure an object
const website = {
    egg: "one",
    meat: "two"
};
//variable name always be same with the objects name
let { protein1, protein2 } = website;

console.log(protein2);

const animal = {
    pot: "apple",
    pat: "apple@gmail.com"
};
/*
let pot = animal.pot;
let pat = animal.pat;
*/
//this same thing is done by de-structure
let { pat, pot } = animal;
console.log(pot, pat);

//but maintain parameter order in function using
function favorite(pat, pot)
{
    console.log(`Hello ${ pat } Pot: ${ pot }`);
}

favorite(pat, pot);

//but when i change order parameter it does not work properly
function favorite2(pat, pot)
{
    console.log(`Hello ${ pat } Pot: ${ pot }`);
}

favorite2(pot, pat);

//but you can fix the issue
//so when we pass the parameter we passed the variables as objects
function favorite3({ pat, pot })
{
    console.log(`Hello ${ pat } Pot: ${ pot }`);
}

favorite3({ pot, pat });

//can be done by another
function favorite4({ pat: pat, pot: pot })
{
    console.log(`Hello ${ pat } Pot: ${ pot }`);
}

favorite4({ pot, pat });

/**
 * Default parameter,Rest and Spread Operator
 */

let add = (a, b) => a + b;
console.log(add(10));

let sqr_ = (a, b = 1) => a * b;
console.log(sqr_(10));

let _sqr = (a = 1, b = a) => a * b;
console.log(_sqr(10, 5));

//rest and spread operator basically means three dots
//rest operator(number to array)
function sub(...num)
{
    //here num is an array
    console.log(num);
    return num.reduce((a, b) => a - b);
}

console.log(sub(10, 20, 30, 40, 50));

//spread operator(array to number)
let number_array = [1, 2, 3, 4, 5, 6];
console.log(number_array);
console.log(...number_array);

//to add new element in the number_array
number_array = [...number_array, 12, 45, 56];
console.log(...number_array);

/**
 * to support this have to install new package
 * npm install --save-dev @babel/plugin-syntax-object-rest-spread
 * {
  "plugins": ["@babel/plugin-syntax-object-rest-spread"]
}

 */

let tree1 = {
    name: "apple",
    email: "apple@gmail.com"
};
//here object converted into variables
let tree2 = {
    ...tree1,
    //add new object element
    name: "orange",
    age: 22
};
console.log(tree2);

/**
 * Module System in Details
 * Writing code in separate file and then join those files
 */
//here object return from another file

import * as math from "./math";

console.log(math);
console.log("the sum is : " + math.add(1, 2));

//but if i need some specific function
import { mod, div } from "./math";

console.log(mod(5, 4));

//if you want to import function
import Person from "./person";

let p1 = new Person("apple", "apple@gmail.com");
console.log(p1.getName);
console.log(p1.print());

/*

 var Employee = {
     firstname: "John",
     lastname: "Doe"
 }

 console.log(Employee.firstname);
 // expected output: "John"

 delete Employee.firstname;

 console.log(Employee.firstname);
 // expected output: undefined
 */

/**
 * Inheritance
 */

import Student from "./student";

let st1 = new Student("orange", "orange@gmail.com", 3);
console.log(st1.welcome());

/**
 * Promises : It is an technique or build in object.
 *it works instead of callback but when a lot of callback function
 create chain largely so to maintain those task uses promises.
 */
//for clean code create we use promises

console.log("Hello");
setTimeout(() =>
{
    console.log("I am in timer");
}, 3000);

console.log("I am third");

setTimeout(() =>
{
    console.log("I am fourth");
}, 100);

//now we use promise to handle
//in the promise we pass callback function that called arrow function
// in the es6

let myFirstPromises = new Promise((resolve, reject) =>
{
    let name = "I am in dhaka";
    setTimeout(() => resolve(name), 4000);
});
myFirstPromises.then(name =>
{
    console.log("We are " + name);
});

//to fetch data from website by promises
//let data = fetch('https://jsonplaceholder.typicode.com/users');
fetch("https://jsonplaceholder.typicode.com/users")
    //here then method get a response parameter an d return
    .then(response =>
    {
        //console.log(response);
        //to get promises we use json function
        // console.log(response.json());
        return response.json();
    })
    //when first then return a promises then we can chain with another then to get the sub data
    .then(body =>
    {
        console.log(body);
        //to get the specific data from array object
        /*
             body.map(data => {
                 console.log(data);
                 console.log(data.name);
             })
             */
        //passing data into index.html
        const list = body.map(data =>
        {
            let li = document.createElement("h4");

            //getting name and email data
            let text = `Name ${ data.name }, Email: ${ data.email }`;

            let textNode = document.createTextNode(text);
            li.append(textNode);
            return li;
        });
        list.forEach(li =>
        {
            document.getElementById("my_list").appendChild(li);
        });
    })
    .catch(error =>
    {
        console.log(error);
    });

//but we can easily fetch api by  XMLHttpRequest
