import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path:'servicio', component:ServiciosComponent},
  {path:'form_info', component:FormInfoComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
