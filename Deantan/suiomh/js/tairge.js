// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const square = entry.target.querySelector('.bodyTitle');

//     if (entry.isIntersecting) {
//      document.getElementByClassName('content').style.background-attachment = "scroll";
//       square.classList.add('rotate-scale-up');
//    return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     square.classList.remove('rotate-scale-up');
//   });
// });



// window.onload = function(){
//     observer.observe(document.querySelector('.square-wrapper'));
// }


// W3Schools, HTML DOM Element scrollTop. Ar fáil ag: https://www.w3schools.com/jsref/prop_element_scrolltop.asp [Dáta rochtana 9 Márta 2022] 
window.onscroll = function() {myFunction()};

function myFunction() {
  if (screen.width > 800) {





    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      // document.getElementById("square").className = "slide-in-fwd-center";

      document.getElementById("tairgeText").className = "slide-in-fwd-center tairgeBigText";

      document.getElementById("tairgeImg").className = "slide-in-fwd-center";

    }
    else {
      // document.getElementById("square").className = "slide-out-bck-center";
      // square.classList.remove('slide-in-fwd-center');


      document.getElementById("tairgeText").className = "slide-out-bck-center tairgeBigText";
      tairgeText.classList.remove('slide-in-fwd-center');

      document.getElementById("tairgeImg").className = "slide-out-bck-center";
      tairgeImg.classList.remove('slide-in-fwd-center');

    }
  }
  
  // if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
  //   document.getElementById("square").className = "";
  // }
  // var element = document.getElementById('square-wrapper');
  // if (element.scrollHeight - element.scrollTop === element.clientHeight)
  //     {
  //    document.getElementById("square").className = "slide-out-bck-center";
  //    square.classList.remove('slide-in-fwd-center');
  //     }
}



