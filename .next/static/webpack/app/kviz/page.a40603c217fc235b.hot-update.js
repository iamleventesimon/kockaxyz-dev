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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"(app-pages-browser)/./node_modules/katex/dist/katex.min.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst AboutUs = ()=>{\n    _s();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (answer !== \"64\") {\n            setError(\"❌ Hibás válasz! A helyes válasz: 64.\");\n        } else {\n            setError(\"✅ Helyes válasz, gratulálunk!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"kerdes\",\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            gap: \"10px\",\n                            padding: \"15px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"kviz.png\",\n                                height: \"50px\",\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"1.\\xa0 \\xa0 Ha egy kocka oldalhossza n\\xe9gy centim\\xe9ter, akkor mekkora a t\\xe9rfogata?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"10px\",\n                            marginTop: \"20px\",\n                            padding: \"15px\",\n                            border: \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    gap: \"15px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"64\",\n                                                checked: answer === \"64\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"64\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"32\",\n                                                checked: answer === \"32\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"32\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"128\",\n                                                checked: answer === \"128\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"128\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    style: {\n                                        padding: \"8px 15px\",\n                                        borderRadius: \"5px\",\n                                        border: \"none\",\n                                        backgroundColor: \"#007bff\",\n                                        color: \"white\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Ellenőrizd a v\\xe1laszt\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: answer === \"64\" ? \"green\" : \"red\",\n                            marginTop: \"10px\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutUs, \"V1YKGLiD78/wi1fayN8baVjRoa4=\");\n_c = AboutUs;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);\nvar _c;\n$RefreshReg$(_c, \"AboutUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRVcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRWxDLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxlQUFlLENBQUNDO1FBQ3BCSixVQUFVSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxlQUFlLENBQUNIO1FBQ3BCQSxNQUFNSSxjQUFjO1FBQ3BCLElBQUlULFdBQVcsTUFBTTtZQUNuQkcsU0FBUztRQUNYLE9BQU87WUFDTEEsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQztnQkFBS0MsVUFBVUw7O2tDQUVkLDhEQUFDRTt3QkFDQ0ksT0FBTTt3QkFDTkMsT0FBTzs0QkFDTEMsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsZ0JBQWdCOzRCQUNoQkMsS0FBSzs0QkFDTEMsU0FBUzt3QkFDWDs7MENBRUEsOERBQUNDO2dDQUFJQyxLQUFJO2dDQUFXQyxRQUFPO2dDQUFPQyxLQUFJOzs7Ozs7MENBQ3RDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVFaLDhEQUFDaEI7d0JBQ0NLLE9BQU87NEJBQ0xDLFNBQVM7NEJBQ1RXLGVBQWU7NEJBQ2ZWLFlBQVk7NEJBQ1pFLEtBQUs7NEJBQ0xTLFdBQVc7NEJBQ1hSLFNBQVM7NEJBQ1RTLFFBQVE7d0JBQ1Y7OzBDQUdBLDhEQUFDbkI7Z0NBQUlLLE9BQU87b0NBQUVDLFNBQVM7b0NBQVFHLEtBQUs7Z0NBQU87O2tEQUN6Qyw4REFBQ1c7OzBEQUNDLDhEQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTDFCLE9BQU07Z0RBQ04yQixTQUFTbEMsV0FBVztnREFDcEJtQyxVQUFVL0I7Ozs7Ozs0Q0FDVjs7Ozs7OztrREFHSiw4REFBQzBCOzswREFDQyw4REFBQ0M7Z0RBQ0NDLE1BQUs7Z0RBQ0xDLE1BQUs7Z0RBQ0wxQixPQUFNO2dEQUNOMkIsU0FBU2xDLFdBQVc7Z0RBQ3BCbUMsVUFBVS9COzs7Ozs7NENBQ1Y7Ozs7Ozs7a0RBR0osOERBQUMwQjs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMMUIsT0FBTTtnREFDTjJCLFNBQVNsQyxXQUFXO2dEQUNwQm1DLFVBQVUvQjs7Ozs7OzRDQUNWOzs7Ozs7Ozs7Ozs7OzBDQU1OLDhEQUFDTTswQ0FDQyw0RUFBQzBCO29DQUNDSixNQUFLO29DQUNMakIsT0FBTzt3Q0FDTEssU0FBUzt3Q0FDVGlCLGNBQWM7d0NBQ2RSLFFBQVE7d0NBQ1JTLGlCQUFpQjt3Q0FDakJDLE9BQU87d0NBQ1BDLFFBQVE7b0NBQ1Y7OENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU9KdEMsdUJBQ0MsOERBQUN1Qjt3QkFDQ1YsT0FBTzs0QkFDTHdCLE9BQU92QyxXQUFXLE9BQU8sVUFBVTs0QkFDbkM0QixXQUFXO3dCQUNiO2tDQUVDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZjtHQXhITUg7S0FBQUE7QUEwSE4saUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVuaVxcRGVza3RvcFxca29ja2F4eXotZGV2XFxjb21wb25lbnRzXFxBYm91dFVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwia2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBYm91dFVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuc3dlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChhbnN3ZXIgIT09IFwiNjRcIikge1xyXG4gICAgICBzZXRFcnJvcihcIuKdjCBIaWLDoXMgdsOhbGFzeiEgQSBoZWx5ZXMgdsOhbGFzejogNjQuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCLinIUgSGVseWVzIHbDoWxhc3osIGdyYXR1bMOhbHVuayFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICB7LyogS8OpcCDDqXMga8OpcmTDqXMgZWd5IHNvcmJhbiAqL31cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJrZXJkZXNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgZ2FwOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJrdml6LnBuZ1wiIGhlaWdodD1cIjUwcHhcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAxLiZuYnNwOyAmbmJzcDsgSGEgZWd5IGtvY2thIG9sZGFsaG9zc3phIG7DqWd5IGNlbnRpbcOpdGVyLCBha2tvclxyXG4gICAgICAgICAgICAgICAgbWVra29yYSBhIHTDqXJmb2dhdGE/XHJcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBBIHJhZGlvIGdvbWJvayDDqXMgYSBnb21iIGVneSBrw7Z6w7ZzIGRpdi1iZW4gKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGdhcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogUmFkaW8gZ29tYm9rIGRpdi1qZSAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFuc3dlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNjRcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXIgPT09IFwiNjRcIn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA2NFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjMyXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyID09PSBcIjMyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgMzJcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxMjhcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXIgPT09IFwiMTI4XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgMTI4XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogRWxsZW7FkXJ6xZEgZ29tYiBkaXYtamUgKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDdiZmZcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRWxsZW7FkXJpemQgYSB2w6FsYXN6dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBIaWJhw7x6ZW5ldCAqL31cclxuICAgICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhbnN3ZXIgPT09IFwiNjRcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NlbnRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFib3V0VXMiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2VudGVyIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3MiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJwYWRkaW5nIiwiaW1nIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwicCIsInN0cm9uZyIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImN1cnNvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutUs.jsx\n"));

/***/ })

});