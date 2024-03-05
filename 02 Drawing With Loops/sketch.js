//  Drawing with loops 1
// Yurui
// February 27, 2024
// Using Loops + Arrays to create some visualizations

//Global Variables
let xPos, yPos // declaration only...


function setup(){
    createCanvas(400, 310);
    xPos = []; yPos = [];
    // xPos = [width*0.05, width*0.95,width*0.05,width*0.95];
    // yPos = [height*0.05,height*0.05,height*0.95,height*0.95]
    squareIt();
}

// function initWithLoops(){
//     //lay down some initial circles, but using loops to do so
//     for (let x = 10; x<width; x+= 20){
//         xPos.push(x);
//         yPos.push(height/2);
//     }
// }

function squareIt(){
    //lay down some initial circles, but using loops to do so
    for (let x = 5; x<width+10; x+= 30){
        xPos.push(x);
        yPos.push(5);
    }

    for (let y = 5; y<height+10; y+= 30){
        xPos.push(5);
        yPos.push(y);
    }

    for (let y = 5; y<height+10; y+= 30){
        xPos.push(395);
        yPos.push(y);
    }

    for (let x = 5; x<width+10; x+= 30){
        xPos.push(x);
        yPos.push(305);
        fill(0, 0, 0);
    }
}

function draw(){
    background(220);
    cornersAndMouseLoop();
    for(let i = 0; i < xPos.length; i++){
        fill(225,225,100);
        triangle(xPos[i], xPos[i+1], mouseX);
    }
}

function mousePressed(){
    //this calls automatically on a mousePress
    xPos.push(mouseX);
    yPos.push(mouseY);
}

function cornersAndMouseLoop(){
    // a hopefully slightly more elegant version...
    let i = 0;
    while(i < xPos.length){
        let x = xPos[i];
        let y = yPos[i];
        circle(x,y,20);
        line(x,y,mouseX,mouseY);
        i++;
    }
    circle(mouseX, mouseY, 20);
}

function cornersAndMouse(){
    // draw some circles near each of the four corners
    // and connect some lines from there to the mouse position
    fill(255);
    circle(width*0.05, height*0.05, 20);
    circle(width*0.95, height*0.05, 20);
    circle(width*0.05, height*0.95, 20);
    circle(width*0.95, height*0.95, 20);
    circle(mouseX, mouseY, 20);
    //lines
    line(width*0.05, height*0.05, mouseX, mouseY);
    line(width*0.95, height*0.05, mouseX, mouseY);
    line(width*0.05, height*0.95, mouseX, mouseY);
    line(width*0.95, height*0.95, mouseX, mouseY);
}