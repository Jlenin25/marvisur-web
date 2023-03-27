import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';
import { Tarifario } from '../models/tarifario';
@Injectable()
export class TarifarioService{
	public url:string;
	constructor(public _http:HttpClient){
		this.url=global.url;
	}
	getDestinos():Observable<any>{
        //let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'obtenerdestinosdiferentes',);
                                        
	}
	getPrecioBuscado(tarifario:Tarifario):Observable<any>{
    	let json =JSON.stringify(tarifario);
        //let params = json;
		let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
		//let headers =new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'buscartarifario',params,{headers:headers});  
	}
}