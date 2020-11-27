const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, box1,box2;
var pig1,log1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);

    box1 = new Box(900,320,50,50);
    box2 = new Box(1100,320,50,50);
    pig1 = new Pig(1000,320);
    log1 = new Log(1000,250,250,PI/2);
    
    box3 = new Box(900,220,50,50);
    box4 = new Box(1100,220,50,50);
    pig2 = new Pig(1000,220);
    log2 = new Log(1000,150,250,PI/2);
    
   
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    
    pig2.display();
    log2.display();
}