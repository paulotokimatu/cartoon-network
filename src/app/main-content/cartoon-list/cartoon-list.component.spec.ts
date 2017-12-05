import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonListComponent } from './cartoon-list.component';
import { CartoonDetailsModalComponent } from './cartoon-details-modal/cartoon-details-modal.component';
import { CartoonListService } from './cartoon-list.service';

describe('CartoonListComponent', () => {
  let component: CartoonListComponent;
  let fixture: ComponentFixture<CartoonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonListComponent, CartoonDetailsModalComponent ],
      providers: [ CartoonListService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get details of the schedule of a cartoon', () => {
    let service = new CartoonListService();
    spyOn(service, 'getOneCartoonSchedule').and.returnValue({titlePt: 'Apenas Um Show'});
    
    component.onOpenCartoonDetailsModal('regularShow');
    expect(component.selectedCartoon.titlePt).toBe('Apenas Um Show');
  });

  it('should not allow startIndex to go under zero', () => {
    let mockCartoonsFeatured = [
      'regularShow',
      'jorelsBrother',
      'thePowerpuffGirls',
      'tomAndJerry',
      'dragonBall',
      'scoobyDoo',
    ];

    component.featuredCartoons = mockCartoonsFeatured;
    
    component.onChangeVisibleCartoons(-1);
    component.onChangeVisibleCartoons(-1);
    component.onChangeVisibleCartoons(-1);

    expect(component.startIndex).toBe(0);
  });

  it('should not allow startIndex to be larger than list length - maxVisibleFeaturedCartoons', () => {
    let mockCartoonsFeatured = [
      'regularShow',
      'jorelsBrother',
      'thePowerpuffGirls',
      'tomAndJerry',
      'dragonBall',
      'scoobyDoo',
    ];

    component.featuredCartoons = mockCartoonsFeatured;

    component.onChangeVisibleCartoons(1);
    component.onChangeVisibleCartoons(1);
    component.onChangeVisibleCartoons(1);

    expect(component.startIndex).toBe(1);
  });

  it('should not change startIndex if list length < maxVisibleFeaturedCartoons', () => {
    let mockCartoonsFeatured = [
      'regularShow',
      'jorelsBrother',
      'thePowerpuffGirls',
      'tomAndJerry',
    ];

    component.featuredCartoons = mockCartoonsFeatured;

    component.onChangeVisibleCartoons(-1);
    component.onChangeVisibleCartoons(-1);
    expect(component.startIndex).toBe(0);
    
    component.onChangeVisibleCartoons(1);
    expect(component.startIndex).toBe(0);
  });
});
