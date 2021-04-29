function increment() {
// increment on click
var value = parseInt(document.getElementById("food").innerHTML);
document.getElementById("food").innerHTML = value + 1;
}


function spendfood() {
// spend 10 food for 1 power
var foodvalue = parseInt(document.getElementById("food").innerHTML);
var powervalue = parseInt(document.getElementById("power").innerHTML);

if (foodvalue < 10) {
  document.getElementById("notenough").innerHTML = "Not enough food";
}
else {
  document.getElementById("food").innerHTML = foodvalue - 10;
  document.getElementById("power").innerHTML = powervalue +1;
  document.getElementById("notenough").innerHTML = "";
}

checkPower();
}

function spend100food() {
// spend 10 food for 1 power
var foodvalue = parseInt(document.getElementById("food").innerHTML);
var powervalue = parseInt(document.getElementById("power").innerHTML);

if (foodvalue < 100) {
  document.getElementById("notenough").innerHTML = "Not enough food";
}
else {
  document.getElementById("food").innerHTML = foodvalue - 100;
  document.getElementById("power").innerHTML = powervalue +10;
  document.getElementById("notenough").innerHTML = "";
}

checkPower();
}

function spend500food() {
// spend 10 food for 1 power
var foodvalue = parseInt(document.getElementById("food").innerHTML);
var powervalue = parseInt(document.getElementById("power").innerHTML);

if (foodvalue < 500) {
  document.getElementById("notenough").innerHTML = "Not enough food";
}
else {
  document.getElementById("food").innerHTML = foodvalue - 500;
  document.getElementById("power").innerHTML = powervalue +100;
  document.getElementById("notenough").innerHTML = "";
}

checkPower();
}


function checkPower(){
  var powervalue = parseInt(document.getElementById("power").innerHTML);
  if (powervalue > 10) {
    document.getElementById("StealHuman").innerHTML = "<button class='button' onclick='eathuman()'> Steal Human Food</button>";
  }
  if (powervalue > 100) {
    document.getElementById("eatworm").innerHTML = "<button class='button' onclick='eatworm()'> Eat a Worm</button>";
  }
  if (powervalue > 500) {
    document.getElementById("eatbird").innerHTML = "<button class='button' onclick='eatbird()'> Eat a Bird</button>";
  }
  if (powervalue > 1000) {
    document.getElementById("eatfood").innerHTML = "";
    document.getElementById("eatbird").innerHTML = "";
    document.getElementById("eatworm").innerHTML = "";
    document.getElementById("StealHuman").innerHTML = "";
    document.getElementById("eatdad").innerHTML = "<button class='button' onclick='eatdad()'><h2> EAT DAD</h2></button>";
  }
}

function eatdad(){
  var foodvalue = parseInt(document.getElementById("food").innerHTML);
  var powervalue = parseInt(document.getElementById("power").innerHTML);
  document.getElementById("food").innerHTML = foodvalue + 10000;
  document.getElementById("power").innerHTML = foodvalue + 10000;
  document.getElementById("eatdad").innerHTML = "";
  document.getElementById("eatmom").innerHTML = "<button class='button' onclick='eatmom()'><h1> EAT MOM</h1></button>";
}

function eatmom(){
  var foodvalue = parseInt(document.getElementById("food").innerHTML);
  var powervalue = parseInt(document.getElementById("power").innerHTML);
  document.getElementById("food").innerHTML = foodvalue + 10000;
  document.getElementById("power").innerHTML = foodvalue + 100000000;
  document.getElementById("eatdad").innerHTML = "";
  document.getElementById("eatmom").innerHTML = "";
  document.getElementById("eatself").innerHTML = "<button class='button' onclick='eatself()'><h1> Eat Self?</h1></button>";
}

function eatself(){
  document.body.innerHTML = "<p><h2><center> Pickle has consumed himself and his family. Infinite Power. <br><img src = 'pick.jpg'></center></h2></p>";
}

function eathuman() {
// increment on click
var value = parseInt(document.getElementById("food").innerHTML);
document.getElementById("food").innerHTML = value + 10;
}
function eatworm() {
// increment on click
var value = parseInt(document.getElementById("food").innerHTML);
document.getElementById("food").innerHTML = value + 50;
}
function eatbird() {
// increment on click
var value = parseInt(document.getElementById("food").innerHTML);
document.getElementById("food").innerHTML = value + 150;
}
