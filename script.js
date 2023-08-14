



// navigation icon ...............
function myFunction(x) {
  x.classList.toggle("change");
}

var acc = document.getElementsByClassName("nav_icon");
var nav = document.getElementById("myNav");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    nav.classList.toggle("mynavOpen")
    nav.style.zIndex = "-1";
  

    if (nav.classList === "mynavOpen") {
      nav.classList.remove("mynavOpen")
      nav.style.zIndex = "-1";

    } else {
      nav.classList.toggle("mynav")
      // nav.style.top = "block";
    }
  });
}


const header = document.querySelector(".navigation");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})


// language_choice ...............

function displayLanguages() {
  var lan = document.getElementsByClassName('languages')
  lan.classList.toggle("languagesOpen")

}






































