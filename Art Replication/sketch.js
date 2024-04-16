// Art Replication Warm-up
// Yurui Qin
// CS30
// April 15, 2024
// Replicating 1960s artwork “Computer Composition With Lines”

rectList = []; //list for rectangle information

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomRect(400); //generates rectangle information for the list 400 times
}

function draw() {
  background(220);
  //draws the rectangles
  for (let i = 0; i < rectList.length; i+=1) {
    fill(0);
    rect(rectList[i][0],rectList[i][1],rectList[i][2],rectList[i][3],); 
  }
}

function randomRect(n){

  for (let i = 0; i < n; i++){ 

    //picks a random point from center of circle and angle
    let randomAngle = random(0,TWO_PI);
    let equalDistribution = 10*sqrt(random(0, 200)); //square root function ensures equal distribution from circle center

    //random x and y coordinates
    let x = width/2 + equalDistribution * cos(randomAngle);
    let y = height/2 + equalDistribution * sin(randomAngle);

    //random width and height information for rectangles
    let w = random(1,10);
    let h = random(1,10);

    rectList.push([x,y,w,h]); //add new rectangle information to the list
  }
  // fill(0);
  // rect(random((width/2)-250,(width/2)+250),random((height/2)-250,(height/2)+250),random(0, 15),random(0,15));
  // pop();
}
