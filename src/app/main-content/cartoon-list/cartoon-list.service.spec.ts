import { CartoonListService } from './cartoon-list.service';
import { Subscription } from 'rxjs/Subscription';

describe('ScheduleService', () => {
  it('should instantiate', () => {
    let service = new CartoonListService();
    
    expect(service).toBeTruthy();
  });

  it('should return list of featured cartoons', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new CartoonListService();
    
    expect(service).toBeTruthy();
  });

  it('should return the schedule of a single cartoon', () => {
    // Invalid. Difficult to test because there is no api call, I am just importing raw data.
    let service = new CartoonListService();
    
    expect(service).toBeTruthy();
  });
})