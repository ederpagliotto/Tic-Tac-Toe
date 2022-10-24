// Implementing gameboard module
const gameBoardModule = (function() {
    let gameBoard = [];
    return {};   //return an object or a function. (turns public)
})();            // () invoke the function immediately


const displayControllerModule = (function() {
    let testFunction = () => {console.log("Testing private function call inside of a module object...... ")};
    return {testFunction}; //testing if return as a public
})

//player factory function, looks similar but it doesn't have any parentesis to invoke function instantly
let createPlayer = (playerName, playerNumber, assignedxO) => {
    let getPlayerName = () => { playerName;
    console.log("This is the name of player " + playerNumber + "......." + playerName); }
    return {getPlayerName, playerName, playerNumber, assignedxO};
};