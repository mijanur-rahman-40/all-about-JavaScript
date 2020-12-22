//this is static object but we need dynamic object
let books = [
    {
        name: 'Functional javaScript'
    },
    {
        name: 'JavaScript Definitive Guide'
    }
];

//for dynamic data object ,we have to use javaScript class.
/*
1. basically javaScript all over with function.
2. most of the work is done by function.
3. javaScript function is object with constructor pattern.
*/

//create person class with the constructor pattern
function Person (name,email) {
    //console.log('I have constructed.........')
    //by new keyword we think that here create object like: let obj = {name:}
    //by this keyword we can access object properties from the outdoor
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log('Name : ' + this.name);
    }
}

//create class object and call class with new keyword
//let p1 = Person('Apple','a@gmail.com');
let name = 'Apple';
let p1 = new Person(name, 'a@gmail.com');
let p2 = new Person('orange', 'orange@gmail.com');
let p3 = new Person('banana', 'banana@gmail.com');
/**
 * here Person is the object name
 * Person { name: 'Apple', email: 'a@gmail.com' }
 */
console.log(p1);
console.log(p1.name);
console.log(p1.email);


let people = [p1, p2, p3];
console.log(people);

people.forEach(function(person){
    console.log('email : ' + person.email);
    person.print();
});

for (let property in p1) {
    console.log('Properties : '+ property);
}


//create another class
function Book(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;
}
 
let book = new Book('Functional JavaScript', 'Apple', 23);
console.log(book.constructor);
