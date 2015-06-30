var game;
var SPLASH_SCREEN = 0, START_SCREEN = 1, LEVEL_ONE = 2, LEVEL_TWO = 3, MAIN_MENU = 4, END_SCREEN =5;
var startScreen, level_1, level_2;

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
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
    this.scene = LEVEL_ONE;
    //this.isMultiplayer = false;
}

function main() {
    game = new Game();
    game.touches = [];

}

Game.prototype.initCanvas = function() {

}

Game.prototype.gameLoop = function() {

}

Game.prototype.Draw = function() {

}

/*Game.prototype.setMultiplayer = function(state) {

}*/




function onTouchStart(e) {
    e.preventDefault();
    game.touches = e.touches;
    console.log("touch start");
}

function onTouchMove(e) {
    e.preventDefault();
    game.touches = e.touches;
    console.log("touch move");
}

function onTouchEnd(e) {
    e.preventDefault();
    game.touches = e.touches;
    console.log("touch end");
}
