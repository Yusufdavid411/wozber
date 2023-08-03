



// navigation icon ...............
function myFunction(x) {
  x.classList.toggle("change");
}

var acc = document.getElementsByClassName("nav_icon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");


    const panel = document.getElementsByClassName("container");
  
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
