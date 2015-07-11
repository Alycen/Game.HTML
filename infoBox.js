function infoBox() {
	this.x;
	this.y;
	this.width;
	this.height;
	this.img = new Image();
	this.isVisible = false;
}

infoBox.prototype.Update = function() {

}

infoBox.prototype.Draw = function() {
	if(isVisible)
		game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

// expected path == [-1,0,-1,1,3,5,-1] if player selects gaurdian (only one that should repeat is -1 but 1 and 2 can repeat)
infoBox.prototype.setInfoBox = function(index) {
	if(index == -1)
		this.isVisible = false;
	else if(index == 0) {
		this.isVisible = true;
		this.img.src = "assets/gfx/selectPlayerNum.png";
	}
	else if(index == 1) {
		this.isVisible = true;
		this.img.src = "assets/gfx/guardianInfo.png";
	}
	else if(index == 2) {
		this.isVisible = true;
		this.img.src = "assets/gfx/adventurerInfo.png";
	}
	else if(index == 3) {
		this.isVisible = true;
		this.img.src = "assets/gfx/guardianTutorial.png";
	}
	else if(index == 4) {
		this.isVisible = true;
		this.img.src = "assets/gfx/adventurerTutorial.png";
	}
	else if(index == 5) {
		this.isVisible = true;
		this.img.src = "assets/gfx/gameGoal.png";
	}
	else if(index == 6) {

	}
}