var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 200, 50);
  wall=createSprite(1500, 200, 60, height/2);
 
  wall.shapeColor=color(80, 80, 80);
  thickness = random(22, 83);
}


function draw() {
  background("black");  
  bullet.velocityX = speed;
  if (wall.x - bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (deformation>10){
      bullet.shapeColor=color(255, 0, 0);
    }
    if (deformation<10){
    bullet.shapeColor=color(0, 255, 0);
  }
}
  drawSprites();
}