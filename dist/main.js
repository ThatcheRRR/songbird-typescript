/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/App/App.js":
/*!***********************************!*\
  !*** ./src/Components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/Components/App/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Header/Header */ \"./src/Components/Header/Header.js\");\n/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main/Main */ \"./src/Components/Main/Main.js\");\n/* harmony import */ var _Data_Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Data/Data */ \"./src/Components/Data/Data.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      totalScore: 0,\n      currentTheme: 0,\n      gameId: null,\n      isLevelDone: false,\n      isGameDone: false,\n      needRefresh: false,\n      wrongAnswers: 0,\n      gameForQuestion: Math.floor(Math.random() * 6)\n    };\n    _this.onChangeTitle = _this.onChangeTitle.bind(_assertThisInitialized(_this));\n    _this.onPickGame = _this.onPickGame.bind(_assertThisInitialized(_this));\n    _this.onChangeRefresh = _this.onChangeRefresh.bind(_assertThisInitialized(_this));\n    _this.onPickWrongAnswer = _this.onPickWrongAnswer.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"onChangeTitle\",\n    value: function onChangeTitle() {\n      this.setState({\n        currentTheme: this.state.currentTheme + 1,\n        gameId: null,\n        isLevelDone: false,\n        gameForQuestion: Math.floor(Math.random() * 6),\n        needRefresh: true,\n        wrongAnswers: 0\n      });\n    }\n  }, {\n    key: \"onChangeRefresh\",\n    value: function onChangeRefresh() {\n      this.setState({\n        needRefresh: false\n      });\n    }\n  }, {\n    key: \"onPickGame\",\n    value: function onPickGame(id) {\n      var _this2 = this;\n\n      this.setState({\n        gameId: id\n      });\n\n      if (id === this.state.gameForQuestion) {\n        this.setState(function (state) {\n          var newScore;\n\n          if (_this2.state.isLevelDone) {\n            newScore = state.totalScore;\n          } else {\n            newScore = state.totalScore + 5 - _this2.state.wrongAnswers;\n          }\n\n          return {\n            totalScore: newScore,\n            isLevelDone: true\n          };\n        });\n      }\n    }\n  }, {\n    key: \"onPickWrongAnswer\",\n    value: function onPickWrongAnswer() {\n      this.setState(function (state) {\n        return {\n          wrongAnswers: state.wrongAnswers + 1\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var currentGames = _Data_Data__WEBPACK_IMPORTED_MODULE_4__[\"default\"][this.state.currentTheme];\n      var pickedGame = currentGames[this.state.gameId];\n      var itemForQuestion = currentGames[this.state.gameForQuestion];\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        currentTheme: this.state.currentTheme,\n        totalScore: this.state.totalScore\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onChangeTitle: this.onChangeTitle,\n        gameForQuestion: this.state.gameForQuestion,\n        onPickGame: this.onPickGame,\n        isLevelDone: this.state.isLevelDone,\n        pickedGame: pickedGame,\n        itemForQuestion: itemForQuestion,\n        currentGames: currentGames,\n        needRefresh: this.state.needRefresh,\n        onChangeRefresh: this.onChangeRefresh,\n        onPickWrongAnswer: this.onPickWrongAnswer\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/Components/App/App.js?");

/***/ }),

/***/ "./src/Components/App/App.scss":
/*!*************************************!*\
  !*** ./src/Components/App/App.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/App/App.scss?");

/***/ }),

/***/ "./src/Components/App/assets/question.png":
/*!************************************************!*\
  !*** ./src/Components/App/assets/question.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"752d63d84994500cf857ab46e34aa739.png\");\n\n//# sourceURL=webpack:///./src/Components/App/assets/question.png?");

/***/ }),

