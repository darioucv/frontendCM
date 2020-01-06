import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciocuerpoComponent } from './components/iniciocuerpo/iniciocuerpo.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioscuerpoComponent } from './components/servicioscuerpo/servicioscuerpo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactocuerpoComponent } from './components/contactocuerpo/contactocuerpo.component';
import { ErrorComponent } from './components/error/error.component';
import { Iniciocuerpo2Component } from './components/iniciocuerpo2/iniciocuerpo2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdministrativepanelComponent,
    InformacionbasicaComponent,
    ServicioComponent,
    TiposervicioComponent,
    CategoriaComponent,
    OtrosComponent,
    CategoriaComponentNew,
    ServicioComponentNew,
    TiposervicioComponentNew,
    FooterComponent,
    InicioComponent,
    IniciocuerpoComponent,
    ServiciosComponent,
    ServicioscuerpoComponent,
    ContactoComponent,
    ContactocuerpoComponent,
    ErrorComponent,
    Iniciocuerpo2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [JarwisService,TokenService,AuthService, AfterLoginService,BeforeLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
