import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerformanceGraphComponent } from './widgets/performance-graph/performance-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NewsComponent } from './widgets/news/news.component';
import { CardComponent } from './widgets/card/card.component';
import { PerformanceTableComponent } from './widgets/performance-table/performance-table.component';
import { IndexTableComponent } from './widgets/index-table/index-table.component';
import { WorldPerformanceMapComponent } from './widgets/world-performance-map/world-performance-map.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PerformanceGraphComponent,
    PerformanceTableComponent,
    NewsComponent,
    CardComponent,
    PerformanceTableComponent,
    IndexTableComponent,
    WorldPerformanceMapComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PerformanceGraphComponent,
    PerformanceTableComponent,
    NewsComponent,
    IndexTableComponent,
    CardComponent,
    WorldPerformanceMapComponent,
    SearchbarComponent
  ]
})
export class SharedModule { }