/***/ "./src/Components/Data/Data.js":
/*!*************************************!*\
  !*** ./src/Components/Data/Data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [[{\n  id: 0,\n  name: 'Counter-Strike: Global Offensive',\n  description: 'разработана компаниями Valve и Hidden Path Entertainment и издана в 2012 году. Игроки распределяются по двум командам и сражаются друг с другом. В игре представлены две команды: террористы и спецназ, а также два сценария игры: разминирование бомбы и спасение заложника.',\n  image: 'https://i.playground.ru/e/k1jAC89bWjiKj38d1xmRpw.jpeg',\n  audio: 'https://storage.lightaudio.ru/35c5de35/11921afe4/CSGO%20%E2%80%94%20%D0%98%D0%B7%20%D0%BC%D0%B5%D0%BD%D1%8E%20%D0%B8%D0%B3%D1%80%D1%8B.mp3'\n}, {\n  id: 1,\n  name: 'Overwatch',\n  description: 'разработана и выпущена компанией Blizzard Entertainment в 2016 году. В Overwatch две команды игроков по шесть человек ведут сражение на сложно устроенной карте; перед каждым сражением игроки выбирают себе персонажей-героев.',\n  image: 'https://киберспорт.рф/wp-content/uploads/2019/01/Overwatch.jpg',\n  audio: 'https://storage.lightaudio.ru/39922439/13449780/Overwatch%20%E2%80%94%20Main%20Menu.mp3'\n}, {\n  id: 2,\n  name: 'Valorant',\n  description: 'разработана и издана компанией Riot Games в 2020 году. Valorant является первой игрой Riot Games в жанре шутера от первого лица. Игра является противостоянием двух команд по пять игроков, каждый из них играет в роли «агентов» с особенными способностями.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/c/cd/Valorant_poster.jpg',\n  audio: 'https://storage.lightaudio.ru/39923087/294df77a/Valorant%20OST%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 3,\n  name: 'Battlefield 4',\n  description: 'двенадцатая по счету из серии игр Battlefield, разработанная компанией DICE и изданная Electronic Arts в 2013 году. Действие происходит через 6 лет после событий Battlefield 3 в 2020 году.',\n  image: 'https://cdn.lenta.ru/images/0000/0298/000002989721/pic_1364369964.jpg',\n  audio: 'https://storage.lightaudio.ru/1d614d73/15aece4d/Battlefield%204%20%E2%80%94%20Menu%20Theme.mp3'\n}, {\n  id: 4,\n  name: \"PLAYERUNKNOWN'S BATTLEGROUNDS\",\n  description: 'разработана и издана студией PUBG Corporation в 2017 году. Игроки в количестве до 100 человек сражаются в «королевской битве», где игроки воюют между собой, чтобы стать последним выжившим.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/c/c9/Логотип_игры_PlayerUnknown%27s_Battlegrounds.jpg/800px-Логотип_игры_PlayerUnknown%27s_Battlegrounds.jpg',\n  audio: 'https://storage.lightaudio.ru/399226ea/4d57f92b/PUBG%20%E2%80%94%20Main%20Menu%20OST.mp3'\n}, {\n  id: 5,\n  name: 'DOOM Eternal',\n  description: 'разработана компанией id Software и издана Bethesda Softworks в 2020 году. Игрок берёт на себя роль Палача Рока, древнего демоноборца. Игра разделена на отдельные уровни, которые сочетают в себе научно-фантастическую и фэнтезийную тематику.',\n  image: 'https://technibuzz.com/wp-content/uploads/2019/01/Doom-Eternal-300x167.jpg',\n  audio: 'https://storage.lightaudio.ru/39922745/125c590f/Mick%20Gordon%20%E2%80%94%20DOOM%20Eternal.mp3'\n}], [{\n  id: 0,\n  name: 'Mafia II',\n  description: 'разработана компанией 2K Czech и издана в 2010 году. Игроку в роли Вито Скалетты необходимо путешествовать по городу Эмпайр-Бэй, общаться с различными персонажами, выполнять задания, заключающиеся в перестрелках, необходимости водить автомобиль и т. д.',\n  image: 'https://img1.goodfon.ru/original/1152x864/c/4a/igry-mafia-2-wallpers.jpg',\n  audio: 'https://storage.lightaudio.ru/39922440/28fe6857/Mafia%202%20%E2%80%94%20maim%20theme.mp3'\n}, {\n  id: 1,\n  name: 'Grand Theft Auto: San Andreas',\n  description: 'разработана студией Rockstar North и издана компанией Rockstar Games в 2004 году. Действие игры происходит в 1992 году, в окрестностях штата Сан-Андреас. Игрок управляет главным героем Карлом Джонсоном, афроамериканцем в возрасте около 25 лет.',\n  image: 'https://3.bp.blogspot.com/-ciTYv4GHePg/W7SEu5dfU2I/AAAAAAAAA0U/t57YWK3jR7IyCPxkIH_Z1uMiL_7_M9bmQCLcBGAs/s320/122.png',\n  audio: 'https://storage.lightaudio.ru/72f4a0a/ca3d934/GTA%20SA%20%E2%80%94%20Menu%20Theme.mp3'\n}, {\n  id: 2,\n  name: 'Saints Row: The Third',\n  description: 'разработана компанией Volition, Inc и выпущена в 2011 году. Кампания происходит в вымышленном городе Стилпорте, куда Святые были вынуждены бежать из-за конфликта с Синдикатом.',\n  image: 'https://goodtorr.ru/wp-content/uploads/2018/07/Saints-Row-3-The-Third.jpg',\n  audio: 'https://storage.lightaudio.ru/2c5b54d6/2260ca91/Saints%20Raw%20%E2%80%94%20main.mp3'\n}, {\n  id: 3,\n  name: 'Watch Dogs 2',\n  description: 'разработана компанией Ubisoft и выпущена в 2016 году. Главный герой игры — хакер, родом из Окленда, штат Калифорния, по имени Маркус Холлоуэй переезжает в Сан-Франциско, в сердце Кремниевой Долины, где, объединившись с группировкой активистов из организации DedSec.',\n  image: 'https://img1.goodfon.ru/original/800x480/7/9f/watch-dogs-2-ubisoft-game.jpg',\n  audio: 'https://storage.lightaudio.ru/39922534/2a50253/Watch%20Dogs%20%E2%80%94%20Main%20Menu%20theme.mp3'\n}, {\n  id: 4,\n  name: 'The Saboteur',\n  description: 'разработана Pandemic Studios и выпущена Electronic Arts в 2009 году. Действие происходит в Париже и его окрестностях. Город разделён на три оккупационные зоны, дороги между которыми перекрыты немецкими блокпостами.',\n  image: 'https://upload.wikimedia.org/wikipedia/uk/thumb/4/43/Official_Saboteur_Game_Cover_Art.JPG/256px-Official_Saboteur_Game_Cover_Art.JPG',\n  audio: 'https://storage.lightaudio.ru/39934dbe/2ea34339/%D0%A0%D0%B0%D0%B7%D0%BD%D1%8B%D0%B5%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D0%B8%20%E2%80%94%20The%20Saboteur%20Theme.mp3'\n}, {\n  id: 5,\n  name: 'Just Cause 2',\n  description: 'разработана студией Avalanche Studios и выпущена Square Enix в 2010 году. Игрок управляет оперативником вымышленного Агентства Рико Родригесом. Его с напарницей посылают в островную республику Панау, расположенную в Юго-Восточной Азии. Управляет страной диктатор Малыш Панай — тиран и убийца с манией величия.',\n  image: 'https://i.pinimg.com/736x/63/1b/9b/631b9b9e3b538c8d10e6858d5563cd39--just-cause--pc-games.jpg',\n  audio: 'https://storage.lightaudio.ru/10b921ac/bd77834/Just%20Cause%202%20%E2%80%94%20Menu.mp3'\n}], [{\n  id: 0,\n  name: 'Tropico 5',\n  description: 'разработана студией Haemimont Games и издана Kalypso Media в 2014 году. Игрок выступает в роли главы небольшого островного государства Тропико. Ему предстоит привести остров к процветанию и позаботиться о своей жизни, откладывая деньги на счёт в швейцарском банке.',\n  image: 'https://i.ebayimg.com/images/g/-KYAAOSwH9Jd1ox~/s-l400.jpg',\n  audio: 'https://storage.lightaudio.ru/399226c0/13cf1e8f/Tropico%205%20%E2%80%94%20Motika.mp3'\n}, {\n  id: 1,\n  name: 'Sid Meier’s Civilization VI',\n  description: 'разработана Firaxis Games и выпущена в 2016 году. Игроку предстоит посоревноваться в деле построения и развития своей собственной цивилизации, начав с маленького племени, постепенно расширяя свою империю с целью добиться господства над всей планетой.',\n  image: 'https://games.mail.ru/hotbox/content_files/article/31518/lead_pic/0b57b.jpeg',\n  audio: 'https://storage.lightaudio.ru/39972469/3bb5091f/Peter%20Hollens%20%E2%80%94%20Sogno%20Di%20Volare%20%28Civilization%20VI%20Main%20Theme%29.mp3'\n}, {\n  id: 2,\n  name: 'Hearts of Iron IV',\n  description: 'разработана студией Paradox Development Studio и издана Paradox Interactive в 2016 году. Hearts of Iron IV фокусируется на Второй мировой войне. Игрок может взять под своей правление любое государство на Земле, привести их к победе или поражению в войне против других государств.',\n  image: 'https://i.playground.ru/p/2vSqrRl-3AV0p_ciX1YaKQ.jpeg',\n  audio: 'https://storage.lightaudio.ru/399227c2/1191f5104/Hearts%20of%20Iron%20IV%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 3,\n  name: 'Warcraft III: Reign of Chaos',\n  description: 'разработана компанией Blizzard Entertainment в 2002 году. От игроков требуется собирать ресурсы, строить здания и производить подразделения для разведки карты и победы над противником в бою. Используются 3 основных ресурса: золото, дерево и пропитание',\n  image: 'https://i.pinimg.com/736x/73/b9/09/73b909ae907b70001d6d19074e0f7cf4.jpg',\n  audio: 'https://storage.lightaudio.ru/399230ab/14b63769/Warcraft%203%20Reign%20Of%20Chaos%20%E2%80%94%20Menu%20Theme.mp3'\n}, {\n  id: 4,\n  name: 'XCOM 2',\n  description: 'разработчик — Firaxis Games, издатель — 2K Games. Дата выпуска: 2016 год. Пришельцы победили в войне с армиями Земли, организация XCOM забыта и заброшена. Иноземные захватчики колонизировали планету и установили тотальный контроль над миром.',\n  image: 'https://stopga.me/images/blogs/2016/07/14/ZP5jjhmSa.jpg',\n  audio: 'https://storage.lightaudio.ru/38140d3c/166496d9/XCOM%202%20OST%20%E2%80%94%20Main%20Menu%20Theme.mp3'\n}, {\n  id: 5,\n  name: 'Stronghold 2',\n  description: 'выпущена Firefly Studios в 2005 году. Игрок начинает игру лордом, который правит средневековым замком. Используя доступные ресурсы, он строит жилые и военные здания, мастерские, постройки для добычи ресурсов и пищи.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/a/a5/Stronghold_2.png',\n  audio: 'https://storage.lightaudio.ru/39922504/66173c4/Stronghold%202%20%28OST%29%20%E2%80%94%20Labyrinth.mp3'\n}], [{\n  id: 0,\n  name: 'The Witcher 3: Wild Hunt',\n  description: 'разработана студией CD Projekt RED по мотивам серии романов «Ведьмак», выпущена 2015 году. Игрок управляет ведьмаком Геральтом из Ривии, который путешествует по игровому миру, общается с неигровыми персонажами и выполняет различные задания, в частности, связанные с поиском сокровищ и охотой на чудовищ.',\n  image: 'https://i.playground.ru/p/y2PlHSV6nDGafqBZ9eZiWw.jpeg',\n  audio: 'https://storage.lightaudio.ru/39922488/5901ccc14/The%20Witcher%203%20%E2%80%94%20Main%20Menu%20Theme.mp3'\n}, {\n  id: 1,\n  name: 'The Elder Scrolls V: Skyrim',\n  description: 'разработана студией Bethesda Game Studios и выпущена компанией Bethesda Softworks в 2010 году. События игры происходят спустя 200 лет после событий Oblivion. Великая война между Империей и Альдмерским Доминионом закончилась унизительным Конкордатом Белого Золота, ущемлявшим множество прав жителей Империи.',\n  image: 'https://showgamer.com/wp-content/uploads/2016/12/the_elder_scrolls_v_skyrim-1920x1080.jpg',\n  audio: 'https://storage.lightaudio.ru/399223f5/30612a9e/The%20Elder%20Skrolls-Skirim%20%E2%80%94%20Menu.mp3'\n}, {\n  id: 2,\n  name: 'Cyberpunk 2077',\n  description: 'разрабатывается студией CD Projekt RED. Игра повествует о приключениях персонажа по имени Ви в дистопичном городе Найт-Сити, расположенном на Западном побережье Северной Америки. Игроку будет предоставлен на выбор ряд игровых классов с возможностью их комбинирования.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/Обложка_компьютерной_игры_Cyberpunk_2077.jpg',\n  audio: 'https://storage.lightaudio.ru/399269b8/1bc0c341/Cyberpunk%202077%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 3,\n  name: 'South Park: The Stick of Truth',\n  description: 'разработана студией Obsidian Entertainment в 2014 году. В Южный Парк переезжает живущий с родителями новый мальчик. Родители отправляют его познакомиться с местными ребятами, и он сразу же встречает Баттерса. Баттерс отводит героя в крепость Купа — базу «людей», расположенную на заднем дворе Эрика Картмана.',\n  image: 'https://simkl.in/posters/67/6743508069c58b427_0.jpg',\n  audio: 'https://storage.lightaudio.ru/39924554/bbb43c8/South%20Park%3A%20The%20Stick%20of%20Truth%20%E2%80%94%20Main%20Menu.mp3'\n}, {\n  id: 4,\n  name: 'Fallot 4',\n  description: 'разработана Bethesda Game Studios и издана Bethesda Softworks в 2015 году. Действие игры начинается незадолго до ядерной войны, когда среди мирной жизни в одной из бытовых сцен выбирается протагонист. На ТВ звучит новость об угрозе взрывов, после чего главные герои отправляются в убежище 111 компании Волт-Тек.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/7/77/Fallout_4_poster.jpg',\n  audio: 'https://storage.lightaudio.ru/399230b3/1191c49b1/Bethesda%20Game%20Studios%20%E2%80%94%20Fallout%204%20OST%20Menu%20theme.mp3'\n}, {\n  id: 5,\n  name: 'Mass Effect 3',\n  description: 'разработана компанией BioWare и издана Electronic Arts в 2012 году. Действие разворачивается в Млечном Пути в конце XXII века, когда стали возможны межзвёздные полёты и мгновенное перемещение между отдалёнными участками галактики благодаря открытию ретрансляторов массы.',\n  image: 'https://media.kg-portal.ru/games/m/masseffect3/posters/masseffect3_1.jpg',\n  audio: 'https://storage.lightaudio.ru/1ed5e24b/2236d7b/OST%20%E2%80%94%20We%20Face%20Our%20Enemy%20Together.mp3'\n}], [{\n  id: 0,\n  name: 'Need for Speed: Most Wanted',\n  description: 'разработана студией EA Canada и издана Electronic Arts в 2005 году. Действия игры происходят в вымышленном городе Рокпорт, в котором игроку предоставлена свобода передвижения. По сюжету главный герой выигрывает гонки и продвигается вверх по «Чёрному списку» гонщиков, чтобы вернуть свой автомобиль BMW M3 GTR.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/1/15/NFS-Most-Wanted-Front.jpg',\n  audio: 'https://storage.lightaudio.ru/3992245f/1fae053/NFS%20Most%20Wanted%20%E2%80%94%20Main%20theme.mp3'\n}, {\n  id: 1,\n  name: 'FlatOut 2',\n  description: 'разработана компанией Bugbear Entertainment и издана Empire Interactive в 2006 году. В FlatOut 2 представлены 5 режимов игры: «Карьера», «Заезд», «Одиночная гонка», «Трюки» и «Дерби», а также игра по глобальной или локальной сети с реальными людьми.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/8/8f/FlatOut2Coverart.jpg',\n  audio: 'https://storage.lightaudio.ru/e562b1e/ffc5d6e/_Soundtracks%20%E2%80%94%20FlatOut%202__Breathing.mp3'\n}, {\n  id: 2,\n  name: 'Colin McRae: DiRT 2',\n  description: 'разработана и издана студией Codemasters в 2009 году. В DiRT 2 представлено множество игровых режимов. В нём присутствуют лицензированные автомобили, багги, внедорожники, специально отобранные для агрессивных и быстрых гонок. Также присутствует новый, продвинутый режим мультиплеера.',\n  image: 'https://static-cdn.jtvnw.net/ttv-boxart/Dirt%202.jpg',\n  audio: 'https://storage.lightaudio.ru/399542e9/2ea3434b/Black%20Tide%20%E2%80%94%20Shout.mp3'\n}, {\n  id: 3,\n  name: 'Driver: San Francisco',\n  description: 'разработана студией Ubisoft Reflections и издана Ubisoft в 2011 году. Игрок управляет Джоном Таннером в различных миссиях на улицах Сан-Франциско. Функция «Shift» позволяет перемещаться в другой автомобиль и продолжать выполнение миссии. В игре присутствует 140 полностью разрушаемых лицензированных автомобилей.',\n  image: 'https://i.playground.ru/e/vgjGYzRpVKCp7-TaiNfJAw.jpeg',\n  audio: 'https://storage.lightaudio.ru/39922409/41b6cae/Driver%20San%20Francisco%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 4,\n  name: 'The Crew 2',\n  description: 'разработана компанией Ivory Tower и издана Ubisoft в 2018 году. Играть предстоит за не очень известного гонщика, который пытается добиться успеха в нескольких дисциплинах. Он в любой момент может участвовать в гонках в свободном мире в упрощённой цифровой модели Соединённых Штатов.',\n  image: 'data:image/jpeg;base64,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',\n  audio: 'https://storage.lightaudio.ru/4acf289/3d7d225676/Steve%20Ouimette%20%E2%80%94%20Welcome%20to%20MotorNation%20%28The%20Crew%202%20Main%20Theme%29.mp3'\n}, {\n  id: 5,\n  name: 'Forza Horizon 3',\n  description: 'разработана Playground Games и выпущена Microsoft Studios в 2016 году. Игра с открытым миром, за основу которого взята Австралияю Игра предоставляет режим кооперативного мультиплеера. Игра предоставляет возможность кросс-платформенной игры, которая является частью программы Xbox Play Anywhere.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/a/ab/Обложка_игры_Forza_Horizon_3.jpg',\n  audio: 'https://storage.lightaudio.ru/3997bb18/2ea3434a/Dusky%20%E2%80%94%20Ingrid%20Is%20A%20Hybrid.mp3'\n}], [{\n  id: 0,\n  name: 'Heavy Rain',\n  description: 'разработана студией Quantic Dream и выпущена Sony Computer Entertainment в 2010 году. Всё начинается со вступления, где игрок играет за архитектора Итана Марса, в жизни которого наступила трагедия после того, как его старшего сына Джейсона, насмерть сбила машина, а сам Итан, попытавшись спасти сына, на полгода впал в кому.',\n  image: 'https://live.staticflickr.com/4055/4385944028_262a0938a6_b.jpg',\n  audio: 'https://storage.lightaudio.ru/2116e5d1/3089dca/Heavy%20Rain%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 1,\n  name: 'The Walking Dead: The Game',\n  description: 'разработана студией Telltale Games в 2012 году. Главным героем игры является персонаж Ли Эверетт. В момент начала зомби-апокалипсиса он находится под арестом, но оказывается на свободе и борется за выживание вместе с встреченной им 8-летней девочкой по имени Клементина.',\n  image: 'https://vignette.wikia.nocookie.net/walkingdead/images/c/c3/WDG_Season_1_Original_Score.png/revision/latest?cb=20140410003043',\n  audio: 'https://data.ipleer.com/file/64894575/aEtrNGk0V2xGeHNDOWdyM0RYcVNTVXd2cHJ1ZEJVZWtDTlZDMDRzU2tSRk1kZXpRL2JaZjlEcW10cjA3RENKV3FPUVpES242RlhnY2Z0Y3pXTFN4R1JraWY3KzVnZGRLZ1dQYzUxZGFBSEx2eGE0VjBIVmdsRHBKZDR6UGgzNnU/OST_The_Walking_Dead_Game_-_Main_Theme_(iPleer.com).mp3'\n}, {\n  id: 2,\n  name: 'Life is Strange',\n  description: 'разработана компанией Dontnod Entertainment и издана Square Enix в 2014 году. Игровой мир представлен локациями со множеством необязательных для взаимодействия персонажей и предметов. Главная героиня комментирует почти каждое такое взаимодействие. Диалоги, подобно другим играм этого жанра, имеют несколько вариантов ответа.',\n  image: 'https://vignette.wikia.nocookie.net/rememberme/images/3/32/Life_Is_Strange_Cover.jpg/revision/latest/scale-to-width-down/340?cb=20150206090154',\n  audio: 'https://storage.lightaudio.ru/2c790ac3/1667f7b/Life%20Is%20Strange%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 3,\n  name: 'Until Dawn',\n  description: 'разработана компанией Supermassive Games в 2015 году. Сюжет игры разделён на два временных отрезка с перерывом в год. В основе сюжета положена теория «Эффекта бабочки». На протяжении всей игры игроки будут принимать трудные решения. Им придётся жертвовать одним персонажем, чтобы спасти другого.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/d/d7/Until_Dawn_cover_art.jpg',\n  audio: 'https://storage.lightaudio.ru/3992263e/2b10eb77/Until%20Dawn%20%E2%80%94%20The%20Shadow%20of%20the%20Mountain.mp3'\n}, {\n  id: 4,\n  name: 'Beyond: Two Souls',\n  description: 'разработана студией Quantic Dream и выпущена Sony Computer Entertainment в 2013 году. Игра сосредоточена на вопросах о том, что происходит после смерти. В центре событий находится молодая девушка Джоди Холмс, обладающая сверхъестественными способностями, она может общаться с потусторонним миром.',\n  image: 'https://www.gameaxis.com/wp-content/uploads/2013/09/RGB_BeyondTwoSouls_Preview.jpg',\n  audio: 'https://storage.lightaudio.ru/1d5ea8ed/2dfd722/Beyond%3A%20Two%20Souls%20%E2%80%94%20Main%20Theme.mp3'\n}, {\n  id: 5,\n  name: 'The Wolf Among Us',\n  description: 'разработана студией Telltale Games в 2013 году. Вы играете за оборотня Бигби, он Шериф Фейблтауна, анклава в Нью-Йорке, где живут сказочные создания в обличии людей. Ваша задача – расследовать жестокое убийство девушки Веры, а также решить некоторые другие проблемы Фейблтауна.',\n  image: 'https://upload.wikimedia.org/wikipedia/ru/f/f5/The_Wolf_Among_Us.jpeg',\n  audio: 'https://storage.lightaudio.ru/34c83605/119203478/The%20Wolf%20Among%20Us%20%E2%80%94%20Main%20Theme.mp3'\n}]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/Components/Data/Data.js?");

/***/ }),

