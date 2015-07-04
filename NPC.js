function NPC() {
    this.x = 5;
    this.y = 5;
    this.dir = 0;
    this.width = 1;
    this.height = 1;
    this.isVisible = true;
    this.img = new Image();
    this.img.src = "assets/gfx/game/npc.png";
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

Player.prototype.CanSee = function() {
    
}