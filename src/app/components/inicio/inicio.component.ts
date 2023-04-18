import {
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TyCModalComponent } from '../secciones/terminosycondiciones/terminosycondiciones.component';

import { RastreoService } from 'src/app/services/rastreo.service';
import { Tracking } from 'src/app/models/tracking';
import { Infotracking } from '../../models/infotracking';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

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

  @ViewChild('myBody') bodyRef!: ElementRef<any>;

  showRelevant: boolean = false;
  showWhyChooseUs: boolean = false;
  showNews: boolean = false;
  showServices: boolean = false;
  showFondoNegroInicio: boolean = false;
  divVisible: boolean = false
  dataWhyChooseUs: any[] = [];

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

  public imgChangeTruck:string

  padreForm: FormControl = new FormControl();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _formBuilder: FormBuilder,
    public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private _RastreoService: RastreoService
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
    this.limitTrabajadores = 1700;
    this.limitGuias = 5981832;
    this.imgChangeTruck = 'CAMION'
  }

  openTermsAndConditions() {
    return this.dialog.open(TyCModalComponent);
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
    setTimeout(() => {this._RastreoService.getTracking(this.rastreo).subscribe(
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
    )}, 2000)
    this.modalInfoTraking()
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
      )
      // Data Animations
      this.dataWhyChooseUs = [
        { image_name: 'coberturanuevo' },
        { image_name: 'servicionuevo' },
        { image_name: 'flotavehicularnuevo' },
        { image_name: 'monitoreonuevo' },
        { image_name: 'clientescorponuevo' }
      ]
  }

  modalInfoTraking() {
    this.document.body.classList.add('modal-it')
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
      await new Promise((resolve) => setTimeout(resolve, 3));
    }
  }
  async cargarCantidadesTrabajadores() {
    for (var _i = 0; _i <= this.limitTrabajadores; _i = _i + 25) {
      this.cantidadTrabajadores = _i;
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
  }
  async cargarCantidadesGuias() {
    for (var _i = 0; _i <= this.limitGuias; _i = _i + 25000) {
      this.cantidadGuias = _i;
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  // Animations
  singleNumber(e:any) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
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

  @HostListener('window:scroll', ['$event']) // Añadimos el evento scroll
  onWindowScroll(event: any) {
    this.showRelevant = window.scrollY > this.getDivPositionRelevant();
    this.showWhyChooseUs = window.scrollY > this.getDivPosition();
    this.showServices = window.scrollY > this.getDivPositionServices();
    this.showFondoNegroInicio = window.scrollY > this.getDivPositionFondoNegroInicio();
    this.showNews = window.scrollY > this.getDivPositionNews();
  }

  getDivPositionRelevant() {
    const element:any = document.getElementById('ctn-relevant');
    const position = element.getBoundingClientRect().top - 799;
    return position;
  }
  getDivPosition() {
    const element:any = document.getElementById('ctn-wcu');
    const position = element.getBoundingClientRect().top + 250;
    return position;
  }
  getDivPositionServices() {
    const element:any = document.getElementById('ctn-services');
    const position = element.getBoundingClientRect().top + 630;
    return position;
  }
  getDivPositionFondoNegroInicio() {
    const element:any = document.getElementById('fondonegroinicio');
    const position = element.getBoundingClientRect().top;
    return position;
  }
  getDivPositionNews() {
    const element:any = document.getElementById('ctn-news');
    const position = element.getBoundingClientRect().top + 1200;
    return position;
  }

  onSelectionChange(event: StepperSelectionEvent) {
    if(event.selectedIndex === 0) {
      this.imgChangeTruck = 'CAMION'
    } else if (event.selectedIndex === 1) {
      this.imgChangeTruck = 'CAMIONREPARTO_2'
    } else {
      this.imgChangeTruck = 'CAMION2'
    }
  }
}