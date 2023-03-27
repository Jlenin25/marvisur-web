import { Component, OnInit } from '@angular/core';
import { Reclamacion } from 'src/app/models/reclamacion';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {

  public reclamacionModel!:Reclamacion;
  submitted=false;
  check!:number;
  status="";
  constructor() { }

  ngOnInit(): void {
  }

}
