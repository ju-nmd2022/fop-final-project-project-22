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
}

function fish(x, y) {
  // Fish
  push();
  fill(200, 218, 242);
  ellipse(x, y, 45, 30);

  // Tail fish
  triangle(x, y, x + 34, y - 12, x + 34, y + 12);
  pop();
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
}

function frame(x, y) {
  // Frame background
  push();
  fill(252, 240, 240);
  rect(x, y, 80, 100);
  pop();

  // Head
  push();
  fill(221, 198, 188);
  ellipse(x + 40, y + 52, 40, 30);

  // Ears
  triangle(x + 22, y + 50, x + 20, y + 36, x + 50, y + 40);
  triangle(x + 44, y + 40, x + 60, y + 36, x + 60, y + 48);
  pop();

  // Eyes
  push();
  fill(0, 0, 0);
  ellipse(x + 30, y + 52, 6);
  ellipse(x + 50, y + 52, 6);
  pop();

  // Frame
  push();
  fill(178, 148, 127);
  rect(x, y, 5, 100);
  rect(x + 75, y, 5, 100);
  translate(x, y + 100);
  rotate(-1.56);
  rect(0, 0, 5, 80);
  pop();

  push();
  fill(178, 148, 127);
  rect(x, y, 5, 100);
  translate(x, y);
  rotate(-1.56);
  rect(0, 0, 5, 80);
  pop();
}

function sceneryWindow(x, y) {
  push();
  fill(255, 215, 176);
  rect(x, y, 200, 200);
  pop();

  // Sun
  push();
  fill(252, 217, 134);
  ellipse(x + 60, y + 140, 60, 50);
  pop();

  // Frame
  push();
  fill(178, 148, 127);
  rect(x, y, 10, 200);
  rect(x + 200, y, 10, 200);

  translate(x, y + 200);
  rotate(-1.56);
  rect(0, 0, 10, 210);
  pop();

  push();
  fill(178, 148, 127);
  rect(x, y, 10, 200);
  translate(x, y);
  rotate(-1.56);
  rect(0, 0, 10, 210);
  pop();

  push();
  fill(178, 148, 127);
  rect(x, y, 10, 200);
  translate(x, y + 80);
  rotate(-1.56);
  rect(0, 0, 10, 210);
  pop();
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
  push();
  fill(173, 196, 184);
  rect(0, 520, width, height);
  pop();

  // Clouds
  cloud1(60, 250);
  cloud2(500, 150);
  cloud3(390, 340);
  /* frame(450, 150); */
  /* sceneryWindow(50, 50); */
}

function draw() {
  background(254, 232, 227);
  background(215, 225, 217);
  scenery();
  cat(300, 500);
  treat(300, 300);
  fish(150, 300);
  bomb(450, 300);
}
