function infoBox() {
	this.x = 10;
	this.y = 20;
	this.width = 20;
	this.height = 20;
	this.img = new Image();
	this.isVisible = false;

}

infoBox.prototype.Update = function() {

}

infoBox.prototype.Draw = function() {
	if(this.isVisible)
		game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

// expected path == [-1,0,-1,1,3,5,-1] if player selects gaurdian (only one that should repeat is -1 but 1 and 2 can repeat)
infoBox.prototype.setInfoBox = function(index) {
	if(index == -1)
		this.isVisible = false;
	else if(index == 0) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/selectPlayerNum.png";
	}
	else if(index == 1) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/guardianInfo.png";
	}
	else if(index == 2) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/adventurerInfo.png";
	}
	else if(index == 3) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/guardianTutorial.png";
	}
	else if(index == 4) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/adventurerTutorial.png";
	}
	else if(index == 5) {
		this.isVisible = true;
		this.img.src = "assets/gfx/InfoBox/gameGoal.png";
	}
	else if(index == 6) {

	}
}
