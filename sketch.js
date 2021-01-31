const Engine=Matter.Engine,
World=Matter.World,
Bodies=Matter.Bodies
var myengine, myworld
var object, ground , ball 
var box1, box2

function setup() {
createCanvas(800,400);
myengine=Engine.create()
myworld=myengine.world
ground=new Ground(400,380,800,20)
box1=new Box( 200,300,50,50)
box2=new Box( 240,50,50,100)
ball=new Ball( 100,100,50)


  console.log(ground)
  
}

function draw() {
  
  background(255,255,255);

  Engine.update(myengine)
  box1.display()
  box2.display()
  ground.display()
  ball.display()
}
