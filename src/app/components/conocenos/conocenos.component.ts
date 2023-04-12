import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
@Component({
  selector: 'app-timeline',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class ConocenosComponent implements OnInit {
  timelineItems: any[] = [];
  visibleIndex = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.timelineItems = [
      {
        icon: 'fa-solid fa-flag-checkered',
        date: '1989',
        description: 'Iniciamos como una empre familiar, con dos vehículos que nos permitieron conectar las principales ciudades del Sur como: Arequipa, Juliaca, Puno y Cusco.',
        arrow: 'fa-solid fa-angles-down fa-bounce'
      },
      {
        icon: 'fa-solid fa-van-shuttle',
        date: '2002',
        description: 'Se abrió la primera sucursal en Lima, es ahí cuando el sueño de expandirse a todo el Perú se iba volviendo realidad, ya que la empresa empezaría a tener un crecimiento considerable.',
        arrow: 'fa-solid fa-angles-down fa-bounce'
      },
      {
        icon: 'fa-solid fa-backward-fast fa-flip-horizontal',
        date: '2022',
        description: 'Con sacrificio y perseverancia nos hemos posicionado como la empresa líder en transporte de carga a nivel nacional, permaneciendo en el camino del éxito y así mismo llevar el negocio de miles de emprendedores a todo el Perú'
      }
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const timelineItems = this.el.nativeElement.querySelectorAll('.timeline-item');
    timelineItems.forEach((item: any, index: number) => {
      const boundingRect = item.getBoundingClientRect();
      if (boundingRect.top <= window.innerHeight - 50 && boundingRect.bottom >= 0) {
        this.visibleIndex = index;
      }
    });
  }

  isVisible(index: number) {
    return index <= this.visibleIndex;
  }

  getClass(index: number) {
    return this.isVisible(index) ? 'visible' : 'invisible';
  }

}