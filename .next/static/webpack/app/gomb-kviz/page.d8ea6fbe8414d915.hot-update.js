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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.css */ \"(app-pages-browser)/./globals.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst SphereQuiz = ()=>{\n    _s();\n    const [answer1, setAnswer1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer2, setAnswer2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error1, setError1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error2, setError2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitted1, setSubmitted1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [submitted2, setSubmitted2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRadioChange = (event)=>{\n        setAnswer1(event.target.value);\n        if (submitted1) {\n            setError1(\"\");\n        }\n    };\n    const handleInputChange = (event)=>{\n        setAnswer2(event.target.value);\n        if (submitted2) {\n            setError2(\"\");\n        }\n    };\n    const handleRadioChangeSubmit = (event)=>{\n        event.preventDefault();\n        setSubmitted1(true);\n        if (answer1 !== \"36π\") {\n            setError1(\"Hibás válasz! A helyes válasz: 36π.\");\n        } else {\n            setError1(\"Helyes válasz, gratulálunk!\");\n        }\n    };\n    const handleInputChangeSubmit = (event)=>{\n        event.preventDefault();\n        setSubmitted2(true);\n        if (answer2.trim() !== \"113.1\") {\n            setError2(\"Hibás válasz! A helyes válasz: 113.1.\");\n        } else {\n            setError2(\"Helyes válasz, gratulálunk!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit1,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"kerdes\",\n                        style: {\n                            padding: \"15px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"1. Hogyha egy g\\xf6mb sugara 3 cm, akkor mennyi a t\\xe9rfogata?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"15px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    gap: \"100px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"36π\",\n                                                checked: answer1 === \"36π\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"36π\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"18\",\n                                                checked: answer1 === \"18\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"18π\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: \"answer1\",\n                                                value: \"36\",\n                                                checked: answer1 === \"36\",\n                                                onChange: handleRadioChange,\n                                                className: \"radio-input\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"36π\\xb2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined),\n                            submitted1 && error1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: answer1 === \"36π\" ? \"green\" : \"red\"\n                                },\n                                children: error1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit1\",\n                        style: {\n                            marginTop: \"20px\",\n                            padding: \"8px 15px\",\n                            borderRadius: \"11px\",\n                            border: \"none\",\n                            backgroundColor: \"#4a37be\",\n                            color: \"white\",\n                            cursor: \"pointer\",\n                            fontWeight: \"760\",\n                            fontSize: \"15px\",\n                            width: \"340px\"\n                        },\n                        children: \"Ellenőrizd a v\\xe1laszokat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"kerdes\",\n                        style: {\n                            padding: \"15px\",\n                            marginTop: \"20px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"2. Ha a g\\xf6mb \\xe1tm\\xe9rője 6 cm, akkor mennyi a felsz\\xedne (kerek\\xedtve egy tizedesjegyre)?\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\",\n                            gap: \"15px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: answer2,\n                                onChange: handleInputChange,\n                                placeholder: \"\\xcdrd be a v\\xe1laszt\",\n                                style: {\n                                    padding: \"5px\",\n                                    fontSize: \"16px\",\n                                    textAlign: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, undefined),\n                            submitted2 && error2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: answer2.trim() === \"113.1\" ? \"green\" : \"red\"\n                                },\n                                children: error2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                                lineNumber: 152,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        style: {\n                            marginTop: \"20px\",\n                            padding: \"8px 15px\",\n                            borderRadius: \"11px\",\n                            border: \"none\",\n                            backgroundColor: \"#4a37be\",\n                            color: \"white\",\n                            cursor: \"pointer\",\n                            fontWeight: \"760\",\n                            fontSize: \"15px\",\n                            width: \"340px\"\n                        },\n                        children: \"Ellenőrizd a v\\xe1laszokat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\components\\\\SphereQuiz.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SphereQuiz, \"L8oTNeVCSHixe3g4Xr2r8NbllYk=\");\n_c = SphereQuiz;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SphereQuiz);\nvar _c;\n$RefreshReg$(_c, \"SphereQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3BoZXJlUXVpei5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNoQjtBQUV4QixNQUFNRSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNYyxvQkFBb0IsQ0FBQ0M7UUFDekJaLFdBQVdZLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUM3QixJQUFJUCxZQUFZO1lBQ2RILFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsb0JBQW9CLENBQUNIO1FBQ3pCVixXQUFXVSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDN0IsSUFBSUwsWUFBWTtZQUNkSCxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1VLDBCQUEwQixDQUFDSjtRQUMvQkEsTUFBTUssY0FBYztRQUNwQlQsY0FBYztRQUVkLElBQUlULFlBQVksT0FBTztZQUNyQkssVUFBVTtRQUNaLE9BQU87WUFDTEEsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxNQUFNYywwQkFBMEIsQ0FBQ047UUFDL0JBLE1BQU1LLGNBQWM7UUFDcEJQLGNBQWM7UUFFZCxJQUFJVCxRQUFRa0IsSUFBSSxPQUFPLFNBQVM7WUFDOUJiLFVBQVU7UUFDWixPQUFPO1lBQ0xBLFVBQVU7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNjO2tCQUNDLDRFQUFDQztzQkFDQyw0RUFBQ0M7Z0JBQUtDLFVBQVVDOztrQ0FDZCw4REFBQ0o7d0JBQUlLLFdBQVU7d0JBQVNDLE9BQU87NEJBQUVDLFNBQVM7d0JBQU87a0NBQy9DLDRFQUFDQztzQ0FDQyw0RUFBQ0M7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTVosOERBQUNUO3dCQUNDTSxPQUFPOzRCQUNMSSxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxZQUFZOzRCQUNaQyxLQUFLO3dCQUNQOzswQ0FFQSw4REFBQ2I7Z0NBQUlNLE9BQU87b0NBQUVJLFNBQVM7b0NBQVFHLEtBQUs7Z0NBQVE7O2tEQUMxQyw4REFBQ0M7OzBEQUNDLDhEQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTHZCLE9BQU07Z0RBQ053QixTQUFTdkMsWUFBWTtnREFDckJ3QyxVQUFVNUI7Z0RBQ1ZjLFdBQVU7Ozs7OzswREFFWiw4REFBQ2U7MERBQUs7Ozs7Ozs7Ozs7OztrREFFUiw4REFBQ047OzBEQUNDLDhEQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTHZCLE9BQU07Z0RBQ053QixTQUFTdkMsWUFBWTtnREFDckJ3QyxVQUFVNUI7Z0RBQ1ZjLFdBQVU7Ozs7OzswREFFWiw4REFBQ2U7MERBQUs7Ozs7Ozs7Ozs7OztrREFFUiw4REFBQ047OzBEQUNDLDhEQUFDQztnREFDQ0MsTUFBSztnREFDTEMsTUFBSztnREFDTHZCLE9BQU07Z0RBQ053QixTQUFTdkMsWUFBWTtnREFDckJ3QyxVQUFVNUI7Z0RBQ1ZjLFdBQVU7Ozs7OzswREFFWiw4REFBQ2U7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHVGpDLGNBQWNKLHdCQUNiLDhEQUFDeUI7Z0NBQUVGLE9BQU87b0NBQUVlLE9BQU8xQyxZQUFZLFFBQVEsVUFBVTtnQ0FBTTswQ0FDcERJOzs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUN1Qzt3QkFDQ04sTUFBSzt3QkFDTFYsT0FBTzs0QkFDTGlCLFdBQVc7NEJBQ1hoQixTQUFTOzRCQUNUaUIsY0FBYzs0QkFDZEMsUUFBUTs0QkFDUkMsaUJBQWlCOzRCQUNqQkwsT0FBTzs0QkFDUE0sUUFBUTs0QkFDUkMsWUFBWTs0QkFDWkMsVUFBVTs0QkFDVkMsT0FBTzt3QkFDVDtrQ0FDRDs7Ozs7O2tDQUdELDhEQUFDOUI7d0JBQ0NLLFdBQVU7d0JBQ1ZDLE9BQU87NEJBQUVDLFNBQVM7NEJBQVFnQixXQUFXO3dCQUFPO2tDQUU1Qyw0RUFBQ2Y7c0NBQ0MsNEVBQUNDOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7O2tDQU1aLDhEQUFDVDt3QkFDQ00sT0FBTzs0QkFDTEksU0FBUzs0QkFDVEMsZUFBZTs0QkFDZkMsWUFBWTs0QkFDWkMsS0FBSzt3QkFDUDs7MENBRUEsOERBQUNFO2dDQUNDQyxNQUFLO2dDQUNMdEIsT0FBT2I7Z0NBQ1BzQyxVQUFVeEI7Z0NBQ1ZvQyxhQUFZO2dDQUNaekIsT0FBTztvQ0FBRUMsU0FBUztvQ0FBT3NCLFVBQVU7b0NBQVFHLFdBQVc7Z0NBQVM7Ozs7Ozs0QkFFaEUzQyxjQUFjSix3QkFDYiw4REFBQ3VCO2dDQUNDRixPQUFPO29DQUFFZSxPQUFPeEMsUUFBUWtCLElBQUksT0FBTyxVQUFVLFVBQVU7Z0NBQU07MENBRTVEZDs7Ozs7Ozs7Ozs7O2tDQUtQLDhEQUFDcUM7d0JBQ0NOLE1BQUs7d0JBQ0xWLE9BQU87NEJBQ0xpQixXQUFXOzRCQUNYaEIsU0FBUzs0QkFDVGlCLGNBQWM7NEJBQ2RDLFFBQVE7NEJBQ1JDLGlCQUFpQjs0QkFDakJMLE9BQU87NEJBQ1BNLFFBQVE7NEJBQ1JDLFlBQVk7NEJBQ1pDLFVBQVU7NEJBQ1ZDLE9BQU87d0JBQ1Q7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWpMTXBEO0tBQUFBO0FBbUxOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJlbmlcXERlc2t0b3BcXGtvY2theHl6LWRldlxcY29tcG9uZW50c1xcU3BoZXJlUXVpei5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4uL2dsb2JhbHMuY3NzXCI7XHJcblxyXG5jb25zdCBTcGhlcmVRdWl6ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthbnN3ZXIxLCBzZXRBbnN3ZXIxXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbnN3ZXIyLCBzZXRBbnN3ZXIyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcjEsIHNldEVycm9yMV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IyLCBzZXRFcnJvcjJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZDEsIHNldFN1Ym1pdHRlZDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXR0ZWQyLCBzZXRTdWJtaXR0ZWQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuc3dlcjEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChzdWJtaXR0ZWQxKSB7XHJcbiAgICAgIHNldEVycm9yMShcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5zd2VyMihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHN1Ym1pdHRlZDIpIHtcclxuICAgICAgc2V0RXJyb3IyKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U3VibWl0dGVkMSh0cnVlKTtcclxuXHJcbiAgICBpZiAoYW5zd2VyMSAhPT0gXCIzNs+AXCIpIHtcclxuICAgICAgc2V0RXJyb3IxKFwiSGliw6FzIHbDoWxhc3ohIEEgaGVseWVzIHbDoWxhc3o6IDM2z4AuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IxKFwiSGVseWVzIHbDoWxhc3osIGdyYXR1bMOhbHVuayFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN1Ym1pdHRlZDIodHJ1ZSk7XHJcblxyXG4gICAgaWYgKGFuc3dlcjIudHJpbSgpICE9PSBcIjExMy4xXCIpIHtcclxuICAgICAgc2V0RXJyb3IyKFwiSGliw6FzIHbDoWxhc3ohIEEgaGVseWVzIHbDoWxhc3o6IDExMy4xLlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yMihcIkhlbHllcyB2w6FsYXN6LCBncmF0dWzDoWx1bmshXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Y2VudGVyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQxfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2VyZGVzXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAxLiBIb2d5aGEgZWd5IGfDtm1iIHN1Z2FyYSAzIGNtLCBha2tvciBtZW5ueWkgYSB0w6lyZm9nYXRhP1xyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGdhcDogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIxMDBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyMVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzbPgFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Fuc3dlcjEgPT09IFwiMzbPgFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4zNs+APC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbnN3ZXIxXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Fuc3dlcjEgPT09IFwiMThcIn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpby1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MTjPgDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYW5zd2VyMVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzZcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthbnN3ZXIxID09PSBcIjM2XCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW8taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjM2z4DCsjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3N1Ym1pdHRlZDEgJiYgZXJyb3IxICYmIChcclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogYW5zd2VyMSA9PT0gXCIzNs+AXCIgPyBcImdyZWVuXCIgOiBcInJlZFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2Vycm9yMX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdDFcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTVweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRhMzdiZVwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjc2MFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIzNDBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbGxlbsWRcml6ZCBhIHbDoWxhc3pva2F0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2VyZGVzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgIDIuIEhhIGEgZ8O2bWIgw6F0bcOpcsWRamUgNiBjbSwgYWtrb3IgbWVubnlpIGEgZmVsc3rDrW5lIChrZXJla8OtdHZlXHJcbiAgICAgICAgICAgICAgICBlZ3kgdGl6ZWRlc2plZ3lyZSk/XHJcbiAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBnYXA6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcjJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiw41yZCBiZSBhIHbDoWxhc3p0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBmb250U2l6ZTogXCIxNnB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c3VibWl0dGVkMiAmJiBlcnJvcjIgJiYgKFxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogYW5zd2VyMi50cmltKCkgPT09IFwiMTEzLjFcIiA/IFwiZ3JlZW5cIiA6IFwicmVkXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IyfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjExcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNGEzN2JlXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzYwXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM0MHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVsbGVuxZFyaXpkIGEgdsOhbGFzem9rYXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9jZW50ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BoZXJlUXVpejtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTcGhlcmVRdWl6IiwiYW5zd2VyMSIsInNldEFuc3dlcjEiLCJhbnN3ZXIyIiwic2V0QW5zd2VyMiIsImVycm9yMSIsInNldEVycm9yMSIsImVycm9yMiIsInNldEVycm9yMiIsInN1Ym1pdHRlZDEiLCJzZXRTdWJtaXR0ZWQxIiwic3VibWl0dGVkMiIsInNldFN1Ym1pdHRlZDIiLCJoYW5kbGVSYWRpb0NoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZVJhZGlvQ2hhbmdlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dENoYW5nZVN1Ym1pdCIsInRyaW0iLCJkaXYiLCJjZW50ZXIiLCJmb3JtIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQxIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nIiwicCIsInN0cm9uZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImdhcCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInNwYW4iLCJjb2xvciIsImJ1dHRvbiIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QWxpZ24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SphereQuiz.jsx\n"));

/***/ })

});