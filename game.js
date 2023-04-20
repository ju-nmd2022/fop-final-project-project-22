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

// Fish
function fish(x, y) {
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

// Clouds
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
  noStroke();
  // Ground
  background(215, 225, 217);
  push();
  fill(173, 196, 184);
  rect(0, 520, width, height);
  pop();

  // Clouds
  cloud1(60, 250);
  cloud2(570, 180);
  cloud3(420, 340);
}

// Logo
function logo(x, y) {
  // Cloud logo
  ellipse(x, y, 220);
  ellipse(x - 160, y, 120);
  ellipse(x + 160, y, 120);
  ellipse(x + 60, y - 60, 190);
  ellipse(x - 60, y - 60, 160);
  ellipse(x - 100, y + 60, 140);
  ellipse(x, y + 50, 160);
  ellipse(x + 100, y + 60, 160);
  ellipse(x, y + 70, 200);

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

  startButton(340, 280);
}

// Start button
function startButton(x, y) {
  push();
  fill(173, 196, 184);
  ellipse(x, y, 70);
  fill(255, 255, 255);
  triangle(x - 10, y - 16, x + 16, y, x - 10, y + 16);
  pop();
}

function scoreBoard(x, y) {
  push();
  fill(255, 255, 255);
  rect(x, y, 300, 370, 40);
  fill(255, 240, 247);
  rect(x + 15, y + 15, 270, 340, 20);
  fill(255, 255, 255);
  ellipse(x + 120, y, 110);
  ellipse(x + 180, y, 100);
  ellipse(x + 230, y, 60);
  ellipse(x + 70, y, 60);
  fill(242, 186, 206);
  rect(x + 15, y + 15, 270, 80, 20);
  fill(249, 207, 225);
  rect(x + 15, y + 80, 270, 70);
  fill(255, 217, 232);
  rect(x + 15, y + 150, 270, 70);
  fill(255, 230, 240);
  rect(x + 15, y + 220, 270, 70);
  fill(255, 255, 255);
  rect(x + 15, y + 78, 270, 5);
  fill(242, 186, 206);
  textStyle(BOLD);
  textSize(26);
  text("GAME OVER", x + 68, y);
  fill(255, 255, 255);
  textSize(20);
  text("no.", x + 30, y + 68);
  text("name", x + 110, y + 68);
  text("score", x + 214, y + 68);
  pop();
}

let isGameActive = true;
let velocity = 2;
let score = 0;
let health = ["❤️", "❤️", "❤️"];
let state = "start";

// Menu Screen
function menuScreen() {
  noStroke();
  scenery();
  logo(340, 190);
  cat(340, 500);
}

// Game over screen
function gameOver() {
  scenery();
  scoreBoard(185, 120);
}

let catX = 340;
let speed = 10;
let velocity1 = 2;
let acceleration = 1;

function saveHighscore(score) {
  const highscores = "scores";
  const highScoreString = localStorage.getItem(highscores);
  let scores = [];

  if (highScoreString !== null) {
    scores = JSON.parse(highScoreString);

    // let scoreList = scores
    //   .map((score, index) => `<li>${index + 1}. ${score}<li>`)
    //   .join("");

    // let = scoreDisplay = document.getElementById("score-list");
    // scoreDisplay.innerHTML = scoreList;
  }

  if (!scores.includes(score)) {
    scores.push(score);
    scores.sort((a, b) => b - a);
    scores.splice(10);
    localStorage.setItem(highscores, JSON.stringify(scores));
  }
}
// localStorage.clear();

