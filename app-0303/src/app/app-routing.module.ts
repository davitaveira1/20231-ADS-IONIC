import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagprincipal',
    pathMatch: 'full'
  },
  {
    path: 'pagprincipal',
    loadChildren: () => import('./pagprincipal/pagprincipal.module').then( m => m.PagprincipalPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagprincipal/ex01/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pagprincipal/ex01/pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./pagprincipal/ex01/pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
