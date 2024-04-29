// Block Pusher
// Yurui Qin
// April.29 , 2024
// One more crack at 2D arrays - tile based game

let tiles = [];
let level = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
]

const COLUMNS = 5; const ROWS =5; let TILE_SIZE = 100;
let playerX = 3; let playerY = 4;    

function preload(){
  for(let i = 0; i<4; i++){
    tiles.push(loadImage("assets/"+i+".png"));
  }
}
function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  background(220);
  renderBoard();
}

function keyPressed(){
  if(keyCode === UP_ARROW && playerY > 0){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;
  }
  if(keyCode === LEFT_ARROW){
    swap(playerX, playerY, playerX-1, playerY);
    playerY--;
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++;
  }
  if(keyCode === LEFT_ARROW){
    swap(playerX, playerY, playerX+1, playerY);
    playerX++;
  }
}

function swap(){
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2]
  level[y2][x2] = temp;
}
function renderBoard(){
  // interpret data in our 2D array (level1), place images on canvas
  for(let x=0; x < COLUMNS; x++){
    for(let y = 0; y < ROWS; y++){
      let type = level[y][x];
      let currentImage =  tiles[type];
      image(currentImage, x*TILE_SIZE, y*TILE_SIZE);
    }
  }
}