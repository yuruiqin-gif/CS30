// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(378, 378);
}

let state = 0;
let x = 0;
let y = 0;
let z = 25;
let speed = 10;

function draw() {
  background(220);
  square(x,y,z);
  if (state === 0){
    if (x >= 350){
      state = 1;
      x = 350;
    }
    x += speed
  }

  if (state === 1){
    if (y >= 350){
      state = 2;
      y = 350;
    }
    y += speed
  }

  if (state === 2){
    if (x <= 0){
      state = 3;
      x = 0;
    }
    x -= speed
  }

  if (state === 3){
    if (y <= 0){
      state = 0;
      y = 0;
    }
    y -= speed
  }
}

function keyPressed(){
  if (keyCode == 65){
    z = 5;
  }

  else if (keyCode == 68){
    z = 50;
  }

  else if (keyCode == 83){
    speed = 5;
  }

  else if (keyCode == 87){
    speed = 15;
  }
}
 