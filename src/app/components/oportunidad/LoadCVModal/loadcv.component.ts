import { Component, Input, Inject, OnInit } from "@angular/core";
import { cv } from "src/app/models/cv";
import { global } from '../../../services/global';
import { DOCUMENT } from "@angular/common";
import { OportunidadService } from '../../../services/oportunidad.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loadcv',
  templateUrl: './loadcv.component.html',
  styleUrls: ['./loadcv.component.scss']
})

export class LoadCVComponent implements OnInit {

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
    public dialog: MatDialog,
    private _oportunidadService:OportunidadService
  ) {
  }

  CvUpload(e:any)  {
  	let res=JSON.parse(e.response)
  	this.cvModel.cv=res.file
		this.flagCvUp=false
  }

  sendOpenCV() {
    this.dialog.open(SendMessageModalLCV, {
      data: [{
        check: this.check
      },]
    })
  }

  async cargarCV() {
    this.cvModel.lugar = this.convocatoriaSeleccionada.lugar
    for(let i=0; i<10; i++) {
      await this.delay(100)
    }
    if(!this.flagCvUp) {
      this._oportunidadService.create(this.cvModel).subscribe(
        response => {
          if(response.status === 'success') {
            this.cvModel = new cv(0,'','9999999','','','','0','','sin puesto','')
            this.check = 1
            this.sendOpenCV()
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
        this.sendOpenCV()
      }
  }

  ngOnInit(): void {
  }

  delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}

  closeModal() {
    return this.document.body.classList.remove('modal-lcv')
  }
}


@Component({
  selector: 'app-sendmessage',
  templateUrl: '../sendmessagemodal.component.html',
})
export class SendMessageModalLCV {

  public check: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.check = data[0].check
  }
}