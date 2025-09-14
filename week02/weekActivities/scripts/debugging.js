
// Guetting the elements from the DOM
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('#area'); // Use querySelector to select by ID

let area = 0;
const PI = 3.14159;

const radius = 10;
area = PI * radius * radius;
radiusOutput = radius; // Add textContent to update the DOM
areaOutput = area; // Add textContent to update the DOM

radius = 20;
area = PI * radius * radius;
radiusOutput = radius; // Add innerText to update the DOM
areaOutput = area; // Add innerText to update the DOM