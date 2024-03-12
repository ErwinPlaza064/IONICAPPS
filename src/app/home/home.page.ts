import { Component } from '@angular/core';
import { RedireccionamientService } from '../services/redireccionamient.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private redireccionamiento: RedireccionamientService) {}

  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }
}