import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalEx02Prop1Page } from './principal-ex02-prop1.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalEx02Prop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalEx02Prop1PageRoutingModule {}
