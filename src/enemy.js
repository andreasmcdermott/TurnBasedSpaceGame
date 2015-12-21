function Enemy(x, y) {
  this.x = x;
  this.y = y;
}

Enemy.prototype = {
  render: function (camera) {
    camera.fillStyle('blue');
    camera.fillCircle(this.x, this.y, 25);
  }
};

module.exports = Enemy;