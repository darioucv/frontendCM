import { Component, OnInit } from '@angular/core'
import { infoBasica } from '../../../interfaces/informacionbasica';
import { InformacionbasicaService } from '../../../services/crud/informacionbasica.service';
import { empresadato } from 'src/app/interfaces/empresadatos';
import { EmpresadatosService } from 'src/app/services/crud/empresadatos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-informacionbasica',
  templateUrl: './informacionbasica.component.html',
  styleUrls: ['./informacionbasica.component.css']
})
export class InformacionbasicaComponent implements OnInit {

  ArrayInformacionBasica: infoBasica[];
  buttonEditarEsPresionado:boolean = false;
  ArrayEmpresaDatos:empresadato[];
  id:number = 1;

  ArrayVacioInfoBasica: infoBasica={
    historia:null,
    mision : null,
    vision : null,    
    empresas_id2: 3
  };
  constructor(
    public readonly swalTargets: SwalPortalTargets,
    private activateRoute:ActivatedRoute,
    private route:Router,
    private informacionbasica:InformacionbasicaService,
    private empresaDatos:EmpresadatosService,
  ) { 
    
    this.informacionbasica.get().subscribe(
        (data:infoBasica[])=>{
          this.ArrayInformacionBasica = data;
          this.ArrayVacioInfoBasica = this.ArrayInformacionBasica.find(
            (m)=>{return m.id == this.id});
        },
        (error)=>{console.log(error);});
    this.empresaDatos.get().subscribe(
      (data:empresadato[])=>{this.ArrayEmpresaDatos=data},
      (error)=>{console.log(error)}
    );
    
    
  }
  ModificarInfoBasi(){
      this.buttonEditarEsPresionado=true;  
    }
  GuardarInfoBasi(){
    this.informacionbasica.modificar(this.ArrayVacioInfoBasica).subscribe(
      (data)=>{ this.MensajeConfirmacion("Datos Modificados");},
      (error)=>{
        console.log(error)}
      );
    this.buttonEditarEsPresionado=false;
  }
  ngOnInit() {
  }
  irAOtros(){
    this.route.navigateByUrl('panelAdmin/edit/otros');
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

}
