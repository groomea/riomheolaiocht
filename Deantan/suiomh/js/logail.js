// // // Get the input field
// // var input = document.getElementById("form");

// // // Execute a function when the user releases a key on the keyboard
// // input.addEventListener("keyup", function(event) {
// //   // Number 13 is the "Enter" key on the keyboard
// //   if (event.keyCode === 13) {
// //     // Cancel the default action, if needed
// //     event.preventDefault();
// //     alert("a");
// //   }
// // }); 


// function seic() {
// 	var pasfhocal = document.getElementsByName("Pasfhocal");
// 	console.log(pasfhocal);

// }

// https://stackoverflow.com/a/9204568


// NB: Seo na sonraí logála isteach don Deais: 
// Rphost: sampla@sampla.com 
// Pasfhocal:  pasfhocal
console.log("NB: Seo na sonraí logála isteach don Deais: ");
console.log("Rphost: sampla@sampla.com ");
console.log("Pasfhocal:  pasfhocal");
function validateEmail()
    {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Aftab, N., email validation in JavaScript. Ar fáil ag: https://linuxhint.com/email-validation-javascript/ [Dáta rochtana 9 Márta 2022]
        email = document.getElementById('rphost').value;
        if (re.test(email)) {
        	console.log("Bailí");

        		pasfhocal = document.getElementById('pasfhocal').value;
        		// console.log(pasfhocal);
	        	if (pasfhocal == "pasfhocal" && email == "sampla@sampla.com") {

	        		location.href = 'deais.html';
	        	}
	        	else if (pasfhocal == "") {
	        		alert("Comhlíonaigh do phasfhocal");
	        	}
	        	else {
	        		alert("Rphost nó pasfhocal mícheart");
	        	}


        }
        else {
        	alert("Rphost neamhbhailí");
        }
    }
// console.log(validateEmail("email@example.com"));

// document.onkeyup = enter;
// function enter(e) {if (e.which == 13) validateEmail();}