/***/ "./src/Components/Data/LevelName.js":
/*!******************************************!*\
  !*** ./src/Components/Data/LevelName.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar levelName = [{\n  name: 'Shooter',\n  key: 'shooter'\n}, {\n  name: 'Action',\n  key: 'action'\n}, {\n  name: 'Strategy',\n  key: 'strategy'\n}, {\n  name: 'RPG',\n  key: 'rpg'\n}, {\n  name: 'Racing',\n  key: 'racing'\n}, {\n  name: 'Interactive drama',\n  key: 'interactive drama'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (levelName);\n\n//# sourceURL=webpack:///./src/Components/Data/LevelName.js?");

/***/ }),

/***/ "./src/Components/Description/Description.js":
/*!***************************************************!*\
  !*** ./src/Components/Description/Description.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Description_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.scss */ \"./src/Components/Description/Description.scss\");\n/* harmony import */ var _Description_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Description_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Initial */ \"./src/Components/Description/Initial.js\");\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player/Player */ \"./src/Components/Player/Player.js\");\n\n\n\n\n\nfunction Description(_ref) {\n  var pickedGame = _ref.pickedGame;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"description\"\n  }, !pickedGame && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Initial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), pickedGame && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: pickedGame.image,\n    alt: \"game poster\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"game-name\"\n  }, pickedGame.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Player_Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-description\"\n  }, pickedGame.description))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\n//# sourceURL=webpack:///./src/Components/Description/Description.js?");

