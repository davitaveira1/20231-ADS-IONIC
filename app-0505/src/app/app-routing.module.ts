import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adicionar-produtos',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
