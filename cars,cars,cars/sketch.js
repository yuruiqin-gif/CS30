// Cars Cars Cars!
// Yurui Qin
// 2024, April 12
//
let vehicles =[];

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  vehicles.push(new Vehicle(100, 250,0,'green', 0, 3));  // Car
  vehicles.push(new Vehicle(300, 350,1,'yellow', 1,3));  // Truck/Van
}

function draw() {
  background(255);
  drawRoad();

  for(let V of vehicles){ //displaying vechicles
    V.action();
  }
}

function drawRoad(){
  fill(0);
  rect(0, windowHeight/4, windowWidth,windowHeight/2);
  for(let x = 0; x < windowWidth; x += 80){
    fill(255);
    rect(x, (windowHeight/2)-10,50,10);
  }
}

class Vehicle{
  constructor(x,y, type, color, direction, speed){
    this.x = x;   
    this.y = y;    
    this.type = type;
    this.color = color;
    this.direction = direction;
    this.speed = speed;
  }
  display(){
    if(this.type === 0){
      this.showCar();
    }
    else if (this.type === 1){
      this.showTruck();
    }
  }

  showCar(){
    //for car
    noStroke();
    fill(this.color);
    rect(this.x, this.y, 50, 20);//body
    //wheels
    fill(255);
    rect(this.x+4, this.y-2, 15, 2);
    rect(this.x+4, this.y + 20, 15, 2);
    rect(this.x+30, this.y-2, 15, 2);
    rect(this.x+30, this.y + 20, 15, 2);
  }

  showTruck(){
    //for truck
    noStroke();
    fill(this.color);
    rect(this.x, this.y, 60, 30);//body
    //wheels
    fill(255);
    rect(this.x+5, this.y-2, 15, 2);
    rect(this.x+5, this.y + 30, 15, 2);
    rect(this.x+40, this.y-2, 15, 2);
    rect(this.x+40, this.y + 30, 15, 2);

    rect(this.x+60, this.y+5, 15, 20);
  }

  move(){
    if(this.direction === 1){ //if direction is right
      this.x += this.speed;
      if(this.x > width){
        this.x = -50; //resets
      }
    }
    else if(this.direction === 0){ //if direction is left
      this.x -= this.speed;
      if(this.x < -50){
        this.x = width; //resets car
      }
    }

  }

  speedUp(){
    if (this.direction === 1 && this.speed < 15) {
      this.speed += 0.5;
    } else if (this.direction === 0 && this.speed > -15) {
      this.speed -= 0.5;
    }
  }

  speedDown(){
    if (this.speed > 0.5) {
      this.speed -= 0.5;
    }
    // if (this.direction === 1 && this.speed > 0.5) {
    //   this.speed -= 0.5;
    // } else if (this.direction === 0 && this.speed < -0.5) {
    //   this.speed += 0.5;
    // }
  }
  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }
  action(){
    this.move();

    if (random(1) < 0.01) {
      this.speedUp();
    }

    if (random(1) < 0.01) {
      this.speedDown();
    }

    if (random(1) < 0.01) {
      this.changeColor();
    }

    this.display();
  }
}
