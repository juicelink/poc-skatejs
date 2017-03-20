/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "._1OXS-N3ZTeK58u18Z8wRzO {\r\n    border: 1px solid black;\r\n}", ""]);

// exports
exports.locals = {
	"helloWorld": "_1OXS-N3ZTeK58u18Z8wRzO"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(6));
	else if(typeof define === 'function' && define.amd)
		define(["incremental-dom"], factory);
	else if(typeof exports === 'object')
		exports["skate"] = factory(require("incremental-dom"));
	else
		root["skate"] = factory(root["IncrementalDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return connected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return created; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ctorCreateInitProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ctorObservedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ctorProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ctorPropsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return rendererDebounced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updated; });
var connected = '____skate_connected';
var created = '____skate_created';

// DEPRECATED
//
// This is the only "symbol" that must stay a string. This is because it is
// relied upon across several versions. We should remove it, but ensure that
// it's considered a breaking change that whatever version removes it cannot
// be passed to vdom functions as tag names.
var name = '____skate_name';

// Used on the Constructor
var ctorCreateInitProps = '____skate_ctor_createInitProps';
var ctorObservedAttributes = '____skate_ctor_observedAttributes';
var ctorProps = '____skate_ctor_props';
var ctorPropsMap = '____skate_ctor_propsMap';

// Used on the Element
var props = '____skate_props';
var ref = '____skate_ref';
var renderer = '____skate_renderer';
var rendering = '____skate_rendering';
var rendererDebounced = '____skate_rendererDebounced';
var updated = '____skate_updated';

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_type__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropNamesAndSymbols;

/**
 * Returns array of owned property names and symbols for the given object
 */
function getPropNamesAndSymbols() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var listOfKeys = Object.getOwnPropertyNames(obj);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__is_type__["a" /* isFunction */])(Object.getOwnPropertySymbols) ? listOfKeys.concat(Object.getOwnPropertySymbols(obj)) : listOfKeys;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isUndefined; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var isObject = function isObject(val) {
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isSymbol = function isSymbol(val) {
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'symbol';
};
var isUndefined = function isUndefined(val) {
  return typeof val === 'undefined';
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony default export */ __webpack_exports__["a"] = typeof window === 'undefined' ? global : window;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(37)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__ = __webpack_require__(1);


// We are not using Object.assign if it is defined since it will cause problems when Symbol is polyfilled.
// Apparently Object.assign (or any polyfill for this method) does not copy non-native Symbols.
/* harmony default export */ __webpack_exports__["a"] = function (obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (arg) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__["a" /* default */])(arg).forEach(function (nameOrSymbol) {
      return obj[nameOrSymbol] = arg[nameOrSymbol];
    });
  }); // eslint-disable-line no-return-assign
  return obj;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (element) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
  return namespace && (data[namespace] || (data[namespace] = {})) || data; // eslint-disable-line no-mixed-operators
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (val) {
  return typeof val === 'undefined' || val === null;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_get_props_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_is_type__ = __webpack_require__(2);






function get(elem) {
  var props = {};

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_get_prop_names_and_symbols__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_get_props_map__["a" /* default */])(elem.constructor)).forEach(function (nameOrSymbol) {
    props[nameOrSymbol] = elem[nameOrSymbol];
  });

  return props;
}

function set(elem, newProps) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_assign__["a" /* default */])(elem, newProps);
  if (elem[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["d" /* renderer */]]) {
    elem[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["d" /* renderer */]]();
  }
}

/* harmony default export */ __webpack_exports__["a"] = function (elem, newProps) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_is_type__["b" /* isUndefined */])(newProps) ? get(elem) : set(elem, newProps);
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_create_symbol__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_debounce__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_get_props_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__props__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lifecycle_props_init__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_is_type__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__polyfills_object_is__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__util_root__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


















var HTMLElement = __WEBPACK_IMPORTED_MODULE_15__util_root__["a" /* default */].HTMLElement || function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _class;
}();
var _prevName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevName');
var _prevOldValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevOldValue');
var _prevNewValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_create_symbol__["a" /* default */])('prevNewValue');

// TEMPORARY: Once deprecations in this file are removed, this can be removed.
function deprecated(elem, oldUsage, newUsage) {
  if (process.env.NODE_ENV !== 'production') {
    var ownerName = elem.localName ? elem.localName : String(elem);
    console.warn(ownerName + ' ' + oldUsage + ' is deprecated. Use ' + newUsage + '.');
  }
}

function preventDoubleCalling(elem, name, oldValue, newValue) {
  return name === elem[_prevName] && oldValue === elem[_prevOldValue] && newValue === elem[_prevNewValue];
}

// TODO remove when not catering to Safari < 10.
function createNativePropertyDescriptors(Ctor) {
  var propDefs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(Ctor);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(propDefs).reduce(function (propDescriptors, nameOrSymbol) {
    propDescriptors[nameOrSymbol] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__lifecycle_props_init__["a" /* createNativePropertyDescriptor */])(propDefs[nameOrSymbol]);
    return propDescriptors;
  }, {});
}

// TODO refactor when not catering to Safari < 10.
//
// We should be able to simplify this where all we do is Object.defineProperty().
function createInitProps(Ctor) {
  var propDescriptors = createNativePropertyDescriptors(Ctor);

  return function (elem) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(propDescriptors).forEach(function (nameOrSymbol) {
      var propDescriptor = propDescriptors[nameOrSymbol];
      propDescriptor.beforeDefineProperty(elem);

      // We check here before defining to see if the prop was specified prior
      // to upgrading.
      var hasPropBeforeUpgrading = nameOrSymbol in elem;

      // This is saved prior to defining so that we can set it after it it was
      // defined prior to upgrading. We don't want to invoke the getter if we
      // don't need to, so we only get the value if we need to re-sync.
      var valueBeforeUpgrading = hasPropBeforeUpgrading && elem[nameOrSymbol];

      // https://bugs.webkit.org/show_bug.cgi?id=49739
      //
      // When Webkit fixes that bug so that native property accessors can be
      // retrieved, we can move defining the property to the prototype and away
      // from having to do if for every instance as all other browsers support
      // this.
      Object.defineProperty(elem, nameOrSymbol, propDescriptor);

      // DEPRECATED
      //
      // We'll be removing get / set callbacks on properties. Use the
      // updatedCallback() instead.
      //
      // We re-set the prop if it was specified prior to upgrading because we
      // need to ensure set() is triggered both in polyfilled environments and
      // in native where the definition may be registerd after elements it
      // represents have already been created.
      if (hasPropBeforeUpgrading) {
        elem[nameOrSymbol] = valueBeforeUpgrading;
      }
    });
  };
}

