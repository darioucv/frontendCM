import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../../services/global.service';
@Injectable({
  providedIn: 'root'
})
export class DatoService {
  API_ENDPOINT:string;
  constructor(private rutaBackend:Globals,private httpClient: HttpClient) { 
    this.API_ENDPOINT = this.rutaBackend.getRutaBackend()
  }
}
