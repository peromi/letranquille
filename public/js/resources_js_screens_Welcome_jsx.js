"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_screens_Welcome_jsx"],{

/***/ "./resources/js/screens/Welcome.jsx":
/*!******************************************!*\
  !*** ./resources/js/screens/Welcome.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/js/constants/index.js");
/* harmony import */ var _assets_images_level1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/level1.png */ "./resources/js/assets/images/level1.png");
/* harmony import */ var _assets_images_level2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/level2.png */ "./resources/js/assets/images/level2.png");
/* harmony import */ var _assets_images_level3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/level3.png */ "./resources/js/assets/images/level3.png");
/* harmony import */ var _assets_images_01_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/01.png */ "./resources/js/assets/images/01.png");
/* harmony import */ var _assets_images_01b_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/01b.png */ "./resources/js/assets/images/01b.png");
/* harmony import */ var _assets_images_02_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/02.png */ "./resources/js/assets/images/02.png");
/* harmony import */ var _assets_images_03_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/03.png */ "./resources/js/assets/images/03.png");
/* harmony import */ var _assets_images_coo_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/coo.jpg */ "./resources/js/assets/images/coo.jpg");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/logo.png */ "./resources/js/assets/images/logo.png");
/* harmony import */ var _assets_images_chat_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/chat.png */ "./resources/js/assets/images/chat.png");
/* harmony import */ var localstorage_slim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! localstorage-slim */ "./node_modules/localstorage-slim/dist/localstorage-slim.js");
/* harmony import */ var localstorage_slim__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(localstorage_slim__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_json_country_currancy_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/json/country-currancy.json */ "./resources/js/assets/json/country-currancy.json");
/* harmony import */ var _assets_json_timezone_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/json/timezone.json */ "./resources/js/assets/json/timezone.json");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_userSlice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/userSlice */ "./resources/js/store/userSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















var REG_STEPS = "stepper";
var USERDB = "dao";

