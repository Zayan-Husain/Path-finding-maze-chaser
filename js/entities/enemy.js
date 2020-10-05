///////////////enemy///////////////////
class enemy extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 1;
	  this.type = "enemy";
      this.move_path=[];
      this.get_path_timer = new ytimer(0);
      this.path_pos = 0
      this.tx = this.x/this.tw
      this.ty = this.y/this.th
      this.grafic_type = "none"
      this.did_first_search;
  }//end constructor
  
  update()
  {
	var t = this;
  super.update();
    // tilemap x and y
    this.tx = Math.floor(this.x/this.tw)
    this.ty = Math.floor(this.y/this.th)
    t.get_path();
    t.move()
    t.hit()
  }//end update
  move()
  {
      
    var t = this;
    
    var mp = t.move_path
    if (t.path_pos >= mp.length - 1) return;
    if (mp.length === 0) return;
    var tp = mp[mp.length - t.path_pos - 1] //target position
    console.log(tp, mp, t.path_pos)
    t.move_to( tp.y * t.th + (t.th/2),tp.x * t.tw + (t.tw/2));
    if (t.tx === tp.x && t.ty === tp.y) t.path_pos++; // if enemy position reached next position in path
  }//end move
  get_path()
  {
    var t = this;
    if (!this.get_path_timer.finished() && t.did_first_search) return;
    t.did_first_search = true;
    var p = t.get_by_type('player')[0];
    var ptx = p.tx,
        pty = p.ty;
    if(ptx ===0 && pty===0) return;
    this.move_path = [];
    dfs(deepCopy(t.maze), this.ty, this.tx, pty, ptx, this.move_path);
   // console.log(this.ty,this.tx, pty, ptx,this.move_path)
    this.path_pos = 1
  }//end get_path
  hit() {
    var t = this;
    t.collide("enemy",0,0)
  }//end hit
  
  
}//end class
///////////////end enemy///////////////////