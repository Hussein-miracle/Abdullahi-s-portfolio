"use strict";

const toggleBtn = document.querySelector("#switch");

toggleBtn.addEventListener("click",function(){
    document.body.classList.add("darkmode");
})

// const toggleBtnBall = document.querySelector(".toggle-ball")

// const body = document.querySelector(".body");



// toggleBtn.addEventListener("mouseclick",function(){
//     body.classList.toggle("body");
//     body.classList.toggle("body-color-1");


//     // toggleBtnBall.style.webkitTransform = "translateX(25px)";
//     // toggleBtnBall.style.transform = "translateX(25px)";
//     toggleBtnBall.style.left = '25px';

// })