// Write your solution in this file!
// Declare global customerName
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer globally
function setBestCustomer() {
  bestCustomer = "not bob"; // No var, let, or const here
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // No var, let, or const here
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "some customer";

// Function to attempt changing leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new customer"; // This will throw an error
}
