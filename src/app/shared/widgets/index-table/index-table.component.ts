import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { Index } from 'src/app/models/objects';


@Component({
  selector: 'app-index-table',
  templateUrl: './index-table.component.html',
  styleUrls: ['./index-table.component.scss']
})

export class IndexTableComponent implements OnInit {


  displayedColumns: string[] = ['country', 'index'];
  indices = []
  datasource = new MatTableDataSource<Index>(this.indices);

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    console.log("on init")
    this.dashboardService.indices().subscribe((res: Index[]) => {
      console.log("load index")
      this.datasource.data = res;
  })
  }

}
