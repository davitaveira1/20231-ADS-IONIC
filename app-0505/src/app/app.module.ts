import { ServicoBdService } from './services/servico-bd.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import { AutenticacaoService } from './services/autenticacao.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [AutenticacaoService, NativeStorage,ServicoBdService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