function gameScreen() {
  scenery();
  cat(catX, 500);
  // console.log(catX);
  //retrieve characters width interval based on x-position in order to compare with objects
  let characterX = catX;
  let CharacterWidth = 115;
  let characterLeftBound = characterX - CharacterWidth / 2;
  let CharacterRightBound = characterX + CharacterWidth / 2;
  // console.log(CharacterRightBound);
  // console.log(characterLeftBound);

  if (isGameActive && frameCount % 90 === 0) {
    fallingObjects();
    // console.log(objects);
  }

  // increase speed each level
  if (score >= 5) {
    acceleration = 1.5;
  }
  if (score >= 10) {
    acceleration = 2;
  }
  if (score >= 15) {
    acceleration = 2.5;
  }
  if (score >= 20) {
    acceleration = 3;
  }

  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    // console.log(obj.y);

    // check for collision
    if (
      isGameActive &&
      obj.x < CharacterRightBound &&
      obj.x > characterLeftBound &&
      obj.y > 444 &&
      obj.y < 550
    ) {
      //check if the objects are collectable => increase score
      if ((!obj.collided && obj.type === "fish") || obj.type === "treat") {
        console.log("COLLISION!!");
        console.log(obj.y);
        obj.collided = true;
        //remove the collided object from the array
        objects.splice(i, 1);
        //increase score by 1
        score += 1;
        console.log(score);
        //check if the objects are NOT collectable => decrease health
      } else if (!obj.collided && obj.type === "bomb") {
        console.log("COLLISION!!");
        obj.collided = true;
        //remove the collided object from the array
        objects.splice(i, 1);
        // remove a heart from the health array
        health.pop();

        console.log("bomb!!!");
        console.log(score);
      } else if ((obj.type === "fish" || obj.type === "treat") && obj.y > 505) {
        console.log("MISSED");
        //remove the collided object from the array
        objects.splice(i, 1);

        health.pop();
      }
    } else {
      obj.collided = false;
    }

    if (obj.y > 505 && (obj.type === "fish" || obj.type === "treat")) {
      objects.splice(i, 1);
      health.pop();
    }

    if (health.length === 0) {
      state = "gameOver";
      isGameActive = false;
      saveHighscore(score);
    }

    if (obj.type === "fish") {
      fish(obj.x, obj.y);
    } else if (obj.type === "bomb") {
      bomb(obj.x, obj.y);
    } else if (obj.type === "treat") {
      treat(obj.x, obj.y);
    }

    obj.velocity = velocity1 * acceleration;
    obj.y += obj.velocity;
  }
  // treat(340, 300);
  // fish(190, 300);
  // bomb(500, 300);

  // Move the cat
  if (keyIsDown(37) && isGameActive) {
    catX = catX - speed; // Left
  } else if (keyIsDown(39) && isGameActive) {
    catX = catX + speed; // Right
  }
}

// Score Tracker
function scoreTracker() {
  textSize(24);
  text("Score:" + score, 20, 50);
}

// Health Tracker
function healthTracker() {
  //display the health array as a string, to remove "," from screen
  let healthString = health.join("");
  text("Health:" + healthString, 20, 100);
}

// Screens
function draw() {
  if (state === "start") {
    menuScreen();
  }

  if (state === "game") {
    gameScreen();
  }

  if (state === "gameOver") {
    gameOver();
  }

  changeCursor();
  scoreTracker();
  healthTracker();
}

// Mouse clicked > game starts
function mouseClicked() {
  if (
    state === "start" &&
    mouseX > 304 &&
    mouseX < 375 &&
    mouseY > 245 &&
    mouseY < 315
  ) {
    state = "game";
  } else if (
    state === "gameOver" &&
    mouseX > 205 &&
    mouseX < 328 &&
    mouseY > 201 &&
    mouseY < 220
  ) {
    objects = [];
    state = "game";
    isGameActive = true;
    velocity = 2;
    velocity1 = 2;
    acceleration = 1;
    catX = 340;
    speed = 10;
    health = ["❤️", "❤️", "❤️"];
    score = 0;
  }
}

// Changes cursor when hovering over the startbutton
function changeCursor() {
  if (
    mouseX > 304 &&
    mouseX < 375 &&
    mouseY > 245 &&
    mouseY < 315 &&
    state === "start"
  ) {
    cursor(HAND);
  } else if (
    state == "gameOver" &&
    mouseX > 205 &&
    mouseX < 328 &&
    mouseY > 201 &&
    mouseY < 220
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
