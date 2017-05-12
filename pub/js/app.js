(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {
    frames: {
        slashRight0: { frame: { x: 0, y: 1920, w: 192, h: 192 } },
        slashRight1: { frame: { x: 576, y: 1920, w: 192, h: 192 } },
        slashRight2: { frame: { x: 960, y: 1920, w: 192, h: 192 } },
        slashRight3: { frame: { x: 192, y: 1920, w: 192, h: 192 } },
        slashRight4: { frame: { x: 384, y: 1920, w: 192, h: 192 } },
        slashRight5: { frame: { x: 768, y: 1920, w: 192, h: 192 } },

        slashLeft0: { frame: { x: 0, y: 1536, w: 192, h: 192 } },
        slashLeft1: { frame: { x: 576, y: 1536, w: 192, h: 192 } },
        slashLeft2: { frame: { x: 960, y: 1536, w: 192, h: 192 } },
        slashLeft3: { frame: { x: 192, y: 1536, w: 192, h: 192 } },
        slashLeft5: { frame: { x: 768, y: 1536, w: 192, h: 192 } },
        slashLeft4: { frame: { x: 384, y: 1536, w: 192, h: 192 } },

        slashTop0: { frame: { x: 0, y: 1344, w: 192, h: 192 } },
        slashTop1: { frame: { x: 576, y: 1344, w: 192, h: 192 } },
        slashTop2: { frame: { x: 960, y: 1344, w: 192, h: 192 } },
        slashTop3: { frame: { x: 192, y: 1344, w: 192, h: 192 } },
        slashTop5: { frame: { x: 768, y: 1344, w: 192, h: 192 } },
        slashTop4: { frame: { x: 384, y: 1344, w: 192, h: 192 } },

        slashBottom0: { frame: { x: 0, y: 1728, w: 192, h: 192 } },
        slashBottom1: { frame: { x: 576, y: 1728, w: 192, h: 192 } },
        slashBottom2: { frame: { x: 960, y: 1728, w: 192, h: 192 } },
        slashBottom3: { frame: { x: 192, y: 1728, w: 192, h: 192 } },
        slashBottom5: { frame: { x: 768, y: 1728, w: 192, h: 192 } },
        slashBottom4: { frame: { x: 384, y: 1728, w: 192, h: 192 } },

        die0: { frame: { x: 0, y: 1280, w: 64, h: 64 } },
        die1: { frame: { x: 64, y: 1280, w: 64, h: 64 } },
        die2: { frame: { x: 128, y: 1280, w: 64, h: 64 } },
        die3: { frame: { x: 192, y: 1280, w: 64, h: 64 } },
        die4: { frame: { x: 256, y: 1280, w: 64, h: 64 } },
        die5: { frame: { x: 320, y: 1280, w: 64, h: 64 } }
    },
    meta: {
        image: "./ninja.png",
        size: { w: 1536, h: 2112 }
    }
};

},{}],2:[function(require,module,exports){
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

},{"phaser":"phaser"}],3:[function(require,module,exports){
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

},{"./GameController":5}],4:[function(require,module,exports){
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
    key: 'preload',
    value: function preload() {
      var _get3;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      (_get3 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'preload', this)).call.apply(_get3, [this].concat(args));

      _Ninja2.default.preload(this.game);
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
      var _get4,
          _this3 = this;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      (_get4 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'update', this)).call.apply(_get4, [this].concat(args));

      // Check if the ninja slashed a Zombie.
      this.physics.arcade.overlap(this.ninja, this.spawner, null, this._processCallback.bind(this), this);

      // remove cadavers
      this.spawner.forEach(function (zombie) {
        if (!zombie.exists) _this3.spawner.remove(zombie, true);
      }, this);
      // if (!this.ninja.alive) {
      //   this.world.remove(this.ninja, true);
      // }

      // Avoid overlapping zombies
      this.physics.arcade.collide(this.spawner, this.spawner);

      if (!this.ninja.data.isDying) {
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
      var _get5;

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      (_get5 = _get(BrawlState.prototype.__proto__ || Object.getPrototypeOf(BrawlState.prototype), 'render', this)).call.apply(_get5, [this].concat(args));
    }
  }]);

  return BrawlState;
}(_phaser2.default.State);

exports.default = BrawlState;

},{"./Ninja":7,"./Rainblood":8,"./Score":9,"./ZombieSpawner":12,"phaser":"phaser"}],5:[function(require,module,exports){
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

},{"./BrawlState":4,"./MenuState":6,"phaser":"phaser"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Texts = require('./Texts.js');

var _Texts2 = _interopRequireDefault(_Texts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuState = function () {
  function MenuState() {
    _classCallCheck(this, MenuState);

    this.goText = null;
    this.explainationText = null;
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

      // mouse support
      this.game.input.activePointer.leftButton.onDown.add(this._handleMouseClick, this);

      this.stage.setBackgroundColor(0x222222);

      this.goText = this.add.text(this.world.centerX, 500, _Texts2.default.hitAKey, {
        align: 'center',
        font: 'Arial Black',
        fontSize: 64,
        fontWeight: 'bold',
        fill: '#ffffff'
      });
      this.goText.anchor.set(0.5);

      this.explainationText = this.add.text(this.world.centerX, 200, _Texts2.default.introText, {
        align: 'left',
        font: 'Arial Black',
        fontSize: 24,
        fill: '#DDDDDD'
      });

      this.explainationText.wordWrap = true;
      this.explainationText.wordWrapWidth = this.game.width - 50;
      this.explainationText.anchor.set(0.5);
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      this.goText = null;
      this.explainationText = null;
      this.gamepad.onDownCallback = null;
      this.gamepad = null;
      this.game.input.keyboard.onDownCallback = null;
      this.game.input.activePointer.leftButton.onDown.remove(this._handleMouseClick, this);
    }
  }, {
    key: 'onGamepadButtonDown',
    value: function onGamepadButtonDown(buttonID, value) {
      this.state.start('brawl');
    }
  }, {
    key: 'onKeyboardKeyDown',
    value: function onKeyboardKeyDown(event) {
      this.state.start('brawl');
    }
  }, {
    key: '_handleMouseClick',
    value: function _handleMouseClick(buttonID, value) {
      this.state.start('brawl');
    }
  }]);

  return MenuState;
}();

exports.default = MenuState;

},{"./Texts.js":10}],7:[function(require,module,exports){
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

var atlasJSONHash = require('../images/ninjaAtlas');

var ORIGIN = new _phaser2.default.Point(0, 0);
var REACTION_SPEED = 0.300;
var FRAMERATE = 15;

var Ninja = function (_Phaser$Sprite) {
  _inherits(Ninja, _Phaser$Sprite);

  function Ninja(game) {
    _classCallCheck(this, Ninja);

    var _this = _possibleConstructorReturn(this, (Ninja.__proto__ || Object.getPrototypeOf(Ninja)).call(this, game, game.world.centerX, game.world.centerY, 'ninja-spritesheet', 'slashRight0'));

    _this.data = {
      isSlashing: false,
      isDying: false,
      tsSinceLastMove: 0,
      slashDirection: new _phaser2.default.Point(0, 0),
      dyingAnimation: null
    };

    _this.anchor = new _phaser2.default.Point(0.5, 0.5);

    // Add the ninja animations
    ['Right', 'Left', 'Top', 'Bottom'].forEach(function (direction) {
      var frames = [];
      for (var i = 0; i <= 5; i++) {
        frames.push('slash' + direction + i);
      }
      _this.animations.add('ninjaSlash' + direction, frames, FRAMERATE, false, false);
    });

    var frames = [];
    for (var i = 0; i <= 5; i++) {
      frames.push('die' + i);
    }
    _this.data.dyingAnimation = _this.animations.add('ninjaDie', frames, FRAMERATE, false, false);
    _this.data.dyingAnimation.onComplete.add(_this.onDieAnimationComplete.bind(_this));

    // Enable physics for this entity
    _this.game.physics.arcade.enable(_this);
    // this.body.collideWorldBounds = true;
    _this.setSlashing(false);

    _this.body.onMoveComplete.add(_this.onMoveComplete.bind(_this), _this);

    _this.body.onCollide = new _phaser2.default.Signal();
    _this.body.onCollide.add(_this.onCollide.bind(_this), _this);
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
        this.setSlashing(true);

        // updates the player velocity
        var duration = 175;
        var distance = 225;
        var direction = ORIGIN.angle(this.data.slashDirection, true);
        this.body.moveTo(duration, distance, direction);

        // play the animation mathing the direction of the ninja
        if (Math.abs(this.data.slashDirection.x) > Math.abs(this.data.slashDirection.y)) {
          if (this.data.slashDirection.x > 0) {
            this.animations.play('ninjaSlashRight', FRAMERATE, false);
          } else {
            this.animations.play('ninjaSlashLeft', FRAMERATE, false);
          }
        } else {
          if (this.data.slashDirection.y > 0) {
            this.animations.play('ninjaSlashBottom', FRAMERATE, false);
          } else {
            this.animations.play('ninjaSlashTop', FRAMERATE, false);
          }
        }
      }

      // some debug info
      // if (this.alive) {
      //   this.game.debug.body(this);
      // }
    }
  }, {
    key: 'slash',
    value: function slash(p) {
      if (this.data.isDying) return;

      if (p.isZero()) return;

      this.data.slashDirection = p;
    }
  }, {
    key: 'setSlashing',
    value: function setSlashing(slashing) {
      this.data.isSlashing = slashing;
      if (slashing) {
        this.data.tsSinceLastMove = 0;
        this.body.setCircle(this.width / 2, 0, 0);
      } else {
        this.data.slashDirection = ORIGIN;
        this.body.setCircle(32, this.width / 2 - 32, this.width / 2 - 32);
      }
    }
  }, {
    key: 'onCollide',
    value: function onCollide() {
      this.setSlashing(false);
    }
  }, {
    key: 'onMoveComplete',
    value: function onMoveComplete() {
      this.setSlashing(false);
    }
  }, {
    key: 'onDieAnimationComplete',
    value: function onDieAnimationComplete() {
      this.alive = false;
    }
  }, {
    key: 'die',
    value: function die() {
      if (!this.data.isDying) {
        this.animations.play('ninjaDie', FRAMERATE, false);
        this.data.isDying = true;
      }
    }
  }]);

  return Ninja;
}(_phaser2.default.Sprite);

