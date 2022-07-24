import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/servicio/libros.service';
@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit {
  Libros:any;
  
  constructor(private libroService:LibrosService) { }

  ngOnInit(): void {
    this.libroService.ObtenerLibros().subscribe(respuesta=>{
      console.log(respuesta);
      this.Libros=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
    this.libroService.BorrarLibro(id).subscribe((respuesta)=>{
      this.Libros.splice(iControl,1);
    });
    }
  }
}
