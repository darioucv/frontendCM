import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class Globals {

  API_ENDPOINT:string = 'http://localhost:8000/api';
  
   getRutaBackend(){
    return this.API_ENDPOINT;
  }
  

}