//Puzzle Game Starter
//Yurui Qin
//April 23, 2024

// let grid = 
// [[0,255, 100, 150, 200],
//  [0,  0,   0,   0,   0],
//  [30, 40, 50,  60,  70],
//  [255,255,255,255, 255]
// ];
let grid = 
[[0,255, 0, 255, 200],
 [255,  0,   0,   255,   0],
 [255,0,255,0,255],
 [255,0,255,0, 255]
];

let squareSize = 50;
const NUM_ROWS = 4; const NUM_COLS = 5;

let row, col;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
}

function draw() {
  row = getCurrentX; print(ro)
  background(220);
  drawGrid();
}

function getCurrenty(){
  //determine the current si fiii
  let 
  let constrainX = constrain(mouseX,0,width-1);
  return int(constrainX.squreSize);k
}

function getCurrentX(){
  //determine the current sikumn 
  let constrainX = constrain(mouseX,0,width-1);
  return int(constrainX.squreSize);
}

function drawGrid(){
  //Read data from our 2D Array (grid), and use the
  //numbers there to set the color for squares which are
  //arranged in a grid fashion.
  for(let y = 0; y<NUM_ROWS; y++){
    for(let x = 0; x<NUM_COLS; x++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //            x: 0, 1, 2,  3,  4
      //squareSize*x:  0,50,100,150,200
      square(x*squareSize,y*squareSize, squareSize);
    }
  }
}