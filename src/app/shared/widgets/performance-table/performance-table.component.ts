import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { Equity } from 'src/app/models/objects';


@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.scss']
})
export class PerformanceTableComponent implements OnInit {

  displayedColumns: string[] = ['company', 'country', 'sector', 'index', 'current_price', 'performance'];
  equities = []
  
  equities_datasource = new MatTableDataSource<Equity>(this.equities);


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.equities().subscribe((res: Equity[]) => {
        this.equities_datasource.data = res;
    })
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }

}
