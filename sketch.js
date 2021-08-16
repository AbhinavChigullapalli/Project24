const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase,computerbase,player,computer


function setup() {
  canvas = createCanvas(400, 400);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase = new PlayerBase(100,300,100,100)
   computerbase = new ComputerBase(300,300,100,100)
   player = new Player(100,220,50,90)
   computer = new Player(300,220,50,90)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   
   playerbase.display()
   computerbase.display()

   //display Player and computerplayer

   player.display()
   computer.display()


}
