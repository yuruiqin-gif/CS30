// Working With Images
// Yurui Qin
// March 14, 2024
//
// Loading and Display images / animations

let lionL, lionR;
let pinImages = [];
let currentIndex = 0;

function preload(){
  //runs BEFORE setup. Function won't end, until all loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //now the pinwheel images
for(let i = 0; i<9; i++){
  pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(10);
  //draw the picture

}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);

  image(pinImages[currentIndex%9], width/2, height/2);
  currentIndex++;
}
