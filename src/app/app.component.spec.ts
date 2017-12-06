import { async, TestBed } from '@angular/core/testing';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [
        DateService,
        CartoonListService,
        ScheduleService,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
