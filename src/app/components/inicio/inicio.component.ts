import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TerminosycondicionesComponent } from '../secciones/terminosycondiciones/terminosycondiciones.component';

import { RastreoService } from 'src/app/services/rastreo.service';
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

  padreForm: FormControl = new FormControl();


  constructor(
    private _formBuilder: FormBuilder,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private _RastreoService: RastreoService,
    private elementRef:ElementRef,
  ) {
    let timestamp = 1643658989;
    // @ts-ignore
    this.fechaHoy = Date(timestamp);
    this.page_title = 'Inicio Marvisur';
    this.url = '';
    this.urlSafe = '';
    this.serie = '0007';
    this.numero = '2738402';

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
  }

  openTermsAndConditions() {
    return this.dialog.open(TerminosycondicionesComponent);
  }

  onSubmitInfoTraking(form: any) {
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
        if (response.length == 0) {
          this.flagResponseTrack = false;
        } else {
          this.infoRastreo = response;
          this.buscarPrimero(this.infoRastreo);
          this.flagResponseTrack = true;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
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
    this._RastreoService.getcantidadGuias().subscribe(
      (response) => {
        if (response.status == 'success') {
          this.limitGuias = response.consultaguia[0].cantidad;
          
        } else {
          console.log('error');
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  openInfoTraking() {
    let changeCard = this.elementRef.nativeElement.querySelector('.openModal')
    if(!changeCard.classList.contains('modal') && !changeCard.classList.contains('modal')) {
      let list1 = changeCard.classList.add('modal')
      return changeCard.classList.add('fade') + list1
    } else {
      let list1 = changeCard.classList.remove('modal')
      return changeCard.classList.remove('fade') + list1
    }
  }

  async cargarCantidadesAnios() {
    for (var _i = 0; _i <= this.limitAnios; _i++) {
      this.cantidadanios = _i;
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
  }
  async cargarCantidadesSucursales() {
    for (var _i = 0; _i <= this.limitSucursales; _i++) {
      this.cantidadSucursales = _i;
      await new Promise((resolve) => setTimeout(resolve, 15));
    }
  }
  async cargarCantidadesTrabajadores() {
    for (var _i = 0; _i <= this.limitTrabajadores; _i =+ 10) {
      this.cantidadTrabajadores = _i;
      await new Promise((resolve) => setTimeout(resolve, 14));
    }
  }
  async cargarCantidadesGuias() {
    for (var _i = 0; _i <= this.limitGuias; _i =+ 13240) {
      this.cantidadGuias = _i;
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
    
}