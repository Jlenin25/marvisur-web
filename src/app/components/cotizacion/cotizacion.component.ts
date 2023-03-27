import { Component, OnInit, OnDestroy } from '@angular/core';
import { CotizaUser } from '../../models/cotizauser';
import {CotizacionService} from '../../services/cotizacion.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import {global} from '../../services/global';
import { HeaderComponent } from '../layouts/header/header.component';
import { TarifarioService } from 'src/app/services/tarifario.service';
import { Tarifario } from 'src/app/models/tarifario';
import { Tarifa } from 'src/app/models/tarifa';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css'],
  providers:[CotizacionService, DepartamentoService,TarifarioService]

})

export class CotizacionComponent implements OnInit{

  public status:String;
  public flag:boolean;
  public flagPaquete:number;
 
  public template:boolean;
  public templateUnchecked:boolean;
  public templateChecked:boolean;
  public radioValue:Number;
  public cotizaUserModel:CotizaUser;
  public sucursales:any;
  public sucursalesDes:any;
  public temp_desc:string;
  public temp_cant:string;
  public tarifario:Tarifario;
  public flagCotiza:boolean;
  public flagBusquedaTarifario:boolean
  public tarifarioBuscado:any;

  

  afuConfig = {
    multiple:false,
    maxSize: "5",
      uploadAPI: {
        url:global.url+'uploadimagen'
      },
      headers:{
         "Content-Type" : "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar:false,
      hideResetBtn:true,
      hideSelectBtn:false,
      attachPinText:'Adjuntar Archivo'
  };

  constructor(
  	private _cotizacionService:CotizacionService,
    private _SucursalesTodasService:DepartamentoService,
    private _TarifarioService:TarifarioService
  	) { 
    
    this.tarifarioBuscado=new Tarifa(0,"","","","","","","","")

  	this.status='';
    this.temp_desc='';
    this.temp_cant='';
    this.flag=true;
    this.flagPaquete=0;
    this.template=true;
    this.templateUnchecked=false;
    this.templateChecked=true;
    this.radioValue=1;
    this.flagCotiza=false;
    this.flagBusquedaTarifario=false;
    this.tarifario= new Tarifario("","")
    this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","","no hay imagen","Seleccione2","","0")
    this.tarifarioBuscado=new Array<any>();
  }
  async onSubmit(form:any){ 
    for( var i=1;i<3;i++){
      await this.delay(1000);

    }
    
    if(this.cotizaUserModel.imagen=='no hay imagen'){
      this._cotizacionService.create(this.cotizaUserModel).subscribe(
        response=>{
          console.log("sin imagen")
          if(response.status=='success'){
           // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
  
            this.flagPaquete=1;
            //this.cotizaUserModel.origen="ini";
           
          }else{
            this.status='error';
            console.log(this.cotizaUserModel)
            console.log("error")
            console.log("3")
            this.flagPaquete=2;
          }
        },
        error=>{
          console.log("4")
          this.status='error';
          this.flagPaquete=2;
          console.log(<any>error)
        }
      );
    }else{
      while(this.flag){
        await this.delay(1000);
        
      } 
      this._cotizacionService.create(this.cotizaUserModel).subscribe(
        response=>{
          console.log("con imagen")
          if(response.status=='success'){
           // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
  
            this.flagPaquete=1;
            //this.cotizaUserModel.origen="ini";
           
          }else{
            this.status='error';
            console.log(this.cotizaUserModel)
            console.log("error")
            console.log("3")
            this.flagPaquete=2;
          }
        },
        error=>{
          console.log("4")
          this.status='error';
          this.flagPaquete=2;
          console.log(<any>error)
        }
      );
    }
   



		

	}
  async onSubmitcorpo(form:any){ 
    this.cotizaUserModel.flag='1'
    for( var i=1;i<3;i++){
      await this.delay(1000);

    }
    
    if(this.cotizaUserModel.imagen=='no hay imagen'){
      this._cotizacionService.create(this.cotizaUserModel).subscribe(
        response=>{
          console.log("sin imagen")
          if(response.status=='success'){
           // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
  
            this.flagPaquete=1;
            //this.cotizaUserModel.origen="ini";
           
          }else{
            this.status='error';
            console.log(this.cotizaUserModel)
            console.log("error")
            console.log("3")
            this.flagPaquete=2;
          }
        },
        error=>{
          console.log("4")
          this.status='error';
          this.flagPaquete=2;
          console.log(<any>error)
        }
      );
    }else{
      while(this.flag){
        await this.delay(1000);
        
      } 
      this._cotizacionService.create(this.cotizaUserModel).subscribe(
        response=>{
          console.log("con imagen")
          if(response.status=='success'){
           // this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")
  
            this.flagPaquete=1;
            //this.cotizaUserModel.origen="ini";
           
          }else{
            this.status='error';
            console.log(this.cotizaUserModel)
            console.log("error")
            console.log("3")
            this.flagPaquete=2;
          }
        },
        error=>{
          console.log("4")
          this.status='error';
          this.flagPaquete=2;
          console.log(<any>error)
        }
      );
    }
   



		

	}
   onSubmitNoImg(form:any){ 
   		this._cotizacionService.create(this.cotizaUserModel).subscribe(
			response=>{
       
				if(response.status=='success'){
          //this.cotizaUserModel= new CotizaUser(0,"","","","Seleccione","Seleccione1","0","","","","","","-","no hay imagen","Seleccione2")

          this.flagPaquete=1;
          //this.cotizaUserModel.origen="ini";
         
				}else{
					this.status='error';
          console.log(this.cotizaUserModel)
        
          this.flagPaquete=2;
				}
			},
			error=>{
        console.log("4")
				this.status='error';
        this.flagPaquete=2;
				console.log(<any>error)
			}
		);

	}
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  ngOnInit(): void {
    this._TarifarioService.getDestinos().subscribe(
      response =>{

        if(response.status='success'){
          this.sucursalesDes=response.tarifario;
          //console.log(this.sucursalesDes);  
        }
        
        },
        error=>{
        this.status='error';
        console.log(<any>error); 
        }
      );
  
  	this._SucursalesTodasService.getSucursalesTodas().subscribe(
        response =>{

          if(response.status='success'){
            this.sucursales=response.sucursales;
              // console.log(this.sucursales);  
          }
          
          },
          error=>{
          this.status='error';
          console.log(<any>error); 
          }
        );
           
	}
 
  adjuntoUpload(e:any){
    this.cotizaUserModel.imagen='-'
  	let res=JSON.parse(e.response);
  	//console.log(res.file);
  	this.cotizaUserModel.imagen=res.file;	
    this.flag=false;
  }
  close(){
    this.flag=true;
    this.flagPaquete=0;
    window.location.reload();
  }
  cambioSelect(){
    
    if((this.cotizaUserModel.origen  != 'Seleccione')&&  (this.cotizaUserModel.destino != 'Seleccione1')){
      this.flagCotiza=true
      this.tarifario.ori_tar=this.cotizaUserModel.origen
      this.tarifario.des_tar=this.cotizaUserModel.destino
     
      this._TarifarioService.getPrecioBuscado(this.tarifario).subscribe(
        response =>{

          if(response.status='success'){
            this.tarifarioBuscado=response.tarifario;
            this.flagBusquedaTarifario=true 
          } 
          
          },
          error=>{
          this.status='error';
          console.log(<any>error); 
          }
        );
     


    }else{
      this.flagCotiza=false
    }
    
    //console.log(origencotiza)

    //console.log(destinocotiza)

  }
 
}
