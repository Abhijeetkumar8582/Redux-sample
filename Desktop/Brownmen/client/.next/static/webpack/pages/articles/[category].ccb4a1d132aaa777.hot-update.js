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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, Sercarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Exercise\") {\n            Sercarousel_tittle(\"Exercise promotes health benefits\");\n        } else if (category == \"Healthy\") {\n            Sercarousel_tittle(\"healthy health benefits\");\n        } else if (category == \"Live_well\") {\n            Sercarousel_tittle(\"live_well health benefits\");\n        } else {\n            Sercarousel_tittle(\"yoga health benefits\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (slug)=>{\n        console.log(slug);\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                pid: slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        style: {\n                            backgroundColor: \"#C4B05D\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: \"Ready to take charge of your diet? These nutrition-focused guides, tips and recipes will set you up for success.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: getCategory\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>refirect_to_post(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"vN+CadODrVdHkI1MRKvjOKjq1M4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvW2NhdGVnb3J5XS5qcz84Zjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vSlNPTi9CbG9nLmpzb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmZ1bmN0aW9uIENhdGVnb3J5KCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtnZXRDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KVxuICBjb25zdCBbY2Fyb3VzZWxfdGl0dGxlLFNlcmNhcm91c2VsX3RpdHRsZV09dXNlU3RhdGUoXCJcIilcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5KVxuICAgIGlmKGNhdGVnb3J5PT1cIkV4ZXJjaXNlXCIpe1xuICAgIFNlcmNhcm91c2VsX3RpdHRsZShcIkV4ZXJjaXNlIHByb21vdGVzIGhlYWx0aCBiZW5lZml0c1wiKX1cbiAgICBlbHNlIGlmKGNhdGVnb3J5PT1cIkhlYWx0aHlcIil7XG4gICAgICBTZXJjYXJvdXNlbF90aXR0bGUoXCJoZWFsdGh5IGhlYWx0aCBiZW5lZml0c1wiKX1cbiAgICAgIGVsc2UgaWYoY2F0ZWdvcnk9PVwiTGl2ZV93ZWxsXCIpe1xuICAgICAgICBTZXJjYXJvdXNlbF90aXR0bGUoXCJsaXZlX3dlbGwgaGVhbHRoIGJlbmVmaXRzXCIpfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBTZXJjYXJvdXNlbF90aXR0bGUoXCJ5b2dhIGhlYWx0aCBiZW5lZml0c1wiKX1cbiAgICBcbiAgfSwgW3JvdXRlci5xdWVyeS5jYXRlZ29yeV0pXG5cbiAgY29uc3QgcmVmaXJlY3RfdG9fcG9zdCA9IChzbHVnKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2x1ZylcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9hcnRpY2xlcy9Qb3N0JyxcbiAgICAgIHF1ZXJ5OiB7IHBpZDogc2x1ZyB9LFxuXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTUnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzNTkyMi9wZXhlbHMtcGhvdG8tMjM1OTIyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gaGVpZ2h0PXs1MDB9IGFsdD1cImh0dHBzOi8vaW1hZ2VzLnBlNzUwJmRwcj0yXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjQzRCMDVEXCIgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hlYXRcIiB9fT57Y2Fyb3VzZWxfdGl0dGxlfTwvaDE+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hlYXRcIiB9fT5SZWFkeSB0byB0YWtlIGNoYXJnZSBvZiB5b3VyIGRpZXQ/IFRoZXNlIG51dHJpdGlvbi1mb2N1c2VkIGd1aWRlcywgdGlwcyBhbmQgcmVjaXBlcyB3aWxsIHNldCB5b3UgdXAgZm9yIHN1Y2Nlc3MuPC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleC13cmFwIG15LTUgJz5cbiAgICAgICAgPGgxPntnZXRDYXRlZ29yeX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG14LTQgbXktMyAnPlxuICAgICAgICAgIHtibG9nLnNsaWNlKDAsIDEyKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTMgbXktMyAnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBvbkNsaWNrPXsoKSA9PiByZWZpcmVjdF90b19wb3N0KGVsZW1lbnQuc2x1Zyl9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWNDYXJkRGlzcGxheVwiID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2VsZW1lbnQuaW1hZ2V9IHdpZHRoPXsyODV9IGhlaWdodD17MjIwfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5jYXRlZ29yeX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmJsb2d0aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJibG9nIiwiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJyb3V0ZXIiLCJnZXRDYXRlZ29yeSIsInNldENhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yeSIsImNhcm91c2VsX3RpdHRsZSIsIlNlcmNhcm91c2VsX3RpdHRsZSIsInJlZmlyZWN0X3RvX3Bvc3QiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYXRobmFtZSIsInBpZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMSIsInRvcCIsInBvc2l0aW9uIiwiY29sb3IiLCJoNiIsInNsaWNlIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiaHJlZiIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsImxvYWRpbmciLCJpbWFnZSIsImJsb2d0aXRsZSIsInAiLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/[category].js\n"));

/***/ })

});