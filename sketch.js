
var Ali
var Aliimg; 
var wall1;
var wall2;
var wall3; 
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;

var Edges;


var Flybot, Flybotimg;

var Spikebot, Spikebotimg;



 
function preload(){

    Aliimg = loadAnimation("images/Ali2.png", "images/Ali3.png");
    Flybotimg = loadAnimation("images/Flybot2.png", "images/Flybot3.png");
    Spikebotimg = loadAnimation("images/Spikebot2.png", "images/Spikebot3.png");

   
}



function setup() {
  createCanvas(windowWidth, windowHeight);
   
     Ali = createSprite(400, 750, 20, 20);
     Ali.addAnimation("Alien", Aliimg);
     Ali.scale = 0.7;

     Flybot = createSprite(25, 320, 30, 30);
     Flybot.addAnimation("Flying robot", Flybotimg);
     Flybot.scale = 0.9;
     Flybot.velocityX = 3; 
     Flybot.velocityY = 4;

     Spikebot = createSprite(38, 500, 30, 30);
     Spikebot.addAnimation("Spike bot", Spikebotimg);
     Spikebot.scale = 0.9;
     Spikebot.velocityX = 5; 
     Spikebot.velocityY = 6; 
     




    
     wall2  = createSprite(280, 300, 30, 200);
     wall2.shapeColor = "green";
     wall3  = createSprite(100, 50, 200, 30);
     wall3.shapeColor = "yellow";
     wall4  = createSprite(228, 700, 30, 200);
     wall4.shapeColor = "green";
     wall5  = createSprite(550, 480, 30, 200);
     wall5.shapeColor = "yellow";
     wall6  = createSprite(600, 770, 30, 200);
     wall6.shapeColor = "green"
     wall8  = createSprite(280, 320, 200, 30);
     wall8.shapeColor = "yellow";
     wall10 = createSprite(475, 150 , 200, 30);
     wall10.shapeColor = "yellow";
     wall11 = createSprite(100, 200, 30, 200);
     wall11.shapeColor = "green";
     wall13 = createSprite(50, 777, 200, 30);
     wall13.shapeColor = "yellow";
     


     




    
     
  
}

function draw() {
  background(35,98,94); 
  Edges =  createEdgeSprites();

    
   if(keyDown(LEFT_ARROW)){

      Ali.velocityX = -3; 



   }

   if(keyDown(RIGHT_ARROW)){

    Ali.velocityX = 3; 
    


 }

 if(keyDown(DOWN_ARROW)){

  Ali.velocityY = 3; 
  


}

if(keyDown(UP_ARROW)){

  Ali.velocityY = -3; 
  


}



 Ali.bounceOff(Edges);
 Spikebot.bounceOff(Edges);
 Flybot.bounceOff(Edges);


  Redwalls();



  drawSprites();
 
    





}


function Redwalls(){

  if(frameCount % 60 === 0){

       
    


  




  wall1  = createSprite(320, 480, 200, 30);
  wall1.shapeColor = "red";
  wall1.velocityY= 5;
  wall7  = createSprite(100, 400, 200, 30);
  wall7.shapeColor = "red";
  wall7.velocityY = 4;
  wall9  = createSprite(680, 0, 30, 75);
  wall9.shapeColor = "red";
  wall9.velocityY = 3;
  wall12 = createSprite(750, 500, 200, 30);
  wall12.shapeColor = "red";
  wall12.velocityY = 8;



  
  }




}

function Greenwalls(){

  if(frameCount % 60 === 0){

       
    


  




  wall1  = createSprite(320, 480, 200, 30);
  wall1.shapeColor = "red";
  wall1.velocityY= 5;
  wall7  = createSprite(100, 400, 200, 30);
  wall7.shapeColor = "red";
  wall7.velocityY = 4;
  wall9  = createSprite(680, 0, 30, 75);
  wall9.shapeColor = "red";
  wall9.velocityY = 3;
  wall12 = createSprite(750, 500, 200, 30);
  wall12.shapeColor = "red";
  wall12.velocityY = 8;



  
  }




}

