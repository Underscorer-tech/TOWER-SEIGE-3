const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bw1, bw2, bw3, bw5, bw4, bw6, bw7, g1, g2, rw1, rw2, rw3, rw4, rw5, cw1, cw2, cw3,bcw1,b1,b2,rope1,b3,b4,b5,r1,r2,r3,c1 ,g2;
var backgroundImg

function preload(){

getTime();

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bw1 = new walls(550, 510, 35, 60);
  bw2 = new walls(587, 510, 35, 60); 
  bw3 = new walls(624, 510, 35, 60); 
  bw4 = new walls(661, 510, 35, 60); 
  bw5 = new walls(698, 510, 35, 60);
  bw6 = new walls(735, 510, 35, 60);
  bw7 = new walls(513, 510, 35, 60);
  rw2 = new walls(587, 455, 35, 60);
  rw3 = new walls(624, 455, 35, 60);
  rw4 = new walls(661, 455, 35, 60);
  rw5 = new walls(698, 455, 35, 60);
  rw7 = new walls(550, 455, 35, 60)

  cw1 = new walls(587, 380, 35, 60);
  cw2 = new walls(624, 380, 35, 60);
  cw3 = new walls(661, 380, 35, 60);

  bcw1 = new walls(624,334, 35, 60);
  b1 = new walls(954 ,290,35,60)
  b2 = new walls(1028 ,290,35,60)
  b3 = new walls(991 ,290,35,60)
  b4 = new walls(1102 ,290,35,60)
  b5 = new walls(1065 ,290,35,60)

  c1 = new walls(1028 ,250,35,60)
  c2 = new walls(991 ,250,35,60)
  c3 = new walls(1065 ,250,35,60)
  r1 = new walls(1028, 185,35,60)
  g1 = new ground(624, 550, 340, 20)
  g2 = new ground(1028,350, 300, 20)
poly = new polygon(250,50,35)
 
  rope1 = new rope(poly.body,{x:250,y:300})
  
  Engine.run(engine);
}



function draw() {
console.log(mouseX+" "+mouseY)

  rectMode(CENTER)
  Engine.update(engine);
 if (backgroundImg){
  background(backgroundImg);
 }
  drawSprites();

  bw1.display();
  bw2.display();
  bw3.display();
  bw4.display();
  bw5.display();
  bw6.display();
  bw7.display();
  rw2.display();
  rw3.display();
  rw4.display();
  rw5.display();
  rw7.display();
  cw1.display();
  cw2.display();
  cw3.display();
  bcw1.display();
  g1.display();
  b1.display();
  b2.display();
  b3.display();
  c1.display();
  c2.display();
  c3.display();
  b4.display();
  b5.display();
  g2.display();
  r1.display();
 
  rope1.display();
 poly.display();
}

function mouseReleased(){

rope1.fly();


}



function mouseDragged(){

  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
  
  }

function keyPressed(){

if(keyCode === 32){


rope1.attach(poly.body)


}



}
async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}

