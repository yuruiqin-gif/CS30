// Cars Cars Cars!
// Yurui Qin
// 2024, April 12
//
let lightTimer = 0;
let lightState = 'green';

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i <= 20; i++){
    eastbound.push(new Vehicle(0, random(windowHeight/3.9,windowHeight/2.5),floor(random(0,2)),'green', 1, 3)); 
  }
  for (let i = 0; i <= 20; i++){
    westbound.push(new Vehicle(0, random(windowHeight/2,windowHeight/1.5),floor(random(0,2)),'green', 0, 3)); 
  }

  trafficLight = new TrafficLight(width/2, height/8, 'green');
}

function draw() {
  background(255);
  drawRoad();

  if (lightState === 'amber' && frameCount >= lightTimer){
    lightState = 'red';
    trafficLight.state = 'red'
    lightTimer = frameCount + 120;
  }
  else if(lightState === 'red' && frameCount >= lightTimer){
    lightState = 'green';
    trafficLight.state = 'green';
  }

  trafficLight.display();

  for(let e of eastbound){ //displaying vechicles
    if(lightState === 'green'){
      e.action();
    }
    else{
      e.display();
    }
  }

  for(let w of westbound){ //displaying vechicles
    if(lightState === 'green'){
      w.action(); 
    }
    else{
      w.display();
    }
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

function mousePressed(){
  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {
      // Add westbound car
      westbound.push(new Vehicle(mouseX, random(windowHeight/2,windowHeight/1.5),floor(random(0,2)),'green', 0, 3)); 
    }
    else{
      // Add eastbound car
      eastbound.push(new Vehicle(mouseX, random(windowHeight/3.9,windowHeight/2.5),floor(random(0,2)),'green', 1, 3)); 
    }
  }
}

function keyPressed(){
 if (key = ' '){
  if(lightState === 'green'){
    lightState = 'amber';
    trafficLight.state = 'amber';
    lightTimer = frameCount + 60;
  }
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
    noStroke();
    fill(this.color);
    if(this.direction === 1){
      rect(this.x, this.y, 60, 30);//body
      rect(this.x+60, this.y+5, 15, 20);
      //wheels
      fill(255);
      rect(this.x+5, this.y-2, 15, 2);
      rect(this.x+5, this.y + 30, 15, 2);
      rect(this.x+40, this.y-2, 15, 2);
      rect(this.x+40, this.y + 30, 15, 2);
    }
    else{
      rect(this.x, this.y, 60, 30);//body
      rect(this.x-15, this.y+5, 15, 20);
      //wheels
      fill(255);
      rect(this.x+5, this.y-2, 15, 2);
      rect(this.x+5, this.y + 30, 15, 2);
      rect(this.x+40, this.y-2, 15, 2);
      rect(this.x+40, this.y + 30, 15, 2);
    }
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
    if (this.speed < 15) {
      this.speed += 0.5;
    }
    // if (this.direction === 1 && this.speed < 15) {
    //   this.speed += 0.5;
    // } else if (this.direction === 0 && this.speed > -15) {
    //   this.speed -= 0.5;
    // }
  }

  speedDown(){
    if (this.speed > 0.5) {
      this.speed -= 0.5;
    }
    if (this.speed === 0){
      this.speed = 0.5; //so the car does not stop
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

class TrafficLight{
  constructor(x,y,state){
    this.x = x;
    this.y = y;
    this.state = state;
  }
  display(){
    fill(50);
    rect(this.x - 10, this.y - 40, 20, 80);
    fill(0);
    ellipse(this.x, this.y - 20, 20, 20); // Red light
    ellipse(this.x, this.y, 20, 20); // Amber light
    ellipse(this.x, this.y + 20, 20, 20); // Green light
    
    if (this.state === 'red') {
      fill(255, 0, 0);
      ellipse(this.x, this.y - 20, 20, 20); // Red light on
    } else if (this.state === 'green') {
      fill(0, 255, 0);
      ellipse(this.x, this.y + 20, 20, 20); // Green light on
    } else if (this.state === 'amber') {
      fill(255, 255, 0);
      ellipse(this.x, this.y, 20, 20); // Amber light on
    }
  }
}