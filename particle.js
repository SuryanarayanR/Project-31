class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: false

      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill(this.color);
      ellipseMode(RADIUS);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };