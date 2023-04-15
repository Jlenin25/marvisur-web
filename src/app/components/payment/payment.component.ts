import { Component } from "@angular/core";

@Component ({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})

export class PaymentComponent {
  
  items = [
    {
      image: 'https://placehold.it/800x400',
      title: 'Slide 1',
      description: 'Description for slide 1'
    },
    {
      image: 'https://placehold.it/800x400',
      title: 'Slide 2',
      description: 'Description for slide 2'
    },
    {
      image: 'https://placehold.it/800x400',
      title: 'Slide 3',
      description: 'Description for slide 3'
    },
    // ...
  ];
  currentIndex = 0;

  previousItem(): void {
    this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
  }

  nextItem(): void {
    this.currentIndex = this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
  }
  
  constructor() {
  }

}