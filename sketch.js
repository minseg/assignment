let particles = [];
let gravity;

function setup() {
  createCanvas(600, 400);
  gravity = createVector(0, 0.1);
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(random(width), random(height), random(10, 20)));
  }
}

function draw() {
  background(240);
  for (let particle of particles) {
    particle.applyForce(gravity);
    particle.update();
    particle.show();
  }
}