var _class2 = function (_HTMLElement) {
  _inherits(_class2, _HTMLElement);

  _createClass(_class2, null, [{
    key: 'observedAttributes',


    /**
     * Returns unique attribute names configured with props and
     * those set on the Component constructor if any
     */
    get: function get() {
      var attrsOnCtor = this.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_1__util_symbols__["f" /* ctorObservedAttributes */]) ? this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["f" /* ctorObservedAttributes */]] : [];
      var propDefs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(this);

      // Use Object.keys to skips symbol props since they have no linked attributes
      var attrsFromLinkedProps = Object.keys(propDefs).map(function (propName) {
        return propDefs[propName].attrSource;
      }).filter(Boolean);

      var all = attrsFromLinkedProps.concat(attrsOnCtor).concat(_get(_class2.__proto__ || Object.getPrototypeOf(_class2), 'observedAttributes', this));
      return all.filter(function (item, index) {
        return all.indexOf(item) === index;
      });
    },
    set: function set(value) {
      value = Array.isArray(value) ? value : [];
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(this, 'observedAttributes', value);
    }

    // Returns superclass props overwritten with this Component props

  }, {
    key: 'props',
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* default */])({}, _get(_class2.__proto__ || Object.getPrototypeOf(_class2), 'props', this), this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["g" /* ctorProps */]]);
    },
    set: function set(value) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(this, __WEBPACK_IMPORTED_MODULE_1__util_symbols__["g" /* ctorProps */], value);
    }

    // Passing args is designed to work with document-register-element. It's not
    // necessary for the webcomponents/custom-element polyfill.

  }]);

  function _class2() {
    var _ref;

    _classCallCheck(this, _class2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args)));

    var constructor = _this.constructor;

    // Used for the ready() function so it knows when it can call its callback.

    _this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["c" /* created */]] = true;

    // TODO refactor to not cater to Safari < 10. This means we can depend on
    // built-in property descriptors.
    // Must be defined on constructor and not from a superclass
    if (!constructor.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */])) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util_set_ctor_native_property__["a" /* default */])(constructor, __WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */], createInitProps(constructor));
    }

    // Set up a renderer that is debounced for property sets to call directly.
    _this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["i" /* rendererDebounced */]] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_debounce__["a" /* default */])(_this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["d" /* renderer */]].bind(_this));

    // Set up property lifecycle.
    var propDefsCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(constructor)).length;
    if (propDefsCount && constructor[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */]]) {
      constructor[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["h" /* ctorCreateInitProps */]](_this);
    }

    // DEPRECATED
    //
    // static render()
    // Note that renderCallback is an optional method!
    if (!_this.renderCallback && constructor.render) {
      deprecated(_this, 'static render', 'renderCallback');
      _this.renderCallback = constructor.render.bind(constructor, _this);
    }

    // DEPRECATED
    //
    // static created()
    //
    // Props should be set up before calling this.
    var created = constructor.created;

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(created)) {
      deprecated(_this, 'static created', 'constructor');
      created(_this);
    }

    // DEPRECATED
    //
    // Feature has rarely been used.
    //
    // Created should be set before invoking the ready listeners.
    var elemData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(_this);
    var readyCallbacks = elemData.readyCallbacks;
    if (readyCallbacks) {
      readyCallbacks.forEach(function (cb) {
        return cb(_this);
      });
      delete elemData.readyCallbacks;
    }
    return _this;
  }

  // Custom Elements v1


  _createClass(_class2, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      // Reflect attributes pending values
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).resumeAttributesUpdates();

      // Used to check whether or not the component can render.
      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]] = true;

      // Render!
      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["i" /* rendererDebounced */]]();

      // DEPRECATED
      //
      // static attached()
      var attached = this.constructor.attached;

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(attached)) {
        deprecated(this, 'static attached', 'connectedCallback');
        attached(this);
      }

      // DEPRECATED
      //
      // We can remove this once all browsers support :defined.
      this.setAttribute('defined', '');
    }

    // Custom Elements v1

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      // Suspend updating attributes until re-connected
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).suspendAttributesUpdates();

      // Ensures the component can't be rendered while disconnected.
      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]] = false;

      // DEPRECATED
      //
      // static detached()
      var detached = this.constructor.detached;

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(detached)) {
        deprecated(this, 'static detached', 'disconnectedCallback');
        detached(this);
      }
    }

    // Custom Elements v1

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // Polyfill calls this twice.
      if (preventDoubleCalling(this, name, oldValue, newValue)) {
        return;
      }

      // Set data so we can prevent double calling if the polyfill.
      this[_prevName] = name;
      this[_prevOldValue] = oldValue;
      this[_prevNewValue] = newValue;

      var propNameOrSymbol = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(this, 'attrSourceLinks')[name];
      if (propNameOrSymbol) {
        var changedExternally = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_attributes_manager__["a" /* default */])(this).onAttributeChanged(name, newValue);
        if (changedExternally) {
          // Sync up the property.
          var propDef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__util_get_props_map__["a" /* default */])(this.constructor)[propNameOrSymbol];
          var newPropVal = newValue !== null && propDef.deserialize ? propDef.deserialize(newValue) : newValue;

          var propData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_data__["a" /* default */])(this, 'props')[propNameOrSymbol];
          propData.settingPropFromAttrSource = true;
          this[propNameOrSymbol] = newPropVal;
          propData.settingPropFromAttrSource = false;
        }
      }

      // DEPRECATED
      //
      // static attributeChanged()
      var attributeChanged = this.constructor.attributeChanged;

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(attributeChanged)) {
        deprecated(this, 'static attributeChanged', 'attributeChangedCallback');
        attributeChanged(this, { name: name, newValue: newValue, oldValue: oldValue });
      }
    }

    // Skate

  }, {
    key: 'updatedCallback',
    value: function updatedCallback(prevProps) {
      if (this.constructor.hasOwnProperty('updated')) {
        deprecated(this, 'static updated', 'updatedCallback');
      }
      return this.constructor.updated(this, prevProps);
    }

    // Skate

  }, {
    key: 'renderedCallback',
    value: function renderedCallback() {
      if (this.constructor.hasOwnProperty('rendered')) {
        deprecated(this, 'static rendered', 'renderedCallback');
      }
      return this.constructor.rendered(this);
    }

    // Skate
    //
    // Maps to the static renderer() callback. That logic should be moved here
    // when that is finally removed.
    // TODO: finalize how to support different rendering strategies.

  }, {
    key: 'rendererCallback',
    value: function rendererCallback() {
      // TODO: cannot move code here because tests expects renderer function to still exist on constructor!
      return this.constructor.renderer(this);
    }

    // Skate
    // @internal
    // Invokes the complete render lifecycle.

  }, {
    key: __WEBPACK_IMPORTED_MODULE_1__util_symbols__["d" /* renderer */],
    value: function value() {
      if (this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]] || !this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["j" /* connected */]]) {
        return;
      }

      // Flag as rendering. This prevents anything from trying to render - or
      // queueing a render - while there is a pending render.
      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]] = true;
      if (this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["l" /* updated */]]() && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(this.renderCallback)) {
        this.rendererCallback();
        this.renderedCallback();
      }

      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["k" /* rendering */]] = false;
    }

    // Skate
    // @internal
    // Calls the updatedCallback() with previous props.

  }, {
    key: __WEBPACK_IMPORTED_MODULE_1__util_symbols__["l" /* updated */],
    value: function value() {
      var prevProps = this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["m" /* props */]];
      this[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["m" /* props */]] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__props__["a" /* default */])(this);
      return this.updatedCallback(prevProps);
    }

    // Skate

  }], [{
    key: 'extend',
    value: function extend() {
      var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var Base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      // Create class for the user.
      var Ctor = function (_Base) {
        _inherits(Ctor, _Base);

        function Ctor() {
          _classCallCheck(this, Ctor);

          return _possibleConstructorReturn(this, (Ctor.__proto__ || Object.getPrototypeOf(Ctor)).apply(this, arguments));
        }

        return Ctor;
      }(Base);

      // For inheriting from the object literal.


      var opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__["a" /* default */])(definition);
      var prot = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_get_own_property_descriptors__["a" /* default */])(definition.prototype);

      // Prototype is non configurable (but is writable).
      delete opts.prototype;

      // Pass on static and instance members from the definition.
      Object.defineProperties(Ctor, opts);
      Object.defineProperties(Ctor.prototype, prot);

      return Ctor;
    }

    // Skate
    //
    // DEPRECATED
    //
    // Stubbed in case any subclasses are calling it.

  }, {
    key: 'rendered',
    value: function rendered() {}

    // Skate
    //
    // DEPRECATED
    //
    // Move this to rendererCallback() before removing.

  }, {
    key: 'renderer',
    value: function renderer(elem) {
      if (!elem.shadowRoot) {
        elem.attachShadow({ mode: 'open' });
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["patchInner"])(elem.shadowRoot, function () {
        var possibleFn = elem.renderCallback(elem);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(possibleFn)) {
          possibleFn();
        } else if (Array.isArray(possibleFn)) {
          possibleFn.forEach(function (fn) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_is_type__["a" /* isFunction */])(fn)) {
              fn();
            }
          });
        }
      });
    }

    // Skate
    //
    // DEPRECATED
    //
    // Move this to updatedCallback() before removing.

  }, {
    key: 'updated',
    value: function updated(elem, previousProps) {
      // The 'previousProps' will be undefined if it is the initial render.
      if (!previousProps) {
        return true;
      }

      // The 'previousProps' will always contain all of the keys.
      //
      // Use classic loop because:
      // 'for ... in' skips symbols and 'for ... of' is not working yet with IE!?
      // for (let nameOrSymbol of getPropNamesAndSymbols(previousProps)) {
      var namesAndSymbols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util_get_prop_names_and_symbols__["a" /* default */])(previousProps);
      for (var i = 0; i < namesAndSymbols.length; i++) {
        var nameOrSymbol = namesAndSymbols[i];

        // With Object.is NaN is equal to NaN
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__polyfills_object_is__["a" /* default */])(previousProps[nameOrSymbol], elem[nameOrSymbol])) {
          return true;
        }
      }

      return false;
    }
  }]);

  return _class2;
}(HTMLElement);

