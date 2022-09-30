import { ServicioMensajeService } from './../servicio-mensaje.service';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.Model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private servicioCliente:ClienteService,
              private servicioMensaje:ServicioMensajeService
    ) { }

  ngOnInit(): void {
    this.clientes = this.servicioCliente.clientes;
  }

  tituloFormulario:string='Ingresar cliente';
  tituloTabla:string='Mostrar clientes';

  cuadroNombre:string='';
  cuadroApellido:string='';
  cuadroDireccion:string='';
  cuadroTelefono:string='';
  cuadroEmail:string='';

  clientes:Cliente[]=[];



  agregarCliente(){
    let miCliete = new Cliente(this.cuadroNombre, this.cuadroApellido, this.cuadroDireccion, this.cuadroTelefono, this.cuadroEmail);
    this.servicioMensaje.mostrarMensaje('nombre: ' + miCliete.nombre + '\napellido: ' + miCliete.apellido + '\ndireccion: ' + miCliete.direccion + '\ntelefono: ' + miCliete.telefono + '\nemail: ' + miCliete.email);
    this.servicioCliente.agregarClienteServicio(miCliete);
  }

}
