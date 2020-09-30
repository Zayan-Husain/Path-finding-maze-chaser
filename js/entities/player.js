///////////////player///////////////////
class player extends yentity
{
  constructor(x2,y2) 
  {
	super(x2,y2);
	this.speed = 4;
    this.type = "player";
    this.grafic_type = "none";
    this.w = 30;
    this.h = 30;
    this.hitbw = 30; //hitbox width
    this.hitbh = 30;
    this.tx = 0
    this.ty = 0
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
  this.move()
  this.hit()
  this.tx = Math.floor(this.x/this.tw)
  this.ty =Math.floor( this.y/this.th)
  }//end update
  move() {
    var t = this;
    
    if (keyDown('a')) {
        t.move_by(-t.speed, 0);
    }
    if (keyDown('d')) {
        t.move_by(t.speed, 0);
    }
    if (keyDown('s')) {
        t.move_by(0, t.speed);
    }
    if (keyDown('w')) {
        t.move_by(0, -t.speed);
    }
  }//end move
  hit() {
    var t = this;
    t.collide("wall",0,0)
  }//end hit
  
  
}//end class
///////////////end player///////////////////