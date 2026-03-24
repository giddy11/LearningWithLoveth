const title = document.getElementById('title');
const button = document.querySelector('button')

title.textContent = "This is changed here";
title.style.color = "red";

const triggerMe = function () {
    // alert("Button Clicked!");
    title.style.color = "blue"
}

// button.addEventListener("click", triggerMe)

button.addEventListener("click", () => {
    // alert("Button Clicked!");
    title.style.color = "blue"
})
