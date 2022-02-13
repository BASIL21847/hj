var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 5;
  doorsGroup=new Group()
  climbersGroup=new Group()
 ghost = createSprite(200,200.50,50)
  ghost.addImage(ghostImg)
  ghost.scale=0.25
}

function draw() {
  background(200);
  drawSprites()
  spawndoors()
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")) {
      ghost.y += -8
    }
    if(keyDown("A")){
      ghost.x += -2
    }
    if(keyDown("D")){
      ghost.x += 2
    }
}

function spawndoors() {
  if(frameCount % 60 == 0) {
  var door = createSprite(200,-50,10,10)
  door.addImage(doorImg)
  door.velocityY=3
  door.x=Math.round(random(120,400))
  doorsGroup.add(door)
  var climber = createSprite(200,10)
  climber.addImage(climberImg)
  climber.velocityY=3
  climber.x=door.x
  climbersGroup.add(climber)
  }



}
