import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
import { servicio } from 'src/app/interfaces/servicio';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }
  get()
  {
    return this.httpClient.get(this.API_ENDPOINT+'/servicio');
  }
   getRutaImg()
  {
    return this.API_ENDPOINT+'/imageServicio/';
  }
  modificar(contenido)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/servicio/'+contenido.id,contenido,{headers: headers});
  }
  putImage(filesToUpload:any,idRegistro:any)
  {

    return this.httpClient.post(this.API_ENDPOINT+'/uploadImageServicio/'+idRegistro,filesToUpload);
  }
  save(servicio : servicio)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/servicio',servicio,{headers: headers});
  }
}
