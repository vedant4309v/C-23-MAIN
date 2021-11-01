//Create namespace for Engine
const Engine = Matter.Engine;

//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies

const Bodies = Matter.Bodies;
//Create namespace for Body

const Body = Matter.Body;


function setup() {
  createCanvas(400,400);
//create the engine
engine = Engine.create();


  //Add world to the engine

  world = engine.world;
  

  //tuning of the physics engine 
   var ball_options = {
    restitution: 0.05,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: false
   };
  
  
//create a ground
ground = Bodies.rectangle(100,400,400,20,ground_options);

//add to world
World.add(world,ground);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,500,20);


 


  
  
}

