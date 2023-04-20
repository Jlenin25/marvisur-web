// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departments } from 'src/app/interfaces/departments';
import { Provinces } from 'src/app/interfaces/provinces';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SucursalInfoModal } from './modal/sucursalModal.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [DepartamentoService],
})
export class SucursalesComponent implements OnInit {
  @ViewChild('myInput1') myInputRef1!: ElementRef;
  @ViewChild('myInput2') myInputRef2!: ElementRef;
  @ViewChild('myInput3') myInputRef3!: ElementRef;
  @ViewChild('myInput4') myInputRef4!: ElementRef;

  public status: string;
  public lat: number;
  public lng: number;
  public sucursales: any;
  public sucursalesGPS: any;
  public sucursalesSelecionada: any;
  public provincias: any;
  public departamentos: any;
  public departamento: any;
  public firstDep: any;
  public firstSurc: any;
  public firstPro: any;
  public flagDepa: boolean;
  public flagSucu: boolean;
  public flagProvi: boolean;
  public flaginformacion: boolean;
  public ico = 'assets/images/cursormarvisur.png';
  public select: any;
  public JsonRetornado: any;

  constructor(
    private _departamentoService: DepartamentoService,
    private el: ElementRef,
    public dialog: MatDialog
  ) {
    this.status = '';
    this.lat = -10.446;
    this.lng = -74.685;

    this.flagDepa = true;
    this.flagSucu = true;
    this.flagProvi = true;
    this.flaginformacion = false;
  }

  myControl = new FormControl();
  optionsDepartments: Observable<Departments[]> | any;
  optionsSucursalesTodos: Observable<Sucursal[]> | any;

  ngOnInit(): void {
    this.cargarSucursalesTodos();
    this.cargarDepartamentos();
    this.cargarTodas();
  }

  selectItemSearchS(e:any) {
    const myInputElement1: HTMLInputElement = this.myInputRef1.nativeElement;
    const myInputElement2: HTMLInputElement = this.myInputRef2.nativeElement;
    const myInputElement3: HTMLInputElement = this.myInputRef3.nativeElement;
    const myInputElement4: HTMLInputElement = this.myInputRef4.nativeElement;
    let queryG = this.el.nativeElement.querySelector('.general-search')
    let queryS = this.el.nativeElement.querySelector('.single-search')
    if(e===0) {
      if(!queryG.classList.contains('active')) {
        queryG.classList.add('active')
        queryS.classList.remove('active')
        myInputElement1.value = '';
        myInputElement2.value = '';
        myInputElement3.value = '';
        myInputElement4.value = '';
      }
    } else {
      if(!queryS.classList.contains('active')) {
        queryS.classList.add('active')
        queryG.classList.remove('active')
        myInputElement1.value = '';
        myInputElement2.value = '';
        myInputElement3.value = '';
        myInputElement4.value = '';
      }
    }
    // this.myInputRef.nativeElement.value = '';
  }

  displayFnDepartments(departaments: Departments): string {
    return departaments && departaments.nombre ? departaments.nombre : '';
  }
  displayFnProvinces(provinces: Provinces): string {
    return provinces && provinces.ciudad ? provinces.ciudad : '';
  }
  displayFnSucursal(sucursales: Sucursal): string {
    return sucursales && sucursales.titulo ? sucursales.titulo : '';
  }

