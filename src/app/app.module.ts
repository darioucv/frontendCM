import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AdministrativepanelComponent } from './admincomponents/administrativepanel/administrativepanel.component';
import { HttpClientModule} from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { InformacionbasicaComponent } from './admincomponents/edit/informacionbasica/informacionbasica.component';
import { ServicioComponent } from './admincomponents/edit/servicio/servicio.component';
import { TiposervicioComponent } from './admincomponents/edit/tiposervicio/tiposervicio.component';
import { CategoriaComponent } from './admincomponents/edit/categoria/categoria.component';
import { OtrosComponent } from './admincomponents/edit/otros/otros.component';
import { CategoriaComponentNew } from './admincomponents/new/categoria/categoria.component';
import { ServicioComponentNew } from './admincomponents/new/servicio/servicio.component';
import { TiposervicioComponentNew } from './admincomponents/new/tiposervicio/tiposervicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdministrativepanelComponent,
    InformacionbasicaComponent,
    ServicioComponent,
    TiposervicioComponent,
    CategoriaComponent,
    OtrosComponent,
    CategoriaComponentNew,
    ServicioComponentNew,
    TiposervicioComponentNew,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JarwisService,TokenService,AuthService, AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