/***/ }),

/***/ "./src/Components/Description/Description.scss":
/*!*****************************************************!*\
  !*** ./src/Components/Description/Description.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Description/Description.scss?");

/***/ }),

/***/ "./src/Components/Description/Initial.js":
/*!***********************************************!*\
  !*** ./src/Components/Description/Initial.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Initial() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u041F\\u043E\\u0441\\u043B\\u0443\\u0448\\u0430\\u0439\\u0442\\u0435 \\u043F\\u043B\\u0435\\u0435\\u0440.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u0438\\u0433\\u0440\\u0443 \\u0438\\u0437 \\u0441\\u043F\\u0438\\u0441\\u043A\\u0430.\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Initial);\n\n//# sourceURL=webpack:///./src/Components/Description/Initial.js?");

/***/ }),

/***/ "./src/Components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/Components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ \"./src/Components/Header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TitleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleList */ \"./src/Components/Header/TitleList.js\");\n\n\n\n\nfunction Header(_ref) {\n  var totalScore = _ref.totalScore,\n      currentTheme = _ref.currentTheme;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-top\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Games\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"osts\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Score: \", totalScore)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    currentTheme: currentTheme,\n    className: \"theme-list\"\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/Components/Header/Header.js?");

/***/ }),

/***/ "./src/Components/Header/Header.scss":
/*!*******************************************!*\
  !*** ./src/Components/Header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Header/Header.scss?");

/***/ }),

