var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime=0
var score 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,500)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  
  ground = createSprite(400,350,900,10)  
  ground.velocityX = -4
  ground.x = ground.width/2
  
  score = 0
  

  
}


function draw() {
background(220)
  
  food()
  block()
  
  if(FoodGroup.isTouching(monkey)){
    
    FoodGroup.destroyEach()
  }   
    
    
 monkey.collide(ground)
      

    score = score+Math.round(getFrameRate()/60)
      
      
    
    

  
  

  
   text("score:"+score,300,50)
  console.log(frameCount)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -13;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  drawSprites()
  
 
  
}

function food(){
  if(World.frameCount%80===0){
  banana = createSprite(200,200,20,20)
  banana.addImage(bananaImage)
  banana.y = Math.round(random(120,200))
  banana.velocityX = -5
  banana.scale = 0.1 
  banana.Lifetime = -1
  FoodGroup.add(banana)
    
  }
}
  
  function block(){
    if(World.frameCount%150===0){
    obstacle = createSprite(400,310,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2
    obstacle.Lifetime = -1
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
    
      
      
    }
    
    
    
    
  }






