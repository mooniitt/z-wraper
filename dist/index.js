import React from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_wrap__2F_2z {\n  position: fixed;\n  width: 1%;\n  opacity: 20%;\n  left: -100000px;\n}\n.index_normal__1z2IX {\n  width: 100%;\n  opacity: 100%;\n}\n.index_transform__1wdns {\n  transition: opacity 0.16s;\n}\n";
var styles = {"wrap":"index_wrap__2F_2z","normal":"index_normal__1z2IX","transform":"index_transform__1wdns"};
styleInject(css);

var index = (function () {
  for (var _len = arguments.length, innerComponents = new Array(_len), _key = 0; _key < _len; _key++) {
    innerComponents[_key] = arguments[_key];
  }

  var LEN = innerComponents.length;

  var Zwraper =
  /*#__PURE__*/
  function (_React$Component) {
    inherits(Zwraper, _React$Component);

    function Zwraper(props) {
      var _this;

      classCallCheck(this, Zwraper);

      _this = possibleConstructorReturn(this, getPrototypeOf(Zwraper).call(this, props));

      _this.go = function () {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        _this.move(level);
      };

      _this.back = function () {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        _this.move(level);
      };

      _this.move = function () {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var currentLevel = _this.state.currentLevel;

        if (currentLevel + level < 0) {
          return console.log("已经是最底部了");
        } else if (currentLevel + level > LEN) {
          return console.log("已经是最顶部了");
        }

        _this.setState({
          currentLevel: currentLevel + level
        });
      };

      _this.parentZindex = "auto";
      _this.currentEle = null;
      _this.eleIds = innerComponents.map(function (c, i) {
        return _this.genRandomId(i);
      });
      _this.levelCache = innerComponents.map(function (Compon, index) {
        return React.createElement(Compon, {
          key: _this.eleIds[index],
          id: _this.eleIds[index]
        });
      });
      _this.state = {
        currentLevel: LEN - 1,
        levelCache: innerComponents.map(function (c, i) {
          return LEN - 1 !== i ? -100000 : 0;
        })
      };
      return _this;
    }

    createClass(Zwraper, [{
      key: "componentDidMount",
      value: function componentDidMount() {// this.currentEle = window.document.getElementById(this.eleIds[this.state.currentLevel]);
        // console.log(this.currentEle);
        // this.parentZindex = window.getComputedStyle(this.currentEle.parentElement).zIndex;
        // console.log(this.parentZindex);
      }
    }, {
      key: "genRandomId",
      value: function genRandomId(index) {
        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000000;
        return "$$zwraper".concat(String(index), "_").concat(Math.random() * max | 0);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            levelCache = _this$state.levelCache,
            currentLevel = _this$state.currentLevel;
        var func = {
          go: this.go,
          back: this.back
        };
        return innerComponents.map(function (Compon, index) {
          var style = index === currentLevel ? styles.normal : styles.wrap;
          return React.createElement("div", {
            className: "".concat(styles.transform, " ").concat(style)
          }, React.createElement(Compon, _extends_1({}, func, {
            key: _this2.eleIds[index],
            id: _this2.eleIds[index]
          })));
        });
      }
    }]);

    return Zwraper;
  }(React.Component);

  return Zwraper;
});

export default index;
