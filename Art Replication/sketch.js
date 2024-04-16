// Art Replication Warm-up
// Yurui Qin
// April 15, 2024
//
// Replicating 1960s artwork “Computer Composition With Lines”

rectList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomRect(800);
}

function draw() {
  background(220);

  // circle(width/2, height/2,500);

  for (let i = 0; i < rectList.length; i+=10) {
    rect(rectList[i][0],rectList[i][1],rectList[i][2],rectList[i][3],);
  }
}

function randomRect(n){

  for (let i = 0; i < n; i++){ 
    let randomAngle = random(0,TWO_PI);
    let equalDistribution = 10 * sqrt(random(0,100));

    let x = width/2 + equalDistribution * cos(randomAngle);
    let y = height/2 + equalDistribution * sin(randomAngle);
    let w = random(1,10);
    let h = random(1,10);
    rectList.push([x,y,w,h]);
  }
  // fill(0);
  // rect(random((width/2)-250,(width/2)+250),random((height/2)-250,(height/2)+250),random(0, 15),random(0,15));
  // pop();
}
