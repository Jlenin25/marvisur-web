import {
  Component,
  OnInit,
  Input,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'info-tracking-modal',
  templateUrl: './infotrakingmodal.component.html',
  styleUrls: ['./infotrakingmodal.component.scss']
})
export class InfoTrackingModalComponent implements OnInit {

  @Input() primeraInfo:any
  @Input() infoRastreo:any
  @Input() flagResponseTrack:any

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  modalInfoTraking() {
    return this.document.body.classList.remove('modal-it');
  }
}