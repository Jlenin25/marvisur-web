import { Component, OnInit } from '@angular/core';
import { Solucion } from 'src/app/models/solucion';
import { Sugerencia } from 'src/app/models/sugerencia';
import { SolucionesService } from 'src/app/services/footer.service';
import {global} from '../../../services/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[SolucionesService]
})
export class FooterComponent implements OnInit {
  public check:Number;
  public solucionModel:Solucion;
  public sugerenciaModel:Sugerencia;
  submitted=false;
  public flagSoluciones:boolean=true;
  status="";
  
  afuConfig = {
    multiple:false,
    maxSize: "5",
      uploadAPI: {
        url:global.url+'uploadadjuntos'
      },
      headers:{
         "Content-Type" : "text/plain;charset=UTF-8"
      },
      theme: "attachPin",
      hideProgressBar:true,
      hideResetBtn:true,
      hideSelectBtn:true,
      attachPinText:'Seleccione Archivo...'
  };
  
  
constructor(private _solucionesService:SolucionesService){
          this.solucionModel=new Solucion(0,"","","","","","","","","","No hay archivo","1");
          this.sugerenciaModel=new Sugerencia(0,"","","","","1");
          this.check=0;
      } 


  ngOnInit(): void {
    
  }

  adjuntoUpload(e:any){
    this.solucionModel.adjuntar_sol='-'
  	let res=JSON.parse(e.response);
  	this.solucionModel.adjuntar_sol=res.file;	
    this.flagSoluciones=false;
  }
 
    async onSubmitSoluciones() {
      for( var i=1;i<3;i++){
        await this.delay(1000);
      }
      if(this.solucionModel.adjuntar_sol=='No hay archivo'){
        this._solucionesService.create(this.solucionModel).subscribe(
     
          response=>{
            if(response.status=='success'){
              this.solucionModel=response.soluciones;
              this.check=1;
              this.solucionModel=new Solucion(0,"","","","","","","","","","No hay archivo","1");
              this.afuConfig.attachPinText="Seleccione Archivo..."
      
          
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
      }
      else{
        while(this.flagSoluciones){
          await this.delay(1000);
          //console.log("esperando...")
        }
        this._solucionesService.create(this.solucionModel).subscribe(
     
          response=>{
            if(response.status=='success'){
              this.solucionModel=response.soluciones;
              this.check=1;
              this.solucionModel=new Solucion(0,"","","","","","","","","","No hay archivo","1");
              this.afuConfig.attachPinText="Seleccione Archivo..."
      
          
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
      }
    
    //this.submitted = true;
		
   
	}
  onSubmitSugerencia() {
    //console.log(this.sugerenciaModel);
    this.submitted = true;
		this._solucionesService.createSugerencia(this.sugerenciaModel).subscribe(
     
			response=>{
				if(response.status=='success'){
					this.sugerenciaModel=response.sugerencias;
					this.check=1;
          this.sugerenciaModel=new Sugerencia(0,"","","","","1");
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
   
	}
 
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
close(){
	this.flagSoluciones=true;
	this.check=0;
  window.location.reload();

	//console.log("cerrado")
}

 
}
