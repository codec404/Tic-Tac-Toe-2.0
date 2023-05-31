let getWelcome = document.querySelector(".welcome");
getWelcome.style.left = "0px";
getWelcome.style.transform = "transition 0.6s ease";

let listen;

let getDetails = document.querySelector(".details");

let getButtons = document.querySelector(".buttons");

let redirectComp = document.querySelector(".vsComp");
let redirectUser = document.querySelector(".vsUser");

redirectComp.addEventListener("click", () => {
  window.location.href = "/gamevsComp.html";
});
redirectUser.addEventListener("click", () => {
  window.location.href = "/gamevsUser.html";
});

let continuebtn = document.querySelector(".cont-btn");
continuebtn.addEventListener("click", () => {
  getWelcome.style.left = "-410px";
  getWelcome.style.transform = "transition 0.6s ease";
  getDetails.style.right = "0px";
  getDetails.style.transform = "transition 0.6s ease";
  listen = 1;
});

document.querySelector(".play").addEventListener('click',()=>{
  getButtons.style.bottom = "0px";
  getButtons.style.transform = "transition 0.6s ease";
  getWelcome.style.left = "-410px";
  getWelcome.style.transform = "transition 0.6s ease";
  listen = 2;
});

let nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", display, false);

var counter = 0;

function display() {
  counter++;
  if (counter <= 3) {
    document.querySelector(`.detail-${counter}`).style.right = "0px";
    document.querySelector(`.detail-${counter}`).style.transform =
      "transition 0.6s ease";
  } else if (counter == 4) {
    document.querySelector(".continue").style.right = "0px";
    document.querySelector(".continue").style.transform =
      "transition 0.6s ease";
  } else if (counter > 4) {
    nextBtn.removeEventListener("click", display, false);
  }
}

let btnGo = document.querySelector(".continue");
btnGo.addEventListener("click", () => {
  getButtons.style.bottom = "0px";
  getButtons.style.transform = "transition 0.6s ease";
  getDetails.style.right = "-610px";
  getDetails.style.transform = "transition 0.6s ease";
});

document.querySelector(".back").addEventListener('click',()=>{
    getButtons.style.bottom = "-350px";
    getButtons.style.transform = "transition 0.6s ease";
    if(listen == 1){
      getDetails.style.right = "0px";
      getDetails.style.transform = "transition 0.6s ease";
    }
    else if(listen == 2){
      getWelcome.style.left = "0px";
      getWelcome.style.transform = "transition 0.6s ease";
    }
});