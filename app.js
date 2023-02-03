import { gameBoard } from "./modules/gameBoard.js";
import { createPlayers } from "./modules/players.js";
import { createSelectSquare } from "./modules/selectSquare.js";
import { gameState } from "./modules/gameState.js";
let gameDisplay = document.getElementById('gameDisplay')

let players = createPlayers('jeff', 'tim')

gameBoard.board.forEach((e)=>{
    gameDisplay.append(createSelectSquare(e))
    
})

let selectSquares = document.querySelectorAll('.selectSquare')
for(let i = 0; i < selectSquares.length; i++){
    selectSquares[i].setAttribute('id', `${i}`)
    
}

selectSquares.forEach((e) => {
    e.addEventListener('click',()=>{
        let gameBoardArrNum = e.getAttribute('id')

        if(gameState.currentNumberTurn %  2 === 0){
            gameBoard.board[gameBoardArrNum] = 'X'
            gameState.currentNumberTurn++
        }else{
            gameBoard.board[gameBoardArrNum] = 'O'
            gameState.currentNumberTurn++;
        }
        e.innerHTML = gameBoard.board[gameBoardArrNum]
    })
});

