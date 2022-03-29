import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'Books';
  nombre: string='Sebastian Cabrera';
  curso: string='M4A';
  instituto: string='Tecnologico del Azuay';
  constructor() { }

  ngOnInit(): void {
  }

}
