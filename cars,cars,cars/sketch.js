// Cars Cars Cars!
// Yurui Qin.
// CS30
// June. 23, 2024
// Using a class to create vehicle objects that move with varying speeds, colors, positions.

//variables for the traffic light
let trafficLight;
let lightTimer = 0;
let lightState = 'green';

//Arrays for the direction of the car
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(0, random(windowHeight/3.9,windowHeight/2.5),floor(random(0,2)),'yellow', 1, 3)); //adding 20 car objects going right 
  }
  for (let i = 0; i < 20; i++){
    westbound.push(new Vehicle(0, random(windowHeight/2,windowHeight/1.5),floor(random(0,2)),'green', 0, -3)); //adding 20 car objects going left
  }

  trafficLight = new TrafficLight(width/2, height/8, 'green'); //creating a traffic light object
}

function draw() {
  background(255);
  drawRoad();

  if (lightState === 'amber' && frameCount >= lightTimer){ //if amber light has been on for 60 frames, switch to red light
    lightState = 'red';
    trafficLight.state = 'red'; //changing object's color
    lightTimer = frameCount + 120; //making red light last for 120 frames
  }
  else if(lightState === 'red' && frameCount >= lightTimer){//if red lights have been on for 120 frames, switch to green.
    lightState = 'green';
    trafficLight.state = 'green';
  }

  trafficLight.display(); //show the traffic light

  for(let e of eastbound){ 
    if(lightState === 'green'){
      e.action(); //displaying vehicles going east
    }
    else{
      e.display(); //stoping vehicles if green light is gone
    }
  }

  for(let w of westbound){
    if(lightState === 'green'){
      w.action(); //displaying vechicles going west
    }
    else{
      w.display(); //stoping vehicles if green light is gone
    }
  }
}

function drawRoad(){ //draws road
  fill(0);
  rect(0, windowHeight/4, windowWidth,windowHeight/2);
  for(let x = 0; x < windowWidth; x += 80){ //draws white lines of road
    fill(255);
    rect(x, (windowHeight/2)-10,50,10);
  }
}

function mousePressed(){
  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {
      // Adds westbound car if mouse left clicks and shift key is down
      westbound.push(new Vehicle(mouseX, random(windowHeight/2,windowHeight/1.5),floor(random(0,2)),'green', 0, -3)); 
    }
    else{
      // Add eastbound car if mouse left clicks
      eastbound.push(new Vehicle(mouseX, random(windowHeight/3.9,windowHeight/2.5),floor(random(0,2)),'green', 1, 3)); 
    }
  }
}

function keyPressed(){
 if (key === ' '){ //stop traffic by pressing space bar
  if(lightState === 'green'){
    lightState = 'amber';
    trafficLight.state = 'amber';
    lightTimer = frameCount + 60; //make amber light last for 60 seconds
  }
 }
}

class Vehicle{
  constructor(x,y, type, color, direction, xSpeed){
    this.x = x; 
    this.y = y;    
    this.type = type;
    this.color = color;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  display(){ //display car or truck depending on type property 
    if(this.type === 0){
      this.showCar();
    }
    else if (this.type === 1){
      this.showTruck();
    }
  }

  showCar(){ //draw car if type = 0
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

  showTruck(){ //draw truck if type = 1
    noStroke();
    fill(this.color);
    if(this.direction === 1){ //draw mirrored version of truck, if its going right
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
    if(this.direction === 1){ //moves vehicle right
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = -50; //resets position if out of screen
      }
    }
    else if(this.direction === 0){ //moves vehicle left
      this.x += this.xSpeed;
      if(this.x < -50){
        this.x = width; //resets position if out of screen
      }
    }

  }

  speedUp(){
    if (this.xSpeed < 15 && this.xSpeed > 0) { //for eastbound vehicles
      this.xSpeed += 0.5;
    } else if (this.xSpeed > -15 && this.xSpeed < 0) {//for westbound vehicles
      this.xSpeed -= 0.5;
    }
  }

  speedDown(){
    if (this.xSpeed > 0.5) { //for eastbound vehicles with speed above 0.5
      this.xSpeed -= 0.5;
    } 
    else if (this.xSpeed < -0.5) {//for westbound vehicles with a speed above 0.5 in magnitude
      this.xSpeed += 0.5;
    }

    if (this.xSpeed > 0 && this.xSpeed < 0.5) { //for eastbound vehicles to prevent stopping or slowing down too much
      this.xSpeed = 0.5; 
    } 
    else if (this.xSpeed < 0 && this.xSpeed > -0.5) {//for westbound vehicles to prevent stopping or slowing down too much
      this.xSpeed = -0.5; 
    }
  }

  changeColor(){ 
    this.color = color(random(255), random(255), random(255));
  }

  action(){
    this.move(); //occurs every frame

    if (floor(random(1, 101)) === 1) { //one percent chance occurs per frame
      this.speedUp();
    }

    if (floor(random(1, 101)) === 1) { //one percent chance occurs per frame
      this.speedDown();
    }

    if (floor(random(1, 101)) === 1) { //one percent chance occurs per frame
      this.changeColor();
    }

    this.display(); //occurs every frame
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
    } 
    else if (this.state === 'green') {
      fill(0, 255, 0);
      ellipse(this.x, this.y + 20, 20, 20); // Green light on
    } 
    else if (this.state === 'amber') {
      fill(255, 255, 0);
      ellipse(this.x, this.y, 20, 20); // Amber light on
    }
  }
}