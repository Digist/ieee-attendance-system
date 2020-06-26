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
    var table_it=document.getElementById("table-check-it");
    var table_mr=document.getElementById("table-check-mr");
    var table_pr=document.getElementById("table-check-pr");
    var table_em=document.getElementById("table-check-em");
    var table_lo=document.getElementById("table-check-lo");
    var table_do=document.getElementById("table-check-do");
    var table_hr=document.getElementById("table-check-hr");
    var table_ct=document.getElementById("table-check-ct");
    var table_gr=document.getElementById("table-check-gr");
   	
   	

    var user = firebase.auth().currentUser;

    if(user != null){

    	 var email_id = user.email;
    	 
		
      if (email_id == "excom@ieee.org")


      {																				


											      									var ref=firebase.database().ref();

											      									
											      									ref.on('value',gotData,errData);

											      									function gotData(data)
											      									{
											      										if (data.val()==null || data.val()==undefined)
											      										{
											      											console.log(0);
											      										}
											      										else
											      										{
													      												var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);
													      											
													      											
													      											for (i=0;i<keys.length;i++)
													      											{
													      												
																													

																													  			
																																
																																if(keys[i].slice(15,17)=="it")
																																{
																																	var row = table_it.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15);
																																	
																																}
																																if(keys[i].slice(15,17)=="mr")
																																{
																																	var row = table_mr.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="pr")
																																{
																																	var row = table_pr.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="lo")
																																{
																																	var row = table_lo.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="do")
																																{
																																	var row = table_do.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="em")
																																{
																																	var row = table_em.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="ct")
																																{
																																	var row = table_ct.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="gr")
																																{
																																	var row = table_gr.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}
																																if(keys[i].slice(15,17)=="hr")
																																{
																																	var row = table_hr.insertRow(-1);
																																	var cell1 = row.insertCell(0);
																																	var cell2 = row.insertCell(1);
																																	cell1.innerHTML = keys[i].slice(0,10);
																																	cell2.innerHTML= keys[i].slice(10,15)
																																}		  			
																													  
													      											}



																								    /*---------------------------IT STARTS HERE---------------------------*/


													      											var array_it=[]



																								    var cells = table_it.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i++) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {



																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_it.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_it.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "IT";

																								    		//GETTING STUDENT CREDENTIALS
																								            

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;

																																
																										

																								            firebase.database().ref().child(matching+"it").on("value", function (snapshot)

																								             {
																								             	array_it=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_it.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_it[j];
																																cell2.innerHTML= array_it[j+1];
																																

													      														}
																								        }


																								    }

																								    /*---------------------------HR STARTS HERE---------------------------*/


													      											var array_hr=[]



																								    var cells = table_hr.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            

																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_hr.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_hr.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "HR";

																								    		//GETTING STUDENT CREDENTIALS

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"hr").on("value", function (snapshot)

																								             {
																								             	array_hr=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_hr.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_hr[j];
																																cell2.innerHTML= array_hr[j+1];
																																

													      														}
																								        }


																								    }



																								    /*---------------------------PR STARTS HERE---------------------------*/


													      											var array_pr=[]



																								    var cells = table_pr.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            

																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_pr.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_pr.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "PR";

																								    		//GETTING STUDENT CREDENTIALS
																								            

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"pr").on("value", function (snapshot)

																								             {
																								             	array_pr=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_pr.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_pr[j];
																																cell2.innerHTML= array_pr[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------do STARTS HERE---------------------------*/


													      											var array_do=[]



																								    var cells = table_do.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_do.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_do.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Documentation";

																								    		//GETTING STUDENT CREDENTIALS
																								            

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"do").on("value", function (snapshot)

																								             {
																								             	array_do=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_do.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_do[j];
																																cell2.innerHTML= array_do[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------LO STARTS HERE---------------------------*/


													      											var array_lo=[]



																								    var cells = table_lo.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_lo.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_lo.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Logistics";

																								    		//GETTING STUDENT CREDENTIALS
																								            

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"lo").on("value", function (snapshot)

																								             {
																								             	array_lo=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_lo.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_lo[j];
																																cell2.innerHTML= array_lo[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------CT STARTS HERE---------------------------*/


													      											var array_ct=[]



																								    var cells = table_ct.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_ct.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_ct.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Creativity";

																								    		//GETTING STUDENT CREDENTIALS
																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"ct").on("value", function (snapshot)

																								             {
																								             	array_ct=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_ct.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_ct[j];
																																cell2.innerHTML= array_ct[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------EM STARTS HERE---------------------------*/


													      											var array_em=[]



																								    var cells = table_em.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_em.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_em.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Event Management";

																								    		//GETTING STUDENT CREDENTIALS

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"em").on("value", function (snapshot)

																								             {
																								             	array_em=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_em.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_em[j];
																																cell2.innerHTML= array_em[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------GR STARTS HERE---------------------------*/


													      											var array_gr=[]



																								    var cells = table_gr.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_gr.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_gr.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Graphics";

																								    		//GETTING STUDENT CREDENTIALS
																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"gr").on("value", function (snapshot)

																								             {
																								             	array_gr=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_gr.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_gr[j];
																																cell2.innerHTML= array_gr[j+1];
																																

													      														}
																								        }


																								    }
																								    /*---------------------------MR STARTS HERE---------------------------*/


													      											var array_mr=[]



																								    var cells = table_mr.getElementsByTagName('td');

																								    for (var i = 0; i < cells.length; i+=1) {
																								        // Take each cell
																								        var cell = cells[i];
																								        // do something on onclick event for cell
																								        cell.onclick = function () {
																								            // SHOWING DATE AND DOMIAN
																								            var x=document.getElementsByClassName("span_design")
																										   	for (i = 0; i < x.length; i++) {
																										  		x[i].style.display = "block";
																											}
																								            var date_table=document.getElementById("imp-data");

																								            
																								            var rowId = this.parentNode.rowIndex;

																								            var rowsNotSelected = table_mr.getElementsByTagName('tr');
																								            
																								            var rowSelected = table_mr.getElementsByTagName('tr')[rowId];
																								            var rowCount = date_table.rows.length;
																								            for(var i=0; i<rowCount; i++) 
																											{
																												var row = date_table.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												date_table.deleteRow(i);
																												rowCount--;
																												i--;
																											}
																											var row = date_table.insertRow(-1);
																											var cell1 = row.insertCell(0);
																											var cell2 = row.insertCell(1);
																											cell1.innerHTML= rowSelected.cells[0].innerHTML;
																								    		cell2.innerHTML= "Marketing";

																								    		//GETTING STUDENT CREDENTIALS
																								            

																								            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																								            

																								            firebase.database().ref().child(matching+"mr").on("value", function (snapshot)

																								             {
																								             	array_mr=snapshot.val();

																											});

																											var table_check=document.getElementById("table-check");

																											var rowCount = table_check.rows.length;
																											for(var i=0; i<rowCount; i++) 
																											{
																												var row = table_check.rows[i];
																												var chkbox = row.cells[0].childNodes[0];
																												if(rowCount < 1 ) {
																													break;
																												}
																												table_check.deleteRow(i);
																												rowCount--;
																												i--;
																											}

																								    		for (j=0;j<array_mr.length;j+=2)
													      														{

																																var row = table_check.insertRow(-1);
																																var cell1 = row.insertCell(0);
																																var cell2 = row.insertCell(1);
																																
																																cell1.innerHTML = array_mr[j];
																																cell2.innerHTML= array_mr[j+1];
																																

													      														}
																								        }


																								    }
											      										}
											      											



																						  

																						    

																					}


											      										
											      									

											      									function errData(err)
											      									{
											      										console.log('Error');
											      										console.log(err);
											      									}
											      									


																							

      }
      else
      {
																		if (email_id == "it@ieee.org")


											      						{																				


											      									

											      									var domains=["mr","em","hr","ct","gr","pr","lo","do"];

											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-button").style.display="none";
											      									}

											      									var ref=firebase.database().ref();
											      									
											      									ref.on('value',gotData,errData);


											      									function gotData(data)
											      									{
											      											var meeting_data=data.val();
											      											var keys=Object.keys(meeting_data);
											      											var table_it=document.getElementById("table-check-it");

											      											for (i=0;i<keys.length;i++)
											      											{
											      												
																											

																											  			
																														
																														if(keys[i].slice(15,17)=="it")
																														{
																															var row = table_it.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15);
																															
																														}

																							}


																							/*---------------------------IT STARTS HERE---------------------------*/


											      											var array_it=[]



																						    var cells = table_it.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i++) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {



																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_it.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_it.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "IT";

																						    		//GETTING STUDENT CREDENTIALS
																						            

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;

																														
																								

																						            firebase.database().ref().child(matching+"it").on("value", function (snapshot)

																						             {
																						             	array_it=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_it.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_it[j];
																														cell2.innerHTML= array_it[j+1];
																														

											      														}
																						        }


																						    }

																						}

																						function errData(err)
											      										{
											      										console.log('Error');
											      										console.log(err);
											      										}	
																									

     																	 }

     																	 else
     																	 {
     																	 	if (email_id == "hr@ieee.org")


											      							{																				


											      									
											      									var domains=["mr","em","it","ct","gr","pr","lo","do"];

											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-button").style.display="none";
											      									}

											      									var ref=firebase.database().ref();

											      								
											      									ref.on('value',gotData,errData);


											      									function gotData(data)
											      									{
											      											var meeting_data=data.val();
											      											var keys=Object.keys(meeting_data);
											      											var table_it=document.getElementById("table-check-it");

											      											for (i=0;i<keys.length;i++)
											      											{
											      												
																											

																											  			
																														
																														if(keys[i].slice(15,17)=="hr")
																														{
																															var row = table_hr.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																							}


																							 /*---------------------------HR STARTS HERE---------------------------*/


											      											var array_hr=[]



																						    var cells = table_hr.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            

																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_hr.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_hr.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "HR";

																						    		//GETTING STUDENT CREDENTIALS

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"hr").on("value", function (snapshot)

																						             {
																						             	array_hr=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_hr.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_hr[j];
																														cell2.innerHTML= array_hr[j+1];
																														

											      														}
																						        }


																						    }



																						}

																						function errData(err)
											      										{
											      										console.log('Error');
											      										console.log(err);
											      										}	
											      									

     																	 	}
     																	 	else
     																	 	{
     																	 		if (email_id == "pr@ieee.org")


											      								{																				


											      									
											      									var domains=["mr","em","it","ct","gr","hr","lo","do"];

											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-button").style.display="none";
											      									}

											      									var ref=firebase.database().ref();

											      								
											      									ref.on('value',gotData,errData);


											      									function gotData(data)
											      									{
											      											var meeting_data=data.val();
											      											var keys=Object.keys(meeting_data);
											      											

											      											for (i=0;i<keys.length;i++)
											      											{
											      												
																											

																											  			
																														
																														if(keys[i].slice(15,17)=="pr")
																														{
																															var row = table_pr.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																							}

																							/*---------------------------PR STARTS HERE---------------------------*/


											      											var array_pr=[]



																						    var cells = table_pr.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            

																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_pr.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_pr.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "PR";

																						    		//GETTING STUDENT CREDENTIALS
																						            

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"pr").on("value", function (snapshot)

																						             {
																						             	array_pr=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_pr.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_pr[j];
																														cell2.innerHTML= array_pr[j+1];
																														

											      														}
																						        }


																						    }



																						}

																						function errData(err)
											      										{
											      										console.log('Error');
											      										console.log(err);
											      										}	
     																	 		}
     																	 		else
     																	 		{
     																	 			if (email_id == "mr@ieee.org")


											      									{																				


											      									var domains=["pr","em","it","ct","gr","hr","lo","do"];

											      									for (i=0;i<domains.length;i++)
											      									{
											      										document.getElementById(domains[i]+"-button").style.display="none";
											      									}

											      									var ref=firebase.database().ref();

											      								
											      									ref.on('value',gotData,errData);


											      									function gotData(data)
											      									{
											      											var meeting_data=data.val();
											      											var keys=Object.keys(meeting_data);
											      											

											      											for (i=0;i<keys.length;i++)
											      											{
											      												
																											

																											  			
																														
																														if(keys[i].slice(15,17)=="mr")
																														{
																															var row = table_mr.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																							}

																							 /*---------------------------MR STARTS HERE---------------------------*/


											      											var array_mr=[]



																						    var cells = table_mr.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_mr.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_mr.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Marketing";

																						    		//GETTING STUDENT CREDENTIALS
																						            

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"mr").on("value", function (snapshot)

																						             {
																						             	array_mr=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_mr.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_mr[j];
																														cell2.innerHTML= array_mr[j+1];
																														

											      														}
																						        }


																						    }

																						}

																						function errData(err)
											      										{
											      										console.log('Error');
											      										console.log(err);
											      										}	
																									

     																	 			}
     																	 			else
     																	 			{
     																	 				if (email_id == "ct@ieee.org")


											      										{																				
																							var domains=["pr","em","it","mr","gr","hr","lo","do"];

													      									for (i=0;i<domains.length;i++)
													      									{
													      										document.getElementById(domains[i]+"-button").style.display="none";
													      									}

													      									var ref=firebase.database().ref();

													      								
													      									ref.on('value',gotData,errData);


													      									function gotData(data)
													      									{
													      											var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);
													      											

													      											for (i=0;i<keys.length;i++)
													      											{
													      												
																													

																													  			
																																
																																if(keys[i].slice(15,17)=="ct")
																														{
																															var row = table_ct.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																									}

																									 /*---------------------------CT STARTS HERE---------------------------*/


											      											var array_ct=[]



																						    var cells = table_ct.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_ct.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_ct.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Creativity";

																						    		//GETTING STUDENT CREDENTIALS
																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"ct").on("value", function (snapshot)

																						             {
																						             	array_ct=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_ct.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_ct[j];
																														cell2.innerHTML= array_ct[j+1];
																														

											      														}
																						        }


																						    }


																								}

																								function errData(err)
													      										{
													      										console.log('Error');
													      										console.log(err);
													      										}	
																									
																									

     																	 				}
     																	 				else
     																	 				{
     																	 					if (email_id == "em@ieee.org")


											      											{																				


											      									
											      									


																								var domains=["pr","ct","it","mr","gr","hr","lo","do"];

													      									for (i=0;i<domains.length;i++)
													      									{
													      										document.getElementById(domains[i]+"-button").style.display="none";
													      									}

													      									var ref=firebase.database().ref();

													      								
													      									ref.on('value',gotData,errData);


													      									function gotData(data)
													      									{
													      											var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);
													      											

													      											for (i=0;i<keys.length;i++)
													      											{
													      												
																													

																													  			
																														if(keys[i].slice(15,17)=="em")
																														{
																															var row = table_em.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																									}
																							/*---------------------------EM STARTS HERE---------------------------*/


											      											var array_em=[]



																						    var cells = table_em.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_em.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_em.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Event Management";

																						    		//GETTING STUDENT CREDENTIALS

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"em").on("value", function (snapshot)

																						             {
																						             	array_em=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_em.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_em[j];
																														cell2.innerHTML= array_em[j+1];
																														

											      														}
																						        }


																						    }


																								}

																								function errData(err)
													      										{
													      										console.log('Error');
													      										console.log(err);
													      										}
																									

     																	 					}
     																	 					else
     																	 					{
     																	 						if (email_id == "doc@ieee.org")


											      												{																				


											      									
											      									
											      														var domains=["pr","ct","it","mr","gr","hr","lo","em"];

													      									for (i=0;i<domains.length;i++)
													      									{
													      										document.getElementById(domains[i]+"-button").style.display="none";
													      									}

													      									var ref=firebase.database().ref();

													      								
													      									ref.on('value',gotData,errData);


													      									function gotData(data)
													      									{
													      											var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);
													      											

													      											for (i=0;i<keys.length;i++)
													      											{
													      												
																													

																													  	if(keys[i].slice(15,17)=="do")
																														{
																															var row = table_do.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																									}
																							/*---------------------------do STARTS HERE---------------------------*/


											      											var array_do=[]



																						    var cells = table_do.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_do.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_do.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Documentation";

																						    		//GETTING STUDENT CREDENTIALS
																						            

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"do").on("value", function (snapshot)

																						             {
																						             	array_do=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_do.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_do[j];
																														cell2.innerHTML= array_do[j+1];
																														

											      														}
																						        }


																						    }


																								}

																								function errData(err)
													      										{
													      										console.log('Error');
													      										console.log(err);
													      										}
																									
																									

     																	 						}
     																	 						else
     																	 						{
     																	 							if (email_id == "log@ieee.org")


											      													{																				


											      									
											      																var domains=["pr","ct","it","mr","gr","hr","do","em"];

													      									for (i=0;i<domains.length;i++)
													      									{
													      										document.getElementById(domains[i]+"-button").style.display="none";
													      									}

													      									var ref=firebase.database().ref();

													      									
													      									ref.on('value',gotData,errData);

													      									function gotData(data)
													      									{
													      											var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);

													      											for (i=0;i<keys.length;i++)
											      													{

											      														if(keys[i].slice(15,17)=="lo")
																										{
																												var row = table_lo.insertRow(-1);
																												var cell1 = row.insertCell(0);
																												var cell2 = row.insertCell(1);
																												cell1.innerHTML = keys[i].slice(0,10);
																												cell2.innerHTML= keys[i].slice(10,15)
																										}
																									}


																									/*---------------------------LO STARTS HERE---------------------------*/


											      											var array_lo=[]



																						    var cells = table_lo.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_lo.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_lo.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Logistics";

																						    		//GETTING STUDENT CREDENTIALS
																						            

																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"lo").on("value", function (snapshot)

																						             {
																						             	array_lo=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_lo.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_lo[j];
																														cell2.innerHTML= array_lo[j+1];
																														

											      														}
																						        }


																						    }
																						}

																								function errData(err)
													      										{
													      										console.log('Error');
													      										console.log(err);
													      										}
																									

     																	 							}
     																	 							else
     																	 							{
     																	 								if (email_id == "gr@ieee.org")


											      														{																				


											      									
											      																	var domains=["pr","ct","it","mr","lo","hr","do","em"];

													      									for (i=0;i<domains.length;i++)
													      									{
													      										document.getElementById(domains[i]+"-button").style.display="none";
													      									}

													      									var ref=firebase.database().ref();

													      								
													      									ref.on('value',gotData,errData);


													      									function gotData(data)
													      									{
													      											var meeting_data=data.val();
													      											var keys=Object.keys(meeting_data);
													      											

													      											for (i=0;i<keys.length;i++)
													      											{
													      												
																													

																													  	if(keys[i].slice(15,17)=="gr")
																														{
																															var row = table_gr.insertRow(-1);
																															var cell1 = row.insertCell(0);
																															var cell2 = row.insertCell(1);
																															cell1.innerHTML = keys[i].slice(0,10);
																															cell2.innerHTML= keys[i].slice(10,15)
																														}

																									}
																							/*---------------------------GR STARTS HERE---------------------------*/


											      											var array_gr=[]



																						    var cells = table_gr.getElementsByTagName('td');

																						    for (var i = 0; i < cells.length; i+=1) {
																						        // Take each cell
																						        var cell = cells[i];
																						        // do something on onclick event for cell
																						        cell.onclick = function () {
																						            // SHOWING DATE AND DOMIAN
																						            var x=document.getElementsByClassName("span_design")
																								   	for (i = 0; i < x.length; i++) {
																								  		x[i].style.display = "block";
																									}
																						            var date_table=document.getElementById("imp-data");

																						            
																						            var rowId = this.parentNode.rowIndex;

																						            var rowsNotSelected = table_gr.getElementsByTagName('tr');
																						            
																						            var rowSelected = table_gr.getElementsByTagName('tr')[rowId];
																						            var rowCount = date_table.rows.length;
																						            for(var i=0; i<rowCount; i++) 
																									{
																										var row = date_table.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										date_table.deleteRow(i);
																										rowCount--;
																										i--;
																									}
																									var row = date_table.insertRow(-1);
																									var cell1 = row.insertCell(0);
																									var cell2 = row.insertCell(1);
																									cell1.innerHTML= rowSelected.cells[0].innerHTML;
																						    		cell2.innerHTML= "Graphics";

																						    		//GETTING STUDENT CREDENTIALS
																						            matching = rowSelected.cells[0].innerHTML + rowSelected.cells[1].innerHTML;
																						            

																						            firebase.database().ref().child(matching+"gr").on("value", function (snapshot)

																						             {
																						             	array_gr=snapshot.val();

																									});

																									var table_check=document.getElementById("table-check");

																									var rowCount = table_check.rows.length;
																									for(var i=0; i<rowCount; i++) 
																									{
																										var row = table_check.rows[i];
																										var chkbox = row.cells[0].childNodes[0];
																										if(rowCount < 1 ) {
																											break;
																										}
																										table_check.deleteRow(i);
																										rowCount--;
																										i--;
																									}

																						    		for (j=0;j<array_gr.length;j+=2)
											      														{

																														var row = table_check.insertRow(-1);
																														var cell1 = row.insertCell(0);
																														var cell2 = row.insertCell(1);
																														
																														cell1.innerHTML = array_gr[j];
																														cell2.innerHTML= array_gr[j+1];
																														

											      														}
																						        }


																						    }


																								}

																								function errData(err)
													      										{
													      										console.log('Error');
													      										console.log(err);
													      										}
																									
																									

     																	 								}
     																	 								else
     																	 								{
     																	 									window.location="index.html";
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
      						
      

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    window.location = 'index.html';
    

  }

});

var logout_button=document.getElementById("signout");

logout_button.addEventListener('click', function(e){


  e.preventDefault();

  firebase.auth().signOut();
  window.location="index.html";

});