_class2.is = '';
/* harmony default export */ __webpack_exports__["a"] = _class2;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__to_null_or_string__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_type__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttrMgr;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/**
 * @internal
 * Attributes Manager
 *
 * Postpones attributes updates until when connected.
 */

var AttributesManager = function () {
  function AttributesManager(elem) {
    _classCallCheck(this, AttributesManager);

    this.elem = elem;
    this.connected = false;
    this.pendingValues = {};
    this.lastSetValues = {};
  }

  /**
   * Called from disconnectedCallback
   */


  _createClass(AttributesManager, [{
    key: 'suspendAttributesUpdates',
    value: function suspendAttributesUpdates() {
      this.connected = false;
    }

    /**
     * Called from connectedCallback
     */

  }, {
    key: 'resumeAttributesUpdates',
    value: function resumeAttributesUpdates() {
      var _this = this;

      this.connected = true;
      var names = Object.keys(this.pendingValues);
      names.forEach(function (name) {
        var value = _this.pendingValues[name];
        // Skip if already cleared
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__is_type__["b" /* isUndefined */])(value)) {
          delete _this.pendingValues[name];
          _this._syncAttrValue(name, value);
        }
      });
    }

    /**
     * Returns true if the value is different from the one set internally
     * using setAttrValue()
     */

  }, {
    key: 'onAttributeChanged',
    value: function onAttributeChanged(name, value) {
      value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(value);

      // A new attribute value voids the pending one
      this._clearPendingValue(name);

      var changed = this.lastSetValues[name] !== value;
      this.lastSetValues[name] = value;
      return changed;
    }

    /**
     * Updates or removes the attribute if value === null.
     *
     * When the component is not connected the value is saved and
     * the attribute is only updated when the component is re-connected.
     */

  }, {
    key: 'setAttrValue',
    value: function setAttrValue(name, value) {
      value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(value);

      this.lastSetValues[name] = value;

      if (this.connected) {
        this._clearPendingValue(name);
        this._syncAttrValue(name, value);
      } else {
        this.pendingValues[name] = value;
      }
    }
  }, {
    key: '_syncAttrValue',
    value: function _syncAttrValue(name, value) {
      var currAttrValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__to_null_or_string__["a" /* default */])(this.elem.getAttribute(name));
      if (value !== currAttrValue) {
        if (value === null) {
          this.elem.removeAttribute(name);
        } else {
          this.elem.setAttribute(name, value);
        }
      }
    }
  }, {
    key: '_clearPendingValue',
    value: function _clearPendingValue(name) {
      if (name in this.pendingValues) {
        delete this.pendingValues[name];
      }
    }
  }]);

  return AttributesManager;
}();

// Only used by getAttrMgr


var $attributesMgr = '____skate_attributesMgr';

/**
 * @internal
 * Returns attribute manager instance for the given Component
 */
function getAttrMgr(elem) {
  var mgr = elem[$attributesMgr];
  if (!mgr) {
    mgr = new AttributesManager(elem);
    elem[$attributesMgr] = mgr;
  }
  return mgr;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_prop_names_and_symbols__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop_definition__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_ctor_native_property__ = __webpack_require__(11);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropsMap;





/**
 * Memoizes a map of PropDefinition for the given component class.
 * Keys in the map are the properties name which can a string or a symbol.
 *
 * The map is created from the result of: static get props
 */
function getPropsMap(Ctor) {
  // Must be defined on constructor and not from a superclass
  if (!Ctor.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */])) {
    (function () {
      var props = Ctor.props || {};

      var propsMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__get_prop_names_and_symbols__["a" /* default */])(props).reduce(function (result, nameOrSymbol) {
        result[nameOrSymbol] = new __WEBPACK_IMPORTED_MODULE_2__prop_definition__["a" /* default */](nameOrSymbol, props[nameOrSymbol]);
        return result;
      }, {});
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__set_ctor_native_property__["a" /* default */])(Ctor, __WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */], propsMap);
    })();
  }

  return Ctor[__WEBPACK_IMPORTED_MODULE_0__symbols__["e" /* ctorPropsMap */]];
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setCtorNativeProperty;
/**
 * This is needed to avoid IE11 "stack size errors" when creating
 * a new property on the constructor of an HTMLElement
 */
function setCtorNativeProperty(Ctor, propName, value) {
  Object.defineProperty(Ctor, propName, { configurable: true, value: value });
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__empty__ = __webpack_require__(6);

/**
 * Attributes value can only be null or string;
 */
var toNullOrString = function toNullOrString(val) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__empty__["a" /* default */])(val) ? null : String(val);
};

/* harmony default export */ __webpack_exports__["a"] = toNullOrString;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_prop__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_symbols__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_vdom__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_define__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_emit__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_link__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_props__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_ready__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_3__api_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return __WEBPACK_IMPORTED_MODULE_4__api_define__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return __WEBPACK_IMPORTED_MODULE_5__api_emit__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return __WEBPACK_IMPORTED_MODULE_6__api_link__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return __WEBPACK_IMPORTED_MODULE_0__api_prop__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_7__api_props__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return __WEBPACK_IMPORTED_MODULE_8__api_ready__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_1__api_symbols__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vdom", function() { return __WEBPACK_IMPORTED_MODULE_2__api_vdom__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });










var h = __WEBPACK_IMPORTED_MODULE_2__api_vdom__["builder"]();



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_unique_id__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_root__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/* harmony default export */ __webpack_exports__["a"] = function () {
  var customElements = __WEBPACK_IMPORTED_MODULE_2__util_root__["a" /* default */].customElements,
      HTMLElement = __WEBPACK_IMPORTED_MODULE_2__util_root__["a" /* default */].HTMLElement;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var name = args[0],
      Ctor = args[1];


  if (!customElements) {
    throw new Error('Skate requires native custom element support or a polyfill.');
  }

  // DEPRECATED remove when removing the "name" argument.
  if (process.env.NODE_ENV !== 'production' && args.length === 2) {
    console.warn('The "name" argument to define() is deprecated. Please define a `static is` property on the constructor instead.');
  }

  // DEPRECATED remove when removing the "name" argument.
  if (args.length === 1) {
    Ctor = name;
    name = null;
  }

  // DEPRECATED Object literals.
  if ((typeof Ctor === 'undefined' ? 'undefined' : _typeof(Ctor)) === 'object') {
    Ctor = __WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */].extend(Ctor);
  }

  // Ensure a custom element is passed.
  if (!(Ctor.prototype instanceof HTMLElement)) {
    throw new Error('You must provide a constructor that extends HTMLElement to define().');
  }

  // DEPRECATED two arguments
  if (args.length === 2) {
    customElements.define(customElements.get(name) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_unique_id__["a" /* default */])(name) : name, Ctor);
  } else {
    // We must use hasOwnProperty() because we want to know if it was specified
    // directly on this class, not subclasses, as we don't want to inherit tag
    // names from subclasses.
    if (!Ctor.hasOwnProperty('is')) {
      // If we used defineProperty() then the consumer must also use it and
      // cannot use property initialisers. Instead we just set it so they can
      // use whatever method of overridding that they want.
      Ctor.is = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_unique_id__["a" /* default */])();
    }
    customElements.define(Ctor.is, Ctor);
  }

  // The spec doesn't return but this allows for a simpler, more concise API.
  return Ctor;
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(13)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__(3);


var Event = function (TheEvent) {
  if (TheEvent) {
    try {
      new TheEvent('emit-init'); // eslint-disable-line no-new
    } catch (e) {
      return undefined;
    }
  }
  return TheEvent;
}(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* default */].Event);

function createCustomEvent(name) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var detail = opts.detail;

  delete opts.detail;

  var e = void 0;
  if (Event) {
    e = new Event(name, opts);
    Object.defineProperty(e, 'detail', { value: detail });
  } else {
    e = document.createEvent('CustomEvent');
    Object.defineProperty(e, 'composed', { value: opts.composed });
    e.initCustomEvent(name, opts.bubbles, opts.cancelable, detail);
  }
  return e;
}

