import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalEx02Prop1PageRoutingModule } from './principal-ex02-prop1-routing.module';

import { PrincipalEx02Prop1Page } from './principal-ex02-prop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalEx02Prop1PageRoutingModule
  ],
  declarations: [PrincipalEx02Prop1Page]
})
export class PrincipalEx02Prop1PageModule {}
