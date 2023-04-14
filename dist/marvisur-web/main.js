(self["webpackChunkmarvisur_web"] = self["webpackChunkmarvisur_web"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/prueba/prueba.component */ 6330);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 624);
/* harmony import */ var _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layouts/header/header.component */ 7725);









class AppComponent {
    constructor(document, route, router, prueba) {
        this.document = document;
        this.route = route;
        this.router = router;
        this.prueba = prueba;
        this.title = 'Marvisur';
        this.phone = '';
        const navEndEvents$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd));
        // @ts-ignore
        navEndEvents$.subscribe((event) => {
            gtag('config', 'G-MVK0NEBDR5', {
                'page_path': event.urlAfterRedirects
            });
        });
    }
    ngOnInit() {
        window.onscroll = () => {
            this.document.body.setAttribute('style', `top: ${window.scrollY}px`);
        };
        this.prueba.open();
    }
    irRuta() {
        this.router.navigate(['/inicio'], { fragment: 'rastreadoenvio' });
    }
    getRandomPhone() {
        let phones = ["959177150", "940169684", "958325624", "983768818", "978200584", "963404045", "960081337"];
        this.phone = phones[Math.floor(Math.random() * phones.length)];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_0__.PruebaComponent)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_0__.PruebaComponent])], decls: 5, vars: 1, consts: [[1, "box-modal-wsp"], ["target", "_blank", 1, "whatsapp", 3, "href", "click"], [1, "fa", "fa-whatsapp"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_a_click_2_listener() { return ctx.getRandomPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "https://api.whatsapp.com/send?phone=+51", ctx.phone, "&text=%20%C2%A1Hola%20Marvisur!,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Cotizaciones", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7QUFB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QUFnRnRCO0FBK0JBOzs7RUFHRSw2QkFBQTtBQTVCRjtBQTZCRTs7O0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsK0JBQUE7QUF6Qko7QUE0QkE7OztFQUdFLG1CQUFBO0FBekJGO0FBNEJBO0VBQ0Usa0JBQUE7QUF6QkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFpbHdpbmQgKi9cclxuQHRhaWx3aW5kIGJhc2U7XHJcbkB0YWlsd2luZCBjb21wb25lbnRzO1xyXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xyXG5cclxuLyogSW1hZ2VzICovXHJcbiR1cmwtaW1nOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvXCI7XHJcbiR1cmwtaW1nLW5ld3M6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzL1wiO1xyXG4kdXJsLWltZy1zbGlkZTogXCIuLi8uLi8uLi9hc3NldHMvc2xpZGUvXCI7XHJcbiR1cmwtYXU6ICcuLi8uLi8uLi9hc3NldHMvbmV3aW1nLyc7XHJcblxyXG4vKiBTVkdzICovXHJcbiR1cmwtc3ZnOiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy8nO1xyXG5cclxuLyogVGV4dG8gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFtZXJ0aGE7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2FtZXJ0aGEtcGVyc29uYWwtdXNlLW9ubHkudHRmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQmxhY2tJdGFsaWMub3RmJyk7XHJcbn1cclxuXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhbmNvOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4kbmVncm86IGhzbCgwLCAwJSwgMCUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvOiBoc2woMSwgMTAwJSwgNTUlKTtcclxuJGFuYXJhbmphZG86IGhzbCgzOSwgMTAwJSwgNTAlKTtcclxuJGdyaXM6IGhzbCgwLCAwJSwgODAlKTtcclxuJHZlcmRlOiBoc2woMTI4LCA1MSUsIDQ5JSk7XHJcbiRhenVsOiBoc2woMjM5LCAxMDAlLCA1MCUpO1xyXG4kY2VsZXN0ZTogaHNsKDIwNywgOTAlLCA1NCUpO1xyXG4kc29tYnJhLXJvam8tZ2xvYmFsOiBoc2xhKDAsIDU0JSwgNTklLCAwLjMxNCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMjogaHNsKDAsIDEwMCUsIDcxJSk7XHJcbiRyb3NhZG8tYm9yZGU6IGhzbCgzNDksIDEwMCUsIDY5JSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMi10cmFuc3BhcmVudGU6IGhzbGEoMCwgMTAwJSwgODAlLCAwLjU0OCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMzogaHNsKDM1OCwgODAlLCA1MCUpO1xyXG4kY29sb3ItZ2xvYmFsLW9zY3VybzogaHNsKDEsIDEwMCUsIDMyJSk7XHJcbiRhenVsLWNsYXJvOiBoc2woMjIzLCA4MiUsIDU2JSk7XHJcbiRhenVsLW9zY3VybzogaHNsKDIyMywgMTAwJSwgMzAlKTtcclxuJGNlbGVzdGUtY2xhcm86IGhzbCgyMDcsIDEwMCUsIDY5JSk7XHJcbiR2ZXJkZS1jbGFybzogaHNsKDEzMSwgNzIlLCA1NiUpO1xyXG4kdmVyZGUtb3NjdXJvOiBoc2woMTMxLCAxMDAlLCAyMiUpO1xyXG4kZ3Jpcy1jOiBoc2woMCwgMCUsIDkxJSk7XHJcbiRncmlzLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAwJSwgODAlLCAwLjYzNSk7XHJcbiRncmlzLWludGVuc286IGhzbCgwLCAwJSwgNTklKTtcclxuJGJrZzogaHNsKDM0MCwgMTAlLCA2JSk7XHJcbiRia2ctY2FyZDogaHNsKDAsIDAlLCAxMyUpO1xyXG4kY29sb3ItbGN2LW5meTogaHNsKDIyNSwgNzMlLCA1NyUpO1xyXG4kY29sb3ItbGN2LW5meS1jbGFybzogaHNsKDIyNSwgMTAwJSwgNzUlKTtcclxuLyogUmVkZXMgc29jaWFsZXMqL1xyXG4kZmFjZWJvb2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRhenVsLCAkYXp1bC1jbGFybywgJGNlbGVzdGUsICRjZWxlc3RlLWNsYXJvLCAkYmxhbmNvKTtcclxuJGluc3RhZ3JhbTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZDREUzMCwgI0U5NzEyQSwgI0QyMzEzQiwgI0FFNDE5OCwgIzc1NDAxQSwgIzU0NDNBOCk7XHJcbiRsaW5rZWRpbjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwNzdCNSwgIzVmZDJmZik7XHJcbiR0aWt0b2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNjYzA4MmMsICMyNTAwMDcsICRuZWdybyk7XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbW9kYWwtd3NwIHtcclxuICAud2hhdHNhcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtY2xhcm87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYm90IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLWNsYXJvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLW9zY3VybztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwdmg7XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzLFxyXG4gIC5mb25kb25lZ3JvaW5pY2lvLFxyXG4gIC5zZXJ2aWNlcyxcclxuICAubmV3cyxcclxuICAubW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtb3NjdXJvO1xyXG4gIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1pdCxcclxuYm9keS5tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAuY3RuLWJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zMik7XHJcbiAgfVxyXG59XHJcbmJvZHkubW9kYWwtaXQgLmFsbC1tb2RhbC1taXQsXHJcbmJvZHkubW9kYWwtbGN2IC5hbGwtbW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSAuYWxsLW1vZGFsLW5meSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular-file-uploader */ 9580);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/es */ 2403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/inicio/inicio.component */ 1412);
/* harmony import */ var _components_conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/conocenos/conocenos.component */ 4365);
/* harmony import */ var _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sucursales/sucursales.component */ 5086);
/* harmony import */ var _components_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cotizacion/cotizacion.component */ 795);
/* harmony import */ var _components_oportunidad_oportunidad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/oportunidad/oportunidad.component */ 8020);
/* harmony import */ var _components_secciones_sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/secciones/sugerencias/sugerencias.component */ 1213);
/* harmony import */ var _components_secciones_preguntasfrecuentes_preguntasfrecuentes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/secciones/preguntasfrecuentes/preguntasfrecuentes.component */ 3065);
/* harmony import */ var _components_secciones_solucionesenlinea_solucionesenlinea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/secciones/solucionesenlinea/solucionesenlinea.component */ 7202);
/* harmony import */ var _components_secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/secciones/terminosycondiciones/terminosycondiciones.component */ 3751);
/* harmony import */ var _components_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/encuesta/encuesta.component */ 8914);
/* harmony import */ var _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/prueba/prueba.component */ 6330);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/error/error.component */ 9822);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 624);
/* harmony import */ var _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layouts/header/header.component */ 7725);
/* harmony import */ var _components_inicio_modal_infotrakingmodal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inicio/modal/infotrakingmodal.component */ 3521);
/* harmony import */ var _components_secciones_seccion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/secciones/seccion.component */ 3969);
/* harmony import */ var _components_oportunidad_NotFindYetModal_notfindyet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/oportunidad/NotFindYetModal/notfindyet.component */ 2429);
/* harmony import */ var _components_oportunidad_LoadCVModal_loadcv_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/oportunidad/LoadCVModal/loadcv.component */ 3346);
/* harmony import */ var _components_reclamaciones_reclamaciones_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/reclamaciones/reclamaciones.component */ 6470);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! swiper/angular */ 8746);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! jw-angular-pagination */ 1161);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 7618);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 9547);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-pdf-viewer */ 3940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/router */ 124);











// Import Components-WebSite






































(0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_22__["default"], 'es');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_23__.LOCALE_ID, useValue: 'es' }], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule,
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_26__.TooltipModule.forRoot(),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule,
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_28__.JwPaginationModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_0__.routing,
        swiper_angular__WEBPACK_IMPORTED_MODULE_29__.SwiperModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__.NgxExtendedPdfViewerModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_36__.PdfViewerModule,
        _agm_core__WEBPACK_IMPORTED_MODULE_37__.AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAMpoXbrRESRM1KgPzG0o0JIDh61LuOtEQ',
        }),
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_38__.AngularFileUploaderModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__.MatAutocompleteModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_42__.MatOptionModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent,
        _components_secciones_seccion_component__WEBPACK_IMPORTED_MODULE_17__.SeccionComponent,
        _components_conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_3__.ConocenosComponent,
        _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_4__.SucursalesComponent,
        _components_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_5__.CotizacionComponent,
        _components_oportunidad_oportunidad_component__WEBPACK_IMPORTED_MODULE_6__.OportunidadComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_13__.ErrorComponent,
        _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent,
        _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_15__.HeaderComponent,
        _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_12__.PruebaComponent,
        _components_secciones_sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_7__.SugerenciasComponent,
        _components_secciones_sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_7__.modalSuggestionsComponent,
        _components_secciones_preguntasfrecuentes_preguntasfrecuentes_component__WEBPACK_IMPORTED_MODULE_8__.PreguntasfrecuentesComponent,
        _components_secciones_solucionesenlinea_solucionesenlinea_component__WEBPACK_IMPORTED_MODULE_9__.SolucionesenlineaComponent,
        _components_secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_10__.TerminosycondicionesComponent,
        _components_secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_10__.TyCModalComponent,
        _components_secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_10__.TyCModalComponentText,
        _components_encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_11__.EncuestaComponent,
        _components_inicio_modal_infotrakingmodal_component__WEBPACK_IMPORTED_MODULE_16__.InfoTrackingModalComponent,
        _components_oportunidad_NotFindYetModal_notfindyet_component__WEBPACK_IMPORTED_MODULE_18__.NotFindYetComponent,
        _components_oportunidad_LoadCVModal_loadcv_component__WEBPACK_IMPORTED_MODULE_19__.LoadCVComponent,
        _components_oportunidad_NotFindYetModal_notfindyet_component__WEBPACK_IMPORTED_MODULE_18__.SendMessageModalNFY,
        _components_oportunidad_LoadCVModal_loadcv_component__WEBPACK_IMPORTED_MODULE_19__.SendMessageModalLCV,
        _components_reclamaciones_reclamaciones_component__WEBPACK_IMPORTED_MODULE_20__.ReclamacionesComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_26__.TooltipModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule,
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_28__.JwPaginationModule, _angular_router__WEBPACK_IMPORTED_MODULE_44__.RouterModule, swiper_angular__WEBPACK_IMPORTED_MODULE_29__.SwiperModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_32__.MatStepperModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialogModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_35__.NgxExtendedPdfViewerModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_36__.PdfViewerModule, _agm_core__WEBPACK_IMPORTED_MODULE_37__.AgmCoreModule, angular_file_uploader__WEBPACK_IMPORTED_MODULE_38__.AngularFileUploaderModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__.MatAutocompleteModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_41__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_42__.MatOptionModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_43__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutingProviders": () => (/* binding */ appRoutingProviders),
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inicio/inicio.component */ 1412);
/* harmony import */ var _components_conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/conocenos/conocenos.component */ 4365);
/* harmony import */ var _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sucursales/sucursales.component */ 5086);
/* harmony import */ var _components_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cotizacion/cotizacion.component */ 795);
/* harmony import */ var _components_oportunidad_oportunidad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/oportunidad/oportunidad.component */ 8020);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error/error.component */ 9822);
/* harmony import */ var _components_reclamaciones_reclamaciones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reclamaciones/reclamaciones.component */ 6470);

//IMPORTAR COMPONENTES







const appRoutes = [
    { path: '', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent },
    { path: 'inicio', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent },
    { path: 'nosotros', component: _components_conocenos_conocenos_component__WEBPACK_IMPORTED_MODULE_1__.ConocenosComponent },
    { path: 'seccion', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_secciones_seccion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/secciones/seccion.module */ 2969)).then(m => m.SeccionModule) },
    { path: 'sucursales', component: _components_sucursales_sucursales_component__WEBPACK_IMPORTED_MODULE_2__.SucursalesComponent },
    { path: 'cotizacion', component: _components_cotizacion_cotizacion_component__WEBPACK_IMPORTED_MODULE_3__.CotizacionComponent },
    { path: 'oportunidad', component: _components_oportunidad_oportunidad_component__WEBPACK_IMPORTED_MODULE_4__.OportunidadComponent },
    { path: 'reclamaciones', component: _components_reclamaciones_reclamaciones_component__WEBPACK_IMPORTED_MODULE_6__.ReclamacionesComponent },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent }
];
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ 4365:
/*!*************************************************************!*\
  !*** ./src/app/components/conocenos/conocenos.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConocenosComponent": () => (/* binding */ ConocenosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function ConocenosComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18)(5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.getClass(i_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.arrow);
} }
function ConocenosComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item2_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getClassAboutUs(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item2_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r4.description);
} }
class ConocenosComponent {
    constructor(el) {
        this.el = el;
        this.timelineItems = [];
        this.infoAboutUsItems = [];
        this.visibleIndex = 0;
        this.visibleAboutUsIndex = 0;
    }
    ngOnInit() {
        this.timelineItems = [
            {
                icon: 'fa-solid fa-flag-checkered',
                date: '1989',
                description: 'Iniciamos como una empre familiar, con dos vehículos que nos permitieron conectar las principales ciudades del Sur como: Arequipa, Juliaca, Puno y Cusco.',
                arrow: 'fa-solid fa-angles-down fa-bounce'
            },
            {
                icon: 'fa-solid fa-van-shuttle',
                date: '2002',
                description: 'Se abrió la primera sucursal en Lima, es ahí cuando el sueño de expandirse a todo el Perú se iba volviendo realidad, ya que la empresa empezaría a tener un crecimiento considerable.',
                arrow: 'fa-solid fa-angles-down fa-bounce'
            },
            {
                icon: 'fa-solid fa-backward-fast fa-flip-horizontal',
                date: '2022',
                description: 'Con sacrificio y perseverancia nos hemos posicionado como la empresa líder en transporte de carga a nivel nacional, permaneciendo en el camino del éxito y así mismo llevar el negocio de miles de emprendedores a todo el Perú'
            }
        ];
        this.infoAboutUsItems = [
            {
                image: '',
                description: ``
            },
            {
                image: 'assets/svg/undraw_product_teardown_re_m1pc.svg',
                name: 'Misión',
                description: `“Nuestra misión como empresa de transporte es asegurar relaciones rentables a largo plazo con nuestros clientes, empleados y socios comerciales al ofrecer servicios confiables e innovadores.”`
            },
            {
                image: 'assets/svg/undraw_team_collaboration_re_ow29.svg',
                name: 'Visión',
                description: `“Ser reconocidos como una de las empresas de transporte más reconocidas de la industria debido a nuestros compromisos con los clientes, empleados y socios comerciales.”`
            },
            {
                image: 'assets/svg/undraw_product_teardown_re_m1pc.svg',
                name: 'Objetivos',
                description: `“Nuestro objetivo es proporcionar los servicios más amplios y eficientes que satisfagan las demandas de todos nuestros clientes.”`
            }
        ];
    }
    // TimeLine
    onScroll(event) {
        const timelineItems = this.el.nativeElement.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const boundingRect = item.getBoundingClientRect();
            if (boundingRect.top <= window.innerHeight - 50 && boundingRect.bottom >= 0) {
                this.visibleIndex = index;
            }
        });
        // About Us
        const infoAboutUsItems = this.el.nativeElement.querySelectorAll('.group-cards-mv');
        infoAboutUsItems.forEach((item2, index2) => {
            const boundingRect = item2.getBoundingClientRect();
            if (boundingRect.top <= window.innerHeight - 50 && boundingRect.bottom >= 0) {
                this.visibleAboutUsIndex = index2;
            }
        });
    }
    isVisible(index) {
        return index <= this.visibleIndex;
    }
    getClass(index) {
        return this.isVisible(index) ? 'visible' : 'invisible';
    }
    isVisibleAboutUs(index2) {
        return index2 <= this.visibleAboutUsIndex;
    }
    getClassAboutUs(index2) {
        return this.isVisibleAboutUs(index2) ? 'visible' : 'invisible';
    }
}
ConocenosComponent.ɵfac = function ConocenosComponent_Factory(t) { return new (t || ConocenosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ConocenosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConocenosComponent, selectors: [["app-timeline"]], hostBindings: function ConocenosComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ConocenosComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 19, vars: 2, consts: [[1, "about-us"], [1, "ctn-a-u"], [1, "front-page"], [1, "box-relative"], [1, "ctn-curved-au", 2, "height", "150px", "overflow", "hidden"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M0.28,8.41 C307.28,150.50 211.90,145.56 500.27,10.38 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "rgb(255, 255, 255)"], [1, "ctn-sections"], [1, "our-history"], [1, "ctn-oh"], [1, "timeline"], ["class", "timeline-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "mision-vision"], ["class", "group-cards-mv", 3, "class", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "box-horizontal-tl"], [1, "tl-circle-black"], [1, "tl-line-black"], [1, "info-timeline"], [1, "timeline-item-top"], [1, "group-cards-mv"], ["alt", "", 3, "src"], [1, "info-mv"]], template: function ConocenosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "M\u00E1s de 30 a\u00F1os formando parte del Per\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "section", 8)(11, "div", 9)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Conoce nuestra historia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ConocenosComponent_div_15_Template, 12, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12)(17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ConocenosComponent_li_18_Template, 7, 5, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoAboutUsItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.about-us[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%]   .box-relative[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n  position: relative;\n  position: absolute;\n  background: hsla(2deg, 92%, 60%, 0.5);\n  background: linear-gradient(to right, hsla(2deg, 92%, 60%, 0.5), hsla(342deg, 100%, 50%, 0.404)), url('portada.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  position: relative;\n  background-position: center center;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%]   .box-relative[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 4em;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  padding-top: 150px;\n  font-family: montserrat;\n  color: hsl(0deg, 0%, 100%);\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%]   .ctn-curved-au[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  width: 100%;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%] {\n  background-image: url('LINEAS M.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center center;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%] {\n  margin: auto;\n  position: relative;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 1000px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 3em;\n  text-transform: uppercase;\n  font-family: montserrat;\n  color: hsl(1deg, 100%, 55%);\n  position: relative;\n  text-align: center;\n  letter-spacing: 2px;\n  overflow: hidden;\n  padding: 10px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before, .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  background-color: hsl(0deg, 0%, 0%);\n  transition: all 0.2s ease-out;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  right: 0;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover::before, .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 150px 0;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .box-horizontal-tl[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .box-horizontal-tl[_ngcontent-%COMP%]   .tl-circle-black[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin: 0 10px;\n  border-radius: 50%;\n  background-color: hsl(0deg, 0%, 80%);\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .fa-angles-down[_ngcontent-%COMP%] {\n  display: none;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:nth-child(2)   .box-horizontal-tl[_ngcontent-%COMP%]   .tl-line-black[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:nth-child(3)   .box-horizontal-tl[_ngcontent-%COMP%]   .tl-line-black[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: hsl(0deg, 0%, 80%);\n  height: 0;\n  width: 6px;\n  top: -220px;\n  left: 17px;\n  transition: all 0.5s ease-out;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  line-height: 1.4;\n  margin-bottom: 0;\n  transform: translateX(250px);\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   .timeline-item-top[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  visibility: hidden;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  font-size: 2em;\n  color: hsl(1deg, 100%, 55%);\n  font-weight: bold;\n  align-items: center;\n  gap: 20px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   .timeline-item-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: hsl(1deg, 100%, 55%);\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.visible[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  transition: transform 1s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.visible[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   .timeline-item-top[_ngcontent-%COMP%] {\n  visibility: visible;\n  transform: translateY(0);\n  transition: transform 1s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.visible[_ngcontent-%COMP%]:nth-child(2)   .box-horizontal-tl[_ngcontent-%COMP%]   .tl-line-black[_ngcontent-%COMP%], .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.visible[_ngcontent-%COMP%]:nth-child(3)   .box-horizontal-tl[_ngcontent-%COMP%]   .tl-line-black[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: auto;\n  margin-top: 200px;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 150px 0;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 400px;\n  width: 100%;\n  margin: auto;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]   .info-mv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-bottom: 20px;\n  font-size: 3em;\n  font-weight: bold;\n  color: hsl(207deg, 90%, 54%);\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]   .info-mv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 100%;\n  margin: auto;\n  padding: 0 30px;\n  text-align: start;\n  font-size: 1.6em;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(1) {\n  visibility: hidden;\n  position: absolute;\n  display: none;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).invisible   img[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n  transition: transform 0.8s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).invisible   .info-mv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  transform: scaleY(0);\n  transition: 0.8s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).invisible   .info-mv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n  transition: transform 1.5s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).visible   img[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: transform 0.8s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).visible   .info-mv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n  transition: 1.5s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(n).visible   .info-mv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n  transition: transform 1.5s ease;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(3) {\n  flex-direction: row-reverse;\n}\n.about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]:nth-child(3)   p[_ngcontent-%COMP%] {\n  text-align: end;\n}\n@media only screen and (max-width: 1107px) {\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%]   .box-relative[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-top: 100px;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .mision-vision[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .group-cards-mv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n@media only screen and (max-width: 820px) {\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 0;\n    padding: 0;\n    gap: 50px 0;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: auto;\n    padding: 30px 40px;\n    margin-top: 10px;\n    overflow: hidden;\n    display: unset;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .box-horizontal-tl[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]   .info-timeline[_ngcontent-%COMP%]   .fa-angles-down[_ngcontent-%COMP%] {\n    color: hsl(207deg, 90%, 54%);\n    font-size: 3em;\n    margin-top: 60px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.invisible[_ngcontent-%COMP%] {\n    visibility: hidden;\n    transform: translateX(400px);\n    transition: transform 0.8s ease;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item.visible[_ngcontent-%COMP%] {\n    visibility: visible;\n    transform: translateX(0);\n    transition: transform 3s ease;\n  }\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .ctn-sections[_ngcontent-%COMP%]   .our-history[_ngcontent-%COMP%]   .ctn-oh[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .timeline-item[_ngcontent-%COMP%]:nth-child(2).invisible {\n    transform: translateX(-400px);\n  }\n}\n@media only screen and (max-width: 590px) {\n  .about-us[_ngcontent-%COMP%]   .ctn-a-u[_ngcontent-%COMP%]   .front-page[_ngcontent-%COMP%]   .box-relative[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding-top: 150px;\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiYWJvdXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVBQUEs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R007SUFBYyw2QkFBQTtFQTJHcEI7QUFDRjtBQXZHQTtFQUdNO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0VBdUdOO0FBQ0YiLCJmaWxlIjoiYWJvdXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmFib3V0LXVzIHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAuY3RuLWEtdSB7XHJcbiAgICAuZnJvbnQtcGFnZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAuYm94LXJlbGF0aXZlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDIsIDkyJSwgNjAlLCAwLjUpOyAgLy9mYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzXHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGhzbGEoMiwgOTIlLCA2MCUsIDAuNSksIGhzbGEoMzQyLCAxMDAlLCA1MCUsIDAuNDA0KSksIHVybCgkdXJsLWF1Kydwb3J0YWRhLmpwZycpOyAgLy9DaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNlxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgaHNsYSgyLCA5MiUsIDYwJSwgMC41KSwgaHNsYSgzNDIsIDEwMCUsIDUwJSwgMC40MDQpKSwgdXJsKCR1cmwtYXUrJ3BvcnRhZGEuanBnJyk7IC8vVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3K1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jdG4tY3VydmVkLWF1IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3RuLXNlY3Rpb25zIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR1cmwtYXUrJ0xJTkVBUyBNLnBuZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAub3VyLWhpc3Rvcnkge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmN0bi1vaCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSxcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmVncm87XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICY6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDE1MHB4IDA7XHJcbiAgICAgICAgICAgIC50aW1lbGluZS1pdGVtIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIC5ib3gtaG9yaXpvbnRhbC10bCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC50bC1jaXJjbGUtYmxhY2sge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZhLWFuZ2xlcy1kb3duIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpLFxyXG4gICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgIC5ib3gtaG9yaXpvbnRhbC10bCB7XHJcbiAgICAgICAgICAgICAgICAgIC50bC1saW5lLWJsYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbmZvLXRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtaXRlbS10b3Age1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYudmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICAuaW5mby10aW1lbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAudGltZWxpbmUtaXRlbS10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSxcclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgLmJveC1ob3Jpem9udGFsLXRsIHtcclxuICAgICAgICAgICAgICAgICAgICAudGwtbGluZS1ibGFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubWlzaW9uLXZpc2lvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAxNTBweCAwO1xyXG4gICAgICAgICAgLmdyb3VwLWNhcmRzLW12IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tbXYge1xyXG4gICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNlbGVzdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG4pIHtcclxuICAgICAgICAgICAgICAmLmludmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluZm8tbXYge1xyXG4gICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi52aXNpYmxlIHtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbmZvLW12IHtcclxuICAgICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDEuNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwN3B4KSB7XHJcbiAgLmFib3V0LXVzIC5jdG4tYS11IHtcclxuICAgIC5mcm9udC1wYWdlIC5ib3gtcmVsYXRpdmUge1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3RuLXNlY3Rpb25zIC5taXNpb24tdmlzaW9uIHtcclxuICAgICAgdWwgLmdyb3VwLWNhcmRzLW12IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBUaW1lTGluZSBNw7N2aWxcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gIC5hYm91dC11cyAuY3RuLWEtdSAuY3RuLXNlY3Rpb25zIC5vdXItaGlzdG9yeSAuY3RuLW9oIC50aW1lbGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGdhcDogNTBweCAwO1xyXG4gICAgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgIC5ib3gtaG9yaXpvbnRhbC10bCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuaW5mby10aW1lbGluZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgLmZhLWFuZ2xlcy1kb3duIHtcclxuICAgICAgICAgIGNvbG9yOiAkY2VsZXN0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5pbnZpc2libGUge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDAwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgICAmLnZpc2libGUge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAmLmludmlzaWJsZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDAwcHgpOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xyXG4gIC5hYm91dC11cyAuY3RuLWEtdSB7XHJcbiAgICAuZnJvbnQtcGFnZSAuYm94LXJlbGF0aXZlIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./src/app/components/cotizacion/cotizacion.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizacionComponent": () => (/* binding */ CotizacionComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_cotizauser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cotizauser */ 2716);
/* harmony import */ var _services_cotizacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cotizacion.service */ 8503);
/* harmony import */ var src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/departamento.service */ 9899);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global */ 3913);
/* harmony import */ var src_app_services_tarifario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tarifario.service */ 1155);
/* harmony import */ var src_app_models_tarifario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/tarifario */ 182);
/* harmony import */ var src_app_models_tarifa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/tarifa */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 7618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-file-uploader */ 9580);


















function CotizacionComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sucursal_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", sucursal_r22.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", sucursal_r22.titulo, " ");
  }
}

function CotizacionComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sucursa_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", sucursa_r23.des_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", sucursa_r23.des_tar, " ");
  }
}

function CotizacionComponent_div_50_div_1_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*Precio solo por documentos enviados en sobre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*TARIFA MINIMA por medida m\u00E1xima hasta 0.25 x 0.25 x 0.25 Tarifa de 1 a 5 paquetes m\u00E1ximo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*TARIFA MINIMA por medida m\u00E1xima hasta 0.35 x 0.35 x 0.35 Tarifa de 1 a 5 paquetes m\u00E1ximo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*TARIFA MINIMA por medida m\u00E1xima hasta 0.50 x 0.50 x 0.50 Tarifa de 1 a 5 paquetes m\u00E1ximo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*Peso por kilo a partir 50 KG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "*Volumen x m3 a partir de un metro. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function CotizacionComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 85)(3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "SOBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "MINI PAQUETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "PAQUETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "MAXI PAQUETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "PESO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "VOLUMEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 85)(16, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CotizacionComponent_div_50_div_1_ng_template_17_Template, 3, 0, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CotizacionComponent_div_50_div_1_ng_template_22_Template, 3, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, CotizacionComponent_div_50_div_1_ng_template_27_Template, 3, 0, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CotizacionComponent_div_50_div_1_ng_template_32_Template, 3, 0, "ng-template", null, 95, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, CotizacionComponent_div_50_div_1_ng_template_37_Template, 3, 0, "ng-template", null, 97, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, CotizacionComponent_div_50_div_1_ng_template_42_Template, 3, 0, "ng-template", null, 99, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 85)(47, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);

    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23);

    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](28);

    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](33);

    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);

    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](43);

    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tooltip", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].sob_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].minpaq_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].paq_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].maxpaq_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].pes_tar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r24.tarifarioBuscado[0].vol_tar);
  }
}

function CotizacionComponent_div_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 104)(2, "form", 49, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CotizacionComponent_div_50_div_2_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);

      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.onSubmitNoImg(_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 77)(5, "div", 106)(6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "NOMBRE O RAZ\u00D3N SOCIAL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.cotizaUserModel.nombre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 106)(11, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "DNI/RUC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 110, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r53.cotizaUserModel.dni = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 106)(16, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "TEL\u00C9FONO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 112, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r54.cotizaUserModel.telefono = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "CORREO ELECTR\u00D3NICO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.cotizaUserModel.correo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 106)(25, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "CANTIDAD:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.cotizaUserModel.cantidad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "UNIDAD:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "input", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.cotizaUserModel.unidad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 106)(34, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "PESO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "input", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.cotizaUserModel.peso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "ANCHO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "input", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.cotizaUserModel.ancho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 106)(43, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "LARGO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.cotizaUserModel.largo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "ALTO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.cotizaUserModel.alto = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 106)(52, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "DESCRIPCI\u00D3N:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "textarea", 129, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_50_div_2_Template_textarea_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r62.cotizaUserModel.descripcion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "*Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 106)(60, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "ENVIAR SOLICITUD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.unidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.peso);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.ancho);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.largo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.alto);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r25.cotizaUserModel.descripcion);
  }
}

function CotizacionComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CotizacionComponent_div_50_div_1_Template, 60, 12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CotizacionComponent_div_50_div_2_Template, 62, 11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.flagCotiza == true && ctx_r5.tarifarioBuscado.length > 0 && ctx_r5.flagBusquedaTarifario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.flagCotiza == true && ctx_r5.tarifarioBuscado.length == 0 && ctx_r5.flagBusquedaTarifario);
  }
}

function CotizacionComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 104)(2, "form", 49, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CotizacionComponent_div_51_Template_form_ngSubmit_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);

      const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r75.onSubmit(_r63));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 77)(5, "div", 106)(6, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "NOMBRE O RAZ\u00D3N SOCIAL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r77.cotizaUserModel.nombre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 106)(11, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "DNI/RUC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 110, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r78.cotizaUserModel.dni = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 106)(16, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "TEL\u00C9FONO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 131, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r79.cotizaUserModel.telefono = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "CORREO ELECTR\u00D3NICO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r80.cotizaUserModel.correo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 106)(25, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "CANTIDAD:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 116, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r81.cotizaUserModel.cantidad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "UNIDAD:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "input", 118, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r82.cotizaUserModel.unidad = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 106)(34, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "PESO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "input", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r83.cotizaUserModel.peso = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "ANCHO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "input", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r84.cotizaUserModel.ancho = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 106)(43, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "LARGO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 124, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r85.cotizaUserModel.largo = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "ALTO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "input", 126, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r86.cotizaUserModel.alto = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 106)(52, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "DESCRIPCI\u00D3N:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "textarea", 129, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_div_51_Template_textarea_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r87.cotizaUserModel.descripcion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "*Campo Obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 106)(59, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "ADJUNTAR: M\u00C1XIMO 2 MB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "angular-file-uploader", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ApiResponse", function CotizacionComponent_div_51_Template_angular_file_uploader_ApiResponse_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r76);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r88.adjuntoUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 106)(64, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "ENVIAR SOLICITUD");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.unidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.peso);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.ancho);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.largo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.alto);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r6.cotizaUserModel.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx_r6.afuConfig);
  }
}

function CotizacionComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Ingresando Solicitud... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CotizacionComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Se ingres\u00F3 correctamente, Gracias en breve nos comunicaremos contigo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function CotizacionComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No se ingres\u00F3, verifique los datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class CotizacionComponent {
  constructor(_cotizacionService, _SucursalesTodasService, _TarifarioService, el) {
    this._cotizacionService = _cotizacionService;
    this._SucursalesTodasService = _SucursalesTodasService;
    this._TarifarioService = _TarifarioService;
    this.el = el;
    this.changeDniRuc = 'DNI';
    this.changePersonCompany = 'Persona';
    this.changeNameBusiness = 'Nombre completo';
    this.maxminDniRuc = '9';
    this.result = 0;
    this.cantidad = 0;
    this.alto = 0;
    this.ancho = 0;
    this.afuConfig = {
      multiple: false,
      maxSize: "5",
      uploadAPI: {
        url: _services_global__WEBPACK_IMPORTED_MODULE_4__.global.url + 'uploadimagen'
      },
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'Adjuntar Archivo'
    };
    this.tarifarioBuscado = new src_app_models_tarifa__WEBPACK_IMPORTED_MODULE_7__.Tarifa(0, "", "", "", "", "", "", "", "");
    this.status = '';
    this.temp_desc = '';
    this.temp_cant = '';
    this.flag = true;
    this.flagPaquete = 0;
    this.template = true;
    this.templateUnchecked = false;
    this.templateChecked = true;
    this.radioValue = 1;
    this.flagCotiza = false;
    this.flagBusquedaTarifario = false;
    this.tarifario = new src_app_models_tarifario__WEBPACK_IMPORTED_MODULE_6__.Tarifario("", "");
    this.cotizaUserModel = new _models_cotizauser__WEBPACK_IMPORTED_MODULE_1__.CotizaUser(0, "", "", "", "Seleccione", "Seleccione1", "", "", "", "", "", "", "", "no hay imagen", "Seleccione2", "", "0"); // this.tarifarioBuscado=new Array<any>();
  }

  dniRuc(e) {
    let inputVisible = this.el.nativeElement.querySelector('.dni-ruc');

    if (e.target.value === 'ruc') {
      this.changeDniRuc = 'RUC';
      this.changePersonCompany = 'Empresa';
      this.changeNameBusiness = 'Razón social';
      return inputVisible.classList.add('ruc');
    } else {
      this.changeDniRuc = 'DNI';
      this.changePersonCompany = 'Persona';
      this.changeNameBusiness = 'Nombre completo';
      return inputVisible.classList.remove('ruc');
    }
  }

  singleNumber(e) {
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57;
  }

  calculateQuote(form) {
    // console.log(typeof(parseInt(form.value.cantidad)))
    var cantidad = form.value.cantidad;

    if (cantidad === '') {
      cantidad = '0';
    }

    var peso = form.value.peso;

    if (peso === '') {
      peso = '0';
    }

    var ancho = form.value.ancho;

    if (ancho === '') {
      ancho = '0';
    }

    var largo = form.value.largo;

    if (largo === '') {
      largo = '0';
    }

    var alto = form.value.alto;

    if (alto === '') {
      alto = '0';
    }

    this.result = (parseInt(cantidad) + parseInt(peso) + parseInt(ancho) + parseInt(largo) + parseInt(alto)) * 135;
    let priceVisible = this.el.nativeElement.querySelector('.price-calculate');

    if (!priceVisible.classList.contains('visible')) {
      return priceVisible.classList.add('visible');
    }
  }

  onSubmit(form) {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var i = 1; i < 3; i++) {
        yield _this.delay(1000);
      }

      if (_this.cotizaUserModel.imagen == 'no hay imagen') {
        _this._cotizacionService.create(_this.cotizaUserModel).subscribe(response => {
          console.log("sin imagen");

          if (response.status == 'success') {
            // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
            _this.flagPaquete = 1; //this.cotizaUserModel.origen="ini";
          } else {
            _this.status = 'error';
            console.log(_this.cotizaUserModel);
            console.log("error");
            console.log("3");
            _this.flagPaquete = 2;
          }
        }, error => {
          console.log("4");
          _this.status = 'error';
          _this.flagPaquete = 2;
          console.log(error);
        });
      } else {
        while (_this.flag) {
          yield _this.delay(1000);
        }

        _this._cotizacionService.create(_this.cotizaUserModel).subscribe(response => {
          console.log("con imagen");

          if (response.status == 'success') {
            // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
            _this.flagPaquete = 1; //this.cotizaUserModel.origen="ini";
          } else {
            _this.status = 'error';
            console.log(_this.cotizaUserModel);
            console.log("error");
            console.log("3");
            _this.flagPaquete = 2;
          }
        }, error => {
          console.log("4");
          _this.status = 'error';
          _this.flagPaquete = 2;
          console.log(error);
        });
      }
    })();
  }

  onSubmitcorpo(form) {
    var _this2 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cotizaUserModel.flag = '1';

      for (var i = 1; i < 3; i++) {
        yield _this2.delay(1000);
      }

      if (_this2.cotizaUserModel.imagen == 'no hay imagen') {
        _this2._cotizacionService.create(_this2.cotizaUserModel).subscribe(response => {
          console.log("sin imagen");

          if (response.status == 'success') {
            // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
            _this2.flagPaquete = 1; //this.cotizaUserModel.origen="ini";
          } else {
            _this2.status = 'error';
            console.log(_this2.cotizaUserModel);
            console.log("error");
            console.log("3");
            _this2.flagPaquete = 2;
          }
        }, error => {
          console.log("4");
          _this2.status = 'error';
          _this2.flagPaquete = 2;
          console.log(error);
        });
      } else {
        while (_this2.flag) {
          yield _this2.delay(1000);
        }

        _this2._cotizacionService.create(_this2.cotizaUserModel).subscribe(response => {
          console.log("con imagen");

          if (response.status == 'success') {
            // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
            _this2.flagPaquete = 1; //this.cotizaUserModel.origen="ini";
          } else {
            _this2.status = 'error';
            console.log(_this2.cotizaUserModel);
            console.log("error");
            console.log("3");
            _this2.flagPaquete = 2;
          }
        }, error => {
          console.log("4");
          _this2.status = 'error';
          _this2.flagPaquete = 2;
          console.log(error);
        });
      }
    })();
  }

  onSubmitNoImg(form) {
    this._cotizacionService.create(this.cotizaUserModel).subscribe(response => {
      if (response.status == 'success') {
        //this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
        this.flagPaquete = 1; //this.cotizaUserModel.origen="ini";
      } else {
        this.status = 'error';
        console.log(this.cotizaUserModel);
        this.flagPaquete = 2;
      }
    }, error => {
      console.log("4");
      this.status = 'error';
      this.flagPaquete = 2;
      console.log(error);
    });
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
    this._TarifarioService.getDestinos().subscribe(response => {
      if (response.status = 'success') {
        this.sucursalesDes = response.tarifario; //console.log(this.sucursalesDes);  
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });

    this._SucursalesTodasService.getSucursalesTodas().subscribe(response => {
      if (response.status = 'success') {
        this.sucursales = response.sucursales; // console.log(this.sucursales);  
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  adjuntoUpload(e) {
    this.cotizaUserModel.imagen = '-';
    let res = JSON.parse(e.response); //console.log(res.file);

    this.cotizaUserModel.imagen = res.file;
    this.flag = false;
  }

  close() {
    this.flag = true;
    this.flagPaquete = 0;
    window.location.reload();
  }

  cambioSelect() {
    if (this.cotizaUserModel.origen != 'Seleccione' && this.cotizaUserModel.destino != 'Seleccione1') {
      this.flagCotiza = true;
      this.tarifario.ori_tar = this.cotizaUserModel.origen;
      this.tarifario.des_tar = this.cotizaUserModel.destino;

      this._TarifarioService.getPrecioBuscado(this.tarifario).subscribe(response => {
        if (response.status = 'success') {
          this.tarifarioBuscado = response.tarifario;
          this.flagBusquedaTarifario = true;
        }
      }, error => {
        this.status = 'error';
        console.log(error);
      });
    } else {
      this.flagCotiza = false;
    } //console.log(origencotiza)
    //console.log(destinocotiza)

  }

}

CotizacionComponent.ɵfac = function CotizacionComponent_Factory(t) {
  return new (t || CotizacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_2__.CotizacionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_3__.DepartamentoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_tarifario_service__WEBPACK_IMPORTED_MODULE_5__.TarifarioService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};

CotizacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: CotizacionComponent,
  selectors: [["app-cotizacion"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_services_cotizacion_service__WEBPACK_IMPORTED_MODULE_2__.CotizacionService, src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_3__.DepartamentoService, src_app_services_tarifario_service__WEBPACK_IMPORTED_MODULE_5__.TarifarioService])],
  decls: 185,
  vars: 23,
  consts: [[1, "title-quote"], [1, "container"], [1, "animated", "fadeIn", "fast"], [1, "fondoCotizaciones", "d-block"], [1, "row", "fila-servicio"], [1, "col-lg-1"], [1, "col-lg-3", "form-group"], [1, "col-12", "col-lg-3"], ["src", "assets/images/ico-tipo-serv.jpg", "height", "160px", 1, "ringcotizacion"], [1, "sucup", "col-12"], ["name", "tipo1", 1, "col-12", "browser-default", "custom-select", 3, "ngModel", "ngModelChange"], ["tipo1", "ngModel"], ["value", "Seleccione2", "disabled", "true"], ["value", "TRANSPORTE DE CARGA"], ["value", "SERVICIO DE MUDANZA"], [1, "col-lg-3"], [1, "col-12", "col-lg-3", "form-group"], ["src", "assets/images/ico-tipo-ori.jpg", "height", "160px", 1, "ringcotizacion"], ["name", "origen", 1, "col-12", "browser-default", "custom-select", 3, "ngModel", "change", "ngModelChange"], ["origen", "ngModel"], ["value", "Seleccione", "disabled", "true"], ["id", "origencotiza", 3, "value", 4, "ngFor", "ngForOf"], ["src", "assets/images/ico-tipo-des.jpg", "height", "160px", 1, "ringcotizacion"], ["name", "destino", 1, "col-12", "browser-default", "custom-select", 3, "ngModel", "change", "ngModelChange"], ["destino", "ngModel"], ["value", "Seleccione1", "disabled", "true"], ["id", "destinocotiza", 3, "value", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "row", "condiciones"], [1, "pf-subtitulos"], ["type", "submit", "data-toggle", "modal", "data-id", "", "data-target", "#modalcotizacionescorporativas", 1, "row", "col-lg-4", "col-12", "button-cv-directo"], [1, "fa", "fa-folder-open", "fa-2x"], [1, "btn-envio-directo-cv"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-cotiza"], [1, "modal-content"], [1, "modal-header", "title-modal-corpo"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["id", "modalcotizacionescorporativas", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [3, "ngSubmit"], ["CurriculumForm", "ngForm"], [1, "form-group", "was-validated"], ["for", "nombresyape"], ["type", "text", "name", "nombresyape", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombresyape", "ngModel"], [1, "invalid-feedback"], ["for", "ruc"], ["type", "text", "name", "ruccorpo", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "r1"], [1, "form-group", "col-lg-5", "was-validated"], ["for", "edad"], ["type", "text", "id", "telefonocorpo", "required", "", "name", "edad", 1, "form-control", 3, "ngModel", "ngModelChange"], ["edad", "ngModel"], [1, "col-1"], [1, "form-group", "col-lg-6", "was-validated"], ["for", "numero"], ["type", "tel", "required", "", "name", "numero", 1, "form-control", 3, "ngModel", "ngModelChange"], ["numero", "ngModel"], ["for", "cantidad"], ["type", "text", "required", "", "name", "origen", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "destino"], ["type", "tel", "required", "", "name", "destino", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "peso"], ["for", "origen"], [1, "form-group", "col-lg-12", "was-validated"], ["required", "", "name", "detalle", "placeholder", "Descripcion...", "rows", "4", 1, "form-control", "col-lg-12", 3, "ngModel", "ngModelChange"], ["detalle", "ngModel"], [1, "form-group"], ["for", "file", 1, "form-label"], [3, "config", "ApiResponse"], ["type", "button", "data-toggle", "modal", "data-dismiss", "modal", "data-target", "#exampleModal", 1, "btn", "btn-solicitud", "btn-success", "col-lg-12", 3, "click"], ["id", "origencotiza", 3, "value"], ["id", "destinocotiza", 3, "value"], ["class", "tablita", 4, "ngIf"], [1, "tablita"], [1, "row", "rw1"], [1, "letra-cabe", "letra-ana", "col-2", "col-lg-2"], [1, "border-right", "letra-cabe", "letra-ana", "col-2", "col-lg-2"], ["tooltipsobre", ""], ["placement", "right", "triggers", "hover", 1, "", 3, "tooltip"], ["src", "assets/images/sobre.png", "height", "50px", 1, "img-cotizacion-tablita"], ["toltipminipaque", ""], ["src", "assets/images/mini_paquete.png", "height", "50px", 1, "img-cotizacion-tablita"], ["tooltippaquete", ""], ["src", "assets/images/paquete.png", "height", "50px", 1, "img-cotizacion-tablita"], ["tooltipmaxi", ""], ["src", "assets/images/maxi_paquete.png", "height", "50px", 1, "img-cotizacion-tablita"], ["tooltippeso", ""], ["src", "assets/images/peso.png", "height", "50px", 1, "img-cotizacion-tablita"], ["tooltipvolumen", ""], ["color", "red", "placement", "right", "triggers", "hover", 1, "", 3, "tooltip"], ["src", "assets/images/volumen.png", "height", "50px", 1, "img-cotizacion-tablita"], [1, "border-right", "letra-ana", "col-2", "col-lg-2"], ["id", "tool-tip1"], [1, "enviar-paquete"], ["cotizaUserForm", "ngForm"], [1, "row"], [1, "col-lg-4", "letra-form"], ["type", "text", "required", "", "name", "nombre", "placeholder", "NOMBRE O RAZ\u00D3N SOCIAL", 1, "form-control", "col-11", "col-lg-6", 3, "ngModel", "ngModelChange"], ["nombre1", "ngModel"], ["type", "text", "id", "dni", "required", "", "name", "nombre", "placeholder", "DNI/RUC", 1, "form-control", "col-11", "col-lg-6", 3, "ngModel", "ngModelChange"], [1, "col-lg-2", "letra-form"], ["type", "text", "id", "telefono17", "required", "", "name", "telefono", "placeholder", "TEL\u00C9FONO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["telefono", "ngModel"], ["type", "text", "id", "correo", "required", "", "name", "correo", "placeholder", "CORREO ELECTR\u00D3NICO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["correo", "ngModel"], ["type", "text", "id", "cantidad", "required", "", "name", "cantidad", "placeholder", "CANTIDAD", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["cantidad", "ngModel"], ["type", "text", "id", "unidad", "required", "", "name", "unidad", "placeholder", "UNIDAD", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["unidad", "ngModel"], ["type", "text", "id", "peso", "required", "", "name", "peso", "placeholder", "PESO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["peso", "ngModel"], ["type", "text", "id", "ancho", "required", "", "name", "ancho", "placeholder", "ANCHO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["ancho", "ngModel"], ["type", "text", "id", "largo", "required", "", "name", "largo", "placeholder", "LARGO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["largo", "ngModel"], ["type", "text", "id", "alto", "required", "", "name", "alto", "placeholder", "ALTO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["alto", "ngModel"], [1, "letra-form", "col-lg-10"], ["required", "", "name", "detalle", "placeholder", "Descripcion...", "rows", "4", 1, "form-control", "col-lg-10", 3, "ngModel", "ngModelChange"], ["type", "submit", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn-solicitud", "btn", "btn-danger", "col-11", "col-lg-5"], ["type", "text", "id", "telefono", "required", "", "name", "telefono", "placeholder", "TEL\u00C9FONO", 1, "form-control", "col-11", "col-lg-3", 3, "ngModel", "ngModelChange"], ["for", "file", 1, "form-label", "cargacv", "letra-form", "col-lg-3"]],
  template: function CotizacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "COTIZACI\u00D3N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br")(4, "br")(5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 3)(9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " TIPO DE SERVICIO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div")(17, "select", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.cotizaUserModel.tipo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Seleccione el tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "TRANSPORTE DE CARGA");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "SERVICIO DE MUDANZA");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " ORIGEN ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div")(31, "select", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CotizacionComponent_Template_select_change_31_listener() {
        return ctx.cambioSelect();
      })("ngModelChange", function CotizacionComponent_Template_select_ngModelChange_31_listener($event) {
        return ctx.cotizaUserModel.origen = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Seleccione el Origen");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, CotizacionComponent_option_35_Template, 2, 2, "option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 15)(37, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " DESTINO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div")(42, "select", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CotizacionComponent_Template_select_change_42_listener() {
        return ctx.cambioSelect();
      })("ngModelChange", function CotizacionComponent_Template_select_ngModelChange_42_listener($event) {
        return ctx.cotizaUserModel.destino = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Seleccione el Destino");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, CotizacionComponent_option_46_Template, 2, 2, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "br")(48, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, CotizacionComponent_div_50_Template, 3, 2, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, CotizacionComponent_div_51_Template, 66, 12, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 29)(53, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Condiciones: *");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, " tarifas referenciales de agencia Marvisur origen hasta agencia Marvisur destino *tarifas incluyen IGV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "br")(57, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, " \u00A0 \u00A0COTIZACIONES CORPORATIVAS");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div")(64, "div", 34)(65, "div", 35)(66, "div", 36)(67, "div", 37)(68, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Mensaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CotizacionComponent_Template_button_click_70_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, CotizacionComponent_div_74_Template, 2, 0, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, CotizacionComponent_div_75_Template, 2, 0, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, CotizacionComponent_div_76_Template, 2, 0, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 43)(78, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CotizacionComponent_Template_button_click_78_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 45)(81, "div", 46)(82, "div", 36)(83, "div", 37)(84, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "COTIZACIONES CORPORATIVAS");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "button", 48)(87, "span", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 41)(90, "div", 1)(91, "form", 49, 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CotizacionComponent_Template_form_ngSubmit_91_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 51)(94, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "RAZ\u00D3N SOCIAL:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "input", 53, 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_96_listener($event) {
        return ctx.cotizaUserModel.nombre = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 51)(101, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "RUC:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "input", 57, 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_103_listener($event) {
        return ctx.cotizaUserModel.dni = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div", 58)(108, "div", 59)(109, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "TELEFONO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "input", 61, 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_111_listener($event) {
        return ctx.cotizaUserModel.telefono = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](115, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 64)(117, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "CORREO ELECTR\u00D3NICO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "input", 66, 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_119_listener($event) {
        return ctx.cotizaUserModel.correo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 58)(124, "div", 59)(125, "label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, "CANTIDAD:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "input", 69, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_127_listener($event) {
        return ctx.cotizaUserModel.cantidad = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](131, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "div", 64)(133, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "UNIDAD:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "input", 71, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_135_listener($event) {
        return ctx.cotizaUserModel.unidad = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](138, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div", 58)(140, "div", 59)(141, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "PESO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "input", 69, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_143_listener($event) {
        return ctx.cotizaUserModel.peso = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "div", 64)(149, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "ANCHO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "input", 71, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_151_listener($event) {
        return ctx.cotizaUserModel.ancho = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div", 58)(156, "div", 59)(157, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, "LARGO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "input", 69, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_159_listener($event) {
        return ctx.cotizaUserModel.largo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](162, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](163, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "div", 64)(165, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166, "ALTO:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](167, "input", 71, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_input_ngModelChange_167_listener($event) {
        return ctx.cotizaUserModel.alto = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](171, "div", 58)(172, "div", 74)(173, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, "DESCRIPCION:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "textarea", 75, 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CotizacionComponent_Template_textarea_ngModelChange_175_listener($event) {
        return ctx.cotizaUserModel.descripcion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](179, "div", 77)(180, "label", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](181, "Adjuntar Archivo (M\u00E1ximo 2 MB):");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](182, "angular-file-uploader", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ApiResponse", function CotizacionComponent_Template_angular_file_uploader_ApiResponse_182_listener($event) {
        return ctx.adjuntoUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "button", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CotizacionComponent_Template_button_click_183_listener($event) {
        return ctx.onSubmitcorpo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "Enviar Solicitud");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.origen);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sucursales);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.destino);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sucursalesDes);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.cotizaUserModel.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "TRANSPORTE DE CARGA");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "SERVICIO DE MUDANZA");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flagPaquete == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flagPaquete == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flagPaquete == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.dni);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.telefono);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.correo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.cantidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.unidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.peso);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.ancho);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.largo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.alto);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.cotizaUserModel.descripcion);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.afuConfig);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, angular_file_uploader__WEBPACK_IMPORTED_MODULE_12__.AngularFileUploaderComponent],
  styles: [".quote[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.quote[_ngcontent-%COMP%]   .title-quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n    font-weight: bold;\r\n    margin-top: 70px;\r\n}\r\n.btn-cotiza[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.boton[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 40%;\r\n  bottom: 20px;\r\n}\r\n.fila-servicio[_ngcontent-%COMP%] {\r\n  margin-left: 8%;\r\n}\r\nangular-file-uploader[_ngcontent-%COMP%]{\r\n  background-color:white;\r\n  border-radius: 20px;\r\n  \r\n}\r\n.tabla-cotizacion[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 25%;\r\n  bottom: 250px;\r\n}\r\n.sucup[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  background-color: #e61a23;\r\n  border-radius: 15px;\r\n  margin-top: 12px;\r\n  text-align: center;\r\n  color: white;\r\n  line-height: 50px;\r\n}\r\n.sucdown[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  border-radius: 15px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  background-color: white;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n.fondoCotizaciones[_ngcontent-%COMP%] {\r\n  \r\n  background-color: transparent;\r\n  background-repeat: no-repeat;\r\n  display: relative;\r\n  width: 100%;\r\n  height: 100% !important;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  z-index: -1;\r\n}\r\n.ringcotizacion[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: 2px solid #e61a23;\r\n  box-shadow: 0 0 1 5px #E2DFDF;\r\n  -webkit-box-shadow: 0px 0px 1px 5px #E2DFDF;\r\n}\r\n.rings2[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  border: 2px solid #A9A6A6;\r\n  box-shadow: 0 0 1 5px #E2DFDF;\r\n  -webkit-box-shadow: 0px 0px 1px 5px #E2DFDF;\r\n  width: 60%;\r\n}\r\n.letrita-rojita[_ngcontent-%COMP%] {\r\n  color: #e61a23;\r\n  text-align: start;\r\n  font-family: 'Montserrat', sans-serif;\r\n  position: relative;\r\n  font-weight: bolder;\r\n  font-size: 20px;\r\n  margin-top: 50px;\r\n  margin-left: 12%;\r\n}\r\n.enviar-paquete[_ngcontent-%COMP%] {\r\n  margin-left: 10%;\r\n}\r\n.letrita1[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  margin-left: 12.3%;\r\n  text-align: start;\r\n  font-weight: bolder;\r\n}\r\n.x2[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\n\r\n\r\n\r\n.modal-open[_ngcontent-%COMP%] {\r\n  overflow-y: scroll;\r\n \r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 30px;\r\n  width: 30px;\r\n  background-color: white;\r\n  box-shadow: 5px 5px 5px 2px slategray;\r\n  border-radius: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%] ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #ccc;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #e61a23;\r\n  content: \"\\f2b4\";\r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n  left: 8px;\r\n  width: 5px;\r\n  top: 2px;\r\n  height: 11px;\r\n  font-family: FontAwesome;\r\n  content: \"\\f00c\";\r\n  color: white;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: #F4F3F3 inherit;\r\n}\r\n.tablita[_ngcontent-%COMP%] {\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  \r\n  padding-left: 5%;\r\n  box-shadow: 2px 2px 2px 2px#878585;\r\n  padding-right: 5%;\r\n}\r\nh6[_ngcontent-%COMP%] {\r\n  color: #e61a23;\r\n  top: 5px;\r\n  position: relative;\r\n}\r\n.camarita[_ngcontent-%COMP%] {\r\n  color: #e61a23;\r\n}\r\n.btn-agregar[_ngcontent-%COMP%] {\r\n  background-color: #e61a23;\r\n  margin-left: -1%;\r\n}\r\n.btn-solicitud[_ngcontent-%COMP%] {\r\n  background-color: #e61a23;\r\n  border: none;\r\n}\r\n.letra-form[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-weight: bolder;\r\n  text-align: left;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n.dd[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n}\r\n.btn-selec-img[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: black;\r\n  border: none;\r\n  box-shadow: 2px 2px 2px 2px #969696;\r\n}\r\n.letra-cargar[_ngcontent-%COMP%] {\r\n  color: #e61a23;\r\n  margin-left: 6%;\r\n  font-weight: bolder;\r\n}\r\n.letra-cabe[_ngcontent-%COMP%] {\r\n  color: #e61a23;\r\n  font-weight: bolder;\r\n}\r\n.div-pregunta[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  margin-bottom: 15px;\r\n}\r\n.rojo[_ngcontent-%COMP%]{\r\n  height: 5%;\r\n  background-color: #e61a23;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n  font-style: italic;\r\n  font-family: 'Montserrat', sans-serif;    \r\n  color:white ;  \r\n  margin-bottom: 40px;\r\n}\r\n.button-cv-directo[_ngcontent-%COMP%]{\r\n  background-color:#e61a23;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  height: 50px;\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 2px 2px#878585;\r\n}\r\n.title-modal-corpo[_ngcontent-%COMP%]{\r\n  background-color:#e61a23;\r\n  color: white;\r\n\r\n}\r\n.btn-envio-directo-cv[_ngcontent-%COMP%]{\r\n  color:white;\r\n  background-color: #e61a23;\r\n  border: none;\r\n  font-family: 'Montserrat', sans-serif;    \r\n\r\n  text-align: start;\r\n  display: flex;\r\n  cursor: pointer;\r\n  outline: none !important;\r\n\r\n  outline-style: none !important;\r\n  \r\n}\r\n[_nghost-%COMP%]     .tooltip-inner {\r\n  background: black!important;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  \r\n  .fila-servicio[_ngcontent-%COMP%] {\r\n      margin-left: -8%;\r\n  }\r\n  .img-cotizacion-tablita[_ngcontent-%COMP%]{\r\n      height: 25px;\r\n  }\r\n  .tablita[_ngcontent-%COMP%] {\r\n      margin-left: -0.5%;\r\n      margin-right: -0.5%;\r\n  }\r\n  .letra-cabe[_ngcontent-%COMP%] {\r\n      font-size: 15px;\r\n  }\r\n  .letra-ana[_ngcontent-%COMP%] {\r\n      font-size: 10px;\r\n  }\r\n  .rojo[_ngcontent-%COMP%] {\r\n      font-size: 10px;\r\n  }\r\n  .btn-agregar[_ngcontent-%COMP%] {\r\n      margin-left: 0%;\r\n  }\r\n  .rings2[_ngcontent-%COMP%] {\r\n      width: 80px;\r\n  }\r\n  \r\n}\r\n.pf-subtitulos[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.condiciones[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdGl6YWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHlJQUF5STtFQUN6SSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQSx5QkFBeUI7QUFHekIsNENBQTRDO0FBQzVDOzs7Ozs7Q0FNQztBQUNEO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUdBLGlDQUFpQztBQUVqQztFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7QUFHQSwrQ0FBK0M7QUFFL0M7RUFDRSxzQkFBc0I7QUFDeEI7QUFHQSw0REFBNEQ7QUFFNUQ7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBR0Esb0VBQW9FO0FBRXBFO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFHQSxpREFBaUQ7QUFFakQ7RUFDRSxjQUFjO0FBQ2hCO0FBR0EscUNBQXFDO0FBRXJDO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBR0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixZQUFZOztBQUVkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQ0FBcUM7O0VBRXJDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF3Qjs7RUFFeEIsOEJBQThCOztBQUVoQztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7O0NBRUM7QUFFRDs7RUFFRTtNQUNJLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLG1CQUFtQjtFQUN2QjtFQUNBO01BQ0ksZUFBZTtFQUNuQjtFQUNBO01BQ0ksZUFBZTtFQUNuQjtFQUNBO01BQ0ksZUFBZTtFQUNuQjtFQUNBO01BQ0ksZUFBZTtFQUNuQjtFQUNBO01BQ0ksV0FBVztFQUNmOztBQUVGO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiY290aXphY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucXVvdGUgLnRpdGxlLXF1b3RlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4uYnRuLWNvdGl6YSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3RvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5maWxhLXNlcnZpY2lvIHtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuYW5ndWxhci1maWxlLXVwbG9hZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBcclxufVxyXG4udGFibGEtY290aXphY2lvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBib3R0b206IDI1MHB4O1xyXG59XHJcblxyXG4uc3VjdXAge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYxYTIzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3VjZG93biB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb25kb0NvdGl6YWNpb25lcyB7XHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbmRvLWZvcm1zLnBuZ1wiKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnJpbmdjb3RpemFjaW9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U2MWEyMztcclxuICBib3gtc2hhZG93OiAwIDAgMSA1cHggI0UyREZERjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMXB4IDVweCAjRTJERkRGO1xyXG59XHJcblxyXG4ucmluZ3MyIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0E5QTZBNjtcclxuICBib3gtc2hhZG93OiAwIDAgMSA1cHggI0UyREZERjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMXB4IDVweCAjRTJERkRGO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5sZXRyaXRhLXJvaml0YSB7XHJcbiAgY29sb3I6ICNlNjFhMjM7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTIlO1xyXG59XHJcblxyXG4uZW52aWFyLXBhcXVldGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5sZXRyaXRhMSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMi4zJTtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ueDIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbi8qIGZvcm11bGFyaW8gZGUgY2hlY2tzICovXHJcblxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXHJcbi8qXHJcbi5jb250YWluZXIgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4qL1xyXG4ubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gXHJcbn1cclxuXHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDJweCBzbGF0ZWdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcblxyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcblxyXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcblxyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MWEyMztcclxuICBjb250ZW50OiBcIlxcZjJiNFwiO1xyXG59XHJcblxyXG5cclxuLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXHJcblxyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cclxuXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXHJcblxyXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDhweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIHRvcDogMnB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgY29udGVudDogXCJcXGYwMGNcIjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG50aCxcclxudGQge1xyXG4gIGJvcmRlcjogI0Y0RjNGMyBpbmhlcml0O1xyXG59XHJcblxyXG4udGFibGl0YSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCM4Nzg1ODU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbmg2IHtcclxuICBjb2xvcjogI2U2MWEyMztcclxuICB0b3A6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW1hcml0YSB7XHJcbiAgY29sb3I6ICNlNjFhMjM7XHJcbn1cclxuXHJcbi5idG4tYWdyZWdhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MWEyMztcclxuICBtYXJnaW4tbGVmdDogLTElO1xyXG59XHJcblxyXG4uYnRuLXNvbGljaXR1ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MWEyMztcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sZXRyYS1mb3JtIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5kZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi1zZWxlYy1pbWcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICM5Njk2OTY7XHJcbn1cclxuXHJcbi5sZXRyYS1jYXJnYXIge1xyXG4gIGNvbG9yOiAjZTYxYTIzO1xyXG4gIG1hcmdpbi1sZWZ0OiA2JTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ubGV0cmEtY2FiZSB7XHJcbiAgY29sb3I6ICNlNjFhMjM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmRpdi1wcmVndW50YSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5yb2pve1xyXG4gIGhlaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MWEyMztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgICAgXHJcbiAgY29sb3I6d2hpdGUgOyAgXHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufSBcclxuLmJ1dHRvbi1jdi1kaXJlY3Rve1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2U2MWEyMztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHgjODc4NTg1O1xyXG59XHJcbi50aXRsZS1tb2RhbC1jb3Jwb3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlNjFhMjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uYnRuLWVudmlvLWRpcmVjdG8tY3Z7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2MWEyMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgICAgXHJcblxyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG46aG9zdCA+Pj4gLnRvb2x0aXAtaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrIWltcG9ydGFudDtcclxufVxyXG5cclxuLypcclxuYXNkc2FkXHJcbiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgXHJcbiAgLmZpbGEtc2VydmljaW8ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTglO1xyXG4gIH1cclxuICAuaW1nLWNvdGl6YWNpb24tdGFibGl0YXtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAudGFibGl0YSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC41JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41JTtcclxuICB9XHJcbiAgLmxldHJhLWNhYmUge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5sZXRyYS1hbmEge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5yb2pvIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuYnRuLWFncmVnYXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgfVxyXG4gIC5yaW5nczIge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5wZi1zdWJ0aXR1bG9ze1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb25kaWNpb25lc3tcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
});

/***/ }),

/***/ 8914:
/*!***********************************************************!*\
  !*** ./src/app/components/encuesta/encuesta.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncuestaComponent": () => (/* binding */ EncuestaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class EncuestaComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/forms/d/e/1FAIpQLSfwVtT5D4SH585yggRgHAPhnGktySzs13n5ZhDUnfnHsEtfwQ/viewform?embedded=true');
    }
}
EncuestaComponent.ɵfac = function EncuestaComponent_Factory(t) { return new (t || EncuestaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
EncuestaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EncuestaComponent, selectors: [["app-encuesta"]], decls: 2, vars: 1, consts: [[1, "container"], ["frameborder", "0", 3, "src"]], template: function EncuestaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iFrameUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmN1ZXN0YS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9822:
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1412:
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../secciones/terminosycondiciones/terminosycondiciones.component */ 3751);
/* harmony import */ var src_app_services_rastreo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rastreo.service */ 7380);
/* harmony import */ var src_app_models_tracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/tracking */ 4009);
/* harmony import */ var _models_infotracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/infotracking */ 5787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 7618);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _modal_infotrakingmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/infotrakingmodal.component */ 3521);


















const _c0 = ["myBody"];

function InicioComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 102);
  }
}

function InicioComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item2_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "assets/images/", item2_r6.image_name, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

class InicioComponent {
  constructor(document, _formBuilder, sanitizer, dialog, _RastreoService, el) {
    this.document = document;
    this._formBuilder = _formBuilder;
    this.sanitizer = sanitizer;
    this.dialog = dialog;
    this._RastreoService = _RastreoService;
    this.el = el;
    this.groupNumberServices = this._formBuilder.group({
      groupCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.showRelevant = false;
    this.showWhyChooseUs = false;
    this.dataWhyChooseUs = [];
    this.infoRastreo = [];
    this.flagResponseTrack = true;
    this.padreForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    let timestamp = 1643658989; // @ts-ignore

    this.fechaHoy = Date(timestamp);
    this.page_title = 'Inicio Marvisur';
    this.url = '';
    this.urlSafe = '';
    this.serie = '0007';
    this.numero = '2738402';
    this.rastreo = new src_app_models_tracking__WEBPACK_IMPORTED_MODULE_3__.Tracking('', '');
    this.primeraInfo = new _models_infotracking__WEBPACK_IMPORTED_MODULE_4__.Infotracking(-1, '-', new Date(), '', '', '', '', '', '', '');
    this.cantidadanios = 0;
    this.cantidadSucursales = 0;
    this.cantidadTrabajadores = 0;
    this.cantidadGuias = 0;
    this.limitAnios = 33;
    this.limitSucursales = 135;
    this.limitTrabajadores = 1500;
    this.limitGuias = 5981832;
  }

  openTermsAndConditions() {
    return this.dialog.open(_secciones_terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_1__.TyCModalComponent);
  }

  onSubmitInfoTraking(form) {
    this.flagResponseTrack = true;
    this.infoRastreo = [];
    this.primeraInfo = new _models_infotracking__WEBPACK_IMPORTED_MODULE_4__.Infotracking(-1, '-', new Date(), '', '', '', '', '', '', '');
    setTimeout(() => {
      this._RastreoService.getTracking(this.rastreo).subscribe(response => {
        if (response.length == 0) {
          this.flagResponseTrack = false;
        } else {
          this.infoRastreo = response;
          this.buscarPrimero(this.infoRastreo);
          this.flagResponseTrack = true;
        }
      }, error => {
        console.log(error);
      });
    }, 2000);
    this.modalInfoTraking();
  }

  buscarPrimero(arreglo) {
    for (let info of arreglo) {
      if (info.ID == 0) {
        this.primeraInfo = info;
      }
    }
  }

  ngOnInit() {
    this.cargarCantidadesAnios();
    this.cargarCantidadesSucursales();
    this.cargarCantidadesTrabajadores();
    this.cargarCantidadesGuias();

    this._RastreoService.getcantidadGuias().subscribe(response => {
      if (response.status == 'success') {
        this.limitGuias = response.consultaguia[0].cantidad;
      } else {
        console.log('error');
      }
    }, error => {
      console.log(error);
    }); // Data Animations


    this.dataWhyChooseUs = [{
      image_name: 'coberturanuevo'
    }, {
      image_name: 'servicionuevo'
    }, {
      image_name: 'flotavehicularnuevo'
    }, {
      image_name: 'monitoreonuevo'
    }, {
      image_name: 'clientescorponuevo'
    }];
  }

  modalInfoTraking() {
    this.document.body.classList.add('modal-it');
  }

  cargarCantidadesAnios() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var _i = 0; _i <= _this.limitAnios; _i++) {
        _this.cantidadanios = _i;
        yield new Promise(resolve => setTimeout(resolve, 80));
      }
    })();
  }

  cargarCantidadesSucursales() {
    var _this2 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var _i = 0; _i <= _this2.limitSucursales; _i++) {
        _this2.cantidadSucursales = _i;
        yield new Promise(resolve => setTimeout(resolve, 15));
      }
    })();
  }

  cargarCantidadesTrabajadores() {
    var _this3 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var _i = 0; _i <= _this3.limitTrabajadores; _i = _i + 10) {
        _this3.cantidadTrabajadores = _i;
        yield new Promise(resolve => setTimeout(resolve, 14));
      }
    })();
  }

  cargarCantidadesGuias() {
    var _this4 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var _i = 0; _i <= _this4.limitGuias; _i = _i + 13240) {
        _this4.cantidadGuias = _i;
        yield new Promise(resolve => setTimeout(resolve, 0));
      }
    })();
  } // Animations


  singleNumber(e) {
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57;
  }
  /* Obtiene el valor actual del scroll de la etiqueta body */
  // @HostListener("window:scroll", ['$event'])
  // onWindowScroll() {
  //   window.addEventListener('scroll', () => {
  //     const body = document.getElementsByTagName('body')[0];
  //     const styleTop = body.style.top;
  //     var stringToNumber = parseInt(styleTop.slice(0, -2))
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     if (scrollTop > stringToNumber) {
  //       return this.divVisible = true;
  //     } else {
  //       return this.divVisible = false;
  //     }
  //   });
  // }


  onWindowScroll(event) {
    this.showRelevant = window.scrollY > this.getDivPositionRelevant();
    this.showWhyChooseUs = window.scrollY > this.getDivPosition();
  }

  getDivPositionRelevant() {
    const element = document.getElementById('ctn-relevant');
    const position = element.getBoundingClientRect().top - 900;
    return position;
  }

  getDivPosition() {
    const element = document.getElementById('ctn-wcu');
    const position = element.getBoundingClientRect().top + 50;
    return position;
  }

}

