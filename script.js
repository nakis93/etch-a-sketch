"use strict";

const grid = document.createElement("div");
grid.id = "grid";
document.body.appendChild(grid);
console.log(grid);

function createColumn() {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    grid.appendChild(square);
    console.log(square);
  }
}

for (let i = 0; i < 16; i++) {
  createColumn();
}
