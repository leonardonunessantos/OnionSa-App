import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly uploadUrl = 'https://localhost:7111/api/orders'; 

  constructor(private http: HttpClient) { }

  uploadFile(excelFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', excelFile);
    return this.http.post<any>(this.uploadUrl, formData);
  }
}
