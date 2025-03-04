const X_IMAGE_URL = 'https://gcdnb.pbrd.co/images/hEuGEi7oazfZ.png?o=1';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

// Initialize scoresssss
let scoreX = 0;
let scoreO = 0;

function assignSpace(space, owner) {
  const image = document.createElement('img');
  image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  const indexToRemove = freeBoxes.indexOf(space);
  freeBoxes.splice(indexToRemove, 1);
  space.removeEventListener('click', changeToX);
}

function changeToX(event) {
  assignSpace(event.currentTarget, 'x');

  if (isGameOver()) {
    displayWinner();
  } else {
    computerChooseO();
  }
}

function computerChooseO() {
  if (freeBoxes.length === 0) return;

  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];

  assignSpace(freeSpace, 'o');

  if (isGameOver()) {
    displayWinner();
  }
}

function isGameOver() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
  const winner = getWinner();
  const resultContainer = document.querySelector('#results');
  resultContainer.innerHTML = ''; // Clear previous results

  const header = document.createElement('h1');
  if (winner === 'x') {
    header.textContent = 'You win!';
    scoreX++; // Update score
  } else if (winner === 'o') {
    header.textContent = 'Computer wins';
    scoreO++; // Update score
  } else {
    header.textContent = 'Tie';
  }

  resultContainer.appendChild(header);
  updateScoreboard(); // Update scoreboard display

  // Remove remaining event listeners
  for (const box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

function checkBoxes(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

// Returns 'x', 'o', or null for no winner yet.
function getWinner() {
  for (let col = 0; col < 3; col++) {
    const offset = col * 3;
    // Check rows and columns.
    let result = checkBoxes(offset, 1 + offset, 2 + offset) ||
        checkBoxes(col, 3 + col, 6 + col);
    if (result) {
      return result;
    }
  }
  
  // Check diagonals
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

// Function to update the scoreboard
function updateScoreboard() {
  document.getElementById('scoreX').textContent = scoreX;
  document.getElementById('scoreO').textContent = scoreO;
}

// Initialize game
const freeBoxes = [];
const takenBoxes = {};
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}

// Restart Button Logic
const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', restartGame);

function restartGame() {
  // Clear the board
  for (const box of boxes) {
    box.innerHTML = '';  // Remove images
    box.addEventListener('click', changeToX); // Re-enable clicking
  }

  // Reset game state
  freeBoxes.length = 0;
  boxes.forEach(box => freeBoxes.push(box));
  for (const key in takenBoxes) {
    delete takenBoxes[key];
  }

  // Clear result text
  document.querySelector('#results').innerHTML = '';
}
