
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



firebase.auth().onAuthStateChanged(function(user) {


  if (user) {
    // User is signed in.
    
    document.getElementById("user_div").style.display = "block";
   
    

    var user = firebase.auth().currentUser;

    if(user != null){

    	 var email_id = user.email;
    	 

    	 	if (email_id == "it@ieee.org")


      		{																				


											      									var domains=["hr","em","ct","pr","lo","do","gr","mr"];
											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-table").style.display="none";
											      										document.getElementById("it-table").style.display="flex-wrap";

											      									}

											      									
											      	 								// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

											      									return document.getElementById(id).value;
											  										}



																					//Submitting the values of the form by adding event listener ,   e stands for event


											            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

											 										 e.preventDefault();


											  										// GETTING THE METTING MAIN DATA



											  										var date=getvalue('date');
											  										
											  										var time= getvalue('time');
											  										if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block"
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=7;j++)
																								{
																										storedata.push(document.getElementById("IT-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("IT-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"it";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


								});						

      }
      else
      {
											      					if (email_id == "hr@ieee.org")


											      					{				



											      									var domains=["it","em","ct","pr","lo","do","gr","mr"];
											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-table").style.display="none";
											      										document.getElementById("hr-table").style.display="flex-wrap";
											      									}

											      									
											      	 								// GETTING BUTTON


																					var button=document.getElementById('submit');
																					function getvalue(id){

											      									return document.getElementById(id).value;
											  										}



																					//Submitting the values of the form by adding event listener ,   e stands for event


											            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

											 										 e.preventDefault();


											  										// GETTING THE METTING MAIN DATA



											  										var date=getvalue('date');
											  										
											  										var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=14;j++)
																								{
																										storedata.push(document.getElementById("hr-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("hr-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"hr";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      						}
      						else
      						{
											      							if (email_id == "gr@ieee.org")


											      							{

											      									var domains=["it","em","ct","pr","lo","do","hr","mr"];
											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-table").style.display="none";
											      										document.getElementById("gr-table").style.display="flex-wrap";
											      									}

											      									
											      	 								// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

											      									return document.getElementById(id).value;
											  										}



																					//Submitting the values of the form by adding event listener ,   e stands for event


											            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

											 										 e.preventDefault();


											  										// GETTING THE METTING MAIN DATA



											  										var date=getvalue('date');
											  										
											  										var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{
    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=8;j++)
																								{
																										storedata.push(document.getElementById("gr-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("gr-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"gr";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      						}

      						else
      						{
											      									if (email_id == "em@ieee.org")


											      									{

											      									var domains=["it","gr","ct","pr","lo","do","hr","mr"];
											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-table").style.display="none";
											      										document.getElementById("em-table").style.display="flex-wrap";
											      									}

											      									
											      	 								// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

											      									return document.getElementById(id).value;
											  										}



																					//Submitting the values of the form by adding event listener ,   e stands for event


											            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

											 										 e.preventDefault();


											  										// GETTING THE METTING MAIN DATA



											  										var date=getvalue('date');
											  										
											  										var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=15;j++)
																								{
																										storedata.push(document.getElementById("em-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("em-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"em";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      							}

      							else
      							{
										      										if (email_id == "ct@ieee.org")


										      										{

										      										var domains=["it","gr","em","pr","lo","do","hr","mr"];
										      										for (i=0;i<domains.length;i++)
										      										{
										      											document.getElementById(domains[i]+"-table").style.display="none";
										      											document.getElementById("ct-table").style.display="flex-wrap";
										      										}

										      										
										      	 									// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

										      										return document.getElementById(id).value;
										  											}



																					//Submitting the values of the form by adding event listener ,   e stands for event


										            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

										 										 	e.preventDefault();


										  											// GETTING THE METTING MAIN DATA



										  											var date=getvalue('date');
										  										
										  											var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=8;j++)
																								{
																										storedata.push(document.getElementById("ct-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("ct-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"ct";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      									}

      									else
      									{
									      											if (email_id == "pr@ieee.org")


									      											{

									      											var domains=["it","gr","em","ct","lo","do","hr","mr"];
									      											for (i=0;i<domains.length;i++)
									      											{
									      												document.getElementById(domains[i]+"-table").style.display="none";
									      												document.getElementById("pr-table").style.display="flex-wrap";
									      											}

									      											
									      	 										// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

									      											return document.getElementById(id).value;
									  												}



																					//Submitting the values of the form by adding event listener ,   e stands for event


									            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

									 										 		e.preventDefault();


									  												// GETTING THE METTING MAIN DATA



									  												var date=getvalue('date');
									  										
									  												var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=17;j++)
																								{
																										storedata.push(document.getElementById("pr-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("pr-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"pr";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      										}

      										else
      										{
								      													if (email_id == "log@ieee.org")


								      													{

							      														var domains=["it","gr","em","ct","pr","do","hr","mr"];
							      														for (i=0;i<domains.length;i++)
							      														{
							      															document.getElementById(domains[i]+"-table").style.display="none";
							      															document.getElementById("lo-table").style.display="flex-wrap";
							      														}
							      														
							      	 													// GETTING BUTTON

																						var button=document.getElementById('submit');
																						function getvalue(id){

							      														return document.getElementById(id).value;
							  															}



																					//Submitting the values of the form by adding event listener ,   e stands for event


							            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

							 										 				e.preventDefault();


							  														// GETTING THE METTING MAIN DATA



							  														var date=getvalue('date');
							  										
							  														var time= getvalue('time');
							  										
  
																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{
    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=8;j++)
																								{
																										storedata.push(document.getElementById("lo-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("lo-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"lo";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																					});						

      												}

      												else
      												{
					      															if (email_id == "doc@ieee.org")


					      															{

			      																	var domains=["it","gr","em","ct","pr","lo","hr","mr"];
			      																	for (i=0;i<domains.length;i++)
			      																	{
			      																		document.getElementById(domains[i]+"-table").style.display="none";
			      																		document.getElementById("do-table").style.display="flex-wrap";
			      																	}
			      																	
			      	 																// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

			      																	return document.getElementById(id).value;
			  																		}



																					//Submitting the values of the form by adding event listener ,   e stands for event


			            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

			 										 								e.preventDefault();


			  																		// GETTING THE METTING MAIN DATA



			  																		var date=getvalue('date');
			  										
			  																		var time= getvalue('time');
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{
    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=11;j++)
																								{
																										storedata.push(document.getElementById("do-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("do-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"do";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);
		    																		}


																		});						

      															}
      															else
      															{
      																		if (email_id == "mr@ieee.org")


      																		{

      																				var domains=["it","gr","em","ct","pr","lo","hr","do"];
      																				for (i=0;i<domains.length;i++)
      																				{
      																					document.getElementById(domains[i]+"-table").style.display="none";
      																					document.getElementById("mr-table").style.display="flex-wrap";
      																				}
      																				
      	 																			// GETTING BUTTON

																					var button=document.getElementById('submit');
																					function getvalue(id){

      																				return document.getElementById(id).value;
  																					}



																					//Submitting the values of the form by adding event listener ,   e stands for event


            
																					button.addEventListener("click",function(e){


																					// trying to not giving values to html by default, preventing it

 										 											e.preventDefault();


  																					// GETTING THE METTING MAIN DATA



  																					var date=getvalue('date');
  										
  																					var time= getvalue('time');
  										
  																					if (date=="" ||  time=="")
    																				{
    																						alert("Date, Time or Year is empty")
    																				}

    																				else
    																				{

    																					document.getElementById("wait_message").style.display="block";
    																						// STORING DATA IN  AN ARRAY

																							
																							var storedata=[];

																							

																								for (var j=0;j<=11;j++)
																								{
																										storedata.push(document.getElementById("mr-"+(j+1)+"-name").innerHTML);
		    																							storedata.push(getvalue("mr-"+(j+1)+"-status"));
		    																							
																								}
		    																				

																							

																							// CHANGING MAIN DATA TO STRING

		    																					var maindata= date+time+"mr";
																							// CREATING DATABASE CHILD ON THE BASIS OF THE MAIN DATA

		    																				var database=firebase.database().ref(maindata);

																							database.set(storedata);

																							setTimeout(function()
																							{

																									alert("ATTENDANCE SUBMITTED SUCCESSFULLY");
																									document.getElementById("wait_message").style.display="none";

																							}, 1000);

																							
		    																		}


																							});						

      																		}
      															}
      												}


      										}
      									}
      							}
      						}
      					}
    	 }
      
      }
      

    

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    firebase.auth().signOut();
  	window.location = 'index.html';
    

  }

});

var logout_button=document.getElementById("signout");

logout_button.addEventListener('click', function(e){


  e.preventDefault();

  firebase.auth().signOut();
  window.location="index.html";

    });
