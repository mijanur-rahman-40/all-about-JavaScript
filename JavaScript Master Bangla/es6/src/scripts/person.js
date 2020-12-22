
/**
 * if you want to export then simply write export Person
 * But we use default export
 */

class Person{
     //you can not declare any variable in the class
    //but you can implement constructor and method
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    
    print() {
        console.log(`Name : ${this.name}, Email : ${this.email}`);       
    }
}
 
export default Person;


 

