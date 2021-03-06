class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.r = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };