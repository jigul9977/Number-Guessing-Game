let counter = 0;
const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

const validate = (value) => {
  if (isNaN(value)) {
    return "please enter a valid number";
  } else if (value < 1 || value > 100) {
    return "please enter a number between 1-100.";
  }
};
const checkGuess = (number, random) => {
	counter++;
	console.log(counter);
  if (+number === +random) {
    console.log("You guessed right.");
  } else if (+number > +random) {
    console.log("Guess a smaller number.");
    playGame();
  } else {
    console.log("Guess a bigger number.");
    playGame();
  }
};
const playGame = () => {
  const guessedNumber = prompt("guess a number between 1 - 100 ");
  if (guessedNumber === null) {
    return;
  }
  if (counter >= 10) {
		console.log("Game Over");
		
    return;
  }
  const validation = validate(guessedNumber);
  if (validation) {
    console.log(validation);

    return playGame();
  }
  checkGuess(guessedNumber, randomNumber);
};

playGame();

// for (let i = 0; i < 10; i++) {
//   // console.log(typeof );
//   if (!isNaN(guessedNumber)) {
//     if (guessedNumber === randomNumber) {
//       console.log("You guessed right.");
//     } else if (guessedNumber > randomNumber) {
//       console.log("Guess a smaller number.");
//       continue;
//     }else if (guessedNumber < randomNumber) {
//       console.log("Guess a bigger number.");
//       continue;
//     }
//   } else {
//     console.log("false");
//   }
// }