InicioComponent.ɵfac = function InicioComponent_Factory(t) {
  return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_rastreo_service__WEBPACK_IMPORTED_MODULE_2__.RastreoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef));
};

InicioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: InicioComponent,
  selectors: [["inicio"]],
  viewQuery: function InicioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.bodyRef = _t.first);
    }
  },
  hostBindings: function InicioComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function InicioComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([src_app_services_rastreo_service__WEBPACK_IMPORTED_MODULE_2__.RastreoService])],
  decls: 165,
  vars: 23,
  consts: [["name", "title", "content", "Arequipa Expreso Marvisur"], ["name", "description", "content", "Somos la empresa peruana con mayor cobertura a nivel nacional en el transporte de carga por v\u00EDa terrestre. Realiza tu seguimiento(tracking) desde nuestra web."], ["name", "keywords", "content", "Marvisur, Marvisur Arequipa, Marvisur Lima, Expreso Marvisur, Marvisur seguimiento, seguimiento marvisur, Marvisur rastreo, rastreo Marvisur"], ["name", "robots", "content", "index, follow"], ["name", "revisit-after", "content", "7 days"], ["property", "og:title", "content", "Arequipa Expreso Marvisur: Toda carga a nivel nacional | Marvisur P\u00E1gina principal"], ["property", "og:site_name", "content", "Sucursales de Arequipa Expreso Marvisur"], ["property", "og:url", "content", "https://www.expresomarvisur.com"], ["property", "og:type", "content", "website"], ["property", "og:locale", "content", "es"], ["property", "og:description", "content", "Somos la empresa peruana con mayor cobertura a nivel nacional en el transporte de carga por v\u00EDa terrestre. Realiza tu seguimiento(tracking) desde nuestra web."], ["property", "og:image", "content", "https://www.expresomarvisur.com/assets/images/LOGO_MARVISUR.png"], [1, "home"], ["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "ctn-box"], [1, "front"], [1, "left"], [1, "h1-font"], [1, "normal"], [1, "amertha"], ["routerLink", "/sucursales", 1, "title-place"], [1, "bottom-place"], ["src", "assets/slide/icono ubicacion.png"], ["href", "tel:013311909", 1, "link-phone"], [1, "fa-solid", "fa-phone"], [1, "right"], ["src", "assets/slide/IMAGEN DEL PERSONAL.png", 1, "persons"], ["src", "assets/slide/FONDO CAMION ROJO.png", 1, "trailer"], [1, "carousel-item"], ["src", "assets/images/carousel/sucursalChosica.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/sucursalLince.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/sucursalLurin.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/sucursalSMP.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/sucursalVMT.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/nuevaSucursalMagdalena.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/nuevaSucursalRimac.jpg", 1, "d-block", "w-100"], ["src", "assets/images/carousel/sucursalOlivosIII.jpg", 1, "d-block", "w-100"], [1, "carousel-control"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev"], [1, "fa-solid", "fa-chevron-left"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next"], [1, "fa-solid", "fa-chevron-right"], [1, "box-card-red"], ["id", "rastreadoenvio", 1, "ctn-tracking"], [1, "ctn-form"], [3, "ngSubmit"], ["cotizaUserForm", "ngForm"], ["type", "text", "name", "serie", "placeholder", "Serie", "autocomplete", "off", 1, "left", 3, "ngModel", "ngModelChange", "keypress"], ["serie", "ngModel"], ["type", "text", "name", "numero", "placeholder", "N\u00FAmero", "autocomplete", "off", 1, "right", 3, "ngModel", "ngModelChange", "keypress"], [1, "ctn-buttons"], ["type", "submit", 1, "btn", "btn-search"], [1, "btn", "btn-info", 3, "tooltip"], ["triggers", "hover"], ["tolTemplate", ""], ["id", "relevant", 1, "relevant"], ["id", "ctn-relevant", 1, "ctn-img-link"], ["routerLink", "/cotizacion", 1, "a-img"], ["src", "assets/images/cotizanuevo.png"], ["routerLink", "/sucursales", 1, "a-img"], ["src", "assets/images/sucursalnuevo.png"], ["mat-button", "", 1, "a-img", 3, "click"], ["src", "assets/images/terminosnuevo.png", "data-toggle", "modal", "data-target", "#modalReclamaciones"], ["routerLink", "/seccion/soluciones-en-linea", 1, "a-img"], ["src", "assets/images/solucionesnuevo.png"], ["href", "https://online.fliphtml5.com/ekxyo/jrqp/#p=1", "target", "_blank", 1, "a-img", "directorio"], [1, "fa-solid", "fa-book"], ["id", "fondonegroinicio", 1, "fondonegroinicio"], [1, "col"], [1, "box-numbers"], [1, "subtitle", "subtitle1"], [1, "subtitle", "subtitle2"], [1, "ctn-gif"], [1, "degradate-top"], ["src", "assets/gif/GIF-CARRO-CARRETERA-WEB.gif", "alt", "Descripci\u00F3n del gif"], [1, "degradate-bottom"], [1, "why-choose-us"], ["id", "ctn-wcu", 1, "ctn-img-link"], ["class", "a-img", 4, "ngFor", "ngForOf"], [1, "services"], [1, "ctn-services"], [1, "ctn-s-info"], [3, "orientation"], ["label", "TRANSPORTE DE CARGA", 3, "stepControl"], ["label", "SERVICIO EXPRESO", 3, "stepControl"], ["label", "SERVICIO DE MUDANZA", 3, "stepControl"], [1, "ctn-s-image"], ["src", "assets/images/transportecargaexpreso.png"], [1, "news"], ["routerLink", "seccion/publicaciones", 1, "post-link"], [1, "fa-solid", "fa-arrow-right"], [1, "card-inner-news"], ["target", "_blank", "href", "https://www.facebook.com/MARVISUROFICIAL/photos/a.145591065968168/1500245460502715/"], ["src", "assets/images/news/CENTRO DE ACOPIO LOS OLIVOS 3.jpg", "alt", ""], ["target", "_blank", "href", "https://www.facebook.com/MARVISUROFICIAL/photos/a.145591065968168/1514174475776480/"], ["src", "assets/images/news/NOS MUDAMOS huacho.jpg", "alt", ""], ["target", "_blank", "href", "https://www.facebook.com/MARVISUROFICIAL/photos/a.145591065968168/1509513512909243/"], ["src", "assets/images/news/puente piedra 3.jpg", "alt", ""], [3, "primeraInfo", "infoRastreo", "flagResponseTrack"], ["src", "assets/images/info-rastrea.png"], [1, "a-img"], [3, "src"]],
  template: function InicioComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "meta", 0)(2, "meta", 1)(3, "meta", 2)(4, "meta", 3)(5, "meta", 4)(6, "meta", 5)(7, "meta", 6)(8, "meta", 7)(9, "meta", 8)(10, "meta", 9)(11, "meta", 10)(12, "meta", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "main", 12)(14, "section", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "div", 19)(21, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Nueva");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Sucursal");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Magdalena");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Jr. Castillo 1080 Magdalena del Mar - Lima - Lima");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "980 660 690");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 39)(55, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "section", 45)(64, "div", 46)(65, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "RASTREA TU ENV\u00CDO");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 47)(68, "form", 48, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function InicioComponent_Template_form_ngSubmit_68_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](69);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onSubmitInfoTraking(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "input", 50, 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_70_listener($event) {
        return ctx.rastreo.serie = $event;
      })("keypress", function InicioComponent_Template_input_keypress_70_listener($event) {
        return ctx.singleNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "input", 52, 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_72_listener($event) {
        return ctx.rastreo.numero = $event;
      })("keypress", function InicioComponent_Template_input_keypress_72_listener($event) {
        return ctx.singleNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "button", 54)(76, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, InicioComponent_ng_template_77_Template, 1, 0, "ng-template", 56, 57, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "section", 58)(80, "div", 59)(81, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InicioComponent_Template_div_click_85_listener() {
        return ctx.openTermsAndConditions();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "a", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "img", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "a", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Directorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "section", 70)(94, "div", 71)(95, "div", 16)(96, "div", 72)(97, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "A\u00F1os");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Uniendo al Per\u00FA.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 72)(104, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Sucursales");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "En la costa, sierra y selva.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 72)(111, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Trabajadores");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "A su servicio.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 72)(118, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Gu\u00EDas de remisi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, " Atendidas con clientes satisfechos. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "div", 76)(126, "img", 77)(127, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "section", 79)(129, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "\u00BFPOR QU\u00C9 ELEGIRNOS?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, InicioComponent_div_132_Template, 2, 1, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "section", 82)(134, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "NUESTROS SERVICIOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 83)(137, "div", 84)(138, "mat-stepper", 85)(139, "mat-step", 86)(140, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, " Brindamos un servicio de calidad en el transporte de toda variedad de carga, como paqueter\u00EDa, carga ligera y carga pesada, con excelentes tiempos de entrega. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "mat-step", 87)(143, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, " Brindamos a su empresa un servicio directo, para el traslado exclusivo de su mercader\u00EDa, con furg\u00F3n cerrado desde la puerta de su empresa de origen hasta su puerta de destino. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "mat-step", 88)(146, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, " Brindamos un servicio seguro y de calidad en las mudanzas, realizando el recojo desde el domicilio con personal muy capacitado y un servicio personalizado hasta el destino que nos indique. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](149, "img", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "section", 91)(151, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "PUBLICACIONES:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "a", 92)(154, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "ver m\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](156, "i", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 94)(158, "a", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](159, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](161, "img", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "a", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](163, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](164, "info-tracking-modal", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](78);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.rastreo.serie);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.rastreo.numero);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tooltip", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("visible", ctx.showRelevant)("hidden", !ctx.showRelevant);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.cantidadanios);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.cantidadSucursales);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("+", ctx.cantidadTrabajadores, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.cantidadGuias);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("visible", ctx.showWhyChooseUs)("hidden", !ctx.showWhyChooseUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.dataWhyChooseUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("orientation", "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stepControl", ctx.groupNumberServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stepControl", ctx.groupNumberServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stepControl", ctx.groupNumberServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("primeraInfo", ctx.primeraInfo)("infoRastreo", ctx.infoRastreo)("flagResponseTrack", ctx.flagResponseTrack);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__.MatStepper, _modal_infotrakingmodal_component__WEBPACK_IMPORTED_MODULE_5__.InfoTrackingModalComponent],
  styles: ["/* Tailwind */\n/* ! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: Graphik, sans-serif; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n.static {\n  position: static;\n}\n.hidden {\n  display: none;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n/* Images */\n/* SVGs */\n/* Texto */\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n/* Colors */\n/* Redes sociales*/\n* {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton {\n  cursor: pointer;\n}\n.box-modal-wsp .whatsapp {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp .whatsapp i {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp .whatsapp:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp .chat-bot {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp .chat-bot i {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp .chat-bot:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain {\n  position: relative;\n  top: 10vh;\n}\nmain .relevant,\nmain .why-choose-us,\nmain .fondonegroinicio,\nmain .services,\nmain .news,\nmain .modal {\n  margin: 130px auto;\n}\nmain .relevant h3,\nmain .why-choose-us h3,\nmain .fondonegroinicio h3,\nmain .services h3,\nmain .news h3,\nmain .modal h3 {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain .relevant h3:hover,\nmain .why-choose-us h3:hover,\nmain .fondonegroinicio h3:hover,\nmain .services h3:hover,\nmain .news h3:hover,\nmain .modal h3:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n/*  Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 8px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it,\nbody.modal-lcv,\nbody.modal-nfy {\n  overflow-y: hidden !important;\n}\nbody.modal-it .ctn-backdrop1,\nbody.modal-lcv .ctn-backdrop1,\nbody.modal-nfy .ctn-backdrop1 {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it .all-modal-mit,\nbody.modal-lcv .all-modal-lcv,\nbody.modal-nfy .all-modal-nfy {\n  transform: scale(1);\n}\nbody.modal-open {\n  overflow-y: hidden;\n}\n.home {\n  top: 0;\n}\n.home .slide .carousel-inner {\n  width: 100%;\n  height: 90vh;\n}\n.home .slide .carousel-inner .carousel-item {\n  position: relative;\n  z-index: index;\n  height: 90vh;\n}\n.home .slide .carousel-inner .carousel-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box {\n  position: absolute;\n  bottom: 0 !important;\n  right: 0;\n  left: 0;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front {\n  height: 74vh;\n  bottom: 0;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 100px;\n  margin: 0 50px;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left {\n  position: absolute;\n  top: -50px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .h1-font {\n  font-size: 6em;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .h1-font .normal {\n  font-size: 1.2em;\n  font-family: montserrat;\n  text-transform: uppercase;\n  margin-left: -15px;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .h1-font .amertha {\n  font-size: 1.4em;\n  margin: -120px 0 50px 40px;\n  font-family: amertha;\n  color: hsl(1deg, 100%, 55%);\n  transform: rotate(-8deg);\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .title-place {\n  background-color: hsl(1deg, 100%, 55%);\n  color: hsl(0deg, 0%, 100%);\n  border-radius: 20px;\n  max-width: 200px;\n  width: 100%;\n  padding: 6px 0;\n  text-decoration: none;\n  margin: auto;\n  text-align: center;\n  z-index: 20;\n  border: 1px solid;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .title-place:hover {\n  background-color: hsl(0deg, 0%, 100%);\n  color: hsl(1deg, 100%, 55%);\n  border: 1px solid hsl(1deg, 100%, 55%);\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  font-weight: bold;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .bottom-place {\n  margin: 20px;\n  display: flex;\n  max-width: 550px;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .bottom-place img {\n  display: block;\n  width: 50px;\n  height: auto;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .bottom-place img:hover {\n  transform: scale(1.06);\n  -moz-transform: scale(1.06);\n  -webkit-transform: scale(1.06);\n  -o-transform: scale(1.06);\n  -ms-transform: scale(1.06);\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .bottom-place span {\n  display: block;\n  font-size: 2em;\n  width: auto;\n  font-weight: bold;\n  z-index: 20;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .bottom-place span:hover {\n  transform: scale(1.03);\n  -moz-transform: scale(1.03);\n  -webkit-transform: scale(1.03);\n  -o-transform: scale(1.03);\n  -ms-transform: scale(1.03);\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .left .link-phone {\n  padding: 0;\n  color: hsl(0deg, 0%, 0%);\n  border: none;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  gap: 0 20px;\n  position: absolute;\n  bottom: -180px;\n  left: 50px;\n  font-size: 1.5em;\n  background-color: transparent;\n  color: hsl(1deg, 100%, 55%);\n  text-decoration: none;\n  text-shadow: 1px 1px 2px hsl(0deg, 0%, 100%);\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .right {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.home .slide .carousel-inner .carousel-item .ctn-box .front .right .persons {\n  position: relative;\n  width: 700px;\n  height: auto;\n  z-index: 3;\n  object-fit: contain;\n}\n.home .slide .carousel-inner .carousel-item .trailer {\n  position: absolute;\n  opacity: 0.85;\n  z-index: -2;\n}\n.home .slide .carousel-control {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n.home .slide .carousel-control button {\n  max-width: 40px;\n  width: 100%;\n  height: 40px;\n  margin: auto 10px;\n  border-radius: 50%;\n  background-color: hsl(0deg, 100%, 71%);\n}\n.home .slide .carousel-control button i {\n  font-size: 1.2em;\n}\n.home .slide .carousel-control button i:hover {\n  color: hsl(0deg, 0%, 100%);\n}\n.home .box-card-red {\n  position: relative;\n  background-color: hsl(1deg, 100%, 55%);\n  margin-top: 0;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  z-index: 2;\n}\n.home .box-card-red .ctn-tracking {\n  max-width: 1200px;\n  width: 100%;\n  text-align: center;\n  margin: 30px auto;\n}\n.home .box-card-red .ctn-tracking h2 {\n  color: hsl(0deg, 0%, 100%);\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n.home .box-card-red .ctn-tracking .ctn-form {\n  margin: auto 80px;\n}\n.home .box-card-red .ctn-tracking .ctn-form form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px 40px;\n}\n.home .box-card-red .ctn-tracking .ctn-form form input {\n  max-width: 300px;\n  width: 100%;\n  border-radius: 20px;\n  padding: 5px 15px;\n  background-color: transparent;\n  border: 1px solid hsl(0deg, 0%, 100%);\n  color: hsl(0deg, 0%, 100%);\n}\n.home .box-card-red .ctn-tracking .ctn-form form input::placeholder {\n  color: hsl(0deg, 0%, 100%);\n}\n.home .box-card-red .ctn-tracking .ctn-form form input:-webkit-autofill,\n.home .box-card-red .ctn-tracking .ctn-form form input :-webkit-autofill:hover,\n.home .box-card-red .ctn-tracking .ctn-form form input :-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px hsl(1deg, 100%, 55%) inset;\n  -webkit-text-fill-color: hsl(0deg, 0%, 100%);\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons {\n  position: relative;\n  max-width: 200px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px 40px;\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons .btn-search {\n  max-width: 120px;\n  width: 100%;\n  background-color: transparent;\n  background-image: url('btn-buscar-rastreo.png');\n  background-size: auto;\n  background-repeat: no-repeat;\n  padding-bottom: 30px;\n  border: none;\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons .btn-info {\n  max-width: 120px;\n  width: 100%;\n  height: auto;\n  background-color: transparent;\n  background-image: url('icono-admiracion.png');\n  background-size: auto;\n  background-repeat: no-repeat;\n  width: 40px;\n  position: relative;\n  padding-bottom: 30px;\n  border: none;\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons bs-tooltip-container {\n  position: absolute;\n  background-color: transparent;\n  display: flex;\n  width: 350px;\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons bs-tooltip-container div {\n  position: relative;\n  max-width: 100%;\n  padding: 0;\n  background-color: transparent;\n  top: 10px;\n  left: -10px;\n}\n.home .box-card-red .ctn-tracking .ctn-form form .ctn-buttons bs-tooltip-container div img {\n  height: 300px;\n}\n.home .relevant .ctn-img-link,\n.home .why-choose-us .ctn-img-link {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 40px 90px;\n  margin: 0 30px;\n}\n.home .relevant .ctn-img-link .a-img,\n.home .why-choose-us .ctn-img-link .a-img {\n  max-width: 150px;\n  min-width: 150px;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n  cursor: pointer;\n}\n.home .relevant .ctn-img-link .a-img:hover,\n.home .why-choose-us .ctn-img-link .a-img:hover {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n}\n.home .relevant .ctn-img-link .a-img img,\n.home .why-choose-us .ctn-img-link .a-img img {\n  width: 100%;\n  height: 100%;\n}\n.home .relevant .ctn-img-link .a-img .show,\n.home .why-choose-us .ctn-img-link .a-img .show {\n  opacity: 1;\n  transition: opacity 1s;\n}\n.home .relevant .ctn-img-link .a-img .hide,\n.home .why-choose-us .ctn-img-link .a-img .hide {\n  opacity: 0;\n}\n.home .relevant .ctn-img-link .a-img i,\n.home .why-choose-us .ctn-img-link .a-img i {\n  width: 132px;\n  height: 132px;\n  border-radius: 50%;\n  font-size: 4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 5px solid hsl(358deg, 80%, 50%);\n  color: hsl(358deg, 80%, 50%);\n  margin-bottom: 10px;\n}\n.home .relevant .ctn-img-link .a-img span,\n.home .why-choose-us .ctn-img-link .a-img span {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: center;\n  font-style: italic;\n  text-transform: uppercase;\n}\n.home .relevant .visible,\n.home .why-choose-us .visible {\n  opacity: 1;\n  transition: opacity 3s ease-in-out;\n}\n.home .relevant .hidden,\n.home .why-choose-us .hidden {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n.home .fondonegroinicio {\n  margin-top: 100px;\n}\n.home .fondonegroinicio .col .ctn-box {\n  background-image: linear-gradient(to top, #0084CA, hsl(0deg, 0%, 100%));\n  min-height: auto;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0 120px;\n  padding: 0;\n}\n.home .fondonegroinicio .col .ctn-box .box-numbers {\n  margin: 0 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.home .fondonegroinicio .col .ctn-box .box-numbers h4 {\n  text-align: center;\n  color: hsl(1deg, 100%, 55%);\n  grid-gap: 80px;\n  font-size: 3.8em;\n  font-weight: bold;\n  font-family: \"Montserrat\", sans-serif;\n  font-style: italic;\n}\n.home .fondonegroinicio .col .ctn-box .box-numbers .subtitle {\n  color: hsl(1deg, 100%, 55%);\n  text-align: center;\n  font-size: 1.1em;\n}\n.home .fondonegroinicio .col .ctn-gif {\n  position: relative;\n}\n.home .fondonegroinicio .col .ctn-gif .degradate-top {\n  position: absolute;\n  background-color: #0084CA;\n  height: 250px;\n  width: 100%;\n  z-index: 2;\n  top: -250px;\n}\n.home .fondonegroinicio .col .ctn-gif img {\n  margin: auto;\n  margin-top: 250px;\n  width: 100%;\n}\n.home .fondonegroinicio .col .ctn-gif .degradate-bottom {\n  background-image: linear-gradient(to bottom, hsl(0deg, 0%, 0%), hsl(0deg, 0%, 80%), hsl(0deg, 0%, 100%));\n  height: 100px;\n}\n.home .services {\n  position: relative;\n  max-width: 1400px;\n  margin: auto;\n}\n.home .services .ctn-services {\n  margin: 0 50px;\n  position: relative;\n  display: grid;\n  grid-template-columns: 60% 40%;\n}\n.home .services .ctn-services .ctn-s-info {\n  display: block;\n}\n.home .services .ctn-services .ctn-s-info mat-stepper {\n  background-color: transparent;\n  position: relative;\n  left: 0;\n}\n.home .services .ctn-services .ctn-s-info mat-stepper .ng-star-inserted mat-step-header {\n  background-color: transparent;\n}\n.home .services .ctn-services .ctn-s-info mat-stepper .ng-star-inserted mat-step-header .mat-step-icon {\n  background-color: hsl(1deg, 100%, 55%);\n}\n.home .services .ctn-services .ctn-s-info mat-stepper .ng-star-inserted mat-step-header .mat-step-label {\n  display: block;\n}\n.home .services .ctn-services .ctn-s-info mat-stepper .ng-star-inserted mat-step-header .mat-step-label .mat-step-text-label {\n  color: hsl(1deg, 100%, 55%);\n  font-size: 1.3em;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n  word-spacing: 4px;\n}\n.home .services .ctn-services .ctn-s-image {\n  position: relative;\n  min-height: 340px;\n  max-height: 340px;\n}\n.home .services .ctn-services .ctn-s-image img {\n  width: 100%;\n  min-height: 340px;\n  max-height: 340px;\n  position: absolute;\n  right: 0;\n  text-align: center;\n}\n.home .news {\n  position: relative;\n  max-width: 1300px;\n  width: 100%;\n}\n.home .news .post-link {\n  position: absolute;\n  right: 80px;\n  top: 10px;\n  background-color: hsl(1deg, 100%, 55%);\n  color: hsl(0deg, 0%, 100%);\n  padding: 5px 15px;\n  border-radius: 20px;\n}\n.home .news .post-link span {\n  margin-right: 10px;\n}\n.home .news .card-inner-news {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  flex-wrap: wrap;\n  gap: 50px;\n  margin: 0 30px;\n}\n.home .news .card-inner-news a {\n  width: 350px;\n  height: 350px;\n  display: block;\n}\n.home .news .card-inner-news a img {\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);\n}\n@media only screen and (max-width: 1300px) {\n  .home .slide .carousel-inner .carousel-item .front .left .bottom-place span {\n    text-shadow: 1px 1px 2px hsl(0deg, 0%, 100%);\n  }\n  .home .slide .carousel-inner .carousel-item .front .right .persons {\n    max-width: 500px;\n  }\n}\n@media only screen and (max-width: 818px) {\n  .home .slide .carousel-inner .carousel-item .front .left .h1-font .amertha {\n    font-size: 1em !important;\n    margin: -40px 0 150px 280px !important;\n    color: hsl(0deg, 0%, 100%) !important;\n  }\n  .home .slide .carousel-inner .carousel-item .front .left .bottom-place span {\n    text-shadow: 1px 1px 2px hsl(0deg, 0%, 100%);\n  }\n  .home .slide .carousel-inner .carousel-item .front .left .link-phone {\n    display: none !important;\n  }\n  .home .slide .carousel-inner .carousel-item .front .right .persons {\n    max-width: 500px;\n  }\n  .home .services .ctn-services {\n    display: flex;\n  }\n  .home .services .ctn-services .ctn-s-info mat-stepper .ng-star-inserted .mat-vertical-content-container .ng-trigger-verticalStepTransition .mat-vertical-content p {\n    background-color: hsla(0deg, 100%, 80%, 0.548);\n    margin: auto !important;\n    border-radius: 15px;\n    padding: 10px;\n    font-size: 1.1em;\n    letter-spacing: 0.8px;\n    word-spacing: 10px;\n  }\n  .home .services .ctn-services .ctn-s-image {\n    position: absolute;\n    width: 400px;\n    right: 0;\n    z-index: -2;\n    opacity: 0.3;\n  }\n  .home .news .post-link {\n    top: auto;\n    bottom: -70px;\n    right: 240px;\n  }\n}\n@media only screen and (max-width: 670px) {\n  .home .slide .carousel-inner .carousel-item .front .left .h1-font .amertha {\n    margin: -40px 0 150px 200px !important;\n    color: hsl(0deg, 0%, 100%) !important;\n  }\n  .home .slide .carousel-inner .carousel-item .front .left .bottom-place span {\n    font-size: 1.5em !important;\n    text-shadow: 1px 1px 1px hsl(0deg, 0%, 100%);\n  }\n}\n@media only screen and (max-width: 590px) {\n  .home .slide .carousel-inner .carousel-item .front .left .h1-font .amertha {\n    font-size: 0.8em !important;\n    margin: -40px 0 50px 130px !important;\n  }\n  .home .slide .carousel-inner .carousel-item .front .left .bottom-place span {\n    color: hsl(0deg, 0%, 100%);\n  }\n  .home .slide .carousel-inner .carousel-item .front .left .link-phone {\n    display: none;\n  }\n  .home .slide .carousel-inner .carousel-item .front .right .persons {\n    max-width: 400px;\n    right: -5px;\n  }\n  .home .services .ctn-services .ctn-s-image {\n    width: 350px;\n    margin-top: 80px;\n  }\n  .home .news .post-link {\n    right: 190px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiaW5pY2lvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7QUFDQSxpRUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7RUFBQSxzQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG1CQUFBLEVBQUEsTUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Ozs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUEsRUFBQSxNQUFBO0VBQUEsOEJBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQTtFQUFBLFdBQUEsRUFBQSxNQUFBO0VBQUEsZ0NBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEseUNBQUE7VUFBQSxpQ0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7O0VBQUEsa0JBQUE7RUFBQSxvQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxtQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwrR0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTtFQUFBLGVBQUE7QUFBQTtBQUFBO0VBQUEsV0FBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7RUFBQSx5QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTs7Ozs7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxVQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxvQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxzQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxhQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxZQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLGFBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsa0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFBO0FBQUE7QUFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOzs7RUFBQSxnQkFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOztFQUFBLFVBQUEsRUFBQSxN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c2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmhvbWUge1xyXG4gIHRvcDogMDtcclxuICAuc2xpZGUge1xyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiBpbmRleDtcclxuICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdG4tYm94IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NHZoO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGdhcDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgLmgxLWZvbnQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2ZW07XHJcbiAgICAgICAgICAgICAgICAubm9ybWFsIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbWVydGhhIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtMTIwcHggMCA1MHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGl0bGUtcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYm90dG9tLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjYgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjYgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuNiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubGluay1waG9uZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRuZWdybztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE4MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICRibGFuY287XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAucGVyc29ucyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRyYWlsZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICAgICAgIHotaW5kZXg6IC0yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcm91c2VsLWNvbnRyb2wge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYm94LWNhcmQtcmVkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC5jdG4tdHJhY2tpbmcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jdG4tZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDgwcHg7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZ2FwOiAyMHB4IDQwcHg7XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibGFuY287XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjotd2Via2l0LWF1dG9maWxsLFxyXG4gICAgICAgICAgICA6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXHJcbiAgICAgICAgICAgIDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggJGNvbG9yLWdsb2JhbC1jbGFybyBpbnNldDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3RuLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBnYXA6IDIwcHggNDBweDtcclxuICAgICAgICAgICAgLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR1cmwtaW1nICsgXCJidG4tYnVzY2FyLXJhc3RyZW8ucG5nXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWluZm8ge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkdXJsLWltZyArIFwiaWNvbm8tYWRtaXJhY2lvbi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDb250ZW5lZG9yIGRlbCBpbmZvLXRyYWNraW5nLW1vZGFsXHJcbiAgICAgICAgICAgIGJzLXRvb2x0aXAtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzIHtcclxuICAgIC5jdG4taW1nLWxpbmsge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDQwcHggOTBweDtcclxuICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgIC5hLWltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuNiBlYXNlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5oaWRlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgd2lkdGg6IDEzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm8tMztcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTM7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudmlzaWJsZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAuaGlkZGVuIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9uZG9uZWdyb2luaWNpbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDg0Q0E7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHVybC1pbWcgKyBcImZvbmRvbmVncm9pbmljaW8ucG5nXCIpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAvLyAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC5jb2wge1xyXG4gICAgICAuY3RuLWJveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwODRDQSwgJGJsYW5jbyk7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZ2FwOiAwIDEyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLmJveC1udW1iZXJzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDgwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy44ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY3RuLWdpZiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICAgICAgLmRlZ3JhZGF0ZS10b3Age1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwODRDQSwgIzczYzVmMSwgJGJsYW5jbyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NENBO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIHRvcDogLTI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZ3JhZGF0ZS1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG5lZ3JvLCAkZ3JpcywgJGJsYW5jbyk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2VydmljZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAuY3RuLXNlcnZpY2VzIHtcclxuICAgICAgbWFyZ2luOiAwIDUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xyXG4gICAgICAuY3RuLXMtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF0LXN0ZXBwZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgICAgICBtYXQtc3RlcC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIC5tYXQtc3RlcC1pY29uIHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybzsgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5tYXQtc3RlcC10ZXh0LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdvcmQtc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY3RuLXMtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNDBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzNDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDM0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZXdzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAucG9zdC1saW5rIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogODBweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtaW5uZXItbmV3cyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgICBhIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIENlbHVsYXJcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAuaG9tZSB7XHJcbiAgICAuc2xpZGUge1xyXG4gICAgICAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICAgIC5mcm9udCB7XHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAuYm90dG9tLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggJGJsYW5jbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAucGVyc29ucyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxOHB4KSB7XHJcbiAgLmhvbWUge1xyXG4gICAgLnNsaWRlIHtcclxuICAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAuZnJvbnQge1xyXG4gICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgLmgxLWZvbnQge1xyXG4gICAgICAgICAgICAgICAgLmFtZXJ0aGEge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IC00MHB4IDAgMTUwcHggMjgwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFuY28gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJvdHRvbS1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICRibGFuY287XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5saW5rLXBob25lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAucGVyc29ucyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgLmN0bi1zZXJ2aWNlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuY3RuLXMtaW5mbyB7XHJcbiAgICAgICAgICBtYXQtc3RlcHBlciAubmctc3Rhci1pbnNlcnRlZCAubWF0LXZlcnRpY2FsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLm5nLXRyaWdnZXItdmVydGljYWxTdGVwVHJhbnNpdGlvbiB7XHJcbiAgICAgICAgICAgICAgLm1hdC12ZXJ0aWNhbC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAvLyB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggJG5lZ3JvO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuOHB4O1xyXG4gICAgICAgICAgICAgICAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdG4tcy1pbWFnZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IC0yO1xyXG4gICAgICAgICAgb3BhY2l0eTogLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV3cyB7XHJcbiAgICAgIC5wb3N0LWxpbmsge1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBib3R0b206IC03MHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XHJcbiAgLmhvbWUgLnNsaWRlIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuZnJvbnQgLmxlZnQge1xyXG4gICAgLmgxLWZvbnQge1xyXG4gICAgICAuYW1lcnRoYSB7XHJcbiAgICAgICAgbWFyZ2luOiAtNDBweCAwIDE1MHB4IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICRibGFuY28gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvdHRvbS1wbGFjZSB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggJGJsYW5jbztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5MHB4KSB7XHJcbiAgLmhvbWUge1xyXG4gICAgLnNsaWRlIHtcclxuICAgICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAuZnJvbnQge1xyXG4gICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgLmgxLWZvbnQge1xyXG4gICAgICAgICAgICAgICAgLmFtZXJ0aGEge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtNDBweCAwIDUwcHggMTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJvdHRvbS1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5saW5rLXBob25lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgLnBlcnNvbnMge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzIHtcclxuICAgICAgLmN0bi1zZXJ2aWNlcyB7XHJcbiAgICAgICAgLmN0bi1zLWltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV3cyB7XHJcbiAgICAgIC5wb3N0LWxpbmsge1xyXG4gICAgICAgIHJpZ2h0OiAxOTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 3521:
/*!***********************************************************************!*\
  !*** ./src/app/components/inicio/modal/infotrakingmodal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoTrackingModalComponent": () => (/* binding */ InfoTrackingModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function InfoTrackingModalComponent_div_13_div_29_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function InfoTrackingModalComponent_div_13_div_29_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
function InfoTrackingModalComponent_div_13_div_29_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function InfoTrackingModalComponent_div_13_div_29_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function InfoTrackingModalComponent_div_13_div_29_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function InfoTrackingModalComponent_div_13_div_29_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EN RUTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoTrackingModalComponent_div_13_div_29_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EN ALMACEN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoTrackingModalComponent_div_13_div_29_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ENTREGADO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoTrackingModalComponent_div_13_div_29_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RECEPCION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoTrackingModalComponent_div_13_div_29_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ATENDIDO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfoTrackingModalComponent_div_13_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoTrackingModalComponent_div_13_div_29_img_2_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InfoTrackingModalComponent_div_13_div_29_img_3_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoTrackingModalComponent_div_13_div_29_img_4_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InfoTrackingModalComponent_div_13_div_29_img_5_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoTrackingModalComponent_div_13_div_29_img_6_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InfoTrackingModalComponent_div_13_div_29_div_8_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InfoTrackingModalComponent_div_13_div_29_div_9_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InfoTrackingModalComponent_div_13_div_29_div_10_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InfoTrackingModalComponent_div_13_div_29_div_11_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InfoTrackingModalComponent_div_13_div_29_div_12_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 27)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 28)(18, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const infotrack_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", infotrack_r3.ID == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 12, infotrack_r3.FECEVENTO, "dd-MM-yyyy hh:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](infotrack_r3.EVENTO);
} }
function InfoTrackingModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "ul", 16)(2, "li")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ORIGEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DESTINO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "FECHA DE RECEPCI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "REMITENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ESTADO DE PAGO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InfoTrackingModalComponent_div_13_div_29_Template, 20, 15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.primeraInfo.DEPORIGEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.primeraInfo.DEPDESTINO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 6, ctx_r0.primeraInfo.FECEVENTO, "dd-MM-yyyy hh:mm:ss a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.primeraInfo.REMITENTE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.primeraInfo.PAGO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.infoRastreo);
} }
function InfoTrackingModalComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cargando datos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function InfoTrackingModalComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gu\u00EDa no encontrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function InfoTrackingModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InfoTrackingModalComponent_div_14_div_1_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InfoTrackingModalComponent_div_14_div_2_Template, 4, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.flagResponseTrack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.flagResponseTrack);
} }
class InfoTrackingModalComponent {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
    }
    modalInfoTraking() {
        return this.document.body.classList.remove('modal-it');
    }
}
InfoTrackingModalComponent.ɵfac = function InfoTrackingModalComponent_Factory(t) { return new (t || InfoTrackingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
InfoTrackingModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoTrackingModalComponent, selectors: [["info-tracking-modal"]], inputs: { primeraInfo: "primeraInfo", infoRastreo: "infoRastreo", flagResponseTrack: "flagResponseTrack" }, decls: 16, vars: 2, consts: [[1, "all-modal-mit"], [1, "modal-info-traking"], [1, "ctn-mit"], [1, "modal-it"], [1, "content"], [1, "back"], [1, "back-content"], [1, "mit-head"], [1, "mit-title"], [1, "box-icon"], [1, "fa-solid", "fa-xmark", 3, "click"], [1, "mit-body"], ["class", "info-body", 4, "ngIf"], ["class", "loading-not-found", 4, "ngIf"], [1, "ctn-backdrop1"], [1, "info-body"], [1, "left"], [1, "right"], ["class", "box-tracking", 4, "ngFor", "ngForOf"], [1, "box-tracking"], [1, "top"], ["class", "tracking-img", "src", "assets/images/tracking-casita.png", "width", "35px", "height", "35px", 4, "ngIf"], ["class", "tracking-img", "src", "assets/images/tracking-camion.png", "width", "35px", "height", "35px", 4, "ngIf"], ["class", "tracking-img", "src", "assets/images/tracking-montacarga.png", "width", "35px", "height", "35px", 4, "ngIf"], ["class", "tracking-img", "src", "assets/images/tracking-cargador.png", "width", "35px", "height", "35px", 4, "ngIf"], [1, "row"], ["class", "letra-infotrack", 4, "ngIf"], [1, "date"], [1, "event"], [1, "info-evento"], ["src", "assets/images/tracking-casita.png", "width", "35px", "height", "35px", 1, "tracking-img"], ["src", "assets/images/tracking-camion.png", "width", "35px", "height", "35px", 1, "tracking-img"], ["src", "assets/images/tracking-montacarga.png", "width", "35px", "height", "35px", 1, "tracking-img"], ["src", "assets/images/tracking-cargador.png", "width", "35px", "height", "35px", 1, "tracking-img"], [1, "letra-infotrack"], [1, "loading-not-found"], ["class", "ctn-spinner", 4, "ngIf"], ["class", "file-not-found", 4, "ngIf"], [1, "ctn-spinner"], [1, "loader"], [1, "file-not-found"], [1, "fa-solid", "fa-file-circle-exclamation"]], template: function InfoTrackingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "article", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "RASTREA TU ENVIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoTrackingModalComponent_Template_i_click_11_listener() { return ctx.modalInfoTraking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InfoTrackingModalComponent_div_13_Template, 30, 9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InfoTrackingModalComponent_div_14_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoRastreo.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoRastreo.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.all-modal-mit[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  transform: scale(0);\n  transition: 0.4s ease;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .modal-info-traking[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.all-modal-mit[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%] {\n  position: static;\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 650px;\n  width: 100%;\n  height: 80vh;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%] {\n  transform: none;\n  overflow: visible;\n  width: 190px;\n  height: 254px;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 300ms;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.9333333333);\n  border-radius: 12px;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  background-color: hsl(0deg, 0%, 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]::before, .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \" \";\n  display: block;\n  width: 160px;\n  height: 160%;\n  background: linear-gradient(90deg, transparent, hsl(1deg, 100%, 55%), hsl(1deg, 100%, 55%), hsl(1deg, 100%, 55%), hsl(1deg, 100%, 55%), transparent);\n  animation: rotation_481 5000ms infinite linear;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98%;\n  height: 98%;\n  background-color: hsl(0deg, 0%, 100%);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 8vh;\n  padding: 0 20px;\n  margin: auto;\n  font-size: 1.5em;\n  color: hsl(0deg, 0%, 59%);\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 39% 59%;\n  margin-top: 8vh;\n  height: 70vh;\n  gap: 20px;\n  padding: 1%;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  background-color: hsl(1deg, 100%, 55%);\n  color: hsl(0deg, 0%, 100%);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px 0;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 60px 0;\n  margin-top: 10px;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  color: hsl(1deg, 100%, 55%);\n  font-weight: bold;\n  font-size: 1.4em;\n  align-items: center;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .info-body[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .box-tracking[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 98px;\n  margin: auto;\n  position: relative;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::before, .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 98px;\n  height: 10px;\n  background: hsla(0deg, 54%, 59%, 0.314);\n  position: absolute;\n  top: 110px;\n  left: 0;\n  border-radius: 50%;\n  animation: shadow324 0.5s linear infinite;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::after, .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: hsl(1deg, 100%, 55%);\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 4px;\n  animation: jump7456 0.5s linear infinite;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .ctn-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 63%;\n  color: hsl(1deg, 100%, 55%);\n  font-size: 1.5em;\n  left: 35%;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  color: hsl(1deg, 100%, 55%);\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12em;\n}\n.all-modal-mit[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-traking[_ngcontent-%COMP%]   .ctn-mit[_ngcontent-%COMP%]   .modal-it[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .back-content[_ngcontent-%COMP%]   .mit-body[_ngcontent-%COMP%]   .loading-not-found[_ngcontent-%COMP%]   .file-not-found[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n@keyframes jump7456 {\n  15% {\n    border-bottom-right-radius: 3px;\n  }\n  25% {\n    transform: translateY(9px) rotate(22.5deg);\n  }\n  50% {\n    transform: translateY(18px) scale(1, 0.9) rotate(45deg);\n    border-bottom-right-radius: 40px;\n  }\n  75% {\n    transform: translateY(9px) rotate(67.5deg);\n  }\n  100% {\n    transform: translateY(0) rotate(90deg);\n  }\n}\n@keyframes shadow324 {\n  0%, 100% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(1.2, 1);\n  }\n}\n@keyframes rotation_481 {\n  0% {\n    transform: rotateZ(0deg);\n    transform: rotateZ(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImluZm90cmFraW5nbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBLGlFQUFBO0FBQUE7OztDQUFBO0FBQUE7OztFQUFBLHNCQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsbUJBQUEsRUFBQSxNQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7RUFBQSxnQkFBQTtBQUFBO0FBQUE7Ozs7OztDQUFBO0FBQUE7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUEsRUFBQSxNQUFBO0VBQUEsV0FBQSxFQUFBLE1BQUE7RUFBQSxnQ0FBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG1CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLCtHQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBO0VBQUEsZUFBQTtBQUFBO0FBQUE7RUFBQSxXQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtFQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBOzs7OztFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLFVBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG9CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGFBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLFlBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsYUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxrQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztFQUFBLFNBQUE7QUFBQTtBQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7OztFQUFBLGdCQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7O0VB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dUp0QjtBQXJKb0I7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0Q5SUQ7RUMrSUMsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUF1SnRCO0FBcEprQjtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCRHpKQztFQzBKRCxnQkFBQTtFQUNBLFNBQUE7QUFzSnBCO0FBbkpnQjtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkRuS0c7QUN3VHJCO0FBcEprQjtFQUNFLGVBQUE7QUFzSnBCO0FBcEprQjtFQUNFLGNBQUE7QUFzSnBCO0FBeElBO0VBQ0U7SUFDRSwrQkFBQTtFQTJJRjtFQXpJQTtJQUNFLDBDQUFBO0VBMklGO0VBeklBO0lBQ0UsdURBQUE7SUFDQSxnQ0FBQTtFQTJJRjtFQXpJQTtJQUNFLDBDQUFBO0VBMklGO0VBeklBO0lBQ0Usc0NBQUE7RUEySUY7QUFDRjtBQXpJQTtFQUNFO0lBRUUsc0JBQUE7RUEwSUY7RUF4SUE7SUFDRSx3QkFBQTtFQTBJRjtBQUNGO0FBcklBO0VBQ0U7SUFDRSx3QkFBQTtJQUlBLDBCQUFBO0VBbUlGO0FBSUYiLCJmaWxlIjoiaW5mb3RyYWtpbmdtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmFsbC1tb2RhbC1taXQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XHJcbiAgLm1vZGFsLWluZm8tdHJha2luZyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi5hbGwtbW9kYWwtbWl0LCAubW9kYWwtaW5mby10cmFraW5nIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmN0bi1taXQge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLm1vZGFsLWl0IHtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICBoZWlnaHQ6IDI1NHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzAwMDAwMGVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgLmJhY2sge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAkY29sb3ItZ2xvYmFsLWNsYXJvLCAkY29sb3ItZ2xvYmFsLWNsYXJvLCAkY29sb3ItZ2xvYmFsLWNsYXJvLCAkY29sb3ItZ2xvYmFsLWNsYXJvLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpb25fNDgxIDUwMDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmFjay1jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk4JTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMzBweDtcclxuICAgICAgICAgICAgLm1pdC1oZWFkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDh2aDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRncmlzLWludGVuc287XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5taXQtYm9keSB7XHJcbiAgICAgICAgICAgICAgLmluZm8tYm9keSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzOSUgNTklO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHZoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICAgICAgICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBnYXA6IDYwcHggMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgLmJveC10cmFja2luZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZXZlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sb2FkaW5nLW5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAuY3RuLXNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzb21icmEtcm9qby1nbG9iYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hhZG93MzI0IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGp1bXA3NDU2IDAuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA2MyU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5maWxlLW5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBMb2FkaW5nXHJcbkBrZXlmcmFtZXMganVtcDc0NTYge1xyXG4gIDE1JSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDIyLjVkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4cHgpIHNjYWxlKDEsIC45KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwcHg7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoNjcuNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93MzI0IHtcclxuICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBNb2RhbCBDYXJkIEluZm8gVHJha2luZ1xyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uXzQ4MSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 624:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/solucion */ 4934);
/* harmony import */ var src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sugerencia */ 9299);
/* harmony import */ var src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/footer.service */ 2902);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);








