const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var helicopterIMG, helicopterSprite, engine, world, packageIMG, packageSprite, packageBody, ground, groundSprite;
function preload(){
helicopterIMG = loadImage("helicopter.png");//folder=helicopterIMG, IMG = helicopter.png
packageIMG = loadImage("package.png");
}
function setup(){
createCanvas(1600,1600);
rectMode("CENTER");
packageSprite=createSprite(width/2,200,10,10);
packageSprite.scale=0.3;
packageSprite.addImage("packageSprite",packageIMG);
helicopterSprite=createSprite(width/2,200,10,10);
helicopterSprite.addImage("helicopterSprite",helicopterIMG);
groundSprite=createSprite(800,790,1600,5);
engine = Engine.create();
world = engine.world;
packageBody=Bodies.rectangle(width/2,200,10,10,{restitution:0.4,isStatic:true});
World.add(world,packageBody)
ground=Bodies.rectangle(800,760,1600,5,{isStatic:true})
World.add(world,ground)
Engine.run(engine);
}
function draw(){
background(0);
packageSprite.x=packageBody.position.x
packageSprite.y=packageBody.position.y	
drawSprites();
}
function keyPressed(){
if(keyCode==DOWN_ARROW){
Matter.Body.setStatic(packageBody,false)
}
}