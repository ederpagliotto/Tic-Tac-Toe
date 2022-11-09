const cells = document.querySelectorAll(".cell");
const playerX = "X";
const playerO = "O";
let playerTurn = true;

// Implementing gameboard module
/*const gameBoardModule = (function() {
    let gameBoard = [];
    return {};   //return an object or a function. (turns public)
})();            // () invoke the function immediately
*/

const combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.addEventListener("click", (event) => {
    if (event.target.matches(".cell")) {
        console.log(event.target.id);
        play(event.target.id);
    }
});

function play(id) {
    const cell = document.getElementById(id);
    turn = playerTurn ? playerO : playerX;       //ternary, if it's true playerO plays, if it's false playerx plays.
    cell.textContent = turn;
    cell.classList.add(turn);
    playerTurn = !playerTurn;     // if the value is true, change to false and vice-versa.

   /* if (playerTurn == true) {
        playerTurn = false;
    } else if (playerTurn == false) {
        playerTurn = true;
    } */

    checkWinner(turn);
}


function checkWinner(turn) {
    const winner = combinations.some((comb) => {          // if some item in array returns true all the function returns true
        return comb.every((index) => {

        })       //all combinations needs to be true to return true, if one of them be false returns false
    })
}
