"use strict";

//let speed  = document.getElementsById('currWind').innerHTML;
//let temp = document.getElementById('currTemp').innerHTML;

// console.log("speed is " + speed);
//console.log(`speed is ${speed}`);
//console.log(`temp is ${temp}`);
const speed = 5;
const temp = 40;
buildWC(speed, temp);


function buildWC(speed, temp) {
  const feelTemp = document.getElementById('feelTemp')


  // Compute the windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  // Round the answer down to integer
  wc = Math.floor(wc);

  // If chill is greater than temp, return the temp
  wc = (wc > temp) ? temp : wc;

  // Display the windchill
  console.log(wc);
  wc = 'Feels like ' + wc + '&deg;F';
  feelTemp.innerHTML = wc;


}
// Wind Dial Function
function windDial(direction){
  // Get the container
  const dial = document.getElementById("dial");
  console.log(direction);
  // Determine the dial class
  switch (direction){
   case "North":
   case "N":
    dial.setAttribute("class", "n"); //"n" is the CSS rule selector
    break;
   case "NE":
   case "NNE":
   case "ENE":
    dial.setAttribute("class", "ne");
    break;
   case "NW":
   case "NNW":
   case "WNW":
    dial.setAttribute("class", "nw");
    break;
   case "South":
   case "S":
    dial.setAttribute("class", "s");
    break;
   case "SE":
   case "SSE":
   case "ESE":
    dial.setAttribute("class", "se");
    break;
   case "SW":
   case "SSW":
   case "WSW":
    dial.setAttribute("class", "sw");
    break;
   case "East":
   case "E":
    dial.setAttribute("class", "e");
    break;
   case "West":
   case "W":
    dial.setAttribute("class", "w");
    break;
  }
 }

function metersToFeet(meters) {
  let feet = meters / 0.3048;
  return feet;
}
/* 
let temp  = 42
let speed = 5
name()
windchill(temp, speed)
function name(){
}
*/