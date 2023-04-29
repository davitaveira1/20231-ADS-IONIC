import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-aluno',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar-aluno',
    loadChildren: () => import('./cadastrar-aluno/cadastrar-aluno.module').then( m => m.CadastrarAlunoPageModule)
  },
  {
    path: 'listar-aluno',
    loadChildren: () => import('./listar-aluno/listar-aluno.module').then( m => m.ListarAlunoPageModule)
  },
  {
    path: 'visualizar-aluno',
    loadChildren: () => import('./visualizar-aluno/visualizar-aluno.module').then( m => m.VisualizarAlunoPageModule)
  },
  {
    path: 'visualizar-aluno/:item',
    loadChildren: () => import('./visualizar-aluno/visualizar-aluno.module').then( m => m.VisualizarAlunoPageModule)
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
