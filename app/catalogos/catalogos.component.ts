import { Component, OnInit } from '@angular/core';
import { Catalogo } from './catalogo';

import { CatalogoService } from './catalogo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {
  catalogos:Catalogo[]=[];
  constructor(private catalogoService: CatalogoService, private router: Router) { }

  ngOnInit(): void {

    this.catalogoService.getCatalogo().subscribe(
      catalogos => this.catalogos =catalogos

    );
  }

}
