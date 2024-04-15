// Art Replication Warm-up
// Yurui Qin
// April 15, 2024
//
// Replicating 1960s artwork “Computer Composition With Lines”

rectList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  circle(width/2, height/2,500);

  for (let i = 0; i < width/2; i+=10) {
    for (let i = 0; i < height/2; i+=10) {
      randomRect();
    }
  }
}

function randomRect(){
  push();
  fill(0);
  rect(random((width/2)-250,(width/2)+250),random((height/2)-250,(height/2)+250),random(0, 15),random(0,15));
  pop();
}
