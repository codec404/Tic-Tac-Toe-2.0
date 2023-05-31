console.log("Welcome");
let changeMode = document.querySelector(".vsComputer");

changeMode.addEventListener('click',()=>{
    window.location.href = "/gamevsComp.html"
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
// console.log(arr);

// let k = 0;
// while(k<9){
    //     let gen = Math.floor(Math.random()*9)
    //     if(arr[gen] == -1)
    //     {
        //         arr[gen] = gen;
        //         console.log(arr);
        //         k++;
        //     }
        // }
        
let user1 = 1, user2 = 0;
let red = document.querySelector(".red");
red.style.background = "red";
let green = document.querySelector(".green");
let checked = new Array(9).fill(-1);
let isChecked = false;
let mark = document.querySelectorAll(".col");
let winner = 0;
let index = checked.length;

mark.forEach((e)=>{
    e.addEventListener("click",()=>{
        let getId = e.id;
        if(user1 && checked[getId] == -1)
        {
            e.innerHTML = "<p style = 'color:#62FF00;user-select: none;'>X</p>";
            // console.log("Done");
            user1 = 0;
            user2 = 1;
            red.style.background = "rgb(57, 2, 2)";
            green.style.background = "rgb(32, 228, 32)";
            checked[getId] = 0;
            index --;
            if(checked[0] == 0 && checked[1] == 0 && checked[2] == 0)
            {
                document.querySelector(".horizontal-0").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[3] == 0 && checked[4] == 0 && checked[5] == 0)
            {
                document.querySelector(".horizontal-1").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[6] == 0 && checked[7] == 0 && checked[8] == 0)
            {
                document.querySelector(".horizontal-2").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[0] == 0 && checked[3] == 0 && checked[6] == 0)
            {
                document.querySelector(".vertical-0").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[1] == 0 && checked[4] == 0 && checked[7] == 0)
            {
                document.querySelector(".vertical-1").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[2] == 0 && checked[5] == 0 && checked[8] == 0)
            {
                document.querySelector(".vertical-2").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[0] == 0 && checked[4] == 0 && checked[8] == 0)
            {
                document.querySelector(".slant-1").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            else if(checked[2] == 0 && checked[4] == 0 && checked[6] == 0)
            {
                document.querySelector(".slant-0").style.display = "block";
                isChecked = true;
                winner = 1;
                resultAndreset(winner);
                return;
            }
            if(index == 0)
            {
                resultAndreset(winner);
                return;
            }
        }
        else if(user2 && checked[getId] == -1)
        {
            e.innerHTML = "<p style = 'color:rgb(102, 144, 241);user-select: none;'>O</p>";
            // console.log("Done");
            user1 = 1;
            user2 = 0;
            red.style.background = "red";
            green.style.background = "rgb(1, 42, 1)";
            checked[getId] = 1;
            index --;
            if(checked[0] == 1 && checked[1] == 1 && checked[2] == 1)
            {
                document.querySelector(".horizontal-0").style.display = "block";
                document.querySelector(".horizontal-0").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[3] == 1 && checked[4] == 1 && checked[5] == 1)
            {
                document.querySelector(".horizontal-1").style.display = "block";
                document.querySelector(".horizontal-1").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[6] == 1 && checked[7] == 1 && checked[8] == 1)
            {
                document.querySelector(".horizontal-2").style.display = "block";
                document.querySelector(".horizontal-2").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[0] == 1 && checked[3] == 1 && checked[6] == 1)
            {
                document.querySelector(".vertical-0").style.display = "block";
                document.querySelector(".vertical-0").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[1] == 1 && checked[4] == 1 && checked[7] == 1)
            {
                document.querySelector(".vertical-1").style.display = "block";
                document.querySelector(".vertical-1").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[2] == 1 && checked[5] == 1 && checked[8] == 1)
            {
                document.querySelector(".vertical-2").style.display = "block";
                document.querySelector(".vertical-2").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[0] == 1 && checked[4] == 1 && checked[8] == 1)
            {
                document.querySelector(".slant-1").style.display = "block";
                document.querySelector(".slant-1").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            else if(checked[2] == 1 && checked[4] == 1 && checked[6] == 1)
            {
                document.querySelector(".slant-0").style.display = "block";
                document.querySelector(".slant-0").style.background = "rgb(32,228,32)";
                isChecked = true;
                winner = 2;
                resultAndreset(winner);
                return;
            }
            if(index == 0)
            {
                resultAndreset(winner);
                return;
            }
        }
    })
});

let setWinner = document.getElementById("setWinner");
let disp = document.querySelector(".tagBody");
let gameOver = document.querySelector(".GameOver");
let hidegame = document.querySelector(".hide-game");
let crown1 = document.getElementById("crown-1");
let crown2 = document.getElementById("crown-2");
let goback = document.querySelector(".main-menu");
let playAgain = document.querySelector(".cont");

function resultAndreset(getWinner){
    // location.reload();
    disp.style.display = "block";
    red.style.background =  "rgb(57, 2, 2)";
    green.style.background =  "rgb(1, 42, 1)";
    hidegame.style.display = "block";
    if(getWinner == 0)
    {
        setWinner.innerHTML = "None &#128533;";
        setWinner.style.color = "rgb(73, 134, 239)";
    }
    else if(getWinner ==  1)
    {
        setWinner.innerHTML = "User - 1 &#129321;";
        setWinner.style.color = "red";
        crown1.style.display = "block"
    }
    else if(getWinner == 2)
    {
        setWinner.innerHTML = "User - 2 &#129321;";
        setWinner.style.color = "rgb(32,228,32)";
        crown2.style.display = "block"
    }
    goback.addEventListener("click",()=>{
        alert("Going back to main menu");
        window.location.href = "/";
    });
    playAgain.addEventListener("click",()=>{
        resetWindow.style.top = "30%";
        // resetWindow.style.position = "relative";
        resetWindow.style.transform = "transition 0.6s ease-in"
    });
}