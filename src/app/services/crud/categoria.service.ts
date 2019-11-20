import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
import {categoria} from '../../interfaces/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }
  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/categorias');
  }
  getRutaImg(){
    return this.API_ENDPOINT+'/imagecategoria/';
  }
  save(categoria : categoria){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/categorias',categoria,{headers: headers});
  }
  
}
