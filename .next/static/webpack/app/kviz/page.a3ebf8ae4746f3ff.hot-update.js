"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/kviz/page",{

/***/ "(app-pages-browser)/./components/AboutUs.jsx":
/*!********************************!*\
  !*** ./components/AboutUs.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"(app-pages-browser)/./node_modules/katex/dist/katex.min.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst AboutUs = ()=>{\n    _s();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (answer !== \"64\") {\n            setError(\"Hibás válasz! A helyes válasz: 64.\");\n        } else {\n            setError(\"Helyes válasz, gratulálunk!\"); // Ha helyes válasz, ürítse ki a hibát\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"kviz.png\",\n                                height: \"50px\",\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginLeft: \"20px\",\n                                    lineHeight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Ha egy kocka oldalhossza n\\xe9gy centim\\xe9ter, akkor mekkora a t\\xe9rfogata?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"answer\",\n                                        value: \"64\",\n                                        checked: answer === \"64\",\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"64\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"answer\",\n                                        value: \"32\",\n                                        checked: answer === \"32\",\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"32\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        name: \"answer\",\n                                        value: \"128\",\n                                        checked: answer === \"128\",\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \"128\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            marginTop: \"10px\"\n                        },\n                        children: \"Ellenőrizd a v\\xe1laszt\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\",\n                            marginTop: \"10px\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutUs, \"V1YKGLiD78/wi1fayN8baVjRoa4=\");\n_c = AboutUs;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);\nvar _c;\n$RefreshReg$(_c, \"AboutUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRVcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRWxDLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxlQUFlLENBQUNDO1FBQ3BCSixVQUFVSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxlQUFlLENBQUNIO1FBQ3BCQSxNQUFNSSxjQUFjO1FBQ3BCLElBQUlULFdBQVcsTUFBTTtZQUNuQkcsU0FBUztRQUNYLE9BQU87WUFDTEEsU0FBUyxnQ0FBZ0Msc0NBQXNDO1FBQ2pGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQztnQkFBS0MsVUFBVUw7O2tDQUNkLDhEQUFDRTt3QkFBSUksT0FBTzs0QkFBRUMsU0FBUzs0QkFBUUMsWUFBWTt3QkFBUzs7MENBQ2xELDhEQUFDQztnQ0FBSUMsS0FBSTtnQ0FBV0MsUUFBTztnQ0FBT0MsS0FBSTs7Ozs7OzBDQUN0Qyw4REFBQ0M7Z0NBQUVQLE9BQU87b0NBQUVRLFlBQVk7b0NBQVFDLFlBQVk7Z0NBQU87MENBQ2pELDRFQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1osOERBQUNkO3dCQUFJSSxPQUFPOzRCQUFFVyxXQUFXO3dCQUFPOzswQ0FDOUIsOERBQUNDOztrREFDQyw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0x0QixPQUFNO3dDQUNOdUIsU0FBUzlCLFdBQVc7d0NBQ3BCK0IsVUFBVTNCOzs7Ozs7b0NBQ1Y7Ozs7Ozs7MENBR0osOERBQUNzQjs7a0RBQ0MsOERBQUNDO3dDQUNDQyxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMdEIsT0FBTTt3Q0FDTnVCLFNBQVM5QixXQUFXO3dDQUNwQitCLFVBQVUzQjs7Ozs7O29DQUNWOzs7Ozs7OzBDQUdKLDhEQUFDc0I7O2tEQUNDLDhEQUFDQzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTHRCLE9BQU07d0NBQ051QixTQUFTOUIsV0FBVzt3Q0FDcEIrQixVQUFVM0I7Ozs7OztvQ0FDVjs7Ozs7Ozs7Ozs7OztrQ0FLTiw4REFBQzRCO3dCQUFPSixNQUFLO3dCQUFTZCxPQUFPOzRCQUFFVyxXQUFXO3dCQUFPO2tDQUFHOzs7Ozs7b0JBSW5EdkIsdUJBQVMsOERBQUNtQjt3QkFBRVAsT0FBTzs0QkFBRW1CLE9BQU87NEJBQU9SLFdBQVc7d0JBQU87a0NBQUl2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRTtHQXpFTUg7S0FBQUE7QUEyRU4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVuaVxcRGVza3RvcFxca29ja2F4eXotZGV2XFxjb21wb25lbnRzXFxBYm91dFVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwia2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuc3dlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChhbnN3ZXIgIT09IFwiNjRcIikge1xyXG4gICAgICBzZXRFcnJvcihcIkhpYsOhcyB2w6FsYXN6ISBBIGhlbHllcyB2w6FsYXN6OiA2NC5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkhlbHllcyB2w6FsYXN6LCBncmF0dWzDoWx1bmshXCIpOyAvLyBIYSBoZWx5ZXMgdsOhbGFzeiwgw7xyw610c2Uga2kgYSBoaWLDoXRcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGNlbnRlcj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwia3Zpei5wbmdcIiBoZWlnaHQ9XCI1MHB4XCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbGluZUhlaWdodDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIEhhIGVneSBrb2NrYSBvbGRhbGhvc3N6YSBuw6lneSBjZW50aW3DqXRlciwgYWtrb3IgbWVra29yYSBhXHJcbiAgICAgICAgICAgICAgICB0w6lyZm9nYXRhP1xyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwiNjRcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyID09PSBcIjY0XCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgNjRcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXIgPT09IFwiMzJcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAzMlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImFuc3dlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIjEyOFwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXIgPT09IFwiMTI4XCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgMTI4XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICBFbGxlbsWRcml6ZCBhIHbDoWxhc3p0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX0+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NlbnRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFib3V0VXMiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2VudGVyIiwiZm9ybSIsIm9uU3VibWl0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImltZyIsInNyYyIsImhlaWdodCIsImFsdCIsInAiLCJtYXJnaW5MZWZ0IiwibGluZUhlaWdodCIsInN0cm9uZyIsIm1hcmdpblRvcCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImNvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutUs.jsx\n"));

/***/ })

});