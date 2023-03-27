import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';
@Injectable()
export class OportunidadService{
	public url:string;
	constructor(public _http:HttpClient){
		this.url=global.url;
	}
	
	create(cv:any):Observable<any>{
		let json =JSON.stringify(cv);
        let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'savecv',params,{headers:headers});
                                        
	}
	getallconvocatorias():Observable<any>{
		
        //let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'obtenerconvocatorias',);
                                        
	}
}