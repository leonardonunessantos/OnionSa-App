import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibirDadosComponent } from './exibir-dados.component';
import { ExibirDadosRoutingModule } from './exibir-dados-routing.module';

@NgModule({
  declarations: [
    ExibirDadosComponent
  ],
  imports: [
    CommonModule,
    ExibirDadosRoutingModule
  ],
  exports: [
    ExibirDadosComponent
  ],
  providers: [],
  bootstrap: [
    ExibirDadosComponent
  ] 

})

export class ExibirDadosdModule { }