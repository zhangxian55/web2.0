(function(){
	//轮播图类
	window.box = function(JSON){
		this.$box = $("#" + JSON.boxID);
		this.$rightBtn = this.$box.find(".rightBtn");
		this.$leftBtn = this.$box.find(".leftBtn");
		this.$imagesLis = this.$box.find(".imagesList li");
		this.$circlesLis = this.$box.find(".circles li");

		//得到用户传进来的参数
		this.interval = JSON.interval;
		this.width = JSON.width;
		this.duration = JSON.duration;

		//信号量
		this.idx = 0;
		//绑定监听
		this.bindEvent();
		//备份
		}
	//绑定监听
	box.prototype.bindEvent = function(){
		//备份
		var self = this;
		//右边按钮的监听
		this.$rightBtn.click(function(){
			if(self.$imagesLis.is(":animated")){
				return;
			}
			self.goNext();
		});
		//左边按钮的监听
		this.$leftBtn.click(function(){
			if(self.$imagesLis.is(":animated")){
				return;
			}
			self.goPrev();
		});
		//小圆点监听
		this.$circlesLis.click(function(){
			if(self.$imagesLis.is(":animated")){
				return;
			}
			self.goIdx($(this).index());
		});
	};
	//显示下一张方法
	box.prototype.goNext = function(){
		//当前图片移动到-JSON.width去
		this.$imagesLis.eq(this.idx).animate({"left":-this.width},this.duration);
		//信号量改变
		this.idx++;
		if(this.idx > this.$imagesLis.length - 1){
			this.idx = 0;
		}
		//新图瞬移到右边，从右边进场
		this.$imagesLis.eq(this.idx).css("left",this.width).animate({"left":0},this.duration);
		//设置小圆点
		this.setCircle();
	}
	//显示上一张
	box.prototype.goPrev = function(){
		//当前图片移动到JSON.width去
		this.$imagesLis.eq(this.idx).animate({"left":this.width},this.duration);
		//信号量改变
		this.idx--;
		if(this.idx < 0){
			this.idx = this.$imagesLis.length - 1;
		}
		//新图瞬移到右边，从左边进场
		this.$imagesLis.eq(this.idx).css("left",-this.width).animate({"left":0},this.duration);
		//设置小圆点
		this.setCircle();
	}
	//移动到某图
	box.prototype.goIdx = function(num){
		if(num > this.idx){
			this.$imagesLis.eq(this.idx).animate({"left":-this.width},this.duration);
			this.idx = num;
			this.$imagesLis.eq(this.idx).css("left",this.width).animate({"left":0},this.duration);
		}else if(num < this.idx){
			this.$imagesLis.eq(this.idx).animate({"left":this.width},this.duration);
			this.idx = num;
			this.$imagesLis.eq(this.idx).css("left",-this.width).animate({"left":0},this.duration);
		}
		this.setCircle();
	}
	//设置小圆点方法
	box.prototype.setCircle = function(){
		this.$circlesLis.eq(this.idx).addClass("cur").siblings().removeClass("cur");
	}
})();