import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  orders: any[] = [];
  isLoading: boolean = false;
  constructor(private uploadService: UploadService, private router: Router) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File) {
    this.isLoading = true;
    this.uploadService.uploadFile(file).subscribe({
      next: (success) => {
        if (success) {
          console.log('Upload bem-sucedido! Redirecionando...');
          this.router.navigate(['/exibir-dados']);
        } else {
          console.error('Erro ao fazer o upload');
          this.router.navigate(['/upload'], { state: { data: 'Ocorreu um erro ao fazer o upload' } });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao fazer o upload:', error);
        alert('Ocorreu um erro ao fazer o upload. Verifique o arquivo enviado e tente novamente!');
        this.router.navigate(['/upload']);
        this.isLoading = false;
      }
    });
  }
}
