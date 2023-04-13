import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class ConocenosComponent implements OnInit {

  timelineItems: any[] = [];
  infoAboutUsItems: any[] = [];
  visibleIndex = 0;
  visibleAboutUsIndex = 0

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
    ]
    this.infoAboutUsItems = [
      {
        image: '',
        description: ``
      },
      {
        image: 'assets/svg/undraw_product_teardown_re_m1pc.svg',
        description: `“Nuestra misión como empresa de transporte es asegurar relaciones rentables a largo plazo con nuestros clientes, empleados y socios comerciales al ofrecer servicios confiables e innovadores.”`
      },
      {
        image: 'assets/svg/undraw_team_collaboration_re_ow29.svg',
        description: `“Ser reconocidos como una de las empresas de transporte más reconocidas de la industria debido a nuestros compromisos con los clientes, empleados y socios comerciales.”`
      },
      {
        image: 'assets/svg/undraw_product_teardown_re_m1pc.svg',
        description: `“Nuestro objetivo es proporcionar los servicios más amplios y eficientes que satisfagan las demandas de todos nuestros clientes.”`
      }
    ]
  }

  

  // TimeLine
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const timelineItems = this.el.nativeElement.querySelectorAll('.timeline-item');
    timelineItems.forEach((item: any, index: number) => {
      const boundingRect = item.getBoundingClientRect();
      if (boundingRect.top <= window.innerHeight - 50 && boundingRect.bottom >= 0) {
        this.visibleIndex = index;
      }
    })
    // About Us
    const infoAboutUsItems = this.el.nativeElement.querySelectorAll('.group-cards-mv');
    infoAboutUsItems.forEach((item2: any, index2: number) => {
      const boundingRect = item2.getBoundingClientRect();
      if (boundingRect.top <= window.innerHeight - 50 && boundingRect.bottom >= 0) {
        this.visibleAboutUsIndex = index2;
      }
    });
  }

  isVisible(index: number) {
    return index <= this.visibleIndex;
  }
  getClass(index: number) {
    return this.isVisible(index) ? 'visible' : 'invisible';
  }

  isVisibleAboutUs(index2: number) {
    return index2 <= this.visibleAboutUsIndex;
  }
  getClassAboutUs(index2: number) {
    return this.isVisibleAboutUs(index2) ? 'visible' : 'invisible';
  }

}