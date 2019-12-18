import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
@Injectable({
  providedIn: 'root'
})
export class InformacionbasicaService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/informacionBasica');
   }
  modificar(contenido){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/informacionBasica/'+1,contenido,{headers:headers});
  }
}
