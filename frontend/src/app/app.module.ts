import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from './header/header.component';
import { MystoreComponent } from './mystore/mystore.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { UsersComponent } from './users/users.component';
import { UsercontComponent } from './usercont/usercont.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { FooterComponent } from './footer/footer.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    HeaderComponent,
    MystoreComponent,
    MyoffersComponent,
    UsersComponent,
    UsercontComponent,
    SidebarComponent,
    TooltipComponent,
    LineChartComponent,
    FooterComponent,
    ColorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
