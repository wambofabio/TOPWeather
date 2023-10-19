/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/WeatherApi.js":
/*!***************************!*\
  !*** ./src/WeatherApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WeatherAPI: () => (/* binding */ WeatherAPI)\n/* harmony export */ });\nclass WeatherAPI {\n  //constructor\n  constructor() {\n    this.apiKey = \"11ebb0ac3b2e468191c130903231810\";\n    this.baseURL = \"http://api.weatherapi.com/v1\";\n  }\n\n  //get current weather with async/await and city name as parameter\n  async getCurrentWeather(city) {\n    try {\n      const response = await fetch(\n        `${this.baseURL}/current.json?key=${this.apiKey}&q=${city}`\n      );\n      const data = await response.json();\n      return data;\n    } catch (err) {\n      console.log(err);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://topweather/./src/WeatherApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WeatherApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherApi */ \"./src/WeatherApi.js\");\n\n\n//create new instance of the respective classes\nconst weatherAPIInstance = new _WeatherApi__WEBPACK_IMPORTED_MODULE_0__.WeatherAPI();\n\n//add event listener to the form to get the location typed in by the user\ndocument\n  .getElementById(\"weatherForm\")\n  .addEventListener(\"submit\", function (event) {\n    // Prevent default form submission behavior\n    event.preventDefault();\n\n    // Get location input value\n    const location = document.getElementById(\"locationInput\").value;\n\n    //call the weatherAPI method with the location as parameter\n    weatherAPIInstance\n      .getCurrentWeather(location)\n      .then((data) => {\n        console.log(data.current);\n        console.log(data.location);\n        //DOM Manipulation\n        //Header\n        const h1 = document.createElement(\"h1\");\n        h1.textContent = `This is the weather like in ${data.location.name}:`;\n        document.body.appendChild(h1);\n        //Temperature\n        const p = document.createElement(\"p\");\n        p.textContent = `Temperature: ${data.current.temp_c}°C`;\n        document.body.appendChild(p);\n        //Temperature feels like\n        const p1 = document.createElement(\"p\");\n        p1.textContent = `Feels like: ${data.current.feelslike_c}°C`;\n        document.body.appendChild(p1);\n        //Condition\n        const p2 = document.createElement(\"p\");\n        p2.textContent = `Condition: ${data.current.condition.text}`;\n        document.body.appendChild(p2);\n        //Wind\n        const p3 = document.createElement(\"p\");\n        p3.textContent = `Wind: ${data.current.wind_kph} kph`;\n        document.body.appendChild(p3);\n        //\n        //Image\n        const img = document.createElement(\"img\");\n        img.src = data.current.condition.icon;\n        document.body.appendChild(img);\n      })\n      .catch((err) => {\n        console.log(err);\n      });\n  });\n\n//summary of the weather with ChatGPT API\n\n\n//# sourceURL=webpack://topweather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;