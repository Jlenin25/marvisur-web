// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

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
  
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]> | undefined;

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this._filter(name) : this.options.slice())
    //   );
    this.cargarDepartamentos()
    this.getDepartamentoSearch()
    //this.cargarProvincias()
    //this.cargarSucursales()
    this.cargarTodas()
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  public _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => (option.name.toLowerCase().includes(filterValue)));
  }

  cargarTodas(){
    this._departamentoService.getSucursalesTodas().subscribe(
  		response =>{
  			if(response.status='success'){
          this.sucursalesGPS=response.sucursales;
  				//console.log(response);	
         
          //console.log(this.firstDep)
  			}
  			
  		},
  		error=>{
  			this.status='error';
  			console.log(<any>error); 
  		}
  		);
  }

  getDepartamentoSearch() {
    this._departamentoService.getDepartamento().subscribe(
  		response =>{
  			if(response.status='success'){
          this.departamentos=response.departamentos;
  				//console.log(response);	
          this.firstDep=this.departamentos[0].nombre
          this.flagDepa=false;
          //console.log(this.firstDep)
  			}
  			
  		},
  		error=>{
  			this.status='error';
  			console.log(<any>error); 
  		}
    );
  }

  cargarDepartamentos(){
    this._departamentoService.getDepartamento().subscribe(
  		response =>{
  			if(response.status='success'){
          this.departamentos=response.departamentos;
  				//console.log(response);	
          this.firstDep=this.departamentos[0].nombre
          this.flagDepa=false;
          //console.log(this.firstDep)
  			}
  			
  		},
  		error=>{
  			this.status='error';
  			console.log(<any>error); 
  		}
  		);

  }
  async cargarProvincias(){
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
          //console.log(this.firstPro);	
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
         // this.sucursales=response.sucursales;

          this.sucursalesSelecionada=this.sucursales
          //this.firstPro=this.provincias[0].ciudad
          //console.log(this.firstPro);	
        }
        
      },
      error=>{
        this.status='error';
        console.log(<any>error); 
      }
      ); 
  }

  onOptionsSelected(e:any){
    this.flaginformacion=false
    this._departamentoService.getDepartamentobyid(e.target.value).subscribe(
      response =>{ 
        if(response.status='success'){ 
          //console.log(this.departamento);
          this.departamento=response.departamento; 
           
          this.lat=this.departamento.latitud;
          this.lng=this.departamento.longitud;

          this._SucursalesTodasService.getSucursalesbyDepartamento(this.departamento.nombre).subscribe(
              response =>{ 
                if(response.status='success'){ //console.log(response); 
                  this.provincias=response.sucursales;
   
                 // this.firstPro=response.sucursales[0].ciudad
                  //this.cargarSucursales()
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
    
    this._SucursalesTodasService.getSucursalesbyid(e.target.value).subscribe(

        response =>{
          if(response.status='success'){
            this.flaginformacion=true
            //console.log(this.sucursales); 
            //console.log(response);  
            //this.sucursales=response.sucursales;
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
    this._SucursalesTodasService.getSucursalesbyCiudad(e.target.value).subscribe(

        response =>{
          if(response.status='success'){
            //console.log(this.sucursales); 
            //console.log(response);  
            this.sucursales=response.sucursales
            this.sucursalesGPS=response.sucursales;
            //this.seleccione="asdasdasdasdasd"
            //this.=this.sucursales[0].ciudad
            //this.cargarSucursales()
              //this.zoom=12;
         
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
