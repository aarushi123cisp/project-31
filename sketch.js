const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var i = 0; i<=800; i= i + 80) {
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);
    

}
 


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   
  //display the divisions
  for(var n = 0; n < divisions.length; n++) {
    divisions[n].display();
  }

  //create the particles using frameCount
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }

  //display the particles 
  for(var h = 0; h < divisions.length; h++) {
    particles[h].display();
  }

}