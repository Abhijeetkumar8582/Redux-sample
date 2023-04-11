"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/category",{

/***/ "./pages/articles/category.js":
/*!************************************!*\
  !*** ./pages/articles/category.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Category(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Nutrition\") {\n            setCarousel_tittle(\"Pushing Your Limits\");\n            setCarousel_description(\"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\");\n            setColor(\"#04A123\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Fitness\") {\n            setCarousel_tittle(\"Eating Well for Life\");\n            setCarousel_description(\"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\");\n            setColor(\"#A27202\");\n            setCarousel_Image(\"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Health\") {\n            setCarousel_tittle(\"The Power of Self-Care\");\n            setCarousel_description(\"Living well involves making healthy choices for a fulfilling and balanced life\");\n            setColor(\"#043DA1\");\n            setCarousel_Image(\"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else {\n            setCarousel_tittle(\"Yoga for Stress Relief\");\n            setCarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\");\n            setColor(\"#4C0099\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (blog_slug)=>{\n        router.push({\n            pathname: \"/articles/post\",\n            query: {\n                blog_slug: blog_slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: carousel_Image,\n                            loading: \"lazy\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            width: 500,\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Featured\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: data.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>refirect_to_post(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: element.blogtitle\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"2RCSCq4Lakz4t+MMXWen3cT60FI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Category;\nHome.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Z0RBQU9ELEtBQUtjLFFBQVFNLEtBQUs7Z0RBQUVqQixPQUFPO2dEQUFLQyxRQUFRO2dEQUFLTCxXQUFVO2dEQUFlTSxLQUFLUyxRQUFRTyxTQUFTOzs7Ozs7MERBQ2xILDhEQUFDdkI7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDdUI7d0RBQUd2QixXQUFVO2tFQUFtQmUsUUFBUTdCLFFBQVE7Ozs7OztrRUFDakQsOERBQUNxQzt3REFBR3ZCLFdBQVU7a0VBQW1CZSxRQUFRTyxTQUFTOzs7Ozs7a0VBQ2xELDhEQUFDRTt3REFBRXhCLFdBQVU7a0VBQW1CZSxRQUFRVSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFQakJUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpEO0dBdEZTcEM7O1FBRVFELGtEQUFTQTs7O0tBRmpCQztBQXdGVDhDLEtBQUtDLHNCQUFzQixHQUFHLElBQUk7O0FBQ2xDLCtEQUFlL0MsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9jYXRlZ29yeS5qcz85YmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5mdW5jdGlvbiBDYXRlZ29yeSh7IGRhdGEgfSkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtnZXRDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KVxuICBjb25zdCBbY2Fyb3VzZWxfdGl0dGxlLCBzZXRDYXJvdXNlbF90aXR0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Nhcm91c2VsX2Rlc2NyaXB0aW9uLCBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZ2V0Q29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiIzA0QTEyM1wiKVxuICBjb25zdCBbY2Fyb3VzZWxfSW1hZ2UsIHNldENhcm91c2VsX0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpXG4gICAgaWYgKGNhdGVnb3J5ID09IFwiTnV0cml0aW9uXCIpIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIlB1c2hpbmcgWW91ciBMaW1pdHNcIilcbiAgICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiUmVndWxhciBleGVyY2lzZSBpbXByb3ZlcyBwaHlzaWNhbCBmaXRuZXNzLCBib29zdHMgbW9vZCwgYW5kIHJlZHVjZXMgdGhlIHJpc2sgb2YgY2hyb25pYyBkaXNlYXNlc1wiKVxuICAgICAgc2V0Q29sb3IoXCIjMDRBMTIzXCIpXG4gICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQ3NjE2NjMvcGV4ZWxzLXBob3RvLTQ3NjE2NjMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAgIH1cbiAgICBlbHNlIGlmIChjYXRlZ29yeSA9PSBcIkZpdG5lc3NcIikge1xuICAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiRWF0aW5nIFdlbGwgZm9yIExpZmVcIilcbiAgICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiTWFpbnRhaW5pbmcgYSBoZWFsdGh5IGxpZmVzdHlsZSBpcyBjcnVjaWFsIGZvciBvdmVyYWxsIHdlbGwtYmVpbmcgYW5kIGxvbmdldml0eVwiKVxuICAgICAgc2V0Q29sb3IoXCIjQTI3MjAyXCIpXG4gICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI4NzM1NC9wZXhlbHMtcGhvdG8tMjg3MzU0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIilcbiAgICB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gXCJIZWFsdGhcIikge1xuICAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiVGhlIFBvd2VyIG9mIFNlbGYtQ2FyZVwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJMaXZpbmcgd2VsbCBpbnZvbHZlcyBtYWtpbmcgaGVhbHRoeSBjaG9pY2VzIGZvciBhIGZ1bGZpbGxpbmcgYW5kIGJhbGFuY2VkIGxpZmVcIilcbiAgICAgIHNldENvbG9yKFwiIzA0M0RBMVwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xOTE2ODIxL3BleGVscy1waG90by0xOTE2ODIxLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJZb2dhIGZvciBTdHJlc3MgUmVsaWVmXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIlJlZ3VsYXIgcHJhY3RpY2Ugb2YgeW9nYSBjYW4gaGVscCBpbXByb3ZlIGZsZXhpYmlsaXR5LCBiYWxhbmNlLCBhbmQgc3RyZW5ndGhcIilcbiAgICAgIHNldENvbG9yKFwiIzRDMDA5OVwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDU2NTM1L3BleGVscy1waG90by00MDU2NTM1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIilcbiAgICB9XG5cblxuICB9LCBbcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XSlcblxuICBjb25zdCByZWZpcmVjdF90b19wb3N0ID0gKGJsb2dfc2x1ZykgPT4ge1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL3Bvc3QnLFxuICAgICAgcXVlcnk6IHsgYmxvZ19zbHVnOiBibG9nX3NsdWcgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS01Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgPEltYWdlIHNyYz17Y2Fyb3VzZWxfSW1hZ2V9IGxvYWRpbmc9XCJsYXp5XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSBhbHQ9XCJodHRwczovL2ltYWdlcy5wZTc1MCZkcHI9MlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGNhcm91c2VsX3RleHRfYm94JyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX3RpdHRsZX08L2gxPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzUlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX2Rlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXgtd3JhcCBteS01ICc+XG4gICAgICAgIDxoMT5GZWF0dXJlZDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbXgtNCBteS0zICc+XG4gICAgICAgICAge2RhdGEuc2xpY2UoMCwgMTIpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMyBteS0zICcga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnIG9uQ2xpY2s9eygpID0+IHJlZmlyZWN0X3RvX3Bvc3QoZWxlbWVudC5zbHVnKX0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pY0NhcmREaXNwbGF5XCIgPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGxvYWRpbmc9J2xhenknIHNyYz17ZWxlbWVudC5pbWFnZX0gd2lkdGg9ezI4NX0gaGVpZ2h0PXsyMjB9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD17ZWxlbWVudC5ibG9ndGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmNhdGVnb3J5fTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuYmxvZ3RpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbkhvbWUucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1BcGktS2V5XCIsIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTMuMjMzLjcyLjIxNTo0MDAxL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIHRpbWVvdXQ6IDAsXG5cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJkYXRhIiwicm91dGVyIiwiZ2V0Q2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInF1ZXJ5IiwiY2F0ZWdvcnkiLCJjYXJvdXNlbF90aXR0bGUiLCJzZXRDYXJvdXNlbF90aXR0bGUiLCJjYXJvdXNlbF9kZXNjcmlwdGlvbiIsInNldENhcm91c2VsX2Rlc2NyaXB0aW9uIiwiZ2V0Q29sb3IiLCJzZXRDb2xvciIsImNhcm91c2VsX0ltYWdlIiwic2V0Q2Fyb3VzZWxfSW1hZ2UiLCJyZWZpcmVjdF90b19wb3N0IiwiYmxvZ19zbHVnIiwicHVzaCIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwibG9hZGluZyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMSIsInRvcCIsInBvc2l0aW9uIiwiY29sb3IiLCJoNSIsInNsaWNlIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiaHJlZiIsIm9uQ2xpY2siLCJzbHVnIiwidGV4dERlY29yYXRpb24iLCJpbWFnZSIsImJsb2d0aXRsZSIsImg2IiwicCIsImF1dGhvciIsIkhvbWUiLCJyZXF1aXJlTmF2YmFyQW5kRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles/category.js\n"));

/***/ })

});