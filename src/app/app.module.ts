import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { ScheduleComponent } from './main-content/schedule/schedule.component';
import { CartoonListComponent } from './main-content/cartoon-list/cartoon-list.component';
import { AdsComponent } from './header/ads/ads.component';
import { ScheduleService } from "./main-content/schedule/schedule.service";
import { ScheduleDetailsComponent } from './main-content/schedule-details/schedule-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    FooterMenuComponent,
    ScheduleComponent,
    CartoonListComponent,
    AdsComponent,
    ScheduleDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ScheduleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
