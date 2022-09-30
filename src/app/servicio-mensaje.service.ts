import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }

  constructor() { }
}
