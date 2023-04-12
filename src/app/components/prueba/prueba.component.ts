import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prueba',
  template: `
  <button class="btn-closeModal" (click)="activeModal.dismiss('Cross click')">
    <i class="fa-solid fa-xmark"></i>
  </button>
  <article id="carouselModalMain" class="modal-carousel-main carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/images/pago plin y yape.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="assets/images/siguenos en ig.jpg" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="assets/images/cotizaciones_e_informes_modal_main.jpg" class="d-block w-100" />
      </div>
    </div>
    <div class="carousel-control">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselModalMain"
        data-bs-slide="prev"
      >
        <i class="fa-solid fa-chevron-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselModalMain"
        data-bs-slide="next"
      >
        <i class="fa-solid fa-chevron-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </article>
  `,
  styleUrls: ['./prueba.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PruebaModalContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
})
export class PruebaComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(PruebaModalContent, { windowClass: 'custom-window-class'});
  }
}
