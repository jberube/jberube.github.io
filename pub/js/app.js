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

var _GameController = require('./GameController');

var _GameController2 = _interopRequireDefault(_GameController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

///
/// Acts as a controller for all the components that can wrap your game,
/// but that are not an intrinsinct part of it,
/// e.g. communication with a platform's API (Facebook, GameJolt, etc...),
/// browser's API, your own website that hosts the game, etc...
var Bootstrap = function Bootstrap() {
  _classCallCheck(this, Bootstrap);

  this.gameController = new _GameController2.default(this);
};

exports.default = Bootstrap;

},{"./GameController":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _Ninja = require('./Ninja');

var _Ninja2 = _interopRequireDefault(_Ninja);

var _ZombieSpawner = require('./ZombieSpawner');

var _ZombieSpawner2 = _interopRequireDefault(_ZombieSpawner);

var _Score = require('./Score');

var _Score2 = _interopRequireDefault(_Score);

var _Rainblood = require('./Rainblood');

var _Rainblood2 = _interopRequireDefault(_Rainblood);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var BrawlState = function (_Phaser$State) {
  _inherits(BrawlState, _Phaser$State);

  function BrawlState() {
    var _ref;

    _classCallCheck(this, BrawlState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = BrawlState.__proto__ || Object.getPrototypeOf(BrawlState)).call.apply(_ref, [this].concat(args)));

    _this.gamepad = null;
    _this.actions = null;
    _this.ninja = null;
    _this.graphics = null;
    _this.data = {
      bitmapBg: null,
      imageBg: null,
      score: 0,
      onScoreChange: null,
      onZombieDie: null,
      highScore: 0
    };
    return _this;
  }

  _createClass(BrawlState, [{
    key: 'create',
    value: function create() {
      var _get2,
          _this2 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get2 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'create', this)).call.apply(_get2, [this].concat(args));

      // Signal that fires when one of those bastards die
      this.data.onScoreChange = new _phaser2.default.Signal();
      this.data.highScore = localStorage.getItem('highScore') | 0 || 0;

      // Gamepad initialization
      this.input.gamepad.start();
      if (this.input.gamepad.supported && this.input.gamepad.active) {
        this.gamepad = this.input.gamepad.pad1;

        this.actions = Object.keys(Actions).reduce(function (keyMapping, actionName) {
          var action = Actions[actionName];

          action.keys = action.keys ? action.keys.map(function (k) {
            return _this2.game.input.keyboard.addKey(k);
          }) : [];

          action.buttons = action.buttons ? action.buttons.map(function (button) {
            return _this2.gamepad.getButton(button);
          }).filter(function (button) {
            return !!button;
          }) : []; // remove unsupported buttons (e.g. no controller conencted, button not existing on given controller)

          keyMapping[actionName] = action;
          return keyMapping;
        }, {});
      }

      // mouse support
      this.game.input.activePointer.leftButton.onDown.add(this._handleMouseClick, this);

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
      this.game.add.existing(this.spawner);
      this.spawner.create();
      this.data.onZombieDie = new _phaser2.default.Signal();

      // Create the score.
      this.score = new _Score2.default(this.game, 600, 20);
      this.add.existing(this.score);
      this.score.create();

      // The Rainblood
      this.rainblood = new _Rainblood2.default(this.game, 50, 50);
      this.add.existing(this.rainblood);
      this.rainblood.create();
      this.rainblood.data.onRainbloodCharged.add(this._handleRainbloodCharged, this);
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
        this.data.onZombieDie.dispatch(zombie);
        this._addPoints(10);
      } else {
        ninja.die();
        this._addPoints(0, true);
      }

      // avoid stoping the ninja movement
      return false;
    }
  }, {
    key: '_isDown',
    value: function _isDown(action) {
      if (action.keys.some(function (k) {
        return k.isDown;
      })) return true;
      if (action.buttons.some(function (k) {
        return k.isDown;
      })) return true;
      return false;
    }
  }, {
    key: '_addPoints',
    value: function _addPoints(points, finalScore) {
      this.data.score += points;
      if (this.data.score > this.data.highScore) {
        this.data.highScore = this.data.score;
      }
      if (this.data.highScore >= this.data.score && finalScore) {
        localStorage.setItem('highScore', this.data.highScore);
      }
      this.data.onScoreChange.dispatch(this.data.score, this.data.highScore);
    }
  }, {
    key: 'drawGroupToBackground',
    value: function drawGroupToBackground(group) {
      this.data.bitmapBg.drawGroup(group);
      this.data.bitmapBg.dirty = true;
    }
  }, {
    key: '_handleMouseClick',
    value: function _handleMouseClick(button, value) {
      if (this.ninja.data.isSlashing) return;

      var angle = this.physics.arcade.angleToPointer(this.ninja);
      var point = new _phaser2.default.Line().fromAngle(0, 0, angle, 1);
      this.ninja.slash(point.end);
    }
  }, {
    key: '_handleRainbloodCharged',
    value: function _handleRainbloodCharged() {
      console.debug('Rainblood CHARGED');
    }
  }, {
    key: 'update',
    value: function update() {
      var _get3,
          _this3 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_get3 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'update', this)).call.apply(_get3, [this].concat(args));

      // Check if the ninja slashed a Zombie.
      this.physics.arcade.overlap(this.ninja, this.spawner, null, this._processCallback.bind(this), this);

      // remove cadavers
      this.spawner.forEach(function (zombie) {
        if (!zombie.exists) _this3.spawner.remove(zombie, true);
      }, this);
      if (!this.ninja.alive) {
        this.world.remove(this.ninja, true);
      }

      // Avoid overlapping zombies
      this.physics.arcade.collide(this.spawner, this.spawner);

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

        if (Math.abs(this.gamepad.axis(_phaser2.default.Gamepad.XBOX360_STICK_LEFT_X)) + Math.abs(this.gamepad.axis(_phaser2.default.Gamepad.XBOX360_STICK_LEFT_Y)) > 0.5) {
          x = this.gamepad.axis(_phaser2.default.Gamepad.XBOX360_STICK_LEFT_X);
          y = this.gamepad.axis(_phaser2.default.Gamepad.XBOX360_STICK_LEFT_Y);
        }

        var vector = new _phaser2.default.Point(x, y);
        // TODO fine-tune this threshold for analog stick to work well
        if (vector.getMagnitude() >= 0.5) {
          this.ninja.slash(vector.normalize());
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _get4;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      (_get4 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'render', this)).call.apply(_get4, [this].concat(args));
    }
  }]);

  return BrawlState;
}(_phaser2.default.State);

