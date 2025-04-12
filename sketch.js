let capture;
let tracker;
let positions;
let glitchOffset = 0;
let dataStream = [];

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('canvas-container');
  
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);

  for (let i = 0; i < 20; i++) {
    dataStream.push({
      x: random(width),
      y: random(height),
      speed: random(2, 5),
      text: random(['0', '1', '#', '$', '%'])
    });
  }
}

function draw() {
  background(0, 50);
  image(capture, 0, 0, width, height);

  positions = tracker.getCurrentPosition();

  if (positions.length > 0) {
    applyCyberpunkFilter();
  }

  drawDataStream();

  if (frameCount % 15 < 3) {
    glitchOffset = random(-20, 20);
    tint(255, 0, 255, 150);
    image(capture, glitchOffset, 0, width, height);
    tint(0, 255, 204, 150);
    image(capture, -glitchOffset, 0, width, height);
    noTint();
  }

  drawNeonGrid();
}

function applyCyberpunkFilter() {
  stroke(0, 255, 204);
  strokeWeight(3 + sin(frameCount * 0.1) * 1);
  noFill();
  beginShape();
  for (let i = 0; i < 23; i++) {
    let x = positions[i][0];
    let y = positions[i][1];
    vertex(x + random(-2, 2), y + random(-2, 2)); 
  }
  endShape(CLOSE);

  stroke(255, 0, 255);
  strokeWeight(2);
  line(
    positions[23][0] - 10,
    positions[23][1],
    positions[24][0] + 10,
    positions[24][1]
  );
  line(
    positions[25][0] - 10,
    positions[25][1],
    positions[26][0] + 10,
    positions[26][1]
  );
  fill(255, 0, 255, 50);
  stroke(255, 0, 255);
  let foreheadX = (positions[0][0] + positions[14][0]) / 2;
  let foreheadY = positions[62][1] - 30;
  triangle(
    foreheadX, foreheadY - 20,
    foreheadX - 15, foreheadY + 10,
    foreheadX + 15, foreheadY + 10
  );
  noFill();

  stroke(0, 255, 204);
  let mouthCenterX = (positions[44][0] + positions[50][0]) / 2;
  let mouthCenterY = (positions[44][1] + positions[50][1]) / 2;
  for (let angle = 0; angle < TWO_PI; angle += PI / 4) {
    let radius = 20 + sin(frameCount * 0.05) * 5;
    let x = mouthCenterX + cos(angle) * radius;
    let y = mouthCenterY + sin(angle) * radius;
    line(mouthCenterX, mouthCenterY, x, y);
  }
}

function drawNeonGrid() {
  stroke(0, 255, 204, 100);
  strokeWeight(1);
  let gridSize = 40;
  for (let x = 0; x < width; x += gridSize) {
    line(x, 0, x, height);
  }
  // Horizontal lines
  for (let y = 0; y < height; y += gridSize) {
    line(0, y, width, y);
  }
}

function drawDataStream() {
  textSize(12);
  textAlign(CENTER);
  noStroke();
  fill(0, 255, 204, 200);
  for (let particle of dataStream) {
    text(particle.text, particle.x, particle.y);
    particle.y += particle.speed;
    if (particle.y > height) {
      particle.y = -20;
      particle.x = random(width);
      particle.text = random(['0', '1', '#', '$', '%']);
    }
    if (positions.length > 0) {
      let faceCenterX = (positions[0][0] + positions[14][0]) / 2;
      let dist = abs(particle.x - faceCenterX);
      if (dist < 100) {
        particle.x += random(-5, 5);
      }
    }
  }
}
