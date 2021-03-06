import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './header/ads/ads.component';
import { HeaderComponent } from './header/header.component';
import { CartoonDetailsModalComponent } from './main-content/cartoon-list/cartoon-details-modal/cartoon-details-modal.component';
import { CartoonListComponent } from './main-content/cartoon-list/cartoon-list.component';
import { CartoonListService } from './main-content/cartoon-list/cartoon-list.service';
import { DateService } from './main-content/date.service';
import { MainContentComponent } from './main-content/main-content.component';
import { ScheduleDetailsModalComponent } from './main-content/schedule-details/schedule-details-modal/schedule-details-modal.component';
import { ScheduleDetailsComponent } from './main-content/schedule-details/schedule-details.component';
import { ScheduleComponent } from './main-content/schedule/schedule.component';
import { ScheduleService } from './main-content/schedule/schedule.service';

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
    CartoonListService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
