// Terrain Generation Starter
// Yurui Qin
// March 11, 2024
// Precedurally Generated 2D Terrain

let rectWidth = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER); //CHANGE THIS
  drawRectangles();
}

function drawRectangles(){
  //using a single loop, generate a bunch of side-to-side
  //rectangles of varying height (pattern, random, noise)
  let rectHeight;
  let rectSize;
  fill(0);
  for(let x = 0; x < width; x += rectWidth){
  //   //Option 1 - pattern
  //   // rectHeight = x;

  //   //Option 2 - random()
    rectHeight = random(0, height*0.8);
    rectY = 100 * noise(0.005*frameCount);
    rectSize = 100 * noise(0.005*frameCount);
    rect(rectSize, rectY, rectWidth, rectHeight);

    // rectHeight = random(0, height*0.8);
    // rectY = 100 * noise(100*frameCount);
    // rectSize = 100 * noise(100*frameCount);
    // rect(x, 200, rectWidth, rectHeight);

  }
  
}

function draw() {
  drawRectangles();
}
