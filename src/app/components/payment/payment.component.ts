import { Component, ElementRef } from "@angular/core";

@Component ({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})

export class PaymentComponent {

  nameCard = 'Scotiabank'
  inputDC = 'DNI'
  payMethod = 'Billetera digital'

  itemsCard:any [] = [ { 'img': 'bcp' }, { 'img': 'scotiabank' } ]
  itemsWallet:any [] = [ { 'img': 'yape' }, { 'img': 'plin' } ]
  itemsPayMethod:any [] = [ { 'method': 'Billetera digital' }, { 'method': 'Tarjeta' } ]

  constructor(private el: ElementRef) {
    this.nameCard
    this.inputDC
    this.payMethod
  }

  selectItemCard(e:any) {
    switch(e) {
      case 0:
        this.nameCard = 'BCP'
        break
      case 1:
        this.nameCard = 'Scotiabank'
        break
    }
  }
  selectItemWallet(e:any) {
  }
  selectitemPayMethod(e:any) {
    let queryCard = this.el.nativeElement.querySelector('.container-cards')
    let queryWallet = this.el.nativeElement.querySelector('.container-wallets')
    if(e===0) {
      if(!queryWallet.classList.contains('active')) {
        queryWallet.classList.add('active')
        queryCard.classList.remove('active')
      }
    } else {
      if(!queryCard.classList.contains('active')) {
        queryCard.classList.add('active')
        queryWallet.classList.remove('active')
      }
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