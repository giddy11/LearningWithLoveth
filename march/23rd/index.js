const title = document.getElementById('title');
const button = document.querySelector('button')

title.textContent = "This is changed here";
title.style.color = "red";

const triggerMe = function () {
    alert("Button Clicked!");
}

button.addEventListener("click", triggerMe)

