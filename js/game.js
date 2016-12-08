// 游戏类
function game(){
	this.tds=[];
	this.init();
	this.food=null;
	this.snake=new snake();
	this.bindevent();
}
var table=document.getElementsByTagName("table")[0];
game.prototype.init=function(){
	for(var i=0;i<15;i++){
		var otr=document.createElement("tr");
		var temparr=[]
		for(var j=0;j<20;j++){
			var otd=document.createElement("td");
			 otr.appendChild(otd);
			temparr.push(otd);
			}
			this.tds.push(temparr);
			table.appendChild(otr);
	}
	
}	
game.prototype.start=function(){
	
	this.frame=0;
	this.snake.xuanran();
	this.food=new food();
	var self=this;
	this.timer=setInterval(dingshiqi,20);
		function dingshiqi(){
		self.frame++;
		h3.innerHTML="帧数:"+self.frame+" FPS:"+"50";
        h1.innerHTML="分数："+fenshu;
		h2.innerHTML="时间"+parseInt(self.frame/50)+"秒";
		if(self.frame % 15 == 0){
			self.snake.update()&&self.snake.xuanran();
		 }
	}
}
game.prototype.bindevent=function(){
	var self=this;
	document.onkeydown=function(){
           event=event||window.event;
           if(event.keyCode==37&&self.snake.direction!="right"){
           	  self.snake.direction="left";
           }else  if(event.keyCode==38&&self.snake.direction!="down"){
           	  self.snake.direction="up";
           }else  if(event.keyCode==39&&self.snake.direction!="left"){
           	  self.snake.direction="right";
           }else  if(event.keyCode==40&&self.snake.direction!="up"){
           	  self.snake.direction="down";
           }
	  }
	
}

    game.prototype.gameover=function(){
         clearInterval(this.timer);
         fenshu=1;
         h4.innerHTML="Gameover";
    }
    game.prototype.newgame=function(){
         g.gameover();
         g.setnewfood(); 
         var self=this;
         self.snake.xuanran2();
         this.tds[this.food.x][this.food.y].innerHTML="";
	     this.snake=new snake();
         g.start();

		
    }
    var fenshu=2;
      game.prototype.setnewfood=function(){
         this.tds[this.food.x][this.food.y].innerHTML="";
         this.food=new food();
         fenshu++;
    }