import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  },
  {
    path: 'ex01/inicio',
    loadChildren: () => import('./ex01/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ex01/p1',
    loadChildren: () => import('./ex01/p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'ex01/p2',
    loadChildren: () => import('./ex01/p2/p2.module').then( m => m.P2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
