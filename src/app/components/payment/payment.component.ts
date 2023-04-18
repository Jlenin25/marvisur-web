import { Component, ElementRef } from "@angular/core";

@Component ({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})

export class PaymentComponent {

  nameCard = 'Visa'
  inputDC = 'DNI'

  itemsCard:any [] = [
    {
      'img': 'visa',
      'name': 'visa'
    },
    {
      'img': 'mastercard',
      'name': 'mastercard'
    },
    {
      'img': 'americanexpress',
      'name': 'americanexpress'
    },
    {
      'img': 'dinnersclub',
      'name': 'dinnersclub'
    }
  ]

  constructor(private el: ElementRef) {
    this.nameCard
    this.inputDC
  }

  selectItemCard(e:any) {
    switch(e) {
      case 0:
        this.nameCard = 'Visa'
        break
      case 1:
        this.nameCard = 'Mastercard'
        break
      case 2:
        this.nameCard = 'American Express'
        break
      case 3:
        this.nameCard = 'Dinners Club'
        break
    }
  }
  
  singleNumber(e:any) {
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
  }
  changeInputDC() {
    if(this.inputDC === 'DNI') {
      this.inputDC = 'CE'
    } else {
      this.inputDC = 'DNI'
    }
  }

}