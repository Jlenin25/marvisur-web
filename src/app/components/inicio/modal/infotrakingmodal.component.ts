import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'info-tracking-modal',
  templateUrl: './infotrakingmodal.component.html',
  styleUrls: ['./infotrakingmodal.component.scss']
})
export class InfoTrackingModalComponent implements OnInit {

  @Input() primeraInfo:any
  @Input() infoRastreo:any
  @Input() flagResponseTrack:any

  constructor() {
  }

  ngOnInit(): void {
  }
}