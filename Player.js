

function Player() {
    this.x = 10;
    this.y = 10;
    this.width = 1;
    this.height = 1;
    this.speed = 1;
    this.scale = 1;
    this.isVisible = true;
    this.img = new Image();
    this.img.src = "assets/gfx/game/player.png";
}

Player.prototype.Move = function() {

}

Player.prototype.Update = function() {
    this.Move();
}

Player.prototype.Draw = function() {
    if( this.isVisible ) 
        game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}