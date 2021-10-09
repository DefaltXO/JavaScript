const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case 'rock':
      return userInput;
      break;
    case 'paper':
      return userInput;
      break;
    case 'scissors':
      return userInput;
      break;
    case 'bomb':
      return userInput;
      break;
    default:
      return 'Invald Input!';
      break;
  }
};

const getComputerChoice = () => {
  const pcPick = Math.floor(Math.random() * 3);
  switch (pcPick) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (UserChoice, computerChoice) => {
  // cheat code
  if (UserChoice === 'bomb') {
    return 'Player wins ... You sneaky cheater!';
  }
  if (UserChoice === computerChoice) {
    return 'The game was a tie!';
  }
  if (UserChoice === 'rock') {
    return computerChoice === 'paper' ? 'Computer won!' : 'Player wins!';
  }
  if (UserChoice === 'paper') {
    return computerChoice === 'scissors' ? 'Computer won!' : 'Player wins!';
  }
  if (UserChoice === 'scissors') {
    return computerChoice === 'rock' ? 'Computer wins!' : 'Player wins';
  }
};
//console.log(determineWinner('bomb','rock'));

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`Player chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
