// 蛇类
function snake(){
	this.body=[
        {"x":3,"y":18},
        {"x":3,"y":19}
	]
	this.direction="left";
}
snake.prototype.update=function(){
	switch(this.direction){
		case "left":
		this.body.unshift({
			"x":this.body[0].x,
			"y":this.body[0].y-1
		});
		break;
		case "right":
		this.body.unshift({
			"x":this.body[0].x,
			"y":this.body[0].y+1
		});
		break;
		case "down":
		this.body.unshift({
			"x":this.body[0].x+1,
			"y":this.body[0].y
		});
		break;
		case "up":
		this.body.unshift({
			"x":this.body[0].x-1,
			"y":this.body[0].y
		});
		break;
	}
	if(this.body[0].x<0||this.body[0].x>14||this.body[0].y>19||this.body[0].y<0){
		g.gameover();
		return false;
	}
	for(var i=1;i<this.body.length;i++){
		if(this.body[i].x==this.body[0].x&&this.body[i].y==this.body[0].y){
			g.gameover();
			return false;
		}
	}
	if(this.body[0].x==g.food.x&&this.body[0].y==g.food.y){
		g.setnewfood();
	}else{
		var last=this.body.pop();
		g.tds[last.x][last.y].style.backgroundColor="white";
	}
	return true;
}

	
   snake.prototype.xuanran=function(){
	g.tds[this.body[0].x][this.body[0].y].style.backgroundColor="red";
	for(var i=1;i<this.body.length;i++){
		g.tds[this.body[i].x][this.body[i].y].style.backgroundColor="gold";
	}
}
   snake.prototype.xuanran2=function(){
 	g.tds[this.body[0].x][this.body[0].y].style.backgroundColor="white";
	for(var i=1;i<this.body.length;i++){
		g.tds[this.body[i].x][this.body[i].y].style.backgroundColor="white";
 	}
 }