exports.default = BrawlState;

},{"./Ninja":6,"./Rainblood":7,"./Score":8,"./ZombieSpawner":10,"phaser":"phaser"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _MenuState = require('./MenuState');

var _MenuState2 = _interopRequireDefault(_MenuState);

var _BrawlState = require('./BrawlState');

var _BrawlState2 = _interopRequireDefault(_BrawlState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GAME_WIDTH = 1024;
var GAME_HEIGHT = 768;
var TRANSPARENT = false;
var ANTIALIAS = false;

///
/// The controller for your game.

var GameController = function (_Phaser$Game) {
  _inherits(GameController, _Phaser$Game);

  function GameController(bootstrap) {
    _classCallCheck(this, GameController);

    // Create and add each of the game states.
    var _this = _possibleConstructorReturn(this, (GameController.__proto__ || Object.getPrototypeOf(GameController)).call(this, GAME_WIDTH, GAME_HEIGHT, _phaser2.default.AUTO, 'phaserGameContainer', null, TRANSPARENT, ANTIALIAS));
    // instantiate the Phaser game. Things are getting serious.


    _this.state.add('menu', _MenuState2.default, false);
    _this.state.add('brawl', _BrawlState2.default, false);

    // Start the initial game state.
    _this.state.start('menu');
    return _this;
  }

  return GameController;
}(_phaser2.default.Game);

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
      slashDirection: new _phaser2.default.Point(0, 0)
    };

    // Enable physics for this entity
    _this.game.physics.arcade.enable(_this);
    _this.body.collideWorldBounds = true;

    _this.body.onMoveComplete.add(_this.onMoveComplete.bind(_this), _this);

    _this.body.onCollide = new _phaser2.default.Signal();
    _this.body.onCollide.add(_this.onCollide.bind(_this), _this);

    _this.body.setCircle(_this.width / 2);
    return _this;
  }

  _createClass(Ninja, [{
    key: 'update',
    value: function update() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = _get(Ninja.prototype.__proto__ || Object.getPrototypeOf(Ninja.prototype), 'update', this)).call.apply(_get2, [this].concat(args));

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
      if (!this.data.slashDirection.isZero() && !this.data.isSlashing) {
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
      var _get3;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get3 = _get(Ninja.prototype.__proto__ || Object.getPrototypeOf(Ninja.prototype), 'render', this)).call.apply(_get3, [this].concat(args));

      if (this.alive) {
        this.game.debug.spriteInfo(this, 32, 48);
      }
    }
  }, {
    key: 'slash',
    value: function slash(p) {
      if (p.isZero()) return;

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rainblood = function (_Phaser$Group) {
  _inherits(Rainblood, _Phaser$Group);

  function Rainblood(game, x, y) {
    _classCallCheck(this, Rainblood);

    var _this = _possibleConstructorReturn(this, (Rainblood.__proto__ || Object.getPrototypeOf(Rainblood)).call(this, game, null, 'Rainblood'));

    _this.x = x;
    _this.y = y;
    _this.data = {
      colors: {
        red: false,
        orange: false,
        yellow: false,
        green: false,
        cyan: false,
        blue: false,
        violet: false
      },
      stripes: null,
      onRainbloodChanged: null
    };
    return _this;
  }

  _createClass(Rainblood, [{
    key: 'create',
    value: function create() {
      _get(Rainblood.prototype.__proto__ || Object.getPrototypeOf(Rainblood.prototype), 'create', this).call(this);

      // When that Rainblood is charged, something great will happens
      this.data.onRainbloodCharged = new _phaser2.default.Signal();

      // Draw that Rainblood
      this.data.stripes = Rainblood.Colors.map(function (color, i) {
        return new RainbloodStripe(color, i);
      });

      // Create the Graphics component to draw the Rainblood in
      this.data.rainbloodGraphics = new _phaser2.default.Graphics(this.game, 0, 0);
      this.add(this.data.rainbloodGraphics);

      // Get notified when a zomie dies
      this.game.state.states.brawl.data.onZombieDie.add(this._handleZombieDie, this);

      // Draw the stripes of the rainblood
      for (var i = this.data.stripes.length - 1; i >= 0; i--) {
        this._drawRainbloodStripe(this.data.stripes[i], false);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      _get(Rainblood.prototype.__proto__ || Object.getPrototypeOf(Rainblood.prototype), 'update', this).call(this);

      // Draw the stripes of the rainblood
      this.data.stripes.forEach(function (stripe) {
        if (stripe.dirty) {
          _this2._drawRainbloodStripe(stripe);
          stripe.dirty = false;
        }
      });

      // check if rainblood is complete
      if (this.data.stripes.every(function (stripe) {
        return stripe.bright;
      })) {
        // dispatch
        this.data.onRainbloodCharged.dispatch(this);
      }
    }
  }, {
    key: '_handleZombieDie',
    value: function _handleZombieDie(zombie) {
      // light up the given color
      this.data.stripes.filter(function (stripe) {
        return stripe.color.equals(zombie.data.color);
      }).forEach(function (stripe) {
        stripe.bright = true;
        stripe.dirty = true;
      });
    }
  }, {
    key: '_drawRainbloodStripe',
    value: function _drawRainbloodStripe(stripe) {
      var radius = 50;
      var spacing = 10;
      var cx = 100;
      var cy = 100;
      var startAngle = 0;
      var endAngle = _phaser2.default.Math.degToRad(180);
      var anticlockwise = true;
      var g = this.data.rainbloodGraphics;
      var alpha = stripe.bright ? 1 : 0.1;
      g.lineStyle(7, stripe.color.color.color, alpha);
      g.arc(cx, cy, radius + stripe.index * spacing, startAngle, endAngle, anticlockwise);
    }
  }]);

  return Rainblood;
}(_phaser2.default.Group);

exports.default = Rainblood;

var RainbloodColor = function () {
  function RainbloodColor(name, hue) {
    var _this3 = this;

    _classCallCheck(this, RainbloodColor);

    Object.defineProperty(this, 'name', {
      value: name
    });

    Object.defineProperty(this, 'color', {
      value: RainbloodColor.ColorWheel[hue]
    });

    Object.defineProperty(this, 'hue', {
      get: function get() {
        return Math.round(360 * _this3.color.h);
      }
    });

    Object.freeze(this);
  }

  _createClass(RainbloodColor, [{
    key: 'clone',
    value: function clone() {
      return new RainbloodColor(this.name, this.hue);
    }
  }, {
    key: 'equals',
    value: function equals(color) {
      return this.name === color.name;
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return _phaser2.default.Color.RGBtoString(this.color.r, this.color.g, this.color.b).replace('#', prefix);
    }
  }]);

  return RainbloodColor;
}();

RainbloodColor.ColorWheel = _phaser2.default.Color.HSVColorWheel(1, 1);

// The seven colors of the Rainblood
Rainblood.Colors = [new RainbloodColor('red', 0), new RainbloodColor('orange', 30), new RainbloodColor('yellow', 60), new RainbloodColor('green', 120), new RainbloodColor('cyan', 180), new RainbloodColor('blue', 240), new RainbloodColor('violet', 320)];

var RainbloodStripe = function RainbloodStripe(color, index) {
  _classCallCheck(this, RainbloodStripe);

  this.color = color;
  this.index = index;

  this.bright = false;
  this.dirty = true;
};

},{"phaser":"phaser"}],8:[function(require,module,exports){
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

var Score = function (_Phaser$Group) {
  _inherits(Score, _Phaser$Group);

  function Score(game, x, y) {
    _classCallCheck(this, Score);

    var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, game));

    _this.x = x;
    _this.y = y;
    _this.data = {
      scoreLabelText: null,
      scoreValueText: null,
      highScoreLabelText: null,
      highScoreValueText: null
    };
    return _this;
  }

  _createClass(Score, [{
    key: 'create',
    value: function create() {
      this.data.highScoreLabelText = this.game.add.text(0, 0, 'high score ', {
        font: 'bold 20pt Arial',
        fill: 'rgb(255, 255, 255)'
      }, this);

      this.data.highScoreValueText = this.game.add.text(this.data.highScoreLabelText.width, 0, this.game.state.states.brawl.data.highScore, {
        font: 'bold 20pt Arial',
        fill: 'rgb(255, 255, 0)'
      }, this);

      this.data.scoreLabelText = this.game.add.text(0, this.data.highScoreLabelText.height, 'score ', {
        font: 'bold 20pt Arial',
        fill: 'rgb(255, 255, 255)'
      }, this);

      this.data.scoreValueText = this.game.add.text(this.data.highScoreLabelText.width, this.data.highScoreLabelText.height, this.game.state.states.brawl.data.score, {
        font: 'bold 20pt Arial',
        fill: 'rgb(255, 255, 0)'
      }, this);

      this.game.state.states.brawl.data.onScoreChange.add(this._handleScoreChange, this);
    }
  }, {
    key: '_handleScoreChange',
    value: function _handleScoreChange(score, highScore) {
      this.data.scoreValueText.text = score;
      this.data.highScoreValueText.text = highScore;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.game.state.states.brawl.data.onScoreChange.remove(this._handleScoreChange, this);
    }
  }]);

  return Score;
}(_phaser2.default.Group);

exports.default = Score;

},{"phaser":"phaser"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    var hexColor = color.toHexString('#');
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
    _this.body.setCircle(_this.width / 2);
    return _this;
  }

  _createClass(Zombie, [{
    key: 'update',
    value: function update() {
      var _get2;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = _get(Zombie.prototype.__proto__ || Object.getPrototypeOf(Zombie.prototype), 'update', this)).call.apply(_get2, [this].concat(args));

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

        //TODO: move emitters elsewhere where thay can be spooled
        var key = this.data.color.toHexString();
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

},{"./BloodParticle":1,"phaser":"phaser"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _phaser = require('phaser');

var _phaser2 = _interopRequireDefault(_phaser);

var _Zombie = require('./Zombie');

var _Zombie2 = _interopRequireDefault(_Zombie);

var _Rainblood = require('./Rainblood');

var _Rainblood2 = _interopRequireDefault(_Rainblood);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SAFE_DISTANCE = 250;

var ZombieSpawner = function (_Phaser$Group) {
  _inherits(ZombieSpawner, _Phaser$Group);

  function ZombieSpawner(game, ninja) {
    _classCallCheck(this, ZombieSpawner);

    var _this = _possibleConstructorReturn(this, (ZombieSpawner.__proto__ || Object.getPrototypeOf(ZombieSpawner)).call(this, game));

    _this.lastSpawn = 0;
    _this.spawnDelay = 250;
    _this.maxZombies = 100;
    _this.ninja = ninja;
    _this.colors = _Rainblood2.default.Colors.map(function (rc) {
      return rc.clone();
    });
    return _this;
  }

  _createClass(ZombieSpawner, [{
    key: 'create',
    value: function create() {
      var _get2,
          _this2 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = _get(ZombieSpawner.prototype.__proto__ || Object.getPrototypeOf(ZombieSpawner.prototype), 'create', this)).call.apply(_get2, [this].concat(args));

      //  Create our bitmapData which we'll use as our BloodParticle texture
      var radius = 16;
      this.colors.forEach(function (rainBloodColor) {
        var color = rainBloodColor.color;
        var bmd = _this2.game.add.bitmapData(radius * 2, radius * 2);
        var radgrad = bmd.ctx.createRadialGradient(radius, radius, radius, radius, radius, 0);
        color.a = 0;
        radgrad.addColorStop(0, _phaser2.default.Color.getWebRGB(color));
        color.a = 255;
        radgrad.addColorStop(1, _phaser2.default.Color.getWebRGB(color));
        bmd.context.fillStyle = radgrad;
        bmd.context.fillRect(0, 0, 2 * radius, 2 * radius);
        //  Put the bitmapData into the cache
        var key = _phaser2.default.Color.RGBtoString(color.r, color.g, color.b).replace('#', '');
        _this2.game.cache.addBitmapData('bloodParticleShade-' + key, bmd);
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var _get3;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (_get3 = _get(ZombieSpawner.prototype.__proto__ || Object.getPrototypeOf(ZombieSpawner.prototype), 'update', this)).call.apply(_get3, [this].concat(args));

      if (this.game.time.time - this.lastSpawn > this.spawnDelay && this.length < this.maxZombies) {
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

        this.add(zombie);
      }
    }
  }]);

  return ZombieSpawner;
}(_phaser2.default.Group);

exports.default = ZombieSpawner;

},{"./Rainblood":7,"./Zombie":9,"phaser":"phaser"}],11:[function(require,module,exports){
'use strict';

// This file acts as the project entry point.

// This is to compensate the fact that phaser is not modular.
// NOTE: ES2015 import statements cannot be used here. It's an ugly fix, but it's the best I could find.
window.PIXI = require('custom-PIXI');
window.p2 = require('p2');
window.Phaser = require('phaser');

// Bootstrap the game.
var Bootstrap = require('./Bootstrap');
new Bootstrap.default();

},{"./Bootstrap":2,"custom-PIXI":"custom-PIXI","p2":"p2","phaser":"phaser"}]},{},[11])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxCbG9vZFBhcnRpY2xlLmpzIiwic3JjXFxqc1xcQm9vdHN0cmFwLmpzIiwic3JjXFxqc1xcQnJhd2xTdGF0ZS5qcyIsInNyY1xcanNcXEdhbWVDb250cm9sbGVyLmpzIiwic3JjXFxqc1xcTWVudVN0YXRlLmpzIiwic3JjXFxqc1xcTmluamEuanMiLCJzcmNcXGpzXFxSYWluYmxvb2QuanMiLCJzcmNcXGpzXFxTY29yZS5qcyIsInNyY1xcanNcXFpvbWJpZS5qcyIsInNyY1xcanNcXFpvbWJpZVNwYXduZXIuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7SUFFTSxhOzs7QUFDSix5QkFBWSxJQUFaLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEdBQXhCLEVBQTZCO0FBQUE7O0FBQUEseUhBQ3JCLElBRHFCLEVBQ2YsQ0FEZSxFQUNaLENBRFksRUFDVCxLQUFLLEtBQUwsQ0FBVyxhQUFYLHlCQUErQyxHQUEvQyxDQURTO0FBRTVCOzs7RUFIeUIsaUJBQU8sUTs7a0JBTXBCLGE7Ozs7Ozs7OztBQ1JmOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDcUIsUyxHQUNuQixxQkFBYztBQUFBOztBQUNaLE9BQUssY0FBTCxHQUFzQiw2QkFBbUIsSUFBbkIsQ0FBdEI7QUFDRCxDOztrQkFIa0IsUzs7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVU7QUFDWixXQUFTO0FBQ1AsVUFBTSxDQUFDLGlCQUFPLE9BQVAsQ0FBZSxDQUFoQixFQUFtQixpQkFBTyxPQUFQLENBQWUsRUFBbEMsQ0FEQztBQUVQLGFBQVMsQ0FBQyxpQkFBTyxP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LENBQWMsT0FBZCxDQUFzQixDQUF0QixFQUF5QixLQUFLLE1BQUwsQ0FBWSxNQUFaLEdBQW1CLENBQTVDLENBQWpCO0FBQ0EsWUFBSSxRQUFRLEtBQUssTUFBTCxDQUFZLFVBQVosQ0FBWjtBQUNBLFlBQUksU0FBUyxxQkFBVyxLQUFLLElBQWhCLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEtBQTVCLEVBQW1DLEtBQUssS0FBeEMsQ0FBYjs7QUFFQTtBQUNBLGVBQU8sS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixNQUFsQixDQUF5QixlQUF6QixDQUF5QyxLQUFLLEtBQTlDLEVBQXFELE1BQXJELElBQStELGFBQXRFLEVBQXFGO0FBQ25GLGlCQUFPLENBQVAsR0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLEdBQXdCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxJQUFkLEVBQW5DO0FBQ0EsaUJBQU8sQ0FBUCxHQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsR0FBeUIsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLElBQWQsRUFBcEM7QUFDRDs7QUFFRCxhQUFLLEdBQUwsQ0FBUyxNQUFUO0FBQ0Q7QUFDRjs7OztFQXBEd0MsaUJBQU8sSzs7a0JBQTdCLGE7Ozs7O0FDTnJCOztBQUVBO0FBQ0E7QUFDQSxPQUFPLElBQVAsR0FBYyxRQUFRLGFBQVIsQ0FBZDtBQUNBLE9BQU8sRUFBUCxHQUFZLFFBQVEsSUFBUixDQUFaO0FBQ0EsT0FBTyxNQUFQLEdBQWdCLFFBQVEsUUFBUixDQUFoQjs7QUFFQTtBQUNBLElBQU0sWUFBWSxRQUFRLGFBQVIsQ0FBbEI7QUFDQSxJQUFJLFVBQVUsT0FBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5jbGFzcyBCbG9vZFBhcnRpY2xlIGV4dGVuZHMgUGhhc2VyLlBhcnRpY2xlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBrZXkpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIGdhbWUuY2FjaGUuZ2V0Qml0bWFwRGF0YShgYmxvb2RQYXJ0aWNsZVNoYWRlLSR7a2V5fWApKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb29kUGFydGljbGU7XHJcbiIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcclxuXHJcbi8vL1xyXG4vLy8gQWN0cyBhcyBhIGNvbnRyb2xsZXIgZm9yIGFsbCB0aGUgY29tcG9uZW50cyB0aGF0IGNhbiB3cmFwIHlvdXIgZ2FtZSxcclxuLy8vIGJ1dCB0aGF0IGFyZSBub3QgYW4gaW50cmluc2luY3QgcGFydCBvZiBpdCxcclxuLy8vIGUuZy4gY29tbXVuaWNhdGlvbiB3aXRoIGEgcGxhdGZvcm0ncyBBUEkgKEZhY2Vib29rLCBHYW1lSm9sdCwgZXRjLi4uKSxcclxuLy8vIGJyb3dzZXIncyBBUEksIHlvdXIgb3duIHdlYnNpdGUgdGhhdCBob3N0cyB0aGUgZ2FtZSwgZXRjLi4uXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RzdHJhcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBOaW5qYSBmcm9tICcuL05pbmphJztcclxuaW1wb3J0IFpvbWJpZVNwYXduZXIgZnJvbSAnLi9ab21iaWVTcGF3bmVyJztcclxuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUnO1xyXG5pbXBvcnQgUmFpbmJsb29kIGZyb20gJy4vUmFpbmJsb29kJztcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSB7XHJcbiAgICBNT1ZFX1VQOiB7XHJcbiAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5XLCBQaGFzZXIuS2V5Q29kZS5VUF0sXHJcbiAgICAgIGJ1dHRvbnM6IFtQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX0RQQURfVVBdLFxyXG4gICAgfSxcclxuICAgIE1PVkVfRE9XTjoge1xyXG4gICAgICBrZXlzOiBbUGhhc2VyLktleUNvZGUuUywgUGhhc2VyLktleUNvZGUuRE9XTl0sXHJcbiAgICAgIGJ1dHRvbnM6IFtQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX0RQQURfRE9XTl0sXHJcbiAgICB9LFxyXG4gICAgTU9WRV9MRUZUOiB7XHJcbiAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5BLCBQaGFzZXIuS2V5Q29kZS5MRUZUXSxcclxuICAgICAgYnV0dG9uczogW1BoYXNlci5HYW1lcGFkLlhCT1gzNjBfRFBBRF9MRUZUXSxcclxuICAgIH0sXHJcbiAgICBNT1ZFX1JJR0hUOiB7XHJcbiAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5ELCBQaGFzZXIuS2V5Q29kZS5SSUdIVF0sXHJcbiAgICAgIGJ1dHRvbnM6IFtQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX0RQQURfUklHSFRdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYXdsU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgdGhpcy5nYW1lcGFkID0gbnVsbDtcclxuICAgIHRoaXMuYWN0aW9ucyA9IG51bGw7XHJcbiAgICB0aGlzLm5pbmphID0gbnVsbDtcclxuICAgIHRoaXMuZ3JhcGhpY3MgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBiaXRtYXBCZzogbnVsbCxcclxuICAgICAgaW1hZ2VCZzogbnVsbCxcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIG9uU2NvcmVDaGFuZ2U6IG51bGwsXHJcbiAgICAgIG9uWm9tYmllRGllOiBudWxsLFxyXG4gICAgICBoaWdoU2NvcmU6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLmNyZWF0ZSguLi5hcmdzKTtcclxuXHJcbiAgICAvLyBTaWduYWwgdGhhdCBmaXJlcyB3aGVuIG9uZSBvZiB0aG9zZSBiYXN0YXJkcyBkaWVcclxuICAgIHRoaXMuZGF0YS5vblNjb3JlQ2hhbmdlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHRoaXMuZGF0YS5oaWdoU2NvcmUgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpIHwgMCkgfHwgMDtcclxuXHJcbiAgICAvLyBHYW1lcGFkIGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmlucHV0LmdhbWVwYWQuc3RhcnQoKTtcclxuICAgIGlmICh0aGlzLmlucHV0LmdhbWVwYWQuc3VwcG9ydGVkICYmIHRoaXMuaW5wdXQuZ2FtZXBhZC5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lcGFkID0gdGhpcy5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcblxyXG4gICAgICB0aGlzLmFjdGlvbnMgPSBPYmplY3Qua2V5cyhBY3Rpb25zKS5yZWR1Y2UoKGtleU1hcHBpbmcsIGFjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgIGxldCBhY3Rpb24gPSBBY3Rpb25zW2FjdGlvbk5hbWVdO1xyXG5cclxuICAgICAgICAgIGFjdGlvbi5rZXlzID0gYWN0aW9uLmtleXMgPyBhY3Rpb24ua2V5cy5tYXAoayA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KGspO1xyXG4gICAgICAgICAgfSkgOiBbXTtcclxuXHJcbiAgICAgICAgICBhY3Rpb24uYnV0dG9ucyA9IGFjdGlvbi5idXR0b25zID8gYWN0aW9uLmJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWVwYWQuZ2V0QnV0dG9uKGJ1dHRvbik7XHJcbiAgICAgICAgICB9KS5maWx0ZXIoYnV0dG9uID0+ICEhYnV0dG9uKSA6IFtdOyAvLyByZW1vdmUgdW5zdXBwb3J0ZWQgYnV0dG9ucyAoZS5nLiBubyBjb250cm9sbGVyIGNvbmVuY3RlZCwgYnV0dG9uIG5vdCBleGlzdGluZyBvbiBnaXZlbiBjb250cm9sbGVyKVxyXG5cclxuICAgICAgICAgIGtleU1hcHBpbmdbYWN0aW9uTmFtZV0gPSBhY3Rpb247XHJcbiAgICAgICAgICByZXR1cm4ga2V5TWFwcGluZztcclxuICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHN1cHBvcnRcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5hY3RpdmVQb2ludGVyLmxlZnRCdXR0b24ub25Eb3duLmFkZCh0aGlzLl9oYW5kbGVNb3VzZUNsaWNrLCB0aGlzKTtcclxuXHJcbiAgICAvLyBzb21lIGdyb3VuZFxyXG4gICAgdGhpcy5zdGFnZS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHg0NDQ0NDQpO1xyXG5cclxuICAgIC8vIG1ha2UgYSBiaXRtYXAgYmFja2dyb3VuZCB0byBwYWludCB3aXRoIGNvbG9yZnVsIGJsb29kXHJcbiAgICBsZXQgYml0bWFwQmcgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcERhdGEodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0KTtcclxuICAgIHRoaXMuZGF0YS5iaXRtYXBCZyA9IGJpdG1hcEJnO1xyXG4gICAgbGV0IGltYWdlQmcgPSBiaXRtYXBCZy5hZGRUb1dvcmxkKDAsIDAsIDAsIDAsIDEsIDEpO1xyXG4gICAgdGhpcy5kYXRhLmltYWdlQmcgPSBpbWFnZUJnO1xyXG5cclxuICAgIC8vIG1ha2UgdGhvc2UgcGh5c2ljcyBraWNrIGluXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgbmluamEuXHJcbiAgICB0aGlzLm5pbmphID0gbmV3IE5pbmphKHRoaXMuZ2FtZSk7XHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLm5pbmphKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIHpvbWJpZXMgc3Bhd25lci5cclxuICAgIHRoaXMuc3Bhd25lciA9IG5ldyBab21iaWVTcGF3bmVyKHRoaXMuZ2FtZSwgdGhpcy5uaW5qYSk7XHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuc3Bhd25lcik7XHJcbiAgICB0aGlzLnNwYXduZXIuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmRhdGEub25ab21iaWVEaWUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgc2NvcmUuXHJcbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKHRoaXMuZ2FtZSwgNjAwLCAyMCk7XHJcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnNjb3JlKTtcclxuICAgIHRoaXMuc2NvcmUuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gVGhlIFJhaW5ibG9vZFxyXG4gICAgdGhpcy5yYWluYmxvb2QgPSBuZXcgUmFpbmJsb29kKHRoaXMuZ2FtZSwgNTAsIDUwKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMucmFpbmJsb29kKTtcclxuICAgIHRoaXMucmFpbmJsb29kLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5yYWluYmxvb2QuZGF0YS5vblJhaW5ibG9vZENoYXJnZWQuYWRkKHRoaXMuX2hhbmRsZVJhaW5ibG9vZENoYXJnZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX3Byb2Nlc3NDYWxsYmFjayhuaW5qYSwgem9tYmllKSB7XHJcbiAgICAvLyBoYW5kbGUgY29sbGlzaW9uIGluIHRoZSBgcHJvY2Vzc0NhbGxiYWNrYCBvZiBgb3ZlcmxhcGAgdG8gZm9vbFxyXG4gICAgLy8gIHRoZSBwaHlzaWNzIGludG8gdGhpbmtpbmcgdGhhdCB0aGVyZSB3YXMgbm8gY29sbGlzaW9uLFxyXG4gICAgLy8gc28gdGhlIE5pbmphIG1vdmVtZW50IGlzIG5vdCBhbHRlcmVkLlxyXG4gICAgaWYgKCF6b21iaWUuYWxpdmUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5uaW5qYS5kYXRhLmlzU2xhc2hpbmcpIHtcclxuICAgICAgem9tYmllLmRpZSgpO1xyXG4gICAgICB0aGlzLmRhdGEub25ab21iaWVEaWUuZGlzcGF0Y2goem9tYmllKTtcclxuICAgICAgdGhpcy5fYWRkUG9pbnRzKDEwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5pbmphLmRpZSgpO1xyXG4gICAgICB0aGlzLl9hZGRQb2ludHMoMCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXZvaWQgc3RvcGluZyB0aGUgbmluamEgbW92ZW1lbnRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9pc0Rvd24oYWN0aW9uKSB7XHJcbiAgICAgIGlmIChhY3Rpb24ua2V5cy5zb21lKGsgPT4gay5pc0Rvd24pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKGFjdGlvbi5idXR0b25zLnNvbWUoayA9PiBrLmlzRG93bikpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfYWRkUG9pbnRzKHBvaW50cywgZmluYWxTY29yZSkge1xyXG4gICAgdGhpcy5kYXRhLnNjb3JlICs9IHBvaW50cztcclxuICAgIGlmICh0aGlzLmRhdGEuc2NvcmUgPiB0aGlzLmRhdGEuaGlnaFNjb3JlKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5oaWdoU2NvcmUgPSB0aGlzLmRhdGEuc2NvcmU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLmhpZ2hTY29yZSA+PSB0aGlzLmRhdGEuc2NvcmUgJiYgZmluYWxTY29yZSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgdGhpcy5kYXRhLmhpZ2hTY29yZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEub25TY29yZUNoYW5nZS5kaXNwYXRjaCh0aGlzLmRhdGEuc2NvcmUsIHRoaXMuZGF0YS5oaWdoU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0dyb3VwVG9CYWNrZ3JvdW5kKGdyb3VwKSB7XHJcbiAgICB0aGlzLmRhdGEuYml0bWFwQmcuZHJhd0dyb3VwKGdyb3VwKTtcclxuICAgIHRoaXMuZGF0YS5iaXRtYXBCZy5kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTW91c2VDbGljayhidXR0b24sIHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5uaW5qYS5kYXRhLmlzU2xhc2hpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBsZXQgYW5nbGUgPSB0aGlzLnBoeXNpY3MuYXJjYWRlLmFuZ2xlVG9Qb2ludGVyKHRoaXMubmluamEpO1xyXG4gICAgbGV0IHBvaW50ID0gbmV3IFBoYXNlci5MaW5lKCkuZnJvbUFuZ2xlKDAsIDAsIGFuZ2xlLCAxKTtcclxuICAgIHRoaXMubmluamEuc2xhc2gocG9pbnQuZW5kKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVSYWluYmxvb2RDaGFyZ2VkKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnUmFpbmJsb29kIENIQVJHRUQnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICBzdXBlci51cGRhdGUoLi4uYXJncyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5pbmphIHNsYXNoZWQgYSBab21iaWUuXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5uaW5qYSxcclxuICAgICAgdGhpcy5zcGF3bmVyLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLl9wcm9jZXNzQ2FsbGJhY2suYmluZCh0aGlzKSxcclxuICAgICAgdGhpcyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGNhZGF2ZXJzXHJcbiAgICB0aGlzLnNwYXduZXIuZm9yRWFjaCh6b21iaWUgPT4ge1xyXG4gICAgICBpZiAoIXpvbWJpZS5leGlzdHMpIHRoaXMuc3Bhd25lci5yZW1vdmUoem9tYmllLCB0cnVlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgaWYgKCF0aGlzLm5pbmphLmFsaXZlKSB7XHJcbiAgICAgIHRoaXMud29ybGQucmVtb3ZlKHRoaXMubmluamEsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF2b2lkIG92ZXJsYXBwaW5nIHpvbWJpZXNcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLnNwYXduZXIsIHRoaXMuc3Bhd25lcik7XHJcblxyXG4gICAgaWYgKHRoaXMubmluamEuYWxpdmUpIHtcclxuICAgICAgbGV0IHggPSAwLCB5ID0gMDtcclxuICAgICAgaWYgKHRoaXMuX2lzRG93bih0aGlzLmFjdGlvbnMuTU9WRV9VUCkpIHtcclxuICAgICAgICB5IC09IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX2lzRG93bih0aGlzLmFjdGlvbnMuTU9WRV9SSUdIVCkpIHtcclxuICAgICAgICB4ICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuX2lzRG93bih0aGlzLmFjdGlvbnMuTU9WRV9ET1dOKSkge1xyXG4gICAgICAgIHkgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX0xFRlQpKSB7XHJcbiAgICAgICAgeCAtPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5nYW1lcGFkLmF4aXMoUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9TVElDS19MRUZUX1gpKSArIE1hdGguYWJzKHRoaXMuZ2FtZXBhZC5heGlzKFBoYXNlci5HYW1lcGFkLlhCT1gzNjBfU1RJQ0tfTEVGVF9ZKSkgPiAwLjUpIHtcclxuICAgICAgICB4ID0gdGhpcy5nYW1lcGFkLmF4aXMoUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9TVElDS19MRUZUX1gpO1xyXG4gICAgICAgIHkgPSB0aGlzLmdhbWVwYWQuYXhpcyhQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX1NUSUNLX0xFRlRfWSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB2ZWN0b3IgPSBuZXcgUGhhc2VyLlBvaW50KHgsIHkpO1xyXG4gICAgICAvLyBUT0RPIGZpbmUtdHVuZSB0aGlzIHRocmVzaG9sZCBmb3IgYW5hbG9nIHN0aWNrIHRvIHdvcmsgd2VsbFxyXG4gICAgICBpZiAodmVjdG9yLmdldE1hZ25pdHVkZSgpID49IDAuNSkge1xyXG4gICAgICAgIHRoaXMubmluamEuc2xhc2godmVjdG9yLm5vcm1hbGl6ZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLnJlbmRlciguLi5hcmdzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgTWVudVN0YXRlIGZyb20gJy4vTWVudVN0YXRlJztcclxuaW1wb3J0IEJyYXdsU3RhdGUgZnJvbSAnLi9CcmF3bFN0YXRlJztcclxuXHJcbmNvbnN0IEdBTUVfV0lEVEggPSAxMDI0O1xyXG5jb25zdCBHQU1FX0hFSUdIVCA9IDc2ODtcclxuY29uc3QgVFJBTlNQQVJFTlQgPSBmYWxzZTtcclxuY29uc3QgQU5USUFMSUFTID0gZmFsc2U7XHJcblxyXG4vLy9cclxuLy8vIFRoZSBjb250cm9sbGVyIGZvciB5b3VyIGdhbWUuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKGJvb3RzdHJhcCkge1xyXG4gICAgLy8gaW5zdGFudGlhdGUgdGhlIFBoYXNlciBnYW1lLiBUaGluZ3MgYXJlIGdldHRpbmcgc2VyaW91cy5cclxuICAgIHN1cGVyKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBQaGFzZXIuQVVUTywgJ3BoYXNlckdhbWVDb250YWluZXInLCBudWxsLCBUUkFOU1BBUkVOVCwgQU5USUFMSUFTKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIGFkZCBlYWNoIG9mIHRoZSBnYW1lIHN0YXRlcy5cclxuICAgIHRoaXMuc3RhdGUuYWRkKCdtZW51JywgTWVudVN0YXRlLCBmYWxzZSk7XHJcbiAgICB0aGlzLnN0YXRlLmFkZCgnYnJhd2wnLCBCcmF3bFN0YXRlLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gU3RhcnQgdGhlIGluaXRpYWwgZ2FtZSBzdGF0ZS5cclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ21lbnUnKTtcclxuICB9XHJcbn1cclxuIiwiY2xhc3MgTWVudVN0YXRlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZ29UZXh0ID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZXBhZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvLyBHYW1lcGFkIGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmlucHV0LmdhbWVwYWQuc3RhcnQoKTtcclxuICAgIGlmICh0aGlzLmlucHV0LmdhbWVwYWQuc3VwcG9ydGVkICYmIHRoaXMuaW5wdXQuZ2FtZXBhZC5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lcGFkID0gdGhpcy5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZC5hZGRDYWxsYmFja3ModGhpcywge1xyXG4gICAgICAgIG9uRG93bjogdGhpcy5vbkdhbWVwYWRCdXR0b25Eb3duLmJpbmQodGhpcyksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQub25Eb3duQ2FsbGJhY2sgPSB0aGlzLm9uS2V5Ym9hcmRLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFnZS5zZXRCYWNrZ3JvdW5kQ29sb3IoMHgyMjIyMjIpO1xyXG5cclxuICAgIGxldCB0ZXh0U3R5bGUgPSB7XHJcbiAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZm9udDogJ0FyaWFsIEJsYWNrJyxcclxuICAgICAgZm9udFNpemU6IDcwLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGZpbGw6ICcjZmZmZmZmJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmdvVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy53b3JsZC5jZW50ZXJYLCAyNTAsICdIaXQgYSBrZXkuIE5PVyEnLCB0ZXh0U3R5bGUpO1xyXG4gICAgdGhpcy5nb1RleHQuYW5jaG9yLnNldCgwLjUpO1xyXG4gIH1cclxuXHJcbiAgc2h1dGRvd24oKSB7XHJcbiAgICB0aGlzLmdvVGV4dCA9IG51bGw7XHJcbiAgICB0aGlzLmdhbWVwYWQub25Eb3duQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lcGFkID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5vbkRvd25DYWxsYmFjayA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkdhbWVwYWRCdXR0b25Eb3duKGJ1dHRvbklELCB2YWx1ZSkge1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoYERFQlVHIGJ1dHRvbklEOiAke2J1dHRvbklEfSB2YWx1ZTogJHt2YWx1ZX1gLCAzMiwgMzIpO1xyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnYnJhd2wnKTtcclxuICB9XHJcblxyXG4gIG9uS2V5Ym9hcmRLZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KGBERUJVRyBrZXk6ICR7ZXZlbnQua2V5fSBrZXlDb2RlOiAke2V2ZW50LmtleUNvZGV9YCwgMzIsIDMyKTtcclxuICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnYnJhd2wnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTdGF0ZTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY29uc3QgRElBTUVURVIgPSAzMDtcclxuY29uc3QgT1JJR0lOID0gbmV3IFBoYXNlci5Qb2ludCgwLCAwKTtcclxuY29uc3QgUkVBQ1RJT05fU1BFRUQgPSAwLjMwMDtcclxuXHJcbmNsYXNzIE5pbmphIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgZ2FtZS53b3JsZC5jZW50ZXJYLCBnYW1lLndvcmxkLmNlbnRlclkpO1xyXG5cclxuICAgIGxldCBuaW5qYVRleHR1cmUgPSBnYW1lLm1ha2UuYml0bWFwRGF0YShESUFNRVRFUiwgRElBTUVURVIpO1xyXG4gICAgbmluamFUZXh0dXJlLmNpcmNsZShESUFNRVRFUi8yLCBESUFNRVRFUi8yLCBESUFNRVRFUi8yLCAnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy50ZXh0dXJlID0gbmluamFUZXh0dXJlLnRleHR1cmU7XHJcblxyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBpc1NsYXNoaW5nOiBmYWxzZSxcclxuICAgICAgdHNTaW5jZUxhc3RNb3ZlOiAwLFxyXG4gICAgICBzbGFzaERpcmVjdGlvbjogbmV3IFBoYXNlci5Qb2ludCgwLCAwKSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gRW5hYmxlIHBoeXNpY3MgZm9yIHRoaXMgZW50aXR5XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5ib2R5Lm9uTW92ZUNvbXBsZXRlLmFkZCh0aGlzLm9uTW92ZUNvbXBsZXRlLmJpbmQodGhpcyksIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuYm9keS5vbkNvbGxpZGUgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgdGhpcy5ib2R5Lm9uQ29sbGlkZS5hZGQodGhpcy5vbkNvbGxpZGUuYmluZCh0aGlzKSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5ib2R5LnNldENpcmNsZSh0aGlzLndpZHRoLzIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSguLi5hcmdzKTtcclxuXHJcbiAgICB0aGlzLmRhdGEudHNTaW5jZUxhc3RNb3ZlICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UgaGl0IGEgd29ybGQgYm91bmQuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLCB0aGlzLmdhbWUud29ybGQpO1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc1NsYXNoaW5nKSB7XHJcbiAgICAgIGxldCBiID0gdGhpcy5ib2R5LmJsb2NrZWQ7XHJcbiAgICAgIGlmIChiLnVwIHx8IGIuZG93biB8fCBiLmxlZnQgfHwgYi5yaWdodCkge1xyXG4gICAgICAgIHRoaXMuYm9keS5zdG9wTW92ZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBuaW5qYSBpcyBub3QgeWV0IHJlY292ZXJlZCBmcm9tIGhpcyBsYXN0IG1vdmUsIHNvIGhlIGNhbid0IGRvIGFuIGFjdGlvbi5cclxuICAgIGlmICh0aGlzLmRhdGEudHNTaW5jZUxhc3RNb3ZlIDwgUkVBQ1RJT05fU1BFRUQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHJlYWR5LCB0aGUgbmluamEgc2xhc2hlcy5cclxuICAgIGlmICghdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uLmlzWmVybygpICYmICF0aGlzLmRhdGEuaXNTbGFzaGluZykge1xyXG4gICAgICB0aGlzLmRhdGEuaXNTbGFzaGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZGF0YS50c1NpbmNlTGFzdE1vdmUgPSAwO1xyXG5cclxuICAgICAgLy8gdXBkYXRlcyB0aGUgcGxheWVyIHZlbG9jaXR5XHJcbiAgICAgIGxldCBkdXJhdGlvbiA9IDE3NTtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gMjI1O1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gT1JJR0lOLmFuZ2xlKHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuYm9keS5tb3ZlVG8oZHVyYXRpb24sIGRpc3RhbmNlLCBkaXJlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLnJlbmRlciguLi5hcmdzKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICB0aGlzLmdhbWUuZGVidWcuc3ByaXRlSW5mbyh0aGlzLCAzMiwgNDgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2xhc2gocCkge1xyXG4gICAgaWYgKHAuaXNaZXJvKCkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmRhdGEuc2xhc2hEaXJlY3Rpb24gPSBwO1xyXG4gIH1cclxuXHJcbiAgb25Db2xsaWRlKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uID0gT1JJR0lOO1xyXG4gICAgdGhpcy5kYXRhLmlzU2xhc2hpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uTW92ZUNvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uID0gT1JJR0lOO1xyXG4gICAgdGhpcy5kYXRhLmlzU2xhc2hpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpZSgpIHtcclxuICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pbmphO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWluYmxvb2QgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUsIG51bGwsICdSYWluYmxvb2QnKTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBjb2xvcnM6IHtcclxuICAgICAgICByZWQ6IGZhbHNlLFxyXG4gICAgICAgIG9yYW5nZTogZmFsc2UsXHJcbiAgICAgICAgeWVsbG93OiBmYWxzZSxcclxuICAgICAgICBncmVlbjogZmFsc2UsXHJcbiAgICAgICAgY3lhbjogZmFsc2UsXHJcbiAgICAgICAgYmx1ZTogZmFsc2UsXHJcbiAgICAgICAgdmlvbGV0OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgc3RyaXBlczogbnVsbCxcclxuICAgICAgb25SYWluYmxvb2RDaGFuZ2VkOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHN1cGVyLmNyZWF0ZSgpO1xyXG5cclxuICAgIC8vIFdoZW4gdGhhdCBSYWluYmxvb2QgaXMgY2hhcmdlZCwgc29tZXRoaW5nIGdyZWF0IHdpbGwgaGFwcGVuc1xyXG4gICAgdGhpcy5kYXRhLm9uUmFpbmJsb29kQ2hhcmdlZCA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcblxyXG4gICAgLy8gRHJhdyB0aGF0IFJhaW5ibG9vZFxyXG4gICAgdGhpcy5kYXRhLnN0cmlwZXMgPSBSYWluYmxvb2QuQ29sb3JzLm1hcCgoY29sb3IsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBSYWluYmxvb2RTdHJpcGUoY29sb3IsIGkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBHcmFwaGljcyBjb21wb25lbnQgdG8gZHJhdyB0aGUgUmFpbmJsb29kIGluXHJcbiAgICB0aGlzLmRhdGEucmFpbmJsb29kR3JhcGhpY3MgPSBuZXcgUGhhc2VyLkdyYXBoaWNzKHRoaXMuZ2FtZSwgMCwgMCk7XHJcbiAgICB0aGlzLmFkZCh0aGlzLmRhdGEucmFpbmJsb29kR3JhcGhpY3MpO1xyXG5cclxuICAgIC8vIEdldCBub3RpZmllZCB3aGVuIGEgem9taWUgZGllc1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXRlcy5icmF3bC5kYXRhLm9uWm9tYmllRGllLmFkZCh0aGlzLl9oYW5kbGVab21iaWVEaWUsIHRoaXMpO1xyXG5cclxuICAgIC8vIERyYXcgdGhlIHN0cmlwZXMgb2YgdGhlIHJhaW5ibG9vZFxyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuZGF0YS5zdHJpcGVzLmxlbmd0aC0xOyBpID49IDA7IGktLSkge1xyXG4gICAgICB0aGlzLl9kcmF3UmFpbmJsb29kU3RyaXBlKHRoaXMuZGF0YS5zdHJpcGVzW2ldLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBzdXBlci51cGRhdGUoKTtcclxuXHJcbiAgICAvLyBEcmF3IHRoZSBzdHJpcGVzIG9mIHRoZSByYWluYmxvb2RcclxuICAgIHRoaXMuZGF0YS5zdHJpcGVzLmZvckVhY2goc3RyaXBlID0+IHtcclxuICAgICAgaWYgKHN0cmlwZS5kaXJ0eSkge1xyXG4gICAgICAgIHRoaXMuX2RyYXdSYWluYmxvb2RTdHJpcGUoc3RyaXBlKTtcclxuICAgICAgICBzdHJpcGUuZGlydHkgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgcmFpbmJsb29kIGlzIGNvbXBsZXRlXHJcbiAgICBpZiAodGhpcy5kYXRhLnN0cmlwZXMuZXZlcnkoc3RyaXBlID0+IHN0cmlwZS5icmlnaHQpKSB7XHJcbiAgICAgIC8vIGRpc3BhdGNoXHJcbiAgICAgIHRoaXMuZGF0YS5vblJhaW5ibG9vZENoYXJnZWQuZGlzcGF0Y2godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlWm9tYmllRGllKHpvbWJpZSkge1xyXG4gICAgLy8gbGlnaHQgdXAgdGhlIGdpdmVuIGNvbG9yXHJcbiAgICB0aGlzLmRhdGEuc3RyaXBlcy5maWx0ZXIoc3RyaXBlID0+IHtcclxuICAgICAgcmV0dXJuIHN0cmlwZS5jb2xvci5lcXVhbHMoem9tYmllLmRhdGEuY29sb3IpO1xyXG4gICAgfSkuZm9yRWFjaChzdHJpcGUgPT4ge1xyXG4gICAgICBzdHJpcGUuYnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgc3RyaXBlLmRpcnR5ID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2RyYXdSYWluYmxvb2RTdHJpcGUoc3RyaXBlKSB7XHJcbiAgICBsZXQgcmFkaXVzID0gNTA7XHJcbiAgICBsZXQgc3BhY2luZyA9IDEwO1xyXG4gICAgbGV0IGN4ID0gMTAwO1xyXG4gICAgbGV0IGN5ID0gMTAwO1xyXG4gICAgbGV0IHN0YXJ0QW5nbGUgPSAwO1xyXG4gICAgbGV0IGVuZEFuZ2xlID0gUGhhc2VyLk1hdGguZGVnVG9SYWQoMTgwKTtcclxuICAgIGxldCBhbnRpY2xvY2t3aXNlID0gdHJ1ZTtcclxuICAgIGxldCBnID0gdGhpcy5kYXRhLnJhaW5ibG9vZEdyYXBoaWNzO1xyXG4gICAgbGV0IGFscGhhID0gc3RyaXBlLmJyaWdodCA/IDEgOiAwLjE7XHJcbiAgICBnLmxpbmVTdHlsZSg3LCBzdHJpcGUuY29sb3IuY29sb3IuY29sb3IsIGFscGhhKTtcclxuICAgIGcuYXJjKGN4LCBjeSwgcmFkaXVzICsgc3RyaXBlLmluZGV4KnNwYWNpbmcsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBhbnRpY2xvY2t3aXNlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBSYWluYmxvb2RDb2xvciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgaHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ25hbWUnLCB7XHJcbiAgICAgIHZhbHVlOiBuYW1lLFxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2xvcicsIHtcclxuICAgICAgdmFsdWU6IFJhaW5ibG9vZENvbG9yLkNvbG9yV2hlZWxbaHVlXSxcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnaHVlJywge1xyXG4gICAgICBnZXQ6ICgpID0+IHsgcmV0dXJuIE1hdGgucm91bmQoMzYwICogdGhpcy5jb2xvci5oKTt9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBSYWluYmxvb2RDb2xvcih0aGlzLm5hbWUsIHRoaXMuaHVlKTtcclxuICB9XHJcblxyXG4gIGVxdWFscyhjb2xvcikge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gY29sb3IubmFtZTtcclxuICB9XHJcblxyXG4gIHRvSGV4U3RyaW5nKHByZWZpeCA9ICcnKSB7XHJcbiAgICByZXR1cm4gUGhhc2VyLkNvbG9yLlJHQnRvU3RyaW5nKFxyXG4gICAgICB0aGlzLmNvbG9yLnIsXHJcbiAgICAgIHRoaXMuY29sb3IuZyxcclxuICAgICAgdGhpcy5jb2xvci5iXHJcbiAgICApLnJlcGxhY2UoJyMnLCBwcmVmaXgpO1xyXG4gIH1cclxufVxyXG5SYWluYmxvb2RDb2xvci5Db2xvcldoZWVsID0gUGhhc2VyLkNvbG9yLkhTVkNvbG9yV2hlZWwoMSwgMSk7XHJcblxyXG5cclxuLy8gVGhlIHNldmVuIGNvbG9ycyBvZiB0aGUgUmFpbmJsb29kXHJcblJhaW5ibG9vZC5Db2xvcnMgPSBbXHJcbiAgbmV3IFJhaW5ibG9vZENvbG9yKCdyZWQnLCAwKSxcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ29yYW5nZScsIDMwKSxcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ3llbGxvdycsIDYwKSxcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ2dyZWVuJywgMTIwKSxcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ2N5YW4nLCAxODApLFxyXG4gIG5ldyBSYWluYmxvb2RDb2xvcignYmx1ZScsIDI0MCksXHJcbiAgbmV3IFJhaW5ibG9vZENvbG9yKCd2aW9sZXQnLCAzMjApXHJcbl07XHJcblxyXG5cclxuY2xhc3MgUmFpbmJsb29kU3RyaXBlIHtcclxuICBjb25zdHJ1Y3Rvcihjb2xvciwgaW5kZXgpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICB0aGlzLmJyaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBzY29yZUxhYmVsVGV4dDogbnVsbCxcclxuICAgICAgc2NvcmVWYWx1ZVRleHQ6IG51bGwsXHJcbiAgICAgIGhpZ2hTY29yZUxhYmVsVGV4dDogbnVsbCxcclxuICAgICAgaGlnaFNjb3JlVmFsdWVUZXh0OiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSAoKSB7XHJcbiAgICB0aGlzLmRhdGEuaGlnaFNjb3JlTGFiZWxUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxyXG4gICAgICAwLCAwLFxyXG4gICAgICAnaGlnaCBzY29yZSAnLFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udDogJ2JvbGQgMjBwdCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5oaWdoU2NvcmVWYWx1ZVRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoXHJcbiAgICAgIHRoaXMuZGF0YS5oaWdoU2NvcmVMYWJlbFRleHQud2lkdGgsIDAsXHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGF0ZXMuYnJhd2wuZGF0YS5oaWdoU2NvcmUsXHJcbiAgICAgIHtcclxuICAgICAgICBmb250OiAnYm9sZCAyMHB0IEFyaWFsJyxcclxuICAgICAgICBmaWxsOiAncmdiKDI1NSwgMjU1LCAwKScsXHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5zY29yZUxhYmVsVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChcclxuICAgICAgMCwgdGhpcy5kYXRhLmhpZ2hTY29yZUxhYmVsVGV4dC5oZWlnaHQsXHJcbiAgICAgICdzY29yZSAnLFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udDogJ2JvbGQgMjBwdCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXHJcbiAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZGF0YS5zY29yZVZhbHVlVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChcclxuICAgICAgdGhpcy5kYXRhLmhpZ2hTY29yZUxhYmVsVGV4dC53aWR0aCwgdGhpcy5kYXRhLmhpZ2hTY29yZUxhYmVsVGV4dC5oZWlnaHQsXHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGF0ZXMuYnJhd2wuZGF0YS5zY29yZSxcclxuICAgICAge1xyXG4gICAgICAgIGZvbnQ6ICdib2xkIDIwcHQgQXJpYWwnLFxyXG4gICAgICAgIGZpbGw6ICdyZ2IoMjU1LCAyNTUsIDApJyxcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXRlcy5icmF3bC5kYXRhLm9uU2NvcmVDaGFuZ2UuYWRkKHRoaXMuX2hhbmRsZVNjb3JlQ2hhbmdlLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTY29yZUNoYW5nZShzY29yZSwgaGlnaFNjb3JlKSB7XHJcbiAgICB0aGlzLmRhdGEuc2NvcmVWYWx1ZVRleHQudGV4dCA9IHNjb3JlO1xyXG4gICAgdGhpcy5kYXRhLmhpZ2hTY29yZVZhbHVlVGV4dC50ZXh0ID0gaGlnaFNjb3JlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGF0ZXMuYnJhd2wuZGF0YS5vblNjb3JlQ2hhbmdlLnJlbW92ZSh0aGlzLl9oYW5kbGVTY29yZUNoYW5nZSwgdGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IEJsb29kUGFydGljbGUgZnJvbSAnLi9CbG9vZFBhcnRpY2xlJztcclxuXHJcbmNvbnN0IERJQU1FVEVSID0gMjA7XHJcbmNvbnN0IE1JTl9TUEVFRCA9IDQwO1xyXG5jb25zdCBNQVhfU1BFRUQgPSAxNTA7XHJcbmNvbnN0IE1JTl9SRUFDVElPTl9TUEVFRCA9IDAuNzUwO1xyXG5jb25zdCBNQVhfUkVBQ1RJT05fU1BFRUQgPSAyLjUwMDtcclxuXHJcbmNvbnN0IEJMT09EX0RST1BTX0NPVU5UID0gMTA7XHJcbmNvbnN0IE1BWF9CTE9PRF9TUEVFRCA9IDEwMDtcclxuY29uc3QgQkxPT0RfRFJPUFNfTElGRVNQQU4gPSAyNTA7XHJcblxyXG5jbGFzcyBab21iaWUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBjb2xvciwgbmluamEpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHkpO1xyXG5cclxuICAgIGxldCBibXBEYXRhID0gZ2FtZS5tYWtlLmJpdG1hcERhdGEoRElBTUVURVIsIERJQU1FVEVSKTtcclxuICAgIGxldCBoZXhDb2xvciA9IGNvbG9yLnRvSGV4U3RyaW5nKCcjJyk7XHJcbiAgICBibXBEYXRhLmNpcmNsZShESUFNRVRFUi8yLCBESUFNRVRFUi8yLCBESUFNRVRFUi8yLCBoZXhDb2xvcik7XHJcbiAgICB0aGlzLnRleHR1cmUgPSBibXBEYXRhLnRleHR1cmU7XHJcblxyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgIG5pbmphOiBuaW5qYSxcclxuICAgICAgcmVhY3Rpb25TcGVlZDogdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKE1JTl9SRUFDVElPTl9TUEVFRCwgTUFYX1JFQUNUSU9OX1NQRUVEKSxcclxuICAgICAgdHNOZXh0QWN0aW9uOiAwLFxyXG4gICAgICBibG9vZEVtaXR0ZXI6IG51bGwsXHJcbiAgICAgIGNvcnBzZUFnZTogMCxcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gbW92ZS5cclxuICAgIHRoaXMuZGF0YS50c05leHRBY3Rpb24gPSB0aGlzLmRhdGEucmVhY3Rpb25TcGVlZDtcclxuXHJcbiAgICAvLyBFbmFibGUgcGh5c2ljcyBmb3IgdGhpcyBlbnRpdHlcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gZmFsc2U7XHJcbiAgICB0aGlzLmJvZHkuYm91bmNlLnNldCgwLjIsIDAuMik7XHJcbiAgICB0aGlzLmJvZHkuc2V0Q2lyY2xlKHRoaXMud2lkdGgvMik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgc3VwZXIudXBkYXRlKC4uLmFyZ3MpO1xyXG5cclxuICAgIC8vIERlY2lkZSB3ZXRoZXIgdGhlIFpvbWJpZSBoYWQgZW5vdWdoIHRpbWUgc2luY2UgaGlzIGxhc3QgYWN0aW9uLlxyXG4gICAgaWYgKHRoaXMuYWxpdmUpIHtcclxuICAgICAgdGhpcy5kYXRhLnRzTmV4dEFjdGlvbiAtPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcclxuICAgICAgaWYgKHRoaXMuZGF0YS50c05leHRBY3Rpb24gPD0gMCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS50c05leHRBY3Rpb24gKz0gdGhpcy5kYXRhLnJlYWN0aW9uU3BlZWQ7XHJcbiAgICAgICAgLy8gTW92ZSB0b3dhcmQgdGhlIHBsYXllci5cclxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oTUlOX1NQRUVELCBNQVhfU1BFRUQpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5tb3ZlVG9PYmplY3QodGhpcywgdGhpcy5kYXRhLm5pbmphLCBzcGVlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWtlIHRoYXQgY29yc3BlIHJvdCBhIGxpdHRsZVxyXG4gICAgdGhpcy5kYXRhLmNvcnBzZUFnZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZE1TO1xyXG5cclxuICAgIC8vIEFmdGVyIGEgd2hpbGUsIHJlbW92ZSB0aGUgem9tYmllICh3aWxsIGJlIHJlbW92ZSBmcm9tIGl0cyBncm91cCBsYXRlcilcclxuICAgIGlmICh0aGlzLmRhdGEuY29ycHNlQWdlID4gQkxPT0RfRFJPUFNfTElGRVNQQU4pIHtcclxuICAgICAgdGhpcy5leGlzdHMgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIpIHtcclxuICAgICAgICAvLyBwYWludCB0aGUgYmxvb2Qgb24gdGhlIGZsb29yXHJcbiAgICAgICAgbGV0IHBhaW50Qmxvb2RGbiA9IHRoaXMuZ2FtZS5zdGF0ZS5nZXRDdXJyZW50U3RhdGUoKS5kcmF3R3JvdXBUb0JhY2tncm91bmQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYWludEJsb29kRm4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIHBhaW50Qmxvb2RGbi5jYWxsKHRoaXMuZ2FtZS5zdGF0ZS5nZXRDdXJyZW50U3RhdGUoKSwgdGhpcy5kYXRhLmJsb29kRW1pdHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGEuYmxvb2RFbWl0dGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmRhdGEuYmxvb2RFbWl0dGVyID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGllKCkge1xyXG4gICAgaWYgKHRoaXMuYWxpdmUpIHtcclxuICAgICAgLy8gc2V0IGFsaXZlIHRvIGZhbHNlIHdoZW4gZW1pdHRlciBpcyBkb25lLlxyXG4gICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgLy9UT0RPOiBtb3ZlIGVtaXR0ZXJzIGVsc2V3aGVyZSB3aGVyZSB0aGF5IGNhbiBiZSBzcG9vbGVkXHJcbiAgICAgIGxldCBrZXkgPSB0aGlzLmRhdGEuY29sb3IudG9IZXhTdHJpbmcoKTtcclxuICAgICAgbGV0IGVtaXR0ZXIgPSB0aGlzLmdhbWUuYWRkLmVtaXR0ZXIodGhpcy54LCB0aGlzLnksIEJMT09EX0RST1BTX0NPVU5UKTtcclxuICAgICAgdGhpcy5kYXRhLmJsb29kRW1pdHRlciA9IGVtaXR0ZXI7XHJcbiAgICAgIGVtaXR0ZXIucGFydGljbGVDbGFzcyA9IEJsb29kUGFydGljbGU7XHJcbiAgICAgIGVtaXR0ZXIuc2V0Um90YXRpb24oLTM2MCwgMzYwKVxyXG4gICAgICAgIC5zZXRTY2FsZShcclxuICAgICAgICAgIDAuMSwgMC43NSxcclxuICAgICAgICAgIDAuMSwgMC43NSxcclxuICAgICAgICAgIEJMT09EX0RST1BTX0xJRkVTUEFOLFxyXG4gICAgICAgICAgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSxcclxuICAgICAgICAgIGZhbHNlIC8veW95b1xyXG4gICAgICAgICkuc2V0WFNwZWVkKC1NQVhfQkxPT0RfU1BFRUQsIE1BWF9CTE9PRF9TUEVFRClcclxuICAgICAgICAuc2V0WVNwZWVkKC1NQVhfQkxPT0RfU1BFRUQsIE1BWF9CTE9PRF9TUEVFRClcclxuICAgICAgICAubWFrZVBhcnRpY2xlcyhrZXkpXHJcbiAgICAgICAgLnN0YXJ0KHRydWUsIDAsIDAsIEJMT09EX0RST1BTX0xJRkVTUEFOKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFpvbWJpZTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgWm9tYmllIGZyb20gJy4vWm9tYmllJztcclxuaW1wb3J0IFJhaW5ibG9vZCBmcm9tICcuL1JhaW5ibG9vZCc7XHJcblxyXG5jb25zdCBTQUZFX0RJU1RBTkNFID0gMjUwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9tYmllU3Bhd25lciBleHRlbmRzIFBoYXNlci5Hcm91cCB7XHJcbiAgY29uc3RydWN0b3IgKGdhbWUsIG5pbmphKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICAgIHRoaXMubGFzdFNwYXduID0gMDtcclxuICAgIHRoaXMuc3Bhd25EZWxheSA9IDI1MDtcclxuICAgIHRoaXMubWF4Wm9tYmllcyA9IDEwMDtcclxuICAgIHRoaXMubmluamEgPSBuaW5qYTtcclxuICAgIHRoaXMuY29sb3JzID0gUmFpbmJsb29kLkNvbG9ycy5tYXAocmMgPT4gcmMuY2xvbmUoKSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoLi4uYXJncykge1xyXG4gICAgc3VwZXIuY3JlYXRlKC4uLmFyZ3MpO1xyXG5cclxuICAgIC8vICBDcmVhdGUgb3VyIGJpdG1hcERhdGEgd2hpY2ggd2UnbGwgdXNlIGFzIG91ciBCbG9vZFBhcnRpY2xlIHRleHR1cmVcclxuICAgIGxldCByYWRpdXMgPSAxNjtcclxuICAgIHRoaXMuY29sb3JzLmZvckVhY2gocmFpbkJsb29kQ29sb3IgPT4ge1xyXG4gICAgICBsZXQgY29sb3IgPSByYWluQmxvb2RDb2xvci5jb2xvcjtcclxuICAgICAgbGV0IGJtZCA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwRGF0YShyYWRpdXMqMiwgcmFkaXVzKjIpO1xyXG4gICAgICBsZXQgcmFkZ3JhZCA9IGJtZC5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQocmFkaXVzLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzLCByYWRpdXMsIDApO1xyXG4gICAgICBjb2xvci5hID0gMDtcclxuICAgICAgcmFkZ3JhZC5hZGRDb2xvclN0b3AoMCwgUGhhc2VyLkNvbG9yLmdldFdlYlJHQihjb2xvcikpO1xyXG4gICAgICBjb2xvci5hID0gMjU1O1xyXG4gICAgICByYWRncmFkLmFkZENvbG9yU3RvcCgxLCBQaGFzZXIuQ29sb3IuZ2V0V2ViUkdCKGNvbG9yKSk7XHJcbiAgICAgIGJtZC5jb250ZXh0LmZpbGxTdHlsZSA9IHJhZGdyYWQ7XHJcbiAgICAgIGJtZC5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIDIqcmFkaXVzLCAyKnJhZGl1cyk7XHJcbiAgICAgIC8vICBQdXQgdGhlIGJpdG1hcERhdGEgaW50byB0aGUgY2FjaGVcclxuICAgICAgbGV0IGtleSA9IFBoYXNlci5Db2xvci5SR0J0b1N0cmluZyhjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKS5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgICB0aGlzLmdhbWUuY2FjaGUuYWRkQml0bWFwRGF0YShgYmxvb2RQYXJ0aWNsZVNoYWRlLSR7a2V5fWAsIGJtZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICBzdXBlci51cGRhdGUoLi4uYXJncyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2FtZS50aW1lLnRpbWUgLSB0aGlzLmxhc3RTcGF3biA+IHRoaXMuc3Bhd25EZWxheSAmJiB0aGlzLmxlbmd0aCA8IHRoaXMubWF4Wm9tYmllcykge1xyXG4gICAgICB0aGlzLmxhc3RTcGF3biA9IHRoaXMuZ2FtZS50aW1lLnRpbWU7XHJcblxyXG4gICAgICAvLyBTcGF3biBhIHpvbWJpZVxyXG4gICAgICBsZXQgeCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIHRoaXMuZ2FtZS5ybmQuZnJhYygpO1xyXG4gICAgICBsZXQgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiB0aGlzLmdhbWUucm5kLmZyYWMoKTtcclxuICAgICAgbGV0IGNvbG9ySW5kZXggPSB0aGlzLmdhbWUucm5kLmJldHdlZW4oMCwgdGhpcy5jb2xvcnMubGVuZ3RoLTEpO1xyXG4gICAgICBsZXQgY29sb3IgPSB0aGlzLmNvbG9yc1tjb2xvckluZGV4XTtcclxuICAgICAgbGV0IHpvbWJpZSA9IG5ldyBab21iaWUodGhpcy5nYW1lLCB4LCB5LCBjb2xvciwgdGhpcy5uaW5qYSk7XHJcblxyXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgem9tYmllIGRvZXMgbm90IHNwYXduIG9uIHRoZSBuaW5qYVxyXG4gICAgICB3aGlsZSAodGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmRpc3RhbmNlQmV0d2Vlbih0aGlzLm5pbmphLCB6b21iaWUpIDwgU0FGRV9ESVNUQU5DRSkge1xyXG4gICAgICAgIHpvbWJpZS54ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogdGhpcy5nYW1lLnJuZC5mcmFjKCk7XHJcbiAgICAgICAgem9tYmllLnkgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogdGhpcy5nYW1lLnJuZC5mcmFjKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWRkKHpvbWJpZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoaXMgZmlsZSBhY3RzIGFzIHRoZSBwcm9qZWN0IGVudHJ5IHBvaW50LlxyXG5cclxuLy8gVGhpcyBpcyB0byBjb21wZW5zYXRlIHRoZSBmYWN0IHRoYXQgcGhhc2VyIGlzIG5vdCBtb2R1bGFyLlxyXG4vLyBOT1RFOiBFUzIwMTUgaW1wb3J0IHN0YXRlbWVudHMgY2Fubm90IGJlIHVzZWQgaGVyZS4gSXQncyBhbiB1Z2x5IGZpeCwgYnV0IGl0J3MgdGhlIGJlc3QgSSBjb3VsZCBmaW5kLlxyXG53aW5kb3cuUElYSSA9IHJlcXVpcmUoJ2N1c3RvbS1QSVhJJyk7XHJcbndpbmRvdy5wMiA9IHJlcXVpcmUoJ3AyJyk7XHJcbndpbmRvdy5QaGFzZXIgPSByZXF1aXJlKCdwaGFzZXInKTtcclxuXG4vLyBCb290c3RyYXAgdGhlIGdhbWUuXHJcbmNvbnN0IEJvb3RzdHJhcCA9IHJlcXVpcmUoJy4vQm9vdHN0cmFwJyk7XG5uZXcgQm9vdHN0cmFwLmRlZmF1bHQoKTtcbiJdfQ==
