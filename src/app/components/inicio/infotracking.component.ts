import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { Tracking } from 'src/app/models/tracking';
import { Infotracking } from '../../models/infotracking';
import { RastreoService } from 'src/app/services/rastreo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'info-tracking',
  templateUrl: 'infotracking.component.html',
})
export class InfoTrackComponent implements OnInit {
  public infoRastreo: Infotracking[] = [];
  public primeraInfo: Infotracking;
  public flagResponseTrack: boolean = true;
  public rastreo: Tracking;
  
  public limitGuias: number;
  

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _RastreoService: RastreoService,
  ) {
    this.rastreo = new Tracking('', '');
    
    this.limitGuias = 0;
    
    this.primeraInfo = new Infotracking(
      -1,
      '-',
      new Date(),
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  ngOnInit(): void {
    // this._RastreoService.getcantidadGuias().subscribe(
    //   (response) => {
    //     if (response.status == 'success') {
    //       this.limitGuias = response.consultaguia[0].cantidad;
          
    //     } else {
    //       console.log('error');
    //     }
    //   },
    //   (error) => {
    //     console.log(<any>error);
    //   }
    // );
  }

  onSubmit(form: any) {
    this.flagResponseTrack = true;
    this.infoRastreo = [];
    this.primeraInfo = new Infotracking(
      -1,
      '-',
      new Date(),
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    );
    
    this._RastreoService.getTracking(this.rastreo).subscribe(
      (response) => {
        //   if(response.statusCode=='200'){
        //
        if (response.length == 0) {
          this.flagResponseTrack = false;
        } else {
          this.infoRastreo = response;
          this.buscarPrimero(this.infoRastreo);
          this.flagResponseTrack = true;
        }

        //
        // }else{
        //   console.log("error")
        // }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  buscarPrimero(arreglo: any) {
    for (let info of arreglo) {
      if (info.ID == 0) {
        this.primeraInfo = info;
      }
    }
  }

  
}