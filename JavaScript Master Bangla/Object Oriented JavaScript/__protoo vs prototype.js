//create object with constructor pattern
function Obj1(a,b) {
    this.a = a;
    this.b = b;
    console.log(b);
}

function Obj2(a, b, c) {
    Obj1.call(this, a, b);
    this.c = c; 
}
Obj2.prototype = Object.create(Obj1.prototype);

function Obj3() {
    Obj2.call(this, 30, 40, 50);
}
Obj3.prototype = Object.create(Obj2.prototype);
Obj1.prototype = {};
Obj1.prototype = {};
// __protoo is the reference of another object(from inheritances)
//let obj1 = new Obj1(1, 2);
let obj2 = new Obj2(1, 2, 3);
console.log(obj2.a);
let obj3 = new Obj3();
console.log(obj3.c);
//for making chain basically use __protoo