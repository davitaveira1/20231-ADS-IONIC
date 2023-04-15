import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomeUserPageRoutingModule } from './nome-user-routing.module';

import { NomeUserPage } from './nome-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomeUserPageRoutingModule
  ],
  declarations: [NomeUserPage]
})
export class NomeUserPageModule {}
