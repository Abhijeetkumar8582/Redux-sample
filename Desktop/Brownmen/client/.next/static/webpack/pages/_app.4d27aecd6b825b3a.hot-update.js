"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/articles/Navbar.js":
/*!**********************************!*\
  !*** ./pages/articles/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onNavbarClick = (category)=>{\n        console.log(category);\n        router.push({\n            pathname: \"/articles/[category]\",\n            query: {\n                category: category\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar navbar-expand-lg fixed-top \",\n            style: {\n                backgroundColor: \"white\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"navbar-brand\",\n                        href: \"/\",\n                        children: \"Navbar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"navbar-toggler\",\n                        type: \"button\",\n                        \"data-bs-toggle\": \"collapse\",\n                        \"data-bs-target\": \"#navbarSupportedContent\",\n                        \"aria-controls\": \"navbarSupportedContent\",\n                        \"aria-expanded\": \"false\",\n                        \"aria-label\": \"Toggle navigation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navbar-toggler-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"collapse navbar-collapse\",\n                        id: \"navbarSupportedContent\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"nav-link active mx-3\",\n                                        \"aria-current\": \"page\",\n                                        onClick: ()=>onNavbarClick(\"Exercise\"),\n                                        href: \"/\",\n                                        children: \"Top Exercise\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"nav-link mx-2\",\n                                        href: \"/\",\n                                        onClick: ()=>onNavbarClick(\"Healthy\"),\n                                        children: \"Eat Healthy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"nav-link mx-2\",\n                                        href: \"/\",\n                                        onClick: ()=>onNavbarClick(\"Live well\"),\n                                        children: \"Live well\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"nav-link mx-2\",\n                                        href: \"/\",\n                                        onClick: ()=>onNavbarClick(\"Yoga\"),\n                                        children: \"Yoga\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFJdkMsU0FBU0UsU0FBUzs7SUFDaEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBRXhCLE1BQU1HLGdCQUFnQixDQUFDQyxXQUFhO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pGLE9BQU9LLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUVMLFVBQVVBO1lBQVM7UUFDOUI7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDTTtZQUFJQyxXQUFVO1lBQXFDQyxPQUFPO2dCQUFFQyxpQkFBaUI7WUFBUTtzQkFDcEYsNEVBQUNDO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQ1osa0RBQUlBO3dCQUFDWSxXQUFVO3dCQUFlSSxNQUFLO2tDQUFJOzs7Ozs7a0NBQ3hDLDhEQUFDQzt3QkFBT0wsV0FBVTt3QkFBaUJNLE1BQUs7d0JBQVNDLGtCQUFlO3dCQUFXQyxrQkFBZTt3QkFBMEJDLGlCQUFjO3dCQUF5QkMsaUJBQWM7d0JBQVFDLGNBQVc7a0NBQzFMLDRFQUFDQzs0QkFBS1osV0FBVTs7Ozs7Ozs7Ozs7a0NBRWxCLDhEQUFDRzt3QkFBSUgsV0FBVTt3QkFBMkJhLElBQUc7a0NBQzNDLDRFQUFDQzs0QkFBR2QsV0FBVTs7OENBQ1osOERBQUNlO29DQUFHZixXQUFVOzhDQUNaLDRFQUFDWixrREFBSUE7d0NBQUNZLFdBQVU7d0NBQXVCZ0IsZ0JBQWE7d0NBQU9DLFNBQVMsSUFBTXpCLGNBQWM7d0NBQWFZLE1BQUs7a0RBQUk7Ozs7Ozs7Ozs7OzhDQUVoSCw4REFBQ1c7b0NBQUdmLFdBQVU7OENBQ1osNEVBQUNaLGtEQUFJQTt3Q0FBQ1ksV0FBVTt3Q0FBZ0JJLE1BQUs7d0NBQUlhLFNBQVMsSUFBTXpCLGNBQWM7a0RBQVk7Ozs7Ozs7Ozs7OzhDQUVwRiw4REFBQ3VCO29DQUFHZixXQUFVOzhDQUNaLDRFQUFDWixrREFBSUE7d0NBQUNZLFdBQVU7d0NBQWdCSSxNQUFLO3dDQUFJYSxTQUFTLElBQU16QixjQUFjO2tEQUFjOzs7Ozs7Ozs7Ozs4Q0FFdEYsOERBQUN1QjtvQ0FBR2YsV0FBVTs4Q0FDWiw0RUFBQ1osa0RBQUlBO3dDQUFDWSxXQUFVO3dDQUFnQkksTUFBSzt3Q0FBSWEsU0FBUyxJQUFNekIsY0FBYztrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMvRjtHQTdDU0Y7O1FBQ1FELGtEQUFTQTs7O0tBRGpCQztBQStDVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9OYXZiYXIuanM/NGRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBcbiAgY29uc3Qgb25OYXZiYXJDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL1tjYXRlZ29yeV0nLFxuICAgICAgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdGVnb3J5IH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBmaXhlZC10b3AgXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5OYXZiYXI8L0xpbms+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteC1hdXRvIG1iLTIgbWItbGctMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZSBteC0zXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiIG9uQ2xpY2s9eygpID0+IG9uTmF2YmFyQ2xpY2soXCJFeGVyY2lzZVwiKX0gaHJlZj1cIi9cIj5Ub3AgRXhlcmNpc2U8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIG14LTJcIiBocmVmPVwiL1wiIG9uQ2xpY2s9eygpID0+IG9uTmF2YmFyQ2xpY2soXCJIZWFsdGh5XCIpfT5FYXQgSGVhbHRoeTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXgtMlwiIGhyZWY9XCIvXCIgb25DbGljaz17KCkgPT4gb25OYXZiYXJDbGljayhcIkxpdmUgd2VsbFwiKX0+TGl2ZSB3ZWxsPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBteC0yXCIgaHJlZj1cIi9cIiBvbkNsaWNrPXsoKSA9PiBvbk5hdmJhckNsaWNrKFwiWW9nYVwiKX0+WW9nYTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHsvKiA8Zm9ybSBjbGFzc05hbWU9XCJkLWZsZXhcIiByb2xlPVwic2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWUtMlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIi8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Zvcm0+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJyb3V0ZXIiLCJvbk5hdmJhckNsaWNrIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRpdiIsImhyZWYiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCIsInVsIiwibGkiLCJhcmlhLWN1cnJlbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles/Navbar.js\n"));

/***/ })

});