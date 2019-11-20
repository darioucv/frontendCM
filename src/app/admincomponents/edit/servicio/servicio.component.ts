import { Component, OnInit } from '@angular/core';
import { servicio } from 'src/app/interfaces/servicio';
import { ServicioService } from 'src/app/services/crud/servicio.service';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  ArrayServicios: servicio[];
  RutaImagenes :string;

  constructor(
      private serviciosService:ServicioService
  ) {
    this.RutaImagenes=this.serviciosService.getRutaImg()
    this.serviciosService.get().subscribe(
      (data:servicio[])=>{this.ArrayServicios = data},
      (error)=>{alert('Ocurrió un error');}
    );
   }

  ngOnInit() {
  }

}
