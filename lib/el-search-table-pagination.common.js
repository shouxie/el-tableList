/*!
 * el-search-table-pagination
 * Copyright(c) 2017 - 2019 zollero
 * MIT Licensed
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__props__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_src_main_vue__ = __webpack_require__(1);
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
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ElSearchTablePagination',
  components: {
    searchForm: __WEBPACK_IMPORTED_MODULE_2__search_src_main_vue__["default"]
  },
  props: __WEBPACK_IMPORTED_MODULE_1__props___default.a,
  data() {
    const _this = this
    return {
      Vue: __WEBPACK_IMPORTED_MODULE_0_vue___default.a,
      pagination: {
        pageIndex: 1,
        pageSize: (() => {
          const { pageSizes } = _this
          if (pageSizes.length > 0) {
            return pageSizes[0]
          }
          return 20
        })()
      },
      total: 0,
      loading: false,
      tableData: [],
      cacheLocalData: []
    }
  },
  computed: {
    newSlotScope() {
      return Number(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.version.replace(/\./g, '')) >= 250
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pagination.pageSize = size
      this.dataChangeHandler()
    },
    handleCurrentChange(pageIndex) {
      this.pagination.pageIndex = pageIndex
      this.dataChangeHandler()
    },
    searchHandler(resetPageIndex = true) {
      if (resetPageIndex) {
        this.pagination.pageIndex = 1
      }
      this.dataChangeHandler(arguments[0])
    },
    dataChangeHandler() {
      const { type } = this
      if (type === 'local') {
        this.dataFilterHandler(arguments[0])
      } else if (type === 'remote') {
        this.fetchHandler(arguments[0])
      }
    },
    dataFilter(data) {
      const { pageIndex, pageSize } = this.pagination
      return data.filter((v, i) => {
        return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize
      })
    },
    dataFilterHandler(formParams) {
      const { cacheLocalData, params, pagination } = this
      const { pageIndex, pageSize } = pagination
      const mergeParams = Object.assign(params, formParams)
      const validParamKeys = Object.keys(mergeParams).filter(v => {
        return mergeParams[v] !== undefined && mergeParams[v] !== ''
      })
      const searchForm = this.$refs['searchForm']
      let paramFuzzy
      if (searchForm) {
        paramFuzzy = searchForm.getParamFuzzy()
      }

      if (validParamKeys.length > 0) {
        const validData = cacheLocalData.filter(v => {
          let valids = []
          validParamKeys.forEach(vv => {
            if (typeof v[vv] === 'number') {
              valids.push(
                paramFuzzy && paramFuzzy[vv] ? (String(v[vv]).indexOf(String(mergeParams[vv])) !== -1)
                  : (String(v[vv]) === String(mergeParams[vv]))
              )
            } else {
              valids.push(
                paramFuzzy && paramFuzzy[vv] ? (v[vv].indexOf(mergeParams[vv]) !== -1) : (v[vv] === mergeParams[vv])
              )
            }
          })
          return valids.every(vvv => {
            return vvv
          })
        })

        this.tableData = this.dataFilter(validData)
        this.total = validData.length
      } else {
        this.total = cacheLocalData.length
        this.tableData = this.dataFilter(cacheLocalData)
      }
    },
    fetchHandler(formParams = {}) {
      this.loading = true
      let { fetch, method, url, $axios, headers,
            listField, pageIndexKey, pageSizeKey,
            totalField, params, showPagination,
            pagination } = this

      params = JSON.parse(JSON.stringify(Object.assign(params, formParams)))

      if (showPagination) {
        params = Object.assign(params, {
          [pageIndexKey]: pagination.pageIndex,
          [pageSizeKey]: pagination.pageSize
        })
      }

      let requestObject = null

      if (fetch) {
        requestObject = fetch(params)
      } else {
        $axios.interceptors.request.use(
          config => {
            Object.keys(headers).forEach(v => {
              config.headers[v] = headers[v]
            })
            return config;
          },
          error => {
            return Promise.reject(error);
          }
        )

        method = method.toLowerCase();

        if (method === 'get') {
          requestObject = $axios[method](url, { params })
        } else {
          requestObject = $axios[method](url, params)
        }
      }

      requestObject.then(response => {
        let result = response

        if (response && !(response instanceof Array)) {
          if (listField && listField.indexOf('.') !== -1) {
            listField.split('.').forEach(vv => {
              result = result[vv]
            })
          } else {
            result = response[listField]
          }
        }

        if (!result || !(result instanceof Array)) {
          throw new Error(`The result of key:${listField} is not Array.`)
          this.loading = false
          return false
        }

        if (this.dataHandler) {
          this.tableData = result.map(this.dataHandler)
        } else {
          this.tableData = result
        }

        let totalValue = response
        if (Object.prototype.toString.call(response) === '[object Array]') {
          totalValue = response.length
        } else if (typeof response === 'object') {
          if (totalField && totalField.indexOf('.') !== -1) {
            totalField.split('.').forEach(vv => {
              totalValue = totalValue[vv]
            })
          } else {
            totalValue = response[totalField]
          }
        } else {
          totalValue = 0
        }
        this.total = totalValue

        this.loading = false
      }).catch(error => {
        // console.error('Get remote data failed. ', error)
        this.loading = false
      })
    },
    emitEventHandler(event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    loadLocalData(data) {
      const { autoLoad } = this
      if (!data) {
        throw new Error(`When the type is 'local', you must set attribute 'data' and 'data' must be a array.`)
        this.showPagination = false
        return false
      }
      const cacheData = JSON.parse(JSON.stringify(data))
      this.cacheLocalData = cacheData
      if (autoLoad) {
        this.tableData = this.dataFilter(cacheData)
        this.total = cacheData.length
      }
    }
  },
  mounted() {
    // event: expand changed to `expand-change` in Element v2.x
    this.$refs['table'].$on('expand', (row, expanded) => this.emitEventHandler('expand', row, expanded))
    const { type, autoLoad, data, formOptions, params } = this
    if (type === 'remote' && autoLoad) {
      if (formOptions) {
        this.$refs['searchForm'].getParams((error, formParams) => {
          if (!error) {
            this.fetchHandler(Object.assign(formParams, params))
          }
        })
      } else {
        this.fetchHandler(params)
      }
    } else if (type === 'local') {
      this.loadLocalData(data)
    }
  },
  watch: {
    data: function(value) {
      this.loadLocalData(value)
    }
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_2de57355___ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_2de57355____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_2de57355___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(3);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_2de57355___["render"],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_2de57355___["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (132:6)\nYou may need an appropriate loader to handle this file type.\n|       datePrefix,\n|       selectOptionPrefix,\n|       ...dataObj,\n|       format,\n|       fuzzyOps");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(13);

var _index4 = _interopRequireDefault(_index3);

var _package = __webpack_require__(14);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_index2.default, _index4.default];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  components.map(function (component) {
    Vue.component(component.name, component);
  });
  if (!opts.axios) {
    opts.axios = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"axios\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    opts.axios.interceptors.response.use(function (response) {
      return JSON.parse(JSON.stringify(response.data));
    }, function (error) {
      return Promise.reject(error.response);
    });
  }
  Vue.prototype.$axios = opts.axios;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

exports.default = {
  version: _package2.default.version,
  install: install,
  SearchTablePagination: _index2.default,
  SearchForm: _index4.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(7);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_7a05408c___ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_7a05408c____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_7a05408c___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(3);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_7a05408c___["render"],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_7a05408c___["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:0)\nYou may need an appropriate loader to handle this file type.\n| \n| <div>\n| \n|   <search-form");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _props = __webpack_require__(11);

var props = {
  // Element UI Table attributes
  height: [String, Number],
  maxHeight: [String, Number],
  size: String,
  stripe: Boolean,
  border: Boolean,
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  rowClassName: [String, Function],
  rowStyle: [String, Function],
  rowKey: [String, Function],
  emptyText: String,
  defaultExpandAll: Boolean,
  expandRowKeys: Array,
  defaultSort: Object,
  tooltipEffect: String,
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  // custom attributes
  tableStyle: {
    type: String,
    default: "width:100%;margin-top:20px;"
  },
  fetch: {
    type: Function
  },
  url: {
    type: String
  },
  method: {
    type: String,
    default: 'get',
    validator: function validator(value) {
      var methodTypes = ['get', 'post', 'put', 'delete'];
      return methodTypes.indexOf(value.toLowerCase()) !== -1;
    }
  },
  headers: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  listField: {
    type: String,
    default: 'data.list'
  },
  totalField: {
    type: String,
    default: 'data.total'
  },
  params: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  formOptions: {
    type: Object
  },
  autoLoad: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'remote',
    validator: function validator(value) {
      var types = ['remote', 'local'];
      var validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error('Invalid type of \'' + value + '\', please set one type of \'remote\' or \'local\'.');
      }
      return validType;
    }
  },
  data: {
    type: Array
  },
  dataHandler: {
    type: Function
  },
  columns: {
    type: Array,
    required: true
    // // Element UI table-column attribute
    // columnKey: String,
    // label: {
    //   type: String,
    //   required: true
    // },
    // prop: {
    //   type: String,
    //   required: true
    // },
    // width: Number,
    // minWidth: Number,
    // fixed: [Boolean, String],
    // renderHeader: Function,
    // sortable: [Boolean, String],
    // sortMethod: Function,
    // resizable: {
    //   type: Boolean,
    //   default: true
    // },
    // formatter: Function,
    // showOverflowTooltip: Boolean,
    // align: {
    //   type: String,
    //   default: 'left'
    // },
    // headerAlign: String,
    // className: {
    //   type: String,
    //   default: ''
    // },
    // labelClassName: {
    //   type: String,
    //   default: ''
    // },
    // selectable: Function,
    // reserveSelection: Boolean,
    // filters: Array,
    // filterPlacement: String,
    // filterMultiple: {
    //   type: Boolean,
    //   default: true
    // },
    // filterMethod: Function,
    // filteredValue: Array,
    // // custom table-column attribute
    // filter: {
    //   type: String
    // },
    // render: {
    //   type: Function
    // },
    // slotName: {
    //   type: String
    // }
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  pageSizes: {
    type: Array,
    default: function _default() {
      return [20, 50, 100];
    }
  },
  paginationLayout: {
    type: String,
    default: 'total, prev, pager, next, jumper, sizes'
  },
  pageIndexKey: {
    type: String,
    default: 'pageIndex'
  },
  pageSizeKey: {
    type: String,
    default: 'pageSize'
  }

  // Object.keys(formProps).forEach(v => {
  //   props.formOptions[v] = formProps[v]
  // })

};exports.default = props;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var formProps = exports.formProps = {
  size: {
    type: String,
    default: '',
    validator: sizeValidator
  },
  showResetBtn: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  fuzzy: {
    type: Boolean,
    default: false
  },
  labelWidth: Number,
  itemWidth: Number,
  submitHandler: Function,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: '查询'
  },
  resetBtnText: {
    type: String,
    default: '重置'
  },
  resetBtnCallback: Function,
  forms: {
    type: Array,
    required: true
    // label: String,
    // prop: {
    //   type: [String, Array],
    //   required: true
    // },
    // itemType: {
    //   type: String,
    //   default: 'input',
    //   validator: itemTypeValidator
    // },
    // size: {
    //   type: String,
    //   default: '',
    //   validator: sizeValidator
    // },
    // placeholder: {
    //   type: String,
    //   default: ''
    // },
    // editable: {
    //   type: Boolean,
    //   default: true
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // readonly: {
    //   type: Boolean,
    //   default: false
    // },
    // fuzzy: {
    //   type: Boolean,
    //   default: false
    // },
    // options: Array,
    // selectFetch: Function,
    // selectResultField: String,
    // selectResultHandler: Function,
    // selectUrl: String,
    // selectMethod: String,
    // valueKey: String,
    // labelKey: String,
    // format: Function,
    // selectParams: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // },
    // rules: Array,
    // pickerOptions: Object
  }
};

function sizeValidator(value) {
  var methodTypes = ['large', 'small', 'mini'];
  var valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === '';
  if (!valid) {
    throw new Error('Size must be one of [\'large\', \'small\', \'mini\']');
  }
  return valid;
}

// function itemTypeValidator(value) {
//   const methodTypes = ['input', 'select', 'date', 'daterange'];
//   const valid = methodTypes.indexOf(value.toLowerCase()) !== -1
//   if (!valid) {
//     throw new Error(`ItemType must be one of ['input', 'select', 'date', 'daterange']`)
//   }
//   return valid
// }

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:0)\nYou may need an appropriate loader to handle this file type.\n| \n| <el-form :model=\"params\" :inline=\"inline\" ref=\"form\" @submit.native.prevent=\"searchHandler()\"\n|   :label-width=\"labelWidth ? (labelWidth + 'px') : ''\">\n|   <el-form-item v-for=\"(form, index) in forms\" :key=\"index\"");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"name":"dlj-table","version":"0.0.1","description":"a component with Element UI for dalingjia's tables","main":"./lib/index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1","dev":"cooking watch","build":"cooking build -c build/cooking.conf.js,build/cooking.common.js,build/cooking.index.js"},"author":"","license":"ISC","peerDependencies":{"@dal/element-ui":"^2.7.2","vue":"^2.5.2"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-plugin-module-resolver":"^3.0.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-3":"^6.24.1","cooking":"^1.5.4","cooking-vue2":"^0.3.3","extract-text-webpack-plugin":"^3.0.2","html-webpack-plugin":"^2.30.1","vue-template-compiler":"^2.5.9","webpack":"^3.8.1","webpack-node-externals":"^1.6.0"}}

/***/ })
/******/ ]);