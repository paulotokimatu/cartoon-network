import { Subscription } from 'rxjs/Subscription';

import { ParsedDate } from '../_models/parsed-date.model';
import { DateService } from './date.service';

describe('DateService', () => {
  it('should instantiate', () => {
    const service = new DateService();

    expect(service).toBeTruthy();
  });

  it('should return a date in the proper format', () => {
    const service = new DateService();

    // 2017/Dec/04 - 11AM
    const mockDate = new Date(2017, 11, 4, 11);
    service.currentDate = mockDate;

    const currentHour = service.getDate();

    expect(currentHour.year).toBe(2017);
    expect(currentHour.month).toBe(12);
    expect(currentHour.day).toBe(4);
    expect(currentHour.dayWeek).toBe('Segunda');
    expect(currentHour.hour).toBe(11);
    expect(currentHour.formattedDate).toBe('2017/12/4');
  });

  it('should add a day when calling getNextDay()', () => {
    const service = new DateService();

    // 2017/Dec/04 - 11AM
    const mockDate = new Date(2017, 11, 4, 11);
    service.currentDate = mockDate;

    service.getNextDay();

    const currentHour = service.getDate();

    expect(currentHour.year).toBe(2017);
    expect(currentHour.month).toBe(12);
    expect(currentHour.day).toBe(5);
    expect(currentHour.dayWeek).toBe('Terça');
    expect(currentHour.hour).toBe(11);
    expect(currentHour.formattedDate).toBe('2017/12/5');
  });

  it('should add a day when calling getNextDay() and handle turn of month/year', () => {
    const service = new DateService();

    // 2017/Dec/31 - 11AM
    const mockDate = new Date(2017, 11, 31, 11);
    service.currentDate = mockDate;

    service.getNextDay();

    const currentHour = service.getDate();

    expect(currentHour.year).toBe(2018);
    expect(currentHour.month).toBe(1);
    expect(currentHour.day).toBe(1);
    expect(currentHour.dayWeek).toBe('Segunda');
    expect(currentHour.hour).toBe(11);
    expect(currentHour.formattedDate).toBe('2018/1/1');
  });

  it('should send new date to subscribers when changed', () => {
    const service = new DateService();
    let dateSub: Subscription;
    dateSub = service.currentDateChanged.subscribe((newDate: ParsedDate) => {
      expect(newDate.formattedDate).toBe('2017/12/5');
    })

    // 2017/Dec/4 - 11AM
    const mockDate = new Date(2017, 11, 4, 11);
    service.currentDate = mockDate;

    service.getNextDay();
  });
})
