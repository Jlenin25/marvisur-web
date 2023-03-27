import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';
@Injectable()
export class SolucionesService{
	public url:string;
	constructor(public _http:HttpClient){
		this.url=global.url;
	}
	
	create(solucion:any):Observable<any>{
		let json =JSON.stringify(solucion);
        let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'savepedidosolucion',params,{headers:headers});                               
	}
	createSugerencia(sugerencia:any):Observable<any>{
		let json =JSON.stringify(sugerencia);
        let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'savesugerencias',params,{headers:headers});
                                 
	}

}