var firstX = 110;
var secondX = 75;
var speedA = 1;
var speedB = 4;
var direction = 1;
var direction2 = 1;

var characterX = 5;
var characterY = 5;

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
  background(200);
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

  // Obstacles
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

  // Winning the Game
  win = didYouWin();
  if (win) {
    noLoop();
    fill(90, 50, 40);
    textSize(30);
    text('You Made It!', 100, 400);
  }
}
