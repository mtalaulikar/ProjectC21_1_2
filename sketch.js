var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(10, 200, 100, 10);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
//bullet.velocityX = 10;
}

function draw() {
  background(0); 
 // bullet.collide(wall);
  
  thresholdX = bullet.width/2 + wall.width/2;
  
  if(((wall.x - bullet.x) <= thresholdX) ){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = "red";
    } 
    else { 
      wall.shapeColor = "green";
    }

  } 
  drawSprites();
}