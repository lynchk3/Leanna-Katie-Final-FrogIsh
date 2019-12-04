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

  // x += speed * direction;
  // rect(x, 50, 100, 20);
  // rect(x, 140, 100, 20);
  // rect(x, 230, 100, 20);
  // rect(x, 320, 100, 20);

  firstX += speedA * direction;
  if ((firstX > 300) || (firstX < 0)) {
    direction = -direction;
  }
  if (direction === 1) {
    fill('blue');
    rect(firstX, 50, 100, 50);
    rect(firstX, 250, 100, 50);
  } else {
    fill('green');
    rect(firstX, 50, 100, 50);
    rect(firstX, 250, 100, 50);
  }

  secondX += speedB * direction2;
  if ((secondX > width - 100) || secondX < 0) {
    direction2 = -direction2;
  }
  if (direction2 === 1) {
    fill('red');
    rect(secondX, 175, 90, 20);
    rect(secondX, 200, 90, 20);
  } else {
    fill('yellow');
    rect(secondX, 175, 90, 20);
    rect(secondX, 175, 90, 20);
  }

  if (x == 400) {
    x = -100;
  }
}
