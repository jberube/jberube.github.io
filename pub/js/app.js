(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BloodParticle = function (_Phaser$Particle) {
  _inherits(BloodParticle, _Phaser$Particle);

  function BloodParticle(game, x, y, key) {
    _classCallCheck(this, BloodParticle);

    return _possibleConstructorReturn(this, (BloodParticle.__proto__ || Object.getPrototypeOf(BloodParticle)).call(this, game, x, y, game.cache.getBitmapData('bloodParticleShade-' + key)));
  }

  return BloodParticle;
}(_phaser2.default.Particle);

exports.default = BloodParticle;

},{"phaser":"phaser"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameController = require('./GameController');

var _GameController2 = _interopRequireDefault(_GameController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///
/// Acts as a controller for all the components that can wrap your game,
/// but that are not an intrinsinct part of it,
/// e.g. communication with a platform's API (Facebook, GameJolt, etc...),
/// browser's API, your own website that hosts the game, etc...
var Bootstrap = function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);

    this.gameController = null;
  }

  _createClass(Bootstrap, [{
    key: 'start',
    value: function start() {
      this.gameController = new _GameController2.default(this);
      this.gameController.start();
    }
  }]);

  return Bootstrap;
}();

exports.default = Bootstrap;

},{"./GameController":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _Ninja = require('./Ninja');

var _Ninja2 = _interopRequireDefault(_Ninja);

var _ZombieSpawner = require('./ZombieSpawner');

var _ZombieSpawner2 = _interopRequireDefault(_ZombieSpawner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = {
  MOVE_UP: {
    keys: [_phaser2.default.KeyCode.W, _phaser2.default.KeyCode.UP],
    buttons: [_phaser2.default.Gamepad.XBOX360_DPAD_UP]
  },
  MOVE_DOWN: {
    keys: [_phaser2.default.KeyCode.S, _phaser2.default.KeyCode.DOWN],
    buttons: [_phaser2.default.Gamepad.XBOX360_DPAD_DOWN]
  },
  MOVE_LEFT: {
    keys: [_phaser2.default.KeyCode.A, _phaser2.default.KeyCode.LEFT],
    buttons: [_phaser2.default.Gamepad.XBOX360_DPAD_LEFT]
  },
  MOVE_RIGHT: {
    keys: [_phaser2.default.KeyCode.D, _phaser2.default.KeyCode.RIGHT],
    buttons: [_phaser2.default.Gamepad.XBOX360_DPAD_RIGHT]
  }
};

var BrawlState = function () {
  function BrawlState() {
    _classCallCheck(this, BrawlState);

    this.gamepad = null;
    this.actions = null;
    this.ninja = null;
    this.graphics = null;
    this.data = {
      bitmapBg: null,
      imageBg: null
    };
  }

  _createClass(BrawlState, [{
    key: 'create',
    value: function create() {
      var _this = this;

      // Gamepad initialization
      this.input.gamepad.start();
      if (this.input.gamepad.supported && this.input.gamepad.active) {
        this.gamepad = this.input.gamepad.pad1;

        this.actions = Object.keys(Actions).reduce(function (keyMapping, actionName) {
          var action = Actions[actionName];
          action.keys = action.keys.map(function (k) {
            return _this.game.input.keyboard.addKey(k);
          });
          action.buttons = action.buttons.map(function (button) {
            return _this.gamepad.getButton(_phaser2.default.Gamepad.XBOX360_DPAD_UP);
          }).filter(function (button) {
            return !!button;
          }); // remove unsupported buttons (e.g. no controller conencted, button not existing on given controller)

          keyMapping[actionName] = action;
          return keyMapping;
        }, {});
      }

      // some ground
      this.stage.setBackgroundColor(0x444444);

      // make a bitmap background to paint with colorful blood
      var bitmapBg = this.game.add.bitmapData(this.game.width, this.game.height);
      this.data.bitmapBg = bitmapBg;
      var imageBg = bitmapBg.addToWorld(0, 0, 0, 0, 1, 1);
      this.data.imageBg = imageBg;

      // make those physics kick in
      this.game.physics.startSystem(_phaser2.default.Physics.ARCADE);

      // Create the ninja.
      this.ninja = new _Ninja2.default(this.game);
      this.add.existing(this.ninja);

      // Create the zombies spawner.
      this.spawner = new _ZombieSpawner2.default(this.game, this.ninja);
      this.spawner.create();
    }
  }, {
    key: '_processCallback',
    value: function _processCallback(ninja, zombie) {
      // handle collision in the `processCallback` of `overlap` to fool
      //  the physics into thinking that there was no collision,
      // so the Ninja movement is not altered.
      if (!zombie.alive) return false;

      if (this.ninja.data.isSlashing) {
        zombie.die();
      } else {
        ninja.die();
      }

      // avoid stoping the ninja movement
      return false;
    }
  }, {
    key: '_isDown',
    value: function _isDown(action) {
      return action.keys.some(function (k) {
        return k.isDown;
      }) || action.buttons.some(function (k) {
        return k.isDown;
      });
    }
  }, {
    key: 'drawGroupToBackground',
    value: function drawGroupToBackground(group) {
      this.data.bitmapBg.drawGroup(group);
      this.data.bitmapBg.dirty = true;
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      // Check if the ninja slashed a Zombie.
      this.physics.arcade.overlap(this.ninja, this.spawner.group, null, this._processCallback.bind(this), this);

      // remove cadavers
      this.spawner.group.forEach(function (zombie) {
        if (!zombie.exists) _this2.spawner.group.remove(zombie, true);
      }, this);
      if (!this.ninja.alive) {
        this.world.remove(this.ninja, true);
      }

      // Avoid overlapping zombies
      this.physics.arcade.collide(this.spawner.group, this.spawner.group);

      if (this.ninja.alive) {
        var x = 0,
            y = 0;
        if (this._isDown(this.actions.MOVE_UP)) {
          y -= 1;
        }
        if (this._isDown(this.actions.MOVE_RIGHT)) {
          x += 1;
        }
        if (this._isDown(this.actions.MOVE_DOWN)) {
          y += 1;
        }
        if (this._isDown(this.actions.MOVE_LEFT)) {
          x -= 1;
        }
        this.ninja.slash(new _phaser2.default.Point(x, y));
      }

      this.spawner.update();
    }
  }, {
    key: 'render',
    value: function render() {
      this.ninja.render();
    }
  }]);

  return BrawlState;
}();

exports.default = BrawlState;

},{"./Ninja":6,"./ZombieSpawner":8,"phaser":"phaser"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _MenuState = require('./MenuState');

var _MenuState2 = _interopRequireDefault(_MenuState);

var _BrawlState = require('./BrawlState');

var _BrawlState2 = _interopRequireDefault(_BrawlState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GAME_WIDTH = 1024;
var GAME_HEIGHT = 768;
var TRANSPARENT = false;
var ANTIALIAS = false;

///
/// The controller for your game.

var GameController = function () {
  function GameController(bootstrap) {
    _classCallCheck(this, GameController);

    this.bootstrap = bootstrap;
    this.phaserGame = null;
  }

  _createClass(GameController, [{
    key: 'start',
    value: function start() {
      // instantiate the Phaser game. Thigs are getting serious.
      this.phaserGame = new _phaser2.default.Game(GAME_WIDTH, GAME_HEIGHT, _phaser2.default.AUTO, 'phaserGameContainer', null, // no stage, yet. be patient.
      TRANSPARENT, ANTIALIAS);

      // Create and add each of the game states.
      this.phaserGame.state.add('menu', _MenuState2.default);
      this.phaserGame.state.add('brawl', _BrawlState2.default);

      // Start the initial game state.
      this.phaserGame.state.start('menu');
    }
  }]);

  return GameController;
}();

exports.default = GameController;

},{"./BrawlState":3,"./MenuState":5,"phaser":"phaser"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuState = function () {
  function MenuState() {
    _classCallCheck(this, MenuState);

    this.goText = null;
    this.gamepad = null;
  }

  _createClass(MenuState, [{
    key: 'create',
    value: function create() {
      // Gamepad initialization
      this.input.gamepad.start();
      if (this.input.gamepad.supported && this.input.gamepad.active) {
        this.gamepad = this.input.gamepad.pad1;
        this.gamepad.addCallbacks(this, {
          onDown: this.onGamepadButtonDown.bind(this)
        });
        this.game.input.keyboard.onDownCallback = this.onKeyboardKeyDown.bind(this);
      }

      this.stage.setBackgroundColor(0x222222);

      var textStyle = {
        align: 'center',
        font: 'Arial Black',
        fontSize: 70,
        fontWeight: 'bold',
        fill: '#ffffff'
      };
      this.goText = this.add.text(this.world.centerX, 250, 'Hit a key. NOW!', textStyle);
      this.goText.anchor.set(0.5);
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      this.goText = null;
      this.gamepad.onDownCallback = null;
      this.gamepad = null;
      this.game.input.keyboard.onDownCallback = null;
    }
  }, {
    key: 'onGamepadButtonDown',
    value: function onGamepadButtonDown(buttonID, value) {
      this.game.debug.text('DEBUG buttonID: ' + buttonID + ' value: ' + value, 32, 32);
      this.state.start('brawl');
    }
  }, {
    key: 'onKeyboardKeyDown',
    value: function onKeyboardKeyDown(event) {
      this.game.debug.text('DEBUG key: ' + event.key + ' keyCode: ' + event.keyCode, 32, 32);
      this.state.start('brawl');
    }
  }]);

  return MenuState;
}();

exports.default = MenuState;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DIAMETER = 30;
var ORIGIN = new _phaser2.default.Point(0, 0);
var REACTION_SPEED = 0.300;

var Ninja = function (_Phaser$Sprite) {
  _inherits(Ninja, _Phaser$Sprite);

  function Ninja(game) {
    _classCallCheck(this, Ninja);

    var _this = _possibleConstructorReturn(this, (Ninja.__proto__ || Object.getPrototypeOf(Ninja)).call(this, game, game.world.centerX, game.world.centerY));

    var ninjaTexture = game.make.bitmapData(DIAMETER, DIAMETER);
    ninjaTexture.circle(DIAMETER / 2, DIAMETER / 2, DIAMETER / 2, '#000000');
    _this.texture = ninjaTexture.texture;

    _this.data = {
      isSlashing: false,
      tsSinceLastMove: 0,
      slashDirection: ORIGIN
    };

    // Enable physics for this entity
    _this.game.physics.arcade.enable(_this);
    _this.body.collideWorldBounds = true;

    _this.body.onMoveComplete.add(_this.onMoveComplete.bind(_this), _this);

    _this.body.onCollide = new _phaser2.default.Signal();
    _this.body.onCollide.add(_this.onCollide.bind(_this), _this);
    return _this;
  }

  _createClass(Ninja, [{
    key: 'update',
    value: function update() {
      this.data.tsSinceLastMove += this.game.time.physicsElapsed;

      // Stop if we hit a world bound.
      this.game.physics.arcade.collide(this, this.game.world);
      if (this.data.isSlashing) {
        var b = this.body.blocked;
        if (b.up || b.down || b.left || b.right) {
          this.body.stopMovement();
        }
      }

      // The ninja is not yet recovered from his last move, so he can't do an action.
      if (this.data.tsSinceLastMove < REACTION_SPEED) {
        return;
      }

      // If ready, the ninja slashes.
      if (!this.data.slashDirection.equals(ORIGIN) && !this.data.isSlashing) {
        this.data.isSlashing = true;
        this.data.tsSinceLastMove = 0;

        // updates the player velocity
        var duration = 175;
        var distance = 225;
        var direction = ORIGIN.angle(this.data.slashDirection, true);
        this.body.moveTo(duration, distance, direction);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.alive) {
        this.game.debug.spriteInfo(this, 32, 48);
      }
    }
  }, {
    key: 'slash',
    value: function slash(p) {
      this.data.slashDirection = p;
    }
  }, {
    key: 'onCollide',
    value: function onCollide() {
      this.data.slashDirection = ORIGIN;
      this.data.isSlashing = false;
    }
  }, {
    key: 'onMoveComplete',
    value: function onMoveComplete() {
      this.data.slashDirection = ORIGIN;
      this.data.isSlashing = false;
    }
  }, {
    key: 'die',
    value: function die() {
      this.alive = false;
    }
  }]);

  return Ninja;
}(_phaser2.default.Sprite);

exports.default = Ninja;

},{"phaser":"phaser"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _BloodParticle = require('./BloodParticle');

var _BloodParticle2 = _interopRequireDefault(_BloodParticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DIAMETER = 20;
var MIN_SPEED = 40;
var MAX_SPEED = 150;
var MIN_REACTION_SPEED = 0.750;
var MAX_REACTION_SPEED = 2.500;

var BLOOD_DROPS_COUNT = 10;
var MAX_BLOOD_SPEED = 100;
var BLOOD_DROPS_LIFESPAN = 250;

var Zombie = function (_Phaser$Sprite) {
  _inherits(Zombie, _Phaser$Sprite);

  function Zombie(game, x, y, color, ninja) {
    _classCallCheck(this, Zombie);

    var _this = _possibleConstructorReturn(this, (Zombie.__proto__ || Object.getPrototypeOf(Zombie)).call(this, game, x, y));

    var bmpData = game.make.bitmapData(DIAMETER, DIAMETER);
    var hexColor = _phaser2.default.Color.RGBtoString(color.r, color.g, color.b);
    bmpData.circle(DIAMETER / 2, DIAMETER / 2, DIAMETER / 2, hexColor);
    _this.texture = bmpData.texture;

    _this.data = {
      color: color,
      ninja: ninja,
      reactionSpeed: _this.game.rnd.between(MIN_REACTION_SPEED, MAX_REACTION_SPEED),
      tsNextAction: 0,
      bloodEmitter: null,
      corpseAge: 0
    };

    // Wait before starting to move.
    _this.data.tsNextAction = _this.data.reactionSpeed;

    // Enable physics for this entity
    _this.game.physics.arcade.enable(_this);
    _this.body.collideWorldBounds = false;
    _this.body.bounce.set(0.2, 0.2);
    return _this;
  }

  _createClass(Zombie, [{
    key: 'update',
    value: function update() {
      // Decide wether the Zombie had enough time since his last action.
      if (this.alive) {
        this.data.tsNextAction -= this.game.time.physicsElapsed;
        if (this.data.tsNextAction <= 0) {
          this.data.tsNextAction += this.data.reactionSpeed;
          // Move toward the player.
          var speed = this.game.rnd.between(MIN_SPEED, MAX_SPEED);
          this.game.physics.arcade.moveToObject(this, this.data.ninja, speed);
        }

        return;
      }

      // Make that corspe rot a little
      this.data.corpseAge += this.game.time.physicsElapsedMS;

      // After a while, remove the zombie (will be remove from its group later)
      if (this.data.corpseAge > BLOOD_DROPS_LIFESPAN) {
        this.exists = false;
        if (this.data.bloodEmitter) {
          // paint the blood on the floor
          var paintBloodFn = this.game.state.getCurrentState().drawGroupToBackground;
          if (typeof paintBloodFn === 'function') {
            paintBloodFn.call(this.game.state.getCurrentState(), this.data.bloodEmitter);
          }

          this.data.bloodEmitter.destroy();
          this.data.bloodEmitter = null;
        }
      }
    }
  }, {
    key: 'die',
    value: function die() {
      if (this.alive) {
        // set alive to false when emitter is done.
        this.alive = false;
        this.visible = false;

        var key = _phaser2.default.Color.RGBtoString(this.data.color.r, this.data.color.g, this.data.color.b).replace('#', '');
        var emitter = this.game.add.emitter(this.x, this.y, BLOOD_DROPS_COUNT);
        this.data.bloodEmitter = emitter;
        emitter.particleClass = _BloodParticle2.default;
        emitter.setRotation(-360, 360).setScale(0.1, 0.75, 0.1, 0.75, BLOOD_DROPS_LIFESPAN, _phaser2.default.Easing.Linear.None, false //yoyo
        ).setXSpeed(-MAX_BLOOD_SPEED, MAX_BLOOD_SPEED).setYSpeed(-MAX_BLOOD_SPEED, MAX_BLOOD_SPEED).makeParticles(key).start(true, 0, 0, BLOOD_DROPS_LIFESPAN);
      }
    }
  }]);

  return Zombie;
}(_phaser2.default.Sprite);

exports.default = Zombie;

},{"./BloodParticle":1,"phaser":"phaser"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _Zombie = require('./Zombie');

var _Zombie2 = _interopRequireDefault(_Zombie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAFE_DISTANCE = 250;

var ZombieSpawner = function () {
  function ZombieSpawner(game, ninja) {
    _classCallCheck(this, ZombieSpawner);

    this.game = game;
    this.group = game.add.group(this.game.world);
    this.lastSpawn = 0;
    this.spawnDelay = 250;
    this.maxZombies = 100;
    this.ninja = ninja;
    var colorWheel = _phaser2.default.Color.HSVColorWheel(1, 1);

    this.colors = [0, // red
    30, // orange
    60, // yellow
    120, // green
    180, // cyan
    240, // blue
    320 // violet
    ].map(function (hue) {
      return colorWheel[hue];
    });
  }

  _createClass(ZombieSpawner, [{
    key: 'create',
    value: function create() {
      var _this = this;

      //  Create our bitmapData which we'll use as our BloodParticle texture
      var radius = 16;
      this.colors.forEach(function (color) {
        var bmd = _this.game.add.bitmapData(radius * 2, radius * 2);
        var radgrad = bmd.ctx.createRadialGradient(radius, radius, radius, radius, radius, 0);
        color.a = 0;
        radgrad.addColorStop(0, _phaser2.default.Color.getWebRGB(color));
        color.a = 255;
        radgrad.addColorStop(1, _phaser2.default.Color.getWebRGB(color));
        bmd.context.fillStyle = radgrad;
        bmd.context.fillRect(0, 0, 2 * radius, 2 * radius);
        //  Put the bitmapData into the cache
        var key = _phaser2.default.Color.RGBtoString(color.r, color.g, color.b).replace('#', '');
        _this.game.cache.addBitmapData('bloodParticleShade-' + key, bmd);
      });
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.game.time.time - this.lastSpawn > this.spawnDelay && this.group.length < this.maxZombies) {
        this.lastSpawn = this.game.time.time;

        // Spawn a zombie
        var x = this.game.world.width * this.game.rnd.frac();
        var y = this.game.world.height * this.game.rnd.frac();
        var colorIndex = this.game.rnd.between(0, this.colors.length - 1);
        var color = this.colors[colorIndex];
        var zombie = new _Zombie2.default(this.game, x, y, color, this.ninja);

        // ensure that the zombie does not spawn on the ninja
        while (this.game.physics.arcade.distanceBetween(this.ninja, zombie) < SAFE_DISTANCE) {
          zombie.x = this.game.world.width * this.game.rnd.frac();
          zombie.y = this.game.world.height * this.game.rnd.frac();
        }

        this.group.add(zombie);
      }
    }
  }]);

  return ZombieSpawner;
}();

exports.default = ZombieSpawner;

},{"./Zombie":7,"phaser":"phaser"}],9:[function(require,module,exports){
'use strict';

// This file acts as the project entry point.

// This is to compensate the fact that phaser is not modular.
// NOTE: ES2015 import statements cannot be used here. It's an ugly fix, but it's the best I could find.
window.PIXI = require('custom-PIXI');
window.p2 = require('p2');
window.Phaser = require('phaser');

// Bootstrap the game.
var Bootstrap = require('./Bootstrap');
var bootstrap = new Bootstrap.default();
bootstrap.start();

},{"./Bootstrap":2,"custom-PIXI":"custom-PIXI","p2":"p2","phaser":"phaser"}]},{},[9])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxCbG9vZFBhcnRpY2xlLmpzIiwic3JjXFxqc1xcQm9vdHN0cmFwLmpzIiwic3JjXFxqc1xcQnJhd2xTdGF0ZS5qcyIsInNyY1xcanNcXEdhbWVDb250cm9sbGVyLmpzIiwic3JjXFxqc1xcTWVudVN0YXRlLmpzIiwic3JjXFxqc1xcTmluamEuanMiLCJzcmNcXGpzXFxab21iaWUuanMiLCJzcmNcXGpzXFxab21iaWVTcGF3bmVyLmpzIiwic3JjXFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRU0sYTs7O0FBQ0oseUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixHQUF4QixFQUE2QjtBQUFBOztBQUFBLHlIQUNyQixJQURxQixFQUNmLENBRGUsRUFDWixDQURZLEVBQ1QsS0FBSyxLQUFMLENBQVcsYUFBWCx5QkFBK0MsR0FBL0MsQ0FEUztBQUU1Qjs7O0VBSHlCLGlCQUFPLFE7O2tCQU1wQixhOzs7Ozs7Ozs7OztBQ1JmOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDTSxTO0FBQ0osdUJBQWM7QUFBQTs7QUFDWixTQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDRDs7Ozs0QkFFTztBQUNOLFdBQUssY0FBTCxHQUFzQiw2QkFBbUIsSUFBbkIsQ0FBdEI7QUFDQSxXQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFDRDs7Ozs7O2tCQUdZLFM7Ozs7Ozs7Ozs7O0FDbEJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVU7QUFDWixXQUFTO0FBQ0wsVUFBTSxDQUFDLGlCQUFPLE9BQVAsQ0FBZSxDQUFoQixFQUFtQixpQkFBTyxPQUFQLENBQWUsRUFBbEMsQ0FERDtBQUVMLGFBQVMsQ0FBQyxpQkFB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LEVBQWpDO0FBQ0EsWUFBSSxhQUFhLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxPQUFkLENBQXNCLENBQXRCLEVBQXlCLEtBQUssTUFBTCxDQUFZLE1BQVosR0FBbUIsQ0FBNUMsQ0FBakI7QUFDQSxZQUFJLFFBQVEsS0FBSyxNQUFMLENBQVksVUFBWixDQUFaO0FBQ0EsWUFBSSxTQUFTLHFCQUFXLEtBQUssSUFBaEIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsS0FBNUIsRUFBbUMsS0FBSyxLQUF4QyxDQUFiOztBQUVBO0FBQ0EsZUFBTyxLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLGVBQXpCLENBQXlDLEtBQUssS0FBOUMsRUFBcUQsTUFBckQsSUFBK0QsYUFBdEUsRUFBcUY7QUFDbkYsaUJBQU8sQ0FBUCxHQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLElBQWQsRUFBbkM7QUFDQSxpQkFBTyxDQUFQLEdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUFoQixHQUF5QixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxFQUFwQztBQUNEOztBQUVELGFBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZLGE7Ozs7O0FDcEVmOztBQUVBO0FBQ0E7QUFDQSxPQUFPLElBQVAsR0FBYyxRQUFRLGFBQVIsQ0FBZDtBQUNBLE9BQU8sRUFBUCxHQUFZLFFBQVEsSUFBUixDQUFaO0FBQ0EsT0FBTyxNQUFQLEdBQWdCLFFBQVEsUUFBUixDQUFoQjs7QUFFQTtBQUNBLElBQU0sWUFBWSxRQUFRLGFBQVIsQ0FBbEI7QUFDQSxJQUFNLFlBQVksSUFBSSxVQUFVLE9BQWQsRUFBbEI7QUFDQSxVQUFVLEtBQVYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY2xhc3MgQmxvb2RQYXJ0aWNsZSBleHRlbmRzIFBoYXNlci5QYXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwga2V5KSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBnYW1lLmNhY2hlLmdldEJpdG1hcERhdGEoYGJsb29kUGFydGljbGVTaGFkZS0ke2tleX1gKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9vZFBhcnRpY2xlO1xyXG4iLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcblxyXG4vLy9cclxuLy8vIEFjdHMgYXMgYSBjb250cm9sbGVyIGZvciBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBjYW4gd3JhcCB5b3VyIGdhbWUsXHJcbi8vLyBidXQgdGhhdCBhcmUgbm90IGFuIGludHJpbnNpbmN0IHBhcnQgb2YgaXQsXHJcbi8vLyBlLmcuIGNvbW11bmljYXRpb24gd2l0aCBhIHBsYXRmb3JtJ3MgQVBJIChGYWNlYm9vaywgR2FtZUpvbHQsIGV0Yy4uLiksXHJcbi8vLyBicm93c2VyJ3MgQVBJLCB5b3VyIG93biB3ZWJzaXRlIHRoYXQgaG9zdHMgdGhlIGdhbWUsIGV0Yy4uLlxyXG5jbGFzcyBCb290c3RyYXAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIodGhpcyk7XHJcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb290c3RyYXA7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IE5pbmphIGZyb20gJy4vTmluamEnO1xyXG5pbXBvcnQgWm9tYmllU3Bhd25lciBmcm9tICcuL1pvbWJpZVNwYXduZXInO1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIE1PVkVfVVA6IHtcclxuICAgICAgICBrZXlzOiBbUGhhc2VyLktleUNvZGUuVywgUGhhc2VyLktleUNvZGUuVVBdLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX0RQQURfVVBdLFxyXG4gICAgfSxcclxuICAgIE1PVkVfRE9XTjoge1xyXG4gICAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5TLCBQaGFzZXIuS2V5Q29kZS5ET1dOXSxcclxuICAgICAgICBidXR0b25zOiBbUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9EUEFEX0RPV05dLFxyXG4gICAgfSxcclxuICAgIE1PVkVfTEVGVDoge1xyXG4gICAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5BLCBQaGFzZXIuS2V5Q29kZS5MRUZUXSxcclxuICAgICAgICBidXR0b25zOiBbUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9EUEFEX0xFRlRdLFxyXG4gICAgfSxcclxuICAgIE1PVkVfUklHSFQ6IHtcclxuICAgICAgICBrZXlzOiBbUGhhc2VyLktleUNvZGUuRCwgUGhhc2VyLktleUNvZGUuUklHSFRdLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX0RQQURfUklHSFRdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNsYXNzIEJyYXdsU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lcGFkID0gbnVsbDtcclxuICAgIHRoaXMuYWN0aW9ucyA9IG51bGw7XHJcbiAgICB0aGlzLm5pbmphID0gbnVsbDtcclxuICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBiaXRtYXBCZzogbnVsbCxcclxuICAgICAgaW1hZ2VCZzogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvLyBHYW1lcGFkIGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmlucHV0LmdhbWVwYWQuc3RhcnQoKTtcclxuICAgIGlmICh0aGlzLmlucHV0LmdhbWVwYWQuc3VwcG9ydGVkICYmIHRoaXMuaW5wdXQuZ2FtZXBhZC5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lcGFkID0gdGhpcy5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcblxyXG4gICAgICB0aGlzLmFjdGlvbnMgPSBPYmplY3Qua2V5cyhBY3Rpb25zKS5yZWR1Y2UoKGtleU1hcHBpbmcsIGFjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgIGxldCBhY3Rpb24gPSBBY3Rpb25zW2FjdGlvbk5hbWVdO1xyXG4gICAgICAgICAgYWN0aW9uLmtleXMgPSBhY3Rpb24ua2V5cy5tYXAoayA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoayk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGFjdGlvbi5idXR0b25zID0gYWN0aW9uLmJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZXBhZC5nZXRCdXR0b24oUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9EUEFEX1VQKTtcclxuICAgICAgICAgIH0pLmZpbHRlcihidXR0b24gPT4gISFidXR0b24pOyAvLyByZW1vdmUgdW5zdXBwb3J0ZWQgYnV0dG9ucyAoZS5nLiBubyBjb250cm9sbGVyIGNvbmVuY3RlZCwgYnV0dG9uIG5vdCBleGlzdGluZyBvbiBnaXZlbiBjb250cm9sbGVyKVxyXG5cclxuICAgICAgICAgIGtleU1hcHBpbmdbYWN0aW9uTmFtZV0gPSBhY3Rpb247XHJcbiAgICAgICAgICByZXR1cm4ga2V5TWFwcGluZztcclxuICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNvbWUgZ3JvdW5kXHJcbiAgICB0aGlzLnN0YWdlLnNldEJhY2tncm91bmRDb2xvcigweDQ0NDQ0NCk7XHJcblxyXG4gICAgLy8gbWFrZSBhIGJpdG1hcCBiYWNrZ3JvdW5kIHRvIHBhaW50IHdpdGggY29sb3JmdWwgYmxvb2RcclxuICAgIGxldCBiaXRtYXBCZyA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwRGF0YSh0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xyXG4gICAgdGhpcy5kYXRhLmJpdG1hcEJnID0gYml0bWFwQmc7XHJcbiAgICBsZXQgaW1hZ2VCZyA9IGJpdG1hcEJnLmFkZFRvV29ybGQoMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICB0aGlzLmRhdGEuaW1hZ2VCZyA9IGltYWdlQmc7XHJcblxyXG4gICAgLy8gbWFrZSB0aG9zZSBwaHlzaWNzIGtpY2sgaW5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBuaW5qYS5cclxuICAgIHRoaXMubmluamEgPSBuZXcgTmluamEodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMubmluamEpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgem9tYmllcyBzcGF3bmVyLlxyXG4gICAgdGhpcy5zcGF3bmVyID0gbmV3IFpvbWJpZVNwYXduZXIodGhpcy5nYW1lLCB0aGlzLm5pbmphKTtcclxuICAgIHRoaXMuc3Bhd25lci5jcmVhdGUoKTtcclxuICB9XHJcblxyXG4gIF9wcm9jZXNzQ2FsbGJhY2sobmluamEsIHpvbWJpZSkge1xyXG4gICAgLy8gaGFuZGxlIGNvbGxpc2lvbiBpbiB0aGUgYHByb2Nlc3NDYWxsYmFja2Agb2YgYG92ZXJsYXBgIHRvIGZvb2xcclxuICAgIC8vICB0aGUgcGh5c2ljcyBpbnRvIHRoaW5raW5nIHRoYXQgdGhlcmUgd2FzIG5vIGNvbGxpc2lvbixcclxuICAgIC8vIHNvIHRoZSBOaW5qYSBtb3ZlbWVudCBpcyBub3QgYWx0ZXJlZC5cclxuICAgIGlmICghem9tYmllLmFsaXZlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMubmluamEuZGF0YS5pc1NsYXNoaW5nKSB7XHJcbiAgICAgIHpvbWJpZS5kaWUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5pbmphLmRpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF2b2lkIHN0b3BpbmcgdGhlIG5pbmphIG1vdmVtZW50XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfaXNEb3duKGFjdGlvbikge1xyXG4gICAgICByZXR1cm4gYWN0aW9uLmtleXMuc29tZShrID0+IGsuaXNEb3duKSB8fCBhY3Rpb24uYnV0dG9ucy5zb21lKGsgPT4gay5pc0Rvd24pO1xyXG4gIH1cclxuXHJcbiAgZHJhd0dyb3VwVG9CYWNrZ3JvdW5kKGdyb3VwKSB7XHJcbiAgICB0aGlzLmRhdGEuYml0bWFwQmcuZHJhd0dyb3VwKGdyb3VwKTtcclxuICAgIHRoaXMuZGF0YS5iaXRtYXBCZy5kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgbmluamEgc2xhc2hlZCBhIFpvbWJpZS5cclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLm5pbmphLFxyXG4gICAgICB0aGlzLnNwYXduZXIuZ3JvdXAsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIHRoaXMuX3Byb2Nlc3NDYWxsYmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzKTtcclxuXHJcbiAgICAvLyByZW1vdmUgY2FkYXZlcnNcclxuICAgIHRoaXMuc3Bhd25lci5ncm91cC5mb3JFYWNoKHpvbWJpZSA9PiB7XHJcbiAgICAgIGlmICghem9tYmllLmV4aXN0cykgdGhpcy5zcGF3bmVyLmdyb3VwLnJlbW92ZSh6b21iaWUsIHRydWUpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgICBpZiAoIXRoaXMubmluamEuYWxpdmUpIHtcclxuICAgICAgdGhpcy53b3JsZC5yZW1vdmUodGhpcy5uaW5qYSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXZvaWQgb3ZlcmxhcHBpbmcgem9tYmllc1xyXG4gICAgdGhpcy5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMuc3Bhd25lci5ncm91cCwgdGhpcy5zcGF3bmVyLmdyb3VwKTtcclxuXHJcbiAgICBpZiAodGhpcy5uaW5qYS5hbGl2ZSkge1xyXG4gICAgICBsZXQgeCA9IDAsIHkgPSAwO1xyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX1VQKSkge1xyXG4gICAgICAgIHkgLT0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX1JJR0hUKSkge1xyXG4gICAgICAgIHggKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX0RPV04pKSB7XHJcbiAgICAgICAgeSArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9pc0Rvd24odGhpcy5hY3Rpb25zLk1PVkVfTEVGVCkpIHtcclxuICAgICAgICB4IC09IDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uaW5qYS5zbGFzaChuZXcgUGhhc2VyLlBvaW50KHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNwYXduZXIudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLm5pbmphLnJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhd2xTdGF0ZTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgTWVudVN0YXRlIGZyb20gJy4vTWVudVN0YXRlJztcclxuaW1wb3J0IEJyYXdsU3RhdGUgZnJvbSAnLi9CcmF3bFN0YXRlJztcclxuXHJcbmNvbnN0IEdBTUVfV0lEVEggPSAxMDI0O1xyXG5jb25zdCBHQU1FX0hFSUdIVCA9IDc2ODtcclxuY29uc3QgVFJBTlNQQVJFTlQgPSBmYWxzZTtcclxuY29uc3QgQU5USUFMSUFTID0gZmFsc2U7XHJcblxyXG4vLy9cclxuLy8vIFRoZSBjb250cm9sbGVyIGZvciB5b3VyIGdhbWUuXHJcbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcihib290c3RyYXApIHtcclxuICAgIHRoaXMuYm9vdHN0cmFwID0gYm9vdHN0cmFwO1xyXG4gICAgdGhpcy5waGFzZXJHYW1lID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgLy8gaW5zdGFudGlhdGUgdGhlIFBoYXNlciBnYW1lLiBUaGlncyBhcmUgZ2V0dGluZyBzZXJpb3VzLlxyXG4gICAgdGhpcy5waGFzZXJHYW1lID0gbmV3IFBoYXNlci5HYW1lKFxyXG4gICAgICBHQU1FX1dJRFRILFxyXG4gICAgICBHQU1FX0hFSUdIVCxcclxuICAgICAgUGhhc2VyLkFVVE8sXHJcbiAgICAgICdwaGFzZXJHYW1lQ29udGFpbmVyJyxcclxuICAgICAgbnVsbCwgLy8gbm8gc3RhZ2UsIHlldC4gYmUgcGF0aWVudC5cclxuICAgICAgVFJBTlNQQVJFTlQsXHJcbiAgICAgIEFOVElBTElBU1xyXG4gICAgKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIGFkZCBlYWNoIG9mIHRoZSBnYW1lIHN0YXRlcy5cclxuICAgIHRoaXMucGhhc2VyR2FtZS5zdGF0ZS5hZGQoJ21lbnUnLCBNZW51U3RhdGUpO1xyXG4gICAgdGhpcy5waGFzZXJHYW1lLnN0YXRlLmFkZCgnYnJhd2wnLCBCcmF3bFN0YXRlKTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgaW5pdGlhbCBnYW1lIHN0YXRlLlxyXG4gICAgdGhpcy5waGFzZXJHYW1lLnN0YXRlLnN0YXJ0KCdtZW51Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcclxuIiwiY2xhc3MgTWVudVN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ29UZXh0ID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZXBhZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvLyBHYW1lcGFkIGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmlucHV0LmdhbWVwYWQuc3RhcnQoKTtcclxuICAgIGlmICh0aGlzLmlucHV0LmdhbWVwYWQuc3VwcG9ydGVkICYmIHRoaXMuaW5wdXQuZ2FtZXBhZC5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lcGFkID0gdGhpcy5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZC5hZGRDYWxsYmFja3ModGhpcywge1xyXG4gICAgICAgIG9uRG93bjogdGhpcy5vbkdhbWVwYWRCdXR0b25Eb3duLmJpbmQodGhpcyksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQub25Eb3duQ2FsbGJhY2sgPSB0aGlzLm9uS2V5Ym9hcmRLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFnZS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHgyMjIyMjIpO1xyXG5cclxuICAgIGxldCB0ZXh0U3R5bGUgPSB7XHJcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZm9udDogJ0FyaWFsIEJsYWNrJyxcclxuICAgICAgZm9udFNpemU6IDcwLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZpbGw6ICcjZmZmZmZmJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmdvVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy53b3JsZC5jZW50ZXJYLCAyNTAsICdIaXQgYSBrZXkuIE5PVyEnLCB0ZXh0U3R5bGUpO1xyXG4gICAgdGhpcy5nb1RleHQuYW5jaG9yLnNldCgwLjUpO1xyXG4gIH1cclxuXHJcbiAgc2h1dGRvd24oKSB7XHJcbiAgICB0aGlzLmdvVGV4dCA9IG51bGw7XHJcbiAgICB0aGlzLmdhbWVwYWQub25Eb3duQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lcGFkID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5vbkRvd25DYWxsYmFjayA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkdhbWVwYWRCdXR0b25Eb3duKGJ1dHRvbklELCB2YWx1ZSkge1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoYERFQlVHIGJ1dHRvbklEOiAke2J1dHRvbklEfSB2YWx1ZTogJHt2YWx1ZX1gLCAzMiwgMzIpO1xyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnYnJhd2wnKTtcclxuICB9XHJcblxyXG4gIG9uS2V5Ym9hcmRLZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KGBERUJVRyBrZXk6ICR7ZXZlbnQua2V5fSBrZXlDb2RlOiAke2V2ZW50LmtleUNvZGV9YCwgMzIsIDMyKTtcclxuICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnYnJhd2wnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTdGF0ZTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY29uc3QgRElBTUVURVIgPSAzMDtcclxuY29uc3QgT1JJR0lOID0gbmV3IFBoYXNlci5Qb2ludCgwLCAwKTtcclxuY29uc3QgUkVBQ1RJT05fU1BFRUQgPSAwLjMwMDtcclxuXHJcbmNsYXNzIE5pbmphIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgZ2FtZS53b3JsZC5jZW50ZXJYLCBnYW1lLndvcmxkLmNlbnRlclkpO1xyXG5cclxuICAgIGxldCBuaW5qYVRleHR1cmUgPSBnYW1lLm1ha2UuYml0bWFwRGF0YShESUFNRVRFUiwgRElBTUVURVIpO1xyXG4gICAgbmluamFUZXh0dXJlLmNpcmNsZShESUFNRVRFUi8yLCBESUFNRVRFUi8yLCBESUFNRVRFUi8yLCAnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy50ZXh0dXJlID0gbmluamFUZXh0dXJlLnRleHR1cmU7XHJcblxyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBpc1NsYXNoaW5nOiBmYWxzZSxcclxuICAgICAgdHNTaW5jZUxhc3RNb3ZlOiAwLFxyXG4gICAgICBzbGFzaERpcmVjdGlvbjogT1JJR0lOLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBFbmFibGUgcGh5c2ljcyBmb3IgdGhpcyBlbnRpdHlcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmJvZHkub25Nb3ZlQ29tcGxldGUuYWRkKHRoaXMub25Nb3ZlQ29tcGxldGUuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5ib2R5Lm9uQ29sbGlkZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcbiAgICB0aGlzLmJvZHkub25Db2xsaWRlLmFkZCh0aGlzLm9uQ29sbGlkZS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZGF0YS50c1NpbmNlTGFzdE1vdmUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XHJcblxyXG4gICAgLy8gU3RvcCBpZiB3ZSBoaXQgYSB3b3JsZCBib3VuZC5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKHRoaXMsIHRoaXMuZ2FtZS53b3JsZCk7XHJcbiAgICBpZiAodGhpcy5kYXRhLmlzU2xhc2hpbmcpIHtcclxuICAgICAgbGV0IGIgPSB0aGlzLmJvZHkuYmxvY2tlZDtcclxuICAgICAgaWYgKGIudXAgfHwgYi5kb3duIHx8IGIubGVmdCB8fCBiLnJpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5ib2R5LnN0b3BNb3ZlbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIG5pbmphIGlzIG5vdCB5ZXQgcmVjb3ZlcmVkIGZyb20gaGlzIGxhc3QgbW92ZSwgc28gaGUgY2FuJ3QgZG8gYW4gYWN0aW9uLlxyXG4gICAgaWYgKHRoaXMuZGF0YS50c1NpbmNlTGFzdE1vdmUgPCBSRUFDVElPTl9TUEVFRCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgcmVhZHksIHRoZSBuaW5qYSBzbGFzaGVzLlxyXG4gICAgaWYgKCF0aGlzLmRhdGEuc2xhc2hEaXJlY3Rpb24uZXF1YWxzKE9SSUdJTikgJiYgIXRoaXMuZGF0YS5pc1NsYXNoaW5nKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5pc1NsYXNoaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5kYXRhLnRzU2luY2VMYXN0TW92ZSA9IDA7XHJcblxyXG4gICAgICAvLyB1cGRhdGVzIHRoZSBwbGF5ZXIgdmVsb2NpdHlcclxuICAgICAgbGV0IGR1cmF0aW9uID0gMTc1O1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSAyMjU7XHJcbiAgICAgIGxldCBkaXJlY3Rpb24gPSBPUklHSU4uYW5nbGUodGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uLCB0cnVlKTtcclxuICAgICAgdGhpcy5ib2R5Lm1vdmVUbyhkdXJhdGlvbiwgZGlzdGFuY2UsIGRpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICB0aGlzLmdhbWUuZGVidWcuc3ByaXRlSW5mbyh0aGlzLCAzMiwgNDgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2xhc2gocCkge1xyXG4gICAgdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uID0gcDtcclxuICB9XHJcblxyXG4gIG9uQ29sbGlkZSgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbiA9IE9SSUdJTjtcclxuICAgIHRoaXMuZGF0YS5pc1NsYXNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvbk1vdmVDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbiA9IE9SSUdJTjtcclxuICAgIHRoaXMuZGF0YS5pc1NsYXNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOaW5qYTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgQmxvb2RQYXJ0aWNsZSBmcm9tICcuL0Jsb29kUGFydGljbGUnO1xyXG5cclxuY29uc3QgRElBTUVURVIgPSAyMDtcclxuY29uc3QgTUlOX1NQRUVEID0gNDA7XHJcbmNvbnN0IE1BWF9TUEVFRCA9IDE1MDtcclxuY29uc3QgTUlOX1JFQUNUSU9OX1NQRUVEID0gMC43NTA7XHJcbmNvbnN0IE1BWF9SRUFDVElPTl9TUEVFRCA9IDIuNTAwO1xyXG5cclxuY29uc3QgQkxPT0RfRFJPUFNfQ09VTlQgPSAxMDtcclxuY29uc3QgTUFYX0JMT09EX1NQRUVEID0gMTAwO1xyXG5jb25zdCBCTE9PRF9EUk9QU19MSUZFU1BBTiA9IDI1MDtcclxuXHJcbmNsYXNzIFpvbWJpZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGNvbG9yLCBuaW5qYSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcblxyXG4gICAgbGV0IGJtcERhdGEgPSBnYW1lLm1ha2UuYml0bWFwRGF0YShESUFNRVRFUiwgRElBTUVURVIpO1xyXG4gICAgbGV0IGhleENvbG9yID0gUGhhc2VyLkNvbG9yLlJHQnRvU3RyaW5nKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xyXG4gICAgYm1wRGF0YS5jaXJjbGUoRElBTUVURVIvMiwgRElBTUVURVIvMiwgRElBTUVURVIvMiwgaGV4Q29sb3IpO1xyXG4gICAgdGhpcy50ZXh0dXJlID0gYm1wRGF0YS50ZXh0dXJlO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICBuaW5qYTogbmluamEsXHJcbiAgICAgIHJlYWN0aW9uU3BlZWQ6IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbihNSU5fUkVBQ1RJT05fU1BFRUQsIE1BWF9SRUFDVElPTl9TUEVFRCksXHJcbiAgICAgIHRzTmV4dEFjdGlvbjogMCxcclxuICAgICAgYmxvb2RFbWl0dGVyOiBudWxsLFxyXG4gICAgICBjb3Jwc2VBZ2U6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIG1vdmUuXHJcbiAgICB0aGlzLmRhdGEudHNOZXh0QWN0aW9uID0gdGhpcy5kYXRhLnJlYWN0aW9uU3BlZWQ7XHJcblxyXG4gICAgLy8gRW5hYmxlIHBoeXNpY3MgZm9yIHRoaXMgZW50aXR5XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5ib2R5LmJvdW5jZS5zZXQoMC4yLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gRGVjaWRlIHdldGhlciB0aGUgWm9tYmllIGhhZCBlbm91Z2ggdGltZSBzaW5jZSBoaXMgbGFzdCBhY3Rpb24uXHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICB0aGlzLmRhdGEudHNOZXh0QWN0aW9uIC09IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLnRzTmV4dEFjdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnRzTmV4dEFjdGlvbiArPSB0aGlzLmRhdGEucmVhY3Rpb25TcGVlZDtcclxuICAgICAgICAvLyBNb3ZlIHRvd2FyZCB0aGUgcGxheWVyLlxyXG4gICAgICAgIGxldCBzcGVlZCA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbihNSU5fU1BFRUQsIE1BWF9TUEVFRCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLmRhdGEubmluamEsIHNwZWVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2UgdGhhdCBjb3JzcGUgcm90IGEgbGl0dGxlXHJcbiAgICB0aGlzLmRhdGEuY29ycHNlQWdlICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkTVM7XHJcblxyXG4gICAgLy8gQWZ0ZXIgYSB3aGlsZSwgcmVtb3ZlIHRoZSB6b21iaWUgKHdpbGwgYmUgcmVtb3ZlIGZyb20gaXRzIGdyb3VwIGxhdGVyKVxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3Jwc2VBZ2UgPiBCTE9PRF9EUk9QU19MSUZFU1BBTikge1xyXG4gICAgICB0aGlzLmV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmJsb29kRW1pdHRlcikge1xyXG4gICAgICAgIC8vIHBhaW50IHRoZSBibG9vZCBvbiB0aGUgZmxvb3JcclxuICAgICAgICBsZXQgcGFpbnRCbG9vZEZuID0gdGhpcy5nYW1lLnN0YXRlLmdldEN1cnJlbnRTdGF0ZSgpLmRyYXdHcm91cFRvQmFja2dyb3VuZDtcclxuICAgICAgICBpZiAodHlwZW9mIHBhaW50Qmxvb2RGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcGFpbnRCbG9vZEZuLmNhbGwodGhpcy5nYW1lLnN0YXRlLmdldEN1cnJlbnRTdGF0ZSgpLCB0aGlzLmRhdGEuYmxvb2RFbWl0dGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICAvLyBzZXQgYWxpdmUgdG8gZmFsc2Ugd2hlbiBlbWl0dGVyIGlzIGRvbmUuXHJcbiAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICBsZXQga2V5ID0gUGhhc2VyLkNvbG9yLlJHQnRvU3RyaW5nKHRoaXMuZGF0YS5jb2xvci5yLCB0aGlzLmRhdGEuY29sb3IuZywgdGhpcy5kYXRhLmNvbG9yLmIpLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKHRoaXMueCwgdGhpcy55LCBCTE9PRF9EUk9QU19DT1VOVCk7XHJcbiAgICAgIHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIgPSBlbWl0dGVyO1xyXG4gICAgICBlbWl0dGVyLnBhcnRpY2xlQ2xhc3MgPSBCbG9vZFBhcnRpY2xlO1xyXG4gICAgICBlbWl0dGVyLnNldFJvdGF0aW9uKC0zNjAsIDM2MClcclxuICAgICAgICAuc2V0U2NhbGUoXHJcbiAgICAgICAgICAwLjEsIDAuNzUsXHJcbiAgICAgICAgICAwLjEsIDAuNzUsXHJcbiAgICAgICAgICBCTE9PRF9EUk9QU19MSUZFU1BBTixcclxuICAgICAgICAgIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsXHJcbiAgICAgICAgICBmYWxzZSAvL3lveW9cclxuICAgICAgICApLnNldFhTcGVlZCgtTUFYX0JMT09EX1NQRUVELCBNQVhfQkxPT0RfU1BFRUQpXHJcbiAgICAgICAgLnNldFlTcGVlZCgtTUFYX0JMT09EX1NQRUVELCBNQVhfQkxPT0RfU1BFRUQpXHJcbiAgICAgICAgLm1ha2VQYXJ0aWNsZXMoa2V5KVxyXG4gICAgICAgIC5zdGFydCh0cnVlLCAwLCAwLCBCTE9PRF9EUk9QU19MSUZFU1BBTik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBab21iaWU7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IFpvbWJpZSBmcm9tICcuL1pvbWJpZSc7XHJcblxyXG5jb25zdCBTQUZFX0RJU1RBTkNFID0gMjUwO1xyXG5cclxuY2xhc3MgWm9tYmllU3Bhd25lciB7XHJcbiAgY29uc3RydWN0b3IgKGdhbWUsIG5pbmphKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5ncm91cCA9IGdhbWUuYWRkLmdyb3VwKHRoaXMuZ2FtZS53b3JsZCk7XHJcbiAgICB0aGlzLmxhc3RTcGF3biA9IDA7XHJcbiAgICB0aGlzLnNwYXduRGVsYXkgPSAyNTA7XHJcbiAgICB0aGlzLm1heFpvbWJpZXMgPSAxMDA7XHJcbiAgICB0aGlzLm5pbmphID0gbmluamE7XHJcbiAgICBsZXQgY29sb3JXaGVlbCA9IFBoYXNlci5Db2xvci5IU1ZDb2xvcldoZWVsKDEsIDEpO1xyXG5cclxuICAgIHRoaXMuY29sb3JzID0gW1xyXG4gICAgICAwLCAgIC8vIHJlZFxyXG4gICAgICAzMCwgIC8vIG9yYW5nZVxyXG4gICAgICA2MCwgIC8vIHllbGxvd1xyXG4gICAgICAxMjAsIC8vIGdyZWVuXHJcbiAgICAgIDE4MCwgLy8gY3lhblxyXG4gICAgICAyNDAsIC8vIGJsdWVcclxuICAgICAgMzIwICAvLyB2aW9sZXRcclxuICAgIF0ubWFwKGh1ZSA9PiB7XHJcbiAgICAgIHJldHVybiBjb2xvcldoZWVsW2h1ZV07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vICBDcmVhdGUgb3VyIGJpdG1hcERhdGEgd2hpY2ggd2UnbGwgdXNlIGFzIG91ciBCbG9vZFBhcnRpY2xlIHRleHR1cmVcclxuICAgIGxldCByYWRpdXMgPSAxNjtcclxuICAgIHRoaXMuY29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICBsZXQgYm1kID0gdGhpcy5nYW1lLmFkZC5iaXRtYXBEYXRhKHJhZGl1cyoyLCByYWRpdXMqMik7XHJcbiAgICAgIGxldCByYWRncmFkID0gYm1kLmN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChyYWRpdXMsIHJhZGl1cywgcmFkaXVzLCByYWRpdXMsIHJhZGl1cywgMCk7XHJcbiAgICAgIGNvbG9yLmEgPSAwO1xyXG4gICAgICByYWRncmFkLmFkZENvbG9yU3RvcCgwLCBQaGFzZXIuQ29sb3IuZ2V0V2ViUkdCKGNvbG9yKSk7XHJcbiAgICAgIGNvbG9yLmEgPSAyNTU7XHJcbiAgICAgIHJhZGdyYWQuYWRkQ29sb3JTdG9wKDEsIFBoYXNlci5Db2xvci5nZXRXZWJSR0IoY29sb3IpKTtcclxuICAgICAgYm1kLmNvbnRleHQuZmlsbFN0eWxlID0gcmFkZ3JhZDtcclxuICAgICAgYm1kLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgMipyYWRpdXMsIDIqcmFkaXVzKTtcclxuICAgICAgLy8gIFB1dCB0aGUgYml0bWFwRGF0YSBpbnRvIHRoZSBjYWNoZVxyXG4gICAgICBsZXQga2V5ID0gUGhhc2VyLkNvbG9yLlJHQnRvU3RyaW5nKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICAgIHRoaXMuZ2FtZS5jYWNoZS5hZGRCaXRtYXBEYXRhKGBibG9vZFBhcnRpY2xlU2hhZGUtJHtrZXl9YCwgYm1kKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZS50aW1lLnRpbWUgLSB0aGlzLmxhc3RTcGF3biA+IHRoaXMuc3Bhd25EZWxheSAmJiB0aGlzLmdyb3VwLmxlbmd0aCA8IHRoaXMubWF4Wm9tYmllcykge1xyXG4gICAgICB0aGlzLmxhc3RTcGF3biA9IHRoaXMuZ2FtZS50aW1lLnRpbWU7XHJcblxyXG4gICAgICAvLyBTcGF3biBhIHpvbWJpZVxyXG4gICAgICBsZXQgeCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIHRoaXMuZ2FtZS5ybmQuZnJhYygpO1xyXG4gICAgICBsZXQgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiB0aGlzLmdhbWUucm5kLmZyYWMoKTtcclxuICAgICAgbGV0IGNvbG9ySW5kZXggPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgdGhpcy5jb2xvcnMubGVuZ3RoLTEpO1xyXG4gICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yc1tjb2xvckluZGV4XTtcclxuICAgICAgbGV0IHpvbWJpZSA9IG5ldyBab21iaWUodGhpcy5nYW1lLCB4LCB5LCBjb2xvciwgdGhpcy5uaW5qYSk7XHJcblxyXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgem9tYmllIGRvZXMgbm90IHNwYXduIG9uIHRoZSBuaW5qYVxyXG4gICAgICB3aGlsZSAodGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmRpc3RhbmNlQmV0d2Vlbih0aGlzLm5pbmphLCB6b21iaWUpIDwgU0FGRV9ESVNUQU5DRSkge1xyXG4gICAgICAgIHpvbWJpZS54ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogdGhpcy5nYW1lLnJuZC5mcmFjKCk7XHJcbiAgICAgICAgem9tYmllLnkgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogdGhpcy5nYW1lLnJuZC5mcmFjKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ3JvdXAuYWRkKHpvbWJpZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBab21iaWVTcGF3bmVyO1xyXG4iLCIvLyBUaGlzIGZpbGUgYWN0cyBhcyB0aGUgcHJvamVjdCBlbnRyeSBwb2ludC5cclxuXHJcbi8vIFRoaXMgaXMgdG8gY29tcGVuc2F0ZSB0aGUgZmFjdCB0aGF0IHBoYXNlciBpcyBub3QgbW9kdWxhci5cclxuLy8gTk9URTogRVMyMDE1IGltcG9ydCBzdGF0ZW1lbnRzIGNhbm5vdCBiZSB1c2VkIGhlcmUuIEl0J3MgYW4gdWdseSBmaXgsIGJ1dCBpdCdzIHRoZSBiZXN0IEkgY291bGQgZmluZC5cclxud2luZG93LlBJWEkgPSByZXF1aXJlKCdjdXN0b20tUElYSScpO1xyXG53aW5kb3cucDIgPSByZXF1aXJlKCdwMicpO1xyXG53aW5kb3cuUGhhc2VyID0gcmVxdWlyZSgncGhhc2VyJyk7XHJcblxyXG4vLyBCb290c3RyYXAgdGhlIGdhbWUuXHJcbmNvbnN0IEJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwJyk7XHJcbmNvbnN0IGJvb3RzdHJhcCA9IG5ldyBCb290c3RyYXAuZGVmYXVsdCgpO1xyXG5ib290c3RyYXAuc3RhcnQoKTtcclxuIl19
