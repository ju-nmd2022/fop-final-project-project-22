function setup() {
  createCanvas(800, 600);
}

// Cat (game character)
function cat(x, y) {
  noStroke();

  // Ear left
  triangle(x - 40, y - 30, x - 40, y - 50, x, y - 50);

  // Ear right
  triangle(x + 40, y - 30, x + 40, y - 50, x, y - 50);

  // Tail
  rect(x + 30, y + 10, 40, 10, 100);

  // Body
  ellipse(x, y, 115, 94);

  // Head
  ellipse(x, y - 3, 106, 108);

  // Eye left
  push();
  fill(0, 0, 0);
  ellipse(x - 16, y - 44, 8, 5);

  // Eye right
  ellipse(x + 16, y - 44, 8, 5);
  pop();

  // Nose
  push();
  fill(260, 220, 244);
  triangle(x - 7, y - 44, x + 7, y - 44, x, y - 39);

  // Mouth
  triangle(x - 18, y - 29, x, y - 36, x + 18, y - 29);
  ellipse(x, y - 20, 50, 26);
  pop();

  push();
  translate(x - 10, y - 34);
  rotate(-0.3);
  ellipse(0, 0, 22, 10);
  pop();

  push();
  translate(x + 10, y - 34);
  rotate(0.3);
  ellipse(0, 0, 22, 10);
  pop();

  // Fangs
  triangle(x - 18, y - 30, x - 12, y - 25, x - 9, y - 30);
  triangle(x + 18, y - 30, x + 12, y - 25, x + 9, y - 30);

  // Paw left
  ellipse(x - 30, y + 40, 15);

  // Paw right
  ellipse(x + 30, y + 40, 15);
}

function treat(x, y) {
  // Cookie
  push();
  fill(241, 210, 189);
  ellipse(x, y, 45);
  pop();

  // Chocolate chips
  push();
  fill(145, 96, 75);
  ellipse(x - 14, y + 4, 9);
  ellipse(x - 2, y + 14, 9);
  ellipse(x + 12, y + 10, 9);
  ellipse(x + 1, y, 9);
  ellipse(x + 14, y - 6, 9);
  ellipse(x + 2, y - 14, 9);
  pop();

  return {
    type: "treat",
    x: x,
    y: y,
  };
}

function fish(x, y) {
  // Fish
  push();
  fill(177, 204, 222);
  ellipse(x, y, 45, 30);

  // Tail fish
  triangle(x, y, x + 34, y - 12, x + 34, y + 12);
  pop();

  return {
    type: "fish",
    x: x,
    y: y,
  };
}

function bomb(x, y) {
  // Bomb
  push();
  fill(118, 48, 136);
  ellipse(x, y, 40);
  pop();

  push();
  translate(x + 10, y - 14);
  rotate(0.5);
  fill(118, 48, 136);
  ellipse(0, 0, 20, 16);
  pop();

  // Thread on bomb
  push();
  fill(130, 97, 78);
  translate(x + 10, y - 18);
  rotate(-0.8);
  rect(0, 0, 12, 4, 10);
  /* line(x + 10, y - 20, x + 20, y - 30); */
  pop();

  // Skull
  push();
  fill(201, 167, 209);
  translate(x + 1, y - 2);
  rotate(0.4);
  ellipse(0, 0, 20, 18);
  pop();

  // Jaw skull
  push();
  fill(201, 167, 209);
  translate(x - 6, y);
  rotate(0.5);
  rect(0, 0, 10, 8, 3);
  pop();

  // Eyeholes skull
  push();
  fill(118, 48, 136);
  ellipse(x - 3, y - 3, 6);
  ellipse(x + 5, y + 1, 6);
  pop();

  return {
    type: "bomb",
    x: x,
    y: y,
  };
}

function cloud1(x, y) {
  push();
  fill(255, 255, 255);
  rect(x, y, 100, 20, 100);
  ellipse(x + 40, y, 40);
  pop();
}

function cloud2(x, y) {
  push();
  fill(255, 255, 255);
  rect(x, y, 100, 20, 100);
  ellipse(x + 90, y - 5, 50);
  ellipse(x + 50, y - 5, 40);
  pop();
}

