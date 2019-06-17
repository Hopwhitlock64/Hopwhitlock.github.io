
let speed  = document.getElementsById('currWind').innerHTML;
let temp = document.getElementById('currTemp').innerHTML;

// console.log("speed is " + speed);
console.log(`speed is ${speed}`);
console.log(`temp is ${temp}`);

buildWC(windSpeed,currentTemperature);

function buildWC(speed, temp){
    const feelTemp = document.getElementById('feelTemp')

   // Compute the windchill
 let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);

 // Round the answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;

// <p id="feel">Feels Like <span id="feelTemp">??</span>°F</p>

// Display the windchill
console.log(wc);
feelTemp.innerHTML = wc;

// <p id="feelTemp">??</p>
}

function metersToFeet(meters){
  let feet =  meters / 0.3048
    return feet;
}