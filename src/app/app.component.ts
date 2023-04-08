import { Component, Inject, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, NavigationEnd} from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import {filter} from "rxjs/operators";
import { DOCUMENT } from '@angular/common';

declare var gtag:any;

@Component({
  providers:[PruebaComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Marvisur';
  phone ='';

    constructor(
      @Inject(DOCUMENT) private document: Document,
      private route: ActivatedRoute,
      private router: Router,
      private prueba: PruebaComponent){
      const navEndEvents$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd));
      // @ts-ignore
      navEndEvents$.subscribe((event:NavigationEnd)=>{
        gtag('config','G-MVK0NEBDR5',{
          'page_path':event.urlAfterRedirects
        });
      });
    }

    ngOnInit(): void {
      window.onscroll = () => {
        this.document.body.setAttribute('style', `top: -${window.scrollY}px`)
      }
      this.prueba.open();
    }

    irRuta(){
      this.router.navigate(['/inicio'],{fragment:'rastreadoenvio'});
    }
    getRandomPhone(): void {
      let phones = ["959177150", "940169684", "958325624", "983768818", "978200584","963404045", "960081337"]
      this.phone = phones[Math.floor(Math.random() * phones.length)];
    }

}