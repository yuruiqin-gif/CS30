// Terrain Generation Starter
// Yurui Qin
// March 13, 2024
// Precedurally Generated 2D Terrain

let rectWidth = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER); //CHANGE THIS
  drawRectangles();
}

function drawRectangles(){

  let rectHeight;
  let mountLine = 0;

  let rectHeight2;
  fill(0);
  for(let x = 0; x < width; x += rectWidth){

    rectHeight = noise(mountLine);
    rectHeight2 = map(rectHeight,0,1,0,255);

    rect(x, height/2, rectWidth, rectHeight2);
    mountLine += 0.01;
  }
  
}

function draw() {
  drawRectangles();
}

function drawFlag(x,y){

}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    rectWidth -= 0.01;
  }
  if (rectWidth <= 0.1){
    rectWidth = 0.1;
  }

  if (keyCode === RIGHT_ARROW){
    rectWidth += 0.01;
  }
  if (rectWidth >= 20){
    rectWidth = 20;
  }

  clear();
  drawRectangles();
}
