import { Component, OnInit } from '@angular/core';
import { categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/crud/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponentNew implements OnInit {
  id:number;
  editing:boolean = false;
  arrayCategoria : categoria[];
  arrayVacioCategoria : categoria  = {
    nombre:null,
    imagen : 'loading.gif'  
  }

  RutaImagenes :string;
  InputImageFueTocada:boolean = false;
  constructor
  (
    public readonly swalTargets: SwalPortalTargets,
    private activateRoute:ActivatedRoute,
    private route:Router,
    private categoriaServices: CategoriaService,
  ) 
  {
    this.id = this.activateRoute.snapshot.params['id'];
    this.RutaImagenes=this.categoriaServices.getRutaImg();
    if(this.id)
      {
        this.editing = true;
        this.categoriaServices.get().subscribe(
          (data:categoria[])=>{
            this.arrayCategoria = data;
            this.arrayVacioCategoria = this.arrayCategoria.find((m) => {return m.id == this.id});
          },
          (error)=>{
            console.log(error);
          }
        );
      }else
      {
        this.editing = false;
       
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
  GuardarCategoria()
  {
    if(this.editing)
    {
      if(this.InputImageFueTocada)
        {
          this.GuardarModificacionTexto();
          this.GuardarImagen();
          this.MensajeConfirmacion("Categoría Modificada");
        }else
        this.GuardarModificacionTexto();
        this.MensajeConfirmacion("Categoría Modificada");
    }else
    {
      this.GuardarNuevaCategoria();
    }
  }
  IrPanel()
  {
    this.route.navigateByUrl('/panelAdmin');
  }
  IrCategorias()
  {
    this.route.navigateByUrl('/panelAdmin/edit/categoria');
  }

  MensajeConfirmacion(texto)
  {
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

  GuardarModificacionTexto()
  {
    
    this.categoriaServices.modificar(this.arrayVacioCategoria).subscribe(
      (data)=>{
          
      },
      (error)=>{console.log(error)}
    );
  }

  GuardarImagen()
  {
    this.categoriaServices.putImage(this.formData,this.arrayVacioCategoria.id).subscribe( //line8
      (response) => {
        
      });
  }
  GuardarNuevaCategoria()
  {
    
    this.categoriaServices.save(this.arrayVacioCategoria).subscribe(
      (data)=>{
        this.MensajeConfirmacion("Categoría Guardada");
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
