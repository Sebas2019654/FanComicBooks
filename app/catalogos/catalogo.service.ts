import { Injectable } from '@angular/core';

import { Catalogo} from './catalogo';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private urlEndPoint:string ='http://localhost:8073/catalogo/read';
  private urlEndPoint1:string ='http://localhost:8073/catalogo/create';
  private urlEndPoint2:string ='http://localhost:8073/catalogo/catalogo';
  private urlEndPoint3:string ='http://localhost:8073/catalogo/update';
  private urlEndPoint4:string ='http://localhost:8073/catalogo/delete'
  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getCatalogo(): Observable<Catalogo[]> { 
    //return of(catalogos);

    
    //return this.http.get<Catalogo[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(

      map(response=> response as Catalogo[] )
    );
  }
  create(catalogo: Catalogo): Observable<Catalogo> { 

    return this.http.post<Catalogo>(this.urlEndPoint1,catalogo,{headers: this.httpHeaders})
  }

  get(Codigo:number){
      return this.http.get<Catalogo>(this.urlEndPoint2+"/"+Codigo)

  }
  updateCliente(catalogo:Catalogo){
    return this.http .put<Catalogo>(this.urlEndPoint3+"/"+catalogo.cod_Catalogo,catalogo)

}
deleteCliente(catalogo:Catalogo){
  return this.http.delete<Catalogo>(this.urlEndPoint4+"/"+catalogo.cod_Catalogo)

}
}
