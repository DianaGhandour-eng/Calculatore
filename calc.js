let input = document.getElementById("calc");

function display(num){
input.value += num;
}
function Clear(){
input.value = "";
}
function Delete(){
input.value = input.value.slice(0,-1);
}
function calc(){
try{
input.value = eval(input.value);
}
catch(err){
input.value = "ERROR "
}
}
document.addEventListener("keydown", function (event) {
  var key = event.key;
  if (/[0-9/*\-+.]/.test(key)) {
    display(key);
  } else if (key === "Enter") {
    calc();
  } else if (key === "Escape") {
   Delete();
  }
});