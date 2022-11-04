"use strict";
// A function to create X columns
const container = document.querySelector("#container");

function createBox() {
  for (let i = 0; i < 256; i++) {
    let box = document.createElement("div");

    box.classList.add("box");
    container.appendChild(box);
  }
}
createBox();

// box.addEventListener("mouseover", () => {
//   document.getElementsByClassName("box").style.color = "black";
// });