class FooterComponent {
  constructor(_solucionesService) {
    this._solucionesService = _solucionesService;
    this.submitted = false;
    this.flagSoluciones = true;
    this.status = "";
    this.afuConfig = {
      multiple: false,
      maxSize: "5",
      uploadAPI: {
        url: _services_global__WEBPACK_IMPORTED_MODULE_4__.global.url + 'uploadadjuntos'
      },
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: true,
      attachPinText: 'Seleccione Archivo...'
    };
    this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
    this.sugerenciaModel = new src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_2__.Sugerencia(0, "", "", "", "", "1");
    this.check = 0;
  }

  ngOnInit() {}

  adjuntoUpload(e) {
    this.solucionModel.adjuntar_sol = '-';
    let res = JSON.parse(e.response);
    this.solucionModel.adjuntar_sol = res.file;
    this.flagSoluciones = false;
  }

  onSubmitSoluciones() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var i = 1; i < 3; i++) {
        yield _this.delay(1000);
      }

      if (_this.solucionModel.adjuntar_sol == 'No hay archivo') {
        _this._solucionesService.create(_this.solucionModel).subscribe(response => {
          if (response.status == 'success') {
            _this.solucionModel = response.soluciones;
            _this.check = 1;
            _this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
            _this.afuConfig.attachPinText = "Seleccione Archivo...";
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          console.log(error);
          _this.check = 2;
        });
      } else {
        while (_this.flagSoluciones) {
          yield _this.delay(1000); //console.log("esperando...")
        }

        _this._solucionesService.create(_this.solucionModel).subscribe(response => {
          if (response.status == 'success') {
            _this.solucionModel = response.soluciones;
            _this.check = 1;
            _this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
            _this.afuConfig.attachPinText = "Seleccione Archivo...";
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          console.log(error);
          _this.check = 2;
        });
      } //this.submitted = true;

    })();
  }

  onSubmitSugerencia() {
    //console.log(this.sugerenciaModel);
    this.submitted = true;

    this._solucionesService.createSugerencia(this.sugerenciaModel).subscribe(response => {
      if (response.status == 'success') {
        this.sugerenciaModel = response.sugerencias;
        this.check = 1;
        this.sugerenciaModel = new src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_2__.Sugerencia(0, "", "", "", "", "1");
      } else {
        this.status = 'error';
        this.check = 2;
      }
    }, error => {
      this.status = 'error';
      console.log(error);
      this.check = 2;
    });
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  close() {
    this.flagSoluciones = true;
    this.check = 0;
    window.location.reload(); //console.log("cerrado")
  }

}

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_3__.SolucionesService));
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_3__.SolucionesService])],
  decls: 51,
  vars: 0,
  consts: [[1, "ctn-footer"], [1, "top"], [1, "left"], ["routerLink", "/"], ["src", "assets/images/LOGO_TRAZO.png", "alt", ""], [1, "ctn-social-networks"], ["href", "https://www.facebook.com/MARVISUROFICIAL", "target", "_blank", 1, "facebook"], [1, "fa-brands", "fa-facebook-f"], ["href", "https://www.instagram.com/expreso_marvisur", "target", "_blank"], [1, "fa-brands", "fa-instagram"], ["href", "https://www.tiktok.com/@marvisur.oficial", "target", "_blank"], [1, "fa-brands", "fa-tiktok"], ["href", "https://www.linkedin.com/company/expreso-marvisur-e-i-r-l", "target", "_blank", 1, "final"], [1, "fa-brands", "fa-linkedin-in"], [1, "center"], ["routerLink", "seccion/preguntas-frecuentes"], [1, "fa-solid", "fa-angle-right"], ["routerLink", "seccion/soluciones-en-linea"], ["routerLink", "seccion/terminos&condiciones"], ["routerLink", "seccion/buzon-de-sugerencias"], [1, "right"], ["routerLink", "reclamaciones", 1, "reclamaciones"], ["routerLink", "reclamaciones"], ["src", "assets/images/libro-footer.png"], ["href", "tel:013311909", 1, "link-phone"], [1, "fa-solid", "fa-phone"], [1, "bottom"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 14)(16, "ul")(17, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Secciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li")(20, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Preguntas frecuentes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li")(24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Soluciones en l\u00EDnea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "li")(28, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " T\u00E9rminos y condiciones ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "li")(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Buz\u00F3n de sugerencias ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20)(36, "ul")(37, "li")(38, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Libro de reclamaciones ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li")(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li")(44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "980 660 690");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 26)(49, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " \u00A9 AREQUIPA EXPRESO MARVISUR E.I.R.L ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
  styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\nfooter[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  background-image: linear-gradient(to bottom, hsl(0deg, 0%, 100%), hsl(0deg, 100%, 71%), hsl(1deg, 100%, 32%));\n  margin-top: 250px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 60px 200px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 350px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .ctn-social-networks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .ctn-social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .ctn-social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  background-color: hsl(0deg, 0%, 100%);\n  color: hsl(1deg, 100%, 55%);\n  border-radius: 50%;\n  padding: 7px 10px;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .ctn-social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .ctn-social-networks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  color: hsl(0deg, 0%, 100%);\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 15px 0;\n  color: hsl(0deg, 0%, 100%);\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .reclamaciones[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .ctn-footer[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: hsl(0deg, 0%, 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVB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Sm9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCRHZEZjtBQ3lNVDtBQWpKd0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBbUo1QjtBQWpKd0I7RUFPSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQTZJNUI7QUF0SjRCO0VBQ0ksWUFBQTtBQXdKaEM7QUF0SjRCO0VBQ0ksWUFBQTtBQXdKaEM7QUFsSjRCO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQW9KaEM7QUE3SVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUErSVo7QUE5SVk7RUFDSSwwQkQzRlA7QUMyT1QiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFpbHdpbmQgKi9cclxuQHRhaWx3aW5kIGJhc2U7XHJcbkB0YWlsd2luZCBjb21wb25lbnRzO1xyXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xyXG5cclxuLyogSW1hZ2VzICovXHJcbiR1cmwtaW1nOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvXCI7XHJcbiR1cmwtaW1nLW5ld3M6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzL1wiO1xyXG4kdXJsLWltZy1zbGlkZTogXCIuLi8uLi8uLi9hc3NldHMvc2xpZGUvXCI7XHJcbiR1cmwtYXU6ICcuLi8uLi8uLi9hc3NldHMvbmV3aW1nLyc7XHJcblxyXG4vKiBTVkdzICovXHJcbiR1cmwtc3ZnOiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy8nO1xyXG5cclxuLyogVGV4dG8gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFtZXJ0aGE7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2FtZXJ0aGEtcGVyc29uYWwtdXNlLW9ubHkudHRmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQmxhY2tJdGFsaWMub3RmJyk7XHJcbn1cclxuXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhbmNvOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4kbmVncm86IGhzbCgwLCAwJSwgMCUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvOiBoc2woMSwgMTAwJSwgNTUlKTtcclxuJGFuYXJhbmphZG86IGhzbCgzOSwgMTAwJSwgNTAlKTtcclxuJGdyaXM6IGhzbCgwLCAwJSwgODAlKTtcclxuJHZlcmRlOiBoc2woMTI4LCA1MSUsIDQ5JSk7XHJcbiRhenVsOiBoc2woMjM5LCAxMDAlLCA1MCUpO1xyXG4kY2VsZXN0ZTogaHNsKDIwNywgOTAlLCA1NCUpO1xyXG4kc29tYnJhLXJvam8tZ2xvYmFsOiBoc2xhKDAsIDU0JSwgNTklLCAwLjMxNCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMjogaHNsKDAsIDEwMCUsIDcxJSk7XHJcbiRyb3NhZG8tYm9yZGU6IGhzbCgzNDksIDEwMCUsIDY5JSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMi10cmFuc3BhcmVudGU6IGhzbGEoMCwgMTAwJSwgODAlLCAwLjU0OCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMzogaHNsKDM1OCwgODAlLCA1MCUpO1xyXG4kY29sb3ItZ2xvYmFsLW9zY3VybzogaHNsKDEsIDEwMCUsIDMyJSk7XHJcbiRhenVsLWNsYXJvOiBoc2woMjIzLCA4MiUsIDU2JSk7XHJcbiRhenVsLW9zY3VybzogaHNsKDIyMywgMTAwJSwgMzAlKTtcclxuJGNlbGVzdGUtY2xhcm86IGhzbCgyMDcsIDEwMCUsIDY5JSk7XHJcbiR2ZXJkZS1jbGFybzogaHNsKDEzMSwgNzIlLCA1NiUpO1xyXG4kdmVyZGUtb3NjdXJvOiBoc2woMTMxLCAxMDAlLCAyMiUpO1xyXG4kZ3Jpcy1jOiBoc2woMCwgMCUsIDkxJSk7XHJcbiRncmlzLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAwJSwgODAlLCAwLjYzNSk7XHJcbiRncmlzLWludGVuc286IGhzbCgwLCAwJSwgNTklKTtcclxuJGJrZzogaHNsKDM0MCwgMTAlLCA2JSk7XHJcbiRia2ctY2FyZDogaHNsKDAsIDAlLCAxMyUpO1xyXG4kY29sb3ItbGN2LW5meTogaHNsKDIyNSwgNzMlLCA1NyUpO1xyXG4kY29sb3ItbGN2LW5meS1jbGFybzogaHNsKDIyNSwgMTAwJSwgNzUlKTtcclxuLyogUmVkZXMgc29jaWFsZXMqL1xyXG4kZmFjZWJvb2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRhenVsLCAkYXp1bC1jbGFybywgJGNlbGVzdGUsICRjZWxlc3RlLWNsYXJvLCAkYmxhbmNvKTtcclxuJGluc3RhZ3JhbTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZDREUzMCwgI0U5NzEyQSwgI0QyMzEzQiwgI0FFNDE5OCwgIzc1NDAxQSwgIzU0NDNBOCk7XHJcbiRsaW5rZWRpbjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwNzdCNSwgIzVmZDJmZik7XHJcbiR0aWt0b2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNjYzA4MmMsICMyNTAwMDcsICRuZWdybyk7XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbW9kYWwtd3NwIHtcclxuICAud2hhdHNhcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtY2xhcm87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYm90IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLWNsYXJvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLW9zY3VybztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwdmg7XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzLFxyXG4gIC5mb25kb25lZ3JvaW5pY2lvLFxyXG4gIC5zZXJ2aWNlcyxcclxuICAubmV3cyxcclxuICAubW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtb3NjdXJvO1xyXG4gIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1pdCxcclxuYm9keS5tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAuY3RuLWJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zMik7XHJcbiAgfVxyXG59XHJcbmJvZHkubW9kYWwtaXQgLmFsbC1tb2RhbC1taXQsXHJcbmJvZHkubW9kYWwtbGN2IC5hbGwtbW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSAuYWxsLW1vZGFsLW5meSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJGJsYW5jbywgJGNvbG9yLWdsb2JhbC1jbGFyby0yLCAkY29sb3ItZ2xvYmFsLW9zY3Vybyk7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIC5jdG4tZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAgICAgLnRvcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBnYXA6IDYwcHggMjAwcHg7XHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmN0bi1zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogLjYgZWFzZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAuNiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybSA6IHNjYWxlKDEuMik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtIDogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS1pbnN0YWdyYW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNnMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAuNiBlYXNlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAuNiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA6IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybSA6IHNjYWxlKDEuMik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtIDogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVjbGFtYWNpb25lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC42cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAuNiBlYXNlOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjYgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtIDogc2NhbGUoMS4yKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybSA6IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybSA6IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 7725:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




// import { AppComponent } from '../../../app.component';
class HeaderComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.isMenuOpen = false;
        this.temp = 3;
        this.numero = 0;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    onActivate(event) {
        window.scrollTo(0, 0);
    }
    set changeNumero(a) {
    }
    ngOnInit() {
    }
    metodo1() {
        this.temp = 1;
    }
    metodo2() {
        this.temp = 2;
    }
    cambioConocenos() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 59, vars: 5, consts: [[1, "ctn-header"], [1, "ctn-logo"], ["routerLink", ""], ["src", "assets/images/logo_pb.png", 1, "header__logo"], [1, "card-general"], ["routerLink", "", 1, "home"], ["routerLink", "nosotros", "routerLinkActive", "active"], ["routerLink", "seccion/", "routerLinkActive", "active", 1, "secciones"], [1, "fa-solid", "fa-chevron-down"], [1, "submenu"], ["routerLink", "seccion/preguntas-frecuentes"], [1, "fa-solid", "fa-angle-right"], ["routerLink", "seccion/soluciones-en-linea"], ["routerLink", "seccion/terminos&condiciones"], ["routerLink", "seccion/buzon-de-sugerencias"], ["routerLink", "seccion/publicaciones"], ["routerLink", "sucursales", "routerLinkActive", "active"], ["routerLink", "cotizacion", "routerLinkActive", "active"], ["routerLink", "oportunidad", "routerLinkActive", "active"], [1, "right", "next-center"], ["href", "https://www.facebook.com/MARVISUROFICIAL", "target", "_blank"], [1, "fa-brands", "fa-facebook-f"], ["href", "https://www.instagram.com/expreso_marvisur", "target", "_blank"], [1, "fa-brands", "fa-instagram"], ["href", "https://www.tiktok.com/@marvisur.oficial", "target", "_blank"], [1, "fa-brands", "fa-tiktok"], ["href", "https://www.linkedin.com/company/expreso-marvisur-e-i-r-l", "target", "_blank", 1, "final"], [1, "fa-brands", "fa-linkedin-in"], [1, "btn-menu", 3, "click"], [1, "router", 3, "activate"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav")(6, "ul", 4)(7, "li")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Secciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 9)(18, "li")(19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Preguntas Frecuentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Soluciones en Linea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " T\u00E9rminos y Condiciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Buz\u00F3n de Sugerencias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Publicaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sucursales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cotizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Oportunidad Laboral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19)(48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_56_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "router-outlet", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function HeaderComponent_Template_router_outlet_activate_58_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa-solid ", ctx.isMenuOpen ? "fa-xmark" : "fa-bars", "");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: hsl(0deg, 0%, 100%);\n  position: fixed;\n  width: 100%;\n  height: 10vh;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 5px hsl(0deg, 0%, 80%);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  width: 100%;\n  margin: auto 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .ctn-logo[_ngcontent-%COMP%] {\n  width: 160px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .ctn-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  background-color: hsl(1deg, 100%, 55%);\n  border-radius: 50%;\n  color: hsl(0deg, 0%, 100%);\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 2px;\n  font-size: 1.7em;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%]:hover {\n  background-color: hsl(0deg, 0%, 100%);\n  color: hsl(1deg, 100%, 55%);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 40px;\n  transition: all 0.6s ease-in-out;\n  font-size: 1.12em;\n  font-weight: 600;\n  position: relative;\n  display: inline-block;\n  letter-spacing: 0.1em;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.2em;\n  left: 0;\n  width: 100%;\n  height: 0.1em;\n  border-radius: 20px;\n  background-color: hsl(1deg, 100%, 55%);\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.3s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: hsl(1deg, 100%, 55%);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -0.2em;\n  left: 0;\n  width: 100%;\n  height: 0.1em;\n  border-radius: 20px;\n  background-color: hsl(1deg, 100%, 55%);\n  transform: scaleX(1);\n  transform-origin: left;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .secciones[_ngcontent-%COMP%]::before {\n  height: 4px;\n  bottom: -5px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::before {\n  transform: scale(1, 1);\n  visibility: visible;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n  height: 230px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: hsl(1deg, 100%, 55%);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]::before {\n  visibility: visible;\n  transform: scale(1, 1);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  display: inline;\n  width: 240px;\n  height: 0;\n  left: -12px;\n  top: 24px;\n  margin-top: 1px;\n  background-color: hsl(1deg, 100%, 55%);\n  line-height: 15px;\n  box-sizing: border-box;\n  transition: height 0.3s ease-in-out;\n  transition-delay: 0.1s;\n  border: 1px solid hsl(0deg, 0%, 100%);\n  border-radius: 15px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n  text-align: right;\n  margin-left: 20px;\n  margin-top: 20px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  -moz-transform: scale(1.08);\n  -webkit-transform: scale(1.08);\n  -o-transform: scale(1.08);\n  -ms-transform: scale(1.08);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: hsl(0deg, 0%, 100%);\n  margin-top: 30px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  display: none;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: hsl(0deg, 0%, 100%);\n  border-radius: 50%;\n  padding: 7px 10px;\n  transition: 0.6s ease;\n  -moz-transition: 0.6 ease;\n  -webkit-transition: 0.6 ease;\n  -o-transition: 0.6 ease;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  -moz-transform: scale(1.2);\n  -webkit-transform: scale(1.2);\n  -o-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-facebook-f[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top right, hsl(239deg, 100%, 50%), hsl(223deg, 82%, 56%), hsl(207deg, 90%, 54%), hsl(207deg, 100%, 69%), hsl(0deg, 0%, 100%));\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-tiktok[_ngcontent-%COMP%] {\n  background-image: radial-gradient(circle, #cc082c, #250007, hsl(0deg, 0%, 0%));\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-linkedin-in[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top right, #0077B5, #5fd2ff);\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top right, #FCDE30, #E9712A, #D2313B, #AE4198, #75401A, #5443A8);\n  font-weight: bold;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .final[_ngcontent-%COMP%] {\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .btn-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 1300px) {\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .btn-menu[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    display: block;\n    background-color: transparent;\n    border-color: hsl(1deg, 100%, 55%);\n    cursor: pointer;\n    border-radius: 5px;\n    outline: none;\n    border: none;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .btn-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2em;\n    font-weight: 600;\n    color: hsl(1deg, 100%, 55%);\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: fixed;\n    height: auto;\n    top: 10vh;\n    width: 360px;\n    right: -360px;\n    transition: all 0.4s ease-in-out;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    margin-left: 0;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 15;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .card-general[_ngcontent-%COMP%] {\n    border-top: 1px solid hsl(1deg, 100%, 55%);\n    border-bottom: 1px solid hsl(1deg, 100%, 55%);\n    padding: 40px 0;\n    background-color: hsl(0deg, 0%, 100%);\n  }\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   nav.is-open[_ngcontent-%COMP%] {\n    transition: all 0.4s ease-in-out;\n    display: block;\n    position: absolute;\n    width: 100%;\n    right: 0;\n  }\n}\n@media only screen and (max-width: 590px) {\n  header[_ngcontent-%COMP%]   .ctn-header[_ngcontent-%COMP%]   .next-center[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVB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QUFBO0VBQ0EsdUJBQUE7QUFpSlY7QUFoSlU7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBa0paO0FBaEpVO0VBQ0Usa0tEbklEO0FDcVJYO0FBaEpVO0VBQ0UsOEVEbklIO0FDcVJUO0FBaEpVO0VBQ0UsaUVEdklEO0FDeVJYO0FBL0lRO0VBQ0UscUdENUlFO0VDNklGLGlCQUFBO0FBaUpWO0FBOUlNO0VBQ0UsU0FBQTtBQWdKUjtBQTdJSTtFQUNFLGFBQUE7QUErSU47QUExSUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLDZCQUFBO0lBQ0Esa0NEM0xlO0lDNExmLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VBNElKO0VBM0lJO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkRwTWE7RUNpVm5CO0VBMUlFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxnQ0FBQTtFQTRJSjtFQTNJSTtJQUNFLHNCQUFBO0VBNklOO0VBNUlNO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0VBOElSO0VBN0lRO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBK0lWO0VBOUlVO0lBQ0UsU0FBQTtFQWdKWjtFQTdJUTtJQUNFLGNBQUE7RUErSVY7RUEzSUk7SUFDRSwwQ0FBQTtJQUNBLDZDQUFBO0lBQ0EsZUFBQTtJQUNBLHFDRHJPQztFQ2tYUDtFQTNJSTtJQUNFLGdDQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFFBQUE7RUE2SU47QUFDRjtBQXpJQTtFQUVJO0lBQ0UsYUFBQTtFQTBJSjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLy8gRGVza3RvcFxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICB6LWluZGV4OiAxMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICRncmlzO1xyXG4gIC5jdG4taGVhZGVyIHtcclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmN0bi1sb2dvIHtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAucGF5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAvLyBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAtMC4yZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuMWVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTAuMmVtO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLjFlbTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWNjaW9uZXMge1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAuc3VibWVudSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VibWVudSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogLTEycHg7XHJcbiAgICAgICAgICAgIHRvcDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibGFuY287XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xyXG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC42IGVhc2U7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjYgZWFzZTtcclxuICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAwLjYgZWFzZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuNiBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjYgZWFzZTtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuNiBlYXNlO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmZhLWZhY2Vib29rLWYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkZmFjZWJvb2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmZhLXRpa3RvayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICR0aWt0b2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmZhLWxpbmtlZGluLWluIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogJGxpbmtlZGluO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtaW5zdGFncmFtIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICRpbnN0YWdyYW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZpbmFsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tbWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vIE1vYmlsZVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gIGhlYWRlciAuY3RuLWhlYWRlciB7XHJcbiAgICAuYnRuLW1lbnUge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgaSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB0b3A6IDEwdmg7XHJcbiAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgcmlnaHQ6IC0zNjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxNTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtZ2VuZXJhbCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgIH1cclxuICAgICAgJi5pcy1vcGVuIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTBweCkge1xyXG4gIGhlYWRlciAuY3RuLWhlYWRlciB7XHJcbiAgICAubmV4dC1jZW50ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3346:
/*!************************************************************************!*\
  !*** ./src/app/components/oportunidad/LoadCVModal/loadcv.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadCVComponent": () => (/* binding */ LoadCVComponent),
/* harmony export */   "SendMessageModalLCV": () => (/* binding */ SendMessageModalLCV)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_cv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/cv */ 6359);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global */ 3913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_oportunidad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/oportunidad.service */ 1344);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-file-uploader */ 9580);











function LoadCVComponent_ul_17_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const word_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](word_r4);
  }
}

function LoadCVComponent_ul_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.convocatoriaSeleccionada.conocimientos);
  }
}

function LoadCVComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoadCVComponent_ul_17_li_1_Template, 3, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoadCVComponent_ul_17_li_2_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.words);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.words.length == 1);
  }
}

function LoadCVComponent_ul_26_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const funciones_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](funciones_r7);
  }
}

function LoadCVComponent_ul_26_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.convocatoriaSeleccionada.funciones, " ");
  }
}

function LoadCVComponent_ul_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoadCVComponent_ul_26_li_1_Template, 3, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoadCVComponent_ul_26_li_2_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.funcionesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.funcionesList.length == 1);
  }
}

function SendMessageModalLCV_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Se ingres\u00F3 correctamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SendMessageModalLCV_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingresando datos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SendMessageModalLCV_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No se envi\u00F3, verifique los datos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class LoadCVComponent {
  constructor(document, dialog, _oportunidadService) {
    this.document = document;
    this.dialog = dialog;
    this._oportunidadService = _oportunidadService;
    this.afuConfig = {
      multiple: false,
      maxSize: "5",
      uploadAPI: {
        url: _services_global__WEBPACK_IMPORTED_MODULE_2__.global.url + 'uploadcv'
      },
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'Adjuntar CV'
    };
  }

  CvUpload(e) {
    let res = JSON.parse(e.response);
    this.cvModel.cv = res.file;
    this.flagCvUp = false;
  }

  sendOpenCV() {
    this.dialog.open(SendMessageModalLCV, {
      data: [{
        check: this.check
      }]
    });
  }

  cargarCV() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cvModel.lugar = _this.convocatoriaSeleccionada.lugar;

      for (let i = 0; i < 10; i++) {
        yield _this.delay(100);
      }

      if (!_this.flagCvUp) {
        _this._oportunidadService.create(_this.cvModel).subscribe(response => {
          if (response.status === 'success') {
            _this.cvModel = new src_app_models_cv__WEBPACK_IMPORTED_MODULE_1__.cv(0, '', '9999999', '', '', '', '0', '', 'sin puesto', '');
            _this.check = 1;

            _this.sendOpenCV();
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          _this.check = 2;
        });
      } else {
        _this.check = 2;

        _this.sendOpenCV();
      }
    })();
  }

  ngOnInit() {}

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  closeModal() {
    return this.document.body.classList.remove('modal-lcv');
  }

}

LoadCVComponent.ɵfac = function LoadCVComponent_Factory(t) {
  return new (t || LoadCVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_oportunidad_service__WEBPACK_IMPORTED_MODULE_3__.OportunidadService));
};

LoadCVComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoadCVComponent,
  selectors: [["app-loadcv"]],
  inputs: {
    convocatoriaSeleccionada: "convocatoriaSeleccionada",
    words: "words",
    funcionesList: "funcionesList",
    cvModel: "cvModel",
    flagCvUp: "flagCvUp",
    check: "check",
    status: "status"
  },
  decls: 52,
  vars: 7,
  consts: [[1, "all-modal-lcv"], [1, "modal-info-lcv"], [1, "ctn-modal-lcv"], [1, "modal-lcv"], [1, "announcement"], [1, "content-announ"], [1, "li-ge"], [4, "ngIf"], [1, "upload-cv"], [2, "border", "none !important", 3, "config", "ApiResponse"], [1, "modal-footer"], ["data-toggle", "modal", "data-dismiss", "modal", "data-target", "#modalRespuesta", 1, "send-cv", 3, "click"], [1, "svg-wrapper-1"], [1, "svg-wrapper"], ["height", "24", "width", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z", "fill", "currentColor"], [1, "mdl-close-lcv", 3, "click"], [1, "text"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"], [1, "ctn-backdrop1"], [4, "ngFor", "ngForOf"]],
  template: function LoadCVComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "article", 1)(2, "div", 2)(3, "div", 3)(4, "article", 4)(5, "div", 5)(6, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul")(9, "li", 6)(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Sede");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 6)(15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Habilidades");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoadCVComponent_ul_17_Template, 3, 2, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 6)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Formaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li", 6)(24, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Funciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LoadCVComponent_ul_26_Template, 3, 2, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 6)(28, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Vacantes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "li", 8)(33, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Cargar CV: M\u00E1ximo 2 MB");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "angular-file-uploader", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ApiResponse", function LoadCVComponent_Template_angular_file_uploader_ApiResponse_35_listener($event) {
        return ctx.CvUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 10)(37, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoadCVComponent_Template_button_click_37_listener() {
        return ctx.cargarCV();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 12)(39, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "path", 15)(42, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoadCVComponent_Template_button_click_45_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "path", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "div", 22);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.convocatoriaSeleccionada.cargo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.convocatoriaSeleccionada.lugar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.words.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.convocatoriaSeleccionada.estudios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.funcionesList.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.convocatoriaSeleccionada.vacantes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.afuConfig);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__.AngularFileUploaderComponent],
  styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.all-modal-lcv[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  transform: scale(0);\n  transition: 0.4s ease;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .modal-info-lcv[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.all-modal-lcv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%] {\n  position: static;\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  max-width: 950px;\n  width: 100%;\n  height: 80vh;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%] {\n  transform: none;\n  overflow: visible;\n  width: 190px;\n  height: 254px;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 300ms;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.9333333333);\n  border-radius: 12px;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: hsl(0deg, 0%, 100%);\n  border: 2px solid hsl(225deg, 73%, 57%);\n  box-shadow: 2px 2px 15px hsl(0deg, 0%, 80%) inset;\n  color: hsl(0deg, 0%, 0%);\n  overflow-y: auto;\n  padding: 40px;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  color: hsl(1deg, 100%, 55%);\n  font-style: italic;\n  text-align: center;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .li-ge[_ngcontent-%COMP%], .all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .li-ge[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .li-ge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .li-ge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: hsl(1deg, 100%, 55%);\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   angular-file-uploader[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   angular-file-uploader[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  border: 1px solid blue !important;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .upload-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: hsl(0deg, 0%, 0%) !important;\n  color: hsl(0deg, 0%, 0%);\n  position: relative;\n  right: 0;\n  top: 0;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]:hover, .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 15px hsl(225deg, 73%, 57%) inset;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 20px;\n  background: hsl(225deg, 73%, 57%);\n  color: white;\n  padding: 0.7em 1em;\n  padding-left: 0.9em;\n  display: flex;\n  align-items: center;\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 0.3em;\n  transition: all 0.3s ease-in-out;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  transform-origin: center center;\n  transition: transform 0.3s ease-in-out;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%] {\n  animation: fly-1 0.6s ease-in-out infinite alternate;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(1.2em) rotate(45deg) scale(1.1);\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(5em);\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:active, .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .modal-lcv[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  width: 150px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  background: red;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\n  background: #e62222;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%], .all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 200ms;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  transform: translateX(35px);\n  color: white;\n  font-weight: bold;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  border-left: 1px solid #c41b1b;\n  transform: translateX(110px);\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  fill: #eee;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover, .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover {\n  background: #ff3636;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  width: 150px;\n  border-left: none;\n  transform: translateX(0);\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:focus, .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.all-modal-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:active   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-lcv[_ngcontent-%COMP%]   .ctn-modal-lcv[_ngcontent-%COMP%]   .mdl-close-lcv[_ngcontent-%COMP%]:active   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n@keyframes fly-1 {\n  from {\n    transform: translateY(0.1em);\n  }\n  to {\n    transform: translateY(-0.1em);\n  }\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(225deg, 100%, 75%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(225deg, 73%, 57%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsImxvYWRjdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVB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QUEvSUk7RUFDRSxrQkFBQTtBQWlKTjtBQTlJSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBZ0pOO0FBN0lJO0VBQ0UsYUFBQTtBQStJTjtBQTVJSTtFQUNFLHFCQUFBO0FBOElOO0FBeklBO0VBQ0U7SUFDRSw0QkFBQTtFQTRJRjtFQXpJQTtJQUNFLDZCQUFBO0VBMklGO0FBQ0Y7QUF4SUEsZUFBQTtBQUNBLFVBQUE7QUFDQTtFQUNFLFVBQUE7QUEwSUY7QUF4SUEsVUFBQTtBQUNBO0VBQ0UsdUJBQUE7QUEySUY7QUF6SUEsV0FBQTtBQUNBO0VBQ0Usa0NEOUtvQjtFQytLcEIsbUJBQUE7QUE0SUY7QUEzSUU7RUFDRSxpQ0RsTFk7QUMrVGhCIiwiZmlsZSI6ImxvYWRjdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmFsbC1tb2RhbC1sY3Yge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XHJcbiAgLm1vZGFsLWluZm8tbGN2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFsbC1tb2RhbC1sY3YsIC5tb2RhbC1pbmZvLWxjdiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5jdG4tbW9kYWwtbGN2IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA5NTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLm1vZGFsLWxjdiB7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgaGVpZ2h0OiAyNTRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgLmFubm91bmNlbWVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggIzAwMDAwMGVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgLmNvbnRlbnQtYW5ub3VuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1sY3YtbmZ5O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4ICRncmlzIGluc2V0O1xyXG4gICAgICAgICAgY29sb3I6ICRuZWdybztcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgLmxpLWdlLFxyXG4gICAgICAgICAgICAudXBsb2FkLWN2IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHVsIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHggO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIGIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC51cGxvYWQtY3Yge1xyXG4gICAgICAgICAgICAgIC5idXR0b24gLmJ1dHRvbi13cmFwcGVyIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGFuZ3VsYXItZmlsZS11cGxvYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZWdybyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRuZWdybztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCAkY29sb3ItbGN2LW5meSBpbnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZW5kLWN2IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWxjdi1uZnk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC43ZW0gMWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuOWVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGZseS0xIDAuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIgc3ZnIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4yZW0pIHJvdGF0ZSg0NWRlZykgc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWRsLWNsb3NlLWxjdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtNTBweDtcclxuICAgICAgLy8gbWFyZ2luLXRvcDogLTIwMHB4O1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlNjIyMjI7XHJcbiAgICB9XHJcbiAgICAubWRsLWNsb3NlLWxjdixcclxuICAgIC5tZGwtY2xvc2UtbGN2IHNwYW4ge1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICAgIH1cclxuICAgIC5tZGwtY2xvc2UtbGN2IC50ZXh0IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1cHgpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLm1kbC1jbG9zZS1sY3YgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2M0MWIxYjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExMHB4KTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWRsLWNsb3NlLWxjdiBzdmcge1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgZmlsbDogI2VlZTtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5tZGwtY2xvc2UtbGN2OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmMzYzNjtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5tZGwtY2xvc2UtbGN2OmhvdmVyIC50ZXh0IHtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLm1kbC1jbG9zZS1sY3Y6aG92ZXIgLmljb24ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWRsLWNsb3NlLWxjdjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWRsLWNsb3NlLWxjdjphY3RpdmUgLmljb24gc3ZnIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHktMSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4xZW0pO1xyXG4gIH1cclxuICBcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMWVtKTtcclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxjdi1uZnktY2xhcm87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1sY3YtbmZ5O1xyXG4gIH1cclxufSJdfQ== */"]
});
class SendMessageModalLCV {
  constructor(data) {
    this.data = data;
    this.check = data[0].check;
  }

}

SendMessageModalLCV.ɵfac = function SendMessageModalLCV_Factory(t) {
  return new (t || SendMessageModalLCV)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};

SendMessageModalLCV.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SendMessageModalLCV,
  selectors: [["app-sendmessage"]],
  decls: 11,
  vars: 3,
  consts: [["mat-dialog-content", ""], ["style", "color: green; font-weight: bold;", 4, "ngIf"], [4, "ngIf"], ["style", "color: red; font-weight: bold;", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], [2, "color", "green", "font-weight", "bold"], [2, "color", "red", "font-weight", "bold"]],
  template: function SendMessageModalLCV_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SendMessageModalLCV_span_3_Template, 2, 0, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SendMessageModalLCV_span_5_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SendMessageModalLCV_span_7_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cerrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 2429:
/*!********************************************************************************!*\
  !*** ./src/app/components/oportunidad/NotFindYetModal/notfindyet.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFindYetComponent": () => (/* binding */ NotFindYetComponent),
/* harmony export */   "SendMessageModalNFY": () => (/* binding */ SendMessageModalNFY)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_cv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/cv */ 6359);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/global */ 3913);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_oportunidad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/oportunidad.service */ 1344);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-file-uploader */ 9580);












function SendMessageModalNFY_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Se ingres\u00F3 correctamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SendMessageModalNFY_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ingresando datos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SendMessageModalNFY_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No se envi\u00F3, verifique los datos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class NotFindYetComponent {
  constructor(document, dialog, _oportunidadService) {
    this.document = document;
    this.dialog = dialog;
    this._oportunidadService = _oportunidadService;
    this.afuConfig = {
      multiple: false,
      maxSize: "5",
      uploadAPI: {
        url: _services_global__WEBPACK_IMPORTED_MODULE_2__.global.url + 'uploadcv'
      },
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'Adjuntar CV'
    };
  }

  CvUpload(e) {
    let res = JSON.parse(e.response);
    this.cvModel.cv = res.file;
    this.flagCvUp = false;
  }

  sendOpenCV() {
    this.dialog.open(SendMessageModalNFY, {
      data: [{
        check: this.check
      }]
    });
  }

  singleNumber(e) {
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57;
  }

  cargarCV() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cvModel.lugar = _this.convocatoriaSeleccionada.lugar;

      for (let i = 0; i < 10; i++) {
        yield _this.delay(100);
      }

      if (!_this.flagCvUp) {
        _this._oportunidadService.create(_this.cvModel).subscribe(response => {
          if (response.status === 'success') {
            _this.cvModel = new src_app_models_cv__WEBPACK_IMPORTED_MODULE_1__.cv(0, '', '9999999', '', '', '', '0', '', 'sin puesto', '');
            _this.check = 1;

            _this.sendOpenCV();
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          _this.check = 2;
        });
      } else {
        _this.check = 2;

        _this.sendOpenCV();
      }
    })();
  }

  ngOnInit() {}

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  closeModal() {
    return this.document.body.classList.remove('modal-nfy');
  }

}

NotFindYetComponent.ɵfac = function NotFindYetComponent_Factory(t) {
  return new (t || NotFindYetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_oportunidad_service__WEBPACK_IMPORTED_MODULE_3__.OportunidadService));
};

NotFindYetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotFindYetComponent,
  selectors: [["app-notfindyet"]],
  inputs: {
    convocatoriaSeleccionada: "convocatoriaSeleccionada",
    words: "words",
    funcionesList: "funcionesList",
    cvModel: "cvModel",
    flagCvUp: "flagCvUp",
    check: "check",
    status: "status"
  },
  decls: 63,
  vars: 7,
  consts: [[1, "all-modal-nfy"], [1, "modal-info-nfy"], [1, "ctn-modal-nfy"], [1, "modal-nfy"], [1, "announcement"], [1, "content-announ"], ["CurriculumForm", "ngForm"], ["required", "", "type", "text", "name", "nombresyape", "autocomplete", "off", 1, "input", 3, "ngModel", "ngModelChange"], ["nombresyape", "ngModel"], [1, "user-label"], ["required", "", "type", "text", "name", "email", "autocomplete", "off", 1, "input", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "sub-group"], ["required", "", "type", "text", "name", "edad", "autocomplete", "off", "maxlength", "2", 1, "input", 3, "ngModel", "ngModelChange", "keypress"], ["edad", "ngModel"], ["required", "", "type", "text", "name", "telefono", "autocomplete", "off", "maxlength", "9", 1, "input", 3, "ngModel", "ngModelChange", "keypress"], ["telefono", "ngModel"], ["required", "", "type", "text", "name", "direccion", "autocomplete", "off", 1, "input", 3, "ngModel", "ngModelChange"], ["direccion", "ngModel"], ["required", "", "type", "text", "name", "expectativa", "autocomplete", "off", 1, "input", 3, "ngModel", "ngModelChange", "keypress"], ["expectativa", "ngModel"], [1, "form-group"], ["for", "file", 1, "form-label"], [3, "config", "ApiResponse"], [1, "modal-footer"], [1, "send-cv", 3, "click"], [1, "svg-wrapper-1"], [1, "svg-wrapper"], ["height", "24", "width", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z", "fill", "currentColor"], [1, "mdl-close-nfy", 3, "click"], [1, "text"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"], [1, "ctn-backdrop1"]],
  template: function NotFindYetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "article", 1)(2, "div", 2)(3, "div", 3)(4, "article", 4)(5, "div", 5)(6, "form", null, 6)(8, "ul")(9, "li")(10, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.cvModel.nombresyape = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Apellidos y Nombres");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li")(15, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.cvModel.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Correo Electr\u00F3nico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li")(20, "ul", 12)(21, "li")(22, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.cvModel.edad = $event;
      })("keypress", function NotFindYetComponent_Template_input_keypress_22_listener($event) {
        return ctx.singleNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Edad");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li")(27, "input", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.cvModel.telefono = $event;
      })("keypress", function NotFindYetComponent_Template_input_keypress_27_listener($event) {
        return ctx.singleNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Celular");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li")(32, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.cvModel.direccion = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Direcci\u00F3n Actual");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li")(37, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NotFindYetComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.cvModel.expectativaSalarial = $event;
      })("keypress", function NotFindYetComponent_Template_input_keypress_37_listener($event) {
        return ctx.singleNumber($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Expectativa Salarial");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21)(42, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Cargar CV: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "M\u00E1ximo 2 MB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "angular-file-uploader", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ApiResponse", function NotFindYetComponent_Template_angular_file_uploader_ApiResponse_46_listener($event) {
        return ctx.CvUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 24)(48, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotFindYetComponent_Template_button_click_48_listener() {
        return ctx.cargarCV();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 26)(50, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "path", 29)(53, "path", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NotFindYetComponent_Template_button_click_56_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Salir");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "svg", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "path", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "div", 36);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.nombresyape);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.edad);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.telefono);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.direccion);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.cvModel.expectativaSalarial);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.afuConfig);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, angular_file_uploader__WEBPACK_IMPORTED_MODULE_8__.AngularFileUploaderComponent],
  styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.all-modal-nfy[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  transform: scale(0);\n  transition: 0.4s ease;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .modal-info-nfy[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.all-modal-nfy[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%] {\n  position: static;\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  max-width: 550px;\n  width: 100%;\n  height: 80vh;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%] {\n  transform: none;\n  overflow: visible;\n  width: 190px;\n  height: 254px;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 300ms;\n  box-shadow: 0px 0px 10px 1px hsl(0deg, 0%, 0%);\n  border-radius: 12px;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: hsl(0deg, 0%, 100%);\n  border: 2px solid hsl(225deg, 73%, 57%);\n  box-shadow: 2px 2px 15px hsl(0deg, 0%, 80%) inset;\n  color: hsl(0deg, 0%, 0%);\n  overflow-y: auto;\n  padding: 40px;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 30px 1px;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: solid 1.5px #9e9e9e;\n  border-radius: 1rem;\n  background: transparent;\n  padding: 1rem;\n  font-size: 1rem;\n  color: hsl(0deg, 0%, 0%);\n  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n  height: 30px;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-label[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-label[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  color: hsl(0deg, 0%, 0%);\n  pointer-events: none;\n  transform: translateY(0.2rem);\n  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus, .all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid {\n  outline: none;\n  border: 1.5px solid #1a73e8;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  transform: translateY(-50%) scale(0.8);\n  background-color: hsl(0deg, 0%, 100%);\n  padding: 0 0.2em;\n  color: #2196f3;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-group[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .sub-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: auto;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]:hover, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 15px hsl(225deg, 73%, 57%) inset;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 20px;\n  background: hsl(225deg, 73%, 57%);\n  color: white;\n  padding: 0.7em 1em;\n  padding-left: 0.9em;\n  display: flex;\n  align-items: center;\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 0.3em;\n  transition: all 0.3s ease-in-out;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  transform-origin: center center;\n  transition: transform 0.3s ease-in-out;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%] {\n  animation: fly-1 0.6s ease-in-out infinite alternate;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(1.2em) rotate(45deg) scale(1.1);\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(5em);\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:active, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   .send-cv[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  width: 150px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  background: red;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\n  background: #e62222;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%], .all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 200ms;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  transform: translateX(35px);\n  color: white;\n  font-weight: bold;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  border-left: 1px solid #c41b1b;\n  transform: translateX(110px);\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  fill: #eee;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover {\n  background: #ff3636;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: transparent;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  width: 150px;\n  border-left: none;\n  transform: translateX(0);\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:focus, .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:active   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .modal-info-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .mdl-close-nfy[_ngcontent-%COMP%]:active   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n@keyframes fly-1 {\n  from {\n    transform: translateY(0.1em);\n  }\n  to {\n    transform: translateY(-0.1em);\n  }\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(225deg, 100%, 75%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(225deg, 73%, 57%);\n}\n@media only screen and (max-width: 530px) {\n  .all-modal-nfy[_ngcontent-%COMP%]   .ctn-modal-nfy[_ngcontent-%COMP%]   .modal-nfy[_ngcontent-%COMP%]   .announcement[_ngcontent-%COMP%]   .content-announ[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIm5vdGZpbmR5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBLGlFQUFBO0FBQUE7OztDQUFBO0FBQUE7OztFQUFBLHNCQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsbUJBQUEsRUFBQSxNQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7RUFBQSxnQkFBQTtBQUFBO0FBQUE7Ozs7OztDQUFBO0FBQUE7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUEsRUFBQSxNQUFBO0VBQUEsV0FBQSxFQUFBLE1BQUE7RUFBQSxnQ0FBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG1CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLCtHQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBO0VBQUEsZUFBQTtBQUFBO0FBQUE7RUFBQSxXQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtFQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBOzs7OztFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLFVBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG9CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGFBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLFlBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsYUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxrQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztFQUFBLFNBQUE7QUFBQTtBQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7OztFQUFBLGdCQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7O0VBQUEsVUFB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LGlCQUFBO0FBb0pOO0FBbEpJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW9KTjtBQWpKSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBbUpOO0FBaEpJO0VBQ0UsbUJBQUE7QUFrSk47QUEvSUk7RUFDRSxrQkFBQTtBQWlKTjtBQTlJSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBZ0pOO0FBN0lJO0VBQ0UsYUFBQTtBQStJTjtBQTVJSTtFQUNFLHFCQUFBO0FBOElOO0FBeklBO0VBQ0U7SUFDRSw0QkFBQTtFQTRJRjtFQXpJQTtJQUNFLDZCQUFBO0VBMklGO0FBQ0Y7QUF4SUEsZUFBQTtBQUNBLFVBQUE7QUFDQTtFQUNFLFVBQUE7QUEwSUY7QUF4SUEsVUFBQTtBQUNBO0VBQ0UsdUJBQUE7QUEySUY7QUF6SUEsV0FBQTtBQUNBO0VBQ0Usa0NEMUxvQjtFQzJMcEIsbUJBQUE7QUE0SUY7QUEzSUU7RUFDRSxpQ0Q5TFk7QUMyVWhCO0FBeklBO0VBQ0U7SUFDRSxzQkFBQTtFQTRJRjtBQUNGIiwiZmlsZSI6Im5vdGZpbmR5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUYWlsd2luZCAqL1xyXG5AdGFpbHdpbmQgYmFzZTtcclxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XHJcbkB0YWlsd2luZCB1dGlsaXRpZXM7XHJcblxyXG4vKiBJbWFnZXMgKi9cclxuJHVybC1pbWc6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9cIjtcclxuJHVybC1pbWctbmV3czogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25ld3MvXCI7XHJcbiR1cmwtaW1nLXNsaWRlOiBcIi4uLy4uLy4uL2Fzc2V0cy9zbGlkZS9cIjtcclxuJHVybC1hdTogJy4uLy4uLy4uL2Fzc2V0cy9uZXdpbWcvJztcclxuXHJcbi8qIFNWR3MgKi9cclxuJHVybC1zdmc6ICcuLi8uLi8uLi9hc3NldHMvc3ZnLyc7XHJcblxyXG4vKiBUZXh0byAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogYW1lcnRoYTtcclxuICBzcmM6IHVybCgnLi4vZm9udHMvYW1lcnRoYS1wZXJzb25hbC11c2Utb25seS50dGYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcclxuICBzcmM6IHVybCgnLi4vZm9udHMvTW9udHNlcnJhdC1CbGFja0l0YWxpYy5vdGYnKTtcclxufVxyXG5cclxuLyogQ29sb3JzICovXHJcbiRibGFuY286IGhzbCgwLCAwJSwgMTAwJSk7XHJcbiRuZWdybzogaHNsKDAsIDAlLCAwJSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm86IGhzbCgxLCAxMDAlLCA1NSUpO1xyXG4kYW5hcmFuamFkbzogaHNsKDM5LCAxMDAlLCA1MCUpO1xyXG4kZ3JpczogaHNsKDAsIDAlLCA4MCUpO1xyXG4kdmVyZGU6IGhzbCgxMjgsIDUxJSwgNDklKTtcclxuJGF6dWw6IGhzbCgyMzksIDEwMCUsIDUwJSk7XHJcbiRjZWxlc3RlOiBoc2woMjA3LCA5MCUsIDU0JSk7XHJcbiRzb21icmEtcm9qby1nbG9iYWw6IGhzbGEoMCwgNTQlLCA1OSUsIDAuMzE0KTtcclxuJGNvbG9yLWdsb2JhbC1jbGFyby0yOiBoc2woMCwgMTAwJSwgNzElKTtcclxuJHJvc2Fkby1ib3JkZTogaHNsKDM0OSwgMTAwJSwgNjklKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFyby0yLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAxMDAlLCA4MCUsIDAuNTQ4KTtcclxuJGNvbG9yLWdsb2JhbC1jbGFyby0zOiBoc2woMzU4LCA4MCUsIDUwJSk7XHJcbiRjb2xvci1nbG9iYWwtb3NjdXJvOiBoc2woMSwgMTAwJSwgMzIlKTtcclxuJGF6dWwtY2xhcm86IGhzbCgyMjMsIDgyJSwgNTYlKTtcclxuJGF6dWwtb3NjdXJvOiBoc2woMjIzLCAxMDAlLCAzMCUpO1xyXG4kY2VsZXN0ZS1jbGFybzogaHNsKDIwNywgMTAwJSwgNjklKTtcclxuJHZlcmRlLWNsYXJvOiBoc2woMTMxLCA3MiUsIDU2JSk7XHJcbiR2ZXJkZS1vc2N1cm86IGhzbCgxMzEsIDEwMCUsIDIyJSk7XHJcbiRncmlzLWM6IGhzbCgwLCAwJSwgOTElKTtcclxuJGdyaXMtdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDAlLCA4MCUsIDAuNjM1KTtcclxuJGdyaXMtaW50ZW5zbzogaHNsKDAsIDAlLCA1OSUpO1xyXG4kYmtnOiBoc2woMzQwLCAxMCUsIDYlKTtcclxuJGJrZy1jYXJkOiBoc2woMCwgMCUsIDEzJSk7XHJcbiRjb2xvci1sY3YtbmZ5OiBoc2woMjI1LCA3MyUsIDU3JSk7XHJcbiRjb2xvci1sY3YtbmZ5LWNsYXJvOiBoc2woMjI1LCAxMDAlLCA3NSUpO1xyXG4vKiBSZWRlcyBzb2NpYWxlcyovXHJcbiRmYWNlYm9vazogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGF6dWwsICRhenVsLWNsYXJvLCAkY2VsZXN0ZSwgJGNlbGVzdGUtY2xhcm8sICRibGFuY28pO1xyXG4kaW5zdGFncmFtOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjRkNERTMwLCAjRTk3MTJBLCAjRDIzMTNCLCAjQUU0MTk4LCAjNzU0MDFBLCAjNTQ0M0E4KTtcclxuJGxpbmtlZGluOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMDA3N0I1LCAjNWZkMmZmKTtcclxuJHRpa3RvazogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2NjMDgyYywgIzI1MDAwNywgJG5lZ3JvKTtcclxuXHJcbioge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJveC1tb2RhbC13c3Age1xyXG4gIC53aGF0c2FwcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1jbGFybztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhdC1ib3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtY2xhcm87XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dWwtb3NjdXJvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTB2aDtcclxuICAucmVsZXZhbnQsXHJcbiAgLndoeS1jaG9vc2UtdXMsXHJcbiAgLmZvbmRvbmVncm9pbmljaW8sXHJcbiAgLnNlcnZpY2VzLFxyXG4gIC5uZXdzLFxyXG4gIC5tb2RhbCB7XHJcbiAgICBtYXJnaW46IDEzMHB4IGF1dG87XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogIFNjcm9sbGJhciAqL1xyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtY2xhcm8tMjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1vc2N1cm87XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5Lm1vZGFsLWl0LFxyXG5ib2R5Lm1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIC5jdG4tYmFja2Ryb3AxIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDkwMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjFtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMyKTtcclxuICB9XHJcbn1cclxuYm9keS5tb2RhbC1pdCAuYWxsLW1vZGFsLW1pdCxcclxuYm9keS5tb2RhbC1sY3YgLmFsbC1tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IC5hbGwtbW9kYWwtbmZ5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG5ib2R5Lm1vZGFsLW9wZW4ge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5hbGwtbW9kYWwtbmZ5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xyXG4gIC5tb2RhbC1pbmZvLW5meSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICB9XHJcbn1cclxuXHJcbi5hbGwtbW9kYWwtbmZ5LCAubW9kYWwtaW5mby1uZnkge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAuY3RuLW1vZGFsLW5meSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIC5tb2RhbC1uZnkge1xyXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgIGhlaWdodDogMjU0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIC5hbm5vdW5jZW1lbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4ICRuZWdybztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIC5jb250ZW50LWFubm91biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItbGN2LW5meTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCAkZ3JpcyBpbnNldDtcclxuICAgICAgICAgIGNvbG9yOiAkbmVncm87XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgIGdhcDogMzBweCAxcHg7XHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMS41cHggIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRuZWdybztcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDE1MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRuZWdybztcclxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSguMnJlbSk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDE1MG1zIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQ6Zm9jdXMsIGlucHV0OnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWE3M2U4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmlucHV0OmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC44KTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAuMmVtO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdWItZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggJGNvbG9yLWxjdi1uZnkgaW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VuZC1jdiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1sY3YtbmZ5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjllbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmbHktMSAwLjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHN2ZyB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMmVtKSByb3RhdGUoNDVkZWcpIHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciBzcGFuIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNWVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1kbC1jbG9zZS1uZnkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgIC8vIG1hcmdpbi10b3A6IC0yMDBweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTYyMjIyO1xyXG4gICAgfVxyXG4gICAgLm1kbC1jbG9zZS1uZnksXHJcbiAgICAubWRsLWNsb3NlLW5meSBzcGFuIHtcclxuICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgICB9XHJcbiAgICAubWRsLWNsb3NlLW5meSAudGV4dCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNXB4KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5tZGwtY2xvc2UtbmZ5IC5pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjNDFiMWI7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTBweCk7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLm1kbC1jbG9zZS1uZnkgc3ZnIHtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGZpbGw6ICNlZWU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWRsLWNsb3NlLW5meTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZjM2MzY7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAubWRsLWNsb3NlLW5meTpob3ZlciAudGV4dCB7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5tZGwtY2xvc2UtbmZ5OmhvdmVyIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLm1kbC1jbG9zZS1uZnk6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLm1kbC1jbG9zZS1uZnk6YWN0aXZlIC5pY29uIHN2ZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5LTEge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMWVtKTtcclxuICB9XHJcbiAgXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFlbSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1sY3YtbmZ5LWNsYXJvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbGN2LW5meTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAuYWxsLW1vZGFsLW5meSAuY3RuLW1vZGFsLW5meSAubW9kYWwtbmZ5IC5hbm5vdW5jZW1lbnQgLmNvbnRlbnQtYW5ub3VuIGZvcm0gdWwgbGkge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXX0= */"]
});
class SendMessageModalNFY {
  constructor(data) {
    this.data = data;
    this.check = data[0].check;
  }

}

SendMessageModalNFY.ɵfac = function SendMessageModalNFY_Factory(t) {
  return new (t || SendMessageModalNFY)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};

SendMessageModalNFY.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SendMessageModalNFY,
  selectors: [["app-sendmessage"]],
  decls: 11,
  vars: 3,
  consts: [["mat-dialog-content", ""], ["style", "color: green; font-weight: bold;", 4, "ngIf"], [4, "ngIf"], ["style", "color: red; font-weight: bold;", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""], [2, "color", "green", "font-weight", "bold"], [2, "color", "red", "font-weight", "bold"]],
  template: function SendMessageModalNFY_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SendMessageModalNFY_span_3_Template, 2, 0, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SendMessageModalNFY_span_5_Template, 2, 0, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SendMessageModalNFY_span_7_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cerrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check === 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions],
  encapsulation: 2
});

/***/ }),

/***/ 8020:
/*!*****************************************************************!*\
  !*** ./src/app/components/oportunidad/oportunidad.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OportunidadComponent": () => (/* binding */ OportunidadComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _services_oportunidad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/oportunidad.service */ 1344);
/* harmony import */ var _models_cv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cv */ 6359);
/* harmony import */ var src_app_models_convocatoria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/convocatoria */ 9638);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jw-angular-pagination */ 1161);
/* harmony import */ var _NotFindYetModal_notfindyet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFindYetModal/notfindyet.component */ 2429);
/* harmony import */ var _LoadCVModal_loadcv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoadCVModal/loadcv.component */ 3346);













function OportunidadComponent_ul_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul")(1, "li", 9)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "li", 10)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 11)(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OportunidadComponent_ul_17_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.doStuff(item_r1.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("body b-", item_r1.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.lugar);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r1.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("btn-", item_r1.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", item_r1.code);
  }
}

class OportunidadComponent {
  constructor(document, dialog, _oportunidadService) {
    this.document = document;
    this.dialog = dialog;
    this._oportunidadService = _oportunidadService;
    this.flagButton = false;
    this.submitted = false;
    this.check = 0;
    this.status = '';
    this.cvModel = new _models_cv__WEBPACK_IMPORTED_MODULE_2__.cv(0, '', '9999999', '', '', '', '0', '', 'sin puesto', '');
    this.convocatorias = Array();
    this.convocatoriaSeleccionada = new src_app_models_convocatoria__WEBPACK_IMPORTED_MODULE_3__.Convocatoria(0, "", "", "", "", "", "", "", 0, "", "");
    this.words = Array();
    this.funcionesList = Array();
    this.flag = true; // flag para listar las funciones de la oportunidad laboral

    this.pageOfItems = new Array();
    this.flagCvUp = true;
  }

