// Terrain Generation Starter
// Yurui Qin
// March 13, 2024
// Precedurally Generated 2D Terrain

let PerlinStart = 0;
let Increment= 0.01;

///////////
let rectWidth = 1;
let mountLine = 0; //time

let heightAvg = 0;
let MountTotal = 0;
let MountNum = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER); //CHANGE THIS
  drawRectangles();
}

function drawRectangles(){
  background(255);
  stroke(0,0,0);
  mountLine = PerlinStart;

  let tallPointX = 0;
  let tallPointY = 0;

  MountTotal = 0;
  MountNum = 0; 

  for(let x = 0; x < width; x++){

    y = map(noise(mountLine),0,1,0,height);
    //finding the highest peak
    if(y > tallPointY){
      tallPointY = y;
      tallPointX = x;
    }
    MountTotal += y;
    MountNum++;

    rect(x, height, rectWidth, y*2);
    mountLine += Increment;
  }
  heightAvg = MountTotal/MountNum;

  drawFlag(tallPointX, height-tallPointY);
  
  PerlinStart += 0.01;

  stroke(255,0,0);
  line(0,heightAvg,windowWidth,heightAvg);

  fill(0,0,0);
}

function draw() {
  drawRectangles();
  // drawFlag(highestPoint,rectWidth);
  // drawFlag(100,50);
}

function drawFlag(x,y){
  line(x,y,x,y-10);
  fill(255,0,0);
  triangle(x,y-10,x,y-20,x+20,y-10);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    rectWidth -= 1;
  }
  if (rectWidth <= 1){
    rectWidth = 1;
  }

  if (keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
}