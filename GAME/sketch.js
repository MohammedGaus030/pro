const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var PLAY=1
var END=0
var gameState=PLAY
var engine, world;
var bg,background
var boy,boyR,boyJ,boyS
var ob,ob1,ob2,ob3,ob4
var score=0;
var obGroup
var ground


function preload(){
bg=loadImage("images/background0.png")
boyR=loadAnimation("Running Animation/Running1.png","Running Animation/Running2.png","Running Animation/Running3.png","Running Animation/Running4.png")
boyJ=loadAnimation("Jumping Animation/Jumping1.png","Jumping Animation/Jumping2.png","Jumping Animation/Jumping3.png","Jumping Animation/Jumping4.png","Jumping Animation/Jumping5.png")
boyS=loadAnimation("Sliding Animation/Sliding1.png","Sliding Animation/Sliding2.png","Sliding Animation/Sliding3.png","Sliding Animation/Sliding4.png","Sliding Animation/Sliding5.png")
ob1=loadImage("images/ob1.png")
ob2=loadImage("images/ob2.png")
ob3=loadImage("images/ob3.png")
ob4=loadImage("images/ob4.png")
}
function setup()
 {
  var canvas = createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  background=createSprite(500,0,600,600)
background.addImage(bg);
background.scale = 3.0

boy=createSprite(100,480,10,10)
boy.addAnimation("running",boyR)

obGroup = new Group()
ground = createSprite(600,500,1300,10);
ground.visiable = false;

boy.setCollider("rectangle",0,0,150,200);

score=0


}
function draw() {
  Engine.update(engine);
 
  background.velocityX = -3

  if (background.x < 0){
    background.x = background.width/2
  }
    background.velocityX = -(4 + 3* score/100)

    score = score + Math.round(getFrameRate()/60);
    
    if(score>0 && score%100 === 0){

    }

  
  
  
  if(keyDown("up_arrow")&& boy.y >= 100) {
    boy.velocityY = -12;
    
}
boy.velocityY = boy.velocityY + 0.8
boy.collide(ground)
spawnObstacles()



drawSprites()

text("Score : " + score,100,100,)
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var ob = createSprite(650,480,10,40);
    ob.velocityX = -(6 + score/100);
  
     var r = Math.round(random(1,4));
     switch(r) {
       case 1: ob.addImage(ob1);
               break;
       case 2: ob.addImage(ob2);
               break;
       case 3: ob.addImage(ob3);
               break;
       case 4: ob.addImage(ob4);
               break;
      
       default: break;
     }
     obGroup.add(ob)
  }}
  

 