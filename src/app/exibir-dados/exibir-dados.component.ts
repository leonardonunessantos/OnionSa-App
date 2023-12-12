import { Component, OnInit } from '@angular/core';
import { ExibirDadosService } from '../services/exibirDados.service';

@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.component.html',
  styleUrls: ['./exibir-dados.component.scss']
})
export class ExibirDadosComponent {
  orders: any[] = [];

  constructor(private dadosService: ExibirDadosService) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    this.dadosService.getPedidos()
      .subscribe((data: any[]) => {
        this.orders = data;
      });
  }
}