/* harmony default export */ __webpack_exports__["a"] = function (elem, name) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (opts.bubbles === undefined) {
    opts.bubbles = true;
  }
  if (opts.cancelable === undefined) {
    opts.cancelable = true;
  }
  if (opts.composed === undefined) {
    opts.composed = true;
  }
  return elem.dispatchEvent(createCustomEvent(name, opts));
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__props__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getValue(elem) {
  var type = elem.type;
  if (type === 'checkbox' || type === 'radio') {
    return elem.checked ? elem.value || true : false;
  }
  return elem.value;
}

/* harmony default export */ __webpack_exports__["a"] = function (elem, target) {
  return function (e) {
    // We fallback to checking the composed path. Unfortunately this behaviour
    // is difficult to impossible to reproduce as it seems to be a possible
    // quirk in the shadydom polyfill that incorrectly returns null for the
    // target but has the target as the first point in the path.
    // TODO revisit once all browsers have native support.
    var localTarget = e.target || e.composedPath()[0];
    var value = getValue(localTarget);
    var localTargetName = target || localTarget.name || 'value';

    if (localTargetName.indexOf('.') > -1) {
      var parts = localTargetName.split('.');
      var firstPart = parts[0];
      var propName = parts.pop();
      var obj = parts.reduce(function (prev, curr) {
        return prev && prev[curr];
      }, elem);

      obj[propName || e.target.name] = value;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__props__["a" /* default */])(elem, _defineProperty({}, firstPart, elem[firstPart]));
    } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__props__["a" /* default */])(elem, _defineProperty({}, localTargetName, value));
    }
  };
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_assign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__ = __webpack_require__(12);
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });




function create(def) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.unshift({}, def);
    return __WEBPACK_IMPORTED_MODULE_0__util_assign__["a" /* default */].apply(undefined, args);
  };
}

var parseIfNotEmpty = function parseIfNotEmpty(val) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(val) ? null : JSON.parse(val);
};

var array = create({
  coerce: function coerce(val) {
    return Array.isArray(val) ? val : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(val) ? null : [val];
  },
  default: function _default() {
    return [];
  },
  deserialize: parseIfNotEmpty,
  serialize: JSON.stringify
});

var boolean = create({
  coerce: function coerce(val) {
    return !!val;
  },
  default: false,
  // TODO: 'false' string must deserialize to false for angular 1.x to work
  // This breaks one existing test.
  // deserialize: val => !(val === null || val === 'false'),
  deserialize: function deserialize(val) {
    return !(val === null);
  },
  serialize: function serialize(val) {
    return val ? '' : null;
  }
});

// defaults empty to 0 and allows NaN
var zeroIfEmptyOrNumberIncludesNaN = function zeroIfEmptyOrNumberIncludesNaN(val) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_empty__["a" /* default */])(val) ? 0 : Number(val);
};

var number = create({
  default: 0,
  coerce: zeroIfEmptyOrNumberIncludesNaN,
  deserialize: zeroIfEmptyOrNumberIncludesNaN,
  serialize: __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */]
});

var string = create({
  default: '',
  coerce: __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */],
  deserialize: __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */],
  serialize: __WEBPACK_IMPORTED_MODULE_2__util_to_null_or_string__["a" /* default */]
});

var object = create({
  default: function _default() {
    return {};
  },
  deserialize: parseIfNotEmpty,
  serialize: JSON.stringify
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_data__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = function (elem, done) {
  var info = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_data__["a" /* default */])(elem);
  if (elem[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["c" /* created */]]) {
    done(elem);
  } else if (info.readyCallbacks) {
    info.readyCallbacks.push(done);
  } else {
    info.readyCallbacks = [done];
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return __WEBPACK_IMPORTED_MODULE_0__util_symbols__["b"]; });
// DEPRECTAED
//
// We should not be relying on internals for symbols as this creates version
// coupling. We will move forward with platform agnostic ways of doing this.


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_incremental_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_prop_context__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_root__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["element"] = element;
/* harmony export (immutable) */ __webpack_exports__["builder"] = builder;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return newAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClose", function() { return newElementClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpen", function() { return newElementOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpenEnd", function() { return newElementOpenEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOpenStart", function() { return newElementOpenStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementVoid", function() { return newElementVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return newText; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-plusplus: 0 */






var customElements = __WEBPACK_IMPORTED_MODULE_3__util_root__["a" /* default */].customElements,
    HTMLElement = __WEBPACK_IMPORTED_MODULE_3__util_root__["a" /* default */].HTMLElement;

var applyDefault = __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["attributes"][__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["symbols"].default];

// A stack of children that corresponds to the current function helper being
// executed.
var stackChren = [];

var $skip = '__skip';
var $currentEventHandlers = '__events';
var $stackCurrentHelperProps = '__props';

// The current function helper in the stack.
var stackCurrentHelper = void 0;

// This is used for the Incremental DOM overrides to keep track of what args
// to pass the main elementOpen() function.
var overrideArgs = void 0;

// The number of levels deep after skipping a tree.
var skips = 0;

var noop = function noop() {};

// Adds or removes an event listener for an element.
function applyEvent(elem, ename, newFunc) {
  var events = elem[$currentEventHandlers];

  if (!events) {
    events = elem[$currentEventHandlers] = {};
  }

  // Undefined indicates that there is no listener yet.
  if (typeof events[ename] === 'undefined') {
    // We only add a single listener once. Originally this was a workaround for
    // the Webcomponents ShadyDOM polyfill not removing listeners, but it's
    // also a simpler model for binding / unbinding events because you only
    // have a single handler you need to worry about and a single place where
    // you only store one event handler
    elem.addEventListener(ename, function (e) {
      if (events[ename]) {
        events[ename].call(this, e);
      }
    });
  }

  // Not undefined indicates that we have set a listener, so default to null.
  events[ename] = typeof newFunc === 'function' ? newFunc : null;
}

var attributesContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_prop_context__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["attributes"], _defineProperty({
  // Attributes that shouldn't be applied to the DOM.
  key: noop,
  statics: noop,

  // Attributes that *must* be set via a property on all elements.
  checked: __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],
  className: __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],
  disabled: __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],
  value: __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"],

  // Ref handler.
  ref: function ref(elem, name, value) {
    elem[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]] = value;
  },


  // Skip handler.
  skip: function skip(elem, name, value) {
    if (value) {
      elem[$skip] = true;
    } else {
      delete elem[$skip];
    }
  }
}, __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["symbols"].default, function (elem, name, value) {
  var ce = customElements.get(elem.localName);
  var props = ce && ce.props || {};
  var prototype = ce && ce.prototype || {};

  // TODO when refactoring properties to not have to workaround the old
  // WebKit bug we can remove the "name in props" check below.
  //
  // NOTE: That the "name in elem" check won't work for polyfilled custom
  // elements that set a property that isn't explicitly specified in "props"
  // or "prototype" unless it is added to the element explicitly as a
  // property prior to passing the prop to the vdom function. For example, if
  // it were added in a lifecycle callback because it wouldn't have been
  // upgraded yet.
  //
  // We prefer setting props, so we do this if there's a property matching
  // name that was passed. However, certain props on SVG elements are
  // readonly and error when you try to set them.
  if ((name in props || name in elem || name in prototype) && !('ownerSVGElement' in elem)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["applyProp"])(elem, name, value);
    return;
  }

  // Explicit false removes the attribute.
  if (value === false) {
    applyDefault(elem, name);
    return;
  }

  // Handle built-in and custom events.
  if (name.indexOf('on') === 0) {
    var firstChar = name[2];
    var eventName = void 0;

    if (firstChar === '-') {
      eventName = name.substring(3);
    } else if (firstChar === firstChar.toUpperCase()) {
      eventName = firstChar.toLowerCase() + name.substring(3);
    }

    if (eventName) {
      applyEvent(elem, eventName, value);
      return;
    }
  }

  applyDefault(elem, name, value);
}));

function resolveTagName(name) {
  // We return falsy values as some wrapped IDOM functions allow empty values.
  if (!name) {
    return name;
  }

  // We try and return the cached tag name, if one exists. This will work with
  // *any* web component of any version that defines a `static is` property.
  if (name.is) {
    return name.is;
  }

  // Get the name for the custom element by constructing it and using the
  // localName property. Cache it and lookup the cached value for future calls.
  if (name.prototype instanceof HTMLElement) {
    if (name[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]]) {
      return name[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]];
    }

    // eslint-disable-next-line
    var elem = new name();
    return elem[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["b" /* name */]] = elem.localName;
  }

  // Pass all other values through so IDOM gets what it's expecting.
  return name;
}

