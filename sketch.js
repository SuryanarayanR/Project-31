const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var particles = [];
var divisions = [];
var divisionheight=300;

var engine,world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<= width; k = k+80){
    divisions.push(new Division(k, height-divisionheight/2,10,divisionheight));
  }

  /*or(var j = 40; j <=width; j=j+50 ){
    plinkos.push(new Plinko(j,75));
  }*/

  for(var m = 45; m <=width-10; m=m+50 ){
    plinkos.push(new Plinko(m,175));
  }

  for(var a = 15; a <=width-10; a=a+50 ){
    plinkos.push(new Plinko(a,75));
  }

  for(var b = 45; b <=width-10; b=b+50 ){
    plinkos.push(new Plinko(b,375));
  }

  for(var d = 15; d <=width-10; d=d+50 ){
    plinkos.push(new Plinko(d,275));
  }

  ground = new Ground(240,785,480,30);
}

function draw() {
  background(0); 
  Engine.update(engine); 

  if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
  
  for(var c = 0; c < divisions.length; c++){
     divisions[c].display();
      }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  for(var n = 0; n < particles.length; n++){
    particles[n].display();
  }

  ground.display();

  drawSprites();
}

