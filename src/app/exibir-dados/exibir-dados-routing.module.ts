import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExibirDadosComponent } from './exibir-dados.component';

const routes: Routes = [
    {
        path: '',
        component: ExibirDadosComponent
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExibirDadosRoutingModule {}