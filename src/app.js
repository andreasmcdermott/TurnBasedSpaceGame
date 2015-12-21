playground({
  smoothing: false,
  canvasWidth: 640,
  canvasHeight: 480,
  
  preload: function () {
    this.scale = this.width / this.canvasWidth;
  },  
  create: function () {
    
  },  
  ready: function () {
    
  },
  step: function (dt) {
    
  },
  render: function () {
    this.layer.clear('black');
    this.layer.fillStyle('red');
    this.layer.fillRect(100, 100, 100, 100);
  }
});