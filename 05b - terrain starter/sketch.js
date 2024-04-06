// Terrain Generation Starter
// Yurui Qin
// March 13, 2024
// Precedurally Generated 2D Terrain

let PerlinStart = 0;
let Increment= 0.01;

///////////
let rectWidth = 0.5;
let highPointX;
let highPointY;

let mountHeight = [];
let rectHeight;
let mountLine = 0; //time

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER); //CHANGE THIS
  drawRectangles();
}

function drawRectangles(){
  background(255);
  //finding the highest peak
  // if(mountHeight[x] >= mountHeight[x-1]){
  //   highestPoint = mountHeight[x];
  //   print(highestPoint);
  // }
  mountLine = PerlinStart;
  for(let x = 0; x < width; x++){
    rectHeight = noise(mountLine);
    rectHeight2 = map(rectHeight,0,1,0,height);

    rect(x, height, 0, rectHeight2*2);
    mountLine += Increment;
  }
  PerlinStart += 0.01;
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