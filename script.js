



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


// toggle icon navbar..........................................

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

































