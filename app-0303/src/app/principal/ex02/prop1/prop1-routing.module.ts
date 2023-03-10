import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prop1Page } from './prop1.page';

const routes: Routes = [
  {
    path: '',
    component: Prop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prop1PageRoutingModule {}
