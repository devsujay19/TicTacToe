let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameState[cellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[cellIndex] = currentPlayer;
  document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
  checkResult();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function checkResult() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameState[a] !== '' &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      gameActive = false;
      highlightWinnerCells(a, b, c);
      window.alert(`Player ${gameState[a]} wins!`);
      window.prompt("How are you Feeling now?", "Good")
      return;
    }
  }


  if (!gameState.includes('')) {
    gameActive = false;
    window.alert('It\'s a Tie!');
    window.prompt("This is for 1st person : How are you Feeling now?");
    window.prompt("This is for 2nd person : How are you Feeling now?");
  }
}

function highlightWinnerCells(a, b, c) {
  const cells = document.getElementsByClassName('cell');
  cells[a].classList.add('winner');
  cells[b].classList.add('winner');
  cells[c].classList.add('winner');
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
    cells[i].classList.remove('winner');
  }
}

resetGame();

function myProfileGithub(){
  window.open("https://github.com/devsujay19");
}
function myProfileFacebook(){
  window.open("https://www.facebook.com/profile.php?id=100092647425033");
}
function myProfileInstagram(){
  window.open("https://www.instagram.com/devsujay19");
}