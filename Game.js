var game;
var SPLASH_SCREEN = 0, START_SCREEN = 1, LEVEL_ONE = 2, LEVEL_TWO = 3, MAIN_MENU = 4, END_SCREEN =5;
var startScreen, level_1, level_2;

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
    //this.isMultiplayer = false;
}

function main() {
    game = new Game();
    game.level = new Level();
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
    game.level.setLevel(1);
    game.Draw();

    window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);

    game.level.Draw();

    game.touch.Draw()
    
}

/*Game.prototype.setMultiplayer = function(state) {

}*/





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
}