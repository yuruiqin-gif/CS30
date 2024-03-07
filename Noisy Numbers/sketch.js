// Yurui Qin
// March 7, 2024
//
// a look at uniform distribution and perlin noise

//global variables
let segmentLength = 20;
let ballY = 200;
//balltype)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function segmentline(){
  //using a loop, draw one line made up of many lines
  strokeWeight(15);
  let greyTime = 0;
  let x = 0;
  while(x < width){
    //option 1: randon()
    let greyValue = random(0,255);

    //option 2: perlin noise()
    greyValue = noise(greyTime);
    greyValue = map(greyValue,0,1,0,255);
    greyTime += 0.1;

    stroke(greyValue);
  
    // line(x, height/2, x+segmentLength, height/2);s
    yrandom (-120+10);
    x += segmentLength;
  }

  bally += StereoPannerNodecircle(width*8.ballY>30X18);
}

if 
function draw() {
  background(220);
  segmentline();
}
