var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(600,580,80,20);
    block1.shapeColor = "blue";

    block2 = createSprite(500,580,80,20);
    block2.shapeColor = "red";

    block3 = createSprite(400,580,80,20);
    block3.shapeColor = "pink";

    block4 = createSprite(300,580,80,20);
    block4.shapeColor = "green";
    

    box = createSprite(400,300,30,30);
    box.velocityY = 3;
    box.shapeColor = "white";





}

function draw() {
    background(rgb(169,169,169));
   
    //create edgeSprite
   edges = createEdgeSprites();
   box.bounceOff(block1);
   box.bounceOff(block2);
   box.bounceOff(block3);
   box.bounceOff(block4);
  
   if(block1.isTouching(box) && box.bounceOff(block1)){
       box.shapeColor = "blue";
   }

   if(block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor = "red";
   }
   if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor = "pink";
   }
   if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor = "green";
   }

   if(block1.isTouching(box)){
       music.Play();
   }
   if(block2.isTouching(box)){
    music.Play();
  }
  if(block3.isTouching(box)){
    music.Play();
  }
  if(block4.isTouching(box)){
    music.Play();
  }

   if(block1.isTouching(box)){
       ball.shapeColor = "blue";
       ball.velocityY = 0;
       music.stop();
   }
   if(block2.isTouching(box)){
    ball.shapeColor = "red";
    ball.velocityY = 0;
    music.stop();
   }
   if(block3.isTouching(box)){
    ball.shapeColor = "pink";
    ball.velocityY = 0;
    music.stop();
   }
   if(block4.isTouching(box)){
    ball.shapeColor = "green";
    ball.velocityY = 0;
    music.stop();
   }









    //add condition to check if box touching surface and make it box
    drawSprites();
}