/***/ "./src/Components/Header/TitleItem.js":
/*!********************************************!*\
  !*** ./src/Components/Header/TitleItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction TitleItem(_ref) {\n  var name = _ref.name,\n      currentTitle = _ref.currentTitle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: currentTitle\n  }, name);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleItem);\n\n//# sourceURL=webpack:///./src/Components/Header/TitleItem.js?");

/***/ }),

/***/ "./src/Components/Header/TitleList.js":
/*!********************************************!*\
  !*** ./src/Components/Header/TitleList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TitleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TitleItem */ \"./src/Components/Header/TitleItem.js\");\n/* harmony import */ var _Data_LevelName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/LevelName */ \"./src/Components/Data/LevelName.js\");\n\n\n\n\nfunction TitleList(_ref) {\n  var currentTheme = _ref.currentTheme;\n  var levels = _Data_LevelName__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (item, ind) {\n    var currentTitle = 'theme';\n\n    if (ind === currentTheme) {\n      currentTitle += ' active';\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TitleItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: item.name,\n      key: item.key,\n      currentTitle: currentTitle\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"theme-list\"\n  }, levels);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleList);\n\n//# sourceURL=webpack:///./src/Components/Header/TitleList.js?");

/***/ }),

/***/ "./src/Components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/Components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.scss */ \"./src/Components/Main/Main.scss\");\n/* harmony import */ var _Main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Question_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Question/Question */ \"./src/Components/Question/Question.js\");\n/* harmony import */ var _Quiz_Quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Quiz/Quiz */ \"./src/Components/Quiz/Quiz.js\");\n/* harmony import */ var _Description_Description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Description/Description */ \"./src/Components/Description/Description.js\");\n/* harmony import */ var _NextButton_NextButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NextButton/NextButton */ \"./src/Components/NextButton/NextButton.js\");\n\n\n\n\n\n\n\nfunction Main(_ref) {\n  var onChangeTitle = _ref.onChangeTitle,\n      currentGames = _ref.currentGames,\n      onPickGame = _ref.onPickGame,\n      itemForQuestion = _ref.itemForQuestion,\n      isLevelDone = _ref.isLevelDone,\n      pickedGame = _ref.pickedGame,\n      gameForQuestion = _ref.gameForQuestion,\n      needRefresh = _ref.needRefresh,\n      onChangeRefresh = _ref.onChangeRefresh,\n      onPickWrongAnswer = _ref.onPickWrongAnswer;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_Question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    itemForQuestion: itemForQuestion,\n    isLevelDone: isLevelDone\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Quiz_Quiz__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentGames: currentGames,\n    onPickGame: onPickGame,\n    isLevelDone: isLevelDone,\n    gameForQuestion: gameForQuestion,\n    needRefresh: needRefresh,\n    onChangeRefresh: onChangeRefresh,\n    onPickWrongAnswer: onPickWrongAnswer\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description_Description__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    pickedGame: pickedGame\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NextButton_NextButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onChangeTitle: onChangeTitle,\n    isLevelDone: isLevelDone\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/Components/Main/Main.js?");

