
var radius = 40;
var a = 200;
var b = 200;
var speed = 2;
var direction = 1;
var obstacle = [];
var characterX = 5;
var characterY = 5;

var firstX = 110;
var secondX = 75;
var speedA = 1;
var speedB = 4;
var direction = 1;
var direction2 = 1;

var win = false;


function setup () {
  createCanvas(400, 400);
}

function didYouWin () {
  if (characterX >= 300 && characterX <= 400 && characterY >= 300 && characterY <= 400) {
    return true;
  } else {
    return false;
  }
}

function draw () {

  background(0);
  fill('red');

  // Move the Character
  ellipse(characterX, characterY, 30, 30); // This is our stand-in until we figure out sprites

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

  fill('green');
  a += speed * direction;
  rect(a, 50, 100, 20);
  rect(a + 300, 50, 100, 20);
  rect(a + 100, 180, 100, 20);
  rect(a + 300, 180, 100, 20);
  rect(a + 350, 300, 100, 20);

  if (a == 400) {
    a = -a;
  }

  b += speed * -direction;
  rect(b, 230, 100, 20);
  rect(b + 100, 120, 100, 20);

  if (b == -100) {
    b = 400;

  // Winning the Game
  win = didYouWin();
  if (win) {
    noLoop();
    fill(90, 50, 40);
    textSize(30);
    text('You Made It!', 100, 400);
  }
}
