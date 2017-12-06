import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonDetailsModalComponent } from './cartoon-list/cartoon-details-modal/cartoon-details-modal.component';
import { CartoonListComponent } from './cartoon-list/cartoon-list.component';
import { CartoonListService } from './cartoon-list/cartoon-list.service';
import { DateService } from './date.service';
import { MainContentComponent } from './main-content.component';
import { ScheduleDetailsModalComponent } from './schedule-details/schedule-details-modal/schedule-details-modal.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleService } from './schedule/schedule.service';

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

  it('should get date from DateService', () => {
    const mockDate = {formattedDate: '2017/12/1'};
    const dateService = fixture.debugElement.injector.get(DateService);
    spyOn(dateService, 'getDate').and.returnValue(mockDate);

    component.ngOnInit();

    expect(dateService.getDate).toHaveBeenCalled();
    expect(component.date.formattedDate).toBe('2017/12/1');
  });

  it('should return current hour', () => {
    const mockDate = {hour: 12};
    const dateService = fixture.debugElement.injector.get(DateService);
    spyOn(dateService, 'getDate').and.returnValue(mockDate);

    component.ngOnInit();

    expect(component.getCurrentHour()).toBe(12);
  });
});
