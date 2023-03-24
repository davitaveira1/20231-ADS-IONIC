import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-produtos',
    pathMatch: 'full'
  },
  {
    path: 'listar-produtos',
    loadChildren: () => import('./listar-produtos/listar-produtos.module').then( m => m.ListarProdutosPageModule)
  },
  {
    path: 'adicionar-produto',
    loadChildren: () => import('./adicionar-produto/adicionar-produto.module').then( m => m.AdicionarProdutoPageModule)
  },
  {
    path: 'visualizar-produto',
    loadChildren: () => import('./visualizar-produto/visualizar-produto.module').then( m => m.VisualizarProdutoPageModule)
  },
  {
    path: 'visualizar-produto/:item',
    loadChildren: () => import('./visualizar-produto/visualizar-produto.module').then( m => m.VisualizarProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
