class polygon{

    constructor(x,y,r){
    
    var options = {
    
    restitution : 0.5,
  //  isStatic : true,
    density:0.7,
    friction:1
    }
  this.r=r;
    
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    this.image=loadImage("poly.png")
    
    }
    
    display(){
    
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER)
    fill("grey")
    image(this.image,22,30,155,155)
    pop();
    
    
    }
    
    
    }

