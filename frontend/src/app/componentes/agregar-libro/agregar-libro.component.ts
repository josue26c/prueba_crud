import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { LibrosService } from 'src/app/servicio/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {
  formularioLibros:FormGroup; 
  currentYear:any;
  fechaSeleccionada:any;
  aniofechaSeleccionada:any;
  numeroanios:any;

  constructor( public formulario:FormBuilder, 
    private libroService:LibrosService,
    private ruteador:Router) { 
      this.formularioLibros=this.formulario.group({
        nombre:[''],
        descripcion:[''],
        autor:[''],
        numero_ejemplares:[''],
        costo:[''],
        fecha_publicacion:['']        
      });
    }
    
  ngOnInit(): void {
  }

  enviarDatos():any{     
    this.fechaSeleccionada=this.formularioLibros.get('fecha_publicacion')!.value;
    this.aniofechaSeleccionada=new Date(this.fechaSeleccionada).getFullYear();    
    this.currentYear = new Date();        
    this.numeroanios=this.currentYear.getFullYear() - this.aniofechaSeleccionada;
    console.log(this.numeroanios);
    if(this.numeroanios <=10){           
      this.libroService.AgregarLibro(this.formularioLibros.value).subscribe(()=>{
        this.ruteador.navigateByUrl('/listar-libro');
      });
    }else{
      window.alert("El libro tiene más de 10 años de publicación");
    }    
  }
}
