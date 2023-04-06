import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
import { routing } from './app.routing';
import { AppComponent } from './app.component';

// Import Components-WebSite
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { OportunidadComponent } from './components/oportunidad/oportunidad.component';
import { SugerenciasComponent } from './components/secciones/sugerencias/sugerencias.component';
import { PreguntasfrecuentesComponent } from './components/secciones/preguntasfrecuentes/preguntasfrecuentes.component';
import { SolucionesenlineaComponent } from './components/secciones/solucionesenlinea/solucionesenlinea.component';
import { TerminosycondicionesComponent } from './components/secciones/terminosycondiciones/terminosycondiciones.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { InfoTrackingModalComponent } from './components/inicio/modal/infotrakingmodal.component';
import { SeccionComponent } from './components/secciones/seccion.component';
import { NotFindYetComponent } from './components/oportunidad/NotFindYetModal/notfindyet.component';
import { LoadCVComponent, SendMessageModal } from './components/oportunidad/LoadCVModal/loadcv.component';

// import { ReclamacionesComponent } from './components/reclamaciones/reclamaciones.component';

import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwPaginationModule } from 'jw-angular-pagination';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeccionComponent,
    ConocenosComponent,
    SucursalesComponent,
    CotizacionComponent,
    OportunidadComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    PruebaComponent,
    SugerenciasComponent,
    PreguntasfrecuentesComponent,
    SolucionesenlineaComponent,
    TerminosycondicionesComponent,
    EncuestaComponent,
    InfoTrackingModalComponent,
    NotFindYetComponent,
    LoadCVComponent,
    SendMessageModal,
    //ReclamacionesComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatTooltipModule,
    TooltipModule.forRoot(),
    BrowserModule,
    JwPaginationModule,
    routing,
    SwiperModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    FormsModule,
    MatStepperModule,
    MatDialogModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMpoXbrRESRM1KgPzG0o0JIDh61LuOtEQ',
    }),
    AngularFileUploaderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
