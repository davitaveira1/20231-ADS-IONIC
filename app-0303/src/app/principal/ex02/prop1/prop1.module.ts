import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prop1PageRoutingModule } from './prop1-routing.module';

import { Prop1Page } from './prop1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prop1PageRoutingModule
  ],
  declarations: [Prop1Page]
})
export class Prop1PageModule {}
