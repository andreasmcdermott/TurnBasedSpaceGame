var Enemy = require('./enemy');
var Player = require('./player');
var Camera = require('./camera');

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
    this.player = new Player(0, 0);
    this.enemies = [];
    this.enemies.push(new Enemy(-200, -200));
    this.enemies.push(new Enemy(0, -150));
    this.enemies.push(new Enemy(200, -200));
    this.camera = new Camera(this, this.player);
  },
  step: function (dt) {
    
  },
  render: function () {
    this.layer.clear('black');
    for (var i = 0; i < this.enemies.length; ++i) {
      this.enemies[i].render(this.camera);
    }
    this.player.render(this.camera);
  }
});