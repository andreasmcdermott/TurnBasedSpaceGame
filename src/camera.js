function Camera (app, target) {
  this.app = app;
  this.target = target;
  this.scale = 1;
}

function transform(x, y) {
  var tx = this.target.x;
  var ty = this.target.y;
  var cx = this.app.width / 2;
  var cy = this.app.height / 2;
  
  return {x: cx - tx + x, y: cy - ty + y};
}

Camera.prototype = {
  fillStyle: function (color) {
    this.app.layer.fillStyle(color);
  },
  fillCircle(x, y, radius) {
    var pos = transform.call(this, x, y);
    this.app.layer.fillCircle(pos.x, pos.y, radius);
  }
};

module.exports = Camera;