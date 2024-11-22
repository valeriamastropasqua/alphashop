import { AuthappService } from './../../services/authapp.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {}

  userId: string = ""; // Cambiato da String a string
  password: string = ""; // Cambiato da String a string

  autenticato: boolean = true;
  consentito: boolean = false;
  errMsg: string = "Spiacente, la userId e/o la password sono errati!"; // Cambiato da String a string
  completo: string = "Login effettuato con successo!"; // Cambiato da String a string

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userId e la password";

  constructor(private route: Router, private BasicAuth: AuthappService) {}

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
