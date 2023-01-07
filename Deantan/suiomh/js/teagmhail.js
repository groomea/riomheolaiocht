function validateEmail()
    {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Aftab, N., email validation in JavaScript. Ar fáil ag: https://linuxhint.com/email-validation-javascript/ [Dáta rochtana 9 Márta 2022]
        email = document.getElementById('Email').value;
        if (!(re.test(email))) {
        	alert("Rphost neamhbhailí");
        	return false;
        }
        else {
        	return true;
        }
    }


function seol() {
	if (validateEmail()) {
		document.getElementById("Name").value = "";
		document.getElementById("Email").value = "";
		document.getElementById("Message").value = "";
		alert("Teachtaireacht seolta");
	}
}