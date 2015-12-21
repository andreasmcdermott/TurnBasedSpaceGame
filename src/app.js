var Entity = require('./entity');

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
    this.min = {x: 0, y: 0};
    this.max = {x: 0, y: 0};
    this.entities = [];
    this.entities.push(new Entity(0, 0));
    this.entities.push(new Entity(-200, -200));
    this.entities.push(new Entity(0, -150));
    this.entities.push(new Entity(200, -200));
  },
  step: function (dt) {
    for (var i = 0; i < this.entities.length; ++i) {
      var entity = this.entities[i];   
      entity.update(dt);
      
      if (entity.x < this.min.x) {
        this.min.x = entity.x;
      }
      if (entity.y < this.min.y) {
        this.min.y = entity.y;
      }
      if (entity.x > this.max.x) {
        this.max.x = entity.x;
      }
      if (entity.y > this.max.y) {
        this.max.y = entity.y;
      }
    }
  },
  render: function () {
    this.layer.clear('black');
    for (var i = 0; i < this.entities.length; ++i) {
      var entity = this.entities[i];
      this.layer.fillStyle('red');
      this.layer.fillCircle(entity.x, entity.y, 25);
    }
  }
});