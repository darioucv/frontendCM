import { Component, OnInit } from '@angular/core';
import { empresadato } from 'src/app/interfaces/empresadatos';
import { dato } from 'src/app/interfaces/dato';
import { EmpresadatosService } from 'src/app/services/crud/empresadatos.service';
import { DatoService } from 'src/app/services/crud/dato.service';
import { Router } from '@angular/router';

import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ArrayEmpresaDatos : empresadato[];
  ArrayDato: dato[];
  public form = {
    email:null,
    password:null
  };
  public error = null;
 
  
  constructor(
    private empresaDatosService: EmpresadatosService,
    private datoService: DatoService,
    private route: Router,
    public readonly swalTargets: SwalPortalTargets,
    private Jarwis:JarwisService,
    private Token:TokenService,
    private Auth: AuthService
  ) 
  { 
   
    this.empresaDatosService.get().subscribe(
      (data:empresadato[])=>{
        this.ArrayEmpresaDatos = data;
      },
      (error)=>{alert('Ocurrió un error');}
    );
    this.datoService.get().subscribe(
      (data:dato[])=>{
        this.ArrayDato = data;
      },
      (error)=>{alert('Ocurrió un error');}
    );

  }
  onSubmit(){
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
      
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.route.navigateByUrl('/panelAdmin');
    
  }

  handleError(error){
    this.error = error.error.error;
  }
  ngOnInit() {
    
  }
  AbrirLogin(){
    Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    }).then((result) => 
    {
      if (result.value) {
        this.form.email = result.value;
        Swal.fire({
          title: 'Enter your password',
          input: 'password',
          inputPlaceholder: 'Enter your password',
        }).then((result) => {
          if (result.value) {
          this.form.password= result.value;
          this.onSubmit();
          }
        })
      }
    })
    
  }
}
