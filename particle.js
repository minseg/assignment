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
        this.vel.mult(0.99);  // 감속 효과
        this.pos.add(this.vel);
        this.acc.mult(0);
      }
      
    edges() {
        if (this.pos.y > height) {
          this.vel.y *= -0.8;  // 바닥에 부딪히면 반사
          this.pos.y = height;
        }
        if (this.pos.x > width) {
          this.vel.x *= -0.8;  // 화면 끝에 부딪히면 반사
          this.pos.x = width;
        } else if (this.pos.x < 0) {
          this.vel.x *= -0.8;
          this.pos.x = 0;
        }
      }
  
    show() {
      fill(127);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }
  