import { Component, Inject, OnInit } from "@angular/core";
import { Convocatoria } from "src/app/models/convocatoria";
import { cv } from "src/app/models/cv";
import { global } from '../../../services/global';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loadcv',
  templateUrl: './loadcv.component.html',
  styleUrls: ['./loadcv.component.scss']
})

export class LoadCVComponent implements OnInit {

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

  public check:number;
  public convocatorias:Array<Convocatoria>;
  public cvModel:cv;
  items:any;
  public flagCvUp:boolean;
  public status: string;
  public convocatoriaSeleccionada:Convocatoria;
  public words:Array<string>;
  public funcionesList:Array<string>;
  public flag: boolean
  public delay: any
  // public flag:boolean;
  public onSubmit: any
  public cargarCV: any
  public CvUpload: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.flag = data[0].flag
    this.convocatorias= data[0].convocatorias
    this.cvModel= data[0].cvModel
    this.convocatoriaSeleccionada= data[0].convocatoriaSeleccionada
    this.flagCvUp= data[0].flagCvUp
    this.check= data[0].check
    this.status= data[0].status
    this.words = data[0].words
    this.funcionesList = data[0].funcionesList
    this.delay = data[0].delay
    // this.flag=true;
    this.onSubmit = data[0].onSubmit
    this.cargarCV = data[0].cargarCV
    this.CvUpload = data[0].CvUpload
  }

  ngOnInit(): void {
  }
}