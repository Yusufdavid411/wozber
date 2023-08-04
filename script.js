



// navigation icon ...............
function myFunction(x) {
  x.classList.toggle("change");
}

var acc = document.getElementsByClassName("nav_icon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("myNav").style.height = "100%";
  
    var panel = document.getElementById("myNav");

    if (panel.style.display === "block") {
      panel.style.height = "0%";
    } else {
      panel.style.display = "block";
    }
  });
}
 


