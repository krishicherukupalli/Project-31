const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground, division;

function setup() {
  createCanvas(480, 800);
engine = Engine.create();
world = engine.world
ground = new Ground(240, 800, 480, 20);

for (var k = 0; k<=width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var j = 15; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 75));
}

for (var j = 15; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 175));
}

for (var j = 15; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 275));
}

for (var j = 15; j <= width; j = j + 50){
  plinkos.push(new Plinko(j, 375));
}

}

function draw() {
  background(0);
Engine.update(engine);

if (frameCount%60 === 0){
  particles.push(new Particle(random(20, 460), 10));
}

for (i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}

for (i = 0; i < particles.length; i++){
  particles[i].display();
}

for (i = 0; i < divisions.length; i++){
  divisions[i].display();
}
  
  ground.display();
}
