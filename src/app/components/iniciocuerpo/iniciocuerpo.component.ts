import { Component, OnInit } from '@angular/core';
import { infoBasica } from 'src/app/interfaces/informacionbasica';
import { empresadato } from 'src/app/interfaces/empresadatos';
import { InformacionbasicaService } from 'src/app/services/crud/informacionbasica.service';
import { EmpresadatosService } from 'src/app/services/crud/empresadatos.service';

@Component({
  selector: 'app-iniciocuerpo',
  templateUrl: './iniciocuerpo.component.html',
  styleUrls: ['./iniciocuerpo.component.css']
})
export class IniciocuerpoComponent implements OnInit {
  ArrayInformacionBasica:infoBasica[];
  ArrayEmpresaDatos:empresadato[];
  constructor(
    private infobasicaService:InformacionbasicaService,
    private empresasDatosServices:EmpresadatosService,
  ) 
  { 
    this.infobasicaService.get().subscribe(
      (data:infoBasica[])=>{
        this.ArrayInformacionBasica = data;
      },
      (error)=>{alert("ocurrió un error");}
    );
    
    this.empresasDatosServices.get().subscribe(
      (data:empresadato[])=>{
        this.ArrayEmpresaDatos = data;
      },
      (error)=>{
        alert("ocurrió un error");
      }
    );
  }

  ngOnInit() {
  }

}
