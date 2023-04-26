import { Component, OnInit, Inject } from '@angular/core';
import { Sugerencia } from 'src/app/models/sugerencia';
import { SolucionesService } from 'src/app/services/footer.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./suggestions.component.scss'],
  providers: [SolucionesService],
})
export class SugerenciasComponent implements OnInit {
  public sugerenciaModel: Sugerencia;
  submitted = false;
  check: Number;
  status = '';

  constructor(
    private _solucionesService: SolucionesService,
    public dialog: MatDialog
  ) {
    this.sugerenciaModel = new Sugerencia(0, '', '', '', '', '1');
    this.check = 0;
  }

  ngOnInit(): void {}

  singleNumber(e: any) {
    // 13 -> para el botón enter
    // 9 -> para el botón tab
    var key = window.Event ? e.which : e.keyCode;
    return key >= 48 && key <= 57;
  }

  sendOpenModal() {
    this.dialog.open(modalSuggestionsComponent, {
      data: [
        {
          check: this.check,
        },
      ],
    });
  }

  onSubmitSugerencia() {
    this.submitted = true;
    this._solucionesService.createSugerencia(this.sugerenciaModel).subscribe(
      (response) => {
        if (response.status == 'success') {
          this.sugerenciaModel = response.sugerencias;
          this.check = 1;
          this.sugerenciaModel = new Sugerencia(0, '', '', '', '', '1');
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
  }
}

@Component({
  selector: 'modal-suggestion',
  templateUrl: 'modalSuggestions.component.html',
})
export class modalSuggestionsComponent {
  public check: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.check = data[0].check;
  }
}
