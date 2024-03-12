// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let lineLength = 3;

// function lineLength(){
//   strokeWeight(30);
//   let redl = 0;
//   let x = 0;
//   while (x<width){
//     let redVal = random(0,255);
//     redVal = noise(redl);
//     redVal = map(redVal,0,1,0,255);
//     redl += 0.1;

//     stroke(redVal);
//     line(x, height/setup, x+lineLength, height/2);
//     x += lineLength;
//   }
// }
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
// }

// //For Circle
// function draw(){
//   background(400);

//   let x = 100 * noise(0.005 * frameCount);

//   strokeWeight(5);
//   circle(50, 50, x);
// }

//For Speed
let speed = 100 * noise(0.005 * frameCount);
let x = 30;
rect(x+speed, 20, 25, 55);

