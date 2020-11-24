class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:3,
            friction:0.4,
            restitution:1.2

        }
   
this.x=x;
this.y=y;
this.r=r;

this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);

 }
 display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
      stroke("yellow");
      fill("pink");
      ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
      pop();
 }
}
