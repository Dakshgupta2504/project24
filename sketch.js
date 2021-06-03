const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron,rubber;
var Dust1,Dust2,Dust3,Dust4,Dust5,Dust6;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(900,450,70);
    stone= new Stone(700,320,100,100);
    iron=new Iron(300,350);

    Dust1=new Dust(505,450,10);
    Dust2=new Dust(510,450,10);
    Dust3=new Dust(515,450,10);
    Dust4=new Dust(520,450,10);
    Dust5=new Dust(525,450,10);
    Dust6=new Dust(515,445,10);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();

    Dust1.display();
    Dust2.display();
    Dust3.display();
    Dust4.display();
    Dust5.display();
    Dust6.display();

    
 
}