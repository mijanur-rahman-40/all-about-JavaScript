
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbx9XTCD3bXxwsFA0guRxw9CIxwha-sWc",
    authDomain: "wallpaper-90d5b.firebaseapp.com",
    databaseURL: "https://wallpaper-90d5b.firebaseio.com/",
    projectId: "wallpaper-90d5b",
    storageBucket: "wallpaper-90d5b.appspot.com",
    messagingSenderId: "339002338996",
    appId: "1:339002338996:web:336df91dfe7261d2deb1e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

let login = document.getElementById('login');
login.addEventListener('click', function ()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error)
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});

$("#logout").click(function ()
{
    firebase.auth().signOut();
});

function switchView(view)
{
    $.get({
        url: view,
        cache: false,
    }).then(function (data)
    {
        $("#container").html(data);
    });
}

