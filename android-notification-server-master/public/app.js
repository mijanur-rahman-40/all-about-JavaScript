var config = {
    apiKey: "AIzaSyBbNfByZKKaJ7mQcCdVH8tDubIzDSJkW5A",
    authDomain: "androidnotificationtutorial.firebaseapp.com",
    databaseURL: "https://androidnotificationtutorial.firebaseio.com",
    projectId: "androidnotificationtutorial",
    storageBucket: "androidnotificationtutorial.appspot.com",
    messagingSenderId: "65883397340"
};

firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL; 

$("#btn-login").click(function(){        
    var email = $("#email").val();
    var password = $("#password").val(); 

    var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
    result.catch(function(error){
        var errorCode = error.code; 
        var errorMessage = error.message; 

        console.log(errorCode);
        console.log(errorMessage);
    });
});
