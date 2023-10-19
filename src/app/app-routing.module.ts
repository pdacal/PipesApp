import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// carga perezosa, cargamos asi o producst. module, que dentro del vai importado o products-routing.module onde estan as rutas declaradas das paxinas
const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./products/products.module').then( m => m.ProductsModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
