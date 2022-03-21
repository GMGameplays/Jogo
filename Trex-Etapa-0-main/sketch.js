var BgImg,AlienImg; 
var AlienS1; 
var Spaceship;
var score=0


function preload(){ 
  BgImg = loadImage("Assets/bg.png"); 
  AlienImg = loadImage("Assets/Ship1.png");
  SpaceshipImg = loadImage("Assets/Spaceship.png");
  LaserImg=loadImage("Assets/blue_laser.png");
  RlaserImg=loadImage("Assets/red_laser.png");
} 
function setup() { 
  createCanvas(800,600); 
  Background=createSprite(400,300,800,600);
  Background.addImage(BgImg);
  Background.velocityX=-10;
  Background.scale=2;
  Spaceship=createSprite(100,300,100,100);
  Spaceship.addImage(SpaceshipImg);
  AlienG=new Group();
  LaserG=new Group();
  RlaserG=new Group();
  hBar=createSprite(150,580,200,15);
  score+1
} 
function draw() {
  background(220);
  if(Background.x<0){
    Background.x=200
  }
  if(LaserG.isTouching(AlienG)){
    AlienG.destroyEach();
    LaserG.destroyEach();
    score=score+1
  }
  spawnAlien(700,100);
  spawnAlien(500,200);
  spawnAlien(600,300);
  spawnAlien(750,250);
  spawnAlien(450,350);
  spawnAlien(375,150);
  spawnAlien(400,400);
  spawnAlien(750,450);
  spawnAlien(650,500);
  spawnAlien(550,550);
  Moviment();
  drawSprites();
  textSize(20);
  text("Score:"+score,50,50);
} 
function spawnAlien(x,y) { 
  AlienS1=createSprite(x+1,y,64,64); 
  AlienS1.addImage(AlienImg);
  AlienS1.setCollider("rectangle",0,0,64,35);
  if(frameCount%30===0){
    AShoot();
  }
  AlienG.add(AlienS1);
}
function Moviment() {
  if(keyDown(UP_ARROW)){
    Spaceship.y=Spaceship.y-7
  }
  if(keyDown(DOWN_ARROW)){
    Spaceship.y=Spaceship.y+7
  }
  if(keyDown(RIGHT_ARROW)){
    Shoot();
  }
}
function Shoot() {
  if(frameCount%20 === 0){
  Laser=createSprite(Spaceship.x+90,Spaceship.y,421,76);
  Laser.scale=0.25
  Laser.addImage(LaserImg);
  Laser.velocityX=10
  LaserG.add(Laser);
  }
}
function AShoot() {
    Rlaser=createSprite(AlienS1.x-90,AlienS1.y,421,76);
    Rlaser.scale=0.10;
    Rlaser.addImage(RlaserImg);
    Rlaser.velocityX=-10
    RlaserG.add(Rlaser)
}