import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateService } from '../date.service';
import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';

const mockSchedule = {
  '2017/12/2': [
    {
      hour: '00',
      details: [
        {
          startTime: '00:00',
          cartoonId: 'stevenUniverse'
        }
      ]
    }
  ]
};

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent ],
      providers: [ DateService, ScheduleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init and update schedule', () => {
    const scheduleService = fixture.debugElement.injector.get(ScheduleService);
    const dateService = fixture.debugElement.injector.get(DateService);

    spyOn(dateService, 'getDate').and.returnValue({formattedDate: '2017/12/2'});

    spyOn(scheduleService, 'getSchedule').and.callFake((date) => {
      return mockSchedule[date];
    });

    component.ngOnInit();

    expect(component.schedule[0].hour).toBe('00');
  });

  it('should call dateService.getNextDay()', () => {
    const service = fixture.debugElement.injector.get(DateService);
    spyOn(service, 'getNextDay');

    component.onGetNextDay();

    expect(service.getNextDay).toHaveBeenCalled();
  });

  it('should call setScheduleDetails()', () => {
    const service = fixture.debugElement.injector.get(ScheduleService);
    spyOn(service, 'setScheduleDetails');

    component.onSetScheduleDetails(0, 0);

    expect(service.setScheduleDetails).toHaveBeenCalled();
  });

  it('should give the square the color-a if hour % 3 === 0', () => {
    const colorClass = component.squareColor(0);

    expect(colorClass).toBe('hour-square--a');
  });

  it('should give container the color-b if hour % 3 === 1', () => {
    const colorClass = component.squareColor(1);

    expect(colorClass).toBe('hour-square--b');
  });

  it('should give container the color-c if hour % 3 === 2', () => {
    const colorClass = component.squareColor(2);

    expect(colorClass).toBe('hour-square--c');
  });
});
