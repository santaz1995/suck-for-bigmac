"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\n\n\n\n\nvar _this = undefined;\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: 'easeInOut'\n        },\n        style: {\n            position: 'relative'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: [\n                                title,\n                                \" - Відсмокчи за бігмак\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: title\n                        }, void 0, false, {\n                            fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: title\n                        }, void 0, false, {\n                            fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/viacheslavzheltukhin/Documents/Work/suck-for-bigmac/components/layouts/article.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUNWO0FBQ2dCOztBQUU1QyxHQUFLLENBQUNHLFFBQVEsR0FBRyxDQUFDO0lBQ2hCQyxNQUFNLEVBQUUsQ0FBQztRQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtJQUFDLENBQUM7SUFDbkNDLEtBQUssRUFBRSxDQUFDO1FBQUNILE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNqQ0UsSUFBSSxFQUFFLENBQUM7UUFBQ0osT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLENBQUM7UUFBRUMsQ0FBQyxFQUFFLEVBQUU7SUFBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxHQUFLLENBQUNHLE1BQU0sR0FBRyxRQUFRO1FBQUxDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7a0JBQy9CLE1BQU0sK0RBQUxaLHlEQUFjO1FBQ2JjLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBTztRQUNmTixJQUFJLEVBQUMsQ0FBTTtRQUNYTixRQUFRLEVBQUVBLFFBQVE7UUFDbEJhLFVBQVUsRUFBRSxDQUFDO1lBQUNDLFFBQVEsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxDQUFXO1FBQUMsQ0FBQztRQUNoREMsS0FBSyxFQUFFLENBQUM7WUFBQ0MsUUFBUSxFQUFFLENBQVU7UUFBQyxDQUFDOzs7Z0JBRzVCUixLQUFLLGdGQUNIWCxrREFBSTs7b0dBQ0ZXLENBQUs7O2dDQUFFQSxLQUFLO2dDQUFDLENBQXNCOzs7Ozs7O29HQUNuQ1MsQ0FBSTs0QkFBQ0MsSUFBSSxFQUFDLENBQWU7NEJBQUNDLE9BQU8sRUFBRVgsS0FBSzs7Ozs7O29HQUN4Q1MsQ0FBSTs0QkFBQ0csUUFBUSxFQUFDLENBQVU7NEJBQUNELE9BQU8sRUFBRVgsS0FBSzs7Ozs7Ozs7Ozs7O2dCQUczQ0QsUUFBUTs0RkFFUlQscURBQWE7Ozs7Ozs7Ozs7Ozs7S0FuQmRRLE1BQU07QUF3QlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGUuanM/ZWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgR3JpZEl0ZW1TdHlsZSB9IGZyb20gJy4uL2dyaWQtaXRlbSdcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9LFxuICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogLTAsIHk6IDIwIH1cbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IChcbiAgPG1vdGlvbi5hcnRpY2xlXG4gICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICBleGl0PVwiZXhpdFwiXG4gICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgdHlwZTogJ2Vhc2VJbk91dCcgfX1cbiAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICA+XG4gICAgPD5cbiAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9IC0g0JLRltC00YHQvNC+0LrRh9C4INC30LAg0LHRltCz0LzQsNC6PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPEdyaWRJdGVtU3R5bGUgLz5cbiAgICA8Lz5cbiAgPC9tb3Rpb24uYXJ0aWNsZT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ })

});