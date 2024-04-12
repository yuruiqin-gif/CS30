// Terrain Generation
// Yurui Qin
// CS30
// April.8, 2024
// Gernerate a infinite mountain range that finds the highest peak and calculates the mountain height average

let PerlinStart = 0;
let Increment= 0.01; //variable to increment noise value per rectangle

let rectWidth = 1; //width of the mountain's rectangles
let mountTime = 0; //time for perlin noise

//variables to find the average hieght
let heightAvg = 0;
let MountTotal = 0;
let MountNum = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function generateTerrain(){
  background(255);
  stroke(0,0,0);

  mountTime = PerlinStart; //Incrementing the time value to pan

  let tallPointX = 0; //Initializing the coordinates for the highest peak
  let tallPointY = 0;

  MountTotal = 0; //Initializing the variables to find average height
  MountNum = 0; 

  for(let x = 0; x < width; x+=rectWidth){
  
    y = map(noise(mountTime),0,1,0,height); //variable for height of the mountains

    //finding the highest peak
    if(y > tallPointY){
      tallPointY = y;
      tallPointX = x;
    }

    MountTotal += y; //adding to the sum of all heights
    MountNum++; //adding to the number of mountains

    rect(x, height, rectWidth, y*2);

    mountTime += Increment; //Changing the value of the noise to draw rectangle close to the last
  }

  heightAvg = MountTotal/MountNum; //finding the average height

  drawFlag(tallPointX, height-tallPointY);
  
  PerlinStart += 0.05; //Incrementing the time value to pan

  //drawing a line to repersent the average height
  stroke(255,0,0);
  line(0,heightAvg,windowWidth,heightAvg);

  fill(0,0,0);
}

function drawFlag(x,y){ //function to draw the flag on the highest peak
  line(x,y,x,y-10);
  fill(255,0,0);
  triangle(x,y-10,x,y-20,x+20,y-10);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){ //pressing left arrow narrows mountains
    rectWidth -= 1;
  }
  if (rectWidth <= 1){ //parameter to avoid crashing the program
    rectWidth = 1;
  }

  if (keyCode === RIGHT_ARROW){ //pressing right arrow widens mountains
    rectWidth += 1;
  }
}

function draw() {
  generateTerrain();
}