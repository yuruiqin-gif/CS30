// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
  drawDisarray();
}

function drawDisarray(){
  //using a grid arrangments. draw squares that are increasingly offset from the predictable pattern
  for(let x = gridSpacing/2; x<width; x += gridSpacing){
    for(let y = gridSpacing/2; y<height; y+=gridSpacing){
      push(); //each square has its own unique transformations
      // rotation   transformation
      translate(x,y);
      let rAmount = map(y,0,height, 1, 45);
      rotate(random(-rAmount,rAmount));
      square(0,0,gridSpacing);
      pop();
    }
  }
}

function draw() {
  
}
