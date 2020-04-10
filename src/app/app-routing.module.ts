import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CatalogComponent } from './modules/catalog/catalog.component';
import { CacheRouteReuseStrategy } from './cache-route-reuse.strategy';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
    path: 'posts',
    component: CatalogComponent

  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [{
              provide: RouteReuseStrategy,
              useClass: CacheRouteReuseStrategy
            }]
})
export class AppRoutingModule { }
