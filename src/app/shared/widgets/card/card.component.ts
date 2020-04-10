import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { MatTableDataSource } from '@angular/material/table';
import { Equity } from 'src/app/models/objects';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { SelectionModel } from '@angular/cdk/collections';

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

  @Input() data: string
  
  displayedColumns: string[] = ['select', 'company', 'country', 'sector', 'performance'];
  equities = []
  equities_datasource = new MatTableDataSource<Equity>(this.equities);
  selection = new SelectionModel<Equity>(true, []);

  constructor(private dashboardService: DashboardService) { }

  
  ngOnInit(): void {
    if (this.data=='performance_1_day')
      this.dashboardService.equities_performance(1).subscribe((res: Equity[]) => {
        this.equities_datasource.data = res;
      })
    if (this.data=='performance_n_days')
      this.dashboardService.equities_performance(21).subscribe((res: Equity[]) => {
        this.equities_datasource.data = res;
      })
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.equities_datasource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.equities_datasource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Equity): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.company}`;
  }

  checkboxClicked() {
    this.dashboardService.changeSymbolsinGraph(this.selection.selected)
  }

    


}
