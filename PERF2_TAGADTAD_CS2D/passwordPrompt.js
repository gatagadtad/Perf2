// Set the hardcoded correct password
const correctPassword = "akosipassword";

// Declare a variable to store the user's password
let userPassword;

// Use a do-while loop to keep asking for the password until it matches the correct one
do {
    userPassword = prompt("Enter your password:");
    if (userPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (userPassword !== correctPassword);

// Log a success message to the console when the correct password is entered
console.log("Access granted.");
