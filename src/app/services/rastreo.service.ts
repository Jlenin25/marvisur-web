import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, JsonpClientBackend} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';
import {Tracking} from '../models/tracking'
import {Infotracking} from "../models/infotracking";
import {map} from "rxjs/operators";
import {Welcome} from "../models/responseTrack";
@Injectable()
export class RastreoService{
	public url:string;
	constructor(public _http:HttpClient){
		this.url=global.url;
	}

	create():Observable<any>{
		//let json =JSON.stringify(cv);
        //let params = "json="+json;
        let headers =new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'obtenerdepartamentos',null,{headers:headers});

	}
	getTracking(rastreo:Tracking){
		let json =JSON.stringify(rastreo);
        //let params = json;
    // console.log(json);
		// let params = "json="+json;
		//let headers =new HttpHeaders().set('Content-Type','application/json');


        return this._http.post<Welcome>('https://jtfp1lubog.execute-api.us-east-1.amazonaws.com/produccion/api-marvisur',json)
          .pipe(
            map(
              resp =>{

                return resp.body[0].map( convocatoria => Infotracking.TrackingFromJson(convocatoria))
              }
          ));
		//console.log("service easdasd")
		//return this._http.post("http://localhost:57329/api/Rastreo",params,{headers:headers});
	}
	getcantidadGuias():Observable<any>{

		//let headers =new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'obtenercantidadguias',);
		//console.log("service easdasd")
		//return this._http.post("http://192.168.1.82/api/api/Rastreo",params,{headers:headers});
	}
}
