import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component'; 
import { ExibirDadosComponent } from './exibir-dados/exibir-dados.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { 
      path: '', //component: UploadComponent 
      loadChildren: () => import('./upload/upload.config').then(u => u.UploadModule)
    },
    { 
      path: 'exibir-dados', //component: ExibirDadosComponent 
      loadChildren: () => import('./exibir-dados/exibir-dados.config').then(m => m.ExibirDadosdModule)
    }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}