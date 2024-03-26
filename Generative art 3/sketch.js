// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
  stroke(0,80);
}

function randomElement(currentLen){
  //create one irregular line
  //rotate transformations
  push();
  rotate(random(360));
  while(currentLen > 5){
    rotate(random(-40,40));
    line(0,0,0,currentLen);
    translate(0, currentLen);
    currentLen *= 0.75;
  }
  pop();
}

function draw() {
  translate(width/2, height/2);
  for(let i = 0; i < 500; i++){
    translate(width/2,height/2);
    randomElement(random(20,70));
  }
}
