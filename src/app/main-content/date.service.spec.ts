import { DateService } from './date.service';

describe('DateService', () => {
  it('should instantiate', () => {
    let service = new DateService();
    
    expect(service).toBeTruthy();
  });

})