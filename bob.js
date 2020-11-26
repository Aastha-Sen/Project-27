class Bob{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:1.3,
			friction:0.5,
			density:3	
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x,this.y,this.r/2,options);
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(bobpos.x, bobpos.y);
			rotate(angle);
			ellipse(RADIUS);
			fill(255,0,255)
			ellipse(0,0,this.r,this.r);
			pop()
			
	}

}