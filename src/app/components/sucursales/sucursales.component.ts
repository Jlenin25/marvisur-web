// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departments } from 'src/app/interfaces/departments';
import { Provinces } from 'src/app/interfaces/provinces';
import { Sucursal } from 'src/app/interfaces/sucursal';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [DepartamentoService],
})

export class SucursalesComponent implements OnInit {
  
  public status: string;
  public lat:number;
  public lng:number;
  public sucursales:any;
  public sucursalesGPS:any;
  public sucursalesSelecionada:any;
  public provincias:any;
  public sucursalesel:any;
  public sucursalesdep:any;
  public departamentos:any;
  public departamento:any;
  public firstDep:any;
  public firstPro:any;
  public flagDepa:boolean;
  public flagProvi:boolean;
  public flaginformacion:boolean
  public ico="assets/images/cursormarvisur.png"
  public select:any
  public JsonRetornado: any
  
  constructor(
  	private _departamentoService:DepartamentoService,
    private _SucursalesTodasService:DepartamentoService,
  	) { 
      this.status='';
      this.lat=-10.446;
      this.lng=-74.685;
      
      this.flagDepa=true;
      this.flagProvi=true;
      this.flaginformacion=false;
    }

  myControl = new FormControl()
  optionsDepartments: Observable<Departments[]> | undefined;
  
  ngOnInit(): void {
    this.cargarDepartamentos()
    this.cargarTodas()
  }



  displayFnDepartments(departaments: Departments): string {
    return departaments && departaments.nombre ? departaments.nombre : '';
  }
  displayFnProvinces(provincis: Provinces): string {
    return provincis && provincis.ciudad ? provincis.ciudad : '';
  }
  displayFnSucursal(sucursales: Sucursal): string {
    return sucursales && sucursales.titulo ? sucursales.titulo : '';
  }

  cargarTodas() {
    this._departamentoService.getSucursalesTodas().subscribe(
  		response => {
  			if(response.status='success') {
          this.sucursalesGPS=response.sucursales;
  			}
  		},
  		error => {
  			this.status='error';
  			console.log(<any>error); 
  		}
    );
  }

  cargarDepartamentos() {
    this._departamentoService.getDepartamento().subscribe(
  		(response:any) =>{
  			if(response.status='success') {
          this.departamentos = response.departamentos;
          this.firstDep = this.departamentos[0].nombre
          this.flagDepa = false;
          this.optionsDepartments = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? 
              this.departamentos.filter(
                (option:any) => (option.nombre.toLowerCase().includes(name.toLocaleLowerCase()))
                ) :
              this.departamentos.slice())
          );
  			}
  		},
  		(error:any) => {
  			this.status='error';
  			console.log(<any>error); 
  		}
    );
  }

  async cargarProvincias() {
    while(this.flagDepa){
			await this.delay(1000);
			//console.log("esperando...")
		}
    this._departamentoService.getSucursalesbyDepartamento(this.firstDep).subscribe(
      response =>{
        if(response.status='success'){
          this.provincias=response.sucursales;
          this.firstPro=this.provincias[0].ciudad
          this.flagProvi=false;
        }
        
      },
      error=>{
        this.status='error';
        console.log(<any>error); 
      }
      ); 
  }

  async cargarSucursales(){
    this.flaginformacion=true
    while(this.flagProvi){
			await this.delay(1000);
			//console.log("esperando...") 
		}
    this._departamentoService.getSucursalesbyCiudad(this.firstPro).subscribe(
      response =>{
        if(response.status='success'){
          this.sucursalesSelecionada=this.sucursales
        }
        
      },
      error=>{
        this.status='error';
        console.log(<any>error); 
      }
      ); 
  }

  onOptionsSelected(e:any) {
    this.flaginformacion=false
    this._departamentoService.getDepartamentobyid(e.id).subscribe(
      response => { 
        if(response.status='success') {
          this.departamento=response.departamento; 
           
          this.lat=this.departamento.latitud;
          this.lng=this.departamento.longitud;

          this._SucursalesTodasService.getSucursalesbyDepartamento(this.departamento.nombre).subscribe(
              response =>{ 
                if(response.status='success') {
                  this.provincias=response.sucursales;
                  this.select = document.getElementById("seleccioneprovincia");
                  this.select.selected=true

                  this.select = document.getElementById("seleccionesucursal");
                  this.select.selected=true

                 }},
              error=>{
                this.status='error';console.log(<any>error); 
              }); 

        }
        },
      error=>{this.status='error';console.log(<any>error); });
     
  }
  suscursalSelect(e:any){
    
    this._SucursalesTodasService.getSucursalesbyid(e.id).subscribe(

        response =>{
          if(response.status='success'){
            this.flaginformacion=true
            this.sucursalesGPS =response.sucursales
            this.sucursalesSelecionada=response.sucursales
          }
        },
        error=>{
          this.status='error';
          console.log(<any>error); 
        }
        );
  }
  provinciaSelect(e:any){
    this.flaginformacion=false
    this._SucursalesTodasService.getSucursalesbyCiudad(e.ciudad).subscribe(
        response =>{
          if(response.status='success'){
            this.sucursales=response.sucursales
            this.sucursalesGPS=response.sucursales;
            this.select = document.getElementById("seleccionesucursal");
            this.select.selected=true
          }
          
        },
        error=>{
          this.status='error';
          console.log(<any>error); 
        }
        );
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
