/**
 * bind function bind the function and object and 
 * return new function
 */
function printMe() {
    //here this is global without bind combine 
    console.log('Hello ' + this.name);
}
let obj1 = {
    name: 'Apple',
    age : 22
}
let obj2 = {
    name: 'Orange',
    age : 44
}
//with bind function can not call directly
//console.log(printMe.bind(obj1));
let value = printMe.bind(obj1);
value();

//but call method can call directly with parameter
printMe.call(obj1);

function add(a,b) {
    return (a + b) * this.c;
}

let ob1 = {
    c : 3
}

let ob2 = {
    c: 5
}
//bind can not call directly with object parameter
let result1 = add.bind(ob1);
console.log(result1(10, 10));

//call freely work
let result2 = add.call(ob1, 10, 10);
console.log(result2);

//bur when we use apply ,we have to use array ti pass the object
let result3 = add.apply(ob2, [10, 10]);
console.log(result3)