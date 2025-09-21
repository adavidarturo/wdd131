
// Current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;


const tempC = 15; // Temperature in Celsius (matches <span id="temp">)
const windKmh = 10; // Wind speed in km/h (matches <span id="wind">)

function calculateWindChill(temp, wind) {
    // Wind chill only applies if temp <= 10°C and wind > 4.8 km/h
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Arrow function to update wind chill on DOM load
document.addEventListener("DOMContentLoaded", () => { 
    const windChillCell = document.getElementById("windchill");
    if (tempC <= 10 && windKmh > 4.8) {
        windChillCell.textContent = `${calculateWindChill(tempC, windKmh)} °C`;
    } else {
        windChillCell.textContent = "N/A";
    }
});


