// Cars Cars Cars!
// Yurui Qin
// 2024, April 12
//

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawRoad();
}

function drawRoad(){
  fill(0);
  rect(0, windowHeight/4, windowWidth,windowHeight/2);
  for(x = 0; x < windowWidth; x += 30){
    rect(windowWidth/2, windowHeight/2,50,20);
  }
}
