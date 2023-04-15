//IMPORTS NECESARIOS
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//IMPORTAR COMPONENTES
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { OportunidadComponent } from './components/oportunidad/oportunidad.component';
import { ErrorComponent } from './components/error/error.component';
import { ReclamacionesComponent } from './components/reclamaciones/reclamaciones.component';
import { PaymentComponent } from './components/payment/payment.component';

const appRoutes: Routes =[
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: ConocenosComponent },
    { path: 'seccion', loadChildren: () => import('./components/secciones/seccion.module').then(m => m.SeccionModule) },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'cotizacion', component: CotizacionComponent },
    { path: 'oportunidad', component: OportunidadComponent },
    { path: 'reclamaciones',component: ReclamacionesComponent },
    { path: 'paga-aqui',component: PaymentComponent },
    { path: '**', component: ErrorComponent }
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);