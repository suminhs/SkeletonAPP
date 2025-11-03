import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  user: string = '';
  nombre: string = '';
  apellido: string = '';
  nivel: string = '';
  fechaNacimiento: string = '';
  mostrarCalendario: boolean = false;

  constructor(private alertController: AlertController) {
    const nav = history.state;
    this.user = nav.user || 'Invitado';
    }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivel = '';  
  }

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  cerrarCalendario() {
    this.mostrarCalendario = false;
  }


  async mostrarDatos() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
