"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/[category]",{

/***/ "./pages/articles/[category].js":
/*!**************************************!*\
  !*** ./pages/articles/[category].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, Sercarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, Sercarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Exercise\") {\n            Sercarousel_tittle(\"Exercise promotes health benefits\");\n            Sercarousel_description(\"Ready to take charge of your diet? These nutrition-focused guides, tips and recipes will set you up for success\");\n        } else if (category == \"Healthy\") {\n            Sercarousel_tittle(\"healthy health benefits\");\n        } else if (category == \"Live_well\") {\n            Sercarousel_tittle(\"live_well health benefits\");\n        } else {\n            Sercarousel_tittle(\"yoga health benefits\");\n            Sercarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (slug)=>{\n        console.log(slug);\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                pid: slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        style: {\n                            backgroundColor: \"#C4B05D\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: getCategory\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>refirect_to_post(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"Lcd1U53bTg/9TcSOtuOqdVSGFck=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OytCQVBqQlI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCakQ7R0F6RVNsQzs7UUFFUUQsa0RBQVNBOzs7S0FGakJDO0FBNEVULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL1tjYXRlZ29yeV0uanM/OGY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBibG9nIGZyb20gJy4uL0pTT04vQmxvZy5qc29uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5mdW5jdGlvbiBDYXRlZ29yeSgpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZ2V0Q2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5jYXRlZ29yeSlcbiAgY29uc3QgW2Nhcm91c2VsX3RpdHRsZSwgU2VyY2Fyb3VzZWxfdGl0dGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjYXJvdXNlbF9kZXNjcmlwdGlvbiwgU2VyY2Fyb3VzZWxfZGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5KVxuICAgIGlmIChjYXRlZ29yeSA9PSBcIkV4ZXJjaXNlXCIpIHtcbiAgICAgIFNlcmNhcm91c2VsX3RpdHRsZShcIkV4ZXJjaXNlIHByb21vdGVzIGhlYWx0aCBiZW5lZml0c1wiKVxuICAgICAgU2VyY2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWFkeSB0byB0YWtlIGNoYXJnZSBvZiB5b3VyIGRpZXQ/IFRoZXNlIG51dHJpdGlvbi1mb2N1c2VkIGd1aWRlcywgdGlwcyBhbmQgcmVjaXBlcyB3aWxsIHNldCB5b3UgdXAgZm9yIHN1Y2Nlc3NcIilcbiAgICB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gXCJIZWFsdGh5XCIpIHtcbiAgICAgIFNlcmNhcm91c2VsX3RpdHRsZShcImhlYWx0aHkgaGVhbHRoIGJlbmVmaXRzXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09IFwiTGl2ZV93ZWxsXCIpIHtcbiAgICAgIFNlcmNhcm91c2VsX3RpdHRsZShcImxpdmVfd2VsbCBoZWFsdGggYmVuZWZpdHNcIilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBTZXJjYXJvdXNlbF90aXR0bGUoXCJ5b2dhIGhlYWx0aCBiZW5lZml0c1wiKVxuICAgICAgU2VyY2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWd1bGFyIHByYWN0aWNlIG9mIHlvZ2EgY2FuIGhlbHAgaW1wcm92ZSBmbGV4aWJpbGl0eSwgYmFsYW5jZSwgYW5kIHN0cmVuZ3RoXCIpXG4gICAgfVxuXG4gIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG4gIGNvbnN0IHJlZmlyZWN0X3RvX3Bvc3QgPSAoc2x1ZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNsdWcpXG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvYXJ0aWNsZXMvUG9zdCcsXG4gICAgICBxdWVyeTogeyBwaWQ6IHNsdWcgfSxcblxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS01Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yMzU5MjIvcGV4ZWxzLXBob3RvLTIzNTkyMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IGhlaWdodD17NTAwfSBhbHQ9XCJodHRwczovL2ltYWdlcy5wZTc1MCZkcHI9MlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0M0QjA1RFwiIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoZWF0XCIgfX0+e2Nhcm91c2VsX3RpdHRsZX08L2gxPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoZWF0XCIgfX0+e2Nhcm91c2VsX2Rlc2NyaXB0aW9ufTwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXgtd3JhcCBteS01ICc+XG4gICAgICAgIDxoMT57Z2V0Q2F0ZWdvcnl9PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteC00IG15LTMgJz5cbiAgICAgICAgICB7YmxvZy5zbGljZSgwLCAxMikubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zIG15LTMgJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIycgb25DbGljaz17KCkgPT4gcmVmaXJlY3RfdG9fcG9zdChlbGVtZW50LnNsdWcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljQ2FyZERpc3BsYXlcIiA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgbG9hZGluZz0nbGF6eScgc3JjPXtlbGVtZW50LmltYWdlfSB3aWR0aD17Mjg1fSBoZWlnaHQ9ezIyMH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuY2F0ZWdvcnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5ibG9ndGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYmxvZyIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5Iiwicm91dGVyIiwiZ2V0Q2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXJvdXNlbF90aXR0bGUiLCJTZXJjYXJvdXNlbF90aXR0bGUiLCJjYXJvdXNlbF9kZXNjcmlwdGlvbiIsIlNlcmNhcm91c2VsX2Rlc2NyaXB0aW9uIiwicmVmaXJlY3RfdG9fcG9zdCIsInNsdWciLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhdGhuYW1lIiwicGlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJhY2tncm91bmRDb2xvciIsImgxIiwidG9wIiwicG9zaXRpb24iLCJjb2xvciIsImg2Iiwic2xpY2UiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJocmVmIiwib25DbGljayIsInRleHREZWNvcmF0aW9uIiwibG9hZGluZyIsImltYWdlIiwiYmxvZ3RpdGxlIiwicCIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/[category].js\n"));

/***/ })

});