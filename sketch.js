const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g;
var b;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var bl1;
var r;
function setup() {

    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

g = new Ground(800,700,3500,30);
b = new B(800,500,100,100);
b1 = new B(900,500,100,100)
b2 = new B (800,400,100,100);
b3 = new B (900,400,100,100);
b4 = new B(800,300,100,100);
b5 = new B (900,200,100,100);
b6 = new B (800,100,100,100);
b7 = new B(900,100,100,100);
bl1 = new BALL(200,200,120);

r = new ROPE (bl1.body,{x:600,y:50})


}
function draw(){
    background("silver");
    Engine.update(engine);
  
  
    g.display();
    b.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display(); 
    b7.display();

bl1.display();
r.display();

}
function mouseDragged(){

Matter.Body.setPosition(bl1.body,{x:mouseX,y:mouseY});
























}