Ninja.preload = function (game) {
  game.load.atlasJSONHash('ninja-spritesheet', 'images/ninja.png', null /*atlasURL*/, atlasJSONHash);
};

exports.default = Ninja;

},{"../images/ninjaAtlas":1,"phaser":"phaser"}],8:[function(require,module,exports){
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
      g.lineStyle(spacing, stripe.color.color.color, alpha);
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

},{"phaser":"phaser"}],9:[function(require,module,exports){
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

},{"phaser":"phaser"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var texts = {
  introText: 'Click on the screen or use analog stick to move the ninja (black dot) of a fixed distance.\nThere is a delay before you can move again.\nIf you move through a zombie (color dot), it kills it.\nIf a zombie touches you while you don\'t move, you die.\nEach time you kill a zombie, the rainbow light it\'s color.\nWhen the rainbow is all light up, nothing happens.\nFor now.',
  hitAKey: 'Hit a key\nor click somewhere.\nNOW!'
};

exports.default = texts;

},{}],11:[function(require,module,exports){
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

},{"./BloodParticle":2,"phaser":"phaser"}],12:[function(require,module,exports){
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
    _this.maxZombies = 10;
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

},{"./Rainblood":8,"./Zombie":11,"phaser":"phaser"}],13:[function(require,module,exports){
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

},{"./Bootstrap":3,"custom-PIXI":"custom-PIXI","p2":"p2","phaser":"phaser"}]},{},[13])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGltYWdlc1xcbmluamFBdGxhcy5qcyIsInNyY1xcanNcXEJsb29kUGFydGljbGUuanMiLCJzcmNcXGpzXFxCb290c3RyYXAuanMiLCJzcmNcXGpzXFxCcmF3bFN0YXRlLmpzIiwic3JjXFxqc1xcR2FtZUNvbnRyb2xsZXIuanMiLCJzcmNcXGpzXFxNZW51U3RhdGUuanMiLCJzcmNcXGpzXFxOaW5qYS5qcyIsInNyY1xcanNcXFJhaW5ibG9vZC5qcyIsInNyY1xcanNcXFNjb3JlLmpzIiwic3JjXFxqc1xcVGV4dHMuanMiLCJzcmNcXGpzXFxab21iaWUuanMiLCJzcmNcXGpzXFxab21iaWVTcGF3bmVyLmpzIiwic3JjXFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sT0FBUCxHQUFpQjtBQUNmLFlBQVE7QUFDTixxQkFBYSxFQUFFLE9BQU8sRUFBRSxHQUFLLENBQVAsRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRyxHQUFyQixFQUEwQixHQUFHLEdBQTdCLEVBQVQsRUFEUDtBQUVOLHFCQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBTCxFQUFVLEdBQUUsSUFBWixFQUFrQixHQUFHLEdBQXJCLEVBQTBCLEdBQUcsR0FBN0IsRUFBVCxFQUZQO0FBR04scUJBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFMLEVBQVUsR0FBRSxJQUFaLEVBQWtCLEdBQUcsR0FBckIsRUFBMEIsR0FBRyxHQUE3QixFQUFULEVBSFA7QUFJTixxQkFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUwsRUFBVSxHQUFFLElBQVosRUFBa0IsR0FBRyxHQUFyQixFQUEwQixHQUFHLEdBQTdCLEVBQVQsRUFKUDtBQUtOLHFCQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBTCxFQUFVLEdBQUUsSUFBWixF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Q0FBa0IsTUFBbEIsQ0FBeUIsZUFBekIsQ0FBeUMsS0FBSyxLQUE5QyxFQUFxRCxNQUFyRCxJQUErRCxhQUF0RSxFQUFxRjtBQUNuRixpQkFBTyxDQUFQLEdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixHQUF3QixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxFQUFuQztBQUNBLGlCQUFPLENBQVAsR0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQWhCLEdBQXlCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxJQUFkLEVBQXBDO0FBQ0Q7O0FBRUQsYUFBSyxHQUFMLENBQVMsTUFBVDtBQUNEO0FBQ0Y7Ozs7RUFwRHdDLGlCQUFPLEs7O2tCQUE3QixhOzs7OztBQ05yQjs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxJQUFQLEdBQWMsUUFBUSxhQUFSLENBQWQ7QUFDQSxPQUFPLEVBQVAsR0FBWSxRQUFRLElBQVIsQ0FBWjtBQUNBLE9BQU8sTUFBUCxHQUFnQixRQUFRLFFBQVIsQ0FBaEI7O0FBRUE7QUFDQSxJQUFNLFlBQVksUUFBUSxhQUFSLENBQWxCO0FBQ0EsSUFBSSxVQUFVLE9BQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZnJhbWVzOiB7XHJcbiAgICBzbGFzaFJpZ2h0MDogeyBmcmFtZTogeyB4OiAgIDAsIHk6MTkyMCwgdzogMTkyLCBoOiAxOTIgfSB9LFxyXG4gICAgc2xhc2hSaWdodDE6IHsgZnJhbWU6IHsgeDogNTc2LCB5OjE5MjAsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoUmlnaHQyOiB7IGZyYW1lOiB7IHg6IDk2MCwgeToxOTIwLCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaFJpZ2h0MzogeyBmcmFtZTogeyB4OiAxOTIsIHk6MTkyMCwgdzogMTkyLCBoOiAxOTIgfSB9LFxyXG4gICAgc2xhc2hSaWdodDQ6IHsgZnJhbWU6IHsgeDogMzg0LCB5OjE5MjAsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoUmlnaHQ1OiB7IGZyYW1lOiB7IHg6IDc2OCwgeToxOTIwLCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcblxyXG4gICAgc2xhc2hMZWZ0MDogeyBmcmFtZTogeyB4OiAgIDAsIHk6IDE1MzYsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoTGVmdDE6IHsgZnJhbWU6IHsgeDogNTc2LCB5OiAxNTM2LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaExlZnQyOiB7IGZyYW1lOiB7IHg6IDk2MCwgeTogMTUzNiwgdzogMTkyLCBoOiAxOTIgfSB9LFxyXG4gICAgc2xhc2hMZWZ0MzogeyBmcmFtZTogeyB4OiAxOTIsIHk6IDE1MzYsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoTGVmdDU6IHsgZnJhbWU6IHsgeDogNzY4LCB5OiAxNTM2LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaExlZnQ0OiB7IGZyYW1lOiB7IHg6IDM4NCwgeTogMTUzNiwgdzogMTkyLCBoOiAxOTIgfSB9LFxyXG5cclxuICAgIHNsYXNoVG9wMDogeyBmcmFtZTogeyB4OiAgIDAsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoVG9wMTogeyBmcmFtZTogeyB4OiA1NzYsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoVG9wMjogeyBmcmFtZTogeyB4OiA5NjAsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoVG9wMzogeyBmcmFtZTogeyB4OiAxOTIsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoVG9wNTogeyBmcmFtZTogeyB4OiA3NjgsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuICAgIHNsYXNoVG9wNDogeyBmcmFtZTogeyB4OiAzODQsIHk6IDEzNDQsIHc6IDE5MiwgaDogMTkyIH0gfSxcclxuXHJcbiAgICBzbGFzaEJvdHRvbTA6IHsgZnJhbWU6IHsgeDogICAwLCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaEJvdHRvbTE6IHsgZnJhbWU6IHsgeDogNTc2LCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaEJvdHRvbTI6IHsgZnJhbWU6IHsgeDogOTYwLCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaEJvdHRvbTM6IHsgZnJhbWU6IHsgeDogMTkyLCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaEJvdHRvbTU6IHsgZnJhbWU6IHsgeDogNzY4LCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcbiAgICBzbGFzaEJvdHRvbTQ6IHsgZnJhbWU6IHsgeDogMzg0LCB5OiAxNzI4LCB3OiAxOTIsIGg6IDE5MiB9IH0sXHJcblxyXG4gICAgZGllMDogeyBmcmFtZTogeyB4OiAgIDAsIHk6IDEyODAsIHc6IDY0LCBoOiA2NCB9IH0sXHJcbiAgICBkaWUxOiB7IGZyYW1lOiB7IHg6ICA2NCwgeTogMTI4MCwgdzogNjQsIGg6IDY0IH0gfSxcclxuICAgIGRpZTI6IHsgZnJhbWU6IHsgeDogMTI4LCB5OiAxMjgwLCB3OiA2NCwgaDogNjQgfSB9LFxyXG4gICAgZGllMzogeyBmcmFtZTogeyB4OiAxOTIsIHk6IDEyODAsIHc6IDY0LCBoOiA2NCB9IH0sXHJcbiAgICBkaWU0OiB7IGZyYW1lOiB7IHg6IDI1NiwgeTogMTI4MCwgdzogNjQsIGg6IDY0IH0gfSxcclxuICAgIGRpZTU6IHsgZnJhbWU6IHsgeDogMzIwLCB5OiAxMjgwLCB3OiA2NCwgaDogNjQgfSB9LFxyXG4gIH0sXHJcbiAgbWV0YToge1xyXG4gICAgaW1hZ2U6IFwiLi9uaW5qYS5wbmdcIixcclxuICAgIHNpemU6IHsgdzogMTUzNiwgaDogMjExMiB9LFxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuY2xhc3MgQmxvb2RQYXJ0aWNsZSBleHRlbmRzIFBoYXNlci5QYXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwga2V5KSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCBnYW1lLmNhY2hlLmdldEJpdG1hcERhdGEoYGJsb29kUGFydGljbGVTaGFkZS0ke2tleX1gKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9vZFBhcnRpY2xlO1xyXG4iLCJpbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XHJcblxyXG4vLy9cclxuLy8vIEFjdHMgYXMgYSBjb250cm9sbGVyIGZvciBhbGwgdGhlIGNvbXBvbmVudHMgdGhhdCBjYW4gd3JhcCB5b3VyIGdhbWUsXHJcbi8vLyBidXQgdGhhdCBhcmUgbm90IGFuIGludHJpbnNpbmN0IHBhcnQgb2YgaXQsXHJcbi8vLyBlLmcuIGNvbW11bmljYXRpb24gd2l0aCBhIHBsYXRmb3JtJ3MgQVBJIChGYWNlYm9vaywgR2FtZUpvbHQsIGV0Yy4uLiksXHJcbi8vLyBicm93c2VyJ3MgQVBJLCB5b3VyIG93biB3ZWJzaXRlIHRoYXQgaG9zdHMgdGhlIGdhbWUsIGV0Yy4uLlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290c3RyYXAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcih0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgTmluamEgZnJvbSAnLi9OaW5qYSc7XHJcbmltcG9ydCBab21iaWVTcGF3bmVyIGZyb20gJy4vWm9tYmllU3Bhd25lcic7XHJcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlJztcclxuaW1wb3J0IFJhaW5ibG9vZCBmcm9tICcuL1JhaW5ibG9vZCc7XHJcblxyXG5cclxuY29uc3QgQWN0aW9ucyA9IHtcclxuICAgIE1PVkVfVVA6IHtcclxuICAgICAga2V5czogW1BoYXNlci5LZXlDb2RlLlcsIFBoYXNlci5LZXlDb2RlLlVQXSxcclxuICAgICAgYnV0dG9uczogW1BoYXNlci5HYW1lcGFkLlhCT1gzNjBfRFBBRF9VUF0sXHJcbiAgICB9LFxyXG4gICAgTU9WRV9ET1dOOiB7XHJcbiAgICAgIGtleXM6IFtQaGFzZXIuS2V5Q29kZS5TLCBQaGFzZXIuS2V5Q29kZS5ET1dOXSxcclxuICAgICAgYnV0dG9uczogW1BoYXNlci5HYW1lcGFkLlhCT1gzNjBfRFBBRF9ET1dOXSxcclxuICAgIH0sXHJcbiAgICBNT1ZFX0xFRlQ6IHtcclxuICAgICAga2V5czogW1BoYXNlci5LZXlDb2RlLkEsIFBoYXNlci5LZXlDb2RlLkxFRlRdLFxyXG4gICAgICBidXR0b25zOiBbUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9EUEFEX0xFRlRdLFxyXG4gICAgfSxcclxuICAgIE1PVkVfUklHSFQ6IHtcclxuICAgICAga2V5czogW1BoYXNlci5LZXlDb2RlLkQsIFBoYXNlci5LZXlDb2RlLlJJR0hUXSxcclxuICAgICAgYnV0dG9uczogW1BoYXNlci5HYW1lcGFkLlhCT1gzNjBfRFBBRF9SSUdIVF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhd2xTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLmdhbWVwYWQgPSBudWxsO1xyXG4gICAgdGhpcy5hY3Rpb25zID0gbnVsbDtcclxuICAgIHRoaXMubmluamEgPSBudWxsO1xyXG4gICAgdGhpcy5ncmFwaGljcyA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIGJpdG1hcEJnOiBudWxsLFxyXG4gICAgICBpbWFnZUJnOiBudWxsLFxyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgb25TY29yZUNoYW5nZTogbnVsbCxcclxuICAgICAgb25ab21iaWVEaWU6IG51bGwsXHJcbiAgICAgIGhpZ2hTY29yZTogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoLi4uYXJncykge1xyXG4gICAgc3VwZXIuY3JlYXRlKC4uLmFyZ3MpO1xyXG5cclxuICAgIC8vIFNpZ25hbCB0aGF0IGZpcmVzIHdoZW4gb25lIG9mIHRob3NlIGJhc3RhcmRzIGRpZVxyXG4gICAgdGhpcy5kYXRhLm9uU2NvcmVDaGFuZ2UgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xyXG4gICAgdGhpcy5kYXRhLmhpZ2hTY29yZSA9IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJykgfCAwKSB8fCAwO1xyXG5cclxuICAgIC8vIEdhbWVwYWQgaW5pdGlhbGl6YXRpb25cclxuICAgIHRoaXMuaW5wdXQuZ2FtZXBhZC5zdGFydCgpO1xyXG4gICAgaWYgKHRoaXMuaW5wdXQuZ2FtZXBhZC5zdXBwb3J0ZWQgJiYgdGhpcy5pbnB1dC5nYW1lcGFkLmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmdhbWVwYWQgPSB0aGlzLmlucHV0LmdhbWVwYWQucGFkMTtcclxuXHJcbiAgICAgIHRoaXMuYWN0aW9ucyA9IE9iamVjdC5rZXlzKEFjdGlvbnMpLnJlZHVjZSgoa2V5TWFwcGluZywgYWN0aW9uTmFtZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGFjdGlvbiA9IEFjdGlvbnNbYWN0aW9uTmFtZV07XHJcblxyXG4gICAgICAgICAgYWN0aW9uLmtleXMgPSBhY3Rpb24ua2V5cyA/IGFjdGlvbi5rZXlzLm1hcChrID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoayk7XHJcbiAgICAgICAgICB9KSA6IFtdO1xyXG5cclxuICAgICAgICAgIGFjdGlvbi5idXR0b25zID0gYWN0aW9uLmJ1dHRvbnMgPyBhY3Rpb24uYnV0dG9ucy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZXBhZC5nZXRCdXR0b24oYnV0dG9uKTtcclxuICAgICAgICAgIH0pLmZpbHRlcihidXR0b24gPT4gISFidXR0b24pIDogW107IC8vIHJlbW92ZSB1bnN1cHBvcnRlZCBidXR0b25zIChlLmcuIG5vIGNvbnRyb2xsZXIgY29uZW5jdGVkLCBidXR0b24gbm90IGV4aXN0aW5nIG9uIGdpdmVuIGNvbnRyb2xsZXIpXHJcblxyXG4gICAgICAgICAga2V5TWFwcGluZ1thY3Rpb25OYW1lXSA9IGFjdGlvbjtcclxuICAgICAgICAgIHJldHVybiBrZXlNYXBwaW5nO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2Ugc3VwcG9ydFxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIubGVmdEJ1dHRvbi5vbkRvd24uYWRkKHRoaXMuX2hhbmRsZU1vdXNlQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgIC8vIHNvbWUgZ3JvdW5kXHJcbiAgICB0aGlzLnN0YWdlLnNldEJhY2tncm91bmRDb2xvcigweDQ0NDQ0NCk7XHJcblxyXG4gICAgLy8gbWFrZSBhIGJpdG1hcCBiYWNrZ3JvdW5kIHRvIHBhaW50IHdpdGggY29sb3JmdWwgYmxvb2RcclxuICAgIGxldCBiaXRtYXBCZyA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwRGF0YSh0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xyXG4gICAgdGhpcy5kYXRhLmJpdG1hcEJnID0gYml0bWFwQmc7XHJcbiAgICBsZXQgaW1hZ2VCZyA9IGJpdG1hcEJnLmFkZFRvV29ybGQoMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICB0aGlzLmRhdGEuaW1hZ2VCZyA9IGltYWdlQmc7XHJcblxyXG4gICAgLy8gbWFrZSB0aG9zZSBwaHlzaWNzIGtpY2sgaW5cclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBuaW5qYS5cclxuICAgIHRoaXMubmluamEgPSBuZXcgTmluamEodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMubmluamEpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgem9tYmllcyBzcGF3bmVyLlxyXG4gICAgdGhpcy5zcGF3bmVyID0gbmV3IFpvbWJpZVNwYXduZXIodGhpcy5nYW1lLCB0aGlzLm5pbmphKTtcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5zcGF3bmVyKTtcclxuICAgIHRoaXMuc3Bhd25lci5jcmVhdGUoKTtcclxuICAgIHRoaXMuZGF0YS5vblpvbWJpZURpZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBzY29yZS5cclxuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUodGhpcy5nYW1lLCA2MDAsIDIwKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuc2NvcmUpO1xyXG4gICAgdGhpcy5zY29yZS5jcmVhdGUoKTtcclxuXHJcbiAgICAvLyBUaGUgUmFpbmJsb29kXHJcbiAgICB0aGlzLnJhaW5ibG9vZCA9IG5ldyBSYWluYmxvb2QodGhpcy5nYW1lLCA1MCwgNTApO1xyXG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5yYWluYmxvb2QpO1xyXG4gICAgdGhpcy5yYWluYmxvb2QuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnJhaW5ibG9vZC5kYXRhLm9uUmFpbmJsb29kQ2hhcmdlZC5hZGQodGhpcy5faGFuZGxlUmFpbmJsb29kQ2hhcmdlZCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLnByZWxvYWQoLi4uYXJncyk7XHJcblxyXG4gICAgTmluamEucHJlbG9hZCh0aGlzLmdhbWUpO1xyXG4gIH1cclxuXHJcbiAgX3Byb2Nlc3NDYWxsYmFjayhuaW5qYSwgem9tYmllKSB7XHJcbiAgICAvLyBoYW5kbGUgY29sbGlzaW9uIGluIHRoZSBgcHJvY2Vzc0NhbGxiYWNrYCBvZiBgb3ZlcmxhcGAgdG8gZm9vbFxyXG4gICAgLy8gIHRoZSBwaHlzaWNzIGludG8gdGhpbmtpbmcgdGhhdCB0aGVyZSB3YXMgbm8gY29sbGlzaW9uLFxyXG4gICAgLy8gc28gdGhlIE5pbmphIG1vdmVtZW50IGlzIG5vdCBhbHRlcmVkLlxyXG4gICAgaWYgKCF6b21iaWUuYWxpdmUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5uaW5qYS5kYXRhLmlzU2xhc2hpbmcpIHtcclxuICAgICAgem9tYmllLmRpZSgpO1xyXG4gICAgICB0aGlzLmRhdGEub25ab21iaWVEaWUuZGlzcGF0Y2goem9tYmllKTtcclxuICAgICAgdGhpcy5fYWRkUG9pbnRzKDEwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5pbmphLmRpZSgpO1xyXG4gICAgICB0aGlzLl9hZGRQb2ludHMoMCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXZvaWQgc3RvcGluZyB0aGUgbmluamEgbW92ZW1lbnRcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9pc0Rvd24oYWN0aW9uKSB7XHJcbiAgICAgIGlmIChhY3Rpb24ua2V5cy5zb21lKGsgPT4gay5pc0Rvd24pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgaWYgKGFjdGlvbi5idXR0b25zLnNvbWUoayA9PiBrLmlzRG93bikpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfYWRkUG9pbnRzKHBvaW50cywgZmluYWxTY29yZSkge1xyXG4gICAgdGhpcy5kYXRhLnNjb3JlICs9IHBvaW50cztcclxuICAgIGlmICh0aGlzLmRhdGEuc2NvcmUgPiB0aGlzLmRhdGEuaGlnaFNjb3JlKSB7XHJcbiAgICAgIHRoaXMuZGF0YS5oaWdoU2NvcmUgPSB0aGlzLmRhdGEuc2NvcmU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kYXRhLmhpZ2hTY29yZSA+PSB0aGlzLmRhdGEuc2NvcmUgJiYgZmluYWxTY29yZSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgdGhpcy5kYXRhLmhpZ2hTY29yZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEub25TY29yZUNoYW5nZS5kaXNwYXRjaCh0aGlzLmRhdGEuc2NvcmUsIHRoaXMuZGF0YS5oaWdoU2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0dyb3VwVG9CYWNrZ3JvdW5kKGdyb3VwKSB7XHJcbiAgICB0aGlzLmRhdGEuYml0bWFwQmcuZHJhd0dyb3VwKGdyb3VwKTtcclxuICAgIHRoaXMuZGF0YS5iaXRtYXBCZy5kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTW91c2VDbGljayhidXR0b24sIHZhbHVlKSB7XHJcbiAgICBpZiAodGhpcy5uaW5qYS5kYXRhLmlzU2xhc2hpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBsZXQgYW5nbGUgPSB0aGlzLnBoeXNpY3MuYXJjYWRlLmFuZ2xlVG9Qb2ludGVyKHRoaXMubmluamEpO1xyXG4gICAgbGV0IHBvaW50ID0gbmV3IFBoYXNlci5MaW5lKCkuZnJvbUFuZ2xlKDAsIDAsIGFuZ2xlLCAxKTtcclxuICAgIHRoaXMubmluamEuc2xhc2gocG9pbnQuZW5kKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVSYWluYmxvb2RDaGFyZ2VkKCkge1xyXG4gICAgY29uc29sZS5kZWJ1ZygnUmFpbmJsb29kIENIQVJHRUQnKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICBzdXBlci51cGRhdGUoLi4uYXJncyk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5pbmphIHNsYXNoZWQgYSBab21iaWUuXHJcbiAgICB0aGlzLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5uaW5qYSxcclxuICAgICAgdGhpcy5zcGF3bmVyLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLl9wcm9jZXNzQ2FsbGJhY2suYmluZCh0aGlzKSxcclxuICAgICAgdGhpcyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGNhZGF2ZXJzXHJcbiAgICB0aGlzLnNwYXduZXIuZm9yRWFjaCh6b21iaWUgPT4ge1xyXG4gICAgICBpZiAoIXpvbWJpZS5leGlzdHMpIHRoaXMuc3Bhd25lci5yZW1vdmUoem9tYmllLCB0cnVlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gICAgLy8gaWYgKCF0aGlzLm5pbmphLmFsaXZlKSB7XHJcbiAgICAvLyAgIHRoaXMud29ybGQucmVtb3ZlKHRoaXMubmluamEsIHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIEF2b2lkIG92ZXJsYXBwaW5nIHpvbWJpZXNcclxuICAgIHRoaXMucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLnNwYXduZXIsIHRoaXMuc3Bhd25lcik7XHJcblxyXG4gICAgaWYgKCF0aGlzLm5pbmphLmRhdGEuaXNEeWluZykge1xyXG4gICAgICBsZXQgeCA9IDAsIHkgPSAwO1xyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX1VQKSkge1xyXG4gICAgICAgIHkgLT0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX1JJR0hUKSkge1xyXG4gICAgICAgIHggKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5faXNEb3duKHRoaXMuYWN0aW9ucy5NT1ZFX0RPV04pKSB7XHJcbiAgICAgICAgeSArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9pc0Rvd24odGhpcy5hY3Rpb25zLk1PVkVfTEVGVCkpIHtcclxuICAgICAgICB4IC09IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLmdhbWVwYWQuYXhpcyhQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX1NUSUNLX0xFRlRfWCkpICsgTWF0aC5hYnModGhpcy5nYW1lcGFkLmF4aXMoUGhhc2VyLkdhbWVwYWQuWEJPWDM2MF9TVElDS19MRUZUX1kpKSA+IDAuNSkge1xyXG4gICAgICAgIHggPSB0aGlzLmdhbWVwYWQuYXhpcyhQaGFzZXIuR2FtZXBhZC5YQk9YMzYwX1NUSUNLX0xFRlRfWCk7XHJcbiAgICAgICAgeSA9IHRoaXMuZ2FtZXBhZC5heGlzKFBoYXNlci5HYW1lcGFkLlhCT1gzNjBfU1RJQ0tfTEVGVF9ZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHZlY3RvciA9IG5ldyBQaGFzZXIuUG9pbnQoeCwgeSk7XHJcbiAgICAgIC8vIFRPRE8gZmluZS10dW5lIHRoaXMgdGhyZXNob2xkIGZvciBhbmFsb2cgc3RpY2sgdG8gd29yayB3ZWxsXHJcbiAgICAgIGlmICh2ZWN0b3IuZ2V0TWFnbml0dWRlKCkgPj0gMC41KSB7XHJcbiAgICAgICAgdGhpcy5uaW5qYS5zbGFzaCh2ZWN0b3Iubm9ybWFsaXplKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoLi4uYXJncykge1xyXG4gICAgc3VwZXIucmVuZGVyKC4uLmFyZ3MpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBNZW51U3RhdGUgZnJvbSAnLi9NZW51U3RhdGUnO1xyXG5pbXBvcnQgQnJhd2xTdGF0ZSBmcm9tICcuL0JyYXdsU3RhdGUnO1xyXG5cclxuY29uc3QgR0FNRV9XSURUSCA9IDEwMjQ7XHJcbmNvbnN0IEdBTUVfSEVJR0hUID0gNzY4O1xyXG5jb25zdCBUUkFOU1BBUkVOVCA9IGZhbHNlO1xyXG5jb25zdCBBTlRJQUxJQVMgPSBmYWxzZTtcclxuXHJcbi8vL1xyXG4vLy8gVGhlIGNvbnRyb2xsZXIgZm9yIHlvdXIgZ2FtZS5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoYm9vdHN0cmFwKSB7XHJcbiAgICAvLyBpbnN0YW50aWF0ZSB0aGUgUGhhc2VyIGdhbWUuIFRoaW5ncyBhcmUgZ2V0dGluZyBzZXJpb3VzLlxyXG4gICAgc3VwZXIoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIFBoYXNlci5BVVRPLCAncGhhc2VyR2FtZUNvbnRhaW5lcicsIG51bGwsIFRSQU5TUEFSRU5ULCBBTlRJQUxJQVMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbmQgYWRkIGVhY2ggb2YgdGhlIGdhbWUgc3RhdGVzLlxyXG4gICAgdGhpcy5zdGF0ZS5hZGQoJ21lbnUnLCBNZW51U3RhdGUsIGZhbHNlKTtcclxuICAgIHRoaXMuc3RhdGUuYWRkKCdicmF3bCcsIEJyYXdsU3RhdGUsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBTdGFydCB0aGUgaW5pdGlhbCBnYW1lIHN0YXRlLlxyXG4gICAgdGhpcy5zdGF0ZS5zdGFydCgnbWVudScpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgdGV4dHMgZnJvbSAnLi9UZXh0cy5qcyc7XHJcblxyXG5jbGFzcyBNZW51U3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5nb1RleHQgPSBudWxsO1xyXG4gICAgdGhpcy5leHBsYWluYXRpb25UZXh0ID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZXBhZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvLyBHYW1lcGFkIGluaXRpYWxpemF0aW9uXHJcbiAgICB0aGlzLmlucHV0LmdhbWVwYWQuc3RhcnQoKTtcclxuICAgIGlmICh0aGlzLmlucHV0LmdhbWVwYWQuc3VwcG9ydGVkICYmIHRoaXMuaW5wdXQuZ2FtZXBhZC5hY3RpdmUpIHtcclxuICAgICAgdGhpcy5nYW1lcGFkID0gdGhpcy5pbnB1dC5nYW1lcGFkLnBhZDE7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZC5hZGRDYWxsYmFja3ModGhpcywge1xyXG4gICAgICAgIG9uRG93bjogdGhpcy5vbkdhbWVwYWRCdXR0b25Eb3duLmJpbmQodGhpcyksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQub25Eb3duQ2FsbGJhY2sgPSB0aGlzLm9uS2V5Ym9hcmRLZXlEb3duLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2Ugc3VwcG9ydFxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIubGVmdEJ1dHRvbi5vbkRvd24uYWRkKHRoaXMuX2hhbmRsZU1vdXNlQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhZ2Uuc2V0QmFja2dyb3VuZENvbG9yKDB4MjIyMjIyKTtcclxuXHJcbiAgICB0aGlzLmdvVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy53b3JsZC5jZW50ZXJYLCA1MDAsIHRleHRzLmhpdEFLZXksIHtcclxuICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250OiAnQXJpYWwgQmxhY2snLFxyXG4gICAgICBmb250U2l6ZTogNjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZmlsbDogJyNmZmZmZmYnLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdvVGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgdGhpcy5leHBsYWluYXRpb25UZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLndvcmxkLmNlbnRlclgsIDIwMCwgdGV4dHMuaW50cm9UZXh0LCB7XHJcbiAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgIGZvbnQ6ICdBcmlhbCBCbGFjaycsXHJcbiAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgZmlsbDogJyNEREREREQnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5leHBsYWluYXRpb25UZXh0LndvcmRXcmFwID0gdHJ1ZTtcclxuICAgIHRoaXMuZXhwbGFpbmF0aW9uVGV4dC53b3JkV3JhcFdpZHRoID0gdGhpcy5nYW1lLndpZHRoIC0gNTA7XHJcbiAgICB0aGlzLmV4cGxhaW5hdGlvblRleHQuYW5jaG9yLnNldCgwLjUpO1xyXG4gIH1cclxuXHJcbiAgc2h1dGRvd24oKSB7XHJcbiAgICB0aGlzLmdvVGV4dCA9IG51bGw7XHJcbiAgICB0aGlzLmV4cGxhaW5hdGlvblRleHQgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lcGFkLm9uRG93bkNhbGxiYWNrID0gbnVsbDtcclxuICAgIHRoaXMuZ2FtZXBhZCA9IG51bGw7XHJcbiAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQub25Eb3duQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIubGVmdEJ1dHRvbi5vbkRvd24ucmVtb3ZlKHRoaXMuX2hhbmRsZU1vdXNlQ2xpY2ssIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25HYW1lcGFkQnV0dG9uRG93bihidXR0b25JRCwgdmFsdWUpIHtcclxuICAgIHRoaXMuc3RhdGUuc3RhcnQoJ2JyYXdsJyk7XHJcbiAgfVxyXG5cclxuICBvbktleWJvYXJkS2V5RG93bihldmVudCkge1xyXG4gICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdicmF3bCcpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZU1vdXNlQ2xpY2soYnV0dG9uSUQsIHZhbHVlKSB7XHJcbiAgICB0aGlzLnN0YXRlLnN0YXJ0KCdicmF3bCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVN0YXRlO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmNvbnN0IGF0bGFzSlNPTkhhc2ggPSByZXF1aXJlKCcuLi9pbWFnZXMvbmluamFBdGxhcycpO1xyXG5cclxuXHJcbmNvbnN0IE9SSUdJTiA9IG5ldyBQaGFzZXIuUG9pbnQoMCwgMCk7XHJcbmNvbnN0IFJFQUNUSU9OX1NQRUVEID0gMC4zMDA7XHJcbmNvbnN0IEZSQU1FUkFURSA9IDE1O1xyXG5cclxuXHJcbmNsYXNzIE5pbmphIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgZ2FtZS53b3JsZC5jZW50ZXJYLCBnYW1lLndvcmxkLmNlbnRlclksICduaW5qYS1zcHJpdGVzaGVldCcsICdzbGFzaFJpZ2h0MCcpO1xyXG5cclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgaXNTbGFzaGluZzogZmFsc2UsXHJcbiAgICAgIGlzRHlpbmc6IGZhbHNlLFxyXG4gICAgICB0c1NpbmNlTGFzdE1vdmU6IDAsXHJcbiAgICAgIHNsYXNoRGlyZWN0aW9uOiBuZXcgUGhhc2VyLlBvaW50KDAsIDApLFxyXG4gICAgICBkeWluZ0FuaW1hdGlvbjogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hbmNob3IgPSBuZXcgUGhhc2VyLlBvaW50KDAuNSwgMC41KTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIG5pbmphIGFuaW1hdGlvbnNcclxuICAgIFsnUmlnaHQnLCAnTGVmdCcsICdUb3AnLCAnQm90dG9tJ10uZm9yRWFjaChkaXJlY3Rpb24gPT4ge1xyXG4gICAgICBsZXQgZnJhbWVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGk9MDsgaTw9NTsgaSsrKSB7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goYHNsYXNoJHtkaXJlY3Rpb259JHtpfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoYG5pbmphU2xhc2gke2RpcmVjdGlvbn1gLCBmcmFtZXMsIEZSQU1FUkFURSwgZmFsc2UsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGk9MDsgaTw9NTsgaSsrKSB7XHJcbiAgICAgIGZyYW1lcy5wdXNoKGBkaWUke2l9YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGEuZHlpbmdBbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnMuYWRkKCduaW5qYURpZScsIGZyYW1lcywgRlJBTUVSQVRFLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgdGhpcy5kYXRhLmR5aW5nQW5pbWF0aW9uLm9uQ29tcGxldGUuYWRkKHRoaXMub25EaWVBbmltYXRpb25Db21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBFbmFibGUgcGh5c2ljcyBmb3IgdGhpcyBlbnRpdHlcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XHJcbiAgICAvLyB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuICAgIHRoaXMuc2V0U2xhc2hpbmcoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuYm9keS5vbk1vdmVDb21wbGV0ZS5hZGQodGhpcy5vbk1vdmVDb21wbGV0ZS5iaW5kKHRoaXMpLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmJvZHkub25Db2xsaWRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuICAgIHRoaXMuYm9keS5vbkNvbGxpZGUuYWRkKHRoaXMub25Db2xsaWRlLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSguLi5hcmdzKTtcclxuXHJcbiAgICB0aGlzLmRhdGEudHNTaW5jZUxhc3RNb3ZlICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xyXG5cclxuICAgIC8vIFN0b3AgaWYgd2UgaGl0IGEgd29ybGQgYm91bmQuXHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuY29sbGlkZSh0aGlzLCB0aGlzLmdhbWUud29ybGQpO1xyXG4gICAgaWYgKHRoaXMuZGF0YS5pc1NsYXNoaW5nKSB7XHJcbiAgICAgIGxldCBiID0gdGhpcy5ib2R5LmJsb2NrZWQ7XHJcbiAgICAgIGlmIChiLnVwIHx8IGIuZG93biB8fCBiLmxlZnQgfHwgYi5yaWdodCkge1xyXG4gICAgICAgIHRoaXMuYm9keS5zdG9wTW92ZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBuaW5qYSBpcyBub3QgeWV0IHJlY292ZXJlZCBmcm9tIGhpcyBsYXN0IG1vdmUsIHNvIGhlIGNhbid0IGRvIGFuIGFjdGlvbi5cclxuICAgIGlmICh0aGlzLmRhdGEudHNTaW5jZUxhc3RNb3ZlIDwgUkVBQ1RJT05fU1BFRUQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHJlYWR5LCB0aGUgbmluamEgc2xhc2hlcy5cclxuICAgIGlmICghdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uLmlzWmVybygpICYmICF0aGlzLmRhdGEuaXNTbGFzaGluZykge1xyXG4gICAgICB0aGlzLnNldFNsYXNoaW5nKHRydWUpO1xyXG5cclxuICAgICAgLy8gdXBkYXRlcyB0aGUgcGxheWVyIHZlbG9jaXR5XHJcbiAgICAgIGxldCBkdXJhdGlvbiA9IDE3NTtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gMjI1O1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gT1JJR0lOLmFuZ2xlKHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuYm9keS5tb3ZlVG8oZHVyYXRpb24sIGRpc3RhbmNlLCBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgLy8gcGxheSB0aGUgYW5pbWF0aW9uIG1hdGhpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgbmluamFcclxuICAgICAgaWYgKE1hdGguYWJzKHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbi54KSA+IE1hdGguYWJzKHRoaXMuZGF0YS5zbGFzaERpcmVjdGlvbi55KSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2xhc2hEaXJlY3Rpb24ueCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCduaW5qYVNsYXNoUmlnaHQnLCBGUkFNRVJBVEUsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ25pbmphU2xhc2hMZWZ0JywgRlJBTUVSQVRFLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2xhc2hEaXJlY3Rpb24ueSA+IDApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCduaW5qYVNsYXNoQm90dG9tJywgRlJBTUVSQVRFLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCduaW5qYVNsYXNoVG9wJywgRlJBTUVSQVRFLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc29tZSBkZWJ1ZyBpbmZvXHJcbiAgICAvLyBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgLy8gICB0aGlzLmdhbWUuZGVidWcuYm9keSh0aGlzKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHNsYXNoKHApIHtcclxuICAgIGlmICh0aGlzLmRhdGEuaXNEeWluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGlmIChwLmlzWmVybygpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5kYXRhLnNsYXNoRGlyZWN0aW9uID0gcDtcclxuICB9XHJcblxyXG4gIHNldFNsYXNoaW5nKHNsYXNoaW5nKSB7XHJcbiAgICB0aGlzLmRhdGEuaXNTbGFzaGluZyA9IHNsYXNoaW5nO1xyXG4gICAgaWYgKHNsYXNoaW5nKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50c1NpbmNlTGFzdE1vdmUgPSAwO1xyXG4gICAgICB0aGlzLmJvZHkuc2V0Q2lyY2xlKHRoaXMud2lkdGgvMiwgMCwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGEuc2xhc2hEaXJlY3Rpb24gPSBPUklHSU47XHJcbiAgICAgIHRoaXMuYm9keS5zZXRDaXJjbGUoMzIsIHRoaXMud2lkdGgvMi0zMiwgdGhpcy53aWR0aC8yLTMyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ29sbGlkZSgpIHtcclxuICAgIHRoaXMuc2V0U2xhc2hpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3ZlQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLnNldFNsYXNoaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uRGllQW5pbWF0aW9uQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmFsaXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YS5pc0R5aW5nKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9ucy5wbGF5KCduaW5qYURpZScsIEZSQU1FUkFURSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmRhdGEuaXNEeWluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5OaW5qYS5wcmVsb2FkID0gKGdhbWUpID0+IHtcclxuICBnYW1lLmxvYWQuYXRsYXNKU09OSGFzaCgnbmluamEtc3ByaXRlc2hlZXQnLCAnaW1hZ2VzL25pbmphLnBuZycsIG51bGwvKmF0bGFzVVJMKi8sIGF0bGFzSlNPTkhhc2gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmluamE7XHJcbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhaW5ibG9vZCBleHRlbmRzIFBoYXNlci5Hcm91cCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgbnVsbCwgJ1JhaW5ibG9vZCcpO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIHJlZDogZmFsc2UsXHJcbiAgICAgICAgb3JhbmdlOiBmYWxzZSxcclxuICAgICAgICB5ZWxsb3c6IGZhbHNlLFxyXG4gICAgICAgIGdyZWVuOiBmYWxzZSxcclxuICAgICAgICBjeWFuOiBmYWxzZSxcclxuICAgICAgICBibHVlOiBmYWxzZSxcclxuICAgICAgICB2aW9sZXQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJpcGVzOiBudWxsLFxyXG4gICAgICBvblJhaW5ibG9vZENoYW5nZWQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgc3VwZXIuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gV2hlbiB0aGF0IFJhaW5ibG9vZCBpcyBjaGFyZ2VkLCBzb21ldGhpbmcgZ3JlYXQgd2lsbCBoYXBwZW5zXHJcbiAgICB0aGlzLmRhdGEub25SYWluYmxvb2RDaGFyZ2VkID0gbmV3IFBoYXNlci5TaWduYWwoKTtcclxuXHJcbiAgICAvLyBEcmF3IHRoYXQgUmFpbmJsb29kXHJcbiAgICB0aGlzLmRhdGEuc3RyaXBlcyA9IFJhaW5ibG9vZC5Db2xvcnMubWFwKChjb2xvciwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFJhaW5ibG9vZFN0cmlwZShjb2xvciwgaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIEdyYXBoaWNzIGNvbXBvbmVudCB0byBkcmF3IHRoZSBSYWluYmxvb2QgaW5cclxuICAgIHRoaXMuZGF0YS5yYWluYmxvb2RHcmFwaGljcyA9IG5ldyBQaGFzZXIuR3JhcGhpY3ModGhpcy5nYW1lLCAwLCAwKTtcclxuICAgIHRoaXMuYWRkKHRoaXMuZGF0YS5yYWluYmxvb2RHcmFwaGljcyk7XHJcblxyXG4gICAgLy8gR2V0IG5vdGlmaWVkIHdoZW4gYSB6b21pZSBkaWVzXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhdGVzLmJyYXdsLmRhdGEub25ab21iaWVEaWUuYWRkKHRoaXMuX2hhbmRsZVpvbWJpZURpZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgc3RyaXBlcyBvZiB0aGUgcmFpbmJsb29kXHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5kYXRhLnN0cmlwZXMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIHRoaXMuX2RyYXdSYWluYmxvb2RTdHJpcGUodGhpcy5kYXRhLnN0cmlwZXNbaV0sIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG5cclxuICAgIC8vIERyYXcgdGhlIHN0cmlwZXMgb2YgdGhlIHJhaW5ibG9vZFxyXG4gICAgdGhpcy5kYXRhLnN0cmlwZXMuZm9yRWFjaChzdHJpcGUgPT4ge1xyXG4gICAgICBpZiAoc3RyaXBlLmRpcnR5KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhd1JhaW5ibG9vZFN0cmlwZShzdHJpcGUpO1xyXG4gICAgICAgIHN0cmlwZS5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiByYWluYmxvb2QgaXMgY29tcGxldGVcclxuICAgIGlmICh0aGlzLmRhdGEuc3RyaXBlcy5ldmVyeShzdHJpcGUgPT4gc3RyaXBlLmJyaWdodCkpIHtcclxuICAgICAgLy8gZGlzcGF0Y2hcclxuICAgICAgdGhpcy5kYXRhLm9uUmFpbmJsb29kQ2hhcmdlZC5kaXNwYXRjaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVab21iaWVEaWUoem9tYmllKSB7XHJcbiAgICAvLyBsaWdodCB1cCB0aGUgZ2l2ZW4gY29sb3JcclxuICAgIHRoaXMuZGF0YS5zdHJpcGVzLmZpbHRlcihzdHJpcGUgPT4ge1xyXG4gICAgICByZXR1cm4gc3RyaXBlLmNvbG9yLmVxdWFscyh6b21iaWUuZGF0YS5jb2xvcik7XHJcbiAgICB9KS5mb3JFYWNoKHN0cmlwZSA9PiB7XHJcbiAgICAgIHN0cmlwZS5icmlnaHQgPSB0cnVlO1xyXG4gICAgICBzdHJpcGUuZGlydHkgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZHJhd1JhaW5ibG9vZFN0cmlwZShzdHJpcGUpIHtcclxuICAgIGxldCByYWRpdXMgPSA1MDtcclxuICAgIGxldCBzcGFjaW5nID0gMTA7XHJcbiAgICBsZXQgY3ggPSAxMDA7XHJcbiAgICBsZXQgY3kgPSAxMDA7XHJcbiAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XHJcbiAgICBsZXQgZW5kQW5nbGUgPSBQaGFzZXIuTWF0aC5kZWdUb1JhZCgxODApO1xyXG4gICAgbGV0IGFudGljbG9ja3dpc2UgPSB0cnVlO1xyXG4gICAgbGV0IGcgPSB0aGlzLmRhdGEucmFpbmJsb29kR3JhcGhpY3M7XHJcbiAgICBsZXQgYWxwaGEgPSBzdHJpcGUuYnJpZ2h0ID8gMSA6IDAuMTtcclxuICAgIGcubGluZVN0eWxlKHNwYWNpbmcsIHN0cmlwZS5jb2xvci5jb2xvci5jb2xvciwgYWxwaGEpO1xyXG4gICAgZy5hcmMoY3gsIGN5LCByYWRpdXMgKyBzdHJpcGUuaW5kZXgqc3BhY2luZywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGFudGljbG9ja3dpc2UpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFJhaW5ibG9vZENvbG9yIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBodWUpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHtcclxuICAgICAgdmFsdWU6IG5hbWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbG9yJywge1xyXG4gICAgICB2YWx1ZTogUmFpbmJsb29kQ29sb3IuQ29sb3JXaGVlbFtodWVdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdodWUnLCB7XHJcbiAgICAgIGdldDogKCkgPT4geyByZXR1cm4gTWF0aC5yb3VuZCgzNjAgKiB0aGlzLmNvbG9yLmgpO30sXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFJhaW5ibG9vZENvbG9yKHRoaXMubmFtZSwgdGhpcy5odWUpO1xyXG4gIH1cclxuXHJcbiAgZXF1YWxzKGNvbG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lID09PSBjb2xvci5uYW1lO1xyXG4gIH1cclxuXHJcbiAgdG9IZXhTdHJpbmcocHJlZml4ID0gJycpIHtcclxuICAgIHJldHVybiBQaGFzZXIuQ29sb3IuUkdCdG9TdHJpbmcoXHJcbiAgICAgIHRoaXMuY29sb3IucixcclxuICAgICAgdGhpcy5jb2xvci5nLFxyXG4gICAgICB0aGlzLmNvbG9yLmJcclxuICAgICkucmVwbGFjZSgnIycsIHByZWZpeCk7XHJcbiAgfVxyXG59XHJcblJhaW5ibG9vZENvbG9yLkNvbG9yV2hlZWwgPSBQaGFzZXIuQ29sb3IuSFNWQ29sb3JXaGVlbCgxLCAxKTtcclxuXHJcblxyXG4vLyBUaGUgc2V2ZW4gY29sb3JzIG9mIHRoZSBSYWluYmxvb2RcclxuUmFpbmJsb29kLkNvbG9ycyA9IFtcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ3JlZCcsIDApLFxyXG4gIG5ldyBSYWluYmxvb2RDb2xvcignb3JhbmdlJywgMzApLFxyXG4gIG5ldyBSYWluYmxvb2RDb2xvcigneWVsbG93JywgNjApLFxyXG4gIG5ldyBSYWluYmxvb2RDb2xvcignZ3JlZW4nLCAxMjApLFxyXG4gIG5ldyBSYWluYmxvb2RDb2xvcignY3lhbicsIDE4MCksXHJcbiAgbmV3IFJhaW5ibG9vZENvbG9yKCdibHVlJywgMjQwKSxcclxuICBuZXcgUmFpbmJsb29kQ29sb3IoJ3Zpb2xldCcsIDMyMClcclxuXTtcclxuXHJcblxyXG5jbGFzcyBSYWluYmxvb2RTdHJpcGUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbG9yLCBpbmRleCkge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgIHRoaXMuYnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBQaGFzZXIuR3JvdXAge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHNjb3JlTGFiZWxUZXh0OiBudWxsLFxyXG4gICAgICBzY29yZVZhbHVlVGV4dDogbnVsbCxcclxuICAgICAgaGlnaFNjb3JlTGFiZWxUZXh0OiBudWxsLFxyXG4gICAgICBoaWdoU2NvcmVWYWx1ZVRleHQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlICgpIHtcclxuICAgIHRoaXMuZGF0YS5oaWdoU2NvcmVMYWJlbFRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgICdoaWdoIHNjb3JlICcsXHJcbiAgICAgIHtcclxuICAgICAgICBmb250OiAnYm9sZCAyMHB0IEFyaWFsJyxcclxuICAgICAgICBmaWxsOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5kYXRhLmhpZ2hTY29yZVZhbHVlVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChcclxuICAgICAgdGhpcy5kYXRhLmhpZ2hTY29yZUxhYmVsVGV4dC53aWR0aCwgMCxcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXRlcy5icmF3bC5kYXRhLmhpZ2hTY29yZSxcclxuICAgICAge1xyXG4gICAgICAgIGZvbnQ6ICdib2xkIDIwcHQgQXJpYWwnLFxyXG4gICAgICAgIGZpbGw6ICdyZ2IoMjU1LCAyNTUsIDApJyxcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5kYXRhLnNjb3JlTGFiZWxUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxyXG4gICAgICAwLCB0aGlzLmRhdGEuaGlnaFNjb3JlTGFiZWxUZXh0LmhlaWdodCxcclxuICAgICAgJ3Njb3JlICcsXHJcbiAgICAgIHtcclxuICAgICAgICBmb250OiAnYm9sZCAyMHB0IEFyaWFsJyxcclxuICAgICAgICBmaWxsOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcclxuICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5kYXRhLnNjb3JlVmFsdWVUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxyXG4gICAgICB0aGlzLmRhdGEuaGlnaFNjb3JlTGFiZWxUZXh0LndpZHRoLCB0aGlzLmRhdGEuaGlnaFNjb3JlTGFiZWxUZXh0LmhlaWdodCxcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXRlcy5icmF3bC5kYXRhLnNjb3JlLFxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udDogJ2JvbGQgMjBwdCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbDogJ3JnYigyNTUsIDI1NSwgMCknLFxyXG4gICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhdGVzLmJyYXdsLmRhdGEub25TY29yZUNoYW5nZS5hZGQodGhpcy5faGFuZGxlU2NvcmVDaGFuZ2UsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVNjb3JlQ2hhbmdlKHNjb3JlLCBoaWdoU2NvcmUpIHtcclxuICAgIHRoaXMuZGF0YS5zY29yZVZhbHVlVGV4dC50ZXh0ID0gc2NvcmU7XHJcbiAgICB0aGlzLmRhdGEuaGlnaFNjb3JlVmFsdWVUZXh0LnRleHQgPSBoaWdoU2NvcmU7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXRlcy5icmF3bC5kYXRhLm9uU2NvcmVDaGFuZ2UucmVtb3ZlKHRoaXMuX2hhbmRsZVNjb3JlQ2hhbmdlLCB0aGlzKTtcclxuICB9XHJcbn1cclxuIiwibGV0IHRleHRzID0ge1xyXG4gIGludHJvVGV4dDpcclxuYENsaWNrIG9uIHRoZSBzY3JlZW4gb3IgdXNlIGFuYWxvZyBzdGljayB0byBtb3ZlIHRoZSBuaW5qYSAoYmxhY2sgZG90KSBvZiBhIGZpeGVkIGRpc3RhbmNlLlxyXG5UaGVyZSBpcyBhIGRlbGF5IGJlZm9yZSB5b3UgY2FuIG1vdmUgYWdhaW4uXHJcbklmIHlvdSBtb3ZlIHRocm91Z2ggYSB6b21iaWUgKGNvbG9yIGRvdCksIGl0IGtpbGxzIGl0LlxyXG5JZiBhIHpvbWJpZSB0b3VjaGVzIHlvdSB3aGlsZSB5b3UgZG9uJ3QgbW92ZSwgeW91IGRpZS5cclxuRWFjaCB0aW1lIHlvdSBraWxsIGEgem9tYmllLCB0aGUgcmFpbmJvdyBsaWdodCBpdCdzIGNvbG9yLlxyXG5XaGVuIHRoZSByYWluYm93IGlzIGFsbCBsaWdodCB1cCwgbm90aGluZyBoYXBwZW5zLlxyXG5Gb3Igbm93LmAsXHJcbiAgaGl0QUtleTogJ0hpdCBhIGtleVxcbm9yIGNsaWNrIHNvbWV3aGVyZS5cXG5OT1chJyxcclxufTtcclxuXHJcbmV4cG9ydCB7IHRleHRzIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgQmxvb2RQYXJ0aWNsZSBmcm9tICcuL0Jsb29kUGFydGljbGUnO1xyXG5cclxuY29uc3QgRElBTUVURVIgPSAyMDtcclxuY29uc3QgTUlOX1NQRUVEID0gNDA7XHJcbmNvbnN0IE1BWF9TUEVFRCA9IDE1MDtcclxuY29uc3QgTUlOX1JFQUNUSU9OX1NQRUVEID0gMC43NTA7XHJcbmNvbnN0IE1BWF9SRUFDVElPTl9TUEVFRCA9IDIuNTAwO1xyXG5cclxuY29uc3QgQkxPT0RfRFJPUFNfQ09VTlQgPSAxMDtcclxuY29uc3QgTUFYX0JMT09EX1NQRUVEID0gMTAwO1xyXG5jb25zdCBCTE9PRF9EUk9QU19MSUZFU1BBTiA9IDI1MDtcclxuXHJcbmNsYXNzIFpvbWJpZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGNvbG9yLCBuaW5qYSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSk7XHJcblxyXG4gICAgbGV0IGJtcERhdGEgPSBnYW1lLm1ha2UuYml0bWFwRGF0YShESUFNRVRFUiwgRElBTUVURVIpO1xyXG4gICAgbGV0IGhleENvbG9yID0gY29sb3IudG9IZXhTdHJpbmcoJyMnKTtcclxuICAgIGJtcERhdGEuY2lyY2xlKERJQU1FVEVSLzIsIERJQU1FVEVSLzIsIERJQU1FVEVSLzIsIGhleENvbG9yKTtcclxuICAgIHRoaXMudGV4dHVyZSA9IGJtcERhdGEudGV4dHVyZTtcclxuXHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgbmluamE6IG5pbmphLFxyXG4gICAgICByZWFjdGlvblNwZWVkOiB0aGlzLmdhbWUucm5kLmJldHdlZW4oTUlOX1JFQUNUSU9OX1NQRUVELCBNQVhfUkVBQ1RJT05fU1BFRUQpLFxyXG4gICAgICB0c05leHRBY3Rpb246IDAsXHJcbiAgICAgIGJsb29kRW1pdHRlcjogbnVsbCxcclxuICAgICAgY29ycHNlQWdlOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBXYWl0IGJlZm9yZSBzdGFydGluZyB0byBtb3ZlLlxyXG4gICAgdGhpcy5kYXRhLnRzTmV4dEFjdGlvbiA9IHRoaXMuZGF0YS5yZWFjdGlvblNwZWVkO1xyXG5cclxuICAgIC8vIEVuYWJsZSBwaHlzaWNzIGZvciB0aGlzIGVudGl0eVxyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzKTtcclxuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSBmYWxzZTtcclxuICAgIHRoaXMuYm9keS5ib3VuY2Uuc2V0KDAuMiwgMC4yKTtcclxuICAgIHRoaXMuYm9keS5zZXRDaXJjbGUodGhpcy53aWR0aC8yKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSguLi5hcmdzKSB7XHJcbiAgICBzdXBlci51cGRhdGUoLi4uYXJncyk7XHJcblxyXG4gICAgLy8gRGVjaWRlIHdldGhlciB0aGUgWm9tYmllIGhhZCBlbm91Z2ggdGltZSBzaW5jZSBoaXMgbGFzdCBhY3Rpb24uXHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICB0aGlzLmRhdGEudHNOZXh0QWN0aW9uIC09IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLnRzTmV4dEFjdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnRzTmV4dEFjdGlvbiArPSB0aGlzLmRhdGEucmVhY3Rpb25TcGVlZDtcclxuICAgICAgICAvLyBNb3ZlIHRvd2FyZCB0aGUgcGxheWVyLlxyXG4gICAgICAgIGxldCBzcGVlZCA9IHRoaXMuZ2FtZS5ybmQuYmV0d2VlbihNSU5fU1BFRUQsIE1BWF9TUEVFRCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb09iamVjdCh0aGlzLCB0aGlzLmRhdGEubmluamEsIHNwZWVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ha2UgdGhhdCBjb3JzcGUgcm90IGEgbGl0dGxlXHJcbiAgICB0aGlzLmRhdGEuY29ycHNlQWdlICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkTVM7XHJcblxyXG4gICAgLy8gQWZ0ZXIgYSB3aGlsZSwgcmVtb3ZlIHRoZSB6b21iaWUgKHdpbGwgYmUgcmVtb3ZlIGZyb20gaXRzIGdyb3VwIGxhdGVyKVxyXG4gICAgaWYgKHRoaXMuZGF0YS5jb3Jwc2VBZ2UgPiBCTE9PRF9EUk9QU19MSUZFU1BBTikge1xyXG4gICAgICB0aGlzLmV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmJsb29kRW1pdHRlcikge1xyXG4gICAgICAgIC8vIHBhaW50IHRoZSBibG9vZCBvbiB0aGUgZmxvb3JcclxuICAgICAgICBsZXQgcGFpbnRCbG9vZEZuID0gdGhpcy5nYW1lLnN0YXRlLmdldEN1cnJlbnRTdGF0ZSgpLmRyYXdHcm91cFRvQmFja2dyb3VuZDtcclxuICAgICAgICBpZiAodHlwZW9mIHBhaW50Qmxvb2RGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgcGFpbnRCbG9vZEZuLmNhbGwodGhpcy5nYW1lLnN0YXRlLmdldEN1cnJlbnRTdGF0ZSgpLCB0aGlzLmRhdGEuYmxvb2RFbWl0dGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5ibG9vZEVtaXR0ZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaWUoKSB7XHJcbiAgICBpZiAodGhpcy5hbGl2ZSkge1xyXG4gICAgICAvLyBzZXQgYWxpdmUgdG8gZmFsc2Ugd2hlbiBlbWl0dGVyIGlzIGRvbmUuXHJcbiAgICAgIHRoaXMuYWxpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAvL1RPRE86IG1vdmUgZW1pdHRlcnMgZWxzZXdoZXJlIHdoZXJlIHRoYXkgY2FuIGJlIHNwb29sZWRcclxuICAgICAgbGV0IGtleSA9IHRoaXMuZGF0YS5jb2xvci50b0hleFN0cmluZygpO1xyXG4gICAgICBsZXQgZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcih0aGlzLngsIHRoaXMueSwgQkxPT0RfRFJPUFNfQ09VTlQpO1xyXG4gICAgICB0aGlzLmRhdGEuYmxvb2RFbWl0dGVyID0gZW1pdHRlcjtcclxuICAgICAgZW1pdHRlci5wYXJ0aWNsZUNsYXNzID0gQmxvb2RQYXJ0aWNsZTtcclxuICAgICAgZW1pdHRlci5zZXRSb3RhdGlvbigtMzYwLCAzNjApXHJcbiAgICAgICAgLnNldFNjYWxlKFxyXG4gICAgICAgICAgMC4xLCAwLjc1LFxyXG4gICAgICAgICAgMC4xLCAwLjc1LFxyXG4gICAgICAgICAgQkxPT0RfRFJPUFNfTElGRVNQQU4sXHJcbiAgICAgICAgICBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLFxyXG4gICAgICAgICAgZmFsc2UgLy95b3lvXHJcbiAgICAgICAgKS5zZXRYU3BlZWQoLU1BWF9CTE9PRF9TUEVFRCwgTUFYX0JMT09EX1NQRUVEKVxyXG4gICAgICAgIC5zZXRZU3BlZWQoLU1BWF9CTE9PRF9TUEVFRCwgTUFYX0JMT09EX1NQRUVEKVxyXG4gICAgICAgIC5tYWtlUGFydGljbGVzKGtleSlcclxuICAgICAgICAuc3RhcnQodHJ1ZSwgMCwgMCwgQkxPT0RfRFJPUFNfTElGRVNQQU4pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgWm9tYmllO1xyXG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCBab21iaWUgZnJvbSAnLi9ab21iaWUnO1xyXG5pbXBvcnQgUmFpbmJsb29kIGZyb20gJy4vUmFpbmJsb29kJztcclxuXHJcbmNvbnN0IFNBRkVfRElTVEFOQ0UgPSAyNTA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab21iaWVTcGF3bmVyIGV4dGVuZHMgUGhhc2VyLkdyb3VwIHtcclxuICBjb25zdHJ1Y3RvciAoZ2FtZSwgbmluamEpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy5sYXN0U3Bhd24gPSAwO1xyXG4gICAgdGhpcy5zcGF3bkRlbGF5ID0gMjUwO1xyXG4gICAgdGhpcy5tYXhab21iaWVzID0gMTA7XHJcbiAgICB0aGlzLm5pbmphID0gbmluamE7XHJcbiAgICB0aGlzLmNvbG9ycyA9IFJhaW5ibG9vZC5Db2xvcnMubWFwKHJjID0+IHJjLmNsb25lKCkpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyLmNyZWF0ZSguLi5hcmdzKTtcclxuXHJcbiAgICAvLyAgQ3JlYXRlIG91ciBiaXRtYXBEYXRhIHdoaWNoIHdlJ2xsIHVzZSBhcyBvdXIgQmxvb2RQYXJ0aWNsZSB0ZXh0dXJlXHJcbiAgICBsZXQgcmFkaXVzID0gMTY7XHJcbiAgICB0aGlzLmNvbG9ycy5mb3JFYWNoKHJhaW5CbG9vZENvbG9yID0+IHtcclxuICAgICAgbGV0IGNvbG9yID0gcmFpbkJsb29kQ29sb3IuY29sb3I7XHJcbiAgICAgIGxldCBibWQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcERhdGEocmFkaXVzKjIsIHJhZGl1cyoyKTtcclxuICAgICAgbGV0IHJhZGdyYWQgPSBibWQuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHJhZGl1cywgcmFkaXVzLCByYWRpdXMsIHJhZGl1cywgcmFkaXVzLCAwKTtcclxuICAgICAgY29sb3IuYSA9IDA7XHJcbiAgICAgIHJhZGdyYWQuYWRkQ29sb3JTdG9wKDAsIFBoYXNlci5Db2xvci5nZXRXZWJSR0IoY29sb3IpKTtcclxuICAgICAgY29sb3IuYSA9IDI1NTtcclxuICAgICAgcmFkZ3JhZC5hZGRDb2xvclN0b3AoMSwgUGhhc2VyLkNvbG9yLmdldFdlYlJHQihjb2xvcikpO1xyXG4gICAgICBibWQuY29udGV4dC5maWxsU3R5bGUgPSByYWRncmFkO1xyXG4gICAgICBibWQuY29udGV4dC5maWxsUmVjdCgwLCAwLCAyKnJhZGl1cywgMipyYWRpdXMpO1xyXG4gICAgICAvLyAgUHV0IHRoZSBiaXRtYXBEYXRhIGludG8gdGhlIGNhY2hlXHJcbiAgICAgIGxldCBrZXkgPSBQaGFzZXIuQ29sb3IuUkdCdG9TdHJpbmcoY29sb3IuciwgY29sb3IuZywgY29sb3IuYikucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgdGhpcy5nYW1lLmNhY2hlLmFkZEJpdG1hcERhdGEoYGJsb29kUGFydGljbGVTaGFkZS0ke2tleX1gLCBibWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoLi4uYXJncykge1xyXG4gICAgc3VwZXIudXBkYXRlKC4uLmFyZ3MpO1xyXG5cclxuICAgIGlmICh0aGlzLmdhbWUudGltZS50aW1lIC0gdGhpcy5sYXN0U3Bhd24gPiB0aGlzLnNwYXduRGVsYXkgJiYgdGhpcy5sZW5ndGggPCB0aGlzLm1heFpvbWJpZXMpIHtcclxuICAgICAgdGhpcy5sYXN0U3Bhd24gPSB0aGlzLmdhbWUudGltZS50aW1lO1xyXG5cclxuICAgICAgLy8gU3Bhd24gYSB6b21iaWVcclxuICAgICAgbGV0IHggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiB0aGlzLmdhbWUucm5kLmZyYWMoKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogdGhpcy5nYW1lLnJuZC5mcmFjKCk7XHJcbiAgICAgIGxldCBjb2xvckluZGV4ID0gdGhpcy5nYW1lLnJuZC5iZXR3ZWVuKDAsIHRoaXMuY29sb3JzLmxlbmd0aC0xKTtcclxuICAgICAgbGV0IGNvbG9yID0gdGhpcy5jb2xvcnNbY29sb3JJbmRleF07XHJcbiAgICAgIGxldCB6b21iaWUgPSBuZXcgWm9tYmllKHRoaXMuZ2FtZSwgeCwgeSwgY29sb3IsIHRoaXMubmluamEpO1xyXG5cclxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIHpvbWJpZSBkb2VzIG5vdCBzcGF3biBvbiB0aGUgbmluamFcclxuICAgICAgd2hpbGUgKHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5kaXN0YW5jZUJldHdlZW4odGhpcy5uaW5qYSwgem9tYmllKSA8IFNBRkVfRElTVEFOQ0UpIHtcclxuICAgICAgICB6b21iaWUueCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIHRoaXMuZ2FtZS5ybmQuZnJhYygpO1xyXG4gICAgICAgIHpvbWJpZS55ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIHRoaXMuZ2FtZS5ybmQuZnJhYygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFkZCh6b21iaWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBUaGlzIGZpbGUgYWN0cyBhcyB0aGUgcHJvamVjdCBlbnRyeSBwb2ludC5cclxuXHJcbi8vIFRoaXMgaXMgdG8gY29tcGVuc2F0ZSB0aGUgZmFjdCB0aGF0IHBoYXNlciBpcyBub3QgbW9kdWxhci5cclxuLy8gTk9URTogRVMyMDE1IGltcG9ydCBzdGF0ZW1lbnRzIGNhbm5vdCBiZSB1c2VkIGhlcmUuIEl0J3MgYW4gdWdseSBmaXgsIGJ1dCBpdCdzIHRoZSBiZXN0IEkgY291bGQgZmluZC5cclxud2luZG93LlBJWEkgPSByZXF1aXJlKCdjdXN0b20tUElYSScpO1xyXG53aW5kb3cucDIgPSByZXF1aXJlKCdwMicpO1xyXG53aW5kb3cuUGhhc2VyID0gcmVxdWlyZSgncGhhc2VyJyk7XHJcblxuLy8gQm9vdHN0cmFwIHRoZSBnYW1lLlxyXG5jb25zdCBCb290c3RyYXAgPSByZXF1aXJlKCcuL0Jvb3RzdHJhcCcpO1xubmV3IEJvb3RzdHJhcC5kZWZhdWx0KCk7XG4iXX0=