/***/ }),

/***/ "./src/Components/Main/Main.scss":
/*!***************************************!*\
  !*** ./src/Components/Main/Main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Main/Main.scss?");

/***/ }),

/***/ "./src/Components/NextButton/NextButton.js":
/*!*************************************************!*\
  !*** ./src/Components/NextButton/NextButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NextButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextButton.scss */ \"./src/Components/NextButton/NextButton.scss\");\n/* harmony import */ var _NextButton_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NextButton_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction NextButton(_ref) {\n  var onChangeTitle = _ref.onChangeTitle,\n      isLevelDone = _ref.isLevelDone;\n  var className = '';\n\n  function checkCorrect() {\n    if (isLevelDone) {\n      onChangeTitle();\n    } else {\n      return;\n    }\n  }\n\n  if (isLevelDone) {\n    className += 'next';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: className,\n    onClick: checkCorrect\n  }, \"Next Level\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NextButton);\n\n//# sourceURL=webpack:///./src/Components/NextButton/NextButton.js?");

/***/ }),

/***/ "./src/Components/NextButton/NextButton.scss":
/*!***************************************************!*\
  !*** ./src/Components/NextButton/NextButton.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/NextButton/NextButton.scss?");

/***/ }),

/***/ "./src/Components/Player/Player.js":
/*!*****************************************!*\
  !*** ./src/Components/Player/Player.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Player_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.scss */ \"./src/Components/Player/Player.scss\");\n/* harmony import */ var _Player_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Player_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Player() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"player\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"timeline\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"playpause\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-play play-indicator\",\n    \"aria-hidden\": \"true\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"time time-start\"\n  }, \"00:00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"progress-bar\",\n    type: \"range\",\n    min: \"0\",\n    max: \"\",\n    step: \"0.1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"time time-end\"\n  }, \"01:20\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"volume\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-volume-up volume-indicator fa-2x\",\n    \"aria-hidden\": \"true\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"volume-level\",\n    type: \"range\",\n    min: \"0\",\n    max: \"1\",\n    step: \"0.01\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Components/Player/Player.js?");

