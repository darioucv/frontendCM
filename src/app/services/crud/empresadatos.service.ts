import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
import { empresadato } from '../../interfaces/empresadatos';
@Injectable({
  providedIn: 'root'
})
export class EmpresadatosService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }
  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/empresaDatos');
  }
  modificar(contenido:any,id:number){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/empresaDatos/'+id,contenido,{headers:headers});
  }
}
