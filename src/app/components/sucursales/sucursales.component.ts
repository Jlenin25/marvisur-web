// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Departamentos {
  id: number;
  nombre: string,
  latitud: number,
  longitud: number,
  created_at: string,
  updated_at: string
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
  opdepa: Departamentos[] = [
    {
      id:23,nombre:"AMAZONAS",latitud:-6.231690000000,longitud:-77.869030000000,created_at:"2020-11-16 22:19:43",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:7,nombre:"ANCASH",latitud:-9.527790000000,longitud:-77.527780000000,created_at:"2020-11-16 21:02:17",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:1,nombre:"APURIMAC",latitud:-13.633890000000,longitud:-72.881390000000,created_at:"2020-11-16 22:22:04",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:2,nombre:"AREQUIPA",latitud:-16.398890000000,longitud:-71.535000000000,created_at:"2020-11-04 21:03:10",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:3,nombre:"AYACUCHO",latitud:-13.158780000000,longitud:-74.223210000000,created_at:"2020-11-16 20:59:06",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:5,nombre:"CAJAMARCA",latitud:-7.163780000000,longitud:-78.500270000000,created_at:"2020-11-16 21:00:06",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:9,nombre:"CUSCO",latitud:-13.522640000000,longitud:-71.967340000000,created_at:"2020-11-04 21:04:37",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:11,nombre:"HUANCAVELICA",latitud:-12.782610000000,longitud:-74.972660000000,created_at:"2020-11-16 21:16:40",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:13,nombre:"HUÁNUCO",latitud:-9.930620000000,longitud:-76.242230000000,created_at:"2020-11-16 21:31:44",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:8,nombre:"ICA",latitud:-14.067770000000,longitud:-75.728610000000,created_at:"2020-11-16 21:09:49",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:12,nombre:"JUNIN",latitud:-11.158950000000,longitud:-75.993040000000,created_at:"2020-11-16 21:17:28",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:21,nombre:"LA LIBERTAD",latitud:-8.115990000000,longitud:-79.029980000000,created_at:"2020-11-16 22:25:24",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:6,nombre:"LAMBAYEQUE",latitud:-6.701110000000,longitud:-79.906110000000,created_at:"2020-11-16 21:01:22",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:4,nombre:"LIMA",latitud:-12.043180000000,longitud:-77.028240000000,created_at:"2020-11-04 21:03:45",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:15,nombre:"LORETO",latitud:-4.389980000000,longitud:-73.887500000000,created_at:"2020-11-16 21:58:45",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:17,nombre:"MADRE DE DIOS",latitud:-12.629540000000,longitud:-70.675370000000,created_at:"2020-11-16 21:44:36",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:14,nombre:"MOQUEGUA",latitud:-17.198320000000,longitud:-70.935670000000,created_at:"2020-11-16 21:22:54",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:24,nombre:"PASCO",latitud:-10.447575300000,longitud:-75.154538100000,created_at:"2020-12-29 20:45:44",updated_at:"-0001-11-30 00:00:00"
    },
    {
      id:18,nombre:"PIURA",latitud:-5.194490000000,longitud:-80.632820000000,created_at:"2020-11-16 21:45:35",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:25,nombre:"PROV. CONST. DEL CALLAO",latitud:-12.050909830927,longitud:-77.125965364989,created_at:"2022-10-31 22:30:31",updated_at:"-0001-11-30 00:00:00"
    },
    {
      id:10,nombre:"PUNO",latitud:-15.842200000000,longitud:-70.019900000000,created_at:"2020-11-16 21:13:00",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:16,nombre:"SAN MARTIN",latitud:-6.494140000000,longitud:-76.369670000000,created_at:"2020-11-16 22:27:12",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:20,nombre:"TACNA",latitud:-18.014650000000,longitud:-70.253620000000,created_at:"2020-11-16 21:47:56",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:22,nombre:"TUMBES",latitud:-3.566940000000,longitud:-80.451530000000,created_at:"2020-11-16 21:50:36",updated_at:"2020-11-05 02:01:38"
    },
    {
      id:19,nombre:"UCAYALI",latitud:-8.392900000000,longitud:-74.582600000000,created_at:"2020-11-16 21:47:32",updated_at:"2020-11-05 02:01:38"
    }
  ]
  optionsDepartments: Observable<Departamentos[]> | undefined;

  ngOnInit(): void {
    let hola = this.optionsDepartments = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.opdepa.slice())
      );
    console.log(hola)
    this.cargarDepartamentos()
    this.getDepartamentoSearch()
    //this.cargarProvincias()
    //this.cargarSucursales()
    this.cargarTodas()
  }

  displayFn(departaments: Departamentos): string {
    return departaments && departaments.nombre ? departaments.nombre : '';
  }

  public _filter(name: string): Departamentos[] {
    const filterValue = name.toLowerCase();

    return this.opdepa.filter((option) => (option.nombre.toLowerCase().includes(filterValue)));
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
