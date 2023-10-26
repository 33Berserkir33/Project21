
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball;
var groundObj;
var leftside
var rigthside
var side
var khandaImage
var hatImage

function preload()
{
	

	khandaImage = loadImage("Khanda.jpg");
	hatImage = loadImage("hat.jpg");

}

function setup() {
	createCanvas(1500, 700);


	khanda=createSprite(124,184,20,20);
	khanda.addImage(khandaImage);
	khanda.scale=0.65

	Hat=createSprite(1200,155,20,20);
	Hat.addImage(hatImage);
	Hat.scale=0.25

	engine = Engine.create();
	world = engine.world;


	var Ball_options={
		isStatic:false,
		restituion:0.3,
		friction:0,
		density:1.2

	}

	//crear los cuerpos aquí.

	Ball = Bodies.circle(126,100, 20, Ball_options)
	World.add(world, Ball);


	Engine.run(engine);
	groundObj= new Ground(width/2,670,width,20);
	leftside= new Ground(1100,600,20,120);
	rigthside= new Ground(1350,460,20,400);
	side= new Ground(550,650,40,60);
	


}


function draw() {


  rectMode(CENTER);

  //background("white"); ***** Le elimine el Backgrounde
  
  drawSprites();

fill("red");
  ellipse(Ball.position.x, Ball.position.y,20);

 
  groundObj.show();
  rigthside.show();
  leftside.show();
  side.show();



}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(Ball,Ball.position,{x:55,y:-55});
	}

}


