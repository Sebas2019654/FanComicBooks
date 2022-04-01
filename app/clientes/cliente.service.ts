import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint:string ='http://localhost:8073/Persona/read';
  private urlEndPoint1:string ='http://localhost:8073/Persona/create';
  private urlEndPoint2:string ='http://localhost:8073/Persona/persona';
  private urlEndPoint3:string ='http://localhost:8073/Persona/update';
  private urlEndPoint4:string ='http://localhost:8073/Persona/delete';
  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> { 
    //return of(clientes);

    
    //return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(

      map(response=> response as Cliente[] )
    );
  }
  create(cliente: Cliente): Observable<Cliente> { 

    return this.http.post<Cliente>(this.urlEndPoint1,cliente,{headers: this.httpHeaders})
  }

  get(Nick_Name:string){
      return this.http.get<Cliente>(this.urlEndPoint2+"/"+Nick_Name)

  }
  updateCliente(cliente:Cliente){
    return this.http .put<Cliente>(this.urlEndPoint3+"/"+cliente.nickName,cliente)

}
deleteCliente(cliente:Cliente){
  return this.http.delete<Cliente>(this.urlEndPoint4+"/"+cliente.nickName)

}
}
