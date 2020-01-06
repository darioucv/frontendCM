import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciocuerpoComponent } from 'src/app/components/iniciocuerpo/iniciocuerpo.component';
import { ServicioscuerpoComponent } from 'src/app/components/servicioscuerpo/servicioscuerpo.component';
import { ContactocuerpoComponent } from 'src/app/components/contactocuerpo/contactocuerpo.component';

import { ErrorComponent } from 'src/app/components/error/error.component' ;
/* import { LoginComponent } from './components/login/login.component'; */
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
    path:'',
    component:IniciocuerpoComponent,
    canActivate : [BeforeLoginService]
  },
  /* {
    path:'login',
    component:LoginComponent,
    canActivate : [BeforeLoginService]
  }, */
  {
    path:'inicio',
    component:IniciocuerpoComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path:'servicio',
    component:ServicioscuerpoComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path:'contacto',
    component:ContactocuerpoComponent,
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
  },
  {
    path:'panelAdmin/edit/servicio/formulario/:id',
    component:ServicioComponentNew,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/tipoServicio/formulario/:id',
    component:TiposervicioComponentNew,
    canActivate : [AfterLoginService]
  },
  {
    path:'panelAdmin/edit/categoria/formulario/:id',
    component:CategoriaComponentNew,
    canActivate : [AfterLoginService]
  },
  {
    path:'**',
    component:ErrorComponent,
    canActivate : [BeforeLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
