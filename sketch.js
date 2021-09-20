var tower,door,ghost,climber,invisibleBlock; 
var towerImg,doorImg,ghostImg,climberImg;
var doorGroup,climberGroup,invisibleBlockGroup;


function preload(){
towerImg = loadImage ("tower.png") ;
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("ghost-standing.png")

}

function setup (){
createCanvas(600,600);
tower = createSprite(300,300);
tower.addImage("tower.png",towerImg);
tower.velocityY = 2;
doorGroup = new Group();
climberGroup = new Group();
invisibleBlockGroup = new Group();

ghost = createSprite(200,200,50,50);
ghost.addImage("ghost-standing.png",ghostImg);
ghost.scale = 0.3;
}

function draw(){
background("black");
  

if(tower.y >500){
tower.y = 300;
}
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x -2;
  }
  
  if(keyDown("right_arrow")){
    ghost.x = ghost.x +2;
  }
  if(keyDown("space")){
    ghost.velocityY = -5;
  }
  
ghost.velocityY = ghost.velocityY + 1; 

  
spawnDoors();

  
drawSprites();
}



function spawnDoors(){
if(frameCount %200===0){
var door = createSprite(200,-50);
  door.addImage("door.png",doorImg);
  door.x = Math.round(random(150,500));

  door.velocityY= 2;
  
  
  var climber = createSprite(200,20);
climber.addImage("climber.png",climberImg);
climber.x = door.x;
  var invisibleBlock = createSprite(10,30,70,10);
invisibleBlock.x = door.x;
climber.velocityY=2;
invisibleBlock.velocityY = 2;  
  


door.lifeTime = 700;
climber.lifetime =700;
doorGroup.add(door);
climberGroup.add(climber);

}
}