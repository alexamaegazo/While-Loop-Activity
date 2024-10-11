// Guess The Number
    const correctNum = Math.floor(Math.random() * 10) + 1;

function guessNum() {
    let userGuess;
    while (userGuess !== correctNum) {
        userGuess = parseInt(prompt("Guess a number between 1-10:"));

        if (userGuess < correctNum) {
            alert("Too low!");
        }else if (userGuess > correctNum) {
            alert("Too high!");
        }else if (userGuess === correctNum) {
            alert("Correct!");
        }else {
            alert("Please enter a valid number.");
        }
    }
}
guessNum();