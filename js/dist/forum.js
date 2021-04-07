module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditorButton */ "flarum/components/TextEditorButton");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__);





var $ = __webpack_require__(/*! jquery */ "jquery");

function isArray(obj) {
  return !!obj && obj.constructor === Array;
}

function renderMath(element) {
  if (window.hasOwnProperty('MathJax')) {
    console.log("Drawing");
    MathJax.typeset(); //MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.dom]);
  } else {
    setTimeout(function () {
      renderMath(element);
    }, 100);
  }
} // We provide our extension code in the form of an "initializer".
// This is a callback that will run after the core has booted.


app.initializers.add('our-extension', function (app) {
  var head = document.getElementsByTagName("head")[0],
      script;
  script = document.createElement("script");
  script.type = "text/x-mathjax-config";
  script[window.opera ? "innerHTML" : "text"] = "MathJax.Hub.Config({\n" + "  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n" + "});";
  head.appendChild(script);
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  head.appendChild(script);
  window.MathJax = {
    tex: {
      tags: 'ams'
    }
  };
  /*extend(CommentPost.prototype, 'oncreate', function (original, element, b) {
    renderMath(element);
  });
   extend(CommentPost.prototype, 'onbeforeupdate', function (original, element, b) {
    renderMath(element);
  });
   extend(CommentPost.prototype, 'onupdate', function (original, element, b) {
    renderMath(element);
  });
   extend(CommentPost.prototype, 'oninit', function (original, element, b) {
    renderMath(element);
  });
   extend(CommentPost.prototype, 'onbeforeremove', function (original, element, b) {
    renderMath(element);
  });*/

  if (s9e && s9e.TextFormatter) {
    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(s9e.TextFormatter, 'preview', function (original, preview, element) {
      /*let finalEl = $(element).html();
      let dst = finalEl.match(/\$\$(.*?)\$\$/g);
      let src = preview.match(/\$\$(.*?)\$\$/g);
       if(isArray(dst) && isArray(src)) {
        for(let i = 0; i < dst.length; i++) {
          $(element).html($(element).html().replace(dst[i], src[i]));
        }
      }*/
      renderMath(element);
    });
  }
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/components/TextEditorButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditorButton']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditorButton'];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map