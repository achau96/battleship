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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n  background-color: aquamarine;\\n}\\n\\n.flex-div {\\n  display: flex;\\n  align-items: center;\\n}\\n.header {\\n  position: sticky;\\n  justify-content: space-between;\\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\\n}\\n.header .logo {\\n  margin-left: 15px;\\n}\\n.header .title {\\n  font-size: 32px;\\n  margin: 10px 10px;\\n  color: blue;\\n}\\n.header .sign-in {\\n  margin-right: 15px;\\n}\\n\\n/* Grids  */\\n\\n.container {\\n  justify-content: space-evenly;\\n  font-size: 24px;\\n  margin-top: 5vh;\\n}\\n\\n.turn {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  align-self: flex-start;\\n}\\n\\n.turnOrder {\\n  margin-bottom: 15px;\\n  margin-top: 15px;\\n}\\n.winner {\\n  font-weight: 600;\\n  font-size: 40px;\\n  animation: win 3s ease-in-out 0s 9 forwards;\\n}\\n@keyframes win {\\n  0% {\\n    background-color: blue;\\n  }\\n  50% {\\n    background-color: purple;\\n  }\\n  100% {\\n    background-color: blue;\\n  }\\n}\\n.arrow {\\n  border: solid 2px darkblue;\\n  border-radius: 5px;\\n  margin-bottom: 10px;\\n  font-size: 40px;\\n  width: 100px;\\n  text-align: center;\\n}\\n\\n.arrow:hover {\\n  cursor: crosshair;\\n}\\n.animate-arrow {\\n  animation: blink 1s ease-in-out 0s infinite forwards;\\n}\\n\\n@keyframes blink {\\n  0% {\\n    background-color: aquamarine;\\n  }\\n  50% {\\n    background-color: greenyellow;\\n  }\\n  100% {\\n    background-color: aquamarine;\\n  }\\n}\\n\\n.status {\\n  display: none;\\n}\\n\\n.start {\\n  justify-self: flex-end;\\n  border: 1px solid green;\\n  background: limegreen;\\n  padding: 10px;\\n  border-radius: 15px;\\n  margin-top: 20px;\\n  transition: 0.5s all ease-in-out;\\n}\\n\\n.start:hover {\\n  cursor: pointer;\\n  transform: scale(1.2);\\n  background-color: rgb(14, 155, 14);\\n}\\n\\n.show {\\n  display: block;\\n  animation: show 2s ease 0s forwards;\\n}\\n\\n@keyframes show {\\n  0% {\\n    opacity: 1;\\n  }\\n  100% {\\n    opacity: 0;\\n  }\\n}\\n\\n.player {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.rotateButton {\\n  font-size: 20px;\\n  border: 1px solid blue;\\n  background: grey;\\n  color: whitesmoke;\\n  padding: 10px;\\n  border-radius: 25px;\\n  margin-top: 20px;\\n  transition: 0.4s all ease-in-out;\\n}\\n.rotateButton:hover {\\n  cursor: pointer;\\n  transform: scale(1.2);\\n}\\n.opponent {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.gameBoard {\\n  margin-top: 20px;\\n  display: grid;\\n  column-gap: 0px;\\n  row-gap: 0px;\\n}\\n\\n.tile {\\n  width: 30px;\\n  height: 30px;\\n  border: solid 1px black;\\n  text-align: center;\\n}\\n\\n.tile:hover {\\n  cursor: pointer;\\n  background-color: cadetblue;\\n}\\n\\n.selected {\\n  background: cadetblue;\\n}\\n\\n.ship {\\n  background-color: gray;\\n  border: solid 1px lightgrey;\\n}\\n\\n.hit {\\n  background-color: maroon;\\n  color: grey;\\n}\\n\\n.miss {\\n  background-color: rgb(10, 90, 125);\\n  color: grey;\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .container {\\n    flex-direction: column;\\n  }\\n  .arrow {\\n    display: none;\\n  }\\n  .turn {\\n    color: blue;\\n    align-self: center;\\n  }\\n  .opponent {\\n    margin-bottom: 20px;\\n  }\\n  .start {\\n    margin-top: 5px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ \"./src/factories/Ship.js\");\n/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/Player */ \"./src/factories/Player.js\");\n/* harmony import */ var _factories_GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/GameBoard */ \"./src/factories/GameBoard.js\");\n\n\n\n\nconst hitCoordinate = (event, enemyBoard, isPlayer) => {\n  const status = document.querySelector('.status');\n\n  //should send coordinate into player, which goes to board and returns a hit or miss\n  //and effects the DOM accordingly\n  for (let i = 0; i < enemyBoard.length; i++) {\n    enemyBoard[i].forEach((ship) => {\n      if (ship.tile == event.dataset.value && ship.shipID !== null) {\n        event.textContent = 'X';\n        event.classList.add('hit');\n        if (isPlayer) {\n          status.textContent = 'Hit!';\n        }\n      } else if (ship.tile == event.dataset.value && ship.shipID === null) {\n        event.textContent = 'O';\n        event.classList.add('miss');\n        if (isPlayer) {\n          status.textContent = 'Missed...';\n        }\n      }\n    });\n  }\n  if (isPlayer) {\n    status.classList.remove('show');\n    setTimeout(() => {\n      status.classList.add('show');\n    }, 10);\n  }\n};\n\nconst Game = (playerBoard, enemyBoard) => {\n  const status = document.querySelector('.turnOrder');\n  const player = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const AI = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const enemyDOM = document.getElementById('enemy');\n  const enemyTiles = enemyDOM.querySelectorAll('.tile');\n  const userDOM = document.getElementById('user');\n  const startButton = document.querySelector('.start');\n  startButton.textContent = 'Restart';\n  startButton.addEventListener('click', (event) => {\n    window.location.reload();\n  });\n\n  //listener callback to clean up listener or remove depending on turn\n  const doClick = (event) => {\n    hitCoordinate(event.target, enemyBoard.board, true);\n    player.move(event.target.dataset.value, enemyBoard);\n    //check win condition\n    if (enemyBoard.allShipStatus() === true) {\n      enemyTiles.forEach((tile) => {\n        tile.removeEventListener('click', doClick, { once: true });\n      });\n      status.textContent = 'YOU WIN!';\n      status.style.color = 'green';\n      status.classList.add('winner');\n    }\n    const AITarget = AI.randomMove(playerBoard);\n    const targetDOM = userDOM.querySelector(`[data-value=${AITarget}`);\n    hitCoordinate(targetDOM, playerBoard.board, false);\n\n    if (playerBoard.allShipStatus() === true) {\n      enemyTiles.forEach((tile) => {\n        tile.removeEventListener('click', doClick, { once: true });\n      });\n      status.textContent = 'YOU LOSE!';\n      status.style.color = 'red';\n      status.classList.add('winner');\n    }\n  };\n  //game figures out whose turn it is, and waits for event listener if player\n  //or makes random move if opponent\n  enemyTiles.forEach((tile) => {\n    tile.addEventListener('click', doClick, { once: true });\n  });\n\n  //Check status if ship is hit, check if all ships are sunk and display winner\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/factories/GameBoard.js":
/*!************************************!*\
  !*** ./src/factories/GameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/factories/Ship.js\");\n\n\nconst createGameBoard = (size = 8) => {\n  //for now we define l*w as 8 by 8\n  //and create a board with coordinates as their values\n  const board = [];\n  for (let i = 0; i < size; i++) {\n    board[i] = [];\n    for (let j = 0; j < size; j++) {\n      board[i][j] = {\n        tile: `${String.fromCharCode(i + 65)}${j + 1}`,\n        shipID: null,\n        isHit: false,\n      };\n    }\n  }\n  return board;\n};\n\nconst GameBoard = (size) => {\n  const shipList = [];\n  const board = createGameBoard(size);\n\n  const placeShip = (isRotated, length, coordinate, id) => {\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board.length; j++) {\n        //could use findIndex instead of another for loop\n        if (board[i][j].tile == coordinate) {\n          const shipCoords = [];\n          //can take out after, just returning for test\n          const testReturn = [];\n          for (let k = 0; k < length; k++) {\n            if (isRotated) {\n              testReturn.push(board[i + k][j]);\n              board[i + k][j].shipID = id;\n              shipCoords.push(board[i + k][j].tile);\n            } else {\n              testReturn.push(board[i][j + k]);\n              board[i][j + k].shipID = id;\n              shipCoords.push(board[i][j + k].tile);\n            }\n          }\n          //need to store newShip to ship list so we can check for same spot in future\n          const newShip = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipCoords, id);\n          shipList.push(newShip);\n          return testReturn;\n        }\n      }\n    }\n  };\n  //test for sending to right ship\n  const receiveAttack = (coordinate) => {\n    let result = undefined;\n    for (let i = 0; i < board.length; i++) {\n      board[i].find((ele, index, arr) => {\n        if (ele.tile == coordinate) {\n          if (arr[index].shipID != null) {\n            shipList.find((ship) => {\n              if (ship.id == arr[index].shipID) {\n                ship.hit(coordinate);\n              }\n            });\n          }\n          arr[index].isHit = true;\n          result = arr[index];\n        }\n      });\n    }\n    return result;\n  };\n\n  const checkCoordinate = (coord) => {\n    for (let i = 0; i < board.length; i++) {\n      for (let j = 0; j < board.length; j++) {\n        //could use findIndex instead of another for loop\n        if (board[i][j].tile === coord) {\n          return board[i][j];\n        }\n      }\n    }\n  };\n\n  const allShipStatus = () => {\n    return shipList.every((ship) => ship.isSunk());\n  };\n\n  const randomShipPlace = (length, title) => {\n    //--------------- Helper functions for random ship -----------------//\n    const rand50 = () => Math.random() < 0.5; //for isRotated\n    const randomCoordinate = (xSize = 8, ySize = 8) => {\n      //used for placement coordinate\n      const random = `${String.fromCharCode(\n        Math.floor(Math.random() * xSize) + 65\n      )}${Math.floor(Math.random() * ySize) + 1}`;\n      return random;\n    };\n\n    //----------------- logic for random ship ------------------------//\n    let shipOrientation, coordinate;\n    let flag = true;\n    while (flag) {\n      let hasShip = false;\n      shipOrientation = rand50();\n      if (shipOrientation === true) {\n        //must check for has ship\n        coordinate = randomCoordinate(8 - length + 1, undefined);\n      } else {\n        coordinate = randomCoordinate(undefined, 8 - length + 1);\n      }\n      for (let i = 0; i < board.length; i++) {\n        for (let j = 0; j < board.length; j++) {\n          if (board[i][j].tile === coordinate) {\n            for (let k = 0; k < length; k++) {\n              if (shipOrientation === true) {\n                if (board[i + k][j].shipID !== null) {\n                  hasShip = true;\n                }\n              } else if (shipOrientation === false) {\n                if (board[i][j + k].shipID !== null) {\n                  hasShip = true;\n                }\n              }\n            }\n          }\n        }\n      }\n      if (hasShip === false) {\n        flag = false;\n      }\n    }\n    placeShip(shipOrientation, length, coordinate, title);\n  };\n\n  return {\n    board,\n    placeShip,\n    shipList,\n    receiveAttack,\n    allShipStatus,\n    randomShipPlace,\n    checkCoordinate,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/factories/GameBoard.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomCoordinate = (size) => {\n  let random = `${String.fromCharCode(Math.floor(Math.random()*size)+65)}${Math.floor(Math.random()*size)+1}`\n  return random;\n}\n\nconst Player = () => {\n\n  const spotHit = (coordinate,board) => {\n    for(let i=0;i<board.length;i++){\n      for(let j=0;j<board.length;j++){\n        if (board[i][j].tile == coordinate && board[i][j].isHit == true) {\n          return [true,board[i][j].shipID];\n        } else if (board[i][j].tile == coordinate && board[i][j].isHit == false) {\n          return [false,board[i][j].shipID];\n        }\n      }\n    }\n  }\n//player should attack a coordinate\n  const move = (coordinate,enemyBoard) => {\n    const status = enemyBoard.receiveAttack(coordinate);\n    if (status.shipID === null) {\n      return 'missed'\n    }\n    return 'hit';\n  }\n\n  const randomMove = (enemyBoard) => {\n    //let target = 'B3'; //my version of mock\n    let target = randomCoordinate(enemyBoard.board.length);\n    while(spotHit(target,enemyBoard.board)[0] == true) {\n      target = randomCoordinate(enemyBoard.board.length);\n    }\n    const status = enemyBoard.receiveAttack(target);\n    // if (status.shipID === null){\n    //   return 'missed';\n    // } else {\n    //   return 'hit';\n    // }\n    return target;\n  }\n  return {move, randomMove}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//user defines position of ship\n\nconst Ship = (position,id) => {\n  //position should be an array of coordinates\n  const shipArray = [...position];\n  let lives = position.length;\n  const hit = (hitMark) => {\n    //in board, we will check if position is 'hit' and perform action\n    //we will take out the ability to click same spot in DOM\n    shipArray[shipArray.indexOf(hitMark)] = 'hit';\n    lives--;\n  }\n  const isSunk = () => {\n   if (lives === 0) {\n   return true;\n   }\n   return false;\n  }\n  return {hit,isSunk,shipArray,id}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/factories/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _factories_GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/GameBoard */ \"./src/factories/GameBoard.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n\n\n// const ships = [\n//   [false, 5, 'A2', 'commander'],\n//   [true, 4, 'B1', 'subCommander'],\n//   [false, 3, 'B4', 'lieutenant'],\n//   [true, 3, 'E3', 'general'],\n//   [false, 2, 'G6', 'smallShip'],\n// ]; //want random coordinate and no overlap\n\nconst createGameBoard = (size, player) => {\n  const gameBoard = document.createElement('div');\n  gameBoard.classList.add('gameBoard');\n  gameBoard.id = player;\n  gameBoard.setAttribute(\n    'style',\n    `grid-template-columns: repeat(${size},1fr);grid-template-rows: repeat(${size},1fr)`\n  );\n  for (let i = 0; i < size; i++) {\n    for (let j = 0; j < size; j++) {\n      const block = document.createElement('div');\n      block.dataset.value = `${String.fromCharCode(i + 65)}${j + 1}`;\n      block.classList.add('tile');\n      gameBoard.appendChild(block);\n    }\n  }\n  return gameBoard;\n};\n\nconst updateDOM = (playerBoard) => {\n  const playerDOM = document.getElementById('user');\n  const playerTiles = playerDOM.querySelectorAll('.tile');\n  playerTiles.forEach((tile) => {\n    for (let i = 0; i < playerBoard.length; i++) {\n      playerBoard[i].forEach((shipTile) => {\n        if (shipTile.shipID != null && shipTile.tile === tile.dataset.value) {\n          tile.classList.add('ship');\n        }\n      });\n    }\n  });\n};\n\nconst lightShip = (event, rotated, length) => {\n  let coord = event.target.dataset.value;\n\n  for (let i = 0; i < length; i++) {\n    const coordSplit = coord.split('');\n    if (rotated && Number(coord.charCodeAt(0)) + i < 73) {\n      coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);\n      const lightUpCoord = document.querySelector(\n        `[data-value=${coordSplit.join('')}]`\n      );\n      lightUpCoord.classList.add('selected');\n    } else if (!rotated && Number(coord.charAt(1)) + i < 9) {\n      coordSplit[1] = Number(coord.charAt(1)) + i;\n      const lightUpCoord = document.querySelector(\n        `[data-value=${coordSplit.join('')}]`\n      );\n      lightUpCoord.classList.add('selected');\n    }\n  }\n};\nconst unLightShip = (event, rotated, length) => {\n  let coord = event.target.dataset.value;\n  for (let i = 0; i < length; i++) {\n    const coordSplit = coord.split('');\n    if (rotated && Number(coord.charCodeAt(0)) + i < 73) {\n      coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);\n      const lightUpCoord = document.querySelector(\n        `[data-value=${coordSplit.join('')}]`\n      );\n      lightUpCoord.classList.remove('selected');\n    } else if (!rotated && Number(coord.charAt(1)) + i < 9) {\n      coordSplit[1] = Number(coord.charAt(1)) + i;\n      const lightUpCoord = document.querySelector(\n        `[data-value=${coordSplit.join('')}]`\n      );\n      lightUpCoord.classList.remove('selected');\n    }\n  }\n};\n\nconst placeTheShip = (event, rotated, playerBoard, length, title) => {\n  playerBoard.placeShip(rotated, length, event.target.dataset.value, title);\n  updateDOM(playerBoard.board);\n};\n\nconst initialize = () => {\n  const playerBoard = (0,_factories_GameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(8);\n  const enemyBoard = (0,_factories_GameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(8);\n  let rotated = false;\n  let currShip = 0;\n  //place ships\n  const ships = [\n    [5, 'commander'],\n    [4, 'subCommander'],\n    [3, 'general'],\n    [3, 'lieutenant'],\n    [2, 'smallShip'],\n  ];\n  const status = () => {\n    if (currShip >= ships.length) {\n      return true;\n    }\n    return false;\n  };\n\n  const rotateButton = document.querySelector('.rotateButton');\n  const player = document.getElementById('user');\n  const playerTiles = player.querySelectorAll('.tile');\n  rotateButton.addEventListener('click', () => {\n    rotated = !rotated;\n  });\n\n  const removeHighlightHolder = (event) => {\n    if (currShip >= 5) {\n      playerTiles.forEach((tile) => {\n        tile.removeEventListener('mouseout', removeHighlightHolder);\n      });\n    }\n    unLightShip(event, rotated, ships[currShip][0]);\n  };\n  const lightShipHolder = (event) => {\n    if (currShip >= 5) {\n      playerTiles.forEach((tile) => {\n        tile.removeEventListener('mouseover', lightShipHolder);\n      });\n    }\n    lightShip(event, rotated, ships[currShip][0]);\n  };\n\n  const placeShipHolder = (event) => {\n    let coord = event.target.dataset.value;\n    let length = ships[currShip][0];\n    let placeable = false;\n    for (let i = 0; i < length; i++) {\n      const coordSplit = coord.split('');\n      if (rotated && Number(coord.charCodeAt(0)) + i < 73) {\n        coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);\n        if (playerBoard.checkCoordinate(coordSplit.join('')).shipID !== null) {\n          placeable = false;\n          break;\n        }\n        placeable = true;\n      } else if (!rotated && Number(coord.charAt(1)) + i < 9) {\n        coordSplit[1] = Number(coord.charAt(1)) + i;\n        if (playerBoard.checkCoordinate(coordSplit.join('')).shipID !== null) {\n          placeable = false;\n          break;\n        }\n        placeable = true;\n      } else {\n        placeable = false;\n      }\n    }\n    if (placeable === true) {\n      placeTheShip(\n        event,\n        rotated,\n        playerBoard,\n        ships[currShip][0],\n        ships[currShip][1]\n      );\n      currShip++;\n    } else {\n      console.log('cannot place ship here!');\n    }\n\n    if (currShip >= 5) {\n      playerTiles.forEach((tile) => {\n        tile.removeEventListener('click', placeShipHolder);\n      });\n    }\n  };\n  playerTiles.forEach((tile) => {\n    tile.addEventListener('mouseover', lightShipHolder);\n  });\n  playerTiles.forEach((tile) => {\n    tile.addEventListener('mouseout', removeHighlightHolder);\n  });\n  playerTiles.forEach((tile) => {\n    tile.addEventListener('click', placeShipHolder);\n  });\n\n  enemyBoard.randomShipPlace(5, 'commander');\n  enemyBoard.randomShipPlace(4, 'subCommander');\n  enemyBoard.randomShipPlace(3, 'general');\n  enemyBoard.randomShipPlace(3, 'lieutenant');\n  enemyBoard.randomShipPlace(2, 'smallShip');\n  //create a randomized ship placement\n  return { playerBoard, enemyBoard, status };\n};\n\nconst App = () => {\n  const player = document.querySelector('.player');\n  const opponent = document.querySelector('.opponent');\n\n  player.appendChild(createGameBoard(8, 'user'));\n  opponent.appendChild(createGameBoard(8, 'enemy'));\n\n  const rotateButton = document.createElement('div');\n  rotateButton.textContent = 'Rotate';\n  rotateButton.classList.add('rotateButton');\n  player.appendChild(rotateButton);\n\n  const { playerBoard, enemyBoard, status } = initialize();\n  // updateDOM(playerBoard.board);\n\n  const start = document.querySelector('.start');\n  const playerTurn = document.querySelector('.playerTurn');\n\n  const gameStart = () => {\n    playerTurn.classList.add('animate-arrow');\n    if (status() === true) {\n      player.removeChild(rotateButton);\n      (0,_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerBoard, enemyBoard);\n      start.removeEventListener('click', gameStart);\n    } else if (status() === false) {\n      console.log('not all ships placed yet');\n    }\n  };\n  start.addEventListener('click', gameStart);\n};\n\nApp();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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