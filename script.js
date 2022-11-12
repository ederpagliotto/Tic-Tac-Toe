const cells = document.querySelectorAll(".cell");
const playerX = "X";
const playerO = "O";

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
        play(event.target.id, playerO);
        bot();
    }
});

function bot(){
    const availablePositions = [];
    for (index in cells) {
        if (!isNaN(index)) {
            if (!cells[index].classList.contains("O") && !cells[index].classList.contains("O")) {
                availablePositions.push(index);
            }
        }
    }

    const randomPositions = Math.floor(Math.random() * availablePositions.length);
    play(availablePositions[randomPositions], playerX);
}

function play(id, turn) {
    const cell = document.getElementById(id);
    cell.textContent = turn;
    cell.classList.add(turn);
    checkWinner(turn);
}


function checkWinner(turn) {
    const winner = combinations.some((comb) => {          // if some item in array returns true all the function returns true
        return comb.every((index) => {
            return cells[index].classList.contains(turn);
        })       //all combinations needs to be true to return true, if one of them be false returns false
    });

    if (winner) {
        finishGame(turn);
    } else if (checkTie()) {
        finishGame();
    }
}

function checkTie(){
    let x = 0;
    let o = 0;
    
    for (index in cells) {
        if (!isNaN(index)) {             //if index is a number
            if (cells[index].classList.contains(playerX)) {
                x++;
            }
    
            if (cells[index].classList.contains(playerO)) {
                o++;
            }
        }
    }
    return x + o === 9 ? true : false;
}

function finishGame(winner = null) { //when the function returns a parameter or not we can use parameter = null
    const blackScreen = document.getElementById("black-screen");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem = null;
    
    blackScreen.style.display = "block";
    blackScreen.appendChild(h2);
    blackScreen.appendChild(h3);
    
    if (winner) {                       //if returns a parameter it will prevail over null value
        h2.innerHTML = `Player ${winner} won!`;
    } else {
        h2.innerHTML = "It's a tie!";
    }  
    
    let counter = 3;

    setInterval(() => {
        h3.innerHTML = `Reinitializing in ${counter--}...`; //counter-- to decrease during the interval.
    }, 1000);

    setTimeout(() => location.reload(), 4000);
}