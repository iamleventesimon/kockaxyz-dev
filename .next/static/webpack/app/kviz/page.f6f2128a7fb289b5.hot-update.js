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

/***/ "(app-pages-browser)/./app/kviz/page.jsx":
/*!***************************!*\
  !*** ./app/kviz/page.jsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Quiz */ \"(app-pages-browser)/./components/Quiz.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Kvizek() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-5\",\n            \"data-testid\": \"kvizek\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    \"data-testid\": \"kvizek-title\",\n                    style: {\n                        textAlign: \"center\"\n                    },\n                    children: \"Kv\\xedzek\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\app\\\\kviz\\\\page.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quiz__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\app\\\\kviz\\\\page.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Reni\\\\Desktop\\\\kockaxyz-dev\\\\app\\\\kviz\\\\page.jsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Kvizek;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kvizek);\nvar _c;\n$RefreshReg$(_c, \"Kvizek\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9rdml6L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUwQjtBQUVlO0FBRXpDLFNBQVNFO0lBQ1AscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7WUFBT0MsZUFBWTs7OEJBQ2hDLDhEQUFDQztvQkFBR0QsZUFBWTtvQkFBZUUsT0FBTzt3QkFBRUMsV0FBVztvQkFBUzs4QkFBRzs7Ozs7OzhCQUkvRCw4REFBQ1Asd0RBQUlBOzs7Ozs7Ozs7Ozs7QUFJYjtLQVpTQztBQWNULGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFJlbmlcXERlc2t0b3BcXGtvY2theHl6LWRldlxcYXBwXFxrdml6XFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBRdWl6IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1F1aXpcIjtcclxuXHJcbmZ1bmN0aW9uIEt2aXplaygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCIgZGF0YS10ZXN0aWQ9XCJrdml6ZWtcIj5cclxuICAgICAgICA8aDEgZGF0YS10ZXN0aWQ9XCJrdml6ZWstdGl0bGVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICBLdsOtemVrXHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPFF1aXogLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLdml6ZWs7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlF1aXoiLCJLdml6ZWsiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXRlc3RpZCIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/kviz/page.jsx\n"));

/***/ })

});