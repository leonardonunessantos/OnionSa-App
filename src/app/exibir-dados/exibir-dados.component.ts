import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ExibirDadosService } from '../services/exibirDados.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.component.html',
  styleUrls: ['./exibir-dados.component.scss']
})
export class ExibirDadosComponent implements AfterViewInit {
  @ViewChild('salesByRegionChart') salesByRegionChartRef!: ElementRef;
  @ViewChild('salesByProductChart') salesByProductChartRef!: ElementRef;
  orders: any[] = [];

  constructor(private dadosService: ExibirDadosService) { }

  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getPedidos();
  }

  getPedidos(): void {
    this.dadosService.getPedidos()
      .subscribe((data: any[]) => {
        this.orders = data;
        this.createSalesByRegionChart();
        this.createSalesByProductChart();
      });
  }

  createSalesByRegionChart(): void {
    const ordersByRegion: { [key: string]: number } = {};
    this.orders.forEach(order => {
      if (!ordersByRegion[order.region]) {
        ordersByRegion[order.region] = 0;
      }
      ordersByRegion[order.region]++;
    });

    const labels = Object.keys(ordersByRegion);
    const data = Object.values(ordersByRegion);

    this.createPieChart(this.salesByRegionChartRef.nativeElement, 'Vendas por Região', labels, data);
  }

  createSalesByProductChart(): void {
    const ordersByProduct: { [key: string]: number } = {};
    this.orders.forEach(order => {
      if (!ordersByProduct[order.productName]) {
        ordersByProduct[order.productName] = 0;
      }
      ordersByProduct[order.productName]++;
    });

    const labels = Object.keys(ordersByProduct);
    const data = Object.values(ordersByProduct);

    this.createPieChart(this.salesByProductChartRef.nativeElement, 'Vendas por Produto', labels, data);
  }

  createPieChart(canvas: HTMLCanvasElement, title: string, labels: string[], data: number[]): void {
    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title
          }
        }
      }
    });
  }
}
