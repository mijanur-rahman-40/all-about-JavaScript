let obj = {};
let ob = new Object;
console.log(obj);
console.log(ob);

// simple object
// each object has a key value pair
let book = {
    name: 'Functional JavaScript',
    author: 'Micbael Forgus',
    publisher: 'O\'Reilly',
    page: 250,
    print: function ()
    {
        console.log(this.name, this.author);
    }
};
console.log(book);
book.print();

// get the value of a object
console.log('Book name ' + book.name);
console.log('Author name ' + book['author']);


// adding new object properties
console.log('Published Year ' + book.publishedYear);

// properly add
book.publishedYear = 2019;
console.log('Published Year ' + book.publishedYear);
book['price'] = 450;
console.log("price : " + book.price);

// traverse the full object properties with for in loop
for (let props in book) {
    console.log(props + ' =' + book[props]);
}

// add new object element/items in run time
let user = {
    name: 'apple',
    age : 23
}
let value = 4;
if (value === 5) {
    user.isImage = false;
} else {
    user.isImage = true;
}
console.log(user.isImage);




