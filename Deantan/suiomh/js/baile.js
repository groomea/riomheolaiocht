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
  if (scroll > 15) {
  // scroll1 = document.body.scrollTop;
  // scroll2 = document.documentElement.scrollTop;
  // if (scroll1 > 1000 || scroll2 > 1000) {
    // document.getElementById("square").className = "slide-in-fwd-center";
    document.getElementById("squareTxt").className = "slide-in-fwd-center bodyText";
  

  if (scroll > 30) {
    // if(scroll1 > 1500 || scroll2 > 1500) {
      document.getElementById("teacs2").className = "slide-in-fwd-center bodyText";
  

  if (getScrollPercent() > 55) {
    document.getElementById("teacs3").className = "slide-in-fwd-center bodyText";
    }
  }
}
  else {
  	// document.getElementById("square").className = "slide-out-bck-center";
  	// square.classList.remove('slide-in-fwd-center');

  	document.getElementById("squareTxt").className = "slide-out-bck-center bodyText";
  	squareTxt.classList.remove('slide-in-fwd-center');

    document.getElementById("teacs2").className = "slide-out-bck-center bodyText";
    squareTxt.classList.remove('slide-in-fwd-center');

    document.getElementById("teacs3").className = "slide-out-bck-center bodyText";
    squareTxt.classList.remove('slide-in-fwd-center');
  }
  // if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
  //   document.getElementById("square").className = "";
  // }
	// var element = document.getElementById('square-wrapper');
	// if (element.scrollHeight - element.scrollTop === element.clientHeight)
	//     {
	// 		document.getElementById("square").className = "slide-out-bck-center";
	// 		square.classList.remove('slide-in-fwd-center');
	//     }
}


  // if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
  //   document.getElementById("teacs2").className = "slide-in-fwd-center bodyText";
  // }
  // else {
  //   document.getElementById("teacs2").className = "slide-out-bck-center bodyText";
  //   squareTxt.classList.remove('slide-in-fwd-center');
  // }