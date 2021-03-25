const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, block;
var slingshot;
var image, polygon_img;



function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(390, 300, 250, 10);
    platform2 = new Ground(700, 200, 200, 10);

    box1 = new Box(360, 275, 30, 40);
    box2 = new Box(390, 275, 30, 40); 
    box3 = new Box(420, 275, 30, 40);
    box4 = new Box(450, 275, 30, 40);
    box5 = new Box(480, 275, 30, 40);
    box6 = new Box(330, 275, 30, 40);
    box7 = new Box(300, 275, 30, 40);

    //level two
    block8 = new Box(330, 235, 30, 40);
    block9 = new Box(360, 235, 30, 40);
    block10 = new Box(390, 235, 30, 40);
    block11 = new Box(420, 235, 30, 40);
    block12 = new Box(450, 235, 30, 40);
    //level three
    block13 = new Box(360, 195, 30, 40);
    block14 = new Box(390, 195, 30, 40);
    block15 = new Box(420, 195, 30, 40);
    //top
    block16 = new Box(390, 155, 30, 40);

    box17 = new Box(625, 175, 30, 40);
    box18 = new Box(655, 175, 30, 40);
    box19 = new Box(685, 175, 30, 40);
    box20 = new Box(715, 175, 30, 40);
    box21 = new Box(745, 175, 30, 40);
    box22 = new Box(775, 175, 30, 40);
    
    box23 = new Box(655, 135, 30, 40);
    box24 = new Box(685, 135, 30, 40);
    box25 = new Box(715, 135, 30, 40);
    box26 = new Box(745, 135, 30, 40);

    box27 = new Box(685, 95, 30, 40);
    box28 = new Box(715, 95, 30, 40);

    box29 = new Box(705, 55, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon, {x: 100, y:200});

    
}

function draw(){
   ground.display();
   platform1.display();
   platform2.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();

   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();

   box23.display();
   box24.display(); 
   box25.display();
   box26.display();
   
   box27.display();
   box28.display();
   box29.display();

   slingshot.display();

   imageMode(CENTER)
   image(polygon_img, polygon.position.x, polygon.position.y,40, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}