  onSubmit(form) {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.cvModel.lugar = _this.convocatoriaSeleccionada.lugar; //console.log(this.cvModel.lugar)
      //this.submitted = true;

      for (let i = 0; i < 10; i++) {
        yield _this.delay(1000);
      }

      if (!_this.flagCvUp) {
        _this._oportunidadService.create(_this.cvModel).subscribe(response => {
          if (response.status == 'success') {
            _this.cvModel = new _models_cv__WEBPACK_IMPORTED_MODULE_2__.cv(0, '', '9999999', '', '', '', '0', '', 'sin puesto', '');
            _this.check = 1; //this.flagsubida=false;
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          console.log(error);
          _this.check = 2;
        });
      } else {
        _this.check = 2;
      }
    })();
  }

  ngOnInit() {
    this._oportunidadService.getallconvocatorias().subscribe(response => {
      if (response.status == 'success') {
        this.convocatorias = response.convocatorias;
        this.items = this.convocatorias;
      } else {
        this.status = 'error';
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  openModalLCV() {
    this.document.body.classList.add('modal-lcv');
    /*this.devolver = document.querySelector('body')
    this.document.body.setAttribute('style', `top: ${this.devolver.style.top}`)*/
    // var docuBody2 = this.el.nativeElement.querySelector('body')
    // console.log(this.el.nativeElement.querySelector('.webkit-scrollbar')?.offsetTop)
    // var docuBody2 = this.el.nativeElement.querySelector(`.btn-${e}`)?.offsetTop
  }

  openModalNFY() {
    this.document.body.classList.add('modal-nfy');
  }

  onChangePage(pageOfItems) {
    this.pageOfItems = pageOfItems;
  }

  CvUpload(e) {
    let res = JSON.parse(e.response);
    this.cvModel.cv = res.file;
    console.log(res.file);
    this.flagCvUp = false;
  } //cargar cv por puesto.


  cargarCV() {
    var _this2 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.cvModel.lugar = _this2.convocatoriaSeleccionada.lugar;

      for (let i = 0; i < 10; i++) {
        yield _this2.delay(1000);
      }

      if (!_this2.flagCvUp) {
        _this2._oportunidadService.create(_this2.cvModel).subscribe(response => {
          if (response.status == 'success') {
            _this2.cvModel = new _models_cv__WEBPACK_IMPORTED_MODULE_2__.cv(0, '', '9999999', '', '', '', '0', '', 'sin puesto', '');
            _this2.check = 1;
          } else {
            _this2.status = 'error';
            _this2.check = 2;
          }
        }, error => {
          _this2.status = 'error';
          _this2.check = 2;
        });
      } else {
        _this2.check = 2;
      }
    })();
  }

  doStuff(item) {
    if (item > 0) {
      this.openModalLCV();
    } else {
      this.openModalNFY();
    }

    for (let convocatoria of this.convocatorias) {
      if (convocatoria.code == item) {
        this.convocatoriaSeleccionada = convocatoria;
        var str = convocatoria.conocimientos;
        var str1 = convocatoria.funciones;
        this.cvModel.puesto = convocatoria.cargo;
        this.words = str.split(/\r?\n|\r|\n/g);
        this.funcionesList = str1.split(/\r?\n|\r|\n/g);
      }
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  close() {
    this.flagCvUp = true;
    this.check = 0; //console.log("cerrado")
  }

}

OportunidadComponent.ɵfac = function OportunidadComponent_Factory(t) {
  return new (t || OportunidadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_oportunidad_service__WEBPACK_IMPORTED_MODULE_1__.OportunidadService));
};

OportunidadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OportunidadComponent,
  selectors: [["app-oportunidad"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_services_oportunidad_service__WEBPACK_IMPORTED_MODULE_1__.OportunidadService])],
  decls: 28,
  vars: 17,
  consts: [[1, "work-with-us"], [1, "ctn-wwu"], [1, "front-page-wwu"], ["src", "assets/images/portadaoportunidadnuevo.png", 1, "img"], [1, "ctn-curved"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-0.84,85.38 C221.50,152.47 310.10,-64.61 503.67,69.58 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "rgb(255, 255, 255)"], [1, "ctn-box-cv"], [1, "head"], [1, "departamento"], [1, "puesto"], [1, "ad-cv"], [3, "class", 4, "ngFor", "ngForOf"], [1, "ctn-pagination"], [3, "items", "pageSize", "changePage"], [1, "foot-ctn-wwu", 3, "click"], [1, "foot-wwu"], [1, "fa", "fa-folder-open"], [3, "convocatoriaSeleccionada", "words", "funcionesList", "cvModel", "flagCvUp", "check", "status"], ["type", "submit", "data-toggle", "modal", "data-target", "#modalConvocatoriaPuesto", 3, "id", "click"]],
  template: function OportunidadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "TRABAJA CON NOSOTROS");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "ul", 8)(11, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Departamento ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Puesto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Adjunta tu CV ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, OportunidadComponent_ul_17_Template, 10, 9, "ul", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13)(19, "jw-pagination", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("changePage", function OportunidadComponent_Template_jw_pagination_changePage_19_listener($event) {
        return ctx.onChangePage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OportunidadComponent_Template_div_click_20_listener() {
        return ctx.doStuff(0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16)(22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u00BFNo encuentras un puesto laboral para tu especialidad?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "app-loadcv", 18)(27, "app-notfindyet", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.pageOfItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.items)("pageSize", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("convocatoriaSeleccionada", ctx.convocatoriaSeleccionada)("words", ctx.words)("funcionesList", ctx.funcionesList)("cvModel", ctx.cvModel)("flagCvUp", ctx.flagCvUp)("check", ctx.check)("status", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("convocatoriaSeleccionada", ctx.convocatoriaSeleccionada)("words", ctx.words)("funcionesList", ctx.funcionesList)("cvModel", ctx.cvModel)("flagCvUp", ctx.flagCvUp)("check", ctx.check)("status", ctx.status);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, jw_angular_pagination__WEBPACK_IMPORTED_MODULE_9__.JwPaginationComponent, _NotFindYetModal_notfindyet_component__WEBPACK_IMPORTED_MODULE_4__.NotFindYetComponent, _LoadCVModal_loadcv_component__WEBPACK_IMPORTED_MODULE_5__.LoadCVComponent],
  styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .front-page-wwu[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n  background-color: hsl(0deg, 0%, 0%);\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .front-page-wwu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n  height: 100%;\n  object-fit: cover;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .front-page-wwu[_ngcontent-%COMP%]   .ctn-curved[_ngcontent-%COMP%] {\n  height: 130px;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3em;\n  color: hsl(1deg, 100%, 55%);\n  text-align: center;\n  font-weight: bold;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 80px auto;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%], .work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 55% 15%;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .ad-cv[_ngcontent-%COMP%], .work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .ad-cv[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  background-color: hsl(1deg, 100%, 55%);\n  color: hsl(0deg, 0%, 100%);\n  border-radius: 20px;\n  padding: 15px 20px;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.15em;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .departamento[_ngcontent-%COMP%], .work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .puesto[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-radius: 15px;\n  padding: 1px 20px;\n  transition: 0.5s ease all;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: hsl(1deg, 100%, 55%);\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]:hover {\n  background-color: hsl(0deg, 100%, 71%);\n  color: hsl(0deg, 0%, 100%);\n  font-weight: bold;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: hsl(0deg, 0%, 100%);\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .ctn-box-cv[_ngcontent-%COMP%]   .ctn-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .foot-ctn-wwu[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .foot-ctn-wwu[_ngcontent-%COMP%]   .foot-wwu[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 15px;\n  width: auto;\n  font-size: 1.2em;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .foot-ctn-wwu[_ngcontent-%COMP%]   .foot-wwu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.work-with-us[_ngcontent-%COMP%]   .ctn-wwu[_ngcontent-%COMP%]   .foot-ctn-wwu[_ngcontent-%COMP%]   .foot-wwu[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwib3BvcnR1bmlkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBLGlFQUFBO0FBQUE7OztDQUFBO0FBQUE7OztFQUFBLHNCQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsbUJBQUEsRUFBQSxNQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7RUFBQSxnQkFBQTtBQUFBO0FBQUE7Ozs7OztDQUFBO0FBQUE7RUFBQSxnQkFBQSxFQUFBLE1BQUE7RUFBQSw4QkFBQSxFQUFBLE1BQUEsRUFBQSxNQUFBO0VBQUEsV0FBQSxFQUFBLE1BQUE7RUFBQSxnQ0FBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx5Q0FBQTtVQUFBLGlDQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG1CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLCtHQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsY0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxjQUFBO0VBQUEsY0FBQTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBO0VBQUEsZUFBQTtBQUFBO0FBQUE7RUFBQSxXQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtFQUFBLHlCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBOzs7OztFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGVBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLFVBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLG9CQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7OztFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLHNCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGFBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLFlBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBO0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsYUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxrQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztFQUFBLFNBQUE7QUFBQTtBQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7OztFQUFBLGdCQUFBO0VBQUEsU0FBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxnQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7O0VBQUEsVUFBQSxF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QUFBO0FBa0pOO0FBakpNO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBaUpSO0FBaEpRO0VBQ0UsaUJBQUE7QUFrSlY7QUFoSlE7RUFDRSwyQkRwRVc7QUNzTnJCIiwiZmlsZSI6Im9wb3J0dW5pZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFpbHdpbmQgKi9cclxuQHRhaWx3aW5kIGJhc2U7XHJcbkB0YWlsd2luZCBjb21wb25lbnRzO1xyXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xyXG5cclxuLyogSW1hZ2VzICovXHJcbiR1cmwtaW1nOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvXCI7XHJcbiR1cmwtaW1nLW5ld3M6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzL1wiO1xyXG4kdXJsLWltZy1zbGlkZTogXCIuLi8uLi8uLi9hc3NldHMvc2xpZGUvXCI7XHJcbiR1cmwtYXU6ICcuLi8uLi8uLi9hc3NldHMvbmV3aW1nLyc7XHJcblxyXG4vKiBTVkdzICovXHJcbiR1cmwtc3ZnOiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy8nO1xyXG5cclxuLyogVGV4dG8gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFtZXJ0aGE7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2FtZXJ0aGEtcGVyc29uYWwtdXNlLW9ubHkudHRmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQmxhY2tJdGFsaWMub3RmJyk7XHJcbn1cclxuXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhbmNvOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4kbmVncm86IGhzbCgwLCAwJSwgMCUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvOiBoc2woMSwgMTAwJSwgNTUlKTtcclxuJGFuYXJhbmphZG86IGhzbCgzOSwgMTAwJSwgNTAlKTtcclxuJGdyaXM6IGhzbCgwLCAwJSwgODAlKTtcclxuJHZlcmRlOiBoc2woMTI4LCA1MSUsIDQ5JSk7XHJcbiRhenVsOiBoc2woMjM5LCAxMDAlLCA1MCUpO1xyXG4kY2VsZXN0ZTogaHNsKDIwNywgOTAlLCA1NCUpO1xyXG4kc29tYnJhLXJvam8tZ2xvYmFsOiBoc2xhKDAsIDU0JSwgNTklLCAwLjMxNCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMjogaHNsKDAsIDEwMCUsIDcxJSk7XHJcbiRyb3NhZG8tYm9yZGU6IGhzbCgzNDksIDEwMCUsIDY5JSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMi10cmFuc3BhcmVudGU6IGhzbGEoMCwgMTAwJSwgODAlLCAwLjU0OCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMzogaHNsKDM1OCwgODAlLCA1MCUpO1xyXG4kY29sb3ItZ2xvYmFsLW9zY3VybzogaHNsKDEsIDEwMCUsIDMyJSk7XHJcbiRhenVsLWNsYXJvOiBoc2woMjIzLCA4MiUsIDU2JSk7XHJcbiRhenVsLW9zY3VybzogaHNsKDIyMywgMTAwJSwgMzAlKTtcclxuJGNlbGVzdGUtY2xhcm86IGhzbCgyMDcsIDEwMCUsIDY5JSk7XHJcbiR2ZXJkZS1jbGFybzogaHNsKDEzMSwgNzIlLCA1NiUpO1xyXG4kdmVyZGUtb3NjdXJvOiBoc2woMTMxLCAxMDAlLCAyMiUpO1xyXG4kZ3Jpcy1jOiBoc2woMCwgMCUsIDkxJSk7XHJcbiRncmlzLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAwJSwgODAlLCAwLjYzNSk7XHJcbiRncmlzLWludGVuc286IGhzbCgwLCAwJSwgNTklKTtcclxuJGJrZzogaHNsKDM0MCwgMTAlLCA2JSk7XHJcbiRia2ctY2FyZDogaHNsKDAsIDAlLCAxMyUpO1xyXG4kY29sb3ItbGN2LW5meTogaHNsKDIyNSwgNzMlLCA1NyUpO1xyXG4kY29sb3ItbGN2LW5meS1jbGFybzogaHNsKDIyNSwgMTAwJSwgNzUlKTtcclxuLyogUmVkZXMgc29jaWFsZXMqL1xyXG4kZmFjZWJvb2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRhenVsLCAkYXp1bC1jbGFybywgJGNlbGVzdGUsICRjZWxlc3RlLWNsYXJvLCAkYmxhbmNvKTtcclxuJGluc3RhZ3JhbTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZDREUzMCwgI0U5NzEyQSwgI0QyMzEzQiwgI0FFNDE5OCwgIzc1NDAxQSwgIzU0NDNBOCk7XHJcbiRsaW5rZWRpbjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwNzdCNSwgIzVmZDJmZik7XHJcbiR0aWt0b2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNjYzA4MmMsICMyNTAwMDcsICRuZWdybyk7XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbW9kYWwtd3NwIHtcclxuICAud2hhdHNhcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtY2xhcm87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYm90IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLWNsYXJvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLW9zY3VybztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwdmg7XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzLFxyXG4gIC5mb25kb25lZ3JvaW5pY2lvLFxyXG4gIC5zZXJ2aWNlcyxcclxuICAubmV3cyxcclxuICAubW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtb3NjdXJvO1xyXG4gIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1pdCxcclxuYm9keS5tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAuY3RuLWJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zMik7XHJcbiAgfVxyXG59XHJcbmJvZHkubW9kYWwtaXQgLmFsbC1tb2RhbC1taXQsXHJcbmJvZHkubW9kYWwtbGN2IC5hbGwtbW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSAuYWxsLW1vZGFsLW5meSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4ud29yay13aXRoLXVzIHtcclxuICAuY3RuLXd3dSB7XHJcbiAgICAuZnJvbnQtcGFnZS13d3Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5lZ3JvO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmN0bi1jdXJ2ZWQge1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmN0bi1ib3gtY3Yge1xyXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgICAuaGVhZCxcclxuICAgICAgLmJvZHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNTUlIDE1JTtcclxuICAgICAgICAuYWQtY3Yge1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaGVhZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlcGFydGFtZW50byxcclxuICAgICAgICAucHVlc3RvIHtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMjBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZSBhbGw7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm8tMjtcclxuICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBsaSBidXR0b24gaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY3RuLXBhZ2luYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3QtY3RuLXd3dSB7XHJcbiAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIC5mb290LXd3dSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"]
});

/***/ }),

/***/ 6330:
/*!*******************************************************!*\
  !*** ./src/app/components/prueba/prueba.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PruebaComponent": () => (/* binding */ PruebaComponent),
/* harmony export */   "PruebaModalContent": () => (/* binding */ PruebaModalContent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);


class PruebaModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
PruebaModalContent.ɵfac = function PruebaModalContent_Factory(t) { return new (t || PruebaModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
PruebaModalContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebaModalContent, selectors: [["app-prueba"]], decls: 19, vars: 0, consts: [[1, "btn-closeModal", 3, "click"], [1, "fa-solid", "fa-xmark"], ["id", "carouselModalMain", "data-bs-ride", "carousel", 1, "modal-carousel-main", "carousel", "slide", "carousel-fade"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/pago plin y yape.jpg", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/images/siguenos en ig.jpg", 1, "d-block", "w-100"], ["src", "assets/images/cotizaciones_e_informes_modal_main.jpg", 1, "d-block", "w-100"], [1, "carousel-control"], ["type", "button", "data-bs-target", "#carouselModalMain", "data-bs-slide", "prev", 1, "carousel-control-prev"], [1, "fa-solid", "fa-chevron-left"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselModalMain", "data-bs-slide", "next", 1, "carousel-control-next"], [1, "fa-solid", "fa-chevron-right"]], template: function PruebaModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PruebaModalContent_Template_button_click_0_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["/* Tailwind */\n/* ! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: Graphik, sans-serif; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n.static {\n  position: static;\n}\n.hidden {\n  display: none;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n/* Images */\n/* SVGs */\n/* Texto */\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n/* Colors */\n/* Redes sociales*/\n* {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton {\n  cursor: pointer;\n}\n.box-modal-wsp .whatsapp {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp .whatsapp i {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp .whatsapp:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp .chat-bot {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp .chat-bot i {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp .chat-bot:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain {\n  position: relative;\n  top: 10vh;\n}\nmain .relevant,\nmain .why-choose-us,\nmain .fondonegroinicio,\nmain .services,\nmain .news,\nmain .modal {\n  margin: 130px auto;\n}\nmain .relevant h3,\nmain .why-choose-us h3,\nmain .fondonegroinicio h3,\nmain .services h3,\nmain .news h3,\nmain .modal h3 {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain .relevant h3:hover,\nmain .why-choose-us h3:hover,\nmain .fondonegroinicio h3:hover,\nmain .services h3:hover,\nmain .news h3:hover,\nmain .modal h3:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n/*  Scrollbar */\n/* width */\n::-webkit-scrollbar {\n  width: 8px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it,\nbody.modal-lcv,\nbody.modal-nfy {\n  overflow-y: hidden !important;\n}\nbody.modal-it .ctn-backdrop1,\nbody.modal-lcv .ctn-backdrop1,\nbody.modal-nfy .ctn-backdrop1 {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it .all-modal-mit,\nbody.modal-lcv .all-modal-lcv,\nbody.modal-nfy .all-modal-nfy {\n  transform: scale(1);\n}\nbody.modal-open {\n  overflow-y: hidden;\n}\n.btn-closeModal {\n  position: absolute;\n  right: -20px;\n  top: -10px;\n  z-index: 20;\n  width: 30px;\n  height: 30px;\n  background-color: hsl(0deg, 0%, 100%);\n  border-radius: 100%;\n  box-shadow: 0 1px 8px hsl(0deg, 0%, 0%);\n}\n.modal-dialog {\n  height: 100vh;\n  position: relative;\n  max-width: 850px;\n  width: 100%;\n  margin: auto;\n  display: flex;\n  padding: 0;\n}\n.modal-dialog .modal-content {\n  margin: auto;\n}\n@media only screen and (max-width: 1000px) {\n  .btn-closeModal {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwicHJ1ZWJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7QUFDQSxpRUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7RUFBQSxzQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG1CQUFBLEVBQUEsTUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Ozs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUEsRUFBQSxNQUFBO0VBQUEsOEJBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQTtFQUFBLFdBQUEsRUFBQSxNQUFBO0VBQUEsZ0NBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEseUNBQUE7VUFBQSxpQ0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7O0VBQUEsa0JBQUE7RUFBQSxvQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxtQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwrR0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTtFQUFBLGVBQUE7QUFBQTtBQUFBO0VBQUEsV0FBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7RUFBQSx5QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTs7Ozs7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxVQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxvQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxzQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxhQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxZQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLGFBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsa0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFBO0FBQUE7QUFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOzs7RUFBQSxnQkFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOztFQUFBLFVBQUEsRUFBQSxN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LG1CQUFBO0FDNUJGO0FENkJFO0VBQ0UsZ0NBM0drQjtBQ2dGdEI7QUQrQkE7OztFQUdFLDZCQUFBO0FDNUJGO0FENkJFOzs7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMERBQUE7RUFDQSwrQkFBQTtBQ3pCSjtBRDRCQTs7O0VBR0UsbUJBQUE7QUN6QkY7QUQ0QkE7RUFDRSxrQkFBQTtBQ3pCRjtBQWxKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0RlSztFQ2RMLG1CQUFBO0VBQ0EsdUNBQUE7QUFvSko7QUFqSkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFvSko7QUFuSkk7RUFDSSxZQUFBO0FBcUpSO0FBaEpBO0VBQ0k7SUFDSSxRQUFBO0VBbUpOO0FBQ0YiLCJmaWxlIjoicHJ1ZWJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFpbHdpbmQgKi9cclxuQHRhaWx3aW5kIGJhc2U7XHJcbkB0YWlsd2luZCBjb21wb25lbnRzO1xyXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xyXG5cclxuLyogSW1hZ2VzICovXHJcbiR1cmwtaW1nOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvXCI7XHJcbiR1cmwtaW1nLW5ld3M6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzL1wiO1xyXG4kdXJsLWltZy1zbGlkZTogXCIuLi8uLi8uLi9hc3NldHMvc2xpZGUvXCI7XHJcbiR1cmwtYXU6ICcuLi8uLi8uLi9hc3NldHMvbmV3aW1nLyc7XHJcblxyXG4vKiBTVkdzICovXHJcbiR1cmwtc3ZnOiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy8nO1xyXG5cclxuLyogVGV4dG8gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFtZXJ0aGE7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2FtZXJ0aGEtcGVyc29uYWwtdXNlLW9ubHkudHRmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQmxhY2tJdGFsaWMub3RmJyk7XHJcbn1cclxuXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhbmNvOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4kbmVncm86IGhzbCgwLCAwJSwgMCUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvOiBoc2woMSwgMTAwJSwgNTUlKTtcclxuJGFuYXJhbmphZG86IGhzbCgzOSwgMTAwJSwgNTAlKTtcclxuJGdyaXM6IGhzbCgwLCAwJSwgODAlKTtcclxuJHZlcmRlOiBoc2woMTI4LCA1MSUsIDQ5JSk7XHJcbiRhenVsOiBoc2woMjM5LCAxMDAlLCA1MCUpO1xyXG4kY2VsZXN0ZTogaHNsKDIwNywgOTAlLCA1NCUpO1xyXG4kc29tYnJhLXJvam8tZ2xvYmFsOiBoc2xhKDAsIDU0JSwgNTklLCAwLjMxNCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMjogaHNsKDAsIDEwMCUsIDcxJSk7XHJcbiRyb3NhZG8tYm9yZGU6IGhzbCgzNDksIDEwMCUsIDY5JSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMi10cmFuc3BhcmVudGU6IGhzbGEoMCwgMTAwJSwgODAlLCAwLjU0OCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMzogaHNsKDM1OCwgODAlLCA1MCUpO1xyXG4kY29sb3ItZ2xvYmFsLW9zY3VybzogaHNsKDEsIDEwMCUsIDMyJSk7XHJcbiRhenVsLWNsYXJvOiBoc2woMjIzLCA4MiUsIDU2JSk7XHJcbiRhenVsLW9zY3VybzogaHNsKDIyMywgMTAwJSwgMzAlKTtcclxuJGNlbGVzdGUtY2xhcm86IGhzbCgyMDcsIDEwMCUsIDY5JSk7XHJcbiR2ZXJkZS1jbGFybzogaHNsKDEzMSwgNzIlLCA1NiUpO1xyXG4kdmVyZGUtb3NjdXJvOiBoc2woMTMxLCAxMDAlLCAyMiUpO1xyXG4kZ3Jpcy1jOiBoc2woMCwgMCUsIDkxJSk7XHJcbiRncmlzLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAwJSwgODAlLCAwLjYzNSk7XHJcbiRncmlzLWludGVuc286IGhzbCgwLCAwJSwgNTklKTtcclxuJGJrZzogaHNsKDM0MCwgMTAlLCA2JSk7XHJcbiRia2ctY2FyZDogaHNsKDAsIDAlLCAxMyUpO1xyXG4kY29sb3ItbGN2LW5meTogaHNsKDIyNSwgNzMlLCA1NyUpO1xyXG4kY29sb3ItbGN2LW5meS1jbGFybzogaHNsKDIyNSwgMTAwJSwgNzUlKTtcclxuLyogUmVkZXMgc29jaWFsZXMqL1xyXG4kZmFjZWJvb2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRhenVsLCAkYXp1bC1jbGFybywgJGNlbGVzdGUsICRjZWxlc3RlLWNsYXJvLCAkYmxhbmNvKTtcclxuJGluc3RhZ3JhbTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZDREUzMCwgI0U5NzEyQSwgI0QyMzEzQiwgI0FFNDE5OCwgIzc1NDAxQSwgIzU0NDNBOCk7XHJcbiRsaW5rZWRpbjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwNzdCNSwgIzVmZDJmZik7XHJcbiR0aWt0b2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNjYzA4MmMsICMyNTAwMDcsICRuZWdybyk7XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbW9kYWwtd3NwIHtcclxuICAud2hhdHNhcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtY2xhcm87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYm90IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLWNsYXJvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLW9zY3VybztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwdmg7XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzLFxyXG4gIC5mb25kb25lZ3JvaW5pY2lvLFxyXG4gIC5zZXJ2aWNlcyxcclxuICAubmV3cyxcclxuICAubW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtb3NjdXJvO1xyXG4gIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1pdCxcclxuYm9keS5tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAuY3RuLWJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zMik7XHJcbiAgfVxyXG59XHJcbmJvZHkubW9kYWwtaXQgLmFsbC1tb2RhbC1taXQsXHJcbmJvZHkubW9kYWwtbGN2IC5hbGwtbW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSAuYWxsLW1vZGFsLW5meSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uYnRuLWNsb3NlTW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgLy8gY29sb3I6ICRuZWdybztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jbztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggJG5lZ3JvO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDg1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENlbHVsYXJcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5idG4tY2xvc2VNb2RhbCB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"], encapsulation: 2 });
class PruebaComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open() {
        this.modalService.open(PruebaModalContent, { windowClass: 'custom-window-class' });
    }
}
PruebaComponent.ɵfac = function PruebaComponent_Factory(t) { return new (t || PruebaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal)); };
PruebaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PruebaComponent, selectors: [["app-prueba"]], decls: 0, vars: 0, template: function PruebaComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 6470:
/*!*********************************************************************!*\
  !*** ./src/app/components/reclamaciones/reclamaciones.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReclamacionesComponent": () => (/* binding */ ReclamacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ReclamacionesComponent {
    constructor() {
        this.submitted = false;
        this.status = "";
    }
    ngOnInit() {
    }
}
ReclamacionesComponent.ɵfac = function ReclamacionesComponent_Factory(t) { return new (t || ReclamacionesComponent)(); };
ReclamacionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReclamacionesComponent, selectors: [["app-reclamaciones"]], decls: 11, vars: 1, consts: [[1, "container"], [1, "letraBuzonSugere"], [3, "ngSubmit"], ["CurriculumForm", "ngForm"], [1, "form-group"], ["for", "nombresyape"], ["type", "text", "name", "serie", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombresyape", "ngModel"]], template: function ReclamacionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " BUZ\u00D3N DE SUGERENCIAS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReclamacionesComponent_Template_form_ngSubmit_4_listener() { return ctx.ngOnInit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Apellidos y Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReclamacionesComponent_Template_input_ngModelChange_9_listener($event) { return ctx.reclamacionModel.nom_pers_rec = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reclamacionModel.nom_pers_rec);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".navbar[_ngcontent-%COMP%]{\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2xhbWFjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJyZWNsYW1hY2lvbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xyXG4gICAgLyogZGlzcGxheTogbm9uZTsgKi9cclxufSJdfQ== */"] });


/***/ }),

/***/ 3065:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/secciones/preguntasfrecuentes/preguntasfrecuentes.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreguntasfrecuentesComponent": () => (/* binding */ PreguntasfrecuentesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreguntasfrecuentesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreguntasfrecuentesComponent.ɵfac = function PreguntasfrecuentesComponent_Factory(t) { return new (t || PreguntasfrecuentesComponent)(); };
PreguntasfrecuentesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreguntasfrecuentesComponent, selectors: [["app-preguntasfrecuentes"]], decls: 323, vars: 0, consts: [["clasS", "frequent-questions"], [1, "container"], [1, "letratitupregufre"], [1, "col"], [1, "titulo"], [1, "cuerpo", "border-left"], [1, "info-sucu"], [1, "fa", "fa-check-circle", "fa-1x"], [1, "pf-subtitulos"], ["href", "https://www.facebook.com/MARVISUROFICIAL"], ["href", "https://www.instagram.com/expreso_marvisur/"], ["href", "https://cutt.ly/UQBzpXW"]], template: function PreguntasfrecuentesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PREGUNTAS FRECUENTES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1. DATOS DE LA EMPRESA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div")(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Raz\u00F3n social:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Arequipa Expreso Marvisur E.I.R.L.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RUC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 20498189637 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Domicilio fiscal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Cal. Garci Carbajal Nro. 511 Urb. IV centenario, Arequipa - Arequipa - Arequipa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3)(26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2. CU\u00C1L ES SU COBERTURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Estamos ubicados en todos los departamentos del Per\u00FA, contando con 120 sucursales y m\u00E1s de 140 destinos, distribuidos estrat\u00E9gicamente a nivel nacional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3)(34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3. \u00BFQU\u00C9 SERVICIO OFRECEMOS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5)(37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Realizamos servicio de transporte de todo tipo de carga, mudanzas y servicio expreso de puerta a puerta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3)(42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4. \u00BFQU\u00C9 DOCUMENTACI\u00D3N NECESITO PARA REALIZAR UN ENV\u00CDO?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5)(45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Para enviar encomiendas, sobres y objetos usados se presenta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " DNI en f\u00EDsico, Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Para enviar cosas nuevas se presenta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " DNI en f\u00EDsico, Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Documentaci\u00F3n de compra (boleta o factura), y/o la gu\u00EDa de remisi\u00F3n que sustenten el traslado de su mercader\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Para realizar mudanzas se presenta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " DNI en f\u00EDsico o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Presentar una declaraci\u00F3n jurada detallada de los bienes que est\u00E1 enviando ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Para enviar materiales peligrosos y motores, motos, cajas de cambio y repuestos se presenta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " DNI en f\u00EDsico o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Gu\u00EDa de Remisi\u00F3n remitente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Factura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Hoja de seguridad de materiales a enviar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Para enviar flora se presenta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " DNI en f\u00EDsico o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Gu\u00EDa de Remisi\u00F3n de transporte forestal original. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Permiso de aprovechamiento forestal en bosques secos, bajo modalidad de declaraci\u00F3n de manejo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div")(92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Observaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Todos los documentos deben ser originales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 3)(97, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "5. \u00BFCON QU\u00C9 MODALIDADES DE PAGO CUENTO?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5)(100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Al contado: Se cancela el monto en su totalidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Pago en destino: La cancelaci\u00F3n se realiza cuando recibe su mercader\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Pago por transferencia: La cancelaci\u00F3n se tiene que confirmar en agencia Marvisur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3)(111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "6. \u00BFREALIZAN EL SERVICIO DE RETORNO DE CARGO?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 5)(114, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " S\u00ED, AREQUIPA EXPRESO MARVISUR garantiza el retorno al cliente de cargos adjuntos o gu\u00EDas de remisi\u00F3n debidamente sellados y firmados, con un costo adicional.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 3)(119, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "7. \u00BFQU\u00C9 DOCUMENTOS NECESITO PARA RECOGER MI MERCADER\u00CDA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5)(122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Los documentos necesarios para recoger var\u00EDan en caso recoja una persona natural o jur\u00EDdica:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 6)(125, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Persona Natural:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Deber\u00E1 presentar su DNI original o Pasaporte o Carn\u00E9 de extranjer\u00EDa (con copia simple) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " N\u00FAmero de Gu\u00EDa de remisi\u00F3n transportista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 6)(134, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Persona Jur\u00EDdica:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Deber\u00E1 presentar su DNI original o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " N\u00FAmero de Gu\u00EDa de remisi\u00F3n transportista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div")(143, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Observaci\u00F3n 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " En caso la gu\u00EDa no tenga atenci\u00F3n a una persona Natural, se entregar\u00E1 \u00FAnicamente al representante legal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div")(147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Observaci\u00F3n General: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " En caso la encomienda sea recogida por un tercero se debe presentar carta poder membretada y legalizada (Incluyendo el nro. de Gu\u00EDa, firma, huella digital y copia del DNI del destinatario).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3)(152, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "8. \u00BFC\u00D3MO HACER UN CAMBIO DE DESTINO Y CONSIGNADO? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 5)(155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Se puede realizar el cambio, pero solamente puede solicitarlo el remitente en una agencia de forma presencial. Se exponen dos casos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div")(158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "CASO 1:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " El env\u00EDo es realizado por una ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "PERSONA NATURAL,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " para ello se necesita:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Gu\u00EDa de remisi\u00F3n transportista MARVISUR (original en f\u00EDsico). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Documento que identifica, puede ser: DNI f\u00EDsico o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple del documento de identidad) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div")(171, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "CASO 2:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " El env\u00EDo es realizado por una ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "EMPRESA,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " los requerimientos var\u00EDan seg\u00FAn sea quien solicite el cambio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div")(178, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Representante Legal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "DNI Original o Pasaporte o Carn\u00E9 de extranjer\u00EDa (m\u00E1s copia simple) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "N\u00FAmero de gu\u00EDa de remisi\u00F3n transportista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Gu\u00EDa de remisi\u00F3n transportista declarada (como remitente o Control Administrativo) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div")(190, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "No es representante legal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "DNI Original o Pasaporte o Carn\u00E9 de extranjer\u00EDa de la persona que tramita (m\u00E1s copia simple) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Gu\u00EDa de remisi\u00F3n transportista (original en f\u00EDsico) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Gu\u00EDa de remisi\u00F3n remitente (como remitente o Control Administrativo) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Copia de DNI del Representante legal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Carta de Autorizaci\u00F3n membretada y legalizada (firma y huella del representante legal). Indicando qui\u00E9n va a recoger y nro. de gu\u00EDa de Marvisur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 3)(209, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "9. \u00BFPUEDO ENVIAR CUALQUIER TIPO DE MERCADER\u00CDA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 5)(212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "AREQUIPA EXPRESO MARVISUR transporta todo tipo de mercader\u00EDa, excepto los siguientes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Alimentos perecibles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Toda clase de armas, municiones, explosivos o cualquier material inflamable, corrosivo, t\u00F3xico o peligroso, as\u00ED como sustancias, materiales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Insumos qu\u00EDmicos y productos fiscalizados, \u00FAtiles para elaborar drogas il\u00EDcitas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Especies vivas cuya comercializaci\u00F3n, tenencia o transporte se encuentre prohibida o restringida. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Bienes culturales, muebles, obras contempor\u00E1neas de patrimonio cultural. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 3)(231, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "10.\t\u00BFC\u00D3MO DECLARO MI MERCADER\u00CDA VALIOSA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 5)(234, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Se denomina mercader\u00EDa valiosa cuando su precio supera 10 veces el flete de env\u00EDo, es importante tener en cuenta que en caso de robo o da\u00F1o de mercader\u00EDa s\u00F3lo se reconocer\u00E1 lo declarado. Para declarar la mercader\u00EDa se necesita adjuntar un documento original que sustente su compra o venta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 3)(238, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "11. \u00BFES POSIBLE ENVIAR OBJETOS FR\u00C1GILES? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 5)(241, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "S\u00ED, pero \u00E9stos deben estar correctamente embalados y rotulados con la descripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "FR\u00C1GIL.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " La empresa no realiza embalaje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 3)(248, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "12. \u00BFCOMO HAGO PARA REALIZAR MIS ENV\u00CDOS EN LA CIUDAD DE LIMA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 5)(251, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "En la ciudad de Lima contamos con dos tipos de agencia para env\u00EDos: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Agencias centralizadas, que se encuentran el distrito de La Victoria, con salidas directas a puntos espec\u00EDficos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Agencias descentralizadas, que se encuentran en diferentes distritos de Lima (Puntos de acopio). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 3)(261, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "13. \u00BFC\u00D3MO ME PONGO EN CONTACTO CON MARVISUR? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 5)(264, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Marvisur cuenta con distintos tipos de canales de comunicaci\u00F3n como: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Nuestras redes sociales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Facebook: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "https://www.facebook.com/MARVISUROFICIAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Instagram: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "https://www.instagram.com/expreso_marvisur/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Linkedin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "https://cutt.ly/UQBzpXW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Nuestros n\u00FAmeros oficial de Call Center. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " 054-206733 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Nuestros n\u00FAmeros de Whatsapp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " 959 177 150 (Cotizaciones) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " 974 210 358 (Consultas) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Recuerda que toda la informaci\u00F3n la puedes encontrar en nuestra p\u00E1gina web. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 3)(300, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "14.\t\u00BFMIS ENV\u00CDOS SE ENCUENTRAN ASEGURADOS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 5)(303, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "S\u00ED, todos tus env\u00EDos viajan acompa\u00F1ados de un seguro, el cual indemniza el valor del producto en caso de p\u00E9rdida o robo (sujeto a previa evaluaci\u00F3n). Por eso es importante que declares tus env\u00EDos con un documento de sustento (factura, boleta, etc.), de no ser declarado tu envi\u00F3, solo reconocemos hasta 10 veces el flete, (sujeto a previa evaluaci\u00F3n). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 3)(307, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "15. \u00BFCU\u00C1NTO TIEMPO PUEDE PERMANECER UNA MERCADER\u00CDA EN EL ALMAC\u00C9N DE LA AGENCIA? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 5)(310, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "El cliente tiene un plazo m\u00E1ximo de 7 d\u00EDas calendario para recoger su mercader\u00EDa, pasado ese tiempo la empresa procede a cobrar un valor del 10% del flete por mes de almacenamiento. T\u00E9rminos y condiciones se\u00F1alados en los puntos 12; 13; 14 y 15. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 3)(314, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "16. SOMOS UNA EMPRESA QUE REALIZA MUCHOS ENV\u00CDOS A LA VEZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 5)(317, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Marvisur cuenta con una agencia en la ciudad de Lima donde puede realizar env\u00EDos simult\u00E1neos para distintos destinos desde una misma agencia, vis\u00EDtanos en la siguiente direcci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " JR. SEBASTIAN LORENTE NRO. 453-495- BARRIOS ALTOS LIMA LIMA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".titulo[_ngcontent-%COMP%] {\n  background-color: #e61a23;\n  color: white;\n  padding-left: 20px;\n  border-top-left-radius: 25px;\n}\n\n.cuerpo[_ngcontent-%COMP%] {\n  background-color: white;\n  border-color: #e61a23 !important;\n  border-width: 4px !important;\n  padding-left: 10px;\n  margin-right: 20px;\n  width: 100%;\n  border-bottom-right-radius: 25px;\n}\n\n.info-sucu[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 10 px;\n}\n\n.fa-check-circle[_ngcontent-%COMP%] {\n  color: #e61a23;\n  margin-right: 10px;\n}\n\n.pf-subtitulos[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.letratitupregufre[_ngcontent-%COMP%] {\n  color: #e61a23;\n  text-align: start;\n  font-family: \"Montserrat\", sans-serif;\n  position: relative;\n  font-weight: bolder;\n  font-size: 28px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWd1bnRhc2ZyZWN1ZW50ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0MsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJTCIsImZpbGUiOiJwcmVndW50YXNmcmVjdWVudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYxYTIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxufVxyXG4uY3VlcnBvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTYxYTIzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5pbmZvLXN1Y3Uge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwICAgcHg7XHJcbn1cclxuLmZhLWNoZWNrLWNpcmNsZXtcclxuICAgIGNvbG9yOiAjZTYxYTIzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5wZi1zdWJ0aXR1bG9ze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxldHJhdGl0dXByZWd1ZnJle1xyXG4gICAgY29sb3I6ICNlNjFhMjM7XHJcbiAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3969:
/*!***********************************************************!*\
  !*** ./src/app/components/secciones/seccion.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionComponent": () => (/* binding */ SeccionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class SeccionComponent {
}
SeccionComponent.ɵfac = function SeccionComponent_Factory(t) { return new (t || SeccionComponent)(); };
SeccionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeccionComponent, selectors: [["app-seccion"]], decls: 1, vars: 0, template: function SeccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 7202:
/*!***************************************************************************************!*\
  !*** ./src/app/components/secciones/solucionesenlinea/solucionesenlinea.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolucionesenlineaComponent": () => (/* binding */ SolucionesenlineaComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/solucion */ 4934);
/* harmony import */ var src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/footer.service */ 2902);
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-file-uploader */ 9580);










function SolucionesenlineaComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Se ingres\u00F3 correctamente, El c\u00F3digo de la soluci\u00F3n se envi\u00F3 a su correo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SolucionesenlineaComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No se ingres\u00F3, verifique los datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SolucionesenlineaComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ingresando Datos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class SolucionesenlineaComponent {
  constructor(_solucionesService) {
    this._solucionesService = _solucionesService;
    this.submitted = false;
    this.flagSoluciones = true;
    this.status = "";
    this.afuConfig = {
      multiple: false,
      maxSize: "5",
      uploadAPI: {
        url: _services_global__WEBPACK_IMPORTED_MODULE_3__.global.url + 'uploadadjuntos'
      },
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: true,
      attachPinText: 'Seleccione Archivo...'
    };
    this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
    this.check = 0;
  }

  ngOnInit() {}

  adjuntoUpload(e) {
    this.solucionModel.adjuntar_sol = '-';
    let res = JSON.parse(e.response);
    this.solucionModel.adjuntar_sol = res.file;
    this.flagSoluciones = false;
  }

  onSubmitSolucionesenlinea() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var i = 1; i < 3; i++) {
        yield _this.delay(1000);
      } //this.submitted = true;


      if (_this.solucionModel.adjuntar_sol == 'No hay archivo') {
        _this._solucionesService.create(_this.solucionModel).subscribe(response => {
          if (response.status == 'success') {
            _this.solucionModel = response.soluciones;
            _this.check = 1;
            _this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
            _this.afuConfig.attachPinText = "Seleccione Archivo...";
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          console.log(error);
          _this.check = 2;
        });
      } else {
        while (_this.flagSoluciones) {
          yield _this.delay(1000);
        }

        _this._solucionesService.create(_this.solucionModel).subscribe(response => {
          if (response.status == 'success') {
            _this.solucionModel = response.soluciones;
            _this.check = 1;
            _this.solucionModel = new src_app_models_solucion__WEBPACK_IMPORTED_MODULE_1__.Solucion(0, "", "", "", "", "", "", "", "", "", "No hay archivo", "1");
            _this.afuConfig.attachPinText = "Seleccione Archivo...";
          } else {
            _this.status = 'error';
            _this.check = 2;
          }
        }, error => {
          _this.status = 'error';
          console.log(error);
          _this.check = 2;
        });
      }
    })();
  }

  close() {
    this.flagSoluciones = true;
    this.check = 0;
    window.location.reload();
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

SolucionesenlineaComponent.ɵfac = function SolucionesenlineaComponent_Factory(t) {
  return new (t || SolucionesenlineaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_2__.SolucionesService));
};

SolucionesenlineaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SolucionesenlineaComponent,
  selectors: [["app-solucionesenlinea"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_2__.SolucionesService])],
  decls: 108,
  vars: 13,
  consts: [[1, "online-solutions"], [1, "container"], [1, "tituSoluLinea"], [1, "letra-soluc"], [3, "ngSubmit"], ["CurriculumForm", "ngForm"], [1, "form-group", "was-validated"], ["for", "nombresyape"], ["type", "text", "id", "nombres", "name", "nombresyape", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombresyape", "ngModel"], [1, "invalid-feedback"], [1, "row", "r1"], [1, "form-group", "col-lg-5", "was-validated"], ["for", "edad"], ["type", "text", "id", "edad", "required", "", "name", "edad", "placeholder", "0022", 1, "form-control", 3, "ngModel", "ngModelChange"], ["edad", "ngModel"], [1, "col-1"], [1, "form-group", "col-lg-6", "was-validated"], ["for", "numero"], ["type", "tel", "required", "", "name", "numero", "placeholder", "2578", 1, "form-control", 3, "ngModel", "ngModelChange"], ["numero", "ngModel"], ["for", "origen"], ["type", "text", "id", "origen", "required", "", "name", "origen", "placeholder", "Arequipa", 1, "form-control", 3, "ngModel", "ngModelChange"], ["origen", "ngModel"], ["for", "destino"], ["type", "tel", "required", "", "name", "destino", "placeholder", "Lima", 1, "form-control", 3, "ngModel", "ngModelChange"], ["destino", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "required", "", "name", "email", "placeholder", "example@gmail.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "telefono"], ["type", "text", "id", "telefono", "required", "", "name", "telefono", "placeholder", "Arequipa", 1, "form-control", 3, "ngModel", "ngModelChange"], ["telefono", "ngModel"], ["name", "tipo4", "required", "", 1, "col-12", "browser-default", "custom-select", 3, "ngModel", "ngModelChange"], ["tipo4", "ngModel"], ["value", "", "disabled", "true"], ["value", "DEMORA EN LA ENTREGA"], ["value", "MERCADERIA DA\u00D1ADA"], ["value", "OTROS"], ["for", "exampleFormControlTextarea1 "], ["id", "detalle", "required", "", "name", "detalle", "placeholder", "Detalle...", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["detalle", "ngModel"], [1, "form-group"], ["for", "file", 1, "form-label"], [3, "config", "ApiResponse"], ["type", "submit", "data-toggle", "modal", "data-dismiss", "modal", "data-target", "#modalRespuesta3", 1, "btn", "btn-envio-solicitud", "btn-success", "col-lg-6"], ["id", "modalRespuesta3", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm", "modal-cotiza"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"]],
  template: function SolucionesenlineaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "SOLUCIONES EN L\u00CDNEA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "POR ESTE MEDIO NO SE HACEN CAMBIOS DE DATOS CONSIGNADOS EN GU\u00CDA (cambio de destino, ni cambio de destinatario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SolucionesenlineaComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmitSolucionesenlinea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Apellidos y Nombres");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.solucionModel.nombres_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Serie Gu\u00EDa:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.solucionModel.serie_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17)(25, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "N\u00FAmero Gu\u00EDa:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.solucionModel.numero_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 11)(32, "div", 12)(33, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Origen:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.solucionModel.origen_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 17)(41, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Destino:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_43_listener($event) {
        return ctx.solucionModel.destino_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 6)(48, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Correo Electr\u00F3nico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "input", 28, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.solucionModel.correo_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 11)(55, "div", 12)(56, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Celular:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "input", 31, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_input_ngModelChange_58_listener($event) {
        return ctx.solucionModel.celular_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 17)(63, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Seleccione inconveniente:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "select", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_select_ngModelChange_65_listener($event) {
        return ctx.solucionModel.inconveniente_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Seleccione..");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "DEMORA EN LA ENTREGA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "MERCADERIA DA\u00D1ADA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "OTROS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Seleccione una opci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 6)(78, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Detalle:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "textarea", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SolucionesenlineaComponent_Template_textarea_ngModelChange_80_listener($event) {
        return ctx.solucionModel.detalle_sol = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "*Campo Obligatorio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 42)(85, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Adjuntar Archivo (M\u00E1ximo 2 MB):");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "angular-file-uploader", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ApiResponse", function SolucionesenlineaComponent_Template_angular_file_uploader_ApiResponse_87_listener($event) {
        return ctx.adjuntoUpload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Enviar Solicitud");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "br")(91, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 46)(93, "div", 47)(94, "div", 48)(95, "div", 49)(96, "h5", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Mensaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SolucionesenlineaComponent_Template_button_click_98_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, SolucionesenlineaComponent_div_102_Template, 2, 0, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, SolucionesenlineaComponent_div_103_Template, 2, 0, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, SolucionesenlineaComponent_div_104_Template, 2, 0, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 55)(106, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SolucionesenlineaComponent_Template_button_click_106_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.nombres_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.serie_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.numero_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.origen_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.destino_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.correo_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.celular_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.inconveniente_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.solucionModel.detalle_sol);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.afuConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.check == 0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__.AngularFileUploaderComponent],
  styles: [".tituSoluLinea[_ngcontent-%COMP%]{\r\n    color: #e61a23;\r\n     text-align: start;\r\n     font-family: 'Montserrat', sans-serif;\r\n\r\n     position: relative;\r\n     font-weight: bolder;\r\n     font-size: 28px;\r\n     \r\n     margin-bottom: 15px;\r\n}\r\n.btn-envio-solicitud[_ngcontent-%COMP%] {\r\n    background-color: #e61a23;\r\n    border: none;\r\n}\r\n.letra-soluc[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    margin-bottom: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbHVjaW9uZXNlbmxpbmVhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0tBQ2IsaUJBQWlCO0tBQ2pCLHFDQUFxQzs7S0FFckMsa0JBQWtCO0tBQ2xCLG1CQUFtQjtLQUNuQixlQUFlO0tBQ2Ysc0JBQXNCO0tBQ3RCLG1CQUFtQjtBQUN4QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic29sdWNpb25lc2VubGluZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1U29sdUxpbmVhe1xyXG4gICAgY29sb3I6ICNlNjFhMjM7XHJcbiAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgIC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uYnRuLWVudmlvLXNvbGljaXR1ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYxYTIzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5sZXRyYS1zb2x1Y3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 1213:
/*!***************************************************************************!*\
  !*** ./src/app/components/secciones/sugerencias/sugerencias.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SugerenciasComponent": () => (/* binding */ SugerenciasComponent),
/* harmony export */   "modalSuggestionsComponent": () => (/* binding */ modalSuggestionsComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/sugerencia */ 9299);
/* harmony import */ var src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/footer.service */ 2902);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function modalSuggestionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Gracias por tu sugerencia, nos ayudas a seguir mejorando. \uD83D\uDE0A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function modalSuggestionsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No se envi\u00F3, verifique los datos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function modalSuggestionsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ingresando Datos...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SugerenciasComponent {
    constructor(_solucionesService, dialog) {
        this._solucionesService = _solucionesService;
        this.dialog = dialog;
        this.submitted = false;
        this.status = "";
        this.sugerenciaModel = new src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_0__.Sugerencia(0, "", "", "", "", "1");
        this.check = 0;
    }
    ngOnInit() { }
    singleNumber(e) {
        // 13 -> para el botón enter
        // 9 -> para el botón tab
        var key = window.Event ? e.which : e.keyCode;
        return (key >= 48 && key <= 57);
    }
    sendOpenModal() {
        this.dialog.open(modalSuggestionsComponent, {
            data: [{
                    check: this.check
                }]
        });
    }
    onSubmitSugerencia() {
        this.submitted = true;
        this._solucionesService.createSugerencia(this.sugerenciaModel).subscribe(response => {
            if (response.status == 'success') {
                this.sugerenciaModel = response.sugerencias;
                this.check = 1;
                this.sugerenciaModel = new src_app_models_sugerencia__WEBPACK_IMPORTED_MODULE_0__.Sugerencia(0, "", "", "", "", "1");
                this.sendOpenModal();
            }
            else {
                this.status = 'error';
                this.check = 2;
                this.sendOpenModal();
            }
        }, error => {
            this.status = 'error';
            console.log(error);
            this.check = 2;
        });
    }
}
SugerenciasComponent.ɵfac = function SugerenciasComponent_Factory(t) { return new (t || SugerenciasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_1__.SolucionesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
SugerenciasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SugerenciasComponent, selectors: [["app-sugerencias"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_services_footer_service__WEBPACK_IMPORTED_MODULE_1__.SolucionesService])], decls: 20, vars: 4, consts: [[1, "suggestions"], [1, "ctn-suggestions"], [1, "form", 3, "ngSubmit"], [1, "field"], ["autocomplete", "off", "placeholder", "Nombres y apellidos", "type", "text", "name", "nombresyape", "required", "", 1, "input-field", 3, "ngModel", "ngModelChange"], ["nombresyape", "ngModel"], ["autocomplete", "off", "placeholder", "Celular (Opcional)", "type", "text", "required", "", "name", "telefono", "maxlength", "9", "minlength", "9", 1, "input-field", 3, "ngModel", "ngModelChange", "keypress"], ["telefono", "ngModel"], ["autocomplete", "off", "placeholder", "Ciudad", "type", "text", "required", "", "name", "ciudad", 1, "input-field", 3, "ngModel", "ngModelChange"], ["ciudad", "ngModel"], ["placeholder", "Detalles...", "required", "", "name", "detalle", "rows", "8", 1, "input-field", 3, "ngModel", "ngModelChange"], ["detalle", "ngModel"], [1, "fa-solid", "fa-paper-plane", "fa-beat-fade"]], template: function SugerenciasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Buz\u00F3n de sugerencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SugerenciasComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmitSugerencia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SugerenciasComponent_Template_input_ngModelChange_6_listener($event) { return ctx.sugerenciaModel.nom_sug = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SugerenciasComponent_Template_input_ngModelChange_9_listener($event) { return ctx.sugerenciaModel.tel_sug = $event; })("keypress", function SugerenciasComponent_Template_input_keypress_9_listener($event) { return ctx.singleNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 3)(12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SugerenciasComponent_Template_input_ngModelChange_12_listener($event) { return ctx.sugerenciaModel.ciu_sug = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3)(15, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SugerenciasComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.sugerenciaModel.det_sug = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sugerenciaModel.nom_sug);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sugerenciaModel.tel_sug);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sugerenciaModel.ciu_sug);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.sugerenciaModel.det_sug);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.suggestions[_ngcontent-%COMP%] {\n  background-image: url('LINEAS M.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center center;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  padding: 100px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  background-image: linear-gradient(to right, hsl(1deg, 100%, 55%), hsl(239deg, 100%, 50%));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0.9);\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  background-size: 100% auto;\n  -webkit-text-fill-color: hsl(1deg, 100%, 55%);\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 450px;\n  width: 100%;\n  gap: 30px;\n  margin: auto;\n  padding: 25px;\n  background-color: transparent;\n  border-radius: 25px;\n  border: 1px solid transparent;\n  transition: 0.4s ease-in-out;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]:hover {\n  border: 1px solid hsl(1deg, 100%, 55%);\n  box-shadow: 0 0 10px hsl(0deg, 100%, 71%);\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 22px;\n  padding: 0.6em;\n  border: 1px solid hsl(223deg, 82%, 56%);\n  outline: none;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  color: hsl(0deg, 0%, 0%);\n  padding: 0 10px;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 0.5em;\n  padding-left: 2.3em;\n  padding-right: 2.3em;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  margin: auto;\n  transition: 0.3s ease-in-out;\n  color: hsl(0deg, 0%, 100%);\n  background-color: #646464;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: hsl(0deg, 0%, 0%);\n  color: hsl(0deg, 0%, 100%);\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.suggestions[_ngcontent-%COMP%]   .ctn-suggestions[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsInN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQUE7QUFDQSxpRUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7RUFBQSxzQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG1CQUFBLEVBQUEsTUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Ozs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUEsRUFBQSxNQUFBO0VBQUEsOEJBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQTtFQUFBLFdBQUEsRUFBQSxNQUFBO0VBQUEsZ0NBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsb0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEseUNBQUE7VUFBQSxpQ0FBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7Ozs7O0VBQUEsa0JBQUE7RUFBQSxvQkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxtQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwrR0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsY0FBQTtFQUFBLGNBQUE7RUFBQSxrQkFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTtFQUFBLGVBQUE7QUFBQTtBQUFBO0VBQUEsV0FBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7RUFBQSxxQkFBQSxFQUFBLE1BQUE7RUFBQSx5QkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTs7Ozs7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxlQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxVQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxvQkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7Ozs7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxzQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxhQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTs7RUFBQSxZQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTtFQUFBLDBCQUFBLEVBQUEsTUFBQTtFQUFBLGFBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsa0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFBO0FBQUE7QUFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTtFQUFBLFVBQUE7QUFBQTtBQUFBOzs7RUFBQSxnQkFBQTtFQUFBLFNBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsZ0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOztFQUFBLFVB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Q0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJEcERDO0VDcURELHlCQUFBO0FBd0pSO0FBdkpRO0VBQ0UsbUNEdERGO0VDdURFLDBCRHhERDtBQ2lOVDtBQXZKUTtFQUNFLGtCQUFBO0FBeUpWO0FBckpJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXVKTiIsImZpbGUiOiJzdWdnZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhaWx3aW5kICovXHJcbkB0YWlsd2luZCBiYXNlO1xyXG5AdGFpbHdpbmQgY29tcG9uZW50cztcclxuQHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHJcbi8qIEltYWdlcyAqL1xyXG4kdXJsLWltZzogXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1wiO1xyXG4kdXJsLWltZy1uZXdzOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3cy9cIjtcclxuJHVybC1pbWctc2xpZGU6IFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlL1wiO1xyXG4kdXJsLWF1OiAnLi4vLi4vLi4vYXNzZXRzL25ld2ltZy8nO1xyXG5cclxuLyogU1ZHcyAqL1xyXG4kdXJsLXN2ZzogJy4uLy4uLy4uL2Fzc2V0cy9zdmcvJztcclxuXHJcbi8qIFRleHRvICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBhbWVydGhhO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9hbWVydGhhLXBlcnNvbmFsLXVzZS1vbmx5LnR0ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9Nb250c2VycmF0LUJsYWNrSXRhbGljLm90ZicpO1xyXG59XHJcblxyXG4vKiBDb2xvcnMgKi9cclxuJGJsYW5jbzogaHNsKDAsIDAlLCAxMDAlKTtcclxuJG5lZ3JvOiBoc2woMCwgMCUsIDAlKTtcclxuJGNvbG9yLWdsb2JhbC1jbGFybzogaHNsKDEsIDEwMCUsIDU1JSk7XHJcbiRhbmFyYW5qYWRvOiBoc2woMzksIDEwMCUsIDUwJSk7XHJcbiRncmlzOiBoc2woMCwgMCUsIDgwJSk7XHJcbiR2ZXJkZTogaHNsKDEyOCwgNTElLCA0OSUpO1xyXG4kYXp1bDogaHNsKDIzOSwgMTAwJSwgNTAlKTtcclxuJGNlbGVzdGU6IGhzbCgyMDcsIDkwJSwgNTQlKTtcclxuJHNvbWJyYS1yb2pvLWdsb2JhbDogaHNsYSgwLCA1NCUsIDU5JSwgMC4zMTQpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTI6IGhzbCgwLCAxMDAlLCA3MSUpO1xyXG4kcm9zYWRvLWJvcmRlOiBoc2woMzQ5LCAxMDAlLCA2OSUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTItdHJhbnNwYXJlbnRlOiBoc2xhKDAsIDEwMCUsIDgwJSwgMC41NDgpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvLTM6IGhzbCgzNTgsIDgwJSwgNTAlKTtcclxuJGNvbG9yLWdsb2JhbC1vc2N1cm86IGhzbCgxLCAxMDAlLCAzMiUpO1xyXG4kYXp1bC1jbGFybzogaHNsKDIyMywgODIlLCA1NiUpO1xyXG4kYXp1bC1vc2N1cm86IGhzbCgyMjMsIDEwMCUsIDMwJSk7XHJcbiRjZWxlc3RlLWNsYXJvOiBoc2woMjA3LCAxMDAlLCA2OSUpO1xyXG4kdmVyZGUtY2xhcm86IGhzbCgxMzEsIDcyJSwgNTYlKTtcclxuJHZlcmRlLW9zY3VybzogaHNsKDEzMSwgMTAwJSwgMjIlKTtcclxuJGdyaXMtYzogaHNsKDAsIDAlLCA5MSUpO1xyXG4kZ3Jpcy10cmFuc3BhcmVudGU6IGhzbGEoMCwgMCUsIDgwJSwgMC42MzUpO1xyXG4kZ3Jpcy1pbnRlbnNvOiBoc2woMCwgMCUsIDU5JSk7XHJcbiRia2c6IGhzbCgzNDAsIDEwJSwgNiUpO1xyXG4kYmtnLWNhcmQ6IGhzbCgwLCAwJSwgMTMlKTtcclxuJGNvbG9yLWxjdi1uZnk6IGhzbCgyMjUsIDczJSwgNTclKTtcclxuJGNvbG9yLWxjdi1uZnktY2xhcm86IGhzbCgyMjUsIDEwMCUsIDc1JSk7XHJcbi8qIFJlZGVzIHNvY2lhbGVzKi9cclxuJGZhY2Vib29rOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkYXp1bCwgJGF6dWwtY2xhcm8sICRjZWxlc3RlLCAkY2VsZXN0ZS1jbGFybywgJGJsYW5jbyk7XHJcbiRpbnN0YWdyYW06IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQ0RFMzAsICNFOTcxMkEsICNEMjMxM0IsICNBRTQxOTgsICM3NTQwMUEsICM1NDQzQTgpO1xyXG4kbGlua2VkaW46IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMDc3QjUsICM1ZmQyZmYpO1xyXG4kdGlrdG9rOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjY2MwODJjLCAjMjUwMDA3LCAkbmVncm8pO1xyXG5cclxuKiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm94LW1vZGFsLXdzcCB7XHJcbiAgLndoYXRzYXBwIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLWNsYXJvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGF0LWJvdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1jbGFybztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1bC1vc2N1cm87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHZoO1xyXG4gIC5yZWxldmFudCxcclxuICAud2h5LWNob29zZS11cyxcclxuICAuZm9uZG9uZWdyb2luaWNpbyxcclxuICAuc2VydmljZXMsXHJcbiAgLm5ld3MsXHJcbiAgLm1vZGFsIHtcclxuICAgIG1hcmdpbjogMTMwcHggYXV0bztcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ2xvYmFsLWNsYXJvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAgU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLW9zY3VybztcclxuICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtaXQsXHJcbmJvZHkubW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLmN0bi1iYWNrZHJvcDEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMW1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMzIpO1xyXG4gIH1cclxufVxyXG5ib2R5Lm1vZGFsLWl0IC5hbGwtbW9kYWwtbWl0LFxyXG5ib2R5Lm1vZGFsLWxjdiAuYWxsLW1vZGFsLWxjdixcclxuYm9keS5tb2RhbC1uZnkgLmFsbC1tb2RhbC1uZnkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLnN1Z2dlc3Rpb25zIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLycrJHVybC1hdSsnTElORUFTIE0ucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAuY3RuLXN1Z2dlc3Rpb25zIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwMHB4O1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yLWdsb2JhbC1jbGFybywgJGF6dWwpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBnYXA6IDMwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLWdsb2JhbC1jbGFyby0yO1xyXG4gICAgICB9XHJcbiAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogMC42ZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGF6dWwtY2xhcm87XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiAkbmVncm87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjNlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjNlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5lZ3JvO1xyXG4gICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0gLmJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });
class modalSuggestionsComponent {
    constructor(data) {
        this.check = data[0].check;
    }
}
modalSuggestionsComponent.ɵfac = function modalSuggestionsComponent_Factory(t) { return new (t || modalSuggestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
modalSuggestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: modalSuggestionsComponent, selectors: [["modal-suggestion"]], decls: 7, vars: 3, consts: [[1, "modal-body"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function modalSuggestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, modalSuggestionsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, modalSuggestionsComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, modalSuggestionsComponent_div_3_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.check == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 3751:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/secciones/terminosycondiciones/terminosycondiciones.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminosycondicionesComponent": () => (/* binding */ TerminosycondicionesComponent),
/* harmony export */   "TyCModalComponent": () => (/* binding */ TyCModalComponent),
/* harmony export */   "TyCModalComponentText": () => (/* binding */ TyCModalComponentText)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);


class TerminosycondicionesComponent {
    constructor() { }
    ngOnInit() {
    }
}
TerminosycondicionesComponent.ɵfac = function TerminosycondicionesComponent_Factory(t) { return new (t || TerminosycondicionesComponent)(); };
TerminosycondicionesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminosycondicionesComponent, selectors: [["app-terminosycondiciones"]], decls: 2, vars: 0, consts: [[1, "terms-conditions"]], template: function TerminosycondicionesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tyctext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: function () { return [TyCModalComponentText]; }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eWNtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
class TyCModalComponent {
}
TyCModalComponent.ɵfac = function TyCModalComponent_Factory(t) { return new (t || TyCModalComponent)(); };
TyCModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TyCModalComponent, selectors: [["tycmodal"]], decls: 5, vars: 0, consts: [["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function TyCModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tyctext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 0)(3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Salir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: function () { return [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, TyCModalComponentText]; }, styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  margin-right: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInQmY21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJ0JmNtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1yaWdodDogMS41cHg7XHJcbn0iXX0= */"] });
class TyCModalComponentText {
}
TyCModalComponentText.ɵfac = function TyCModalComponentText_Factory(t) { return new (t || TyCModalComponentText)(); };
TyCModalComponentText.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TyCModalComponentText, selectors: [["tyctext"]], decls: 111, vars: 0, consts: [[1, "letratercondtitul"], [1, "parrafo-0"]], template: function TyCModalComponentText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00C9RMINOS Y CONDICIONES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Conste por el presente documento, que al momento de contratar los servicios de la empresa AREQUIPA EXPRESO MARVISUR E.I.R.L, en adelante ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", Usted, en calidad de REMITENTE en adelante ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " y en nombre de cualquier persona interesada por el servicio de transporte (DESTINATARIO), declara conocer, cumplir y aceptar las condiciones abajo especificadas de acuerdo a las disposiciones legales y reglamentarias vigentes seg\u00FAn DECRETO SUPREMO N\u00BA 017-2009-MTC y CODIGO CIVIL: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 1. Por mercanc\u00EDa y/o carga. Se entiende a todos los bienes que son entregados a LA EMPRESA para el transporte de la misma. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 2. Cuando el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CLIENTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " entrega una mercanc\u00EDa y/o carga mal embalada y/o empaquetada, adem\u00E1s con error en el rotulado, es decir sin la indicaci\u00F3n de FRAGIL y/o lo que corresponda en caso de contar con un embalaje deficiente para su traslado, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " se reserva el derecho de aceptar y transportar la carga y/o mercanc\u00EDa, salvo QUE POR CUENTA Y RIESGO DEL REMITENTE, acepte el traslado con ese embalaje, eximiendo a LA EMPRESA de cualquier responsabilidad, si a consecuencia de lo antes descrito se ocasionaran da\u00F1os los bienes de terceros y bienes de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LA EMPRESA, EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " asumir\u00E1 los da\u00F1os y perjuicios ocasionados.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 3. EL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " est\u00E1 obligado a declarar el contenido de su mercanc\u00EDa y/o carga as\u00ED como entregar la documentaci\u00F3n legal que permita su transporte, pues en caso de que oculte informaci\u00F3n y/o documentaci\u00F3n, o se env\u00EDe mercanc\u00EDas y/o carga de sustancias y/o bienes restringidos, prohibidos e inaceptables para el transporte, con informaci\u00F3n o documentaci\u00F3n falsa o que no corresponda a la naturaleza de los bienes, el CLIENTE, asumir\u00E1 la responsabilidad administrativa, civil y/o penal que su acci\u00F3n amerite, eximiendo de responsabilidad a la EMPRESA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " no transporta televisores, alimentos perecibles, productos detallados por SENASA, DIGESA Y SUNAT- ADUANAS, cuya comercializaci\u00F3n est\u00E9n prohibidas o restringidas por ley. Tampoco transporta toda clase de armas, municiones, explosivos o cualquier material inflamable, corrosivo, t\u00F3xico o peligroso, cilindros con contenido de gas, sin la documentaci\u00F3n legal ni hoja de seguridad correspondientes. En el caso de especies silvestres y forestales no se transporta sin la gu\u00EDa de remisi\u00F3n de SERFOR. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 5. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " no se responsabiliza, cuando la mercanc\u00EDa y/o carga sufra perdida, extravi\u00F3, sustracci\u00F3n, deterioro o destrucci\u00F3n, debido a circunstancias o factores ajenos a su control, ya sea por caso fortuito y de fuerza mayor, como fen\u00F3menos naturales, asaltos, siniestros, huelgas, Interrupci\u00F3n de las v\u00EDas terrestres, incautaciones por funcionarios por SUNAT Y ADUANAS o representantes del Ministerio Publico. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 6. La entrega de las mercanc\u00EDas y/o carga se realiza en tiempo prudencial de acuerdo a las distancias, programaci\u00F3n, disponibilidad de las unidades vehiculares, por lo que no acarrea responsabilidad para ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ", y no asumir\u00E1 penalidades, multas u otros, que deriven de las entregas efectuadas dentro del tiempo prudencial para el transporte y entrega de los bienes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 7. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " no se responsabiliza por el env\u00EDo de dinero, valores y joyas como mercanc\u00EDa y/o carga que no hayan sido debidamente declaradas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 8. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " se ve obligada a sub contratar transporte fluvial en sus rutas con origen y/o destino Iquitos, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " acepta esta condici\u00F3n, asumiendo en su totalidad los riesgos que se puedan derivar del transporte de la mercader\u00EDa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 9. Para los casos previstos en la legislaci\u00F3n sobre la materia, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " se obliga a entregar a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " el comprobante de pago que acredita su derecho de propiedad o posesi\u00F3n sobre la mercanc\u00EDa y/o carga de transporte, el cliente remitente es el \u00FAnico responsable ante la administraci\u00F3n tributaria y otros con relaci\u00F3n a la omisi\u00F3n y/o defectos de los datos consignados en el comprobante emitido por parte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 10. La indemnizaci\u00F3n a favor de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " por una mercader\u00EDa no sustentada con comprobantes de pago se regir\u00E1 de acuerdo a lo estipulado en el Art.146 del D.S.032-2005- MTC, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "REGLAMENTO NACIONAL DE FERROCARRILES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " es decir que se abonara como \u00FAnica indemnizaci\u00F3n 10 veces el valor del servicio (FLETE) siempre y cuando guarde relaci\u00F3n con lo enviado. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 11. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " esta sujeto a las pol\u00EDticas de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " en cuanto a sus servicios de reparto, considerando zonas accesibles, peso, volumen y las condiciones favorables para la entrega. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 12. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " tiene un plazo m\u00E1ximo de 7 d\u00EDas calendarios, para recoger su mercader\u00EDa, pasado este tiempo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " proceder\u00E1 a cobrar el valor del 10% del flete por mes y sin fraccionamiento por concepto de almacenaje. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " 13. Pasados tres meses, si la mercader\u00EDa no fue recogida, ser\u00E1 trasladada a los almacenes generales de Lima y Arequipa, los gastos de almacenaje y transporte ser\u00E1n asumidos por el cliente, este \u00FAltimo deber\u00E1 recoger su mercader\u00EDa en los almacenes antes indicados asumiendo los gastos que se deriven de \u00E9l. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " 14. Pasado el a\u00F1o desde la fecha que fue ingresada a los almacenes generales, la mercanc\u00EDa y/o carga ser\u00E1 declarada en abandono, por lo cual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " autoriza y faculta expresamente a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, ", para que esta disponga la referida mercanc\u00EDa y/o carga, en la forma que estime conveniente. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 15. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "LA EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " est\u00E1 facultada a disponer la eliminaci\u00F3n o incineraci\u00F3n de las encomiendas que contengan bienes perecibles, que por no haber sido recepcionados o reclamadas en su debida oportunidad, se encuentran en evidente estado de putrefacci\u00F3n org\u00E1nica, esta incineraci\u00F3n proceder\u00E1 inclusive antes del vencimiento de los plazos se\u00F1alados en las condiciones 12,13 y 14. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " 16. En tal sentido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " declara conocer los alcances de las Condiciones precedentes Motivo por el cual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "EL CLIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " renuncia a cualquier derecho a reembolso o indemnizaci\u00F3n de los mismos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".parrafo-0[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n}\r\n.letratercondtitul[_ngcontent-%COMP%]{\r\n    color: #de0915;\r\n    text-align: start;\r\n    font-family: 'Montserrat', sans-serif;\r\n\r\n    position: relative;\r\n    font-weight: bolder;\r\n    font-size: 28px;\r\n    margin-bottom: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbm9zeWNvbmRpY2lvbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUNBQXFDOztJQUVyQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoidGVybWlub3N5Y29uZGljaW9uZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJyYWZvLTB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4ubGV0cmF0ZXJjb25kdGl0dWx7XHJcbiAgICBjb2xvcjogI2RlMDkxNTtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5086:
/*!***************************************************************!*\
  !*** ./src/app/components/sucursales/sucursales.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SucursalesComponent": () => (/* binding */ SucursalesComponent)
/* harmony export */ });
/* harmony import */ var D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/departamento.service */ 9899);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);













function SucursalesComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SucursalesComponent_mat_option_23_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const departamento_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onOptionsSelected(departamento_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const departamento_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", departamento_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", departamento_r8.nombre, " ");
  }
}

function SucursalesComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SucursalesComponent_mat_option_29_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const provincia_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.provinciaSelect(provincia_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const provincia_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", provincia_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", provincia_r11.ciudad, " ");
  }
}

function SucursalesComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SucursalesComponent_mat_option_34_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const sucursal_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.suscursalSelect(sucursal_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sucursal_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", sucursal_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sucursal_r14.titulo, " ");
  }
}

function SucursalesComponent_agm_marker_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "agm-marker", 38)(1, "agm-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const sucursal_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", sucursal_r17.latitud)("longitude", sucursal_r17.longitud)("iconUrl", ctx_r6.ico)("agmFitBounds", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sucursal_r17.titulo, " ");
  }
}

function SucursalesComponent_ul_42_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r18.sucursalesSelecionada[0].direccion, " ");
  }
}

function SucursalesComponent_ul_42_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r19.sucursalesSelecionada[0].referencia, " ");
  }
}

