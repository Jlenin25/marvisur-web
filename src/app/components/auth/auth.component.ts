import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/UserREgister';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public typePerson: string
  public UserRegistrModel: UserRegister
  public razonsocial: string = ''
  public nombres: string = ''
  public apellidos: string = ''
  public email: string = ''
  public password: string = ''

  emailVerify: string = 'algo@gmail.com'
  razonsocialVerify: string = 'nombreEmpresa'

  constructor(private el: ElementRef, private router: Router) {
    this.typePerson = 'empresa'
    this.razonsocial = ''
    this.nombres = ''
    this.apellidos = ''
    this.email = ''
    this.password = ''
    this.UserRegistrModel = new UserRegister('','','','','')
  }

  changeLoginRegister() {
    const container = this.el.nativeElement.querySelector('.login');
    if (!container.classList.contains('sign-up-mode')) {
      container.classList.add('sign-up-mode');
    } else {
      container.classList.remove('sign-up-mode');
    }
  }

  changeTypePerson() {
    var changePerson = this.el.nativeElement.querySelector('.typePerson')
    if(!changePerson.classList.contains('enterprise')) {
      changePerson.classList.add('enterprise')
      return this.typePerson = 'persona natural'
    } else {
      changePerson.classList.remove('enterprise')
      return this.typePerson = 'empresa'
    }
  }

  formLogin(form: any) {
    this.UserRegistrModel
    // this.router.navigate(['/']);
  }
  formRegister(form: any) {
    if(form.valid && form.dirty) {
      if(this.typePerson === 'empresa') {
        console.log(this.nombres)
      } else {
        if(form.value.email === this.emailVerify) {
          console.log(`${this.emailVerify} ya existe`)
        }else if(form.value.razonsocial === this.razonsocialVerify) {
          console.log(`${this.razonsocialVerify} ya existe`)
        } else {
          console.log('La empresa se regitro correctamente')
        }
        // console.log(form.value.email)
      }
    }
    // this.router.navigate(['/']);
  }
}