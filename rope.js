class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:250,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope=Constraint.create(options);
         World.add(world,this.rope);
    }

        display(){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
            strokeWeight(4);
            stroke(0);
            fill(0,0,0);
            line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        }

}