// Incremental DOM's elementOpen is where the hooks in `attributes` are applied,
// so it's the only function we need to execute in the context of our attributes.
var elementOpen = attributesContext(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementOpen"]);

function elementOpenStart(tag) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var statics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  overrideArgs = [tag, key, statics];
}

function elementOpenEnd() {
  var node = newElementOpen.apply(undefined, _toConsumableArray(overrideArgs)); // eslint-disable-line no-use-before-define
  overrideArgs = null;
  return node;
}

function wrapIdomFunc(func) {
  var tnameFuncHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

  return function wrap() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args[0] = resolveTagName(args[0]);
    stackCurrentHelper = null;
    if (typeof args[0] === 'function') {
      // If we've encountered a function, handle it according to the type of
      // function that is being wrapped.
      stackCurrentHelper = args[0];
      return tnameFuncHandler.apply(undefined, args);
    } else if (stackChren.length) {
      // We pass the wrap() function in here so that when it's called as
      // children, it will queue up for the next stack, if there is one.
      stackChren[stackChren.length - 1].push([wrap, args]);
    } else {
      if (func === elementOpen) {
        if (skips) {
          return ++skips;
        }

        var elem = func.apply(undefined, args);

        if (elem[$skip]) {
          ++skips;
        }

        return elem;
      }

      if (func === __WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementClose"]) {
        if (skips === 1) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["skip"])();
        }

        // We only want to skip closing if it's not the last closing tag in the
        // skipped tree because we keep the element that initiated the skpping.
        if (skips && --skips) {
          return;
        }

        var _elem = func.apply(undefined, args);
        var ref = _elem[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]];

        // We delete so that it isn't called again for the same element. If the
        // ref changes, or the element changes, this will be defined again.
        delete _elem[__WEBPACK_IMPORTED_MODULE_1__util_symbols__["a" /* ref */]];

        // Execute the saved ref after esuring we've cleand up after it.
        if (typeof ref === 'function') {
          ref(_elem);
        }

        return _elem;
      }

      // We must call elementOpenStart and elementOpenEnd even if we are
      // skipping because they queue up attributes and then call elementClose.
      if (!skips || func === elementOpenStart || func === elementOpenEnd) {
        return func.apply(undefined, args);
      }
    }
  };
}

function newAttr() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (stackCurrentHelper) {
    stackCurrentHelper[$stackCurrentHelperProps][args[0]] = args[1];
  } else if (stackChren.length) {
    stackChren[stackChren.length - 1].push([newAttr, args]);
  } else {
    overrideArgs.push(args[0]);
    overrideArgs.push(args[1]);
  }
}

function stackOpen(tname, key, statics) {
  var props = { key: key, statics: statics };

  for (var _len3 = arguments.length, attrs = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    attrs[_key3 - 3] = arguments[_key3];
  }

  for (var a = 0; a < attrs.length; a += 2) {
    props[attrs[a]] = attrs[a + 1];
  }
  tname[$stackCurrentHelperProps] = props;
  stackChren.push([]);
}

function stackClose(tname) {
  var chren = stackChren.pop();
  var props = tname[$stackCurrentHelperProps];
  delete tname[$stackCurrentHelperProps];
  var elemOrFn = tname(props, function () {
    return chren.forEach(function (args) {
      return args[0].apply(args, _toConsumableArray(args[1]));
    });
  });
  return typeof elemOrFn === 'function' ? elemOrFn() : elemOrFn;
}

// Incremental DOM overrides
// -------------------------

// We must override internal functions that call internal Incremental DOM
// functions because we can't override the internal references. This means
// we must roughly re-implement their behaviour. Luckily, they're fairly
// simple.
var newElementOpenStart = wrapIdomFunc(elementOpenStart, stackOpen);
var newElementOpenEnd = wrapIdomFunc(elementOpenEnd);

// Standard open / closed overrides don't need to reproduce internal behaviour
// because they are the ones referenced from *End and *Start.
var newElementOpen = wrapIdomFunc(elementOpen, stackOpen);
var newElementClose = wrapIdomFunc(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["elementClose"], stackClose);

// Ensure we call our overridden functions instead of the internal ones.
function newElementVoid(tag) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  newElementOpen.apply(undefined, [tag].concat(args));
  return newElementClose(tag);
}

// Text override ensures their calls can queue if using function helpers.
var newText = wrapIdomFunc(__WEBPACK_IMPORTED_MODULE_0_incremental_dom__["text"]);

// Convenience function for declaring an Incremental DOM element using
// hyperscript-style syntax.
function element(tname, attrs) {
  var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);

  // If attributes are a function, then they should be treated as children.

  for (var _len5 = arguments.length, chren = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    chren[_key5 - 2] = arguments[_key5];
  }

  if (atype === 'function' || atype === 'string' || atype === 'number') {
    chren.unshift(attrs);
  }

  // Ensure the attributes are an object. Null is considered an object so we
  // have to test for this explicitly.
  if (attrs === null || atype !== 'object') {
    attrs = {};
  }

  // We open the element so we can set attrs after.
  newElementOpenStart(tname, attrs.key, attrs.statics);

  // Delete so special attrs don't actually get set.
  delete attrs.key;
  delete attrs.statics;

  // Set attributes.
  Object.keys(attrs).forEach(function (name) {
    return newAttr(name, attrs[name]);
  });

  // Close before we render the descendant tree.
  newElementOpenEnd(tname);

  chren.forEach(function (ch) {
    var ctype = typeof ch === 'undefined' ? 'undefined' : _typeof(ch);
    if (ctype === 'function') {
      ch();
    } else if (ctype === 'string' || ctype === 'number') {
      newText(ch);
    } else if (Array.isArray(ch)) {
      ch.forEach(function (sch) {
        return sch();
      });
    }
  });

  return newElementClose(tname);
}

// Even further convenience for building a DSL out of JavaScript functions or hooking into standard
// transpiles for JSX (React.createElement() / h).
function builder() {
  for (var _len6 = arguments.length, tags = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tags[_key6] = arguments[_key6];
  }

  if (tags.length === 0) {
    return function () {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return element.bind.apply(element, [null].concat(args));
    };
  }
  return tags.map(function (tag) {
    return function () {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return element.bind.apply(element, [null, tag].concat(args));
    };
  });
}

// We don't have to do anything special for the text function; it's just a
// straight export from Incremental DOM.


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_data__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_get_default_value__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_get_initial_value__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__ = __webpack_require__(32);
/* harmony export (immutable) */ __webpack_exports__["a"] = createNativePropertyDescriptor;








