function Entity(x, y) {
  this.x = x;
  this.y = y;
}

Entity.prototype = {
  render: function (camera) {
    camera.fillStyle('blue');
    camera.fillCircle(this.x, this.y, 25);
  },
  update: function (dt) {
    
  }
};

module.exports = Entity;