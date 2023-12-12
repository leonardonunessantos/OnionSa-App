import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadComponent } from './upload/upload.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ExibirDadosComponent } from './exibir-dados/exibir-dados.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadService } from './services/upload.service';
import { AppRoutingModule } from './app-routing.module';
import { ExibirDadosService } from './services/exibirDados.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers: [
    UploadService,
    ExibirDadosService
  ],
  bootstrap: [
    AppComponent
  ] 
})

export class AppModule { }