function SucursalesComponent_ul_42_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r20.sucursalesSelecionada[0].telefono_primario, " ");
  }
}

function SucursalesComponent_ul_42_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r21.sucursalesSelecionada[0].correo, " ");
  }
}

function SucursalesComponent_ul_42_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r22.sucursalesSelecionada[0].horario, " ");
  }
}

function SucursalesComponent_ul_42_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", ctx_r23.sucursalesSelecionada[0].detalles, " ");
  }
}

function SucursalesComponent_ul_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SucursalesComponent_ul_42_li_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.howToGet(ctx_r25.sucursalesSelecionada[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u00A0 C\u00F3mo llegar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function SucursalesComponent_ul_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SucursalesComponent_ul_42_li_1_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SucursalesComponent_ul_42_li_2_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SucursalesComponent_ul_42_li_3_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SucursalesComponent_ul_42_li_4_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SucursalesComponent_ul_42_li_5_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SucursalesComponent_ul_42_li_6_Template, 3, 1, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SucursalesComponent_ul_42_li_7_Template, 5, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.sucursales[0].direccion);
  }
}

class SucursalesComponent {
  constructor(_departamentoService, _SucursalesTodasService) {
    this._departamentoService = _departamentoService;
    this._SucursalesTodasService = _SucursalesTodasService;
    this.ico = "assets/images/cursormarvisur.png";
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    this.status = '';
    this.lat = -10.446;
    this.lng = -74.685;
    this.flagDepa = true;
    this.flagProvi = true;
    this.flaginformacion = false;
  }

  ngOnInit() {
    this.cargarDepartamentos();
    this.cargarTodas();
  }

  displayFnDepartments(departaments) {
    return departaments && departaments.nombre ? departaments.nombre : '';
  }

  displayFnProvinces(provincis) {
    return provincis && provincis.ciudad ? provincis.ciudad : '';
  }

  displayFnSucursal(sucursales) {
    return sucursales && sucursales.titulo ? sucursales.titulo : '';
  }

