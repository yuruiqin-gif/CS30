// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 50, rectHeight = 10;
let colors = ['#FFFFFF', '#CBE86B', '#F2E9E1', '#1C140D', '#CBE86B']
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawCustom(x){
  //draw a stack of rectangle at x = x, Using R,G,B random
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    //option 1 -> cycle through custom palette
    fill(colors[index%5]);//0-4
    //option 2 -> random selection from palette
    fill(colors[int(random(colors.length))]);
    rect(x,y,rectWidth,rectHeight);

    index++;
  }
}

function drawRGB(x){
  //draw a stack of rectangle at x = x, Using R,G,B random
  colorMode(RGB);
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawHSB(x){
  //draw a stack of rectangle at x = x, Using HSL cycle
  colorMode(HSB);
  for(let y = 0; y < height; y += rectHeight){
    let hue = map(y,0,height,0,360);
    fill(hue, 360, 300);
    rect(x,y,rectWidth,rectHeight);
  }
}
