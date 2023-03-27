import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prueba',
  template: `
  
    <div class="modal-header">
      <h4 class="modal-title tittle__mvsr">DIRECTORIO MARVISUR</h4>
      <a class="btn" (click)="activeModal.dismiss('Cross click')"><i class='fa fa-close red-color'></i></a>
    </div>
    <div class="modal-body">
        <img class="img__directory" src="assets/images/carousel/Modal.jpeg" alt="Directorio">
    </div>

  `,
  styleUrls: ['./prueba.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PruebaModalContent {
 

  constructor(public activeModal: NgbActiveModal) {}

}

@Component({selector: 'app-prueba', templateUrl: './prueba.component.html'})
export class PruebaComponent {
  constructor(private modalService: NgbModal) {}

  open() {
     this.modalService.open(PruebaModalContent, { windowClass: 'custom-window-class'});
  }
}
