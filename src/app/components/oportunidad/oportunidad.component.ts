import { Component, Inject, ElementRef, OnInit } from '@angular/core';
import { OportunidadService } from '../../services/oportunidad.service';
import { cv } from '../../models/cv';
import { Convocatoria } from 'src/app/models/convocatoria';
import { MatDialog } from '@angular/material/dialog';
import { NotFindYetComponent } from './NotFindYetModal/notfindyet.component';
import { DOCUMENT } from '@angular/common';

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
  public status: string;
	public devolver: any
	items:any;
	pageOfItems: Array<any>;
	submitted=false;


  constructor(
		@Inject(DOCUMENT) private document: Document,
		public dialog: MatDialog,
	  private _oportunidadService:OportunidadService,
		private el: ElementRef
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
	
	async onSubmit(form:any) {
		this.cvModel.lugar = this.convocatoriaSeleccionada.lugar
		//console.log(this.cvModel.lugar)
		//this.submitted = true;
		for(let i =0;i<10;i++) {
			await this.delay(1000);
		}
		if(!this.flagCvUp) {
			this._oportunidadService.create(this.cvModel).subscribe(
				response => {
					if(response.status=='success') {
						this.cvModel = new cv(0,'','9999999','','','','0','','sin puesto','');
						this.check=1;
						//this.flagsubida=false;
					} else {
						this.status='error';
						this.check=2;
					}
				},
				error => {
					this.status='error';
					console.log(<any>error)
					this.check=2;
				}
			)
		} else {
			this.check=2;
		}
	}

  ngOnInit(): void {
		window.onscroll = () => {
			// console.log(window.scrollY)
			this.document.body.setAttribute('style', `top: -${window.scrollY}px`)
		}
	  this._oportunidadService.getallconvocatorias().subscribe(
			response => {
				if(response.status=='success'){
					this.convocatorias=response.convocatorias;
					this.items = this.convocatorias;
				}else{
					this.status='error';
				}
			},
			error => {
				this.status='error';
				console.log(<any>error)
			}
		)
  }

	openModalLCV() {
    this.document.body.classList.add('modal-lcv')
		this.devolver = document.querySelector('body')
		// var docuBody2 = this.el.nativeElement.querySelector('body')
		// console.log(this.el.nativeElement.querySelector('.webkit-scrollbar')?.offsetTop)
		// var docuBody2 = this.el.nativeElement.querySelector(`.btn-${e}`)?.offsetTop
		this.document.body.setAttribute('style', `top: ${this.devolver.style.top}`)
  }

	openModalNFY() {
    this.document.body.classList.add('modal-nfy')
		this.devolver = document.querySelector('body')
		this.document.body.setAttribute('style', `top: ${this.devolver.style.top}`)
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
	}

	CvUpload(e:any)  {
  	let res=JSON.parse(e.response)
  	this.cvModel.cv=res.file
		console.log(res.file)
		this.flagCvUp=false
  }

 //cargar cv por puesto.
  async cargarCV(){
	this.cvModel.lugar=this.convocatoriaSeleccionada.lugar
		for(let i =0;i<10;i++){
			await this.delay(1000);

		}
		if(!this.flagCvUp){
			this._oportunidadService.create(this.cvModel).subscribe(
				response=>{
					if(response.status=='success'){
						this.cvModel=new cv(0,'','9999999','','','','0','','sin puesto','')
						this.check=1;
					}else{
						this.status='error';
						this.check=2;
					}
				},
				error=>{
					this.status='error';
					this.check=2;
				}
			)
		}else{
			this.check=2
		}
  }

	doStuff(item:number) {
		if(item > 0) {
			this.openModalLCV()
		} else {
			this.openModalNFY()
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
	close() {
		this.flagCvUp=true;
		this.check=0;
		//console.log("cerrado")
	}
}
