// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import {CommonModule} from "@angular/common";

@NgModule({


  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
