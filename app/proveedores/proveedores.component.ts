import { Component, OnInit } from '@angular/core';
import { Proveedores } from './proveedores';
import { proveedores } from './proveedores.json';
import { ProveedoresService } from './proveedores.service';



@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

   proveedores: Proveedores[] =[ ];
   proveedores1: Proveedores[] =[ ];
   proveedores2: Proveedores[] =[ ];
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores=this.proveedoresService.getProveedores();
    this.proveedores1=this.proveedoresService.getProveedores1();
    this.proveedores2=this.proveedoresService.getProveedores2();
    
  }

}
