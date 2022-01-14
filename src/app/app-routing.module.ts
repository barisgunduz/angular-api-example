import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'locations', component: LocationsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