function createNativePropertyDescriptor(propDef) {
  var nameOrSymbol = propDef.nameOrSymbol;


  var prop = {
    configurable: true,
    enumerable: true
  };

  prop.beforeDefineProperty = function (elem) {
    var propData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(elem, nameOrSymbol);
    var attrSource = propDef.attrSource;

    // Store attrSource name to property link.
    if (attrSource) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_data__["a" /* default */])(elem, 'attrSourceLinks')[attrSource] = nameOrSymbol;
    }

    // prop value before upgrading
    var initialValue = elem[nameOrSymbol];

    // Set up initial value if it wasn't specified.
    var valueFromAttrSource = false;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(initialValue)) {
      if (attrSource && elem.hasAttribute(attrSource)) {
        valueFromAttrSource = true;
        initialValue = propDef.deserialize(elem.getAttribute(attrSource));
      } else if ('initial' in propDef) {
        initialValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util_get_initial_value__["a" /* default */])(elem, propDef);
      } else {
        initialValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_get_default_value__["a" /* default */])(elem, propDef);
      }
    }

    initialValue = propDef.coerce(initialValue);

    propData.internalValue = initialValue;

    // Reflect to Target Attribute
    var mustReflect = propDef.attrTarget && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(initialValue) && (!valueFromAttrSource || propDef.attrTargetIsNotSource);

    if (mustReflect) {
      var serializedValue = propDef.serialize(initialValue);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__["a" /* default */])(elem).setAttrValue(propDef.attrTarget, serializedValue);
    }
  };

  prop.get = function get() {
    var propData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(this, nameOrSymbol);
    var internalValue = propData.internalValue;

    return propDef.get ? propDef.get(this, { name: nameOrSymbol, internalValue: internalValue }) : internalValue;
  };

  prop.set = function set(newValue) {
    var propData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util_get_prop_data__["a" /* default */])(this, nameOrSymbol);

    var useDefaultValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(newValue);
    if (useDefaultValue) {
      newValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_get_default_value__["a" /* default */])(this, propDef);
    }

    newValue = propDef.coerce(newValue);

    if (propDef.set) {
      var oldValue = propData.oldValue;


      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_empty__["a" /* default */])(oldValue)) {
        oldValue = null;
      }
      var changeData = { name: nameOrSymbol, newValue: newValue, oldValue: oldValue };
      propDef.set(this, changeData);
    }

    // Queue a re-render.
    this[__WEBPACK_IMPORTED_MODULE_0__util_symbols__["i" /* rendererDebounced */]](this);

    // Update prop data so we can use it next time.
    propData.internalValue = propData.oldValue = newValue;

    // Reflect to Target attribute.
    var mustReflect = propDef.attrTarget && (propDef.attrTargetIsNotSource || !propData.settingPropFromAttrSource);
    if (mustReflect) {
      // Note: setting the prop to empty implies the default value
      // and therefore no attribute should be present!
      var serializedValue = useDefaultValue ? null : propDef.serialize(newValue);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_attributes_manager__["a" /* default */])(this).setAttrValue(propDef.attrTarget, serializedValue);
    }
  };

  return prop;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Polyfill Object.is for IE
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
/* harmony default export */ __webpack_exports__["a"] = Object.is;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSymbol;
function createSymbol(description) {
  return typeof Symbol === 'function' ? Symbol(description) : description;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (str) {
  return str.split(/([A-Z])/).reduce(function (one, two, idx) {
    var dash = !one || idx % 2 === 0 ? '' : '-';
    return '' + one + dash + two.toLowerCase();
  });
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__native__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root__ = __webpack_require__(3);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var MutationObserver = __WEBPACK_IMPORTED_MODULE_1__root__["a" /* default */].MutationObserver;


function microtaskDebounce(cbFunc) {
  var scheduled = false;
  var i = 0;
  var cbArgs = [];
  var elem = document.createElement('span');
  var observer = new MutationObserver(function () {
    cbFunc.apply(undefined, _toConsumableArray(cbArgs));
    scheduled = false;
    cbArgs = null;
  });

  observer.observe(elem, { childList: true });

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cbArgs = args;
    if (!scheduled) {
      scheduled = true;
      elem.textContent = '' + i;
      i += 1;
    }
  };
}

// We have to use setTimeout() for IE9 and 10 because the Mutation Observer
// polyfill requires that the element be in the document to trigger Mutation
// Events. Mutation Events are also synchronous and thus wouldn't debounce.
//
// The soonest we can set the timeout for in IE is 1 as they have issues when
// setting to 0.
function taskDebounce(cbFunc) {
  var scheduled = false;
  var cbArgs = [];
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    cbArgs = args;
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        cbFunc.apply(undefined, _toConsumableArray(cbArgs));
      }, 1);
    }
  };
}
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__native__["a" /* default */])(MutationObserver) ? microtaskDebounce : taskDebounce;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = error;
function error(message) {
  throw new Error(message);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDefaultValue;
function getDefaultValue(elem, propDef) {
  return typeof propDef.default === 'function' ? propDef.default(elem, { name: propDef.nameOrSymbol }) : propDef.default;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInitialValue;
function getInitialValue(elem, propDef) {
  return typeof propDef.initial === 'function' ? propDef.initial(elem, { name: propDef.nameOrSymbol }) : propDef.initial;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get_prop_names_and_symbols__["a" /* default */])(obj).reduce(function (prev, nameOrSymbol) {
    prev[nameOrSymbol] = Object.getOwnPropertyDescriptor(obj, nameOrSymbol);
    return prev;
  }, {});
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = getPropData;


function getPropData(elem, name) {
  var elemData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__data__["a" /* default */])(elem, 'props');
  return elemData[name] || (elemData[name] = {});
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var nativeHints = ['native code', '[object MutationObserverConstructor]' // for mobile safari iOS 9.0
];
/* harmony default export */ __webpack_exports__["a"] = function (fn) {
  return nativeHints.map(function (hint) {
    return (fn || '').toString().indexOf([hint]) > -1;
  }).reduce(function (a, b) {
    return a || b;
  });
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign__ = __webpack_require__(4);


function enter(object, props) {
  var saved = {};
  Object.keys(props).forEach(function (key) {
    saved[key] = object[key];
    object[key] = props[key];
  });
  return saved;
}

function exit(object, saved) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assign__["a" /* default */])(object, saved);
}

// Decorates a function with a side effect that changes the properties of an
// object during its execution, and restores them after. There is no error
// handling here, if the wrapped function throws an error, properties are not
// restored and all bets are off.
/* harmony default export */ __webpack_exports__["a"] = function (object, props) {
  return function (func) {
    return function () {
      var saved = enter(object, props);
      var result = func.apply(undefined, arguments);
      exit(object, saved);
      return result;
    };
  };
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dash_case__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is_type__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






/**
 * @internal
 * Property Definition
 *
 * Internal meta data and strategies for a property.
 * Created from the options of a PropOptions config object.
 *
 * Once created a PropDefinition should be treated as immutable and final.
 * 'getPropsMap' function memoizes PropDefinitions by Component's Class.
 *
 * The 'attribute' option is normalized to 'attrSource' and 'attrTarget' properties.
 */

var PropDefinition = function () {
  function PropDefinition(nameOrSymbol, propOptions) {
    var _this = this;

    _classCallCheck(this, PropDefinition);

    this._nameOrSymbol = nameOrSymbol;

    propOptions = propOptions || {};

    // default 'attrSource': no observed source attribute (name)
    this.attrSource = null;

    // default 'attrTarget': no reflected target attribute (name)
    this.attrTarget = null;

    // default 'attrTargetIsNotSource'
    this.attrTargetIsNotSource = false;

    // default 'coerce': identity function
    this.coerce = function (value) {
      return value;
    };

    // default 'default': set prop to 'null'
    this.default = null;

    // default 'deserialize': return attribute's value (string or null)
    this.deserialize = function (value) {
      return value;
    };

    // default 'get': no function
    this.get = null;

    // 'initial' default: unspecified
    // 'initial' option is truly optional and it cannot be initialized.
    // Its presence is tested using: ('initial' in propDef)

    // 'serialize' default: return string value or null
    this.serialize = function (value) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__empty__["a" /* default */])(value) ? null : String(value);
    };

    // default 'set': no function
    this.set = null;

    // Note: option key is always a string (no symbols here)
    Object.keys(propOptions).forEach(function (option) {
      var optVal = propOptions[option];

      // Only accept documented options and perform minimal input validation.
      switch (option) {
        case 'attribute':
          if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["c" /* isObject */])(optVal)) {
            _this.attrSource = _this.attrTarget = resolveAttrName(optVal, nameOrSymbol);
          } else {
            var source = optVal.source,
                target = optVal.target;

            if (!source && !target) {
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(option + ' \'source\' or \'target\' is missing.');
            }
            _this.attrSource = resolveAttrName(source, nameOrSymbol);
            _this.attrTarget = resolveAttrName(target, nameOrSymbol);
            _this.attrTargetIsNotSource = _this.attrTarget !== _this.attrSource;
          }
          break;
        case 'coerce':
        case 'deserialize':
        case 'get':
        case 'serialize':
        case 'set':
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["a" /* isFunction */])(optVal)) {
            _this[option] = optVal;
          } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(option + ' must be a function.');
          }
          break;
        case 'default':
        case 'initial':
          _this[option] = optVal;
          break;
        default:
          // TODO: undocumented options?
          _this[option] = optVal;
          break;
      }
    });
  }

  _createClass(PropDefinition, [{
    key: 'nameOrSymbol',
    get: function get() {
      return this._nameOrSymbol;
    }
  }]);

  return PropDefinition;
}();

/* harmony default export */ __webpack_exports__["a"] = PropDefinition;


function resolveAttrName(attrOption, nameOrSymbol) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["d" /* isSymbol */])(nameOrSymbol)) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__error__["a" /* default */])(nameOrSymbol.toString() + ' symbol property cannot have an attribute.');
  } else {
    if (attrOption === true) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dash_case__["a" /* default */])(String(nameOrSymbol));
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__is_type__["e" /* isString */])(attrOption)) {
      return attrOption;
    }
  }
  return null;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueId;
