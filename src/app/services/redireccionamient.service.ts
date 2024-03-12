import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class RedireccionamientService {
  constructor(private navController: NavController) {}

  navegar(ruta: string) {
    this.navController.navigateRoot(ruta);
  }}