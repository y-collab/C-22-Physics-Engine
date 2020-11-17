const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

var balloptions = {
  restitution: 0.7
}
  ball = Bodies.circle(200,200,30,balloptions)
  World.add(world,ball);

var groundoptions = {
  isStatic: true
}
  ground = Bodies.rectangle(400,380,800,20,groundoptions)
  World.add(world,ground);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 30)
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

}