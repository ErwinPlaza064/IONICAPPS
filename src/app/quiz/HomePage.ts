import { RedireccionamientService } from '../services/redireccionamient.service';

export class HomePage {
  constructor(private redireccionamiento: RedireccionamientService) { }

  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }
}
