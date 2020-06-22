const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
     
	bob1 = new bob(200,200,20);
	bob2 = new bob(230,200,20);
	bob3 = new bob(260,200,20);
	bob4 = new bob(290,200,20);
	bob5 = new bob(320,200,20);


	Engine.run(engine);
	 
	
	chain1 = new chain(bob1.body,roof.body,-bobDiameter*2,0);
	chain2 = new chain(bob2.body,roof.body,-bobDiameter*2.0);
	chain3 = new chain(bob3.body,roof.body,-bobDiameter*2.0);
	chain4 = new chain(bob4.body,roof.body,-bobDiameter*2.0);
	chain5 = new chain(bob5.body,roof.body,-bobDiameter*2.0);

	roof = new Roof(200,200,50,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

roof.display();

}



