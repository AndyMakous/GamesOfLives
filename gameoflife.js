/// <reference path="./p5.global-mode.d.ts" />


let cells = [];

function setup() {
  createCanvas(400,400);
  for (let i=0; i<width/10; i++){
    cells[i] = [];
    for (let j=0; j<height/10; j++){
      let state = floor(random(0,2));
      // new Cell(i, j, state)
      cells[i].push(state);
    }
  }
  draw();

}

function draw() {
  background(24);
}