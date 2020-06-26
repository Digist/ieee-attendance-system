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
    
    if (user.email=="excom@ieee.org")
    {
      document.getElementById("attendance_mark").style.display="none";
    }
    
   
    
  }
  else
  {
    firebase.auth().signOut();
    window.location="index.html";
  }
  


});


var logout_button=document.getElementById("signout");

logout_button.addEventListener('click', function(e){


  e.preventDefault();

  firebase.auth().signOut();
  window.location="index.html";

    });










/*

/*--------------------------------------------------------------- GETTING DATA FROM FIREBASE -----------------------------------------------------

 								// GETTING SHOW BUTTON

								var show=document.getElementById('show');


								show.addEventListener("click",function(e){


								// trying to not giving values to html by default, preventing it

  e.preventDefault();


  // Getting Data From Firebase Database

    var date_verify=getvalue('date-verify');
    var year_verify=getvalue('year-verify');
    var time_verify=getvalue('time-verify');

    data_match=date_verify+year_verify+time_verify

    var get_database=firebase.database().ref(data_match);

    get_database.on('value',getdata,showerror);


    function getdata(data){

        var main_data= data.val(); // will give the whole firebase object if applied console.log(data);
        var keys= Object.keys(main_data); // The keys are now converted into arrays and these keys have object stored in them now to call first key we will use keys[0],.... etc
        var name,status;
        
        for(var i =1;i<keys.length;i++)

        {

          keys_iter=keys[i];
          name=main_data[keys_iter][0];
          Status=main_data[keys_iter][1];

          // Find a <table> element with id="myTable":
            var table = document.getElementById("Attendance-display");

          // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(-1);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);

            // Add some text to the new cells:
                cell1.innerHTML = name;
                cell2.innerHTML = Status;
          
          
        }
      }

    function showerror(err){

        console.log(err);
      };



});



*/


