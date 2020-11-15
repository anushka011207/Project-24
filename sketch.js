
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Paper = Matter.Body;
const Dustbin = Matter.Body;
var paperObject;
var options, options2;
var groundSprite;
var bottom, leftSide, rightSide;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	options2={
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = rect(400,680,800,40,options2);

	paperObject = ellipse()
	World.add(world,paperObject);

	bottom = createSprite(500,650,200,20,{isStatic:true});
	bottom.shapeColor = "darkGray";

	leftSide = createSprite(400,610,20,100,{isStatic:true});
	leftSide.shapeColor = "darkGray";

	leftSide = createSprite(600,610,20,100,{isStatic:true});
	leftSide.shapeColor = "darkGray";

	Engine.run(engine);

}


function draw() {
  
  drawSprites();
 
}

function keyPressed()	{
	if(keyCode === UP_ARROW)	{
		Matter.body.applyForce(paperObject.body.position,(x:85,y:85));
	}
}