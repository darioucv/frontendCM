import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrativepanelComponent } from './admincomponents/administrativepanel/administrativepanel.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { CategoriaComponent } from './admincomponents/edit/categoria/categoria.component';
import { InformacionbasicaComponent } from './admincomponents/edit/informacionbasica/informacionbasica.component';
import { OtrosComponent } from './admincomponents/edit/otros/otros.component';
import { ServicioComponent } from './admincomponents/edit/servicio/servicio.component';
import { TiposervicioComponent } from './admincomponents/edit/tiposervicio/tiposervicio.component';

import { CategoriaComponentNew } from './admincomponents/new/categoria/categoria.component';
import { ServicioComponentNew } from './admincomponents/new/servicio/servicio.component';
import { TiposervicioComponentNew } from './admincomponents/new/tiposervicio/tiposervicio.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path:'panelAdmin',
    component:AdministrativepanelComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/categoria',
    component:CategoriaComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/informacionbasica',
    component:InformacionbasicaComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/otros',
    component:OtrosComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/servicio',
    component:ServicioComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/tiposServicio',
    component:TiposervicioComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/new/categoria',
    component:CategoriaComponentNew,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/new/servicio',
    component:ServicioComponentNew,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/new/tipoServicio',
    component:TiposervicioComponentNew,
    canActivate : [AfterLoginService]
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
