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
function fitter(){
  if (squareSize*squareSize*width < width){
    clear();
  }
  
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
  grid();
  if (mouseButton === RIGHT) {
    squareSize = squareSize + 10;
  }
  if (squareSize >= 100){
    squareSize = 100;
  }

  if (mouseButton === LEFT) {
    squareSize -= 5;
  }
  if (squareSize <= 5){
    squareSize = 5;
  }
  
}

function keyPressed(){
  if (keyCode == 65){ // A key to make speed faster
    grid();
  }
}