import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
// Asegúrate de que la ruta sea correcta

const routesInicio: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }, // Ruta por defecto
  { path: 'formulario', component: FormComponent, pathMatch: 'full' }, // Ruta para el formulario
  { path: '**', redirectTo: '/formulario', pathMatch: 'full' }, // Ruta comodín para redirigir a 'formulario'
  { path: 'navbar', component: NavbarComponent  }, // Ruta para el formulario
];

@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
