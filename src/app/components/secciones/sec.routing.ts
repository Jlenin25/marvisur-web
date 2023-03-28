import { Route } from "@angular/router";
import { PreguntasfrecuentesComponent } from "./preguntasfrecuentes/preguntasfrecuentes.component";
import { SolucionesenlineaComponent } from "./solucionesenlinea/solucionesenlinea.component";
import { SugerenciasComponent } from "./sugerencias/sugerencias.component";
import { TerminosycondicionesComponent } from "./terminosycondiciones/terminosycondiciones.component";
import { SeccionComponent } from "./seccion.component";

export const secRouting: Route [] = [
  {
    path: '',
    component: SeccionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'preguntas-frecuentes'
      },
      {
        path: 'preguntas-frecuentes',
        component: PreguntasfrecuentesComponent
      },
      {
        path: 'soluciones-en-linea',
        component: SolucionesenlineaComponent
      },
      {
        path: 'terminos&condiciones',
        component: TerminosycondicionesComponent
      },
      {
        path: 'buzon-de-sugerencias',
        component: SugerenciasComponent
      }
    ]
  }
]