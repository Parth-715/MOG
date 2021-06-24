const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var   river , bridge ,bridge2;
var backgroundI , riverI , bridgeI ;
var dragon1,dragon2,dragon3,dragon4,dragon5,dragon6;
var dragon1I,dragon1II,dragon2I,dragon3I,dragon4I,dragon5I,dragon6I
var wood , woodI
var ground
function preload(){
    backgroundI= loadImage("Background.jpeg");
    riverI=loadImage("River.jpg");
    bridgeI=loadImage("bridge.png");
    dragon1I=loadImage("Dragon1.gif");
    
    dragon2I=loadImage("dragon2.gif");
    dragon3I=loadImage("dragon3.gif");
    dragon4I=loadImage("dragon4.gif");
    dragon5I=loadImage("dragon5.gif");
    woodI=loadImage("wood.jpg")
}
function setup(){
     createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    ground = createSprite( 300,300,displayWidth,displayHeight)
    ground.addImage(backgroundI,"gro")
    
    river = createSprite( 300,displayHeight/2,600,100)
    river.addImage(riverI,"riv")
    bridge = createSprite( 100,displayHeight/2,100,100)
    bridge.addImage(bridgeI,"bri")
    bridge.scale = 0.25;
    bridge2 = createSprite( 500,displayHeight/2,100,100)
    bridge2.addImage(bridgeI,"brig")
    bridge2.scale = 0.25;
    wood = createSprite( 433,displayHeight-25,800,100)
    wood.addImage(woodI,"wod")
    wood.scale = 0.25;
 
    dragon1 = createSprite()
    dragon2 = createSprite()
    dragon3 = createSprite()
    dragon4 = createSprite()
    dragon5 = createSprite()
    dragon6 = createSprite()
    
    dragon1.addImage(dragon1I,"d1")
    dragon2.addImage(dragon2I,"d2")
    dragon3.addImage(dragon3I,"d3")
    dragon4.addImage(dragon4I,"d4")
    dragon5.addImage(dragon5I,"d5")
    dragon6.addImage(dragon6I,"d6")
}







function draw(){
    background("white")
    image(dragon1I,600,100,500 ,500);
    image(dragon2I,600,100,500 ,500);
    image(dragon3I,600,100,500 ,500);
    image(dragon4I,600,100,500 ,500);
    image(dragon5I,600,100,500 ,500);
    image(dragon6I,600,100,500 ,500);
    
    
    


    drawSprites();
}
 