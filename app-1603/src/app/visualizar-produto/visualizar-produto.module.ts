import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarProdutoPageRoutingModule } from './visualizar-produto-routing.module';

import { VisualizarProdutoPage } from './visualizar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarProdutoPageRoutingModule
  ],
  declarations: [VisualizarProdutoPage]
})
export class VisualizarProdutoPageModule {}