/***/ }),

/***/ "./src/Components/Player/Player.scss":
/*!*******************************************!*\
  !*** ./src/Components/Player/Player.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Player/Player.scss?");

/***/ }),

/***/ "./src/Components/Question/Question.js":
/*!*********************************************!*\
  !*** ./src/Components/Question/Question.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Question_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.scss */ \"./src/Components/Question/Question.scss\");\n/* harmony import */ var _Question_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Question_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_assets_question_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App/assets/question.png */ \"./src/Components/App/assets/question.png\");\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player/Player */ \"./src/Components/Player/Player.js\");\n\n\n\n\n\nfunction Question(_ref) {\n  var itemForQuestion = _ref.itemForQuestion,\n      isLevelDone = _ref.isLevelDone;\n  var item = {};\n\n  if (isLevelDone) {\n    item = itemForQuestion;\n  } else {\n    item.name = '******';\n    item.image = _App_assets_question_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"question\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: item.image,\n    alt: \"game poster\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"game-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    className: \"game-name\"\n  }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Player_Player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\n\n//# sourceURL=webpack:///./src/Components/Question/Question.js?");

/***/ }),

/***/ "./src/Components/Question/Question.scss":
/*!***********************************************!*\
  !*** ./src/Components/Question/Question.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Question/Question.scss?");

/***/ }),

