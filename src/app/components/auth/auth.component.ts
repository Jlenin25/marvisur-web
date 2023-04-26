import { Component, OnInit, ElementRef } from '@angular/core'
import { Router } from '@angular/router'
import { UserClientModel, UserEnterpriseModel, Auth } from 'src/app/models/users'
import { registerPersonInterface, UserEnterpriseInterface, AuthInterface } from 'src/app/interfaces/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/usersSevice.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  success = false;
  error = '';

  public typePerson: string
  // public userlogin: Auth
  public razonsocial: string = ''
  public nombres: string = ''
  public apellidos: string = ''
  public email: string = ''
  public password: string = ''
  public loginError: string
  public confirmPassword: string

  registerPerson: registerPersonInterface = {
    idClient: '',
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
  }
  registerEnterprise: UserEnterpriseModel = {
    idEnterprise: '',
    razonsocial: '',
    email: '',
    password: ''
  }
  userlogin: Auth = {
    id: '',
    email: '',
    password: '',
  }

  emailEnterpriseVerify: string = 'empresa@gmail.com'
  emailPersonVerify: string = 'usuario@gmail.com'
  razonsocialVerify: string = 'nombreEmpresa'

  constructor(
    private el: ElementRef,
    private router: Router,
    private _userService: UsersService,
    private formBuilder: FormBuilder,
    public http: HttpClient
  ) {
    this.typePerson = 'empresa'
    this.razonsocial = ''
    this.nombres = ''
    this.apellidos = ''
    this.email = ''
    this.password = ''
    this.loginError = ''
    this.registerPerson
    this.confirmPassword = ''
    // this.userlogin = new Auth('','')
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: this.passwordMatchValidator
    });
  }
  get f() { return this.registerForm.controls; }

  private passwordMatchValidator(g: FormGroup) {
    const password = g.get('password');
    const confirmPassword = g.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { mismatch: true };
  }

  changeLoginRegister() {
    const container = this.el.nativeElement.querySelector('.login')
    if (!container.classList.contains('sign-up-mode')) {
      container.classList.add('sign-up-mode')
    } else {
      container.classList.remove('sign-up-mode')
    }
  }

  changeTypePerson() {
    var changePerson = this.el.nativeElement.querySelector('.typePerson')
    if (!changePerson.classList.contains('enterprise')) {
      changePerson.classList.add('enterprise')
      return (this.typePerson = 'persona')
    } else {
      changePerson.classList.remove('enterprise')
      return (this.typePerson = 'empresa')
    }
  }

  formLogin() {
    this._userService.login(this.email, this.password).subscribe(
      (auth) => {
        // Autenticación exitosa
        // Guardar el usuario en el almacenamiento local
        localStorage.setItem('auth', JSON.stringify(auth))
        // Reiniciar el formulario
        this.email = ''
        this.password = ''
        this.router.navigate(['/'])
        alert(`Bienvenido ${auth.email}`)
      },
      (error) => {
        // Autenticación fallida
        alert('Email o contraseña incorrectos')
      }
    )
  }
  formRegister(form: any) {

    const data = {
      email: this.f['email'],
      password: this.f['password'],
      username: this.f['username']
    }
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('no registrado')
      return;
    }

    this._userService.register(data)
      .subscribe(
        data => {
      console.log('registrado')
      this.success = true;
        },
        error => {
          this.error = error;
        });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
