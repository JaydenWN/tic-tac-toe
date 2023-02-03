import { gameBoard } from "./gameBoard.js";

function findWinner(board) {
    console.log(gameBoard.board)
    let winningCombinationsX = [
      /xxx....../,
      /...xxx.../,
      /......xxx/,
      /x..x..x../,
      /.x..x..x./,
      /..x..x..x/,
      /x...x...x/,
      /..x.x.x../
    ];
    
    for (const combination of winningCombinationsX) {
      if (combination.test(board)) {
        return console.log('x won')
      }
    }
  
    let winningCombinationsO = [
      /ooo....../,
      /...ooo.../,
      /......ooo/,
      /o..o..o../,
      /.o..o..o./,
      /..o..o..o/,
      /o...o...o/,
      /..o.o.o../
    ];
  
    for (const combination of winningCombinationsO) {
      if (combination.test(board)) {
        return console.log('o won')
      }
    }
  
    return console.log('nobodys a winner');
  }
  export{findWinner}