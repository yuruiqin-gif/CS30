// Inheritence + using multiple files
// Yurui Qin
// May 9, 2024
//
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CricleObj(random(width), random(height)))
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}

// child class #1 - Circle
class CricleObj extends AnimatedObject{
  constructor(x,y){
    super(x,y); //calls the parent class' constructor
    this.size = random(20,40);
  }

  display(){ //function override; copies over parent class function
    strokeWeight(2);
    if(dist(this.x,this.y,mouseX,mouseY)<this.size/2){
      //mouse is over top of the circle
      fill(255,0,0);
    }
    else fill(255);

    circle(this.x, this.y, this.size);
  }
}

//Child Class #2 - Line
class LineObj extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){ //overriding
    super.move();
    this.x -= 5;
    if(this.x < 0) this.x = width;
  }

  display(){
    if(mouseIsPressed) strokeWeight(10);
    else strokeWeight(2);
    line(this.x, this.y, this.x+15, this.y);
  }
}