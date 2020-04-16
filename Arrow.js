 class Arrow extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("images/arrow.png");
   this.smokeImage = loadImage("sprites/smoke.png");
   this.trajectory =[];
  }

  display() {

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}

 /* class Arrow {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':3.0,
        'density':12.0,
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/arrow.png")
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

  }
}*/
