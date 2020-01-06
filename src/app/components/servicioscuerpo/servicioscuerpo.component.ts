import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/interfaces/categoria';
import { tiposervicio } from 'src/app/interfaces/tiposervicio';
import { servicio } from 'src/app/interfaces/servicio';
import { CategoriaService } from 'src/app/services/crud/categoria.service';
import { TiposervicioService } from 'src/app/services/crud/tiposervicio.service';
import { ServicioService } from 'src/app/services/crud/servicio.service';

@Component({
  selector: 'app-servicioscuerpo',
  templateUrl: './servicioscuerpo.component.html',
  styleUrls: ['./servicioscuerpo.component.css']
})
export class ServicioscuerpoComponent implements OnInit {
  ArrayCategoria:categoria[];
  ArrayTipoServicio:tiposervicio[];
  ArrayServicio:servicio[];

  rutaImagenCategoria: string;
  rutaImagenServicio:string;

  categoriaSeleccionada;

  constructor(
    private categoriaService : CategoriaService,
    private tipoServicioService: TiposervicioService,
    private servicioService: ServicioService
  ) 
  { 
    this.rutaImagenCategoria = categoriaService.getRutaImg();
    this.rutaImagenServicio = servicioService.getRutaImg();
    this.categoriaService.get().subscribe(
      (data:categoria[])=>{
        this.ArrayCategoria = data;
      },
      (error)=>{ alert("Ocurrió un error");}
    );
    this.tipoServicioService.get().subscribe(
      (data:tiposervicio[])=>{
        this.ArrayTipoServicio = data;
      },
      (error)=>{alert('Ocurrió un error');}
    );
    this.servicioService.get().subscribe(
      (data:servicio[])=>{
        this.ArrayServicio = data;
      },
      (error)=>{alert('Ocurrió un error');}
    );
  }

  ngOnInit() { 
  }
  EleccionCategoria(id){

    this.categoriaSeleccionada = id;
  }

}
