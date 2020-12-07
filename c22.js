//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground, myEngine, myWorld;
var ball;
function setup() {
  createCanvas(400,400);
  //First we always create the engine
  myEngine=Engine.create();
 

  //to be able to access my world
  myWorld=myEngine.world;

  var ground_options={
    isStatic:true 
  }
  //create the body
  ground=Bodies.rectangle(150, 200, 200, 10,ground_options);
  var ball_options={
    restitution: 1
  }
  ball = Bodies.circle(150, 50, 25, ball_options);
  World.add(myWorld, ball);
  //to add the created body to myWorld
  World.add(myWorld,ground);

  console.log(ground);
}

function draw() {
  background(0);  
  //To update the Engine
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 200, 10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 25, 25);

  drawSprites();

}