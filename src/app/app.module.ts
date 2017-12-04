import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

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
import { DateService } from './main-content/date.service';
import { CartoonDetailsModalComponent } from './main-content/cartoon-list/cartoon-details-modal/cartoon-details-modal.component';
import { ScheduleDetailsModalComponent } from './main-content/schedule-details/schedule-details-modal/schedule-details-modal.component';

registerLocaleData(localePt);

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
    CartoonDetailsModalComponent,
    ScheduleDetailsModalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ScheduleService,
    DateService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
