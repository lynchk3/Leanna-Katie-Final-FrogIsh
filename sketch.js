var radius = 40;
var x = 110;
var speed = 1;
var direction = 1;
var obstacle = [];

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(0);

  x += speed * direction;
  // if ((x > width - radius) || (x < radius)) {
  //   direction = -direction;
  // }
  // if (direction == 1) {
  //   ellipse(x, 60, 50, 50);
  // } else {
  // for (i = 0; i < 5; i++) {
  //   obstacle[i];
    rect(x, 60, 100, 20);
  if (x == 400) {
    x = -100;
  }
}
