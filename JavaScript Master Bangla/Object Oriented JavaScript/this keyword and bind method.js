/***
 * this basically comes from object oriented paradise
 * In javaScript this both works with object oriented javScript and functional
 * programming.
 * actually this keyword related with object.
 *  */
let obj = {
    name: 'apple',
    print: function () {
        console.log(this);
    }
};

//this in the function basically means window object
function myFunc() {
    console.log(this);
}

myFunc();

function myFunction() {
    function inner() {
        console.log(this);
    }

    inner();
}

myFunction();

//this in the function with new keyword its an object.
function Function() {
    function Inner() {
        console.log(this);
    }

    new Inner();
}

Function();

//variance of this
let person = {
    name: 'apple',
    print: function () {
        //console.log(this);
        console.log('hello ' + this.name);
    }
};
person.print();
let name = person.name;
console.log(name);
console.log('1.....---------------------------');

//here myPrint is the print function
let myPrint = person.print;
console.log(myPrint);
myPrint();
console.log('2.....---------------------------');

//by this process to print the correct we have use bind() method
let my_print_bind = person.print.bind(person);
console.log(my_print_bind);
console.log('3.....---------------------------');

//here variable myPrint and my_print is the same,so there is no name value in that function

console.log('4.....---------------------------');
let my_print = function () {
    //console.log(this);
    console.log('hello ' + this.name);
};
console.log(my_print);

console.log('5.....---------------------------');
let my_Print = person.print();

// bind method : this method bind the object with non method function
function add(num) {
    return this.value + num;
}

console.log('6.....---------------------------');
let obj1 = {
    value: 10
};
let obj2 = {
    value: 50
};

let bindEd = add.bind(obj1);
let result = bindEd(40);
console.log(result);

function sub(num) {
    console.log(this);
    return this.value - num;
}

let ob = {
    value: 30
};
let bind = sub.bind(ob);
let res = bind(130);
console.log(res);
console.log('7.....---------------------------');

//this with setTimeout function
let people = {
    name: 'Apple',
    print: function () {
        //console.log(this);
        //let name = this.name;
        //this call back function refers to the window object
        /*
        setTimeout(function () {
            //console.log(this);
            //console.log('hello ' + this.name);
            console.log('hello ' + name);
        }, 2000);
         */
        //we can control this situation by bind method
        //here functional programing
        setTimeout(function () {
            console.log('hello ' + this.name);
        }.bind(this), 2000);
    }
};
/*
let value = people.print;
value();
*/
people.print();