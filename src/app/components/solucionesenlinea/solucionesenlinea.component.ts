import { Component, OnInit } from '@angular/core';
import { Solucion } from 'src/app/models/solucion';
import { SolucionesService } from 'src/app/services/footer.service';
import {global} from '../../services/global';

@Component({
  selector: 'app-solucionesenlinea',
  templateUrl: './solucionesenlinea.component.html',
  styleUrls: ['./solucionesenlinea.component.css'],
  providers:[SolucionesService]
})
export class SolucionesenlineaComponent implements OnInit {
  public solucionModel:Solucion;
  submitted=false;
  public flagSoluciones:boolean=true;
  status="";
  public check:Number;

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
  
  constructor(private _solucionesService:SolucionesService) { 
    this.solucionModel=new Solucion(0,"","","","","","","","","","No hay archivo","1");
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
  async onSubmitSolucionesenlinea() {
    for( var i=1;i<3;i++){
      await this.delay(1000);

    }
    
  //this.submitted = true;
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
  }else{
    while(this.flagSoluciones){
      await this.delay(1000);
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
 
 
}
close(){
  this.flagSoluciones=true;
  this.check=0;
  window.location.reload();
}
delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

}