function cloud3(x, y) {
  push();
  fill(255, 255, 255);
  rect(x, y, 58, 16, 100);
  /* ellipse(x + 42, y, 32); */
  ellipse(x + 30, y + 2, 20);
  pop();
}

function scenery() {
  // Ground
  background(215, 225, 217);
  push();
  fill(173, 196, 184);
  rect(0, 520, width, height);
  pop();

  // Clouds
  cloud1(60, 250);
  cloud2(530, 180);
  cloud3(420, 340);
}

function logo(x, y) {
  // Cloud logo
  ellipse(x, y, 220);
  ellipse(x - 160, y, 120);
  ellipse(x + 160, y, 120);
  ellipse(x + 60, y - 60, 190);
  ellipse(x - 60, y - 60, 160);
  ellipse(x - 90, y + 50, 140);
  ellipse(x, y + 50, 160);
  ellipse(x + 90, y + 50, 160);

  // Letter C
  push();
  fill(260, 220, 244);
  ellipse(x - 120, y, 60);
  pop();
  ellipse(x - 120, y, 20);
  rect(x - 120, y - 5, 30, 10);

  // Letter A
  push();
  fill(260, 220, 244);
  ellipse(x - 56, y, 60);
  rect(x - 36, y - 30, 20, 60);
  pop();
  ellipse(x - 56, y, 20);

  // Letter T
  push();
  fill(260, 220, 244);
  rect(x - 8, y - 30, 20, 50);
  ellipse(x + 2, y + 22, 20);
  rect(x, y - 20, 20, 8);
  rect(x, y + 18, 20, 14);
  pop();

  // Letter C
  push();
  fill(260, 220, 244);
  ellipse(x + 56, y, 60);
  pop();
  ellipse(x + 56, y, 20);
  rect(x + 56, y - 5, 30, 10);

  // Letter H
  push();
  fill(260, 220, 244);
  rect(x + 94, y - 30, 20, 60);
  rect(x + 94, y - 10, 40, 14);
  rect(x + 124, y, 20, 30);
  ellipse(x + 134, y, 20);
  pop();
}

let isGameActive = true;
let velocity = 2;

let state = "start";

function menuScreen() {
  noStroke();
  scenery();
  logo(340, 200);
  cat(340, 500);
  let message = "Start game";
  text(message, 320, 290);
  textSize(18);
}

let catX = 340;
let speed = 10;
function gameScreen() {
  scenery();
  cat(catX, 500);

  if (frameCount % 90 === 0) {
    fallingObjects();
  }

  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    if (obj.type === "fish") {
      fish(obj.x, obj.y);
    } else if (obj.type === "bomb") {
      bomb(obj.x, obj.y);
    } else if (obj.type === "treat") {
      treat(obj.x, obj.y);
    }
    obj.y += obj.velocity;
  }
  // treat(340, 300);
  // fish(190, 300);
  // bomb(500, 300);

  if (keyIsDown(37) && isGameActive) {
    catX = catX - speed;
  } else if (keyIsDown(39)) {
    catX = catX + speed;
  }
}

function draw() {
  if (state === "start") {
    menuScreen();
  }

  if (state === "game") {
    gameScreen();
  }

  changeCursor();
}

function mouseClicked() {
  if (mouseX > 320 && mouseX < 408 && mouseY > 275 && mouseY < 290) {
    state = "game";
  }
}

function changeCursor() {
  if (
    mouseX > 320 &&
    mouseX < 408 &&
    mouseY > 275 &&
    mouseY < 290 &&
    state === "start"
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

// gameScreen();
// scenery();
/* cat(300, 500); */
/* treat(300, 300); */
/* fish(150, 300); */
/* bomb(450, 300); */

let objects = [];

function fallingObjects() {
  let randomWidth = Math.floor(random(width));
  let heightPosition = -10;
  let newObject;

  let randomNumber = Math.floor(Math.random() * 101);

  if (randomNumber < 40) {
    newObject = {
      type: "fish",
      x: randomWidth,
      y: heightPosition,
      velocity: 2,
    };
  } else if (randomNumber < 60) {
    newObject = {
      type: "bomb",
      x: randomWidth,
      y: heightPosition,
      velocity: 2,
    };
  } else {
    newObject = {
      type: "treat",
      x: randomWidth,
      y: heightPosition,
      velocity: 2,
    };
  }

  objects.push(newObject);
}
