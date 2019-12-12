import { Component, OnInit } from '@angular/core'
import { infoBasica } from '../../../interfaces/informacionbasica';
import { InformacionbasicaService } from '../../../services/crud/informacionbasica.service';
import { empresadato } from 'src/app/interfaces/empresadatos';
import { EmpresadatosService } from 'src/app/services/crud/empresadatos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-informacionbasica',
  templateUrl: './informacionbasica.component.html',
  styleUrls: ['./informacionbasica.component.css']
})
export class InformacionbasicaComponent implements OnInit {

  ArrayInformacionBasica: infoBasica[];
  buttonEditarEsPresionado:boolean = false;
  ArrayEmpresaDatos:empresadato[];
  id:number = 3;

  ArrayVacioInfoBasica: infoBasica={
    historia:null,
    mision : null,
    vision : null,    
    empresas_id2: 3
  };
  constructor(
    private informacionbasica:InformacionbasicaService,
    private empresaDatos:EmpresadatosService,
    private route:Router,
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
      (error)=>{alert('Ocurrió un error'+error);}
    );
    
    
  }
  ModificarInfoBasi(){
      this.buttonEditarEsPresionado=true;  
    }
  GuardarInfoBasi(){
    this.informacionbasica.modificar(this.ArrayVacioInfoBasica).subscribe(
      (data)=>{},
      (error)=>{console.log(error);
        alert('Ocurrió un error');}
    );
    this.buttonEditarEsPresionado=false;
  }
  ngOnInit() {
  }
  irAOtros(){
    this.route.navigateByUrl('panelAdmin/edit/otros');
  }

}
