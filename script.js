// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *    mouseX, mouseY, rect, stroke, strokeWeight, width, random, line, square, pmouseX, pmouseY
 */

let brushHue, c;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  
  // Initialize brushHue to 0 (which is delcared at the top)
  brushHue = random(360);
  c = 5;
  strokeWeight(c);
  background(95); 
  
}

function draw() {
  // Draw the background to clear the screen at the beginning of the frame
  
  
  c += 1 // increase by 1
  
  
  //If 5 > 15 it'll go back to 5

  if (c > 15){ 
    c = 5
  }
  
   // strokeWeight starts at 5
  strokeWeight(c);
  drawLine();
  chooseColors(); // start with random colors (comes from function chooseColors)
  
  // Draw a 15 x 15 sized square at mouseX and mouseY
  // rect(mouseX, mouseY, 15, 15);
  // ellipse(random(width), random(height), 15)
  // ellipse(mouseX, mouseY, 15)
  
  //pressed mouse will show square.
     if (mouseIsPressed)
     line(mouseX, mouseY, 15)
}


function drawLine(){

line(pmouseX, pmouseY, mouseX, mouseY); // creates line with pmouseX.
 strokeWeight(c);

  print(pmouseX + ' -> ' + mouseX); // previousX Line then creates a new Line

}
  
/* A function that sets the stroke and fill of our "paint brush". */
function chooseColors() { 
  brushHue = random(360)
  
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
  
}

function keyPressed() {
  background(95)
}

// function mousePressed() {
//   ellipse(mouseX, mouseY, 15)
// }
