import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnInit {

  searchValue = ""

  countries: string = ""
  sectors: string = ""

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.countries().subscribe((res: string) => {
      this.countries = res
    })
    this.dashboardService.sectors().subscribe((res: string) => {
      this.sectors = res
    })
  }


  onSearch(event) {
    
  }
}
