const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
const maxAttempts = 10;

while (attempts < maxAttempts) {
  guess = prompt(`Attempt ${attempts + 1} of ${maxAttempts}: Enter your guess`);

  if (guess === null) {
    break;
  }

  guess = Number(guess);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Invalid input! Please enter a number between 1 and 100.");
    attempts--; // Don't count invalid attempts
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert(
      "Congratulations! You guessed the number in " + attempts + " attempts."
    );
    break;
  }

  if (attempts === maxAttempts) {
    alert("You've run out of attempts! The number was " + randomNumber);
  }
}
