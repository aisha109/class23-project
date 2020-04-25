const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var square1,square2,square3,square4,square5,square6,world,engine,ground;
var square7;

function setup(){
    var canvas = createCanvas(400,400);

   
    engine = Engine.create();
    world = engine.world;

  square1 = new Square (50,350,50,100);
  square2 = new Square (100,300,60,200);
square3 = new Square (350,350,50,100);
square4 = new Square (300,300,60,200);
square5 = new Square (120,350,30,230);
square6 = new Square (280,350,30,230);
square7 = new Square (200,150,200,20);

ground = new Ground();



}

function draw(){
    background(225);

    Engine.update(engine);

   square1.display();
square2.display();
square3.display();
square4.display();
square5.display();
square6.display();
square7.display();


ground.display();
}