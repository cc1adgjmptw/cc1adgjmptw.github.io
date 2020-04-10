function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "220px";
 document.getElementById("a").style.display="none";
document.getElementById("b").style.display="block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
   document.getElementById("a").style.display="block";
    document.getElementById("b").style.display="none";
}
function myFunction(x) {
  x.classList.toggle("change");
}