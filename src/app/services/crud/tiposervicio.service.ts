import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
import { tiposervicio } from 'src/app/interfaces/tiposervicio';
@Injectable({
  providedIn: 'root'
})
export class TiposervicioService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/tipoServicio');
   }
   modificar(contenido)
   {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/tipoServicio/'+contenido.id,contenido,{headers: headers});
   }
   save(tipoServicio : tiposervicio)
   {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/tipoServicio',tipoServicio,{headers: headers});
   }
}
