import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule
  ],
  exports: [
    UploadComponent
  ],
  providers: [],
  bootstrap: [
    UploadComponent
  ] 

})

export class UploadModule { }