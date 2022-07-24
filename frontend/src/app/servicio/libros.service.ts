import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  API: string='http://localhost:8080/';

  constructor(private clienteHttp:HttpClient) { }

  AgregarLibro(datosLibro:any):Observable<any>{
    console.log(datosLibro);
    return this.clienteHttp.post(this.API+"libro",datosLibro);
  }

  EditarLibro(datosLibro:any):Observable<any>{    
    return this.clienteHttp.post(this.API+"libro",datosLibro);
  }

  ObtenerLibros(){
    return this.clienteHttp.get(this.API+"libro");
  }
  
  ObtenerLibro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"libro/"+id);
  }

  BorrarLibro(id:any):Observable<any>{
    return this.clienteHttp.delete(this.API+"libro/"+id);
  }
}
