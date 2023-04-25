import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, UserEnterpriseModel } from 'src/app/models/users';
import { UsersService } from 'src/app/services/usersSevice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public typePerson: string
  // public userlogin: Auth
  public razonsocial: string = ''
  public nombres: string = ''
  public apellidos: string = ''
  public email: string = ''
  public password: string = ''
  public loginError: string;
  userlogin: Auth = {
    id: '',
    email: '',
    password: '',
  };

  emailVerify: string = 'usuario@gmail.com'
  razonsocialVerify: string = 'nombreEmpresa'

  constructor(private el: ElementRef, private router: Router, private _userService: UsersService, public http:HttpClient) {
    this.typePerson = 'empresa'
    this.razonsocial = ''
    this.nombres = ''
    this.apellidos = ''
    this.email = ''
    this.password = ''
    this.loginError = ''
    // this.userlogin = new Auth('','')
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
      return this.typePerson = 'persona'
    } else {
      changePerson.classList.remove('enterprise')
      return this.typePerson = 'empresa'
    }
  }

  formLogin(form: any) {
    this._userService.login(this.email, this.password)
      .subscribe(
        (auth) => {
          // Autenticación exitosa
          // Guardar el usuario en el almacenamiento local
          localStorage.setItem('auth', JSON.stringify(auth));
          // Reiniciar el formulario
          this.email = '';
          this.password = '';
          this.router.navigate(['/'])
          alert(`Bienvenido ${auth.email}`)
        },
        (error) => {
          // Autenticación fallida
          alert('Email o contraseña incorrectos');
        }
      );
  }
  formRegister(form: any) {
    const container = this.el.nativeElement.querySelector('.login');
    if(form.valid && form.dirty) {
      if(this.typePerson === 'empresa') {
        console.log(this.nombres)
      } else {
        if(form.value.email === this.emailVerify) {
          console.log(`${this.emailVerify} ya existe`)
        }else if(form.value.razonsocial === this.razonsocialVerify) {
          console.log(`${this.razonsocialVerify} ya existe`)
        } else {
          alert('La empresa se regitro correctamente')
          container.classList.remove('sign-up-mode');
        }
        // console.log(form.value.email)
      }
    }
  }
}