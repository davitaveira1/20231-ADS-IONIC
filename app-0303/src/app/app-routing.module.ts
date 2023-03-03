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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
