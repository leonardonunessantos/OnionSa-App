import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExibirDadosService {
  private apiUrl = 'https://localhost:7111/api/orders';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<any[]> {
    this.http.get<any[]>(this.apiUrl)
      .subscribe((data: any[]) => {
        console.log(data);
      }
    );
    return this.http.get<any[]>(this.apiUrl)
  }
}
