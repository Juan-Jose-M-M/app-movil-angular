import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importa el controlador de alerta
import { ServiceapiService } from '../service/serviceapi.service';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(
    public alertController: AlertController,
    public Service: ServiceapiService,
    public navCtrl: NavController
  ) { }

  //Funcion para poder contar los caracteres
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} Caracteres Restantes`;
  }
  customCounterFormatterdos(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} Caracteres Restantes`;
  }
  //Declaracion de los campos del formulario
  email: string = ""; // Propiedad para el correo electrónico
  password: string = ""; // Propiedad para la contraseña
  passworddos: string = ""; // Propiedad para la contraseña

  //Funciona asincrona para el inicio de session
  async registrousuario() {
    //Validacion de campos vacios
    if (!this.email || !this.password || !this.passworddos) {
      //Mensaje de alerat si hay camopos vacios
      const alertcamposvacios = await this.alertController.create({
        header: 'Error',
        message: 'No introducir campos vacíos',
        buttons: ['OK']
      });
      //Se manda a llamar a la funcion de la alerta
      await alertcamposvacios.present();
    } else {
      //Mensaje de alerat si hay camopos vacios
      const alertpaswordnocoinciden = await this.alertController.create({
        header: 'Error',
        message: 'Password no coinciden',
        buttons: ['OK']
      });
      if (this.password != this.passworddos) {
        await alertpaswordnocoinciden.present();
      } else {
        // Función para mandar a llamar al servicio de inicio de sesión
        console.log('PARAMETROS->' + this.email + 'PARAMETROS->' + this.password);
        this.Service.registrousuario(this.email, this.password).subscribe(
          async (data: any) => {
            const mensajeDeLaAPI = data.mensaje; // Accede al campo "mensaje" de la respuesta
            const alertinfo = await this.alertController.create({
              header: 'Atención',
              message: mensajeDeLaAPI, // Usa el campo "mensaje" como mensaje en el cuadro de alerta
              buttons: ['OK']
            });
            console.log('Respuesta de la API:', data);
            await alertinfo.present();
          },
          async (error) => {
            console.error('Error al conectar con la API:', error);
          }
        );
      }
    }
  }


  ngOnInit() {
  }

  navegarinicio() {
    this.navCtrl.navigateForward("inicio-sesion");
  }

}
