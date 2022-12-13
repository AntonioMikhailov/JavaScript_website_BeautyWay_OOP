"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(() => {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/js/modules/marginOffset.js":
    /*!****************************************!*\
      !*** ./src/js/modules/marginOffset.js ***!
      \****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OffsetMargin)\n/* harmony export */ });\n   //компенсация сдвига вправо \r\n   class OffsetMargin {\r\n    constructor() {\r\n      this.marginOffset = window.innerWidth - document.body.clientWidth;\r\n    }\r\n    //два метода - вызывать отдельно\r\n  addOffsetMargin(dataButtonS7 = true) {\r\n  if (dataButtonS7 == false) {\r\n    // console.log(dataButtonS7);\r\n    document.body.style.marginRight = 0 + 'px';\r\n  } else {\r\n    document.body.style.marginRight = this.marginOffset + 'px';\r\n    //для якоря\r\n    document.querySelector('.arrow-anchor').style.display = 'none';\r\n    document.body.classList.add('lock');\r\n  }\r\n}\r\n    removeOffsetMargin() {\r\n         setTimeout(() => {\r\n           document.body.style.marginRight = 0 + 'px';\r\n           document.body.classList.remove('lock');\r\n           //для якоря\r\n           document.querySelector('.arrow-anchor').style.display = '';\r\n         }, 300);\r\n       }\r\n\r\n   }\r\n \n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/marginOffset.js?");
      /***/
    },

    /***/
    "./src/js/modules/navScroll-this.js":
    /*!******************************************!*\
      !*** ./src/js/modules/navScroll-this.js ***!
      \******************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavScroll)\n/* harmony export */ });\nclass NavScroll {\r\n\r\n  constructor(anchor) {\r\n    this.link = document.querySelectorAll('a');\r\n    this.anchor = document.querySelector(anchor);\r\n    this.headerRow = document.querySelector('.header-row');\r\n}\r\n\r\n\r\n  init(durationTime) { \r\n    let scrollPos = 0;\r\n    window.addEventListener('scroll', () => {\r\n      let i = window.pageYOffset;\r\n      let e = window.innerHeight;\r\n      let documentScrollHeight = document.documentElement.scrollHeight;\r\n      if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i || i + e == documentScrollHeight) {\r\n        this.anchor.classList.add('anchor-active');\r\n      } else {\r\n        this.anchor.classList.remove('anchor-active');\r\n\r\n      }\r\n      scrollPos = (document.body.getBoundingClientRect()).top;\r\n    });\r\n\r\n    function smoothScroll(targetSelector) {\r\n      let whereTo = document.querySelector(targetSelector);\r\n      let startPosition = window.pageYOffset;\r\n      let targetPosition = whereTo.offsetTop - 100;\r\n      let distance = targetPosition - startPosition;\r\n      let duration = durationTime; // 1000 по умолчанию\r\n      let start = null;\r\n      window.requestAnimationFrame(step);\r\n\r\n      function step(timestamp) {\r\n        if (!start) start = timestamp;\r\n        let progress = timestamp - start;\r\n        window.scrollTo(0, easing(progress, startPosition, distance, duration));\r\n        if (progress < duration) {\r\n          window.requestAnimationFrame(step);\r\n        }\r\n      }\r\n    }\r\n\r\n    function easing(t, b, c, d) {\r\n      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;\r\n    }\r\n\r\n\r\n    this.link.forEach(item => {\r\n      item.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        // console.log(item);\r\n        let targetPosition = item.getAttribute(`${'href'}`);\r\n\r\n        if (item.hasAttribute('data-link')) {\r\n          if (!item.hasAttribute('data-noTitleChange')) {\r\n            document.querySelector('title').textContent = `BeautyWay - ${item.textContent}`;\r\n          } else {\r\n            document.querySelector('title').textContent = `BeautyWay – салон-парикмахерская`;\r\n          }\r\n\r\n          smoothScroll(targetPosition);\r\n        }\r\n        if (item.hasAttribute('data-delay')) {\r\n          setTimeout(() => {\r\n            smoothScroll(targetPosition);\r\n          }, 0);\r\n        }\r\n      });\r\n    });\r\n\r\n\r\n\r\n  }\r\n} //\r\n\r\n\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/navScroll-this.js?");
      /***/
    },

    /***/
    "./src/js/modules/s0_header.js":
    /*!*************************************!*\
      !*** ./src/js/modules/s0_header.js ***!
      \*************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marginOffset.js */ \"./src/js/modules/marginOffset.js\");\n\r\nclass Header extends _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(mobileWrapper, header, button, mobileRow) {\r\n    super();\r\n    this.mobileWrapper = document.querySelector(mobileWrapper);\r\n    this.header = document.querySelector(header);\r\n    this.BurgerButton = document.querySelector(button);\r\n    this.mobileRow = document.querySelector(mobileRow);\r\n    this.mobileItem = document.querySelectorAll('.mobile-item ');\r\n  }\r\n  mobileOffset() {\r\n    this.mobileTopOffset = this.header.getBoundingClientRect().height;\r\n    this.mobileWrapper.style.marginTop = this.mobileTopOffset + 'px';\r\n  }\r\n  toggleMobileMenu() {\r\n    this.BurgerButton.classList.toggle('burger-active');\r\n    this.mobileRow.classList.toggle('mobile-show');\r\n    this.mobileWrapper.classList.toggle('mobile-background');\r\n    if (this.BurgerButton.classList.contains('burger-active')) {\r\n      new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().addOffsetMargin();\r\n    } else {\r\n      new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().removeOffsetMargin();\r\n    }\r\n  }\r\n  init() {\r\n    this.mobileOffset();\r\n    this.BurgerButton.addEventListener('click', () => {\r\n      this.toggleMobileMenu();\r\n    });\r\n    window.addEventListener('resize', () => {\r\n      this.mobileOffset();\r\n    });\r\n    this.mobileRow.addEventListener('click', (e) => {\r\n      if (e.target == this.mobileRow) {\r\n        this.toggleMobileMenu();\r\n      }\r\n    });\r\n    this.mobileItem.forEach(item => {\r\n      item.addEventListener('click', () => {\r\n        setTimeout(() => {\r\n          this.toggleMobileMenu();\r\n        }, 1000);\r\n      });\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s0_header.js?");
      /***/
    },

    /***/
    "./src/js/modules/s1_sec_modal.js":
    /*!****************************************!*\
      !*** ./src/js/modules/s1_sec_modal.js ***!
      \****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marginOffset.js */ \"./src/js/modules/marginOffset.js\");\n \r\n\r\nclass Modal {\r\n  constructor(modalWrapper, showForm, modalCancelButton, modalButton, modalTextarea, modalInput) {\r\n    this.modalWrapper = document.querySelector(modalWrapper);\r\n    this.showForm = document.querySelectorAll(showForm);\r\n    this.modalCancelButton = document.querySelector(modalCancelButton);\r\n    this.modalButton = document.querySelector(modalButton);\r\n    this.modalTextarea = document.querySelector(modalTextarea);\r\n    this.modalInput = document.querySelectorAll(modalInput);\r\n  }\r\n  init() {\r\n    this.showForm.forEach(item => {\r\n      item.addEventListener('click', () => {\r\n        this.modalWrapper.classList.add('showModalWindow');\r\n        if (item.hasAttribute('data-buttons7')) {\r\n          new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().addOffsetMargin(false);\r\n        } else {\r\n          new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().addOffsetMargin();\r\n        }\r\n      });\r\n    });\r\n    [this.modalCancelButton, this.modalButton, this.modalWrapper].forEach(item => {\r\n      item.addEventListener('click', (e) => {\r\n        new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().removeOffsetMargin();\r\n        if (e.target == this.modalWrapper || item == this.modalButton || item == this.modalCancelButton) {\r\n          this.modalWrapper.classList.remove('showModalWindow');\r\n        }\r\n        if (item == this.modalButton) {\r\n          this.modalInput.forEach(item => {\r\n            item.value = '';\r\n          });\r\n          this.modalTextarea.value = '';\r\n        }\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s1_sec_modal.js?");
      /***/
    },

    /***/
    "./src/js/modules/s4_portfolio.js":
    /*!****************************************!*\
      !*** ./src/js/modules/s4_portfolio.js ***!
      \****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Portfolio)\n/* harmony export */ });\n/* harmony import */ var _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marginOffset.js */ \"./src/js/modules/marginOffset.js\");\n\r\nclass Portfolio {\r\n  constructor() {\r\n    this.s4Item = document.querySelectorAll('.s4-item ');\r\n    this.s4GalleryItem = document.querySelectorAll('.s4-gallery__item');\r\n    this.s4Gallery = document.querySelector('.s4-gallery');\r\n    this.s4ButtonPrev = document.querySelector('.s4-button__prev ');\r\n    this.s4ButtonCancel = document.querySelector('.s4-button__cancel');\r\n    this.s4ButtonNext = document.querySelector('.s4-button__next');\r\n  }\r\n  init() {\r\n    let SlideIndex = 1;\r\n    this.s4Item.forEach((item, i) => {\r\n      item.addEventListener('click', () => {\r\n        this.s4Gallery.classList.add('s4-gallery__show');\r\n        this.s4GalleryItem[i].classList.add('s4-show__galleryImage');\r\n        SlideIndex = i + 1;\r\n        new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().addOffsetMargin();\r\n      });\r\n    });\r\n\r\n    function plusSlides(n) {\r\n      showSlides(SlideIndex += n);\r\n    }\r\n    let showSlides = (n) => {\r\n      if (n > this.s4GalleryItem.length) {\r\n        SlideIndex = 1;\r\n      }\r\n      if (n < 1) {\r\n        SlideIndex = this.s4GalleryItem.length;\r\n      }\r\n      this.s4GalleryItem.forEach(item => {\r\n        item.classList.remove('s4-show__galleryImage');\r\n        this.s4GalleryItem[SlideIndex - 1].classList.add('s4-show__galleryImage');\r\n      });\r\n    }\r\n    this.s4ButtonNext.addEventListener('click', () => {\r\n      plusSlides(1);\r\n    });\r\n    this.s4ButtonPrev.addEventListener('click', () => {\r\n      plusSlides(-1);\r\n    });\r\n    [this.s4Gallery, this.s4ButtonCancel].forEach(item => {\r\n      item.addEventListener('click', (e) => {\r\n        if (e.target == this.s4Gallery || item == this.s4ButtonCancel) {\r\n          this.s4Gallery.classList.remove('s4-gallery__show');\r\n          this.s4GalleryItem.forEach(item => {\r\n            item.classList.remove('s4-show__galleryImage');\r\n            setTimeout(() => {\r\n              new _marginOffset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().removeOffsetMargin(); \r\n            }, 200);\r\n          });\r\n        }\r\n      });\r\n    });\r\n  } //\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s4_portfolio.js?");
      /***/
    },

    /***/
    "./src/js/modules/s5_team_accord.js":
    /*!******************************************!*\
      !*** ./src/js/modules/s5_team_accord.js ***!
      \******************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(accordTitle, accordImage) {\r\n    this.s5_accordTitle = document.querySelectorAll(accordTitle);\r\n    this.s5_rightImage = document.querySelectorAll(accordImage);\r\n  }\r\n  init() {\r\n    this.s5_accordTitle.forEach((item, i) => {\r\n      this.s5_accordTitle[0].nextElementSibling.style.maxHeight = this.s5_accordTitle[0].nextElementSibling.scrollHeight + 'px';\r\n      this.s5_accordTitle[0].classList.add('accord-active');\r\n      this.s5_rightImage[0].classList.add('accord-active');\r\n      \r\n      item.addEventListener('click', () => { \r\n        this.s5_accordTitle.forEach(item => {\r\n          item.nextElementSibling.style.maxHeight = 0 + 'px';\r\n          item.classList.remove('accord-active');\r\n        });\r\n        item.classList.toggle('accord-active');\r\n        if (item.classList.contains('accord-active')) {\r\n          item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';\r\n        } else {\r\n          item.nextElementSibling.style.maxHeight = '0px';\r\n        }\r\n        this.s5_rightImage.forEach(item => {\r\n          item.classList.remove('accord-active');\r\n        });\r\n        this.s5_rightImage[i].classList.add('accord-active');\r\n      });\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s5_team_accord.js?");
      /***/
    },

    /***/
    "./src/js/modules/s8_tabs-price.js":
    /*!*****************************************!*\
      !*** ./src/js/modules/s8_tabs-price.js ***!
      \*****************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tabs)\n/* harmony export */ });\nclass Tabs {\r\n  constructor(tabSelector, tabPanel, activeClass) {\r\n  \r\n    this.triggerSelector = document.querySelectorAll(tabSelector);\r\n    this.contentSelector = document.querySelectorAll(tabPanel);\r\n    this.activeClass = activeClass;\r\n  }\r\n  init() {\r\n    let ShowTab = (i = 0) => {\r\n      this.contentSelector.forEach(item => {\r\n        item.classList.remove(this.activeClass);\r\n      });\r\n      this.contentSelector[i].classList.add(this.activeClass);\r\n      this.triggerSelector.forEach(item => {\r\n        item.classList.remove(this.activeClass);\r\n      });\r\n      this.triggerSelector[i].classList.add(this.activeClass);\r\n    };\r\n    ShowTab();\r\n    this.triggerSelector.forEach((item, i) => {\r\n      item.addEventListener('click', () => {\r\n        ShowTab(i);\r\n      });\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s8_tabs-price.js?");
      /***/
    },

    /***/
    "./src/js/modules/s9_comments.js":
    /*!***************************************!*\
      !*** ./src/js/modules/s9_comments.js ***!
      \***************************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comments)\n/* harmony export */ });\nclass Comments {\r\n  constructor() {\r\n    this.s9RequestRow = document.querySelector('.s9-request__row');\r\n    this.s9ButtonItem = document.querySelectorAll('.s9-button__item');\r\n  }\r\n  init() {\r\n    let rowWidth = getComputedStyle(this.s9RequestRow).width;\r\n    let offset = (+rowWidth.replace(/\\D/g, ''));\r\n    this.s9ButtonItem.forEach((item, i) => {\r\n      let slideTo = i;\r\n      item.addEventListener('click', () => {\r\n        this.s9RequestRow.style.transform = `translate(-${offset * slideTo}px)`;\r\n        this.s9ButtonItem.forEach(item => {\r\n          item.classList.remove('s9-active');\r\n          this.s9ButtonItem[i].classList.add('s9-active');\r\n        });\r\n      });\r\n    });\r\n  }\r\n\r\n\r\n} //\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/modules/s9_comments.js?");
      /***/
    },

    /***/
    "./src/js/script.js":
    /*!**************************!*\
      !*** ./src/js/script.js ***!
      \**************************/

    /***/
    (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_s0_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/s0_header.js */ \"./src/js/modules/s0_header.js\");\n/* harmony import */ var _modules_s1_sec_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/s1_sec_modal.js */ \"./src/js/modules/s1_sec_modal.js\");\n/* harmony import */ var _modules_navScroll_this_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navScroll-this.js */ \"./src/js/modules/navScroll-this.js\");\n/* harmony import */ var _modules_s4_portfolio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/s4_portfolio.js */ \"./src/js/modules/s4_portfolio.js\");\n/* harmony import */ var _modules_s5_team_accord_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/s5_team_accord.js */ \"./src/js/modules/s5_team_accord.js\");\n/* harmony import */ var _modules_s8_tabs_price_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/s8_tabs-price.js */ \"./src/js/modules/s8_tabs-price.js\");\n/* harmony import */ var _modules_s9_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/s9_comments.js */ \"./src/js/modules/s9_comments.js\");\n// import navScroll from \"./modules/navScroll.js\";\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n//компенсация сдвига\r\n// let marginOffset = window.innerWidth - document.body.clientWidth;\r\n// export function removeOffsetMargin() {\r\n//   setTimeout(() => {\r\n//     document.body.style.marginRight = 0 + 'px';\r\n//     document.body.classList.remove('lock');\r\n//     //для якоря\r\n//     document.querySelector('.arrow-anchor').style.display = '';\r\n//   }, 300);\r\n// }\r\n// export function addOffsetMargin(dataButtonS7 = true) {\r\n//   if (dataButtonS7 == false) {\r\n//     console.log(dataButtonS7);\r\n//     document.body.style.marginRight = 0 + 'px';\r\n//   } else {\r\n//     document.body.style.marginRight = marginOffset + 'px';\r\n//     //для якоря\r\n//     document.querySelector('.arrow-anchor').style.display = 'none';\r\n//     document.body.classList.add('lock');\r\n//   }\r\n// }\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  //вызываем\r\n//  navScroll('.arrow-anchor'); // как Класс не получилось\r\n  new _modules_s0_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.mobile-wrapper', '.header', '.header-burgerButon', '.mobile-row ').init();\r\n  new _modules_s1_sec_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.modal-wrapper ', '.show-form ', '.modal-cancelButton', '.modal-button ', '.modal-textarea ', '.modal-input ').init(); \r\n  new _modules_navScroll_this_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.arrow-anchor').init(1000); // меняем время\r\n  new _modules_s4_portfolio_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]().init();\r\n  new _modules_s5_team_accord_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.s5-accord__title', '.s5-right__image').init();\r\n  new _modules_s8_tabs_price_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.s8-tab__title', '.s8-tab__column', 's8-tab__active').init();\r\n  new _modules_s9_comments_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]().init();\r\n \r\n});\n\n//# sourceURL=webpack://test-my-28.07.2022/./src/js/script.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (() => {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = (exports, definition) => {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (() => {
    /******/
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (() => {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = exports => {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/


  var __webpack_exports__ = __webpack_require__("./src/js/script.js");
  /******/

  /******/

})();