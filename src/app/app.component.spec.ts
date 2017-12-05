import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { ScheduleComponent } from './main-content/schedule/schedule.component';
import { CartoonListComponent } from './main-content/cartoon-list/cartoon-list.component';
import { AdsComponent } from './header/ads/ads.component';
import { ScheduleDetailsComponent } from './main-content/schedule-details/schedule-details.component';
import { CartoonDetailsModalComponent } from './main-content/cartoon-list/cartoon-details-modal/cartoon-details-modal.component';
import { ScheduleDetailsModalComponent } from './main-content/schedule-details/schedule-details-modal/schedule-details-modal.component';
import { ScheduleService } from './main-content/schedule/schedule.service';
import { CartoonListService } from './main-content/cartoon-list/cartoon-list.service';
import { DateService } from './main-content/date.service';
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
