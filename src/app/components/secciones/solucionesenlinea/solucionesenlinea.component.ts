import { Component, OnInit, Inject } from '@angular/core';
import { Solucion } from 'src/app/models/solucion';
import { SolucionesService } from 'src/app/services/footer.service';
import { global } from '../../../services/global';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-solucionesenlinea',
  templateUrl: './solucionesenlinea.component.html',
  styleUrls: ['./solucionesenlinea.component.scss'],
  providers: [SolucionesService],
})
export class SolucionesenlineaComponent implements OnInit {
  public solucionModel: Solucion;
  submitted = false;
  public flagSoluciones: boolean = true;
  status = '';
  public check: Number;

  afuConfig = {
    multiple: false,
    maxSize: '5',
    uploadAPI: {
      url: global.url + 'uploadadjuntos',
    },
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    attachPinText: 'Seleccione Archivo...',
  };

  constructor(
    private _solucionesService: SolucionesService,
    public dialog: MatDialog
  ) {
    this.solucionModel = new Solucion(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      'No hay archivo',
      '1'
    );
    this.check = 0;
  }

  ngOnInit(): void {}
  
  adjuntoUpload(e: any) {
    this.solucionModel.adjuntar_sol = '-';
    let res = JSON.parse(e.response);
    this.solucionModel.adjuntar_sol = res.file;
    this.flagSoluciones = false;
  }

  singleNumber(e: any) {
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57;
  }

  sendOpenModal() {
    this.dialog.open(SolutionsModalComponent, {
      data: [
        {
          check: this.check,
        },
      ],
    });
  }

  async onSubmitSolucionesenlinea() {
    for (var i = 1; i < 3; i++) {
      await this.delay(500);
    }
    //this.submitted = true;
    if (this.solucionModel.adjuntar_sol == 'No hay archivo') {
      this._solucionesService.create(this.solucionModel).subscribe(
        (response) => {
          if (response.status == 'success') {
            this.solucionModel = response.soluciones;
            this.check = 1;
            this.solucionModel = new Solucion(
              0,
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              'No hay archivo',
              '1'
            );
            this.afuConfig.attachPinText = 'Seleccione Archivo...';
            this.sendOpenModal();
          } else {
            this.status = 'error';
            this.check = 2;
            this.sendOpenModal();
          }
        },
        (error) => {
          this.status = 'error';
          console.log(<any>error);
          this.check = 2;
        }
      );
    } else {
      while (this.flagSoluciones) {
        await this.delay(1000);
      }
      this._solucionesService.create(this.solucionModel).subscribe(
        (response) => {
          if (response.status == 'success') {
            this.solucionModel = response.soluciones;
            this.check = 1;
            this.solucionModel = new Solucion(
              0,
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              'No hay archivo',
              '1'
            );
            this.afuConfig.attachPinText = 'Seleccione Archivo...';
          } else {
            this.status = 'error';
            this.check = 2;
          }
        },
        (error) => {
          this.status = 'error';
          console.log(<any>error);
          this.check = 2;
        }
      );
    }
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

@Component({
  selector: 'modal-solutions',
  templateUrl: 'modalSolutions.component.html',
})
export class SolutionsModalComponent {
  public check: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.check = data[0].check;
  }
}
