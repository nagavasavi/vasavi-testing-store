"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/react-wrapper.js":
/*!****************************************!*\
  !*** ./js/components/react-wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  console.log("pppppp");
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  var singlePropsEl = document.querySelector(propsEl);
  var props = {};
  if (singlePropsEl) {
    props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse(singlePropsEl === null || singlePropsEl === void 0 ? void 0 : singlePropsEl.innerHTML) || {};
  }
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    if (appTarget && !initialized) {
      if (!singlePropsEl) {
        if (propsEl) {
          var _appTarget$querySelec;
          props = {};
          props = json_6__WEBPACK_IMPORTED_MODULE_2___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
        }
      }
      appTarget.dataset.initialized = true;
      var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appTarget);
      root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
        shopifyData: props
      }));
      return root;
    }
  });
});

/***/ }),

/***/ "./js/components/react/coll-data.js":
/*!******************************************!*\
  !*** ./js/components/react/coll-data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCollectionData: () => (/* binding */ getCollectionData)
/* harmony export */ });
/* unused harmony export getCollectoionId */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var getCollectionData = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handle) {
    var collectionHandle = window.shopifyVariables.collectionHandle;
    var storeFrontKey = '1675ee19b18e9a949a475ec4823c6de6';
    var url = "/api/2024-01/graphql.json";
    var shopifyHeader = new Headers();
    shopifyHeader.append("Content-Type", "application/json");
    shopifyHeader.append("X-Shopify-Storefront-Access-Token", storeFrontKey);
    var graphqlquery = {
      query: "query AllProducts @inContext(country: ".concat(window.Shopify.country, ") {\n                collection(handle: \"").concat(collectionHandle, "\") {\n                  handle\n                  title\n                  \n                    metafields(identifiers: [{namespace: \"custom\", key: \"custom_collection_carousel\"}]) {\n                      value\n                    }\n                  products(first: 250) {\n                    edges {\n                      node {\n                        handle\n                        productType\n                        tags\n                        vendor\n                        id\n                        title\n                        onlineStoreUrl\n                        featuredImage{\n                          src\n                          id\n                          width\n                          height\n                          altText\n                        }\n                        variants(first: 100) {\n                          nodes {\n                            metafields(identifiers: [{namespace: \"custom\", key: \"show_in_bundle\"}]) {\n                              value\n                            }\n                            availableForSale\n                            quantityAvailable\n                            price {\n                              amount\n                              currencyCode\n                            }\n                            selectedOptions {\n                              name\n                              value \n                            }\n                          }\n                        }\n                      }\n                    }\n                    pageInfo {\n                      endCursor\n                      hasNextPage\n                      hasPreviousPage\n                      startCursor\n                    }\n                  }\n                }\n            }"),
      variables: {
        "query": "".concat(handle)
      }
    };
    var requestOptions = {
      method: 'POST',
      headers: shopifyHeader,
      body: JSON.stringify(graphqlquery)
    };
    var data = yield fetch(url, requestOptions);
    var searchData = yield data.json();
    var collectionsortdata = searchData.data.collection;
    console.log('collectionsortdata', collectionsortdata);
    return collectionsortdata;
  });
  return function getCollectionData(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getCollectoionId = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {});
  return function getCollectoionId(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/components/react/collection-selector.js":
/*!****************************************************!*\
  !*** ./js/components/react/collection-selector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coll_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coll-data */ "./js/components/react/coll-data.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var [fetchedProduct, setFetchedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var fetchData = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setFetchedProduct(yield (0,_coll_data__WEBPACK_IMPORTED_MODULE_2__.getCollectionData)());
    });
    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-container__opt-label"
  }, "Featured products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collection-container__coll-title"
  }, fetchedProduct && fetchedProduct.title));
});

/***/ }),

/***/ "./js/components/react/sample.js":
/*!***************************************!*\
  !*** ./js/components/react/sample.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var sample = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Hiiii....");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sample);

/***/ })

}]);