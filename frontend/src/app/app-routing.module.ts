import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './componentes/agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { ListarLibroComponent } from './componentes/listar-libro/listar-libro.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'agregar-libro'},
  {path:'agregar-libro',component:AgregarLibroComponent},
  {path:'listar-libro',component:ListarLibroComponent},
  {path:'editar-libro/:id',component:EditarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
