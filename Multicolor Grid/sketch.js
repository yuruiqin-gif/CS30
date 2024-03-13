// Multicolour Grid
// Yurui Qin
// May 5, 2025
//To draw a coloured grid affected by mouse input

let squareSize = 25; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid();
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {

}

function grid(){
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      stroke(0);
      square(x,y,squareSize);
      fill(random(250),random(0),random(250));
    }
  }
}


function mousePressed() {
  if (mouseButton === RIGHT) {
    squareSize += 5;
  }
  if (squareSize >= 500){
    squareSize = 500;
  }

  if (mouseButton === LEFT) {
    squareSize -= 1;
  }
  if (squareSize <= 10){
    squareSize = 510;
  }
  clear();
  grid();
}

function keyPressed(){
    grid();
}