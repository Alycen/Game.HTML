function Level() {
    this.x = 0;
    this.y = 0;
    this.width = game.screenWidth;
    this.height = game.screenHeight;
    this.scale = 1;
    this.isVisible = false;
    this.bg = new Image();
    this.bg.src = "assets/gfx/Background/Splash.png";
    this.lvl;
}

Level.prototype.Update = function(lvl) {
	
}

Level.prototype.setLevel = function(lvl) {
	this.lvl = lvl;
	if(lvl==-1)
		this.bg.src = "assets/gfx/Background/temp.png";	 // Splash Screen
	else if(lvl==0)
		this.bg.src = "assets/gfx/Background/setting.png";
	else if(lvl==1)
		this.bg.src = "assets/gfx/Background/StartScreen.png"; // Start Menu
	//else if(lvl==2)
		//this.bg.src = "assets/gfx/Background/numOfPlayers.png"; // select num of players
	else if(lvl==2)
		this.bg.src = "assets/gfx/Background/charSelect.png";	//select char type
	else if(lvl==3)
		this.bg.src = "assets/gfx/Background/level1.png";
	else if(lvl==4)
		this.bg.src = "assets/gfx/Background/level2.png";
	//else if(lvl==5)
	//	this.bg.src = "assets/gfx/Background/level3.png";
}

Level.prototype.getLevel = function() {
	return this.lvl;
}

Level.prototype.Draw = function() {
    game.ctx.drawImage(this.bg,this.x,this.y,this.width,this.height);
}

Level.prototype.checkStartMenuInput = function() {
    if (game.stopTouch == false) {
    	if(game.touch.getX() > game.screenWidth / 2) {
        	game.level.setLevel(0);
        	console.log("SETTINGS");
       		game.stopTouch = true;
    	}
    	else if(game.touch.getX() < game.screenWidth / 2) {
        	if(game.touch.getY() < game.screenHeight / 2) {
        	    game.level.setLevel(3);
            	console.log("CHAR SELECT"); 
        		game.stopTouch = true;
        	}
        	else if(game.touch.getY() > game.screenHeight / 2) {
        	    console.log("EXIT");
            	window.history.back(-1);
        	}
    	}
	}
}

/*Level.prototype.checkPreGameInput = function() {
	if (game.stopTouch == false) {
		if(game.touch.getY() > game.screenHeight / 1.18) {
			game.level.setLevel(1);
        	game.stopTouch = true;
        }
		else {
			if(game.touch.getX() < game.screenWidth / 2) {
				console.log("ONE PLAYER");
				game.level.setLevel(4);
				//game.isMultiplayer = false;
        		game.stopTouch = true;
			}
			else if(game.touch.getX() > game.screenWidth / 2) {
        		game.stopTouch = true;
				console.log("TWO PLAYERS");
				//game.isMultiplayer = true;
			}
		}
	}
}*/

Level.prototype.checkSettingsInput = function() {
	if (game.stopTouch == false) {
		if(game.touch.getY() > game.screenHeight / 1.18) {
			game.level.setLevel(1);
        	game.stopTouch = true;
		}
		else {

		}
	}
}