  cargarTodas() {
    this._departamentoService.getSucursalesTodas().subscribe(
      (response) => {
        if ((response.status = 'success')) {
          this.sucursalesGPS = response.sucursales;
        }
      },
      (error) => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
  cargarDepartamentos() {
    this._departamentoService.getDepartamento().subscribe(
      (response: any) => {
        if ((response.status = 'success')) {
          this.departamentos = response.departamentos;
          this.firstDep = this.departamentos[0].nombre;
          this.flagDepa = false;
          this.optionsDepartments = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => (typeof value === 'string' ? value : value?.nombre)),
            map((name) =>
              name
                ? this.departamentos.filter((option: any) =>
                    option.nombre
                      .toLowerCase()
                      .includes(name.toLocaleLowerCase())
                  )
                : this.departamentos.slice()
            )
          );
        }
      },
      (error: any) => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
  cargarSucursalesTodos() {
    this._departamentoService.getSucursalesTodas().subscribe(
      (response: any) => {
        if ((response.status = 'success')) {
          this.sucursales = response.sucursales;
          this.sucursalesGPS = response.sucursales;
          this.firstSurc = this.sucursales[0].titulo;
          this.flagSucu = false;
          this.optionsSucursalesTodos = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => (typeof value === 'string' ? value : value?.titulo)),
            map((name) =>
              name
                ? this.sucursales.filter((option: any) =>
                    option.titulo
                      .toLowerCase()
                      .includes(name.toLocaleLowerCase())
                  )
                : this.sucursales.slice()
            )
          );
        }
      },
      (error: any) => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }
  async cargarProvincias() {
    while (this.flagDepa) {
      await this.delay(1000);
      //console.log("esperando...")
    }
    this._departamentoService
      .getSucursalesbyDepartamento(this.firstDep)
      .subscribe(
        (response) => {
          if ((response.status = 'success')) {
            this.provincias = response.sucursales;
            this.firstPro = this.provincias[0].ciudad;
            this.flagProvi = false;
          }
        },
        (error) => {
          this.status = 'error';
          console.log(<any>error);
        }
      );
  }
  async cargarSucursales() {
    this.flaginformacion = true;
    while (this.flagProvi) {
      await this.delay(1000)
    }
    this._departamentoService.getSucursalesbyCiudad(this.firstPro).subscribe(
      (response) => {
        if ((response.status = 'success')) {
          this.sucursalesSelecionada = this.sucursales
        }
      },
      (error) => {
        this.status = 'error'
        console.log(<any>error)
      }
    );
  }
  
  openModalSucursal() {
    return this.dialog.open(SucursalInfoModal)
  }

  onOptionsSelected(e: any) {
    this.flaginformacion = false
    this._departamentoService.getDepartamentobyid(e.id).subscribe(
      (response) => {
        if ((response.status = 'success')) {
          this.departamento = response.departamento
          this.lat = this.departamento.latitud
          this.lng = this.departamento.longitud
          this._departamentoService
            .getSucursalesbyDepartamento(this.departamento.nombre)
            .subscribe(
              (response) => {
                if ((response.status = 'success')) {
                    this.provincias = response.sucursales
                    this.select = document.getElementById('seleccioneprovincia')
                    this.select = document.getElementById('seleccionesucursal')
                  }
                },
              (error) => {
                this.status = 'error'
                console.log(<any>error)
              }
            );
        }
      },
      (error) => {
        this.status = 'error'
        console.log(<any>error)
      }
    )
  }
  provinciaSelect(e: any) {
    this.flaginformacion = false
    this._departamentoService.getSucursalesbyCiudad(e.ciudad).subscribe(
      (response) => {
        if ((response.status = 'success')) {
          this.sucursales = response.sucursales
          this.sucursalesGPS = response.sucursales
          this.select = document.getElementById('seleccionesucursal')
        }
      },
      (error) => {
        this.status = 'error'
        console.log(<any>error)
      }
    )
  }
  sucursalSelect(e: any) {
    this._departamentoService.getSucursalesbyid(e.id).subscribe(
      (response) => {
        if ((response.status = 'success')) {
          this.flaginformacion = true
          this.sucursalesGPS = response.sucursales
          this.sucursalesSelecionada = response.sucursales
        }
      },
      (error) => {
        this.status = 'error'
        console.log(<any>error)
      }
    )
  }

  howToGet(e: any) {
    window.open(
      `https://www.google.com/maps/dir/Tu%20ubicación/${e.latitud},${e.longitud}`
    );
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
