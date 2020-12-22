console.log(this);
//when this called from window object the it is always window object.
function A() {
    console.log(this);
}
A();

//when this keyword is called from object then it point to the object.

let obj = {
    name: 'apple',
    print: function () {
        console.log('hello ' + this.name);
        console.log(this);
        //here function create a new scope,that's why this is window object
        function another() {
            console.log(this);
        }
        another();
    }
}
//obj.print();

//when function is called then this is initialized.

let Person = {
    name : 'Orange'
}

//copy function reference into Person 
Person.print = obj.print;
//then call
Person.print()