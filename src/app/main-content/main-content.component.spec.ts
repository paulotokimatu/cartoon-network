import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './main-content.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { CartoonListComponent } from './cartoon-list/cartoon-list.component';
import { ScheduleDetailsModalComponent } from './schedule-details/schedule-details-modal/schedule-details-modal.component';
import { CartoonDetailsModalComponent } from './cartoon-list/cartoon-details-modal/cartoon-details-modal.component';
import { ScheduleService } from './schedule/schedule.service';
import { DateService } from './date.service';
import { CartoonListService } from './cartoon-list/cartoon-list.service';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainContentComponent,
        ScheduleComponent,
        ScheduleDetailsComponent,
        ScheduleDetailsModalComponent,
        CartoonListComponent,
        CartoonDetailsModalComponent,
      ],
      providers: [ CartoonListService, DateService, ScheduleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
