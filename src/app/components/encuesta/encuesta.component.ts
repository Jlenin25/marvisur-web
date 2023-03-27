import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  public iFrameUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/forms/d/e/1FAIpQLSfwVtT5D4SH585yggRgHAPhnGktySzs13n5ZhDUnfnHsEtfwQ/viewform?embedded=true')

  }

}
