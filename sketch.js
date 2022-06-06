    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    var engine;
    var world;




var ball;
var box1;




function setup(){
    createCanvas(3480,900);
    engine = Engine.create();
    world = engine.world;

    //creating the ground 
    ground = new Ground(700,750,3000,40);

    // creating the boxes 
    box1 = new Box(1000,200,100,100);
    box2 = new Box(1200,200,100,100);
    box3 = new Box(1200,200,100,100);
    box4 = new Box(1200,200,100,100);
    box5 = new Box(1200,200,100,100);
    box6 = new Box(1200,200,100,100);
    box7 = new Box(1200,200,100,100);
    box8 = new Box(1200,200,100,100);


    box9 = new Box(1100,200,100,100);
    box10 = new Box(1100,200,100,100);
    box11 = new Box(1100,200,100,100);
    box12 = new Box(1100,200,100,100);
    box13 = new Box(1100,200,100,100);
    box14 = new Box(1100,200,100,100);

    box15 = new Box(1000,200,100,100);
    box16 = new Box(1000,200,100,100);
    box17 = new Box(1000,200,100,100);
    box18 = new Box(1000,200,100,100);

    box19 = new Box(1000,200,100,100);
    box20 = new Box(1000,200,100,100);

    // creating the ball
    ball = new Ball(500,500,80,80);

    //creating the rope 
    rope = new Rope(ball.body,{x : 700 ,y : 50});

} 


function draw(){
background("white");
Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();

ball.display();

rope.display();
}

function mouseDragged(){
  
Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }

