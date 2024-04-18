// Cars Cars Cars!
// Yurui Qin
// 2024, April 12
//

let eastbound = [];
let westbound = [];

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
  for(x = 0; x < windowWidth; x += 80){
    fill(255);
    rect(x, (windowHeight/2)-10,50,10);
  }
}

class Vehicle{
  display(){
    //for car
    fill(0);
    rect(x,y,30,10);

    fill(0);
    rect(x+5,y,3,2)
    rect(x+8,y,3,2)
    rect(x+5,y+10,3,2)
    rect(x+8,y+10,3,2)

  }
  move(){

  }
  speedUp(){

  }
  speedDowm(){

  }
  changeColor(){

  }
  action(){

  }
}
