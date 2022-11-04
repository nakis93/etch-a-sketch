"use strict";

const grid = document.createElement("div");
grid.id = "grid";
document.body.appendChild(grid);

function createColumn() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.toggle("square");
    grid.appendChild(square);
  }
}
createColumn();
