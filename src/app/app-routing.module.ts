import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrativepanelComponent } from './admincomponents/administrativepanel/administrativepanel.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';


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
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
