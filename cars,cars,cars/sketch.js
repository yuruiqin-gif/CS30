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
  rect(0, windowHeight+50, windowWidth,windowHeight);
}
