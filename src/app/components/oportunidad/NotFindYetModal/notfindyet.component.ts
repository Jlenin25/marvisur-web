import { Component, Input, Inject, OnInit } from "@angular/core";
import { cv } from "src/app/models/cv";
import { global } from '../../../services/global';
import { OportunidadService } from "src/app/services/oportunidad.service";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-notfindyet',
  templateUrl: './notfindyet.component.html',
  styleUrls: ['./notfindyet.component.scss']
})

export class NotFindYetComponent implements OnInit {

  @Input() convocatoriaSeleccionada: any
  @Input() words: any
  @Input() funcionesList: any
  @Input() cvModel: any
  @Input() flagCvUp: any
  @Input() check: any
  @Input() status: any

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
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _oportunidadService:OportunidadService
  ) {
  }
  CvUpload(e:any)  {
  	let res=JSON.parse(e.response)
  	this.cvModel.cv=res.file
		console.log(res.file)
		this.flagCvUp=false
  }

  async cargarCV() {
    this.cvModel.lugar = this.convocatoriaSeleccionada.lugar
    for(let i=0; i<10; i++) {
      await this.delay(1000)
    }
    if(!this.flagCvUp) {
      this._oportunidadService.create(this.cvModel).subscribe(
        response => {
          if(response.status === 'success') {
            this.cvModel = new cv(0,'','9999999','','','','0','','sin puesto','')
            this.check = 1
            console.log('enviado')
          } else {
            this.status = 'error'
            this.check = 2
          }
        },
        error => {
          this.status = 'error'
          this.check = 2
        }
      )
    } else {
      this.check = 2
    }
  }

  ngOnInit(): void {
  }

  delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}

  closeModal() {
    return this.document.body.classList.remove('modal-nfy')
  }
}