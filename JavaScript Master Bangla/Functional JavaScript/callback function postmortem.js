//simple hard code function
function hello(name) {
    print(name);
    print('Something else')
}

//we can not do nothing else by the print function
function print(args) {
    console.log(args);
}

hello('Twinkle cats');

//simple callback ,called as function argument
//constant part
function motor(name, callback) {
    callback(name);
}

motor('Apple', motor_name);

function motor_name(args) {
    console.log(args);
}

//call back dynamic part
//by anonymous function we can change arbitrary in the function
motor('apple', function (name) {
    console.log('Hello ' + name);
});
motor('apple', function (name) {
    console.log('Hello , how are you ' + name + '?');
});
motor('Twinkle cats', function (name) {
    console.log('Length of ' + name + ' is = ' + name.length);
});


//another example
let me = {
    name: 'Apple',
    age: 22,
    email: 'apple@email.com'
};

function printMyself(person, callback) {
    console.log('Person : ' + person.name + ' (' + person.age + ')');
    if (person.age > 18) {
        callback(person.email);
    } else {
        console.log('You are to little......');
    }
}

printMyself(me, function (email) {
    console.log('Email sent to  ' + email);
});

//another example with double call back
function double_callback(data, callback1, callback2) {
    console.log('Original data : ' + data);
    callback1(data);
    callback2(data);
}

double_callback('Twinkle cats is awesome for beginners.', function (data) {
    let value = data.toUpperCase();
    console.log('Uppercase : ' + value);
}, function (data) {
    let value = data.toLowerCase();
    console.log('Uppercase : ' + value);
});

