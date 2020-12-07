//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground, myEngine, myWorld;
var boxA, boxB;
function setup() {
  createCanvas(400,400);
  //First we always create the engine
  myEngine=Engine.create();

  //to be able to access my world
  myWorld=myEngine.world;
  boxA=new Box(200, 200, 50, 40);
  boxB=new Box(230,100, 40, 30);
  console.log(boxB);

 ground = new Ground(200, 300, 350, 20);
}

function draw() {
  background(0);  
  //To update the Engine
  Engine.update(myEngine);
  ground.display();    
  boxA.displayBox();
  boxB.displayBox();
  

  drawSprites();

}