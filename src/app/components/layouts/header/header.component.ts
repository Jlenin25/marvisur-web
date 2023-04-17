import { Component, OnInit, HostListener  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isMenuOpen = false

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }


  // TODO: Cross browsing
  
  public temp:Number;
  public numero:number;
  
  
  set changeNumero(a:number){
  }
  constructor(private sanitizer: DomSanitizer) { 
    this.temp=3;
    this.numero=0;
  }

  ngOnInit(): void {
  }

  public metodo1() {
    this.temp=1;
  }

  public metodo2() {
    this.temp=2;
  }

  cambioConocenos(){

  }

}
