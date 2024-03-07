// Repositioning Rectangles
// Mr. Scott
// March 6, 2024
// Creating some geometry that can be
// picked up and moved around.

//global variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let pickedUp = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;  y = height/2;
  rWidth = 200; rHeight = 100;
}

function updateEdgePositions(){
  //update the top/right/bottom/left values
  rLeft = x - rWidth/2;  rRight = x + rWidth/2;
  rTop = y - rHeight/2;  rBottom = y + rHeight/2;
}

function inRectangle(){
  //returns true if the mouse is within the rectangle
  if(mouseX < rRight && mouseX > rLeft){
    //horiztonal match
    if(mouseY > rTop && mouseY <  rBottom){
      return true;
    }
  }

  return false;
}

function drawRectangle(){
  //render the rectange and calculate any movement
  updateEdgePositions();
  print("L:",rLeft,"\tT:",rTop, "\tR:", rRight, "\b",rBottom);

  if(inRectangle()){
    fill(100,250,150);
  }
  else{
    fill(255);
  }

  //check if the rectangle has been "picked up"
  if(pickedUp){
    x = mouseX;
    y = mouseY;
  }

  rect(x,y,rWidth,rHeight);
}

function mousePressed(){
  //triggers exactly once per click (on the mouse down)
  if(inRectangle()){
    pickedUp = true;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}