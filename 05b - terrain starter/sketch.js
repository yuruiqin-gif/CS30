// Terrain Generation Starter
// Yurui Qin
// March 13, 2024
// Precedurally Generated 2D Terrain

let rectWidth = 0.5;
let highPointX;
let highPointY;

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

    // highPointX = x;
    // highPointY = rectHeight2;

    // if(x > highPointX){
    //   highPointX = x
    // }

    // if(rectHeight2 > highPointY){
    //   highPointY = rectHeight2
    // }

    // drawFlag(highPointX,highPointY);
  }
}

function draw() {
  drawRectangles();
  drawFlag(100,50);
}

function drawFlag(x,y){
  line(x,y,x,y-10);
  fill(255,0,0);
  triangle(x,y-10,x,y-20,x+20,y-10);
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
