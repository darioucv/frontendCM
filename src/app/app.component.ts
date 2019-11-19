import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectcm';
  public loggedIn:boolean;

  constructor(
    private Auth:AuthService,
    private route: Router,
    private Token: TokenService
  ) { }
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}
