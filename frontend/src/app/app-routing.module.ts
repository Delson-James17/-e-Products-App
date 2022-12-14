import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { MystoreComponent } from './mystore/mystore.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'statistic', component: StatisticsComponent},
  {path: 'myoffers', component: MyoffersComponent},
  {path: 'mystore', component:MystoreComponent },
  {path: 'users', component:UsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
