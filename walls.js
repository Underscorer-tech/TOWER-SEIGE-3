class walls{

    constructor(x,y,width,height){
    
    var options = {
    
    restitution : 0.5,
  //isStatic : true,
    density:0.7,
    friction:1
    }
    this.width=width
    this.height=height;
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.body.scale=10;
    World.add(world,this.body);
    this.image=loadImage("block.png")
    this.visibility=255;
    }
     
  display(){

var angle = this.body.angle;
var pos =this.body.position;

if (this.body.speed<3.5){

push()
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
//console.log(this.body.speed);
pop()


}else{

  World.remove(world,this.body)
  push()
  this.visibility=this.visibility-5;
  tint(255,this.visibility);
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,30,40)
  pop();
  

}



  }
     

  
    
    
    }

  