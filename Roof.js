class Roof{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x,y,width,height);
World.add(world,this.body);

 }
 display(){
     var Gpos=this.body.position;
     rectMode(CENTRE);
      fill("orange");
      rect(Gpos.x,Gpos.y,this.w,this.h);
      
 }
}
