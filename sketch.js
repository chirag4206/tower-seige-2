const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(100,100)
    slingShot = new SlingShot(ball.body,{x:100,y:100})

    ground1 = new Ground(600,250,200,10)
    box1 = new Box (520,200,40,40)
    box2= new Box(560,200,40,40)
    box3 =new Box (600,200,40,40)
    box4 = new Box(640,200,40,40)
    box5 = new Box(680,200,40,40)
    box6 = new Box(560,150,40,40)
    box7 = new Box(600,150,40,40)
    box8 = new Box(640,150,40,40)
    box9 = new Box(600,100,40,40)
    ground2 = new Ground(1000,150,200,10)
    box10 = new Box(920,100,40,40)
    box11 = new Box(960,100,40,40)
    box12 = new Box(1000,100,40,40);
    box13 = new Box(1040,100,40,40)
    box14 = new Box(1080,100,40,40)
    box15 = new Box(960,50,40,40)
    box16 = new Box(1000,50,40,40)
    box17 = new Box(1040,50,40,40)
    box18 = new Box(1000,0,40,40)
    
}



function draw(){
    background("white");
    Engine.update(engine)
    
    ground1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display();
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    ball.display()
    slingShot.display()
    ground2.display()

}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingShot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       
      
        slingShot.attach(ball.body);
    }
}