import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicio } from 'src/app/interfaces/servicio';
import { ServicioService } from 'src/app/services/crud/servicio.service';

import { tiposervicio } from 'src/app/interfaces/tiposervicio';
import { TiposervicioService } from 'src/app/services/crud/tiposervicio.service';
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
    estrella:null,
    descripcion:null,
    imagen:'loading.gif',
    tiposervicios_id:null,
    empresas_id:null
  }
  editing:boolean = false;
  constructor
    (
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
        }
      this.tipoServ.get().subscribe
      (
        (data:tiposervicio[])=>{this.ArrayTipoServicios = data},
        (error)=>{console.log(error);}
      );
      
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
 
  ModificarServicio()
  {
      //ya manda modificacion de texto
     if(this.editing)
    {
      this.ArrayVacioServicios.estrella = +this.valorDefaultRB;//recibo el valor del radiobutton por ngmodel
      this.servicioService.modificar(this.ArrayVacioServicios).subscribe
      (
        (data)=>{
          
          if(this.InputImageFueTocada)
          {
            //se manda la imagen al servidor
            this.servicioService.putImage(this.formData,this.ArrayVacioServicios.id).subscribe( //line8
              (response) => {
                //response code
                console.log("Texto e Imagen Guardada");
              });
          }else
          console.log("Texto Guardado");
          
        },
        (error)=>{console.log(error)}
      ); 
    } 
  }
  IrServicios(){
    this.route.navigateByUrl('/panelAdmin/edit/servicio');
  }
  IrPanel(){
    this.route.navigateByUrl('/panelAdmin');
  }
}