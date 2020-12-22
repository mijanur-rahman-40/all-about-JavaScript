import '../styles/index.scss';
import '../styles/style.css';
import Axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users';
let button = document.querySelector('#loadData');
let p = document.querySelector('#output');

// button.addEventListener('click', function () {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         //console.log(xhr.response);
//         p.innerHTML = xhr.response;
//     };

//     xhr.open('GET', URL);
//     xhr.send();
// });

button.addEventListener('click', function () {
    
    // fetch(URL)
    //     .then(res => res.json())
    //     //.then(resource => console.log(resource.json()))
    //     .then(data =>{
    //         //console.log(data);
    //         data.forEach((user)=> {
    //             p.innerHTML = `${p.innerHTML} <br> Name : ${user.name}`;
    //         });
    //     })
    //     .catch(error => console.log(error));
     
    //if we do the same work with the axios then
    Axios.get(URL)
        .then(response => {
            response.data.forEach(user => {
                p.innerHTML = `${p.innerHTML} <br> Name : ${user.name}`;
            })
        })
        .catch(error => console.log(error));
});

// to POST we have to create new object
fetch(URL, {
    //we know server data saved with json format but in javaScript we get javaScript object
    method : 'POST',
    body : JSON.stringify()
});
/**
 * to know everything
 * go to : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

