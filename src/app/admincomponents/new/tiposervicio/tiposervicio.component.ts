import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tiposervicio } from 'src/app/interfaces/tiposervicio';
import { TiposervicioService } from 'src/app/services/crud/tiposervicio.service';
import { categoria }from 'src/app/interfaces/categoria';
import { CategoriaService }from 'src/app/services/crud/categoria.service';

import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tiposervicio',
  templateUrl: './tiposervicio.component.html',
  styleUrls: ['./tiposervicio.component.css']
})
export class TiposervicioComponentNew implements OnInit {
  id:any;
  editing:boolean = false;
  ArrayTipoServicio : tiposervicio[];
  ArrayVacioTipoServicio :tiposervicio = {
    nombre:null,
    descripcion:null,
    categoria_id:null,
  };
  ArrayCategoria: categoria[];
  constructor
  (
    public readonly swalTargets: SwalPortalTargets,
    private activateRoute:ActivatedRoute,
    private route:Router,
    private tipoServicioServices: TiposervicioService,
    private categoriaSer: CategoriaService,
  ) {
    this.id= this.activateRoute.snapshot.params['id'];
    if(this.id)
      {
        this.editing = true;
        this.tipoServicioServices.get().subscribe(
          (data:tiposervicio[])=>
          {
            this.ArrayTipoServicio = data;
            this.ArrayVacioTipoServicio = this.ArrayTipoServicio.find((m)=>{return m.id == this.id});
          },
          (error)=>{console.log(error);}
        );
        
      }else
      {
        this.editing = false;
        this.categoriaSer.get().subscribe(
          (data:categoria[])=>{this.ArrayCategoria = data},
          (error)=>{alert("Ocurrió un error");}
        );
      }
    
   }

  ngOnInit() {
  }
  /* Categoria ID */
  categoriaID:string;
  verCategoriaID:number;
  capturarIDCategoria(){
   this.verCategoriaID = +this.categoriaID;
  }
  GuardarTipoServicio(){
    if(this.id)
      {
        Swal.fire({
          title: 'Proceso de Cambio',
          text: "¿Estás Seguro?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar'
        }).then((result) => 
        {
          if (result.value) 
          {
            this.tipoServicioServices.modificar(this.ArrayVacioTipoServicio).subscribe(
              (data)=>{this.MensajeConfirmacion("Tipo de Servicio Modificado")},
              (error)=>{console.log(error);}
            );
          }
        });
        
      }else
      {
        Swal.fire({
          title: 'Nuevo Registro',
          text: "¿Estás Seguro?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar'
        }).then((result) => 
        {
          if (result.value) 
          {
            this.ArrayVacioTipoServicio.categoria_id = this.verCategoriaID;
            this.tipoServicioServices.save(this.ArrayVacioTipoServicio).subscribe(
              (data)=>{
                this.MensajeConfirmacion("Tipo de Servicio Guardado");
              },
              (error)=>{
                console.log(error);
              }
            );
          }
        });
      }
  }
  MensajeConfirmacion(texto){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: texto,
      showConfirmButton: false,
      timer: 1500
    }).then((result)=>{
      this.IrPanel();
    })
  }
  IrPanel(){
    this.route.navigateByUrl('/panelAdmin');
  }
  IrATipoServicio(){
    this.route.navigateByUrl('/panelAdmin/edit/tiposServicio');
  }
}
