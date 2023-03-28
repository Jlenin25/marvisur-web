import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  DoCheck,
  ElementRef
} from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';
import { RastreoService } from 'src/app/services/rastreo.service';
import { global } from '../../services/global';
import {MatDialog} from '@angular/material/dialog';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Tracking } from 'src/app/models/tracking';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { Infotracking } from '../../models/infotracking';
import { TerminosycondicionesComponent } from '../secciones/terminosycondiciones/terminosycondiciones.component';

SwiperCore.use([Navigation]);
@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [RastreoService],
})
export class InicioComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  //export class InicioComponent implements OnInit,DoCheck {
  fechaHoy!: any;
  //@Input()
  public url: string;
  public urlSafe: SafeResourceUrl;
  public page_title: string;
  name: string = '';
  public primeraInfo: Infotracking;
  public serie: string;
  public numero: string;
  public rastreo: Tracking;
  public infoRastreo: Infotracking[] = [];

  public cantidadanios: number;
  public limitAnios: number;
  public limitSucursales: number;
  public cantidadSucursales: number;
  public limitTrabajadores: number;
  public cantidadTrabajadores: number;
  public cantidadGuias: number;
  public limitGuias: number;

  public flagResponseTrack: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    public sanitizer: DomSanitizer,
    private _RastreoService: RastreoService,
    private route: ActivatedRoute,
    private router: Router,
    private elementRef:ElementRef,
    public dialog: MatDialog
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('')
      .pipe(map(({ matches }) => (matches ? 'vertical' : 'vertical')));

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
    this.limitSucursales = 135;
    this.limitAnios = 33;
    this.limitTrabajadores = 1500;
    this.cantidadTrabajadores = 0;
    this.cantidadGuias = 0;
    this.limitGuias = 0;
  }
  openDialog() {
    return this.dialog.open(TerminosycondicionesComponent);
  }
  ngOnInit(): void {
    this.cargarCantidadesAnios();
    this.cargarCantidadesSucursales();
    this.cargarCantidadesTrabajadores();

    this._RastreoService.getcantidadGuias().subscribe(
      (response) => {
        //if(response.Meta.Status=='OK'){
        if (response.status == 'success') {
          this.limitGuias = response.consultaguia[0].cantidad;
          //console.log( this.limitGuias )
          this.cargarCantidadesGuias();
        } else {
          console.log('error');
          //console.log(this.rastreo)
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
  onClick() {
    let changeCard = this.elementRef.nativeElement.querySelector('.card-inner-news')
    
    if(!changeCard.classList.contains('is-flipped')) {
      return changeCard.classList.add('is-flipped')
    } else {
      return changeCard.classList.remove('is-flipped')
    }
  }

  onSubmit(form: any) {
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
  }
  buscarPrimero(arreglo: any) {
    for (let info of arreglo) {
      if (info.ID == 0) {
        this.primeraInfo = info;
      }
    }
  }
  // irRutaCotiza(){
  //   this.router.navigate(['/cotizacion'],{fragment:'idcotiza'});
  // }
  // irRutaSucursales(){
  //   this.router.navigate(['/sucursales'],{fragment:'idsucursales'});
  // }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async cargarCantidadesAnios() {
    for (var _i = 0; _i <= this.limitAnios; _i++) {
      this.cantidadanios = _i;
      await this.delay(25);
    }
  }
  async cargarCantidadesSucursales() {
    for (var _i = 0; _i <= this.limitSucursales; _i++) {
      this.cantidadSucursales = _i;
      await this.delay(25);
    }
  }
  async cargarCantidadesTrabajadores() {
    for (var _i = 0; _i <= this.limitTrabajadores; _i++) {
      this.cantidadTrabajadores = _i;
      await this.delay(5);
    }
  }
  async cargarCantidadesGuias() {
    for (var _i = 0; _i <= this.limitGuias; _i = _i + 1324) {
      this.cantidadGuias = _i;
      await this.delay(0);
    }
  }
}
