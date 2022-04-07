import { Component, OnInit } from '@angular/core';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-fcatalogo',
  templateUrl: './fcatalogo.component.html',
  styleUrls: ['./fcatalogo.component.css']
})
export class FcatalogoComponent implements OnInit {

  public catalogos: Catalogo =new Catalogo()

 

  constructor(private catalogoService:CatalogoService , private router:Router, private activateRooute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }
  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
    console.log("El formulario fue enviado y la mascota es: ")
    alert("Enviado");
  }

  cargar():void{
    this.activateRooute.params.subscribe(
      e=>{
        let cod_Catalogo=e['cod_Catalogo'];
        if(cod_Catalogo){
          this.catalogoService.get(cod_Catalogo).subscribe(

            es=> this.catalogos=es
          );

        }
      }
    );

  }
  public create(): void {
    this.catalogoService.create(this.catalogos)
    .subscribe(catalogo =>{
      this.router.navigate(['/catalogos'])
      Swal.fire('C guardado', `EL Catalogo ${catalogo.titulo_Catalogo} se registro con éxito`,'success')

    }

     

    )
  }

 update():void{
  this.catalogoService.updateCliente(this.catalogos).subscribe(
    res =>{this.router.navigate(['/catalogo'])
    Swal.fire('Catalogo modificado',`EL Catalogo ${res.titulo_Catalogo} se modifico con éxito`,'success')
    }
  )

 }

}
