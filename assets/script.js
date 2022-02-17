// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Randy Pellegrin"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb = gb + 1;
  gbPlusBtn.textContent = gb;
});

// HINT: You can delete this console.log after you no longer need it!
console.log("gbPlusBtn", gbPlusBtn);

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons
