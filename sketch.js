var radius = 40;
var x = 110;
var speed = 2;
var direction = 1;
var obstacle = [];
var characterX = 5;
var characterY= 5;

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(0);
  ellipse(characterX, characterY, 30, 30);

  if (keyIsPressed && key === 'ArrowLeft') {
    characterX -= 2;
  }
  if (keyIsPressed && key === 'ArrowRight') {
    characterX += 2;
  }
  if (keyIsPressed && key === 'ArrowUp') {
    characterY -= 2;
  }
  if (keyIsPressed && key === 'ArrowDown') {
    characterY += 2;
  }

  x += speed * direction;
  rect(x, 50, 100, 20);
  rect(x, 140, 100, 20);
  rect(x, 230, 100, 20);
  rect(x, 320, 100, 20);

  if (x == 400) {
    x = -100;
  }
}
