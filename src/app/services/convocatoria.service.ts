import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Convocatoria } from '../models/convocatoria';
import {global} from './global';

@Injectable()
export class ConvocatoriaService{
	public url:string;
	constructor(public _http:HttpClient){
		this.url=global.url;
	}
	
	create(cv:any):Observable<any>{
		let json =JSON.stringify(cv);
        let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'savecotizauser',params,{headers:headers});
                                        
	}
	showallconvocatorias():Observable<any>{
		
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'obtenerconvocatorias',{headers:headers});
                                        
	}
}