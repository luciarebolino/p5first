const message = 'PERFORMATIVE CALLIGRAPHIES';
const messageX = 950;
const messageY = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB);
}


function draw() {
  //Line from prev pt to current pt of mouse position
  line(mouseX, mouseY, pmouseX, pmouseY);
  text(message, messageX, messageY); 
  textSize(80);
  textAlign(CENTER);
}

function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {
  }
}

//listen when click the mouse
function mouseClicked() {
  //weights 0 to 1
  stroke("black");
  strokeWeight(random());

  //what if want weights 0 to .4 strokeWeight( random(.4) );
}

//listen for only character keys
function keyTyped() {
  //weights 0 to 5
  stroke("black");
  strokeWeight(random(5));
}


