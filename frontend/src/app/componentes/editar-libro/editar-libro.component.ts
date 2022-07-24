import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { LibrosService } from 'src/app/servicio/libros.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  ID:any;
  pipe:any;
  formularioLibros:FormGroup;
  currentYear:any;
  fechaSeleccionada:any;
  aniofechaSeleccionada:any;
  numeroanios:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private libroService:LibrosService,
    public formulario:FormBuilder, 
    private ruteador:Router) 
    { 
//Recupero ID de la URL
this.ID=this.activatedRoute.snapshot.paramMap.get('id');

//Envio ID a la API REST para obtener los datos
this.libroService.ObtenerLibro(this.ID).subscribe(
    respuesta=>{    
    this.pipe = new DatePipe('en-US');
    let ChangedFormat = this.pipe.transform(respuesta['fecha_publicacion'] , 'YYYY-MM-dd');
    //Agrega los valores a los campos del formulario
    this.formularioLibros.setValue({
      id:this.ID,
      nombre:respuesta['nombre'],
      descripcion:respuesta['descripcion'],
      autor:respuesta['autor'],
      numero_ejemplares:respuesta['numero_ejemplares'],
      costo:respuesta['costo'],
      fecha_publicacion:ChangedFormat   
    });
  }
);
//Inicializa el formulario
this.formularioLibros=this.formulario.group({
  id:this.ID,
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
    debugger
      this.fechaSeleccionada=this.formularioLibros.get('fecha_publicacion')!.value;
      this.aniofechaSeleccionada=new Date(this.fechaSeleccionada).getFullYear();    
      this.currentYear = new Date();        
      this.numeroanios=this.currentYear.getFullYear() - this.aniofechaSeleccionada;
      console.log(this.numeroanios);
      if(this.numeroanios <=10){   
      this.libroService.EditarLibro(this.formularioLibros.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-libro');
      });
    }else{
      window.alert("El libro tiene más de 10 años de publicación");
    }   
  }
}