/***/ "./src/Components/Quiz/Indicator.js":
/*!******************************************!*\
  !*** ./src/Components/Quiz/Indicator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Indicator(_ref) {\n  var isClicked = _ref.isClicked,\n      isCorrect = _ref.isCorrect,\n      canChange = _ref.canChange,\n      isDefault = _ref.isDefault;\n  var className = '';\n\n  if (isClicked && isCorrect && canChange) {\n    className = 'correct';\n  } else if (isClicked && !isCorrect && canChange) {\n    className = 'wrong';\n  } else if (isDefault && !canChange) {\n    className = '';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: className\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Indicator);\n\n//# sourceURL=webpack:///./src/Components/Quiz/Indicator.js?");

/***/ }),

/***/ "./src/Components/Quiz/Quiz.js":
/*!*************************************!*\
  !*** ./src/Components/Quiz/Quiz.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Quiz_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quiz.scss */ \"./src/Components/Quiz/Quiz.scss\");\n/* harmony import */ var _Quiz_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Quiz_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuizList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizList */ \"./src/Components/Quiz/QuizList.js\");\n\n\n\n\nfunction Quiz(_ref) {\n  var currentGames = _ref.currentGames,\n      onPickGame = _ref.onPickGame,\n      isLevelDone = _ref.isLevelDone,\n      gameForQuestion = _ref.gameForQuestion,\n      needRefresh = _ref.needRefresh,\n      onChangeRefresh = _ref.onChangeRefresh,\n      onPickWrongAnswer = _ref.onPickWrongAnswer;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"quiz\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuizList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    currentGames: currentGames,\n    onPickGame: onPickGame,\n    isLevelDone: isLevelDone,\n    gameForQuestion: gameForQuestion,\n    needRefresh: needRefresh,\n    onChangeRefresh: onChangeRefresh,\n    onPickWrongAnswer: onPickWrongAnswer\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\n//# sourceURL=webpack:///./src/Components/Quiz/Quiz.js?");

/***/ }),

/***/ "./src/Components/Quiz/Quiz.scss":
/*!***************************************!*\
  !*** ./src/Components/Quiz/Quiz.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/Components/Quiz/Quiz.scss?");

/***/ }),

/***/ "./src/Components/Quiz/QuizItem.js":
/*!*****************************************!*\
  !*** ./src/Components/Quiz/QuizItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Indicator */ \"./src/Components/Quiz/Indicator.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar QuizItem = /*#__PURE__*/function (_React$Component) {\n  _inherits(QuizItem, _React$Component);\n\n  var _super = _createSuper(QuizItem);\n\n  function QuizItem(props) {\n    var _this;\n\n    _classCallCheck(this, QuizItem);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      isClicked: false,\n      isCorrect: false,\n      canChange: true,\n      isDefault: false\n    };\n    _this.pickingGame = _this.pickingGame.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(QuizItem, [{\n    key: \"pickingGame\",\n    value: function pickingGame(id) {\n      this.props.onPickGame(id);\n      this.setState({\n        isClicked: true\n      });\n\n      if (this.props.gameForQuestion === id) {\n        this.setState({\n          isCorrect: true\n        });\n      }\n\n      if (this.props.isLevelDone && !this.state.isClicked) {\n        this.setState({\n          isDefault: true,\n          canChange: false\n        });\n      }\n\n      if (!this.props.isLevelDone && !this.state.isClicked) {\n        this.props.onPickWrongAnswer();\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevState.isClicked && prevProps !== this.props && this.props.needRefresh) {\n        this.setState({\n          isClicked: false,\n          isCorrect: false,\n          isDefault: false,\n          canChange: true\n        });\n        this.props.onChangeRefresh();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"answer\",\n        onClick: function onClick() {\n          return _this2.pickingGame(_this2.props.itemId);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Indicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        isClicked: this.state.isClicked,\n        isCorrect: this.state.isCorrect,\n        canChange: this.state.canChange,\n        isDefault: this.state.isDefault\n      }), this.props.gameName);\n    }\n  }]);\n\n  return QuizItem;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizItem);\n\n//# sourceURL=webpack:///./src/Components/Quiz/QuizItem.js?");

/***/ }),

/***/ "./src/Components/Quiz/QuizList.js":
/*!*****************************************!*\
  !*** ./src/Components/Quiz/QuizList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuizItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizItem */ \"./src/Components/Quiz/QuizItem.js\");\n\n\n\nfunction QuizList(_ref) {\n  var currentGames = _ref.currentGames,\n      onPickGame = _ref.onPickGame,\n      isLevelDone = _ref.isLevelDone,\n      gameForQuestion = _ref.gameForQuestion,\n      needRefresh = _ref.needRefresh,\n      onChangeRefresh = _ref.onChangeRefresh,\n      onPickWrongAnswer = _ref.onPickWrongAnswer;\n  var games = currentGames.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuizItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: item.id,\n      gameName: item.name,\n      itemId: item.id,\n      onPickGame: onPickGame,\n      isLevelDone: isLevelDone,\n      gameForQuestion: gameForQuestion,\n      needRefresh: needRefresh,\n      onChangeRefresh: onChangeRefresh,\n      onPickWrongAnswer: onPickWrongAnswer\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"quiz-list\"\n  }, games);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizList);\n\n//# sourceURL=webpack:///./src/Components/Quiz/QuizList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_App_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/App/App.js */ \"./src/Components/App/App.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_App_App_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });