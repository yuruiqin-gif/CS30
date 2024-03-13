// Multicolour Grid
// Yurui Qin
// CS30
// March 12, 2024
// To draw a coloured grid affected by mouse and keyboard input

let squareSize = 25; //Starting size of the square

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid();
  document.addEventListener("contextmenu", event => event.preventDefault()) //gets rid of pop up when mouse right clicks
}

function draw() {

}

function grid(){ 
  for (let x = 0; x < width - squareSize; x += squareSize) { //draws a grid that fits in frame
    for (let y = 0; y < height - squareSize; y += squareSize) {
      stroke(0);
      square(x,y,squareSize); //draws a square
      fill(random(250),random(50),random(100)); //semi-randomly fills the square with different colour
    }
  }
}


function mousePressed() {
  if (mouseButton === RIGHT) { //Increase size of the squares if mouse right-clicked
    squareSize += 5;
  }
  if (squareSize >= 500){ //To avoid square dissapearing, if the square is too large it will not increase
    squareSize = 500;
  }

  if (mouseButton === LEFT) { //Decrease size of the squares if mouse left-clicked
    squareSize -= 1;
  }
  if (squareSize <= 10){ //To avoid program crashing, if the squares are too small it will not decrease any more
    squareSize = 10;
  }
  clear(); //Draws the current grid and allows all squares to be in frame
  grid();
}

function keyPressed(){
    grid(); //If a key is pressed then change the colour of the squares
}