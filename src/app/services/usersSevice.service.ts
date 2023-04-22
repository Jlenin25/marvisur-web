import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { global } from './global';
import { data } from './data';
import { Auth } from "../models/users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string
  private apiUrl = './data.json'

  constructor(public http:HttpClient) {
    this.url = global.url
  }

  login(email: string, password: string): Observable<any> {
    const user = data.users.find((u: { email: string; password: string; }) => u.email === email && u.password === password);

    if (user) {
      const auth: Auth = {
        id: user.id!,
        email: user.email!,
        password: user.password!
      };

      return of(auth);
    } else {
      return throwError('Email or password is incorrect');
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // getCurrentUser(): Auth {
  //   return JSON.parse(localStorage.getItem('currentUser'));
  // }
}