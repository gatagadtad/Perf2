// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess a number between 1 and 10
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

// Use a while loop to keep asking until the user guesses the correct number
while (guess !== correctNumber) {
    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    }
    // Prompt the user to guess again
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
}

// Log a message indicating the guess is correct
console.log("Correct!");
