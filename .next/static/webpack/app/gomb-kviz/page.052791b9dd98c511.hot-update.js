"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gomb-kviz/page",{

/***/ "(app-pages-browser)/./components/SphereQuiz.jsx":
/*!***********************************!*\
  !*** ./components/SphereQuiz.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.css */ \"(app-pages-browser)/./globals.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst SphereQuiz = ()=>{\n    _s();\n    const [answer1, setAnswer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer2, setAnswer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error1, setError1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error2, setError2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitted1, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [submitted2, setSubmitted2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRadioChange = (event)=>{\n        setAnswer1(event.target.value);\n        if (submitted1) {\n            setError1(\"\");\n        }\n    };\n    const handleInputChange = (event)=>{\n        setAnswer2(event.target.value);\n        if (submitted2) {\n            setError2(\"\");\n        }\n    };\n    const handleRadioChangeSubmit = (event)=>{\n        event.preventDefault();\n        setSubmitted1(true);\n        if (answer1 !== \"36π\") {\n            setError1(\"Hibás válasz! A helyes válasz: 36π.\");\n        } else {\n            setError1(\"Helyes válasz, gratulálunk!\");\n        }\n    };\n    const handleInputChangeSubmit = (event)=>{\n        event.preventDefault();\n        setSubmitted2(true);\n        if (answer2.trim() !== \"113.1\") {\n            setError2(\"Hibás válasz! A helyes válasz: 113.1.\");\n        } else {\n            setError2(\"Helyes válasz, gratulálunk!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleRadioChangeSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleInputChangeSubmit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"kerdes\",\n                        style: {\n                            padding: \"15px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"1. Hogyha egy g\\xf6mb sugara 3 cm, akkor mennyi a t\\xe9rfogata?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"15px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    gap: \"100px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"36π\",\n                                                checked: answer1 === \"36π\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"36π\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"18\",\n                                                checked: answer1 === \"18\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"18π\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"36\",\n                                                checked: answer1 === \"36\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"36π\\xb2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            submitted1 && error1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: answer1 === \"36π\" ? \"green\" : \"red\"\n                                },\n                                children: error1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit1\",\n                        style: {\n                            marginTop: \"20px\",\n                            padding: \"8px 15px\",\n                            borderRadius: \"11px\",\n                            border: \"none\",\n                            backgroundColor: \"#4a37be\",\n                            color: \"white\",\n                            cursor: \"pointer\",\n                            fontWeight: \"760\",\n                            fontSize: \"15px\",\n                            width: \"340px\"\n                        },\n                        children: \"Ellenőrizd a v\\xe1laszokat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"kerdes\",\n                        style: {\n                            padding: \"15px\",\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"2. Ha a g\\xf6mb \\xe1tm\\xe9rője 6 cm, akkor mennyi a felsz\\xedne (kerek\\xedtve egy tizedesjegyre)?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"15px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: answer2,\n                                onChange: handleInputChange,\n                                placeholder: \"\\xcdrd be a v\\xe1laszt\",\n                                style: {\n                                    padding: \"5px\",\n                                    fontSize: \"16px\",\n                                    textAlign: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, undefined),\n                            submitted2 && error2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: answer2.trim() === \"113.1\" ? \"green\" : \"red\"\n                                },\n                                children: error2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            marginTop: \"20px\",\n                            padding: \"8px 15px\",\n                            borderRadius: \"11px\",\n                            border: \"none\",\n                            backgroundColor: \"#4a37be\",\n                            color: \"white\",\n                            cursor: \"pointer\",\n                            fontWeight: \"760\",\n                            fontSize: \"15px\",\n                            width: \"340px\"\n                        },\n                        children: \"Ellenőrizd a v\\xe1laszokat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SphereQuiz, \"L8oTNeVCSHixe3g4Xr2r8NbllYk=\");\n_c = SphereQuiz;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SphereQuiz);\nvar _c;\n$RefreshReg$(_c, \"SphereQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3BoZXJlUXVpei5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNoQjtBQUV4QixNQUFNRSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYyxvQkFBb0IsQ0FBQ0M7UUFDekJaLFdBQVdZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUM3QixJQUFJUCxZQUFZO1lBQ2RILFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsb0JBQW9CLENBQUNIO1FBQ3pCVixXQUFXVSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDN0IsSUFBSUwsWUFBWTtZQUNkSCxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1VLDBCQUEwQixDQUFDSjtRQUMvQkEsTUFBTUssY0FBYztRQUNwQlQsY0FBYztRQUVkLElBQUlULFlBQVksT0FBTztZQUNyQkssVUFBVTtRQUNaLE9BQU87WUFDTEEsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxNQUFNYywwQkFBMEIsQ0FBQ047UUFDL0JBLE1BQU1LLGNBQWM7UUFDcEJQLGNBQWM7UUFFZCxJQUFJVCxRQUFRa0IsSUFBSSxPQUFPLFNBQVM7WUFDOUJiLFVBQVU7UUFDWixPQUFPO1lBQ0xBLFVBQVU7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO2tCQUNDLDRFQUFDQztzQkFDQyw0RUFBQ0M7Z0JBQUtDLFVBQVVQOztrQ0FDZCw4REFBQ007d0JBQUtDLFVBQVVMOzs7Ozs7a0NBQ2hCLDhEQUFDRTt3QkFBSUksV0FBVTt3QkFBU0MsT0FBTzs0QkFBRUMsU0FBUzt3QkFBTztrQ0FDL0MsNEVBQUNDO3NDQUNDLDRFQUFDQzswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNWiw4REFBQ1I7d0JBQ0NLLE9BQU87NEJBQ0xJLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZDLFlBQVk7NEJBQ1pDLEtBQUs7d0JBQ1A7OzBDQUVBLDhEQUFDWjtnQ0FBSUssT0FBTztvQ0FBRUksU0FBUztvQ0FBUUcsS0FBSztnQ0FBUTs7a0RBQzFDLDhEQUFDQzs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMdEIsT0FBTTtnREFDTnVCLFNBQVN0QyxZQUFZO2dEQUNyQnVDLFVBQVUzQjtnREFDVmEsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDZTswREFBSzs7Ozs7Ozs7Ozs7O2tEQUVSLDhEQUFDTjs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMdEIsT0FBTTtnREFDTnVCLFNBQVN0QyxZQUFZO2dEQUNyQnVDLFVBQVUzQjtnREFDVmEsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDZTswREFBSzs7Ozs7Ozs7Ozs7O2tEQUVSLDhEQUFDTjs7MERBQ0MsOERBQUNDO2dEQUNDQyxNQUFLO2dEQUNMQyxNQUFLO2dEQUNMdEIsT0FBTTtnREFDTnVCLFNBQVN0QyxZQUFZO2dEQUNyQnVDLFVBQVUzQjtnREFDVmEsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDZTswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUdUaEMsY0FBY0osd0JBQ2IsOERBQUN3QjtnQ0FBRUYsT0FBTztvQ0FBRWUsT0FBT3pDLFlBQVksUUFBUSxVQUFVO2dDQUFNOzBDQUNwREk7Ozs7Ozs7Ozs7OztrQ0FJUCw4REFBQ3NDO3dCQUNDTixNQUFLO3dCQUNMVixPQUFPOzRCQUNMaUIsV0FBVzs0QkFDWGhCLFNBQVM7NEJBQ1RpQixjQUFjOzRCQUNkQyxRQUFROzRCQUNSQyxpQkFBaUI7NEJBQ2pCTCxPQUFPOzRCQUNQTSxRQUFROzRCQUNSQyxZQUFZOzRCQUNaQyxVQUFVOzRCQUNWQyxPQUFPO3dCQUNUO2tDQUNEOzs7Ozs7a0NBR0QsOERBQUM3Qjt3QkFDQ0ksV0FBVTt3QkFDVkMsT0FBTzs0QkFBRUMsU0FBUzs0QkFBUWdCLFdBQVc7d0JBQU87a0NBRTVDLDRFQUFDZjtzQ0FDQyw0RUFBQ0M7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVosOERBQUNSO3dCQUNDSyxPQUFPOzRCQUNMSSxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxZQUFZOzRCQUNaQyxLQUFLO3dCQUNQOzswQ0FFQSw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xyQixPQUFPYjtnQ0FDUHFDLFVBQVV2QjtnQ0FDVm1DLGFBQVk7Z0NBQ1p6QixPQUFPO29DQUFFQyxTQUFTO29DQUFPc0IsVUFBVTtvQ0FBUUcsV0FBVztnQ0FBUzs7Ozs7OzRCQUVoRTFDLGNBQWNKLHdCQUNiLDhEQUFDc0I7Z0NBQ0NGLE9BQU87b0NBQUVlLE9BQU92QyxRQUFRa0IsSUFBSSxPQUFPLFVBQVUsVUFBVTtnQ0FBTTswQ0FFNURkOzs7Ozs7Ozs7Ozs7a0NBS1AsOERBQUNvQzt3QkFDQ04sTUFBSzt3QkFDTFYsT0FBTzs0QkFDTGlCLFdBQVc7NEJBQ1hoQixTQUFTOzRCQUNUaUIsY0FBYzs0QkFDZEMsUUFBUTs0QkFDUkMsaUJBQWlCOzRCQUNqQkwsT0FBTzs0QkFDUE0sUUFBUTs0QkFDUkMsWUFBWTs0QkFDWkMsVUFBVTs0QkFDVkMsT0FBTzt3QkFDVDtrQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBbExNbkQ7S0FBQUE7QUFvTE4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVuaVxcRGVza3RvcFxca29ja2F4eXotZGV2XFxjb21wb25lbnRzXFxTcGhlcmVRdWl6LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi4vZ2xvYmFscy5jc3NcIjtcclxuXHJcbmNvbnN0IFNwaGVyZVF1aXogPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Fuc3dlcjEsIHNldEFuc3dlcjFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Fuc3dlcjIsIHNldEFuc3dlcjJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yMSwgc2V0RXJyb3IxXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjIsIHNldEVycm9yMl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VibWl0dGVkMSwgc2V0U3VibWl0dGVkMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZDIsIHNldFN1Ym1pdHRlZDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5zd2VyMShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHN1Ym1pdHRlZDEpIHtcclxuICAgICAgc2V0RXJyb3IxKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbnN3ZXIyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAoc3VibWl0dGVkMikge1xyXG4gICAgICBzZXRFcnJvcjIoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2VTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdWJtaXR0ZWQxKHRydWUpO1xyXG5cclxuICAgIGlmIChhbnN3ZXIxICE9PSBcIjM2z4BcIikge1xyXG4gICAgICBzZXRFcnJvcjEoXCJIaWLDoXMgdsOhbGFzeiEgQSBoZWx5ZXMgdsOhbGFzejogMzbPgC5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcjEoXCJIZWx5ZXMgdsOhbGFzeiwgZ3JhdHVsw6FsdW5rIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U3VibWl0dGVkMih0cnVlKTtcclxuXHJcbiAgICBpZiAoYW5zd2VyMi50cmltKCkgIT09IFwiMTEzLjFcIikge1xyXG4gICAgICBzZXRFcnJvcjIoXCJIaWLDoXMgdsOhbGFzeiEgQSBoZWx5ZXMgdsOhbGFzejogMTEzLjEuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IyKFwiSGVseWVzIHbDoWxhc3osIGdyYXR1bMOhbHVuayFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVJhZGlvQ2hhbmdlU3VibWl0fT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVJbnB1dENoYW5nZVN1Ym1pdH0+PC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXJkZXNcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIDEuIEhvZ3loYSBlZ3kgZ8O2bWIgc3VnYXJhIDMgY20sIGFra29yIG1lbm55aSBhIHTDqXJmb2dhdGE/XHJcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgZ2FwOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiBcIjEwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXIxXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzNs+AXCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyMSA9PT0gXCIzNs+AXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjM2z4A8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFuc3dlcjFcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjE4XCJcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YW5zd2VyMSA9PT0gXCIxOFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4xOM+APC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXIxXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzNlwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Fuc3dlcjEgPT09IFwiMzZcIn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MzbPgMKyPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c3VibWl0dGVkMSAmJiBlcnJvcjEgJiYgKFxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBhbnN3ZXIxID09PSBcIjM2z4BcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IxfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0MVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjExcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNGEzN2JlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzYwXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVsbGVuxZFyaXpkIGEgdsOhbGFzem9rYXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJrZXJkZXNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgMi4gSGEgYSBnw7ZtYiDDoXRtw6lyxZFqZSA2IGNtLCBha2tvciBtZW5ueWkgYSBmZWxzesOtbmUgKGtlcmVrw610dmVcclxuICAgICAgICAgICAgICAgIGVneSB0aXplZGVzamVneXJlKT9cclxuICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGdhcDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLDjXJkIGJlIGEgdsOhbGFzenRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIsIGZvbnRTaXplOiBcIjE2cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzdWJtaXR0ZWQyICYmIGVycm9yMiAmJiAoXHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBhbnN3ZXIyLnRyaW0oKSA9PT0gXCIxMTMuMVwiID8gXCJncmVlblwiIDogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtlcnJvcjJ9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTFweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0YTM3YmVcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3NjBcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMzQwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRWxsZW7FkXJpemQgYSB2w6FsYXN6b2thdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2NlbnRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGhlcmVRdWl6O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNwaGVyZVF1aXoiLCJhbnN3ZXIxIiwic2V0QW5zd2VyMSIsImFuc3dlcjIiLCJzZXRBbnN3ZXIyIiwiZXJyb3IxIiwic2V0RXJyb3IxIiwiZXJyb3IyIiwic2V0RXJyb3IyIiwic3VibWl0dGVkMSIsInNldFN1Ym1pdHRlZDEiLCJzdWJtaXR0ZWQyIiwic2V0U3VibWl0dGVkMiIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlUmFkaW9DaGFuZ2VTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0Q2hhbmdlU3VibWl0IiwidHJpbSIsImRpdiIsImNlbnRlciIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZyIsInAiLCJzdHJvbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJnYXAiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzcGFuIiwiY29sb3IiLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsInBsYWNlaG9sZGVyIiwidGV4dEFsaWduIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SphereQuiz.jsx\n"));

/***/ })

});