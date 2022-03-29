import { Injectable } from '@angular/core';
import { proveedores} from './proveedores.json';
import { proveedores1} from './proveedores.json';
import { proveedores2} from './proveedores.json';
import { Proveedores } from './proveedores';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  getProveedores():Proveedores[]{ 
    return proveedores
  }
  getProveedores1():Proveedores[]{ 
    return proveedores1
  }
  getProveedores2():Proveedores[]{ 
    return proveedores2
  }
  constructor() { }
}
