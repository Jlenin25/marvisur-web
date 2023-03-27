//IMPORTS NECESARIOS
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//IMPORTAR COMPONENTES
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import {CotizacionComponent} from './components/cotizacion/cotizacion.component';
import {OportunidadComponent} from './components/oportunidad/oportunidad.component';
import { SugerenciasComponent } from './components/sugerencias/sugerencias.component';
import { SolucionesenlineaComponent } from './components/solucionesenlinea/solucionesenlinea.component';
import { ErrorComponent } from './components/error/error.component';
import { TerminosycondicionesComponent } from './components/terminosycondiciones/terminosycondiciones.component';
//import { ReclamacionesComponent } from './components/reclamaciones/reclamaciones.component';

const appRoutes: Routes =[
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'conocenos', component: ConocenosComponent },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'cotizacion', component: CotizacionComponent },
    { path: 'oportunidad', component: OportunidadComponent },
    { path: 'sugerencias', component: SugerenciasComponent },
    { path: 'solucionesenlinea', component: SolucionesenlineaComponent },
    { path: 'terminosycondiciones', component: TerminosycondicionesComponent },
    { path: '**', component: ErrorComponent },
    //{path: 'reclamaciones',component: ReclamacionesComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);