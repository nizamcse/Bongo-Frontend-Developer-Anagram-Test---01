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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { generateText, createElement, validateInput,isAnagram } = __webpack_require__(/*! ./util */ \"./util.js\");\r\n\r\nconst mainBody = document.getElementById(\"main-body\");\r\nconst element = createElement('p', \"Enter two string to get the result\", 'text-danger','message');\r\n\r\nconst initApp = () => {\r\n  \r\n  const firstString = document.querySelector('input#firstString');\r\n  const secondString = document.querySelector('input#secondString');\r\n  firstString.addEventListener('keyup',checkAnagram);\r\n  secondString.addEventListener('keyup',checkAnagram);\r\n  mainBody.appendChild(element);\r\n  checkAnagram();\r\n};\r\n\r\n\r\nconst checkAnagram = () => {\r\n  const str1 = document.querySelector('input#firstString').value;\r\n  const str2 = document.querySelector('input#secondString').value;\r\n\r\n  if(!str1.length || !str2.length){\r\n    element.classList.remove(\"text-success\");\r\n    element.classList.add(\"text-danger\");\r\n    element.textContent = \"Inputs can not be empty\";\r\n  }else if(isAnagram(str1,str2)){\r\n    element.classList.remove(\"text-danger\");\r\n    element.classList.add(\"text-success\");\r\n    element.textContent = str1 +\" and \" + str2 + \" are anagram.\";\r\n  }else{\r\n    element.classList.remove(\"text-success\");\r\n    element.classList.add(\"text-danger\");\r\n    element.textContent = str1 +\" and \" + str2 + \"are not anagram.\";\r\n    console.log(\"Hello\");\r\n  }\r\n};\r\n// Start the app!\r\ninitApp();\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.isAnagram = (first_string,second_string) => {\r\n  const str1 = first_string.toLowerCase().replace(/[^a-z\\d]/g,'').split('').sort().join('');\r\n  const str2 = second_string.toLowerCase().replace(/[^a-z\\d]/g,'').split('').sort().join('');\r\n  return str1 === str2;\r\n};\r\n\r\nexports.createElement = (type, text, className,id) => {\r\n  // Creates a new HTML element and returns it\r\n  const newElement = document.createElement(type);\r\n  newElement.classList.add(className);\r\n  newElement.id = id;\r\n  newElement.textContent = text;\r\n  return newElement;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });