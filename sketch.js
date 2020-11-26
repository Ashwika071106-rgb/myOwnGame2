
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

var ground;
var boy1, boy2;
var boy1Image, boy2Image;
var score = 0;
var bgImage, bg;
var mapButton, mapButtonImage;
var f=0;
var map, mapImage;
var desertImage;

function preload()
{
	//boy1Image = loadAnimation("images/boyRunning1.png","images/boyRunning2.png");
	boy1Image = loadAnimation("images/boyRunning3.png","images/boyRunning4.png");
	bgImage = loadImage("images/bg1.png");
	mapButtonImage = loadImage("images/mapButton.png");
	mapImage = loadImage("images/mapImage.png");
	desertImage = loadImage("images/desert.jpg");
}

function setup() {
	createCanvas(1200, 500);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.

	ground = createSprite(600,height, 1200, 50);
	ground.scale = 1.5;
	ground.velocityX = -(6 + 3*score/100);	
	//ground.visible = false;

	bg= createSprite(600,150,1200,500);
	bg.addImage(bgImage);
	bg.scale = 2.5;
	bg.velocityX = -(6 + 3*score/100);	


	boy1 = createSprite(100,500,50,50);
	boy1.addAnimation("running",boy1Image);
	boy1.scale= 0.5;

	mapButton = createSprite(50,50,20,20);
	mapButton.addImage(mapButtonImage);	
	mapButton.scale = 0.04;

	//Engine.run(engine);

	/*map = createSprite(600,250,100,100);
		map.addImage(mapImage);
		map.scale = 2;*/
	
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

 
  if (ground.x < 200){
	ground.x = ground.width/2;
  }
  if (bg.x < 200){
	bg.x = bg.width/2;
  }
 
	boy1.collide(ground);

	if(keyDown("space") &&  boy1.y>=300){
		
		boy1.velocityY = -4;
		
	}

	/*if(keyDown("right_arrow")){
		boy1.x = boy1.x + 10;
	}*/
	
	boy1.velocityY += 0.8;

	console.log(boy1.y);

	if(frameCount % 100 === 0){
		score+= 2;
	}

	/*if(  mousePressedOver(mapButton)){

		//if(mousePressedOver(mapButton)){
		//text("Done", 500,400);
		//bg.addImage(bgImage);
		
		//f=0;
		map.destroy();
		
		//}
	}*/	
 
	if(score >= 2 && score <=16){
		bg.addImage(desertImage);
		bg.scale = 7;

	}
	else{
		bg.addImage(bgImage);
		bg.scale = 2.5;
	}
	

	
	
	/**/
 
	
  drawSprites();
  //mapCreate();
  //createDesert();

	stroke(0);
	text("MILES CROSSED: " + score, 100,100);

	
}

function mapCreate(){
	if(mousePressedOver(mapButton) && f === 0){
		//text("MAP", 500,400);
		
		
		bg.velocityX=0;
		ground.velocityX=0;
		f=1;
	}
}

function createDesert(){
	if(score >= 2 && score <= 16){
		bg.x = 700;
		bg.y = 450;
		bg.addImage(desertImage);
		bg.scale = 7;

		ground.velocityX = -(6 + 3*score/100);	
		bg.velocityX = -(6 + 3*score/100);	

		if (ground.x < 200){
			ground.x = ground.width/2;
		  }
		  if (bg.x < 200){
			bg.x = bg.width/2;
		  }
		 
	}
}