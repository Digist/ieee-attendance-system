


  // Your web app's Firebase configuration


var firebaseConfig = {
    apiKey: "AIzaSyDyoQPGtPbVrYZ0eauQYTidY-EdKkYkoJU",
    authDomain: "databaseutilizer.firebaseapp.com",
    databaseURL: "https://databaseutilizer.firebaseio.com",
    projectId: "databaseutilizer",
    storageBucket: "",
    messagingSenderId: "878816141261",
    appId: "1:878816141261:web:7c6b7191cf5806d7b36e84"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





// Getting form through Id

var button=document.getElementById('submit');



//Submitting the values of the form by adding event listener ,   e stands for event


 						
button.addEventListener("click",function(e){


// trying to not giving values to html by default, preventing it

			e.preventDefault();

// Getting the values of the form

			var name=getvalue('first-name');
			var email=getvalue('email');
			var phone_number=getvalue("number")
			var option=getvalue('options');
			var year=getvalue("year");
			var previous_domain=getvalue("previous_domain");
			var current_year=getvalue("current_year");
			var department=getvalue("department");
			var mail_check=document.getElementById('email');
			var phone_check=document.getElementById("number");
			


			// CHECK VALIDITY

			
			var check_name=document.getElementById("first-name").checkValidity();
			var check_mail=mail_check.checkValidity();
			var check_phone=phone_check.checkValidity();

			

			if (name != "")
			{

				if ( check_mail )

				{
					if (check_phone)
					{
						if (previous_domain != "")
						{
									var object={
											name:name,
											email:email,
											option:option,
				
				
										};

									// ACCESSING THE DATABASE


									var database=firebase.database().ref('credentials');


									//PUSHING THE DETAILS 

													database.push(object);

													// DISPLAYING SUCCESS MESSAGE

													document.getElementById('alert').style.display="block";
													document.getElementById('alert').className="show";
													document.getElementById('replace').style.display="none";




													// SENDING DATA TO GOOGLE SHEETS


               										 $.ajax(

               										{
                    												url: "https://docs.google.com/forms/d/e/1FAIpQLSeOvbEN6qgb9oni1kls-bqirWuofMoEhX6u-U5fuKnaCfiDUA/formResponse?",
																	data: {"entry.2000679441": name,"entry.696333678": email, "entry.236097015": phone_number,'entry.1407283611':year,'entry.1986955909':option,'entry.1653572374':previous_domain,'entry.602861729':current_year,'entry.1651668436':department},
                    												type: "POST",
                    												dataType: "xml",
                    												success: function(d)
															{
															},
																	error: function(x, y, z)
															{

																	$('#success-msg').show();
																	$('#form').hide();
							
															}
                									});
																	return false;
						}
						else
						{
													// DISPLAYING INVALIDATION MESSAGE

													alert("Reference is required. Type NONE If Not Applicable")

													
						}
					}

					else
					{
					     				// DISPLAYING INVALIDATION MESSAGE
					     					alert("Enter Correct Phone Number. No Spaces")

					}
				}

				else
				{

										     				// DISPLAYING INVALIDATION MESSAGE
										     					alert("Enter Correct Email")

					}

				}
				

													//END THE GOOGLE SHEET PROCEDURe												// END OF AREA
			
			else
			{
				
				// DISPLAYING INVALIDATION MESSAGE

					alert("Name Is Required")
			}

			// END OF VALIDITY



function getvalue(id){

return document.getElementById(id).value;
};




});


/*                 YEH FIREBASE SEY MANGANAY WALA KAAM ABHI NAHI KRNA


// -----------------------------------------------------------------------REGISTRATION VERIFICATION-------------------------------------------------------------------




var search=document.getElementById("search");



search.addEventListener("click",function(e){

	e.preventDefault();
	var input=document.getElementById("verify").value;
	var mail_check=document.getElementById('verify');


			// CHECK VALIDITY

			var check_mail=mail_check.checkValidity();

	if (check_mail )
	{
			var database=firebase.database().ref('credentials');
			var data2=firebase.database().ref().child('masterSheet');

			var data=[];




			database.on('value',getdata,showerror);
			

			function getdata(data){

				var main_data= data.val(); // will give the whole firebase object if applied console.log(data);
				var keys= Object.keys(main_data); // The keys are now converted into arrays and these keys have object stored in them now to call first key we will use keys[0],.... etc
				var name,email,option;
				
				for(var i =0;i<keys.length;i++)

				{

					keys_iter=keys[i];
					name=main_data[keys_iter].name;
					email=main_data[keys_iter].email;
					option=main_data[keys_iter].option;

					if (email==input){


						document.getElementById('show_when_clicked').style.display="block";
						data=[name,option,"Registered","Not Paid"];
						console.log(data);
						document.getElementById('user').innerHTML=data[0];
						document.getElementById('comp').innerHTML=data[1];
						document.getElementById('status').innerHTML=data[2];
						document.getElementById("pay").innerHTML="Not Paid";
						document.getElementById('pay').style.color="#ad1f32";
						document.getElementById('pay').style.fontWeight="bold";
						data2.on('child_added',function(snapshot){

							

							if (snapshot.child("2").val()===input)
							{
								
								if ( snapshot.child("4").val().toLowerCase() == "paid"){



									document.getElementById("pay").innerHTML=snapshot.child("4").val().toUpperCase() ;
									document.getElementById('pay').style.color="#0f7d32";
									document.getElementById('pay').style.fontWeight="bold";
								}
								
							}
							

						} );
			


						

					};
					

					
				}

				
			};


			function showerror(err){

				console.log(err);
			};
	}
	else
	{

		// DISPLAYING INVALIDATION MESSAGE

				document.getElementById('invalidation_message_2').style.display="block";
				document.getElementById('invalidation_message_2').className="show";

				setTimeout(function()
				{

						document.getElementById('invalidation_message_2').style.display="none";

				}, 6000);

	}

	







});


//----------------------------------------------------- INPUT FIELDS VALIDATION-------------------------------------------------------------------------

(function ($) {
    "use strict";

    
    var name = $('.validate-input input[name="entry.736964962"]');
    var email = $('.validate-input input[name="entry.1332857726"]');



    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

*/