// DEPRECATED prefix when we deprecated the name argument to define()
function uniqueId(prefix) {
  // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
  var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    // eslint-disable-next-line no-mixed-operators
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return (prefix || 'x') + '-' + rand;
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(2)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(7)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cached reference to the hasOwnProperty function.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * A cached reference to the create function.
 */
var create = Object.create;

/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param {!Object<string, *>} map The map to check.
 * @param {string} property The property to check.
 * @return {boolean} Whether map has property.
 */
var has = function (map, property) {
  return hasOwnProperty.call(map, property);
};

/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function () {
  return create(null);
};

/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
  /**
   * The attributes and their values.
   * @const {!Object<string, *>}
   */
  this.attrs = createMap();

  /**
   * An array of attribute name/value pairs, used for quickly diffing the
   * incomming attributes to see if the DOM node's attributes need to be
   * updated.
   * @const {Array<*>}
   */
  this.attrsArr = [];

  /**
   * The incoming attributes for this Node, before they are updated.
   * @const {!Object<string, *>}
   */
  this.newAttrs = createMap();

  /**
   * The key used to identify this node, used to preserve DOM nodes when they
   * move within their parent.
   * @const
   */
  this.key = key;

  /**
   * Keeps track of children within this node by their key.
   * {?Object<string, !Element>}
   */
  this.keyMap = null;

  /**
   * Whether or not the keyMap is currently valid.
   * {boolean}
   */
  this.keyMapValid = true;

  /**
   * The node name for this node.
   * @const {string}
   */
  this.nodeName = nodeName;

  /**
   * @type {?string}
   */
  this.text = null;
}

/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function (node, nodeName, key) {
  var data = new NodeData(nodeName, key);
  node['__incrementalDOMData'] = data;
  return data;
};

/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {Node} node The node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function (node) {
  var data = node['__incrementalDOMData'];

  if (!data) {
    var nodeName = node.nodeName.toLowerCase();
    var key = null;

    if (node instanceof Element) {
      key = node.getAttribute('key');
    }

    data = initData(node, nodeName, key);
  }

  return data;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var symbols = {
  default: '__default',

  placeholder: '__placeholder'
};

/**
 * @param {string} name
 * @return {string|undefined} The namespace to use for the attribute.
 */
var getNamespace = function (name) {
  if (name.lastIndexOf('xml:', 0) === 0) {
    return 'http://www.w3.org/XML/1998/namespace';
  }

  if (name.lastIndexOf('xlink:', 0) === 0) {
    return 'http://www.w3.org/1999/xlink';
  }
};

/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    var attrNS = getNamespace(name);
    if (attrNS) {
      el.setAttributeNS(attrNS, name, value);
    } else {
      el.setAttribute(name, value);
    }
  }
};

/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
var applyProp = function (el, name, value) {
  el[name] = value;
};

/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
var applyStyle = function (el, name, style) {
  if (typeof style === 'string') {
    el.style.cssText = style;
  } else {
    el.style.cssText = '';
    var elStyle = el.style;
    var obj = /** @type {!Object<string,string>} */style;

    for (var prop in obj) {
      if (has(obj, prop)) {
        elStyle[prop] = obj[prop];
      }
    }
  }
};

/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
var applyAttributeTyped = function (el, name, value) {
  var type = typeof value;

  if (type === 'object' || type === 'function') {
    applyProp(el, name, value);
  } else {
    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
  }
};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function (el, name, value) {
  var data = getData(el);
  var attrs = data.attrs;

  if (attrs[name] === value) {
    return;
  }

  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);

  attrs[name] = value;
};

/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
var attributes = createMap();

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;

attributes[symbols.placeholder] = function () {};

attributes['style'] = applyStyle;

/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function (tag, parent) {
  if (tag === 'svg') {
    return 'http://www.w3.org/2000/svg';
  }

  if (getData(parent).nodeName === 'foreignObject') {
    return null;
  }

  return parent.namespaceURI;
};

/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element.
 * @return {!Element}
 */
var createElement = function (doc, parent, tag, key, statics) {
  var namespace = getNamespaceForTag(tag, parent);
  var el = undefined;

  if (namespace) {
    el = doc.createElementNS(namespace, tag);
  } else {
    el = doc.createElement(tag);
  }

  initData(el, tag, key);

  if (statics) {
    for (var i = 0; i < statics.length; i += 2) {
      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
    }
  }

  return el;
};

/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function (doc) {
  var node = doc.createTextNode('');
  initData(node, '#text', null);
  return node;
};

/**
 * Creates a mapping that can be used to look up children using a key.
 * @param {?Node} el
 * @return {!Object<string, !Element>} A mapping of keys to the children of the
 *     Element.
 */
var createKeyMap = function (el) {
  var map = createMap();
  var child = el.firstElementChild;

  while (child) {
    var key = getData(child).key;

    if (key) {
      map[key] = child;
    }

    child = child.nextElementSibling;
  }

  return map;
};

/**
 * Retrieves the mapping of key to child node for a given Element, creating it
 * if necessary.
 * @param {?Node} el
 * @return {!Object<string, !Node>} A mapping of keys to child Elements
 */
var getKeyMap = function (el) {
  var data = getData(el);

  if (!data.keyMap) {
    data.keyMap = createKeyMap(el);
  }

  return data.keyMap;
};

/**
 * Retrieves a child from the parent with the given key.
 * @param {?Node} parent
 * @param {?string=} key
 * @return {?Node} The child corresponding to the key.
 */
var getChild = function (parent, key) {
  return key ? getKeyMap(parent)[key] : null;
};

/**
 * Registers an element as being a child. The parent will keep track of the
 * child using the key. The child can be retrieved using the same key using
 * getKeyMap. The provided key should be unique within the parent Element.
 * @param {?Node} parent The parent of child.
 * @param {string} key A key to identify the child with.
 * @param {!Node} child The child to register.
 */
