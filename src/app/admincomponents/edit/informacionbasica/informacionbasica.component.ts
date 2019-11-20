import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { infoBasica } from '../../../interfaces/informacionbasica';
import { InformacionbasicaService } from '../../../services/crud/informacionbasica.service';
@Component({
  selector: 'app-informacionbasica',
  templateUrl: './informacionbasica.component.html',
  styleUrls: ['./informacionbasica.component.css']
})
export class InformacionbasicaComponent implements OnInit {

  ArrayInformacionBasica: infoBasica[];
 
  constructor(
    private informacionbasica:InformacionbasicaService
  ) { 
    this.informacionbasica.get().subscribe(
      (data:infoBasica[])=>{this.ArrayInformacionBasica=data},
      (error)=>{alert('Ocurrió un error');} 
    );
  
    
  }

  ngOnInit() {
  }

}
