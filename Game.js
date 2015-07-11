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
    game.level.setLevel(1);
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

Game.prototype.gameLoop = function() {    game.Draw();
    game.checkStartMenuInput();
    window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    game.level.Draw();
    game.touch.Draw()
}

/*Game.prototype.setMultiplayer = function(state) {

}*/


Game.prototype.checkStartMenuInput = function() {
    if(game.touch.getX() > game.screenWidth / 2) {
        //game.level.setLevel(0);
        console.log("SETTINGS");
    }
    else if(game.touch.getX() < game.screenWidth / 2) {
        if(game.touch.getY() < game.screenHeight / 2) {
            //game.level.setLevel(2);
            console.log("LEVEL 1");
        }
        else if(game.touch.getY() > game.screenHeight / 2) {
            console.log("EXIT");
            //window.history.back(-1);
        }
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
    console.log("HALP");
    //put an end check in here
}
