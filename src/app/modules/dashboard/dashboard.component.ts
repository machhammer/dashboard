import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Equity } from '../../models/objects';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  looser = []

  winner: Equity[];

  constructor(private dashboardService: DashboardService) { }



  ngOnInit(): void {
    console.log("load winners")
    this.dashboardService.winner().subscribe((data: Equity[])=> {
      this.winner = data
      console.log(this.winner)
    })
    
    //this.winner = this.dashboardService.winner();
    //this.looser = this.dashboardService.looser();
  }

}
