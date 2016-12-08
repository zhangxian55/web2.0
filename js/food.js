// 食物类
function food(){
	while(true){
		this.x=parseInt(Math.random()*15);
		this.y=parseInt(Math.random()*20);
	for(var i=0;i<g.snake.body.length;i++){	
		if(g.snake.body[i].x==this.x&&g.snake.body[i].y==this.y){
          break;
		}
	  }
	  if(i==g.snake.body.length){
	  	break;
	  }
   }
   g.tds[this.x][this.y].innerHTML="♥";
}
		