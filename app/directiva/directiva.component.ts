import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent  {
  listaCurso: string[]=['*TypeScrpit','JavaScript','Java SE','C#','PHP'];
  listatemasTS: string[]=['*Tales of suspense Nº 39 (1963)','*Civil War Nº 7  (2006)'];
  listatemasJS: string[]=['*Capitán América 1 (1941) ','*La extraña muerte del Capitán América (1969)'];
  listatemasC: string[]=['*El poderoso Thor: Relatos de Asgard','*Thor: Diosa del Trueno'];
  
  habilitar: boolean = true;
  constructor() { }
    setHabilitar():void{ 
      this.habilitar = (this.habilitar== true)? false:true;

    }
  

}
