var game;

var requestAnimFrame = (function() {
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        }; 
})();

function Game() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.touch = new touchHandler();
    this.isMultiplayer = false;
}

function main() {
    game = new Game();
    game.level = new Level();
    game.level.setLevel(1);
    game.infoBox = new infoBox();
    game.initCanvas();
    game.touch.main();
    game.gameLoop();
}

Game.prototype.initCanvas = function() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.canvas.width = this.screenWidth;
    this.canvas.height  = this.screenHeight;
}

Game.prototype.gameLoop = function() {    
    game.Draw();
    game.checkLevel();
    window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    game.level.Draw();
    game.touch.Draw();
    game.infoBox.Draw();
}

/*Game.prototype.setMultiplayer = function(state) {

}*/

Game.prototype.checkLevel = function() {
    if(game.level.getLevel() == -1) {
        //splash screen
    }
    else if(game.level.getLevel() == 0) {
        game.level.checkSettingsInput();
    }
    else if(game.level.getLevel() == 1) {
        game.level.checkStartMenuInput();

    }
    else if(game.level.getLevel() == 2) {
        game.level.checkPreGameInput();
    }
    else if(game.level.getLevel() == 3) {
        //select char
    }
    else if(game.level.getLevel() == 4) {
        //level 1
    }
    else if(game.level.getLevel() == 5) {
        //level 2
    }
    else if(game.level.getLevel() == 6) {
        //level 3
    }
}






function onTouchStart(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
}

function onTouchMove(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
}

function onTouchEnd(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
    game.stopTouch = false;
    //put an end check in here
}
