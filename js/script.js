document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		//Sets the hamburger menu to a variable 
	  	let burgerbutton = document.querySelector(".icon");

	  	function click_shownav (event) {
	  		//Gets the hidden dropdown display and renames the class which will
	  		//determine whether or not the dropdown display is shown
	  		let x = document.getElementById("responsive-nav");
  			if (x.className === "unactive-nav") {
    		x.className += " active";
    		burgerbutton.style.color = "black";
    		burgerbutton.style.backgroundColor = "white";

  			} else {
    		x.className = "unactive-nav";
    		burgerbutton.style.color = "white";
    		burgerbutton.style.backgroundColor = "initial";
  			}			
  			event.preventDefault();

	  	}

	  	//Adds event listener and function to the burger menu button
		burgerbutton.addEventListener("click", click_shownav);

		//Gets the current page name so that the future code can 
		//detect which page the user is on
		var path = window.location.pathname;
		var page = path.split("/").pop();

		//Executes body code if it's the chef page
		if (page == "ourchef.html") {
			//Assigns read more and close button to variables
			let readmorebutton = document.getElementById("readmore");
			let closebutton = document.querySelector("#readmore-popup .close-button a");

			//Toggles the readmore popup on or off
			function click_toggleshowmore (event) {
				document.body.classList.toggle("show-readmore-popup");
				event.preventDefault();

			}
			//Add event listener and function to the two buttons
			readmorebutton.addEventListener("click", click_toggleshowmore);
			closebutton.addEventListener("click", click_toggleshowmore);


		}

		//Executes code if it's contact us page.
		if (page == "contactus.html") {
			//Sets submit button to variable
			let contactsubmitbtn = document.querySelector("#contact .submitbutton");

			//Validates the form, if any of the fields are empty, prompts user to 
			//enter the fields, otherwise resets the form and tells the user
			//their enquiry has been sent
			function validate_contactform (event) {
				//Gets the values of all the fields and sets them to variables.
				let form = document.forms['enquiryform'];
				let firstnamelastname = document.getElementById("fnamelname").value;
				let phonenumber = document.getElementById("Phone").value;
				let email = document.getElementById("Email").value;
				let postcode = document.getElementById("Postcode").value;
				let enquiry = document.getElementById("enquirebox").value;
				var complete = false;

				if (firstnamelastname==""||phonenumber==""||email==""||postcode==""||enquirebox=="") {
				}
				else {
					complete = true;
				}
				if(complete) {
					alert("Your enqiury has been sent!");
					form.reset();
					event.preventDefault();
				}
				else {
					alert("Please complete all fields!");
					event.preventDefault();
				}
				event.preventDefault();

			}

			//Add event listener and function the button.
			contactsubmitbtn.addEventListener("click", validate_contactform);


		}

		//Executes if page is booking.
		if (page == "booking.html") {
			//Sets submit button to variable
			let bookingsubmitbtn = document.querySelector("#bookingsection .submitbutton");

			//Validates the form, if any of the fields are empty or are at their default value
			//prompts user to fill them in. Otherwise resets form and thanks user.
			function validate_bookingform (event) {
				//Gets the values of all the fields and sets them to variables.
				let form = document.forms['bookingform'];
				let firstnamelastname = document.getElementById("Bookingfnamelname").value;
				let phonenumber = document.getElementById("BookingPhone").value;
				let email = document.getElementById("BookingEmail").value;
				let postcode = document.getElementById("BookingPostcode").value;
				let roomselection = document.getElementById("roomselect").selectedIndex;
				let arrivaldate = document.getElementById("Arrival").value;
				let departuredate = document.getElementById("Departure").value;
				var complete = false;

				if (firstnamelastname==""||phonenumber==""||email==""||postcode==""||roomselection==0||arrivaldate==""||departuredate=="") {
				}
				else {
					complete = true;
				}
				if(complete) {
					alert("Thank you for booking!");
					form.reset();
					event.preventDefault();
				}
				else {
					alert("Please complete all fields!");
					event.preventDefault();
				}
				event.preventDefault();

			}

			//Sets event listener and function to button.
			bookingsubmitbtn.addEventListener("click", validate_bookingform);


		}

		//Deects if page is booking
		if (page == "booking.html") {
			//Sets a base total cost
			let totalcost = 0;

			//Changes the total cost displayed on in the booking page depending on 
			//the room selected in the form
			function changetotal (event) {
				let roomselection = document.getElementById("roomselect").selectedIndex;
				if (roomselection == 1) {
					totalcost = totalcost + 10000;
				}
				else if (roomselection == 2) {
					totalcost = totalcost + 25000;
				}
				else if (roomselection == 3) {
					totalcost = totalcost + 60000;
				}
				else {
					totalcost = 0;
				}
				//Changes the html which shows the total cost to equal the total cost variable.
				document.getElementById("total").innerHTML = "TOTAL COST: $" + totalcost;
				totalcost = 0;

			}
				//Sets event listener and function to button.
				document.addEventListener("click", changetotal);
			

		}

		//Executes if page is gallery
		if (page == "gallery.html") {
			window.addEventListener('load', function() {
			console.log("ready");
			//Runs baguette box JS plugin on the specified class.
			baguetteBox.run('.gallerybox');
		});
			

		}

		//Executes if page is lodging
		if (page == "lodging.html") {
			//Sets the buttons to variables
			let standardbtn = document.getElementById("standardbtn");
			let superiorbtn = document.getElementById("superiorbtn");
			let deluxebtn = document.getElementById("deluxebtn");

			//Sets the room description content to variables
			let roomheader = document.getElementById("selected-room-header");
			let image = document.querySelector("#lodging .lodgingimage img");
			let description = document.getElementById("roomdesc")
			let personno = document.getElementById("personnumber");
			let bedno = document.getElementById("bednumber");
			let showerno = document.getElementById("showernumber");

			//Changes the content of the room description if the room seleced is a standard room.
			function change_content_standard (event) {
				roomheader.innerHTML="STANDARD ROOM";
				image.src="images/lodgingstandard.png"
				description.innerHTML = "Relax in our standard resort rooms!<br><br>An awe-inspiring an view of the MSR River + balcony, top-quality furniture and necessities, a flat screen LCD TV and en-suite facilities, what more could you ask for in a space-getaway? It's the simple things in life!<br><br>The total area of MSR standard rooms is 45m2."
				personno.innerHTML = "2";
				bedno.innerHTML = "1";
				showerno.innerHTML = "1";
				//Adds the 'selcted-room' class to the standard room so that it is styled appopriately
				//Removes the class for the other buttons to show they are not selected.
				superiorbtn.classList.remove("selected-room");
				deluxebtn.classList.remove("selected-room");
				standardbtn.classList.add("selected-room");
				event.preventDefault();

			}

			//Changes the content of the room description if the room seleced is a superior room.
			function change_content_superior (event) {
				roomheader.innerHTML="SUPERIOR ROOM";
				image.src="images/lodgingsuperior.jpg"
				description.innerHTML = "Our Superior Rooms offer superior comfort!<br><br>With a view situated 300 meters high, experience an incredible view of the MSR River, and beyond! Witness true comfort with our superior furniture, made of only the highest quality materials. Be Superior over Standard!<br><br>The total area of MSR superior rooms is 60m2."
				personno.innerHTML = "4";
				bedno.innerHTML = "2";
				showerno.innerHTML = "2";
				//Adds the 'selcted-room' class to the superior room so that it is styled appopriately
				//Removes the class for the other buttons to show they are not selected.
				standardbtn.classList.remove("selected-room");
				deluxebtn.classList.remove("selected-room");
				superiorbtn.classList.add("selected-room");
				event.preventDefault();

			}

			//Changes the content of the room description if the room seleced is a deluxe room.
			function change_content_deluxe (event) {
				roomheader.innerHTML="DELUXE ROOM";
				image.src="images/lodgingdeluxe.jpg"
				description.innerHTML = "Our Deluxe Rooms offer everything the others had, plus more!<br><br> Situated on top of Olympus Mons, witness the extraordinary view of the cosmos and the surrounding beauty of a terraformed Mars. Nowhere else will you experience a truly Deluxe holiday.<br><br>The total area of MSR deluxe rooms is 90m2."
				personno.innerHTML = "8";
				bedno.innerHTML = "4";
				showerno.innerHTML = "4";
				//Adds the 'selcted-room' class to the deluxe room so that it is styled appopriately
				//Removes the class for the other buttons to show they are not selected.
				standardbtn.classList.remove("selected-room");
				superiorbtn.classList.remove("selected-room");
				deluxebtn.classList.add("selected-room");
				event.preventDefault();

			}

			//Adds an event listener to the buttons and their respective functions.
			standardbtn.addEventListener("click", change_content_standard);
			superiorbtn.addEventListener("click", change_content_superior);
			deluxebtn.addEventListener("click", change_content_deluxe);


		}
		
	}
})




