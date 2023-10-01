import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
//Declaracion de la clase
export class ServiceapiService {
  //Declaracion de la url de la api
  private apiUrl = 'http://localhost/api_php/';
  //Mandamos a llamar al modulo de clinet
  constructor(private http: HttpClient) { }

  //Funcion para comunicarce con la api de PHP
  iniciarSesion(email: string, password: string) {
    const body = { correo: email, password: password };
    return this.http.post(this.apiUrl + 'iniciarSesion.php', body);
  }

  /*registrousuario(email: string, password: string) {
    const body = { correo: email, password: password };
    console.log("LLAMADO A LA FUNCION DE REGISTRO DE USUARIO" + email + "->" + password);
    return this.http.post(this.apiUrl + 'registrousuario.php', body);
  }*/


  registrousuario(email: string, password: string) {
    const body = { email: email, password: password };
    console.log("LLAMADO A LA FUNCION DE REGISTRO DE USUARIO" + email + "->" + password);
    return this.http.post(this.apiUrl + 'registrousuario.php', body);
  }

}
