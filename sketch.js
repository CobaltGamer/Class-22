const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var ball;
var ground;
var circle1;

function setup() {
  
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ball = Bodies.rectangle(300,200,15,15);
  World.add(myWorld, ball);
  var option = {
    isStatic: true
  }

  
  ground = Bodies.rectangle(width/2,height - 10, width, 10, option);
  World.add(myWorld, ground);
  
  /*var option1 = {

    restitution: 1
  }*/

  circle1 = Bodies.circle(100,300,20, {restitution: 2});
  World.add(myWorld, circle1);

  console.log(ball);
  console.log(ball.position.x);
  console.log(circle1);
}

function draw() {
  background("blue"); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  // rect(200,200,50,50);
  rect(ball.position.x, ball.position.y, 15,15)
  

  fill("yellow");
  rect(ground.position.x, ground.position.y, width, 10);
  
  //circle(circle1.position.x, circle1.position.y, 40);
  ellipse(circle1.position.x, circle1.position.y, 40,40);

  drawSprites();
}