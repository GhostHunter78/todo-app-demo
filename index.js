"use strict";

// giving buttons a background and a check icons appear on click

const buttons = document.querySelectorAll(".circle");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const currentBackground = buttons[i].style.background;

    if (currentBackground === "white" || currentBackground === "") {
      buttons[i].style.background =
        "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
    } else {
      buttons[i].style.background = "white";
    }
  });
}

// removing tasks by clicking on cross icon

const taskInputs = document.querySelectorAll(".task-input1");
const crossIcons = document.querySelectorAll(".cross");
const tasks = document.querySelectorAll("#new-task");

for (let i = 0; i < crossIcons.length; i++) {
  crossIcons[i].addEventListener("click", () => {
    tasks[i].style.display = "none";
  });
}
