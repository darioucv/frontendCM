import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/crud/empresa.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean;
  componenteSeleccionado:string ="inicio";
  ArrayEmpresa : empresa[];
  rutaLogo;
  constructor(
    private Auth:AuthService,
    private route: Router,
    private Token: TokenService,
    private empresaService:EmpresaService,
  ) { 
    this.rutaLogo=this.empresaService.getRutaImg();
    this.empresaService.get().subscribe(
      (data:empresa[])=>{this.ArrayEmpresa = data},
      (error)=>{alert('Ocurrió un error');}
      );
  }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  logout(event:MouseEvent,nombreComponente:string){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.componenteSeleccionado = nombreComponente;
    this.route.navigateByUrl('/'+nombreComponente);
  }

  NombreComponente(event:MouseEvent,nombreComponente:string){
    event.preventDefault();
    this.componenteSeleccionado = nombreComponente;
    this.route.navigateByUrl('/'+nombreComponente);
  }
  
}
