declare var require: any;
import proj4 from 'proj4';
declare global {
  interface Window { proj4: any; }
}
window.proj4 = proj4;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import MapModule from 'highcharts/modules/map';
import { Observable, forkJoin } from 'rxjs';
MapModule(Highcharts);

import { DashboardService } from 'src/app/modules/dashboard.service';

import { Country } from 'src/app/models/objects';

const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');



@Component({
  selector: 'app-world-performance-map',
  templateUrl: './world-performance-map.component.html',
  styleUrls: ['./world-performance-map.component.scss']
})
export class WorldPerformanceMapComponent implements OnInit {

  
  Highcharts = Highcharts;
  
  country_performance: any[] = []
  

  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {    
    this.dashboardService.country_performance().subscribe((res: Country[]) => {
      for(var i = 0;i<res.length;i++) { 
        let data_object = [res[i].code, res[i].performance]
        this.country_performance.push(data_object) 
     }
      this.createChart()
    })
      
  }


  createChart() {
      Highcharts.mapChart('world_container', {
      
        chart: {
          map: mapWorld
        },
        title: {
          text: 'Highmaps basic demo'
        },
        
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        legend: {
          enabled: false
        },
        colorAxis: {
          dataClasses: [{
            to: 3
            }, {
                from: 3,
                to: 10
            }, {
                from: 10,
                to: 30
            }, {
                from: 30,
                to: 100
            }, {
                from: 100,
                to: 300
            }, {
                from: 300,
                to: 1000
            }, {
                from: 1000
            }]
            },
        series: [{
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: false,
            format: '{point.name}'
          },
          allAreas: false,
          data: this.country_performance
        } as Highcharts.SeriesMapOptions]

      })
  }
}