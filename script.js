const boards = document.getElementById("board");
let cell = document.getElementsByClassName("cell");
let currPlayer = "X";

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function move(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currPlayer;
    boards.children[row * 3 + col].innerHTML = currPlayer;
    if (checkWinner() == true) {
      setTimeout(() => {
        alert( currPlayer , " is winner");
        resetBoard();
      }, 10);
      return;
    }
    if (checkTie() == true) {
      setTimeout(() => {
        alert("No winner Tie !!");
        resetBoard();
      }, 0);
      return;
    }

    if (currPlayer == "X") {
      currPlayer = "O";
    } else {
      currPlayer = "X";
    }
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == board[i][1] &&
      board[i][1] == board[i][2] &&
      board[i][0] == currPlayer
    ) {
      //   console.log(currPlayer, "is the winner !");
      //   alert(currPlayer, "is the winner");
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] == board[1][i] &&
      board[1][i] == board[2][i] &&
      board[0][i] == currPlayer
    ) {
      //   console.log(currPlayer, "is the winner !");
      //   alert(currPlayer, "is the winner");
      return true;
    }
  }
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] == currPlayer
  ) {
    // console.log(currPlayer, "is the winner !");
    // alert(currPlayer, "is the winner");
    return true;
  }
  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[0][2] == currPlayer
  ) {
    // console.log(currPlayer, "is the winner !");
    // alert(currPlayer, "is the winner");
    return true;
  }
}
function checkTie() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        return false;
      }
    }
  }
  return true;
}
function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  for (let i = 0; i < 9; i++) {
    cell[i].innerHTML = "";
  }
  currPlayer = "X";
}
