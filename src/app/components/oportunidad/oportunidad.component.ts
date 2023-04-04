import { Component, OnInit } from '@angular/core';
import { OportunidadService } from '../../services/oportunidad.service';
import { cv } from '../../models/cv';
import {global} from '../../services/global';
import { Convocatoria } from 'src/app/models/convocatoria';

@Component({
  selector: 'app-oportunidad',
  templateUrl: './oportunidad.component.html',
  styleUrls: ['./oportunidad.component.scss'],
  providers:[OportunidadService]
 
})
export class OportunidadComponent implements OnInit {

public check:number;	
public cvModel:cv;
public flagButton:boolean=false;
public convocatorias:Array<Convocatoria>;
public convocatoriaSeleccionada:Convocatoria;
public words:Array<string>;
public funcionesList:Array<string>;

public flag:boolean;
public flagCvUp:boolean;
items:any;
pageOfItems: Array<any>;

submitted=false;

afuConfig = {
    multiple:false,
    maxSize: "5",
      uploadAPI: {
        url:global.url+'uploadcv'
      },
      headers:{
         "Content-Type" : "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar:false,
      hideResetBtn:true,
      hideSelectBtn:false,
      attachPinText:'Adjuntar CV'
  };

 
  public status: string;
  constructor(
	  

	  private _oportunidadService:OportunidadService,
	
  	) 
	  { 
	this.check=0;
	this.status='';
	this.cvModel=new cv(0,'','9999999','','','','0','','sin puesto','');
	this.convocatorias=Array<Convocatoria>();
	this.convocatoriaSeleccionada=new Convocatoria(0,"","","","","","","",0,"","");
	this.words = Array<string>();
	this.funcionesList = Array<string>();
	this.flag=true; // flag para listar las funciones de la oportunidad laboral
	this.pageOfItems=new Array<any>();
	this.flagCvUp=true;

	}
	
	async onSubmit(form:any){ 
		this.cvModel.lugar=this.convocatoriaSeleccionada.lugar
		//console.log(this.cvModel.lugar)

		//this.submitted = true;
			for(let i =0;i<10;i++){
				await this.delay(1000);

			}

			if(!this.flagCvUp){
				this._oportunidadService.create(this.cvModel).subscribe(
					response=>{
						if(response.status=='success'){
							this.cvModel=new cv(0,'','9999999','','','','0','','sin puesto','');
							this.check=1;
							//this.flagsubida=false;
	
						}else{
							this.status='error';
							this.check=2;
						}
					},
					error=>{
						this.status='error';
						console.log(<any>error)
						this.check=2;
					}
				)
			
			}else{
				this.check=2;
			}
			

		
	
	}
	
  ngOnInit(): void {
    
	  this._oportunidadService.getallconvocatorias().subscribe(
			response=>{
				if(response.status=='success'){
					this.convocatorias=response.convocatorias;
					this.items = this.convocatorias;
					
				}else{
					this.status='error';
				
				}
			},
			error=>{
				this.status='error';
				console.log(<any>error)
			}
	
	)


	  	
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
 }
 
   CvUpload(e:any)  {
	//console.log("entroa upload")
  	let res=JSON.parse(e.response)
  	this.cvModel.cv=res.file
	this.flagCvUp=false;	
  }
 //cargar cv por puesto.
  async cargarCV(){
	this.cvModel.lugar=this.convocatoriaSeleccionada.lugar
	//console.log(this.cvModel.lugar)
	 	 /* 
		while(this.flagCvUp){
			await this.delay(1000);
			//console.log("esperando...")
		
		}*/
		for(let i =0;i<10;i++){
			await this.delay(1000);

		}
		if(!this.flagCvUp){
			//console.log("1")
			this._oportunidadService.create(this.cvModel).subscribe(
			
				response=>{
					//console.log("1" );
					//console.log(this.cvModel)
					if(response.status=='success'){
						this.cvModel=new cv(0,'','9999999','','','','0','','sin puesto','');
						//console.log(this.cvModel)
						this.check=1;
						//console.log("2")
						//this.flagsubida=false;
						
					}else{
						this.status='error';
						this.check=2;
						//console.log("3")
					}
				},
				error=>{
					this.status='error';
					this.check=2;
					//console.log("4")
				}
			)
		}else{
			this.check=2
			//console.log("5")
		}
		
	 
	
  }

   doStuff(item:number){
	 if(item>0){
		this.flag=true;
	 }else{
		this.flag=false; 
	 }
	for (let convocatoria of this.convocatorias) {
		if(convocatoria.code==item){
			this.convocatoriaSeleccionada=convocatoria;
			var str = convocatoria.conocimientos; 
			var str1= convocatoria.funciones;
			this.cvModel.puesto=convocatoria.cargo
			this.words = str.split(/\r?\n|\r|\n/g);
			this.funcionesList = str1.split(/\r?\n|\r|\n/g);
		}
			
	}	
}
delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
close(){
	this.flagCvUp=true;
	this.check=0;
	//console.log("cerrado")
}	
}
