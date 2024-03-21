// Generative Art 1: Diagonal Lines

let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  strokeWeight(2);
  drawLines();
}

function draw() {
  randomSeed(1000000000000);
  gridSpacing = map(mouseX, 0, width, 60, 10);
  background(220);
  strokeWeight(2);
  drawLines();
}

function diagonalAsc(x, y, s){
  //draw ascending diagonal line at (x,y)
  //with a grid spacing of s
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}

function diagonalDesc(x,y,s){
  line(x + s/2, y + s/2, x - s/2, y - s/2);
}


function drawLines(){
  //create diagonal lines on a grid
  for(let x=0; x<width; x+=gridSpacing){
    for(let y=0; y<height; y+=gridSpacing){
      let choice = int(random(2)); //0 or 1
      if(choice===0){
        diagonalDesc(x,y,gridSpacing);
      }
      else{
        diagonalAsc(x,y,gridSpacing);
      }
    }
  }

}