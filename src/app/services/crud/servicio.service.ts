import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }
  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/servicio');
   }
   getRutaImg(){
    return this.API_ENDPOINT+'/imageServicio/';
  }
}
