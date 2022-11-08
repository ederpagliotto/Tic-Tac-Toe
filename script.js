const celulas = document.querySelectorAll(".celula");
const playerX = "X";
const playerO = "O";
let playerTurn = true;

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula")) {
        console.log(event.target.id);
        play(event.target.id);
    }
});

function play(id) {
    const celula = document.getElementById(id);
    turn = playerTurn ? playerO : playerX;       //ternary, if it's true playerO plays, if it's false playerx plays.
    celula.textContent = turn;
    playerTurn = !playerTurn;     // if the value is true, change to false and vice-versa.

   /* if (playerTurn == true) {
        playerTurn = false;
    } else if (playerTurn == false) {
        playerTurn = true;
    } */

    checkWinner(turn);
}


// Implementing gameboard module
/*const gameBoardModule = (function() {
    let gameBoard = [];
    return {};   //return an object or a function. (turns public)
})();            // () invoke the function immediately
*/