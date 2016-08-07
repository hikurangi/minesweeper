document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row:0, col:0, isMine: true, hidden: true},
    {row:0, col:1, isMine: false, hidden: true},
    {row:0, col:2, isMine: true, hidden: true},
    {row:0, col:3, isMine: false, hidden: true},
    {row:0, col:4, isMine: true, hidden: true},
    {row:1, col:0, isMine: false, hidden: true},
    {row:1, col:1, isMine: true, hidden: true},
    {row:1, col:2, isMine: false, hidden: true},
    {row:1, col:3, isMine: true, hidden: true},
    {row:1, col:4, isMine: false, hidden: true},
    {row:2, col:0, isMine: true, hidden: true},
    {row:2, col:1, isMine: false, hidden: true},
    {row:2, col:2, isMine: true, hidden: true},
    {row:2, col:3, isMine: false, hidden: true},
    {row:2, col:4, isMine: true, hidden: true},
    {row:3, col:0, isMine: false, hidden: true},
    {row:3, col:1, isMine: true, hidden: true},
    {row:3, col:2, isMine: false, hidden: true},
    {row:3, col:3, isMine: true, hidden: true},
    {row:3, col:4, isMine: false, hidden: true},
    {row:4, col:0, isMine: true, hidden: true},
    {row:4, col:1, isMine: false, hidden: true},
    {row:4, col:2, isMine: true, hidden: true},
    {row:4, col:3, isMine: false, hidden: true},
    {row:4, col:4, isMine: true, hidden: true},
  ]
}

function startGame () {
  for (var i = 0; i<board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  // 1. loop through all mines and a) if there is an unmarked mine, return. else b) add .markedMine property to accurately marked mines
      for (var k = 0; k<board.cells.length; k++) {
        if ((board.cells[k].isMine == true) && (board.cells[k].isMarked == false)) {
          // easy - if the for loop ever comes across a cell which is a mine and is not marked, then boot us out of the win condition
          return
        } else if ((board.cells[k].isMine == true) && (board.cells[k].isMarked == true)) {
        board.cells[k].markedMine = true;
      }
    }
  // build an array of all the cells which are accurately marked mines
  var countMarkedMinesProp = board.cells.filter(function (obj) {
    return obj.markedMine == true;
  });

  // array of all cells with mines, regardless of whether they're hidden or not
  var mineIdentifier = board.cells.filter(function (obj) {
    return obj.isMine == true;
  });

  // array of cells which are both hidden and mineless
  var hiddenCellCounter = board.cells.filter(function (obj) {
    return ((obj.hidden == true) && (obj.isMine == false));
  });

  // if the number of accurately marked mines and the number of mines which exist in the board are the same, AND there are no hidden cells which don't have mines, display the win message!
  if ((countMarkedMinesProp.length == mineIdentifier.length) && (hiddenCellCounter.length == 0)) {
    lib.displayMessage('You win!');
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//

//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.

// for loop method
function countSurroundingMines (cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (var j=0; j<surroundingCells.length; j++) {
    if (surroundingCells[j].isMine == true) {
      count ++
    }
  }
  return count

// filter method also works.
//   var cellsWithMines = surroundingCells.filter(function (obj) {
//     return obj.isMine == true;
//   });
//   return cellsWithMines.length;
}
