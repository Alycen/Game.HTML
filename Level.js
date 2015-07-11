function Level() {
    this.x = 0;
    this.y = 0;
    this.width = game.screenWidth;
    this.height = game.screenHeight;
    this.scale = 1;
    this.isVisible = false;
    this.bg = new Image();
    this.bg.src = "assets/gfx/Background/temp.png"
}

Level.prototype.Update = function() {

}

Level.prototype.Draw = function() {
    game.ctx.drawImage(this.bg,this.x,this.y,this.width,this.height);
}
