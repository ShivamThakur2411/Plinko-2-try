 const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies;
 
 var engine, world;
var ground;
var sideBar1,SideBar2;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var line;

var score = 0;
var particle;
var turn = 0;

var gameState = "end"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  line = new Line(400,490,800,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background(0);
  Engine.update(engine);

  textSize(40)
 text("Score : "+ score,20,30);

text("500",5,550);
 text("100",85,550);
 text("500",165,550);
 text("200",250,550);
 text("100",330,550);
 text("500",410,550);
 text("300",490,550);
 text("200",570,550);
text("300",650,550);
text("100",730,550);
  
   for (var j = 0; j < plinkos.length; j++) {
     plinkos[j].display();
   }

   if(frameCount%10===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {  
     divisions[k].display();
   }

   if(particle = null){
      particle.display();

      if(particle.body.position.y > 460){

        if(particle.body.position.x < 300){
          score = score + 500
          particle = null

          if(Count>=5){
            gameState = "end";
          }
        }
      }
   }

   line.display();

}

function mousePressed(){
  if(gameState !== "end"){
    if(frameCount%10===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
  }
}