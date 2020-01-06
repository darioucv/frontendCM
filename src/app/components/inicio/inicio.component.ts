import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/crud/empresa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ArrayEmpresa: empresa[];
 

  constructor(
    private route:Router,
    private empresaService:EmpresaService,
  ) 
  { 
    this.empresaService.get().subscribe(
      (data:empresa[])=>{
          this.ArrayEmpresa = data;
      },
      (error)=>{
          alert("Ocurrió un error");
      });
  }

  ngOnInit() {
  }

}
