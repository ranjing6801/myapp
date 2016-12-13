/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports) {

	eval("/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\nvar urlArr = [];\r\nvar hType = \"htmlHash_\"; //便于获取数据\r\nlocalStorage.clear();\r\nif(localStorage.pcount){\r\n\tlocalStorage.pcount++;\r\n\twindow.location.href = \"../index.html\";\r\n}else{\r\n\tlocalStorage.setItem()\r\n}\r\n\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9jYWwuanM/M2Q4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbnZhciB1cmxBcnIgPSBbXTtcclxudmFyIGhUeXBlID0gXCJodG1sSGFzaF9cIjsgLy/kvr/kuo7ojrflj5bmlbDmja5cclxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbmlmKGxvY2FsU3RvcmFnZS5wY291bnQpe1xyXG5cdGxvY2FsU3RvcmFnZS5wY291bnQrKztcclxuXHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vaW5kZXguaHRtbFwiO1xyXG59ZWxzZXtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgpXHJcbn1cclxuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL2xvY2FsLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

/******/ });