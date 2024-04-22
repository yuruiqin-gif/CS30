// Working with Forces (Vectors)
// Yurui Qin
// April.22, 2024
// Making a simple particle system (using vectors)

let particles = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0.1);
}

function mousePressed(){
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(220);
  for(let i = 0; i < 5; i++){
    particles.push(new Particle(mouseX, mouseY));
  }
  //loop by index
  for(let i = 0; i < particles.length; i++){
    let p = particles[i];
    p.move();
    p.display();
    //check for removal?
    if(p.alive === false){ //time to delete at position i
      particles.splice(i,1);
      i--; //backtrack i so as not to skipp any items
    }
  }
}

class Particle{
  constructor(x,y){
    this.position = createVector(x,y); this.s = 20;
    this.velocity = createVector(random(-3,3),random(-5,-3));
    this.c = color(0, 100, random(150,225),100);
    this.alive = true;
  }

  move(){
    //Apply forces first (in this case, add gravity to velocity)
    this.velocity.add(gravity);
    //Also there could be other forces (wind, friction, )

    //Apply our velocity to our position
    this.position.add(this.velocity);
    if(this.position.y > height){
      //gone off the bottom
      this.alive = false; //marking for deletion
    }
  }

  display(){
    //draw our sprite
    fill(this.c); noStroke();
    push();
    translate(this.position.x, this.position.y);
    circle(0,0,10); //circle(0,0,this.size);
    pop();
  }
}