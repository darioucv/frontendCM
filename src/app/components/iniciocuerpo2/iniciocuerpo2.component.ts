import { Component, OnInit } from '@angular/core';
import { servicio } from 'src/app/interfaces/servicio';
import { ServicioService } from 'src/app/services/crud/servicio.service';

@Component({
  selector: 'app-iniciocuerpo2',
  templateUrl: './iniciocuerpo2.component.html',
  styleUrls: ['./iniciocuerpo2.component.css']
})
export class Iniciocuerpo2Component implements OnInit {
  ArrayServicio : servicio[];
  rutaImagen : String;
  constructor(
    private servicioService: ServicioService,
  ) 
  {
    this.rutaImagen = servicioService.getRutaImg();
    this.servicioService.get().subscribe(
      (data:servicio[])=>{
        this.ArrayServicio = data;
      },
      (error)=>{alert('Ocurrió un error');}
    );
  }

  ngOnInit() {
  }

}
