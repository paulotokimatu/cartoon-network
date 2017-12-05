import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailsComponent } from './schedule-details.component';
import { ScheduleDetailsModalComponent } from './schedule-details-modal/schedule-details-modal.component';
import { ScheduleService } from '../schedule/schedule.service';

describe('ScheduleDetailsComponent', () => {
  let component: ScheduleDetailsComponent;
  let fixture: ComponentFixture<ScheduleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDetailsComponent, ScheduleDetailsModalComponent ],
      providers: [ ScheduleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