  cargarTodas() {
    this._departamentoService.getSucursalesTodas().subscribe(response => {
      if (response.status = 'success') {
        this.sucursalesGPS = response.sucursales;
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  cargarDepartamentos() {
    this._departamentoService.getDepartamento().subscribe(response => {
      if (response.status = 'success') {
        this.departamentos = response.departamentos;
        this.firstDep = this.departamentos[0].nombre;
        this.flagDepa = false;
        this.optionsDepartments = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => typeof value === 'string' ? value : value?.nombre), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(name => name ? this.departamentos.filter(option => option.nombre.toLowerCase().includes(name.toLocaleLowerCase())) : this.departamentos.slice()));
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  cargarProvincias() {
    var _this = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (_this.flagDepa) {
        yield _this.delay(1000); //console.log("esperando...")
      }

      _this._departamentoService.getSucursalesbyDepartamento(_this.firstDep).subscribe(response => {
        if (response.status = 'success') {
          _this.provincias = response.sucursales;
          _this.firstPro = _this.provincias[0].ciudad;
          _this.flagProvi = false;
        }
      }, error => {
        _this.status = 'error';
        console.log(error);
      });
    })();
  }

  cargarSucursales() {
    var _this2 = this;

    return (0,D_WebSites_marvisur_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.flaginformacion = true;

      while (_this2.flagProvi) {
        yield _this2.delay(1000); //console.log("esperando...") 
      }

      _this2._departamentoService.getSucursalesbyCiudad(_this2.firstPro).subscribe(response => {
        if (response.status = 'success') {
          _this2.sucursalesSelecionada = _this2.sucursales;
        }
      }, error => {
        _this2.status = 'error';
        console.log(error);
      });
    })();
  }

  onOptionsSelected(e) {
    this.flaginformacion = false;

    this._departamentoService.getDepartamentobyid(e.id).subscribe(response => {
      if (response.status = 'success') {
        this.departamento = response.departamento;
        this.lat = this.departamento.latitud;
        this.lng = this.departamento.longitud;

        this._SucursalesTodasService.getSucursalesbyDepartamento(this.departamento.nombre).subscribe(response => {
          if (response.status = 'success') {
            this.provincias = response.sucursales;
            this.select = document.getElementById("seleccioneprovincia");
            this.select.selected = true;
            this.select = document.getElementById("seleccionesucursal");
            this.select.selected = true;
          }
        }, error => {
          this.status = 'error';
          console.log(error);
        });
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  suscursalSelect(e) {
    this._SucursalesTodasService.getSucursalesbyid(e.id).subscribe(response => {
      if (response.status = 'success') {
        this.flaginformacion = true;
        this.sucursalesGPS = response.sucursales;
        this.sucursalesSelecionada = response.sucursales;
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  provinciaSelect(e) {
    this.flaginformacion = false;

    this._SucursalesTodasService.getSucursalesbyCiudad(e.ciudad).subscribe(response => {
      if (response.status = 'success') {
        this.sucursales = response.sucursales;
        this.sucursalesGPS = response.sucursales;
        this.select = document.getElementById("seleccionesucursal");
        this.select.selected = true;
      }
    }, error => {
      this.status = 'error';
      console.log(error);
    });
  }

  howToGet(e) {
    window.open(`https://www.google.com/maps/dir/Tu%20ubicación/${e.latitud},${e.longitud}`);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

SucursalesComponent.ɵfac = function SucursalesComponent_Factory(t) {
  return new (t || SucursalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_1__.DepartamentoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_1__.DepartamentoService));
};

SucursalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SucursalesComponent,
  selectors: [["app-sucursales"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([src_app_services_departamento_service__WEBPACK_IMPORTED_MODULE_1__.DepartamentoService])],
  decls: 43,
  vars: 18,
  consts: [["name", "title", "content", "Arequipa Expreso Marvisur"], ["name", "description", "content", "Contamos con m\u00E1s de 130 sucursales en todos los departamentos de nuestro pa\u00EDs."], ["name", "keywords", "content", "CERRO JULI, GARCI CARBAJAL, CHALA, ATICO, CAMANA, ABANCAY, ANDAHUAYLAS, AYACUCHO, BARRANCA, CAJAMARCA, CA\u00D1ETE, CHALHUANCA, CHALLHUAHUACHO, CHICLAYO, CHICLAYO ALMACEN, CHIMBOTE, CHINCHA, CIUDAD DE DIOS, CUSCO, DESAGUADERO, ESPINAR, HUACHO, HUANCAVELICA, HUANCAYO, HUANUCO, HUARAZ, ICA, ILAVE, ILO, IQUITOS, JAEN, JUANJUI, JULIACA, LA JOYA, LA MERCED, LA OROYA, MARCONA, MAZUKO, MOLLENDO, MOQUEGUA, MOYOBAMBA, NAZCA, PUERTO MALDONADO, PAITA, PEDREGAL, PICHANAQUI, PISCO, PIURA, PUCALLPA, PUNO, PUQUIO, QUILLABAMBA, SICUANI, SULLANA, TACNA, TALARA, TARAPOTO, TINGO MARIA, TOCACHE, TRUJILLO, TUMBES, YAUCA, YURIMAGUAS, LIMA SUR, LIMA SUR CHICO, LIMA NORTE, LIMA JULIACA, LIMA CUSCO, LIMA TACNA, LIMA ORIENTE, SELVA CENTRAL, GAMARRA, FIORI, VILLA EL SALVADOR, RAYMONDI, LIMA ALMACEN, LIMA CENTRO -NORTE CHICO, MANCORA, URUBAMBA, BAGUA GRANDE, SAN JUAN DE LURIGANCHO, LOS OLIVOS, CHACHAPOYAS, NUEVA CAJAMARCA, OLMOS, CHEPEN, GUADALUPE, LAMBAYEQUE, SULLANA II, SANTA ANITA, HUAYCAN, CASMA, CHORRILLOS, LA MOLINA, SAN JUAN DE LURIGANCHO II, CALLAO, PUENTE PIEDRA, TARMA, CARABAYLLO, CERRO DE PASCO, SATIPO, MANCHAY, SAN JUAN DE MIRAFLORES, SURQUILLO, VENTANILLA, CANTA CALLAO, COMAS, CONO NORTE, PEDRO RUIZ GALLO, CUSCO II, CURAHUASI, RIOJA, BAGUA CHICA, HUARAL, JAUJA, PUEBLO LIBRE, TACNA II, LIMA COBRANZAS, JULIACA II, LOS OLIVOS II, SAN JUAN DE LURIGANCHO III, ATE, LIMA NORTE II, VILLA MARIA, LURIN, HUANTA, LINCE, VILLA MARIA II, SAN MARTIN DE PORRES, CHOSICA, INDEPENDENCIA, EL AGUSTINO, LAS MALVINAS, PUENTE PIEDRA II, CHORRILLOS II, PUENTE PIEDRA III, HUAYCAN II, SAN JUAN DE LURIGANCHO IV, CALLAO II, VILLA EL SALVADOR II"], ["name", "robots", "content", "index, follow"], ["name", "revisit-after", "content", "7 days"], ["property", "og:title", "content", "Arequipa Expreso Marvisur: Toda carga a nivel nacional | Marvisur P\u00E1gina principal"], ["property", "og:site_name", "content", "Expreso Marvisur"], ["property", "og:url", "content", "https://www.expresomarvisur.com/sucursales"], ["property", "og:type", "content", "website"], ["property", "og:locale", "content", "es"], ["property", "og:description", "content", "Contamos con m\u00E1s de 130 sucursales en todos los departamentos de nuestro pa\u00EDs."], ["property", "og:image", "content", "https://www.expresomarvisur.com/assets/images/LOGO_MARVISUR.png"], [1, "open-close-container", "branch-office"], [1, "portadaAll"], ["src", "assets/images/portadasucursalesnuevo.png", "height", "100%", "width", "100%", 1, "img"], [1, "title-peque"], [1, "place", "department"], ["type", "text", "placeholder", "Departamento...", "matInput", "", 1, "i-d", 3, "matAutocomplete", "formControl"], [1, "ctn-automcomplete", 3, "displayWith"], ["auto1", "matAutocomplete"], ["class", "ctn-ac", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "place", "province"], ["type", "text", "placeholder", "Provincia...", 1, "i-p", 3, "matAutocomplete"], ["auto2", "matAutocomplete"], ["id", "seleccioneprovincia", "class", "ctn-ac", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "place", "branch"], ["type", "text", "placeholder", "Sucursales...", 1, "i-s", 3, "matAutocomplete"], ["auto3", "matAutocomplete"], ["id", "seleccionesucursal", "class", "ctn-ac", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "ctn-info-map"], [1, "info-map"], [3, "zoom", "latitude", "longitude", "usePanning"], [3, "latitude", "longitude", "iconUrl", "agmFitBounds", 4, "ngFor", "ngForOf"], [1, "info"], [4, "ngIf"], [1, "ctn-ac", 3, "value", "click"], ["id", "seleccioneprovincia", 1, "ctn-ac", 3, "value", "click"], ["id", "seleccionesucursal", 1, "ctn-ac", 3, "value", "click"], [3, "latitude", "longitude", "iconUrl", "agmFitBounds"], [1, "fa", "fa-map-marker", "fa-1x"], [1, "fa", "fa", "fa-map", "fa-1x"], [1, "fa", "fa-phone-square", "fa-1x"], [1, "fa", "fa-envelope-square", "fa-1x"], [1, "fa", "fa-clock-o", "fa-1x"], [1, "fa", "fa-paper-plane", "fa-1x"], [1, "howToGet", 3, "click"], [1, "fa-solid", "fa-bus"]],
  template: function SucursalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0)(2, "meta", 1)(3, "meta", 2)(4, "meta", 3)(5, "meta", 4)(6, "meta", 5)(7, "meta", 6)(8, "meta", 7)(9, "meta", 8)(10, "meta", 9)(11, "meta", 10)(12, "meta", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "main", 12)(14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "SUCURSALES");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "section")(19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-autocomplete", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SucursalesComponent_mat_option_23_Template, 2, 2, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-autocomplete", 18, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SucursalesComponent_mat_option_29_Template, 2, 2, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-autocomplete", 18, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, SucursalesComponent_mat_option_34_Template, 2, 2, "mat-option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 29)(36, "div", 30)(37, "agm-map", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, SucursalesComponent_agm_marker_38_Template, 3, 5, "agm-marker", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 33)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "INFORMACI\u00D3N:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, SucursalesComponent_ul_42_Template, 8, 7, "ul", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r0)("formControl", ctx.myControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFnDepartments);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 16, ctx.optionsDepartments));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFnProvinces);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.provincias);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFnSucursal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sucursales);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 5)("latitude", ctx.lat)("longitude", ctx.lng)("usePanning", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sucursalesGPS);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sucursales && ctx.flaginformacion);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmFitBounds, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmInfoWindow, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmMarker, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  box-sizing: border-box; \n  border-width: 0; \n  border-style: solid; \n  border-color: currentColor; \n}\n[_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-content: '';\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.5; \n  -webkit-text-size-adjust: 100%;  \n  tab-size: 4; \n  font-family: Graphik, sans-serif; \n  font-feature-settings: normal; \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0; \n  line-height: inherit; \n}\n\nhr[_ngcontent-%COMP%] {\n  height: 0; \n  color: inherit; \n  border-top-width: 1px; \n}\n\nabbr[_ngcontent-%COMP%]:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: inherit;\n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; \n  font-size: 1em; \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\ntable[_ngcontent-%COMP%] {\n  text-indent: 0; \n  border-color: inherit; \n  border-collapse: collapse; \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  font-weight: inherit; \n  line-height: inherit; \n  color: inherit; \n  margin: 0; \n  padding: 0; \n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button; \n  background-color: transparent; \n  background-image: none; \n}\n\n[_ngcontent-%COMP%]:-moz-focusring {\n  outline: auto;\n}\n\n[_ngcontent-%COMP%]:-moz-ui-invalid {\n  box-shadow: none;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n[_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\nblockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%] {\n  margin: 0;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 0;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n\ninput[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\n  opacity: 1; \n  color: #9ca3af; \n}\n\nbutton[_ngcontent-%COMP%], [role=\"button\"][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%] {\n  display: block; \n  vertical-align: middle; \n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n[_ngcontent-%COMP%]::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1536px;\n  }\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.filter[_ngcontent-%COMP%] {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\n\n@font-face {\n  font-family: amertha;\n  src: url('amertha-personal-use-only.ttf');\n}\n@font-face {\n  font-family: montserrat;\n  src: url('Montserrat-BlackItalic.otf');\n}\n\n\n*[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  border: none;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  left: 20px;\n  width: 60px;\n  height: 60px;\n  z-index: 20;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(131deg, 72%, 56%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]:hover {\n  background-color: hsl(128deg, 51%, 49%);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  z-index: 20;\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  color: hsl(0deg, 0%, 100%);\n  background-color: hsl(223deg, 82%, 56%);\n  transform: scaleX(-1);\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: bold;\n}\n.box-modal-wsp[_ngcontent-%COMP%]   .chat-bot[_ngcontent-%COMP%]:hover {\n  background-color: hsl(223deg, 100%, 30%);\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10vh;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  margin: 130px auto;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 50px;\n}\nmain[_ngcontent-%COMP%]   .relevant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .why-choose-us[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .fondonegroinicio[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, main[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: hsl(1deg, 100%, 55%);\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: hsl(0deg, 100%, 71%);\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: hsl(1deg, 100%, 32%);\n}\nbody.modal-it[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%] {\n  overflow-y: hidden !important;\n}\nbody.modal-it[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .ctn-backdrop1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 900;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: rgba(0, 0, 0, 0.32);\n}\nbody.modal-it[_ngcontent-%COMP%]   .all-modal-mit[_ngcontent-%COMP%], body.modal-lcv[_ngcontent-%COMP%]   .all-modal-lcv[_ngcontent-%COMP%], body.modal-nfy[_ngcontent-%COMP%]   .all-modal-nfy[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\nbody.modal-open[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  margin: 70px 15px 50px 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 50px;\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n  max-width: 380px;\n  width: 100%;\n  text-decoration: none;\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: solid 1px hsl(0deg, 0%, 59%);\n  border-radius: 20px;\n  width: 100%;\n  height: 38px;\n  padding: 0 15px;\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 1px solid hsl(0deg, 100%, 71%);\n  box-shadow: 0 0 8px hsl(0deg, 100%, 71%);\n  color: hsl(1deg, 100%, 55%);\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]   mat-autocomplete[_ngcontent-%COMP%] {\n  background-color: hsl(0deg, 0%, 0%);\n  position: relative;\n  top: 0;\n  margin-top: -200px;\n}\n.branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]:active   .ctn-ac[_ngcontent-%COMP%] {\n  display: block;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  width: 100%;\n  display: block;\n  margin: auto;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 50px;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  height: 440px;\n  margin: auto;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  margin: auto;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  margin: auto 25px;\n  margin-bottom: 40px;\n  color: hsl(1deg, 100%, 55%);\n  border-bottom: 1px solid hsl(1deg, 100%, 55%);\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: hsl(1deg, 100%, 55%);\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa-clock-o[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: hsl(1deg, 100%, 55%);\n  color: hsl(0deg, 0%, 100%);\n  width: 150px;\n  padding: 2px 5px;\n  border-radius: 15px;\n}\n.branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: hsl(0deg, 0%, 100%);\n}\n@media only screen and (max-width: 1300px) {\n  .branch-office[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    gap: 50px 90px;\n  }\n  .branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n  .branch-office[_ngcontent-%COMP%]   .ctn-info-map[_ngcontent-%COMP%]   .info-map[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3VjdXJzYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0EsaUVBQUE7QUFBQTs7O0NBQUE7QUFBQTs7O0VBQUEsc0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxtQkFBQSxFQUFBLE1BQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Ozs7O0NBQUE7QUFBQTtFQUFBLGdCQUFBLEVBQUEsTUFBQTtFQUFBLDhCQUFBLEVBQUEsTUFBQSxFQUFBLE1BQUE7RUFBQSxXQUFBLEVBQUEsTUFBQTtFQUFBLGdDQUFBLEVBQUEsTUFBQTtFQUFBLDZCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSxTQUFBLEVBQUEsTUFBQTtFQUFBLG9CQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7Ozs7Q0FBQTtBQUFBO0VBQUEsU0FBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLHFCQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLHlDQUFBO1VBQUEsaUNBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7Ozs7OztFQUFBLGtCQUFBO0VBQUEsb0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsbUJBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsK0dBQUEsRUFBQSxNQUFBO0VBQUEsY0FBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSxjQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOztFQUFBLGNBQUE7RUFBQSxjQUFBO0VBQUEsa0JBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7RUFBQSxlQUFBO0FBQUE7QUFBQTtFQUFBLFdBQUE7QUFBQTtBQUFBOzs7O0NBQUE7QUFBQTtFQUFBLGNBQUEsRUFBQSxNQUFBO0VBQUEscUJBQUEsRUFBQSxNQUFBO0VBQUEseUJBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7OztDQUFBO0FBQUE7Ozs7O0VBQUEsb0JBQUEsRUFBQSxNQUFBO0VBQUEsZUFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7RUFBQSxjQUFBLEVBQUEsTUFBQTtFQUFBLFNBQUEsRUFBQSxNQUFBO0VBQUEsVUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsb0JBQUE7QUFBQTtBQUFBOzs7Q0FBQTtBQUFBOzs7O0VBQUEsMEJBQUEsRUFBQSxNQUFBO0VBQUEsNkJBQUEsRUFBQSxNQUFBO0VBQUEsc0JBQUEsRUFBQSxNQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsYUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBO0VBQUEsd0JBQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7O0VBQUEsWUFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSw2QkFBQSxFQUFBLE1BQUE7RUFBQSxvQkFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBOztDQUFBO0FBQUE7RUFBQSx3QkFBQTtBQUFBO0FBQUE7OztDQUFBO0FBQUE7RUFBQSwwQkFBQSxFQUFBLE1BQUE7RUFBQSxhQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGtCQUFBO0FBQUE7QUFBQTs7Q0FBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBQTtBQUFBO0FBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7RUFBQSxVQUFBO0FBQUE7QUFBQTs7O0VBQUEsZ0JBQUE7RUFBQSxTQUFBO0VBQUEsVUFBQTtBQUFBO0FBQUE7O0NBQUE7QUFBQTtFQUFBLGdCQUFBO0FBQUE7QUFBQTs7O0NBQUE7QUFBQTs7RUFBQSxVQUFBLEVB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QjtBQW5Kd0I7RUFDSSxpQkFBQTtBQXFKNUI7QUFuSndCO0VBQ0ksc0NEcERQO0VDcURPLDBCRHZEbkI7RUN3RG1CLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcUo1QjtBQXBKNEI7RUFDSSwwQkQ1RHZCO0FDa05UO0FBNUlBO0VBRVE7SUFDSSxjQUFBO0VBOElWO0VBMUljO0lBQ0ksZ0JBQUE7RUE0SWxCO0VBMUljO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQTRJbEI7QUFDRiIsImZpbGUiOiJzdWN1cnNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGFpbHdpbmQgKi9cclxuQHRhaWx3aW5kIGJhc2U7XHJcbkB0YWlsd2luZCBjb21wb25lbnRzO1xyXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xyXG5cclxuLyogSW1hZ2VzICovXHJcbiR1cmwtaW1nOiBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvXCI7XHJcbiR1cmwtaW1nLW5ld3M6IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdzL1wiO1xyXG4kdXJsLWltZy1zbGlkZTogXCIuLi8uLi8uLi9hc3NldHMvc2xpZGUvXCI7XHJcbiR1cmwtYXU6ICcuLi8uLi8uLi9hc3NldHMvbmV3aW1nLyc7XHJcblxyXG4vKiBTVkdzICovXHJcbiR1cmwtc3ZnOiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy8nO1xyXG5cclxuLyogVGV4dG8gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGFtZXJ0aGE7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2FtZXJ0aGEtcGVyc29uYWwtdXNlLW9ubHkudHRmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL01vbnRzZXJyYXQtQmxhY2tJdGFsaWMub3RmJyk7XHJcbn1cclxuXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhbmNvOiBoc2woMCwgMCUsIDEwMCUpO1xyXG4kbmVncm86IGhzbCgwLCAwJSwgMCUpO1xyXG4kY29sb3ItZ2xvYmFsLWNsYXJvOiBoc2woMSwgMTAwJSwgNTUlKTtcclxuJGFuYXJhbmphZG86IGhzbCgzOSwgMTAwJSwgNTAlKTtcclxuJGdyaXM6IGhzbCgwLCAwJSwgODAlKTtcclxuJHZlcmRlOiBoc2woMTI4LCA1MSUsIDQ5JSk7XHJcbiRhenVsOiBoc2woMjM5LCAxMDAlLCA1MCUpO1xyXG4kY2VsZXN0ZTogaHNsKDIwNywgOTAlLCA1NCUpO1xyXG4kc29tYnJhLXJvam8tZ2xvYmFsOiBoc2xhKDAsIDU0JSwgNTklLCAwLjMxNCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMjogaHNsKDAsIDEwMCUsIDcxJSk7XHJcbiRyb3NhZG8tYm9yZGU6IGhzbCgzNDksIDEwMCUsIDY5JSk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMi10cmFuc3BhcmVudGU6IGhzbGEoMCwgMTAwJSwgODAlLCAwLjU0OCk7XHJcbiRjb2xvci1nbG9iYWwtY2xhcm8tMzogaHNsKDM1OCwgODAlLCA1MCUpO1xyXG4kY29sb3ItZ2xvYmFsLW9zY3VybzogaHNsKDEsIDEwMCUsIDMyJSk7XHJcbiRhenVsLWNsYXJvOiBoc2woMjIzLCA4MiUsIDU2JSk7XHJcbiRhenVsLW9zY3VybzogaHNsKDIyMywgMTAwJSwgMzAlKTtcclxuJGNlbGVzdGUtY2xhcm86IGhzbCgyMDcsIDEwMCUsIDY5JSk7XHJcbiR2ZXJkZS1jbGFybzogaHNsKDEzMSwgNzIlLCA1NiUpO1xyXG4kdmVyZGUtb3NjdXJvOiBoc2woMTMxLCAxMDAlLCAyMiUpO1xyXG4kZ3Jpcy1jOiBoc2woMCwgMCUsIDkxJSk7XHJcbiRncmlzLXRyYW5zcGFyZW50ZTogaHNsYSgwLCAwJSwgODAlLCAwLjYzNSk7XHJcbiRncmlzLWludGVuc286IGhzbCgwLCAwJSwgNTklKTtcclxuJGJrZzogaHNsKDM0MCwgMTAlLCA2JSk7XHJcbiRia2ctY2FyZDogaHNsKDAsIDAlLCAxMyUpO1xyXG4kY29sb3ItbGN2LW5meTogaHNsKDIyNSwgNzMlLCA1NyUpO1xyXG4kY29sb3ItbGN2LW5meS1jbGFybzogaHNsKDIyNSwgMTAwJSwgNzUlKTtcclxuLyogUmVkZXMgc29jaWFsZXMqL1xyXG4kZmFjZWJvb2s6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRhenVsLCAkYXp1bC1jbGFybywgJGNlbGVzdGUsICRjZWxlc3RlLWNsYXJvLCAkYmxhbmNvKTtcclxuJGluc3RhZ3JhbTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZDREUzMCwgI0U5NzEyQSwgI0QyMzEzQiwgI0FFNDE5OCwgIzc1NDAxQSwgIzU0NDNBOCk7XHJcbiRsaW5rZWRpbjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwNzdCNSwgIzVmZDJmZik7XHJcbiR0aWt0b2s6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNjYzA4MmMsICMyNTAwMDcsICRuZWdybyk7XHJcblxyXG4qIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtbW9kYWwtd3NwIHtcclxuICAud2hhdHNhcHAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29sb3I6ICRibGFuY287XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtY2xhcm87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNoYXQtYm90IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjb2xvcjogJGJsYW5jbztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLWNsYXJvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVsLW9zY3VybztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwdmg7XHJcbiAgLnJlbGV2YW50LFxyXG4gIC53aHktY2hvb3NlLXVzLFxyXG4gIC5mb25kb25lZ3JvaW5pY2lvLFxyXG4gIC5zZXJ2aWNlcyxcclxuICAubmV3cyxcclxuICAubW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMzBweCBhdXRvO1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItZ2xvYmFsLWNsYXJvLTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1nbG9iYWwtb3NjdXJvO1xyXG4gIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1pdCxcclxuYm9keS5tb2RhbC1sY3YsXHJcbmJvZHkubW9kYWwtbmZ5IHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAuY3RuLWJhY2tkcm9wMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zMik7XHJcbiAgfVxyXG59XHJcbmJvZHkubW9kYWwtaXQgLmFsbC1tb2RhbC1taXQsXHJcbmJvZHkubW9kYWwtbGN2IC5hbGwtbW9kYWwtbGN2LFxyXG5ib2R5Lm1vZGFsLW5meSAuYWxsLW1vZGFsLW5meSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uYnJhbmNoLW9mZmljZSB7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDcwcHggMTVweCA1MHB4IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICAgICAgLnBsYWNlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdyaXMtaW50ZW5zbztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm8tMjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4ICRjb2xvci1nbG9iYWwtY2xhcm8tMjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdsb2JhbC1jbGFybztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXQtYXV0b2NvbXBsZXRlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZWdybztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAuY3RuLWFjIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdG4taW5mby1tYXAge1xyXG4gICAgICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAuaW5mby1tYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZ2FwOiA1MHB4O1xyXG4gICAgICAgICAgICBhZ20tbWFwIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhcDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLWNsb2NrLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1nbG9iYWwtY2xhcm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYW5jbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gQ2VsdWxhclxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLmJyYW5jaC1vZmZpY2Uge1xyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBnYXA6IDUwcHggOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN0bi1pbmZvLW1hcCB7XHJcbiAgICAgICAgICAgIC5pbmZvLW1hcCB7XHJcbiAgICAgICAgICAgICAgICBhZ20tbWFwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
});

/***/ }),

/***/ 9638:
/*!****************************************!*\
  !*** ./src/app/models/convocatoria.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Convocatoria": () => (/* binding */ Convocatoria)
/* harmony export */ });
class Convocatoria {
    constructor(code, cargo, estudios, conocimientos, funciones, lugar, tipo, fecha, sueldo, vacantes, estado) {
        this.code = code;
        this.cargo = cargo;
        this.estudios = estudios;
        this.conocimientos = conocimientos;
        this.funciones = funciones;
        this.lugar = lugar;
        this.tipo = tipo;
        this.fecha = fecha;
        this.sueldo = sueldo;
        this.vacantes = vacantes;
        this.estado = estado;
    }
}


/***/ }),

/***/ 2716:
/*!**************************************!*\
  !*** ./src/app/models/cotizauser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizaUser": () => (/* binding */ CotizaUser)
/* harmony export */ });
class CotizaUser {
    constructor(id, nombre, telefono, correo, origen, destino, cantidad, unidad, peso, largo, ancho, alto, descripcion, imagen, tipo, dni, flag) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.origen = origen;
        this.destino = destino;
        this.cantidad = cantidad;
        this.unidad = unidad;
        this.peso = peso;
        this.largo = largo;
        this.ancho = ancho;
        this.alto = alto;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.tipo = tipo;
        this.dni = dni;
        this.flag = flag;
    }
}


/***/ }),

/***/ 6359:
/*!******************************!*\
  !*** ./src/app/models/cv.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cv": () => (/* binding */ cv)
/* harmony export */ });
class cv {
    constructor(idCv, nombresyape, telefono, email, direccion, edad, expectativaSalarial, cv, puesto, lugar) {
        this.idCv = idCv;
        this.nombresyape = nombresyape;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.edad = edad;
        this.expectativaSalarial = expectativaSalarial;
        this.cv = cv;
        this.puesto = puesto;
        this.lugar = lugar;
    }
}


/***/ }),

/***/ 5787:
/*!****************************************!*\
  !*** ./src/app/models/infotracking.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Infotracking": () => (/* binding */ Infotracking)
/* harmony export */ });
class Infotracking {
    constructor(ID, GUIA, FECEVENTO, EVENTO, COMENTARIO, REMITENTE, DESTINATARIO, DEPORIGEN, DEPDESTINO, PAGO) {
        this.ID = ID;
        this.GUIA = GUIA;
        this.FECEVENTO = FECEVENTO;
        this.EVENTO = EVENTO;
        this.COMENTARIO = COMENTARIO;
        this.REMITENTE = REMITENTE;
        this.DESTINATARIO = DESTINATARIO;
        this.DEPORIGEN = DEPORIGEN;
        this.DEPDESTINO = DEPDESTINO;
        this.PAGO = PAGO;
    }
    static TrackingFromJson(obj) {
        // @ts-ignore
        let date = new Date(obj['FECEVENTO']).toISOString().slice(0, 19).replace('T', ' ');
        // new Date().toISOString().slice(0, 19).replace('T', ' ');
        // @ts-ignore
        return new Infotracking(obj['ID'], obj['GUIA'], date, obj['EVENTO'], obj['COMENTARIO'], obj['REMITENTE'], obj['DESTINATARIO'], obj['DEPORIGEN'], obj['DEPDESTINO'], obj['PAGO']);
    }
}


/***/ }),

/***/ 4934:
/*!************************************!*\
  !*** ./src/app/models/solucion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Solucion": () => (/* binding */ Solucion)
/* harmony export */ });
class Solucion {
    constructor(id_sol, nombres_sol, serie_sol, numero_sol, origen_sol, destino_sol, correo_sol, celular_sol, inconveniente_sol, detalle_sol, adjuntar_sol, estado_sol) {
        this.id_sol = id_sol;
        this.nombres_sol = nombres_sol;
        this.serie_sol = serie_sol;
        this.numero_sol = numero_sol;
        this.origen_sol = origen_sol;
        this.destino_sol = destino_sol;
        this.correo_sol = correo_sol;
        this.celular_sol = celular_sol;
        this.inconveniente_sol = inconveniente_sol;
        this.detalle_sol = detalle_sol;
        this.adjuntar_sol = adjuntar_sol;
        this.estado_sol = estado_sol;
    }
}


/***/ }),

/***/ 9299:
/*!**************************************!*\
  !*** ./src/app/models/sugerencia.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sugerencia": () => (/* binding */ Sugerencia)
/* harmony export */ });
class Sugerencia {
    constructor(id_sug, nom_sug, tel_sug, ciu_sug, det_sug, est_sug) {
        this.id_sug = id_sug;
        this.nom_sug = nom_sug;
        this.tel_sug = tel_sug;
        this.ciu_sug = ciu_sug;
        this.det_sug = det_sug;
        this.est_sug = est_sug;
    }
}


/***/ }),

/***/ 1841:
/*!**********************************!*\
  !*** ./src/app/models/tarifa.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tarifa": () => (/* binding */ Tarifa)
/* harmony export */ });
class Tarifa {
    constructor(id_tar, ori_tar, des_tar, sob_tar, minpaq_tar, paq_tar, maxpq_tar, pes_tar, vol_tar) {
        this.id_tar = id_tar;
        this.ori_tar = ori_tar;
        this.des_tar = des_tar;
        this.sob_tar = sob_tar;
        this.minpaq_tar = minpaq_tar;
        this.paq_tar = paq_tar;
        this.maxpq_tar = maxpq_tar;
        this.pes_tar = pes_tar;
        this.vol_tar = vol_tar;
    }
}


/***/ }),

/***/ 182:
/*!*************************************!*\
  !*** ./src/app/models/tarifario.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tarifario": () => (/* binding */ Tarifario)
/* harmony export */ });
class Tarifario {
    constructor(ori_tar, des_tar) {
        this.ori_tar = ori_tar;
        this.des_tar = des_tar;
    }
}


/***/ }),

/***/ 4009:
/*!************************************!*\
  !*** ./src/app/models/tracking.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tracking": () => (/* binding */ Tracking)
/* harmony export */ });
class Tracking {
    constructor(serie, numero) {
        this.serie = serie;
        this.numero = numero;
    }
}


/***/ }),

/***/ 8503:
/*!************************************************!*\
  !*** ./src/app/services/cotizacion.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizacionService": () => (/* binding */ CotizacionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class CotizacionService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    create(cv) {
        let json = JSON.stringify(cv);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'savecotizauser', params, { headers: headers });
    }
}
CotizacionService.ɵfac = function CotizacionService_Factory(t) { return new (t || CotizacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CotizacionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CotizacionService, factory: CotizacionService.ɵfac });


/***/ }),

/***/ 9899:
/*!**************************************************!*\
  !*** ./src/app/services/departamento.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartamentoService": () => (/* binding */ DepartamentoService)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class DepartamentoService {
    constructor(http) {
        this.http = http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    getDepartamento() {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.url + 'obtenerdepartamentos');
    }
    getSucursalesTodas() {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.url + 'sucursalesTodas');
    }
    getSucursalesbyDepartamento(name) {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.url + 'obtenersucursalespordepa/' + name);
    }
    getSucursalesbyid(name) {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.url + 'obtenersucursalesporid/' + name);
    }
    getDepartamentobyid(name) {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.url + 'obtenerdepartamentoporid/' + name);
    }
    getSucursalesbyCiudad(name) {
        //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        //return this.http.get(this.url+'obtenersucursalesporciudad/'+name,{headers:headers});
        return this.http.get(this.url + 'obtenersucursalesporciudad/' + name);
    }
}
DepartamentoService.ɵfac = function DepartamentoService_Factory(t) { return new (t || DepartamentoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DepartamentoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DepartamentoService, factory: DepartamentoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2902:
/*!********************************************!*\
  !*** ./src/app/services/footer.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolucionesService": () => (/* binding */ SolucionesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class SolucionesService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    create(solucion) {
        let json = JSON.stringify(solucion);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'savepedidosolucion', params, { headers: headers });
    }
    createSugerencia(sugerencia) {
        let json = JSON.stringify(sugerencia);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'savesugerencias', params, { headers: headers });
    }
}
SolucionesService.ɵfac = function SolucionesService_Factory(t) { return new (t || SolucionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SolucionesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SolucionesService, factory: SolucionesService.ɵfac });


/***/ }),

/***/ 3913:
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "global": () => (/* binding */ global)
/* harmony export */ });
var global = {
    url: 'https://expresomarvisur.online/marvisurweb/public/api/'
    //url: 'http://192.168.1.223/marvisurweb/public/api/'
    // url: 'https://getsoftaqp.online/marvisurweb/public/api/'
};


/***/ }),

/***/ 1344:
/*!*************************************************!*\
  !*** ./src/app/services/oportunidad.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OportunidadService": () => (/* binding */ OportunidadService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class OportunidadService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    create(cv) {
        let json = JSON.stringify(cv);
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'savecv', params, { headers: headers });
    }
    getallconvocatorias() {
        //let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url + 'obtenerconvocatorias');
    }
}
OportunidadService.ɵfac = function OportunidadService_Factory(t) { return new (t || OportunidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
OportunidadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OportunidadService, factory: OportunidadService.ɵfac });


/***/ }),

/***/ 7380:
/*!*********************************************!*\
  !*** ./src/app/services/rastreo.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RastreoService": () => (/* binding */ RastreoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _models_infotracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/infotracking */ 5787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class RastreoService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    create() {
        //let json =JSON.stringify(cv);
        //let params = "json="+json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'obtenerdepartamentos', null, { headers: headers });
    }
    getTracking(rastreo) {
        let json = JSON.stringify(rastreo);
        //let params = json;
        // console.log(json);
        // let params = "json="+json;
        //let headers =new HttpHeaders().set('Content-Type','application/json');
        return this._http.post('https://jtfp1lubog.execute-api.us-east-1.amazonaws.com/produccion/api-marvisur', json)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(resp => {
            return resp.body[0].map(convocatoria => _models_infotracking__WEBPACK_IMPORTED_MODULE_1__.Infotracking.TrackingFromJson(convocatoria));
        }));
        //console.log("service easdasd")
        //return this._http.post("http://localhost:57329/api/Rastreo",params,{headers:headers});
    }
    getcantidadGuias() {
        //let headers =new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'obtenercantidadguias');
        //console.log("service easdasd")
        //return this._http.post("http://192.168.1.82/api/api/Rastreo",params,{headers:headers});
    }
}
RastreoService.ɵfac = function RastreoService_Factory(t) { return new (t || RastreoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RastreoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RastreoService, factory: RastreoService.ɵfac });


/***/ }),

/***/ 1155:
/*!***********************************************!*\
  !*** ./src/app/services/tarifario.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarifarioService": () => (/* binding */ TarifarioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class TarifarioService {
    constructor(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.global.url;
    }
    getDestinos() {
        //let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url + 'obtenerdestinosdiferentes');
    }
    getPrecioBuscado(tarifario) {
        let json = JSON.stringify(tarifario);
        //let params = json;
        let params = "json=" + json;
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        //let headers =new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + 'buscartarifario', params, { headers: headers });
    }
}
TarifarioService.ɵfac = function TarifarioService_Factory(t) { return new (t || TarifarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TarifarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TarifarioService, factory: TarifarioService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3414:
/*!************************!*\
  !*** canvas (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 172:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2001:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3779:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6558:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2258:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map