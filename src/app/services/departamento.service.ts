import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
	providedIn: 'root'
})

export class DepartamentoService{

	public url:string;

	constructor(private http:HttpClient) {
		this.url=global.url;
	}
	
	getDepartamento():Observable<any> {
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get(this.url+'obtenerdepartamentos',);
	}
	getSucursalesTodas():Observable<any> {
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get(this.url+'sucursalesTodas',);
	}
	getSucursalesbyDepartamento(name:string):Observable<any>{
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get(this.url+'obtenersucursalespordepa/'+name,);
	}	
	getSucursalesbyid(name:string):Observable<any>{
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get(this.url+'obtenersucursalesporid/'+name,);
	}
	getDepartamentobyid(name:string):Observable<any>{
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.get(this.url+'obtenerdepartamentoporid/'+name,);
	}
	getSucursalesbyCiudad(name:string):Observable<any>{
		//let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		//return this.http.get(this.url+'obtenersucursalesporciudad/'+name,{headers:headers});
		return this.http.get(this.url+'obtenersucursalesporciudad/'+name,);
	}
}