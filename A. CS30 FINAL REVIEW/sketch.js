let spiralImages = [];
let spirals = [];

function preload(){
  for(let i = 0; i<=15; i++){
    if (i<10){
      spiralImages.push(loadImage('assets/Circle/Circle Animation0'+i+'.png')); //don't forget LoadImages
    }
    else{
      spiralImages.push(loadImage('assets/Circle/Circle Animation'+i+'.png'));
    }
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0);

  for(let i = 0; i<spirals.length; i++){
    let s = spirals[i];
    s.display();
  }
}
function mousePressed(){
  spirals.push(new Spiral(mouseX, mouseY));
}

class Spiral{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.currentFrame = 0;
    this.active = true;
  }

  display(){
    if (this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame],this.pos.x,this.pos.y);
      if(frameCount % 3 === 0){
        this.currentFrame++;
      }
    }
  }
}

// // Final Coding Challenge Review

// let gorillaIdle = [];
// let goriallaSwipe = [];
// let spiralImages = [];

// // Global Variables...
// let spirals = []; //to hold spiral objects

// function preload(){ //to ensure loading is done
//   //Spirals 00-09   10-15
//   for (let i = 0; i <= 15; i++){
//     if(i < 10){
//       spiralImages.push(loadImage("assets/Circle/Circle Animation0"+i+".png"));
//     }
//     else{
//       spiralImages.push(loadImage("assets/Circle/Circle Animation"+i+".png"));
//     }
//   }

//   //Gorialla IDLE images
//   for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
//     gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
//   }

//   //Gorialla SWIPE images
//   for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
//     goriallaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
//   }
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
  
// }

// function draw() {
//    //draw Spirals
//    for(let i = 0; i < spirals.length; i++){
//      let s = spirals[i];
//      s.display();
//    }
// }

// function mousePressed(){
//   spirals.push(new Spiral(mouseX, mouseY));
// }

// class Spiral { //frames 0 - 15    ..16
//   constructor(x,y){ //happens once, for each object created
//     this.pos = createVector(x,y);
//     this.currentFrame = 0;
//     this.active = true;  //for deletion purposes
//   }

//   //class methods
//   display(){
//     if (this.currentFrame > 15){
//       this.active = false;
//     }
//     else{
//       image(spiralImages[this.currentFrame],this.pos.x, this.pos.y);
//       if(frameCount % 3 === 0){
//         this.currentFrame++;
//       }
//     }
//   }
// }



// //final coding challenge review
// //images in final, code provided for loading images

// let gorillaIdle = [];
// let gorillaSwipe = [];
// let sprialImages = [];

// // Global Variables...
// let spirals = []; //to hold spiral objects

// function preload() { //to ensure loading is done
//   //Spirals 00-09  10-15
//   for (let i = 0; i <= 15; i++){
//     if(i<10){
//     sprialImages.push(loadImage('assets/Circle/Circle Animation0' +i+".png"))
//     }
//     else{
//       sprialImages.push(loadImage('assets/Circle/Circle Animation' +i+".png"))
//     }
//   }

//   //Gorialla IDLE images
//   for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
//     gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
//   }
//   //Gorialla SWIPE images
//   for(let i = 1; i <= 6; i++){ //1, 2, 3, 4, 5, 6
//     gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
//   }
// }

// function setup(){
//   createCanvas(windowWidth, windowHeight);

// }

// //a couple more globals (should not be at the top)
// let currentState = 0; //o -idle //1 - swipe
// let idleIndex = 0; let swipeIndex = 0;

// function keyPressed(){
//   if(currentState === 0) currentState = 1;
//   else currentState = 0;
// }

// function draw() {
//   background(0);
//   // Gorilla Code
//   if(currentState === 0){
//     image(gorillaIdle[idleIndex], width/2, height/2);
//     if(frameCount % 4 === 0){
//       idleIndex++;
//       if(idleIndex > 5) idleIndex = 0;
//     }
//   }

//   if(currentState === 1){
//     image(gorillaSwipe[swipeIndex], width/2, height/2);
//     if(frameCount % 8 === 0){
//       idleIndex++;
//       if(idleIndex > 5) idleIndex = 0;
//     }
//   }

//   //draw Spirals
//   for(let i = 0; i < spirals.length; i++){
//     let s = spirals[i];
//     s.display();
//     if(s.active===false){
//       spirals.splice(i,1);
//     }
//   }
// }

// function mousePressed(){
//   spirals.push(new Spiral(mouseX, mouseY));
// }

// class Spiral { //frames 0-15
//   constructor(x,y){ //happens once, for each object created
//     this.pos = createVector(x,y);
//     this.currentFrame = 0;
//     this.active = true; // for delation purposes
//   }

//   //class methods
//   display(){
//     if(this.currentFrame > 15){
//       this.active = false;
//     }
//     else{
//       image(spiralImages[this.currentFrame],this.pos.x,this.pos.y);
//       if(frameCount%3 === 0){
//         this.currentFrame++;
//       }
//     }
//   }
// }