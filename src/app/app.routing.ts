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
//import { ReclamacionesComponent } from './components/reclamaciones/reclamaciones.component';

const appRoutes: Routes =[
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'conocenos', component: ConocenosComponent },
    { path: 'seccion', loadChildren: () => import('./components/secciones/seccion.module').then(m => m.SeccionModule) },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'cotizacion', component: CotizacionComponent },
    { path: 'oportunidad', component: OportunidadComponent },
    { path: '**', component: ErrorComponent },
    //{path: 'reclamaciones',component: ReclamacionesComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);