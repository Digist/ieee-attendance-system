// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBno_LBs2i0igBvz7wK5wg_MSVmcdOUdQg",
    authDomain: "attendance-system-ieee-pes.firebaseapp.com",
    databaseURL: "https://attendance-system-ieee-pes.firebaseio.com",
    projectId: "attendance-system-ieee-pes",
    storageBucket: "attendance-system-ieee-pes.appspot.com",
    messagingSenderId: "632914470053",
    appId: "1:632914470053:web:5029530fdbd2f5c16d994c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   firebase.auth().onAuthStateChanged(user => {

  if(user) {
    window.location = 'show-member.html'; //After successful login, user will be redirected to home.html
  }
  
});




function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...

  });

}