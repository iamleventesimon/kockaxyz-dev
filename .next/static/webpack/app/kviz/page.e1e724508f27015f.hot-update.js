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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"(app-pages-browser)/./node_modules/katex/dist/katex.min.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst AboutUs = ()=>{\n    _s();\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (event)=>{\n        setAnswer(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (answer !== \"64\") {\n            setError(\"❌ Hibás válasz! A helyes válasz: 64.\");\n        } else {\n            setError(\"✅ Helyes válasz, gratulálunk!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: {\n                            display: \"flex\",\n                            alignItems: \"left\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"kviz.png\",\n                                height: \"50px\",\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginLeft: \"20px\",\n                                    lineHeight: \"50px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"1.\\xa0 Ha egy kocka oldalhossza n\\xe9gy centim\\xe9ter, akkor mekkora a t\\xe9rfogata?\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"10px\",\n                            marginTop: \"20px\",\n                            padding: \"15px\",\n                            border: \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    gap: \"15px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"64\",\n                                                checked: answer === \"64\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"64\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"32\",\n                                                checked: answer === \"32\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"32\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer\",\n                                                value: \"128\",\n                                                checked: answer === \"128\",\n                                                onChange: handleChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"128\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    style: {\n                                        padding: \"8px 15px\",\n                                        borderRadius: \"5px\",\n                                        border: \"none\",\n                                        backgroundColor: \"#007bff\",\n                                        color: \"white\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Ellenőrizd a v\\xe1laszt\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: answer === \"64\" ? \"green\" : \"red\",\n                            marginTop: \"10px\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\AboutUs.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutUs, \"V1YKGLiD78/wi1fayN8baVjRoa4=\");\n_c = AboutUs;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);\nvar _c;\n$RefreshReg$(_c, \"AboutUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWJvdXRVcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRWxDLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxlQUFlLENBQUNDO1FBQ3BCSixVQUFVSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxNQUFNQyxlQUFlLENBQUNIO1FBQ3BCQSxNQUFNSSxjQUFjO1FBQ3BCLElBQUlULFdBQVcsTUFBTTtZQUNuQkcsU0FBUztRQUNYLE9BQU87WUFDTEEsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQztnQkFBS0MsVUFBVUw7O2tDQUVkLDhEQUFDRTt3QkFBSUksT0FBTzs0QkFBRUMsU0FBUzs0QkFBUUMsWUFBWTt3QkFBTzs7MENBQ2hELDhEQUFDQztnQ0FBSUMsS0FBSTtnQ0FBV0MsUUFBTztnQ0FBT0MsS0FBSTs7Ozs7OzBDQUN0Qyw4REFBQ0M7Z0NBQUVDLE9BQU87b0NBQUVDLFlBQVk7b0NBQVFDLFlBQVk7Z0NBQU87MENBQ2pELDRFQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUVosOERBQUNmO3dCQUNDWSxPQUFPOzRCQUNMUCxTQUFTOzRCQUNUVyxlQUFlOzRCQUNmVixZQUFZOzRCQUNaVyxLQUFLOzRCQUNMQyxXQUFXOzRCQUNYQyxTQUFTOzRCQUNUQyxRQUFRO3dCQUNWOzswQ0FHQSw4REFBQ3BCO2dDQUFJWSxPQUFPO29DQUFFUCxTQUFTO29DQUFRWSxLQUFLO2dDQUFPOztrREFDekMsOERBQUNJOzswREFDQyw4REFBQ0M7Z0RBQ0NDLE1BQUs7Z0RBQ0xDLE1BQUs7Z0RBQ0wzQixPQUFNO2dEQUNONEIsU0FBU25DLFdBQVc7Z0RBQ3BCb0MsVUFBVWhDOzs7Ozs7NENBQ1Y7Ozs7Ozs7a0RBR0osOERBQUMyQjs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMM0IsT0FBTTtnREFDTjRCLFNBQVNuQyxXQUFXO2dEQUNwQm9DLFVBQVVoQzs7Ozs7OzRDQUNWOzs7Ozs7O2tEQUdKLDhEQUFDMkI7OzBEQUNDLDhEQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTDNCLE9BQU07Z0RBQ040QixTQUFTbkMsV0FBVztnREFDcEJvQyxVQUFVaEM7Ozs7Ozs0Q0FDVjs7Ozs7Ozs7Ozs7OzswQ0FNTiw4REFBQ007MENBQ0MsNEVBQUMyQjtvQ0FDQ0osTUFBSztvQ0FDTFgsT0FBTzt3Q0FDTE8sU0FBUzt3Q0FDVFMsY0FBYzt3Q0FDZFIsUUFBUTt3Q0FDUlMsaUJBQWlCO3dDQUNqQkMsT0FBTzt3Q0FDUEMsUUFBUTtvQ0FDVjs4Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBT0p2Qyx1QkFDQyw4REFBQ21CO3dCQUNDQyxPQUFPOzRCQUNMa0IsT0FBT3hDLFdBQVcsT0FBTyxVQUFVOzRCQUNuQzRCLFdBQVc7d0JBQ2I7a0NBRUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBL0dNSDtLQUFBQTtBQWlITixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxSZW5pXFxEZXNrdG9wXFxrb2NrYXh5ei1kZXZcXGNvbXBvbmVudHNcXEFib3V0VXMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3NcIjtcclxuXHJcbmNvbnN0IEFib3V0VXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5zd2VyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGFuc3dlciAhPT0gXCI2NFwiKSB7XHJcbiAgICAgIHNldEVycm9yKFwi4p2MIEhpYsOhcyB2w6FsYXN6ISBBIGhlbHllcyB2w6FsYXN6OiA2NC5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIuKchSBIZWx5ZXMgdsOhbGFzeiwgZ3JhdHVsw6FsdW5rIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGNlbnRlcj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIHsvKiBLw6lwIMOpcyBrw6lyZMOpcyBlZ3kgc29yYmFuICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzcz17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwia3Zpei5wbmdcIiBoZWlnaHQ9XCI1MHB4XCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiwgbGluZUhlaWdodDogXCI1MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIDEuJm5ic3A7IEhhIGVneSBrb2NrYSBvbGRhbGhvc3N6YSBuw6lneSBjZW50aW3DqXRlciwgYWtrb3IgbWVra29yYVxyXG4gICAgICAgICAgICAgICAgYSB0w6lyZm9nYXRhP1xyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQSByYWRpbyBnb21ib2sgw6lzIGEgZ29tYiBlZ3kga8O2esO2cyBkaXYtYmVuICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBnYXA6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIFJhZGlvIGdvbWJvayBkaXYtamUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjY0XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyID09PSBcIjY0XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgNjRcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMlwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Fuc3dlciA9PT0gXCIzMlwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDMyXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFuc3dlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTI4XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyID09PSBcIjEyOFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDEyOFxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEVsbGVuxZFyesWRIGdvbWIgZGl2LWplICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDA3YmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVsbGVuxZFyaXpkIGEgdsOhbGFzenRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogSGliYcO8emVuZXQgKi99XHJcbiAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYW5zd2VyID09PSBcIjY0XCIgPyBcImdyZWVuXCIgOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Vycm9yfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBYm91dFVzIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNlbnRlciIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJhbHQiLCJwIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwibGluZUhlaWdodCIsInN0cm9uZyIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiYm9yZGVyIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJjdXJzb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AboutUs.jsx\n"));

/***/ })

});