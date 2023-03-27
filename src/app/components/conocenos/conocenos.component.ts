import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from "swiper/core";
import { environment } from '../../../environments/environment';
import { HeaderComponent } from '../layouts/header/header.component';
SwiperCore.use([Pagination]);


@Component({
  selector: 'conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css'],
  encapsulation: ViewEncapsulation.None


})

export class ConocenosComponent implements OnInit {
public page_title:string;

  constructor() {
  this.page_title='Conocenos';
  HeaderComponent.prototype.numero=1;
}
  ngOnInit(): void {
  
  }

}
