/*
import '../styles/index.scss';
import '../styles/style.css';
*/
/**
 * Run this code with node index.js
 * @type {module:fs}
 */
//you have to install fs(file-system) and faker in this project
let fs = require('fs');
let faker = require('faker');

let peoples = [];
for (let i = 0; i < 10; i++) {
    //now create object
    let people = {};
    //by this process faker create a random name
    people.name = faker.name.findName();
    people.email = faker.internet.email();
    people.address = {
        city: faker.address.city(),
        country: faker.address.country(),
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
    };
    peoples.push(people);
}
console.log(peoples);
//to convert javaScript object into json format
console.log(JSON.stringify(peoples));
//to create json file with those values
/*
fs.writeFile("demo.json",JSON.stringify(peoples),function (error) {
    console.log("File created SUCCESSFULLY");
    console.log(error);
});
*/
//from the json buffer we convert into the data into string
let data = fs.readFileSync('demo.json').toString();
console.log(data);
//Converts a JavaScript Object Notation (JSON) string into an object.
data = JSON.parse(data);
console.log(data);
data.forEach(function (item) {
   console.log(item.name,item.email);
});

/*
const locale_faker = require('faker/locale/en_BORK');

let firstName = locale_faker.name.firstName();
let lastName = locale_faker.name.lastName();

console.log(`Name: ${firstName} ${lastName}`);

let month = locale_faker.date.month();
let recentDate = locale_faker.date.recent();
let recentWeekDate = locale_faker.date.weekday();

console.log(month);
console.log(recentDate);
console.log(recentWeekDate);

 */