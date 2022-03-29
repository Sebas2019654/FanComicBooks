import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] =[ ];
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes =clientes

    );
  }
  Delete(cliente:Cliente){

    this.clienteService.deleteCliente(cliente)
    .subscribe(data => {
      this.clientes =this.clientes.filter(c => c!==cliente);
      Swal.fire('Cliente Eliminado', `Cliente ${cliente.Nombre} se elimino con exito`,'success')

   })
    
  };

}
