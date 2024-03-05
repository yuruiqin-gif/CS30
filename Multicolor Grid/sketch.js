// Multicolour Grid
// Yurui Qin
// May 5, 2025
//

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


function mousePressed() {
  if (mouseButton === RIGHT) {
    squareSize += 50;
  }
  if (mouseButton === LEFT) {
    squareSize -= 5;

    if (squareSize <= 5){
      squareSize = 5;
    }
    
  }
}