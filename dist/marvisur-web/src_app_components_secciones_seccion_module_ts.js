"use strict";
(self["webpackChunkmarvisur_web"] = self["webpackChunkmarvisur_web"] || []).push([["src_app_components_secciones_seccion_module_ts"],{

/***/ 2509:
/*!*****************************************************!*\
  !*** ./src/app/components/secciones/sec.routing.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secRouting": () => (/* binding */ secRouting)
/* harmony export */ });
/* harmony import */ var _preguntasfrecuentes_preguntasfrecuentes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preguntasfrecuentes/preguntasfrecuentes.component */ 3065);
/* harmony import */ var _solucionesenlinea_solucionesenlinea_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solucionesenlinea/solucionesenlinea.component */ 7202);
/* harmony import */ var _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sugerencias/sugerencias.component */ 1213);
/* harmony import */ var _terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminosycondiciones/terminosycondiciones.component */ 3751);
/* harmony import */ var _seccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seccion.component */ 3969);





const secRouting = [
    {
        path: '',
        component: _seccion_component__WEBPACK_IMPORTED_MODULE_4__.SeccionComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'preguntas-frecuentes'
            },
            {
                path: 'preguntas-frecuentes',
                component: _preguntasfrecuentes_preguntasfrecuentes_component__WEBPACK_IMPORTED_MODULE_0__.PreguntasfrecuentesComponent
            },
            {
                path: 'soluciones-en-linea',
                component: _solucionesenlinea_solucionesenlinea_component__WEBPACK_IMPORTED_MODULE_1__.SolucionesenlineaComponent
            },
            {
                path: 'terminos&condiciones',
                component: _terminosycondiciones_terminosycondiciones_component__WEBPACK_IMPORTED_MODULE_3__.TerminosycondicionesComponent
            },
            {
                path: 'buzon-de-sugerencias',
                component: _sugerencias_sugerencias_component__WEBPACK_IMPORTED_MODULE_2__.SugerenciasComponent
            }
        ]
    }
];


/***/ }),

/***/ 2969:
/*!********************************************************!*\
  !*** ./src/app/components/secciones/seccion.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionModule": () => (/* binding */ SeccionModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sec_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sec.routing */ 2509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class SeccionModule {
}
SeccionModule.ɵfac = function SeccionModule_Factory(t) { return new (t || SeccionModule)(); };
SeccionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SeccionModule });
SeccionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(_sec_routing__WEBPACK_IMPORTED_MODULE_0__.secRouting)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SeccionModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_secciones_seccion_module_ts.js.map