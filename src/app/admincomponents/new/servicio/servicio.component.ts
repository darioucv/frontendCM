import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicio } from 'src/app/interfaces/servicio';
import { ServicioService } from 'src/app/services/crud/servicio.service';

import { tiposervicio } from 'src/app/interfaces/tiposervicio';
import { TiposervicioService } from 'src/app/services/crud/tiposervicio.service';

import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component(
  {
    selector: 'app-servicio',
    templateUrl: './servicio.component.html',
    styleUrls: ['./servicio.component.css']
  })
export class ServicioComponentNew implements OnInit 
{

  valorDefaultRB:string;
  id:any;
  RutaImagenes :string;
  InputImageFueTocada:boolean = false;
  ArrayServicios:servicio[];
  ArrayTipoServicios: tiposervicio[];
  ArrayVacioServicios: servicio = 
  {

    nombre:null,
    estrella:0,
    descripcion:null,
    imagen:'loading.gif',
    tiposervicios_id:null,
    empresas_id:3
  }
  editing:boolean = false;
  constructor
    (
      public readonly swalTargets: SwalPortalTargets,
      private activateRoute:ActivatedRoute,
      private servicioService: ServicioService,
      private tipoServ: TiposervicioService,
      private route:Router,
    ) 
    { 
      //recibo el id que mando por link y lo pongo en la varible id creada anteriormente
      this.id= this.activateRoute.snapshot.params['id'];
      this.RutaImagenes=this.servicioService.getRutaImg();
      if(this.id)
      {
        this.editing = true;
        this.servicioService.get().subscribe(
          (data:servicio[])=>{
            this.ArrayServicios=data;
            this.ArrayVacioServicios=this.ArrayServicios.find((m)=>{return m.id == this.id});
            this.valorDefaultRB= String(this.ArrayVacioServicios.estrella);//valor si es estrella
          },
          (error)=>{console.log(error);}
        );
      }else
        {
          this.editing = false;
          this.tipoServ.get().subscribe
          (
            (data:tiposervicio[])=>{this.ArrayTipoServicios = data},
            (error)=>{console.log(error);}
          );
        }
      
    }
  ngOnInit() {
    
  }
  
    /* control de imagenes */
    imgURL: any;
    /* variable que almacena el formato de imagen para enviar al backend */
    formData = new FormData();
    uploadFile(event)
    { 
      this.InputImageFueTocada=true;
      /* preview */
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload =(evt) => 
      {
        this.imgURL = <string>reader.result;
      }

      /* cada vez que se pone una imagen esto actualiza el formadata */
      let elem = event.target;  
      if(elem.files.length > 0)
      {     
        this.formData.append('imagen', elem.files[0]);  
      }
      elem.value = "";  
    }
    /* tipoServicio */
    tipoServicioID:string;
    vertipoServicioID:number;
    capturarIDTipoServicio(){
     this.vertipoServicioID = +this.tipoServicioID;
    }

    GuardarServicio()
    {
      
      this.ArrayVacioServicios.estrella = +this.valorDefaultRB;//recibo el valor del radiobutton por ngmodel
      if(this.editing)
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
            this.servicioService.modificar(this.ArrayVacioServicios).subscribe
            (
              (data)=>
              {
                if(!this.InputImageFueTocada){
                  this.MensajeConfirmacion("Servicio Modificado");
                }else{
                  //se manda la imagen al servidor
                  this.servicioService.putImage(this.formData,this.ArrayVacioServicios.id).subscribe( //line8
                    (response) => {
                      this.MensajeConfirmacion("Servicio Modificado");
                    });
                }
              },
              (error)=>{console.log(error)}
            );
           
          }
        })
        
      }else
      {
        Swal.fire({
          title: 'Nuevo Servicio',
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
            this.ArrayVacioServicios.tiposervicios_id =  this.vertipoServicioID;
            this.servicioService.save(this.ArrayVacioServicios).subscribe
            (
              (data)=>
              {
                this.MensajeConfirmacion("Servicio Guardado");
              },
              (error)=>
              {
                console.log(error);
              }
            );
          }
        })
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

  IrServicios(){
    this.route.navigateByUrl('/panelAdmin/edit/servicio');
  }
  IrPanel(){
    this.route.navigateByUrl('/panelAdmin');
  }

}