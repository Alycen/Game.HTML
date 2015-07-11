function touchHandler() {
	this.touches = [];
	this.touchable;
}

touchHandler.prototype.main = function() {
	this.touchable = 'createTouch' in document;
	if(this.touchable) {
        game.canvas.addEventListener("touchstart",onTouchStart,false);
        game.canvas.addEventListener("touchmove",onTouchMove,false);
        game.canvas.addEventListener("touchend",onTouchEnd,false);
	}
}

touchHandler.prototype.Draw = function() {
	for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];
        game.ctx.beginPath();
        game.ctx.strokeStyle = "blue";
        game.ctx.lineWidth = "5";
        game.ctx.arc(touch.clientX, touch.clientY, 20, 0, Math.PI*2, true);
        game.ctx.stroke();
    } 
}

touchHandler.prototype.getX = function() {
	for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];
        return touch.clientX;
    } 
}

touchHandler.prototype.getY = function() {
	for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];
        return touch.clientY;
    } 
}