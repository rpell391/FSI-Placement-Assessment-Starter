let yourName = "Randy Pellegrin"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkles

credit.textContent = `Created by ${yourName}`;

const gbplus = document.querySelector("#qty-gb");
const gbminus = document.querySelector("#qty-gb");
const ccplus = document.querySelector("#qty-cc");
const ccminus = document.querySelector("#qty-cc");
const sugarplus = document.querySelector("#qty-sugar");
const sugarminus = document.querySelector("#qty-sugar");

console.log("gbplus", gbplus);
console.log("gbminus", gbminus);
console.log("ccplus", ccplus);
console.log("ccminus", ccminus);
console.log("sugarplus", sugarplus);
console.log("sugarminus", sugarminus);

let gbplusbutton = document.querySelector("#add-gb");
gbplusbutton.addEventListener("click", function () {
  gb = gb + 1;
  gbplus.textContent = gb;
});

let gbminusbutton = document.querySelector("#minus-gb");
gbminusbutton.addEventListener("click", function () {
  gb = gb - 1;
  gbminus.textContent = gb;
});

let ccplusbutton = document.querySelector("#add-cc");
ccplusbutton.addEventListener("click", function () {
  cc = cc + 1;
  ccplus.textContent = cc;
});

let ccminusbutton = document.querySelector("#minus-cc");
ccminusbutton.addEventListener("click", function () {
  cc = cc - 1;
  ccminus.textContent = cc;
});

let sugarplusbutton = document.querySelector("#minus-sugar");
sugarplusbutton.addEventListener("click", function () {
  sugar = sugar + 1;
  sugarplus.textContent = sugar;
});

let sugarminusbutton = document.querySelector("#add-sugar");
sugarminusbutton.addEventListener("click", function () {
  sugar = sugar - 1;
  sugarminus.textContent = sugar;
});
