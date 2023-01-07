// W3Schools, HTML DOM Element scrollTop. Ar fáil ag: https://www.w3schools.com/jsref/prop_element_scrolltop.asp [Dáta rochtana 9 Márta 2022] 
window.onscroll = function() {myFunction()};

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}


function myFunction() {
	scroll = getScrollPercent();
	if (window.innerHeight < 650 && window.innerWidth > 1009 && scroll < 0.5) {
		document.getElementById("menuBar").style.display = "none";

	}
	else {
		document.getElementById("menuBar").style.display = null;
	}
}
myFunction();

// Bain an barra má tá scáileán beag in úsáid ionas nach bhfuil an barra os comhair na híomhá 