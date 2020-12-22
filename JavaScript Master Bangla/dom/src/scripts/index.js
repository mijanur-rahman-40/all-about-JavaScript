import '../styles/index.scss';

/***
 * BASIC SELECTORS
 * @type {HTMLElement}
 */
//getting id of h1
let h1 = document.getElementById('my-h1');
//h1.innerText = 'apple';
//or
h1.innerHTML = 'Apple';
console.log(h1);

let headers = document.getElementsByTagName('h1');
console.log(headers);

//here does not work foreach
let paras = document.getElementsByClassName('lead');
console.log(paras);


/*
let colors = ['red', 'green', 'yellow', 'blue'];
let i = 0;
let button = document.getElementById('btn-check');
button.addEventListener('click', function () {
    //alert("It is working");
    let h1 = document.getElementById('my-h1');
    h1.innerHTML = 'This is new text';
    h1.style.background = colors[i];

    if (i >= colors.length) {
        i = 0;
    } else {
        i++;
    }
});
*/
/**
 * The same thing is done by querySelector method
 */


/*
let colors = ['red', 'green', 'yellow', 'blue'];
let i = 0;
let button = document.querySelector('#btn-check');
button.addEventListener('click', function () {
    //alert("It is working");
    let h1 = document.querySelector('#my-h1');
    h1.innerHTML = 'This is new text';
    h1.style.background = colors[i];

    if (i >= colors.length) {
        i = 0;
    } else {
        i++;
    }
});
 */

let colors = ['red', 'green', 'yellow', 'blue'];
let i = 0;
let button = $('#btn-check');
console.log(button.style);
button.addEventListener('click', function () {
    //alert("It is working");
    let h1 = $('#my-h1');
    h1.innerHTML = 'This is new text';
    h1.style.background = colors[i];

    if (i >= colors.length) {
        i = 0;
    } else {
        i++;
    }
});

//but to short the code we use function
function $(selector) {
    return document.querySelector(selector);
}


//let container = document.querySelector('.container');
//let container = document.querySelector('div');

//this return array like data structure
//let container = document.querySelectorAll('div');

//let container = document.querySelectorAll('h1');
let container = document.querySelector('#my-h1_3');
//console.log(container);
/**
 * Working with CSS in JS
 */
// container.style.background = 'green';
// container.style.fontsize = '50px';
// container.style.fontFamily = 'Ubuntu';
// container.style.padding = '10px';

//this is boring for writing every time style and variable name

//so we create object
let h1styles = {
    background: 'blue',
    fontsize: '20px',
    fontFamily: 'Ubuntu',
    padding: '10px',
    color: '#222'
};
//to access the value
Object.assign(container.style, h1styles);
let pStyle = {
    padding: '10px',
    fontsize: '15px',
    color: '#222908',
    fontFamily: 'Ubuntu',
    lineHeight: '1.3'
};
//let p = $('#my-para');
//Object.assign(p.style, pStyle);

//we can easily can short
Object.assign($('#my-para').style, pStyle);



/**
 * EVENT LISTENER
 */

let btn = document.querySelector('#btn');
let para = document.querySelector('#para');


let isShow = false;
btn.addEventListener('click', function () {
    if (isShow) {
        para.style.visibility = 'hidden';
        isShow = false;
        btn.innerHTML = 'SHOW';
    } else {
        para.style.visibility = 'visible';
        isShow = true;
        btn.innerHTML = 'HIDE';
    }
});

/***
 * DOM CREATING
 */

let root = document.querySelector('#root');
// createElement create html element in the html class from javaScript
let jumbotronDiv = document.createElement('div');
//console.dir(jumbotronDiv);
//console.log(jumbotronDiv);
//jumbotronDiv.classList.add('jumbotron');
//or
jumbotronDiv.className = 'jumbotron text-center';
jumbotronDiv.setAttribute('id','my-jmb');
//add jumbotron to html file by child process
root.appendChild(jumbotronDiv);

//to show how many child in root
//console.log(root.children);

//to add new element in jumbotron
let new_h1 = document.createElement('h1');
new_h1.className = 'display-2 py-5';


//you can use innerHtml or innerText
//innerText : you can use only text.
//innerHtml : both can use text and any extra html tag into the original tag


new_h1.innerHTML = 'PROGRAMMING IS BORING';
//new_h1.innerHTML = '<strong>PROGRAMMING IS BORING</strong>';
jumbotronDiv.appendChild(new_h1);


//input field
let nameField = document.querySelector('#nameField');
let ul = document.querySelector('#nameList');
nameField.addEventListener('keypress',function (event) {
 //console.log(event);
    //here key code 13 means enter button
    if (event.keyCode === 13){
        let name = event.target.value;
        //console.log(name);
        //ul.appendChild(createLi(name));
        createLi(ul, name);
        event.target.value = "";
    }
});

function createLi(ul,name) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex';
    li.innerHTML = name;

    //to add cross button
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.style.cursor = 'pointer';

    span.addEventListener('click', function () {
        //alert("i have Clicked");
        ul.removeChild(li);
    });
    li.appendChild(span);

    ul.appendChild(li);
}