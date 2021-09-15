const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, drop;

function preload() {

heli = loadImage("helicopter.png");

}
function setup(){
    var canvas = createCanvas(400,400);
    // Engine of matter.js creates our engine
    engine = Engine.create();
    // our engine creates the world
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

                                                                                             
   // Bodies of matter.js creates different shaped bodies in our world
    ground = Bodies.rectangle(200,380,400,10,ground_options);
    //World adds our body inside this world
    World.add(world,ground);

    var drop_options ={
        restitution: 1.5 ,
        isStatic: true
    }

    drop = Bodies.rectangle(200, 200, 50, 20, drop_options);
    World.add(world,drop);

    var air_options ={
        isStatic: true
    }

    
    air = Bodies.rectangle(200, 200, 90, 30, air_options);
    World.add(world,air);

    console.log(ground);

}
 
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    // to draw a rect on a canves
    rect(ground.position.x,ground.position.y,400,10);

    rectMode(CENTER)
    rect(drop.position.x,drop.position.y,30,30);
   
    imageMode(CENTER);
    image(heli,air.position.x, air.position.y, 100, 30);

    
}

function keyPressed () {

if (keyCode==DOWN_ARROW) {

Matter.Body.setStatic(drop, false)

}

}