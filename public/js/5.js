(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_function_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-function-api */ "./node_modules/vue-function-api/dist/vue-function-api.module.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup(props) {
    var posts = Object(vue_function_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return this.$page.posts;
    });

    var upvote = function upvote(post) {
      var _this = this;

      this.$inertia.patch(route("post.upvote").url(), post.id).then(function (res) {
        return _this.$inertia.reload();
      });
    };

    var downvote = function downvote(post) {
      var _this2 = this;

      this.$inertia.patch(route("post.downvote").url(), post.id).then(function (res) {
        return _this2.$inertia.reload();
      });
    };

    return {
      posts: posts,
      upvote: upvote
    };
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Layout", [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("h2", { staticClass: "text-center" }, [_vm._v("All Posts")]),
        _vm._v(" "),
        _vm.posts.length
          ? _vm._l(_vm.posts, function(post) {
              return _c("div", { key: post.id }, [
                _c("div", { staticClass: "card mb-3" }, [
                  _c("div", { staticClass: "card-header" }, [
                    _vm._v(
                      "\n                        " + _vm._s(post.title) + " - "
                    ),
                    _c("a", { attrs: { href: post.url, target: "_blank" } }, [
                      _vm._v(_vm._s(post.url))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(post.description) +
                        "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer" }, [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("span", [
                            _vm._v(
                              "Upvote(s): " +
                                _vm._s(post.up_votes > 0 ? post.up_votes : 0)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              staticClass: "d-inline-block",
                              attrs: { method: "POST" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.upvote(post)
                                }
                              }
                            },
                            [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  id: "",
                                  "aria-label": "Upvote Post"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("span", [
                            _vm._v(
                              "Down vote(s): " +
                                _vm._s(
                                  post.down_votes > 0 ? post.down_votes : 0
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              staticClass: "d-inline-block",
                              attrs: { method: "POST" }
                            },
                            [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  id: "",
                                  "aria-label": "Downvote Post"
                                }
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            })
          : [
              _c("h3", { staticClass: "text-center" }, [
                _vm._v("No Posts Currently")
              ])
            ]
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2e913d5d& */ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Posts/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2e913d5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2e913d5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);