function Welcome() {
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)(function (state) {
    return state.user.user;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useDispatch)();

  var addNewUser = function addNewUser(user) {
    dispatch(_store_userSlice__WEBPACK_IMPORTED_MODULE_16__.actions.addUser(user));
  };

  var addNewPreference = function addNewPreference(pref) {
    dispatch(_store_userSlice__WEBPACK_IMPORTED_MODULE_16__.actions.addPreferences(pref));
  };

  var addNewProfile = function addNewProfile(prof) {
    dispatch(_store_userSlice__WEBPACK_IMPORTED_MODULE_16__.actions.addProfile(prof));
  };

  var addNewToken = function addNewToken(token) {
    dispatch(_store_userSlice__WEBPACK_IMPORTED_MODULE_16__.actions.addToken(token));
  };

  var addNewSubscription = function addNewSubscription(subscribe) {
    dispatch(_store_userSlice__WEBPACK_IMPORTED_MODULE_16__.actions.addSubscription(subscribe));
  };

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useNavigate)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showmenu = _React$useState2[0],
      setShowmenu = _React$useState2[1];

  var year = new Date().getFullYear();
  var slides = [];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    addNewUser(null);
    addNewProfile(null);
    addNewPreference(null);
    addNewToken(null);
    addNewSubscription(null);
    var timez = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var timecount = timez.split("/")[1];
    var getcountry = _assets_json_timezone_json__WEBPACK_IMPORTED_MODULE_14__[timecount];
    var fullcountry = _assets_json_country_currancy_json__WEBPACK_IMPORTED_MODULE_13__.find(function (country) {
      return country.name === getcountry;
    });

    for (var i = 1; i < 50; i++) {
      slides.push(i);
    }

    localstorage_slim__WEBPACK_IMPORTED_MODULE_12___default().set("country", fullcountry.currency, {
      encrypt: true
    });
    var script = document.createElement("script");
    script.src = "//code.tidio.co/pobhvmnpeedkipkjry5ua9i5dkdjmxsd.js";
    script.async = true;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex justify-around item-center  bg-rose-600  h-[85px]  px-3 pt-8",
        style: {
          zIndex: 9999999
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _constants__WEBPACK_IMPORTED_MODULE_1__.data.longlogo,
            style: {
              filter: "brightness(0) invert(1)"
            },
            width: 120
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
          className: "hidden md:flex gap-6  text-white text-md ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            className: "hover:text-yellow-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/",
              children: "Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            className: "hover:text-yellow-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/story",
              children: "Stories"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            className: "hover:text-yellow-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/membership",
              children: "Membership"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            className: "hover:text-yellow-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/about",
              children: "About"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            className: "hover:text-yellow-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/contact-us",
              children: "Contact Us"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          "class": "hidden text-md md:flex gap-4 text-white ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            className: "hover:text-yellow-200",
            to: "/new-register",
            children: "Register"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            className: "hover:text-yellow-200",
            to: "/new-login",
            children: "Login"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
          onClick: function onClick() {
            setShowmenu(!showmenu);
          },
          className: "md:hidden hover:text-yellow-600 text-white",
          children: showmenu == true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
            className: "fi fi-rr-cross text-2xl text-white"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
            className: "fi fi-rr-menu-burger text-2xl text-white"
          })
        })]
      }), showmenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "flex flex-col fixed md:hidden left-0 right-0 top-0 bg-[#29292B] h-[100%] z-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "mt-[80px] flex flex-col justify-start items-center flex-1 ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
            className: " flex flex-col items-center gap-y-3 text-white text-2xl  ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/",
              children: "Home"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/about",
              children: "About"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/story",
              children: "Story"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/membership",
              children: "Membership"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/contact-us",
              children: "Contact Us"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "w-[34px] h-[3px] bg-white rounded-full my-6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
            className: "flex flex-col items-center gap-y-3 text-white text-2xl  ",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/new-login",
              children: "Login"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/new-register",
              children: "Register"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        "class": "pt-[80px] md:pt-[45px]  px-3 pb-3   bg-rose-600 flex flex-row overflow-hidden justify-center items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          "class": "text-white flex pt-20 flex-col max-w-[600px] md:w-full",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
              className: "md:text-6xl lg:text-5xl text-4xl font-black tracking-tighter",
              style: {},
              children: "Make the First move and find the love of your life"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
              className: "  text-xl mt-2 md:w-3/4 ",
              children: ["Start meeting new People with matching personalities around you with", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                children: "Le tranquille Dating."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
              to: "/new-register",
              className: "hover:bg-white bg-yellow-300 mb-2 p-3 rounded-md mt-[45px] md:w-1/2 text-center text-black font-bold",
              children: ["Sign Up", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                "class": "fi-rr-user-add ml-2"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
              children: "Follow us on"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
              className: "flex gap-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
                    "class": "fi fi-brands-instagram text-2xl"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  href: "#",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
                    "class": "fi fi-brands-facebook text-2xl"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("a", {
                  href: "https://twitter.com/LeTranquille2",
                  target: "blank",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
                    "class": "fi fi-brands-twitter text-2xl"
                  })
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "hidden md:flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_images_01_png__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "",
            width: "90%"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "p-20 flex flex-col justify-center items-center h-[600px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
        className: "md:text-6xl lg:text-5xl text-4xl font-black tracking-tighter",
        style: {},
        children: "How it works"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex md:flex-row flex-col   items-center  space-x-4 justify-center ",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "max-w-[400px] flex flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
            className: " text-6xl font-black tracking-tighter md:text-8xl ",
            children: "01"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_images_01b_png__WEBPACK_IMPORTED_MODULE_6__["default"],
            alt: "",
            width: " "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
            className: "font-black tracking-tighter text-2xl",
            children: "Create A Profile"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
            className: "text-center",
            children: "Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "max-w-[400px] flex flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
            className: " text-6xl font-black tracking-tighter md:text-8xl",
            children: "02"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_images_02_png__WEBPACK_IMPORTED_MODULE_7__["default"],
            alt: "",
            width: " "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
            className: "font-black tracking-tighter text-2xl",
            children: "Find Matches"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
            className: "text-center",
            children: "Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "max-w-[400px] flex flex-col items-center text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h1", {
            className: " text-6xl font-black tracking-tighter md:text-8xl",
            children: "03"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _assets_images_03_png__WEBPACK_IMPORTED_MODULE_8__["default"],
            alt: "",
            width: " "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h3", {
            className: "font-black tracking-tighter text-2xl",
            children: "Start Dating"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {
            className: "text-center",
            children: "Continua actualize ailers through robu and sertively concepze standards compliant commerce after technica sound."
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: "h-[400px] bg-red-400"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "pl-6 h-[58px] bg-red-600 flex justify-between items-center text-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("p", {
        children: ["\xA9", new Date().getFullYear(), ". All rights reserved"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex justify-center items-center gap-x-[34px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
          className: "hidden md:flex md:gap-[12px] md:font-bold",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: "/",
            children: "Home"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: "/about",
            children: "About"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: "/story",
            children: "Story"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link, {
            to: "/membership",
            children: "Membership"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("ul", {
          className: "flex gap-x-[12px] pr-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
              className: "fi fi-brands-instagram"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
              className: "fi fi-brands-facebook"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("i", {
              className: "fi fi-brands-twitter"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: "bg-white flex justify-center items-center p-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        id: "google_translate_element",
        className: "p-2 ring-1 ring-slate-900/5 px-12 flex flex-col"
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

/***/ }),

/***/ "./resources/js/assets/images/01.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/images/01.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/01.png?f21e965383e3e8e8b9c8834f3c3738cc");

/***/ }),

/***/ "./resources/js/assets/images/01b.png":
/*!********************************************!*\
  !*** ./resources/js/assets/images/01b.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/01b.png?ded6760f9d0b754f4b730f7d92953b63");

/***/ }),

/***/ "./resources/js/assets/images/02.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/images/02.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/02.png?698e37ed74ec4bd4433c7d17c6dbd047");

/***/ }),

/***/ "./resources/js/assets/images/03.png":
/*!*******************************************!*\
  !*** ./resources/js/assets/images/03.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/03.png?53160bab2f98ad32cd25c364e21fb039");

/***/ }),

/***/ "./resources/js/assets/images/chat.png":
/*!*********************************************!*\
  !*** ./resources/js/assets/images/chat.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chat.png?08499f3c85ddc312cf8a89ecbc36dd28");

/***/ }),

/***/ "./resources/js/assets/images/coo.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/images/coo.jpg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/coo.jpg?2b66484d697ea030e736b0f0904c452a");

/***/ }),

/***/ "./resources/js/assets/images/level1.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/images/level1.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/level1.png?ae37943fd0f07dbace754d41ab004415");

/***/ }),

/***/ "./resources/js/assets/images/level2.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/images/level2.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/level2.png?074f592bbc8c14e96376ef009057924a");

/***/ }),

/***/ "./resources/js/assets/images/level3.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/images/level3.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/level3.png?913ee0e6c80c34884f1e5ca4c7fb8c90");

/***/ })

}]);