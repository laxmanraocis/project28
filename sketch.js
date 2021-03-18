const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;
var stone;
var sling;

function preload(){
	boy=loadImage("images/boy.png");

}

function setup() {
	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1170,140,30);
	mango3 = new Mango(1230,195,30);
	mango4 = new Mango(1000,100,30);
	mango5 = new Mango(1050,170,30);
	mango6 = new Mango(900,200,30);

	treeObj=new Tree(1050,580);
  mango2 = new Mango(1170,140,30);
	groundObject=new Ground(width/2,600,width,20);

	stone = new Stone(230,400,30);

	sling = new Slingshot(stone.body,{x:230,y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();

  sling.display();

  groundObject.display();


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    sling.fly();

}

function keyPressed(){
  Matter.Body.setPosition(stoneObj.body, {x:235,y:420});
  sling.attach(stoneObj.body);
  
}

function detectollision(lmango,lstone){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);

  if(distance <= lstone.r + lmango.r){
    Matter.Body.setStatic(lmango.body,false);

  }

}