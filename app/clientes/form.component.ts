import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente =new Cliente()
  public titulo:string="Formulario Cliente"
  constructor(private clienteService:ClienteService, private router:Router, private activateRooute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activateRooute.params.subscribe(
      e=>{
        let id=e['nickName'];
        if(id){
          this.clienteService.getClienteId(id).subscribe(

            es=> this.cliente=es
          );

        }
      }
    );

  }
  public create(): void {
    this.clienteService.create(this.cliente)
    .subscribe(cliente =>{
      this.router.navigate(['/clientes'])
      Swal.fire('Cliente guardado', `Cliente ${cliente.nombre} se registro con éxito`,'success')

    }

     

    )
  }

 update():void{
  this.clienteService.updateCliente(this.cliente).subscribe(
    res =>{this.router.navigate(['/clientes'])
    Swal.fire('Cliente modificado',`Cliente ${res.nombre} se modifico con éxito`,'success')
    }
  )

 }

}
