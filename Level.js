function Level() {
    this.x = 0;
    this.y = 0;
    this.width = game.screenWidth;
    this.height = game.screenHeight;
    this.scale = 1;
    this.isVisible = false;
    this.bg = new Image();
    this.bg.src = "assets/gfx/Background/Splash.png";
}

Level.prototype.Update = function(lvl) {
	
}

Level.prototype.setLevel = function(lvl) {
	if(lvl==-1)
		this.bg.src = "assets/gfx/Background/temp.png";	 // Splash Screen
	else if(lvl==0)
		this.bg.src = "assets/gfx/Background/settings.png";
	else if(lvl==1)
		this.bg.src = "assets/gfx/Background/temp.png"; // Start Menu
	else if(lvl==2)
		this.bg.src = "assets/gfx/Background/preGame.png"; // select num of players
	else if(lvl==3)
		this.bg.src = "assets/gfx/Background/charSelect.png";	//select char type
	else if(lvl==4)
		this.bg.src = "assets/gfx/Background/level1.png";
	else if(lvl==5)
		this.bg.src = "assets/gfx/Background/level2.png";
	else if(lvl==6)
		this.bg.src = "assets/gfx/Background/level3.png";
}

Level.prototype.Draw = function() {
    game.ctx.drawImage(this.bg,this.x,this.y,this.width,this.height);
}
