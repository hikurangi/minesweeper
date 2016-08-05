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


// var mineCounter = board.cells.filter(function (obj) {
//   return obj.isMine == true;
// });
// var flaggedMineCounter = 0

// Declare checkForWin variables outside of loops or commonly-repeated functions
var mineIdentifier = board.cells.filter(function (obj) {
  return obj.isMine == true;
});

var markedMineCounter = board.cells.filter(function (obj) {
  return obj.markedMine == true;
});

var hiddenCellCounter = board.cells.filter(function (obj) {
  return obj.hidden == true;
});

//the other other idea: add a property which marks marked mines, Mark.

function checkForWin () {
  // I think I get the instructions this time...
  // for (var k = 0; k<board.cells.length; k++) {
  //   if ((board.cells.isMine = true) && (board.cells.isMarked = true)) {
  //     console.log("Marked Mine #" + k);
  //   } else {
  //     return
  //   }
  // }
  //declare variables outside of for loop, but within its scope so this code is run only when checkForWin is activated
  var markedMineCounter = board.cells.filter(function (obj) {
    return obj.markedMine == true;
  });

  var hiddenCellCounter = board.cells.filter(function (obj) {
    return obj.hidden == true;
  });
  //
  for (var k = 0; k<board.cells.length; k++) {
    if ((board.cells[k].isMine = true) && (board.cells[k].isMarked = true)) {
      board.cells[k].markedMine = true;
      for (var l = 0; l<board.cells.length; l++) {
        if ((mineIdentifier.length = markedMineCounter.length) && (hiddenCellCounter.length = 0)) {
          lib.displayMessage('You win!')
        }
      }
    }
  }
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//

//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
//   var surroundingCells = getSurroundingCells(cell.row, cell.col);
//   var count = 0;
//   for (var j=0; j<surroundingCells.length; j++) {
//     if (surroundingCells[j].isMine = true) {
//       count ++
//     }
//   }
//   return count

//filter method somehow works!?
  var cellsWithMines = surroundingCells.filter(function (obj) {
    return obj.isMine == true;
  });
  return cellsWithMines.length;
}
