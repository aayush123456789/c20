var movingrect,fixedrect;




function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  fixedrect = createSprite (220,100,30,30);
  movingrect = createSprite (220,220,20,20);
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  movingrect.velocityY = -2;
  fixedrect.velocityY = 2;


}

function draw() {
  background("black");
 // movingrect.x = World.mouseX;
 // movingrect.y = World.mouseY;
  
if(movingrect.x -fixedrect.x  < fixedrect.width/2 + movingrect.width/2 && 
   fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
   movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
   fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
   fixedrect.shapeColor = "red";  
   movingrect.shapeColor = "red";
}
else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}

  drawSprites();
}