function Player(x, y) {
  this.x = x;
  this.y = y;
}

Player.prototype = {
  render: function (camera) {
    camera.fillStyle('red');
    camera.fillCircle(this.x, this.y, 25);
  }
};

module.exports = Player;