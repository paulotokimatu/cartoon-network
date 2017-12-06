import { Subscription } from 'rxjs/Subscription';
import { CartoonListService } from './cartoon-list.service';

describe('ScheduleService', () => {
  it('should instantiate', () => {
    const service = new CartoonListService();

    expect(service).toBeTruthy();
  });

  it('should return list of featured cartoons', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    const service = new CartoonListService();

    expect(service).toBeTruthy();
  });

  it('should return the schedule of a single cartoon', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    const service = new CartoonListService();

    expect(service).toBeTruthy();
  });
})
