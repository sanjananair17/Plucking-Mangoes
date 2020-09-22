const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(650, 450, 500, 500);

	boy = new Boy(150, 630, 200, 200);

	ground = new Ground(400, 690, 1000, 20);

	stone = new Stone(85, 580, 40, 40);
	
    constrain = new Constrain(stone.body,{x:85, y:580});

	mango1 = new Mango(450, 400, 50);
	mango2 = new Mango(575, 435, 50);
	mango3 = new Mango(665, 300, 50);
	mango4 = new Mango(560, 350, 50);
	mango5 = new Mango(720, 375, 50);
	mango6 = new Mango(850, 410, 50);
	mango7 = new Mango(795, 315, 50);
	mango8 = new Mango(640, 385, 50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	Engine.update(engine);

	tree.display();

	boy.display();

	ground.display();

	stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	constrain.display();
	
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    constrain.fly();
}

function detectCollision(lstone, lmango){
		mangoBodyPosition = lmango.body.position;
		stoneBodyPosition = lstone.body.position;

		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body, false);
		}
}

function keyPressed(){
    if(keyCode === 32){
        constrain.attach(stone.body);
    }
}