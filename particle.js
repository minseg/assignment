class Particle {
    constructor(x, y, mass) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.mass = mass;
      this.size = this.mass * 5;
    }
  
    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acc.add(f);
    }
  
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      fill(127);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }
  