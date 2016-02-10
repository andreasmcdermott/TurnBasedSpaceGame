export default function Entity(x, y) {
  this.x = x;
  this.y = y;
}

Entity.prototype = {
  render (camera) {
    camera.fillStyle('blue');
    camera.fillCircle(this.x, this.y, 25);
  },
  update (dt) {
    
  }
};