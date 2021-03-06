import { Component, OnInit } from '@angular/core';
import { tiposervicio } from 'src/app/interfaces/tipoServicio';
import { TiposervicioService } from 'src/app/services/crud/tiposervicio.service';
import { categoria }from 'src/app/interfaces/categoria';
import { CategoriaService }from 'src/app/services/crud/categoria.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css']
})
export class TiposervicioComponent implements OnInit {

  ArrayTipoServicio : tiposervicio[];
  ArrayCategoria: categoria[];
  
  constructor(
    private tipoServicio:TiposervicioService,
    private categoriaSer: CategoriaService,
    private route:Router
  ) { 
    this.tipoServicio.get().subscribe(
      (data:tiposervicio[])=>{ this.ArrayTipoServicio = data},
      (error)=>{alert("Ocurrió un error");}
    );
    this.categoriaSer.get().subscribe(
      (data:categoria[])=>{this.ArrayCategoria = data},
      (error)=>{alert("Ocurrió un error");}
    );
  }
  
 
  ngOnInit() {
  }
  editarTipoServicio(id:any){
    this.route.navigateByUrl('panelAdmin/edit/tipoServicio/formulario/'+id);  
  }
}
