
function onLoad(){
    gapi.load("auth2", function(){
        gapi.auth2.init();
    });
}

function saveNAme(){
    var user= document.getElementById("InputEmail");
    localStorage.setItem("User", JSON.stringify("usuario", user.value));
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            console.log("Usuario ha cerrado su cuenta");
        });
    }
function signOut(){

}
/*

function showNAme(){
    if (Document.getElementById("user")== null);
    alert ("El campo no puede estar vacío");
    document.getElementById("user")
    saveNAme();
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }
  
function disconnect(){
    localStorage.clear();
    location.href="login.html";
    signOut();
}*/
