import { Component, OnInit } from '@angular/core';
import { Equity } from '../../models/objects';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  performance_1_day = "performance_1_day"
  performance_n_days = "performance_n_days"
  

  selectedSymbols = []

  constructor() { }

  ngOnInit(): void {

  }

}
