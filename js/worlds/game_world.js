class game_world extends world
{
	constructor(name2) 
	{
		super(name2)
	}
	
	init()
	{
        
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites
    allSprites.clear();
    
    var level_tst = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],//0
      [1, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0],//1
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],//2
      [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],//3
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],//4
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],//5
      [1, 0, 0, 1, 4, 0, 0, 0, 1, 0, 1],//6
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],//7
      [1, 0, 0, 1, 4, 0, 0, 0, 0, 3, 1],//8
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//9
    // 0  1  2  3  4  5  6  7  8  9  10
    ];
    
    
    var tmap = new tilemap(level_tst);
    t.add(tmap);

    tmap.draw_map();
    var path = []
    var test = dfs(deepCopy(level_tst), 8,1,7,1,path)
    console.log(test, path)
    for(var i = path.length - 1; i >= 0; i--) {
      var ctx = path[i].x * tmap.tilew + tmap.tile_space;
      var cty = path[i].y * tmap.tileh + tmap.tile_space;
      var ytile = new tile(cty, ctx, 7);
      t.add(ytile);
      ytile.sprite.draw = function () {
        fill(color(65, 190, 253));
        ellipse(0, 0, ytile.w, ytile.h);
      }; //end draw
    }
		
	}
	

	
}