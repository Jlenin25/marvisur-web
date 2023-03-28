import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TerminosycondicionesComponent } from '../secciones/terminosycondiciones/terminosycondiciones.component';

import { RastreoService } from 'src/app/services/rastreo.service';
import { InfoTrackComponent } from './infotracking.component';
import { Tracking } from 'src/app/models/tracking';
import { Infotracking } from '../../models/infotracking';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreoService],
})
export class InicioComponent implements OnInit {
  groupNumberServices = this._formBuilder.group({
    groupCtrl: ['', Validators.required],
  })

  fechaHoy!: any;
  public url: string;
  public urlSafe: SafeResourceUrl;
  public page_title: string;
  // private name: string = '';
  public serie: string;
  public numero: string;

  public infoRastreo: Infotracking[] = [];
  public primeraInfo: Infotracking;
  public flagResponseTrack: boolean = true;
  public rastreo: Tracking;

  public cantidadanios: number;
  public cantidadSucursales: number;
  public cantidadTrabajadores: number;
  public cantidadGuias: number;

  public limitGuias: number;
  public limitAnios: number;
  public limitSucursales: number;
  public limitTrabajadores: number;


  constructor(
    private _formBuilder: FormBuilder,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private _RastreoService: RastreoService,
  ) {
    let timestamp = 1643658989;
    // @ts-ignore
    this.fechaHoy = Date(timestamp);
    this.page_title = 'Inicio Marvisur';
    this.url = '';
    this.urlSafe = '';
    this.serie = '';
    this.numero = '';

    this.rastreo = new Tracking('', '');
    this.primeraInfo = new Infotracking(
      -1,
      '-',
      new Date(),
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    
    this.cantidadanios = 0;
    this.cantidadSucursales = 0;
    this.cantidadTrabajadores = 0;
    this.cantidadGuias = 0;

    this.limitAnios = 33;
    this.limitSucursales = 135;
    this.limitTrabajadores = 1500;
    this.limitGuias = 5981832;

    console.log('hola mundo')
  }

  openTermsAndConditions() {
    return this.dialog.open(TerminosycondicionesComponent);
  }

  openInfoTrack(form: any) {
    this.flagResponseTrack = true;
    this.infoRastreo = [];
    this.primeraInfo = new Infotracking(
      -1,
      '-',
      new Date(),
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    
    this._RastreoService.getTracking(this.rastreo).subscribe(
      (response) => {
        //   if(response.statusCode=='200'){
        //
        if (response.length == 0) {
          this.flagResponseTrack = false;
        } else {
          this.infoRastreo = response;
          this.buscarPrimero(this.infoRastreo);
          this.flagResponseTrack = true;
        }

        //
        // }else{
        //   console.log("error")
        // }
      },
      (error) => {
        console.log(<any>error);
      }
    );
    return this.dialog.open(InfoTrackComponent);
  }
  buscarPrimero(arreglo: any) {
    for (let info of arreglo) {
      if (info.ID == 0) {
        this.primeraInfo = info;
      }
    }
  }

  ngOnInit(): void {
    this.cargarCantidadesAnios();
    this.cargarCantidadesSucursales();
    this.cargarCantidadesTrabajadores();
    this.cargarCantidadesGuias();
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async cargarCantidadesAnios() {
    for (var _i = 0; _i <= this.limitAnios; _i++) {
      this.cantidadanios = _i;
      await this.delay(80);
    }
  }
  async cargarCantidadesSucursales() {
    for (var _i = 0; _i <= this.limitSucursales; _i++) {
      this.cantidadSucursales = _i;
      await this.delay(15);
    }
  }
  async cargarCantidadesTrabajadores() {
    for (var _i = 0; _i <= this.limitTrabajadores; _i =+ 10) {
      this.cantidadTrabajadores = _i;
      await this.delay(14);
    }
  }
  async cargarCantidadesGuias() {
    for (var _i = 0; _i <= this.limitGuias; _i =+ 13240) {
      this.cantidadGuias = _i;
      await this.delay(0);
    }
  }
    
}