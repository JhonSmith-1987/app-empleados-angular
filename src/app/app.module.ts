import { ClienteService } from './cliente.service';
import { ProductoService } from './producto.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ServicioMensajeService } from './servicio-mensaje.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductoService, ClienteService, ServicioMensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
