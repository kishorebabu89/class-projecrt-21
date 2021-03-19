var fixedrect,movingrect
var rect1,rect2,rect3,rect4;



function setup() {
  
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80);
  movingrect=createSprite(400,200,80,50)
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  rect1=createSprite(100,100,50,50);
    rect2=createSprite(200,100,50,50);
    rect3=createSprite(300,100,50,50);
    rect4=createSprite(400,100,50,50)
    rect1.shapeColor="green";
    rect2.shapeColor="green";
    rect3.shapeColor="green";
    rect4.shapeColor="green";
  
}


function draw() {
  background("black");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

   if(isTouching(movingrect,rect3)){
     movingrect.shapeColor="blue";
     rect3.shapeColor="pink";
   }

   else{
     movingrect.shapeColor="green";
     rect3.shapeColor="green";
   }

   if(isTouching(movingrect,rect4)){
     movingrect.shapeColor="yellow";
     rect4.shapeColor="pink";
   }

   else{
     movingrect.shapeColor="green";
     rect4.shapeColor="green";

   }

   if(isTouching(movingrect,rect2)){
    movingrect.shapeColor="blue";
    rect2.shapeColor="pink";
   }

   else{
    movingrect.shapeColor="green";
    rect2.shapeColor="green";

  }




  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2 ){


   return true;


   }

   else{
     return false;
   }


}