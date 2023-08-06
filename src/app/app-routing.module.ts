import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsterPreviewComponent } from '../app/gridster-preview/gridster-preview.component';
import { GridComponent } from '../app/grid/grid.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

const routes: Routes = [
  {path:"gridster",component:GridComponent },
  {path:"preview",component:GridsterPreviewComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
