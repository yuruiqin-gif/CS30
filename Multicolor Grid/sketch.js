// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid();
}

function draw() {
  
}

function grid(){
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      stroke(0);
      square(x,y,squareSize);
      fill(random(250),random(250),random(250));
    }
  }
}