import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import StockModule from 'highcharts/modules/map'
import { Observable, forkJoin } from 'rxjs';


StockModule(Highcharts)
  

import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-widget-performance-graph',
  templateUrl: './performance-graph.component.html',
  styleUrls: ['./performance-graph.component.scss']
})
export class PerformanceGraphComponent implements OnInit {

  symbols = ['AAPL', 'BMW_DE', 'BIMBOA_MX', 'IFC_TO']
  data = []

  Highcharts = Highcharts;
  seriesOptions = []
  
  seriesCounter = 0;

  symbolsInGraph = [];

  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {    
    this.dashboardService.currentSymbols.subscribe((symbols:any) => { 
      this.symbolsInGraph = symbols;
      this.symbols = this.symbolsInGraph
    
      for (var i=0; i<this.symbols.length; i++) {
        this.data[i] = this.dashboardService.equity_performance(this.symbols[i])
      }
      forkJoin(this.data).subscribe(results => { 
        for (var i=0; i<this.symbols.length; i++) {
          this.seriesOptions[i] = {
          name: this.symbols[i],
          type: 'area',
          data: results[i],
          fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
          }
        }
        this.createChart()
      })
      
      }
      )

    

  }


  createChart() {
    Highcharts.stockChart('container', {
      rangeSelector: {
        selected: 1
      },
      series: this.seriesOptions
    });
  }


}
