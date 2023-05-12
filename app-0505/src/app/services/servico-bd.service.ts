import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoBdService {
  server : string = 'http://localhost/apps/producao/20231/app-0505/api/';

  constructor(private http : HttpClient){

  }

  dadosApi(dados : any, api : string){
      const httpOptions = {
          headers : new HttpHeaders({'Content-Type' : 'application/json'})

      }

      let url = this.server + api;
      
      return this.http.post(url, JSON.stringify(dados),httpOptions).pipe(
        
        map(res => res)
        
        )
        
      //return this.http.post(url, JSON.stringify(dados),httpOptions).map(res => res);
  }
}
