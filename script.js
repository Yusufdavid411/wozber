



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
  

    if (nav.classList === "mynavOpen") {
      nav.classList.remove("mynavOpen")
    } else {
      nav.classList.toggle("mynav")
      nav.style.top = "block";
    }
  });
}


// language_choice ...............

function displayLanguages() {
  var lan = document.getElementsByClassName('languages')
  lan.classList.toggle("languagesOpen")

}






































