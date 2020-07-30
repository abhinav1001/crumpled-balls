
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	part1=new dustbin(920,580,20,200);
	part2=new dustbin(988,670,120,20);
	part3=new dustbin(1059,580,20,200);
	paperball=new paper(500,580);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  part1.display();
  part2.display();
  part3.display();
  paperball.display();
  drawSprites();
 }

//function keypressed(){
/*if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(paperball,false);
    paperball.velocityx=5;
}
}*/


