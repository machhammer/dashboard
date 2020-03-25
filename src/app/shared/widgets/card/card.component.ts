import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { MatTableDataSource } from '@angular/material/table';
import { Equity } from 'src/app/models/objects';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() data = []
  
  displayedColumns: string[] = ['company', 'country', 'performance', 'sector'];
  dataSource = [];

  equities_datasource = new MatTableDataSource<Equity>(this.dataSource);

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
    this.dataSource = this.data;
  }

}
