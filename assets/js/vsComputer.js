let changeMode = document.querySelector(".vsUser");

changeMode.addEventListener('click',()=>{
    window.location.href = "/gamevsUser.html"
})

let resetWindow = document.querySelector(".reset");
let yesButton = document.querySelector(".ok");
let cancelButton = document.querySelector(".cancel");

yesButton.addEventListener('click',()=>{
    window.location.reload();
});

cancelButton.addEventListener('click',() =>{
    resetWindow.style.top = "-230px";
})

var origboard;
const you = 'X';
const comp = 'O';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

let cont = document.querySelector(".cont");
let mainMenu = document.querySelector(".main-menu");

cont.addEventListener('click',()=>{
    resetWindow.style.top = "30%";
        // resetWindow.style.position = "relative";
        resetWindow.style.transform = "transition 0.6s ease-in"
});
mainMenu.addEventListener('click',()=>{
    alert("Going back to main menu");
    window.location.href = "/";
})

const cells = document.querySelectorAll(".col");
startGame();

function startGame(){
    origboard = Array.from(Array(9).keys());
    for(var i = 0;i<cells.length;i++)
    {
        cells[i].addEventListener('click',turnclick,false);
    }
}

function turnclick(square){
    // console.log(square.target.id);
    if(typeof origboard[square.target.id] == 'number'){
        turn(square.target.id,you);
        if(!checkTie()){
            turn(bestSpot(),comp);
        }
    }
}

function turn(squareId,player){
    origboard[squareId] = player;
    let col = document.getElementById(squareId);
    if(col != null){
        col.innerHTML = player == you ? `<p style="user-select: none;color:#62FF00">${player}</p>` : `<p style="user-select: none;color: violet">${player}</p>`;
    }
    let gameWon = checkWin(origboard,player);
    if(gameWon) gameOver(gameWon);
}

function checkWin(board,player){
    let plays = board.reduce((a,e,i) =>
    (e === player) ? a.concat(i) : a , []);
    let gameWon = null;
    for(let [index,win] of winCombos.entries()){
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for(let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor = gameWon.player == you ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.1)";
    }

    for(var i=0;i<cells.length;i++)
    {
        cells[i].removeEventListener('click',turnclick,false);
    }
    if(gameWon.player == you){
        document.querySelector(".red").style.backgroundColor = 'red';
        document.getElementById("crown-1").style.display = "block";
        document.getElementById("setWinner").style.color = "red";
    }
    else if(gameWon.player == comp){
        document.querySelector(".green").style.backgroundColor = 'rgb(32, 228, 32)';
        document.getElementById("crown-2").style.display = "block";
        document.getElementById("setWinner").style.color = "rgb(32, 228, 32)";
    }
    declareWinner(gameWon.player == you ? 'You Won!!!' : 'Computer Won!!!')
}

function emptySquares(){
    return origboard.filter(s => typeof s == 'number');
}

function bestSpot(){
    return minimax(origboard, comp).index;
}

function checkTie(){
    if(emptySquares().length == 0 && !(checkWin(origboard,you) || checkWin(origboard,comp)))
    {
        for(var i = 0;i< cells.length;i++)
        {
            cells[i].removeEventListener('click',turnclick,false);
        }
        document.getElementById("setWinner").style.color = "violet";
        declareWinner("Tie!!!")
        return true;
    }
    return false;
}

function declareWinner(who){
    document.querySelector(".tagBody").style.display = "block";
    document.getElementById("setWinner").innerText = who; 
}

//Minimax Algorithm

function minimax(newBoard, player){
    var availSpots = emptySquares(newBoard);
    if(checkWin(newBoard,player)){
        return {score: -10};
    }
    else if(checkWin(newBoard,comp)){
        return {score: +10};
    }
    else if(availSpots.length === 0){
        return {score: 0};
    }

    var moves = [];
    for(i=0;i<availSpots.length;i++)
    {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;
        if(player == comp){
            var result = minimax(newBoard, you);
            move.score = result.score;
        }
        else{
            var result = minimax(newBoard, comp);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if(player === comp){
        var bestScore = -100000;
        for(var i = 0;i<moves.length;i++)
        {
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    else{
        var bestScore = 100000;
        for(var i = 0;i<moves.length;i++)
        {
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}