var registerChild = function (parent, key, child) {
  getKeyMap(parent)[key] = child;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var notifications = {
  /**
   * Called after patch has compleated with any Nodes that have been created
   * and added to the DOM.
   * @type {?function(Array<!Node>)}
   */
  nodesCreated: null,

  /**
   * Called after patch has compleated with any Nodes that have been removed
   * from the DOM.
   * Note it's an applications responsibility to handle any childNodes.
   * @type {?function(Array<!Node>)}
   */
  nodesDeleted: null
};

/**
 * Keeps track of the state of a patch.
 * @constructor
 */
function Context() {
  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.created = notifications.nodesCreated && [];

  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.deleted = notifications.nodesDeleted && [];
}

/**
 * @param {!Node} node
 */
Context.prototype.markCreated = function (node) {
  if (this.created) {
    this.created.push(node);
  }
};

/**
 * @param {!Node} node
 */
Context.prototype.markDeleted = function (node) {
  if (this.deleted) {
    this.deleted.push(node);
  }
};

/**
 * Notifies about nodes that were created during the patch opearation.
 */
Context.prototype.notifyChanges = function () {
  if (this.created && this.created.length > 0) {
    notifications.nodesCreated(this.created);
  }

  if (this.deleted && this.deleted.length > 0) {
    notifications.nodesDeleted(this.deleted);
  }
};

/**
* Makes sure that keyed Element matches the tag name provided.
* @param {!string} nodeName The nodeName of the node that is being matched.
* @param {string=} tag The tag name of the Element.
* @param {?string=} key The key of the Element.
*/
var assertKeyedTagMatches = function (nodeName, tag, key) {
  if (nodeName !== tag) {
    throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
  }
};

/** @type {?Context} */
var context = null;

/** @type {?Node} */
var currentNode = null;

/** @type {?Node} */
var currentParent = null;

/** @type {?Element|?DocumentFragment} */
var root = null;

/** @type {?Document} */
var doc = null;

/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
 * @return {function((!Element|!DocumentFragment),!function(T),T=)}
 * @template T
 */
var patchFactory = function (run) {
  /**
   * TODO(moz): These annotations won't be necessary once we switch to Closure
   * Compiler's new type inference. Remove these once the switch is done.
   *
   * @param {(!Element|!DocumentFragment)} node
   * @param {!function(T)} fn
   * @param {T=} data
   * @template T
   */
  var f = function (node, fn, data) {
    var prevContext = context;
    var prevRoot = root;
    var prevDoc = doc;
    var prevCurrentNode = currentNode;
    var prevCurrentParent = currentParent;
    var previousInAttributes = false;
    var previousInSkip = false;

    context = new Context();
    root = node;
    doc = node.ownerDocument;
    currentParent = node.parentNode;

    if (false) {}

    run(node, fn, data);

    if (false) {}

    context.notifyChanges();

    context = prevContext;
    root = prevRoot;
    doc = prevDoc;
    currentNode = prevCurrentNode;
    currentParent = prevCurrentParent;
  };
  return f;
};

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Document
 *     to patch.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @template T
 */
var patchInner = patchFactory(function (node, fn, data) {
  currentNode = node;

  enterNode();
  fn(data);
  exitNode();

  if (false) {}
});

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {!Element} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM. This should have at most one top level
 *     element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @template T
 */
var patchOuter = patchFactory(function (node, fn, data) {
  currentNode = /** @type {!Element} */{ nextSibling: node };

  fn(data);

  if (false) {}
});

/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function (nodeName, key) {
  var data = getData(currentNode);

  // Key check is done using double equals as we want to treat a null key the
  // same as undefined. This should be okay as the only values allowed are
  // strings, null and undefined so the == semantics are not too weird.
  return nodeName === data.nodeName && key == data.key;
};

/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 * @param {?Array<*>=} statics For an Element, this should be an array of
 *     name-value pairs.
 */
var alignWithDOM = function (nodeName, key, statics) {
  if (currentNode && matches(nodeName, key)) {
    return;
  }

  var node = undefined;

  // Check to see if the node has moved within the parent.
  if (key) {
    node = getChild(currentParent, key);
    if (node && 'production' !== 'production') {
      assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
    }
  }

  // Create the node if it doesn't exist.
  if (!node) {
    if (nodeName === '#text') {
      node = createText(doc);
    } else {
      node = createElement(doc, currentParent, nodeName, key, statics);
    }

    if (key) {
      registerChild(currentParent, key, node);
    }

    context.markCreated(node);
  }

  // If the node has a key, remove it from the DOM to prevent a large number
  // of re-orders in the case that it moved far or was completely removed.
  // Since we hold on to a reference through the keyMap, we can always add it
  // back.
  if (currentNode && getData(currentNode).key) {
    currentParent.replaceChild(node, currentNode);
    getData(currentParent).keyMapValid = false;
  } else {
    currentParent.insertBefore(node, currentNode);
  }

  currentNode = node;
};

/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function () {
  var node = currentParent;
  var data = getData(node);
  var keyMap = data.keyMap;
  var keyMapValid = data.keyMapValid;
  var child = node.lastChild;
  var key = undefined;

  if (child === currentNode && keyMapValid) {
    return;
  }

  if (data.attrs[symbols.placeholder] && node !== root) {
    if (false) {}
    return;
  }

  while (child !== currentNode) {
    node.removeChild(child);
    context.markDeleted( /** @type {!Node}*/child);

    key = getData(child).key;
    if (key) {
      delete keyMap[key];
    }
    child = node.lastChild;
  }

  // Clean the keyMap, removing any unusued keys.
  if (!keyMapValid) {
    for (key in keyMap) {
      child = keyMap[key];
      if (child.parentNode !== node) {
        context.markDeleted(child);
        delete keyMap[key];
      }
    }

    data.keyMapValid = true;
  }
};

/**
 * Changes to the first child of the current node.
 */
var enterNode = function () {
  currentParent = currentNode;
  currentNode = null;
};

/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function () {
  if (currentNode) {
    currentNode = currentNode.nextSibling;
  } else {
    currentNode = currentParent.firstChild;
  }
};

/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function () {
  clearUnvisitedDOM();

  currentNode = currentParent;
  currentParent = currentParent.parentNode;
};

/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @return {!Element} The corresponding Element.
 */
var coreElementOpen = function (tag, key, statics) {
  nextNode();
  alignWithDOM(tag, key, statics);
  enterNode();
  return (/** @type {!Element} */currentParent
  );
};

/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var coreElementClose = function () {
  if (false) {}

  exitNode();
  return (/** @type {!Element} */currentNode
  );
};

/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var coreText = function () {
  nextNode();
  alignWithDOM('#text', null, null);
  return (/** @type {!Text} */currentNode
  );
};

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function () {
  if (false) {}
  return (/** @type {!Element} */currentParent
  );
};

/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function () {
  if (false) {}
  currentNode = currentParent.lastChild;
};

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];

/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function (tag, key, statics, const_args) {
  if (false) {}

  var node = coreElementOpen(tag, key, statics);
  var data = getData(node);

  /*
   * Checks to see if one or more attributes have changed for a given Element.
   * When no attributes have changed, this is much faster than checking each
   * individual argument. When attributes have changed, the overhead of this is
   * minimal.
   */
  var attrsArr = data.attrsArr;
  var newAttrs = data.newAttrs;
  var attrsChanged = false;
  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 1, j += 1) {
    if (attrsArr[j] !== arguments[i]) {
      attrsChanged = true;
      break;
    }
  }

  for (; i < arguments.length; i += 1, j += 1) {
    attrsArr[j] = arguments[i];
  }

  if (j < attrsArr.length) {
    attrsChanged = true;
    attrsArr.length = j;
  }

  /*
   * Actually perform the attribute update.
   */
  if (attrsChanged) {
    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
      newAttrs[arguments[i]] = arguments[i + 1];
    }

    for (var _attr in newAttrs) {
      updateAttribute(node, _attr, newAttrs[_attr]);
      newAttrs[_attr] = undefined;
    }
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function (tag, key, statics) {
  if (false) {}

  argsBuilder[0] = tag;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function (name, value) {
  if (false) {}

  argsBuilder.push(name, value);
};

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function () {
  if (false) {}

  var node = elementOpen.apply(null, argsBuilder);
  argsBuilder.length = 0;
  return node;
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose = function (tag) {
  if (false) {}

  var node = coreElementClose();

  if (false) {}

  return node;
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function (tag, key, statics, const_args) {
  elementOpen.apply(null, arguments);
  return elementClose(tag);
};

/**
 * Declares a virtual Element at the current location in the document that is a
 * placeholder element. Children of this Element can be manually managed and
 * will not be cleared by the library.
 *
 * A key must be specified to make sure that this node is correctly preserved
 * across all conditionals.
 *
 * @param {string} tag The element's tag.
 * @param {string} key The key used to identify this element.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementPlaceholder = function (tag, key, statics, const_args) {
  if (false) {}

  elementOpen.apply(null, arguments);
  skip();
  return elementClose(tag);
};

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} const_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text = function (value, const_args) {
  if (false) {}

  var node = coreText();
  var data = getData(node);

  if (data.text !== value) {
    data.text = /** @type {string} */value;

    var formatted = value;
    for (var i = 1; i < arguments.length; i += 1) {
      /*
       * Call the formatter function directly to prevent leaking arguments.
       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
       */
      var fn = arguments[i];
      formatted = fn(formatted);
    }

    node.data = formatted;
  }

  return node;
};

exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.skip = skip;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen;
exports.elementClose = elementClose;
exports.elementPlaceholder = elementPlaceholder;
exports.text = text;
exports.attr = attr;
exports.symbols = symbols;
exports.attributes = attributes;
exports.applyAttr = applyAttr;
exports.applyProp = applyProp;
exports.notifications = notifications;

//# sourceMappingURL=incremental-dom-cjs.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var skate = __webpack_require__(1);
var css = __webpack_require__(0);
var HelloWorldComponent = (function (_super) {
    __extends(HelloWorldComponent, _super);
    function HelloWorldComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HelloWorldComponent, "is", {
        get: function () { return 'x-hello-world'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldComponent, "props", {
        get: function () {
            return {
                name: skate.prop.string({
                    attribute: true
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldComponent.prototype.renderCallback = function () {
        return [
            skate.h("style", null, css.toString()),
            skate.h("div", { class: css.locals.helloWorld },
                "Hello ",
                this.name,
                " !")
        ];
    };
    return HelloWorldComponent;
}(skate.Component));
skate.define(HelloWorldComponent);


/***/ })
/******/ ]);
//# sourceMappingURL=hello-world.js.map