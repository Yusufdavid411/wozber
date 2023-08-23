



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
    this.style.zIndex = "-1";
  

    if (nav.classList === "mynavOpen") {
      nav.classList.remove("mynavOpen")
      nav.style.zIndex = "-1";

    } else {
      nav.classList.toggle("mynav")
      // nav.style.top = "block";
    }
  });
}


const mobileNav = document.querySelector(".navigation");
window.addEventListener("scroll", function(){
    mobileNav.classList.toggle("sticky", window.scrollY > 20)
})

const lapNav = document.querySelector(".topnav_lap");
window.addEventListener("scroll", function(){
    lapNav.classList.toggle("sticky", window.scrollY > 20)
})




// language_choice ...............

function displayLanguages() {
  var lan = document.getElementsByClassName('languages')
  lan.classList.toggle("languagesOpen")

}






































