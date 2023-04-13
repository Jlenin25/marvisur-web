import { Component, OnInit } from '@angular/core';
import { Sugerencia } from 'src/app/models/sugerencia';
import { SolucionesService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./suggestions.component.scss'],
  providers:[SolucionesService],
 
})
export class SugerenciasComponent implements OnInit {

  public sugerenciaModel:Sugerencia;
  submitted=false;
  check:Number
  status="";

  constructor(private _solucionesService:SolucionesService) { 
    this.sugerenciaModel=new Sugerencia(0,"","","","","1");
    this.check=0;
  }

  ngOnInit(): void {

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

  close(){
    this.check=0;
    window.location.reload();
  }
}
