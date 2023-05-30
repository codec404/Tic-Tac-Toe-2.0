let getWelcome = document.querySelector(".welcome");
getWelcome.style.left = "0px";
getWelcome.style.transform = "transition 0.6s ease";

let getDetails = document.querySelector(".details");
getDetails.style.right = "0px";
getDetails.style.transform = "transition 0.6s ease";

let getButtons = document.querySelector(".buttons");
    getButtons.style.bottom = "0px";
    getButtons.style.transform = "transition 0.6s ease";

let redirectComp = document.querySelector(".vsComp");
let redirectUser = document.querySelector(".vsUser");

redirectComp.addEventListener('click',()=>{
    window.location.href = '/gamevsComp.html';
})
redirectUser.addEventListener('click',()=>{
    window.location.href = '/gamevsUser.html';
})