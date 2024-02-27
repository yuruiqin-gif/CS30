// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(410, 410);
}

let state = 0;
let x = 80;
let y = 100;
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
    if (x <= 10){
      state = 3;
      x = 10;
    }
    x -= speed
  }

  if (state === 3){
    if (y <= 10){
      state = 0;
      y = 10;
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
 