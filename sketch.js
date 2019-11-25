var radius = 40;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(0);
  x += speed * direction;
  if ((x > width - radius) || (x < radius)) {
    direction = -direction;
  }
  if (direction == 1) {
    ellipse(x, 60, 50, 50);
  } else {
    ellipse(x, 60, 50, 50);
  }
}
