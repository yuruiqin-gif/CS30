// Cars Cars Cars!
// Yurui Qin
// 2024, April 12
//
let cars =[];
const NUM_RoundRacer = 1;

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < NUM_CARS; i++){
    let c = color(random(255),random(255),random(255));
    cars.push(new RoundRacer(width/2,height/2,c));
  }
  noStroke();
  background(0);
}

function draw() {
  background(255);
  drawRoad();
  for(let V of ){
    R.move();
    R.display();
  }
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
  constructor(x,y,c){
    // this.x = x; this.y = y; this.c = c;
    // this.speed = random(2,10);
    this.x = x;   this.y = y;    this.c = c;
    this.speed1 = random(2,10);
    this.speed2 = random(2,10);
    this.speed3 = random(2,10);
  }
  display(){
    //for car
    fill(100);
    rect(this.x,this.y,30,10);

    fill(100);
    rect(this.x+5,this.y,3,2)
    fill(100);
    rect(this.x+8,this.y,3,2)
    fill(100);
    rect(this.x+5,this.y+10,3,2)
    fill(100);
    rect(this.x+8,this.y+10,3,2)

  }
  move(){
    this.x += this.speed1;
    if(this.x>width){
      this.x =0;
    }
    
    this.x2 += this.speed2; //RIGHT
    if(this.x2>width){
      this.x2 =0;
    }
    
    this.x1 += this.speed3; //LEFT
    if(this.x1>width){
      this.x1 =0;
    }
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
