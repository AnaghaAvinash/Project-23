var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,box1,box2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 30 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
	box = new Box(400,650,200,15);
	box1 = new Box(307,600,15,100);
	box2 = new Box(493,600,15,100);
	


  
}


function draw() {
	background(0);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 

  box2.display();
  box1.display();
  box.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
	
	
	  } else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	  }
	  else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	  }
}



