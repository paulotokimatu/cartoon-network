import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonDetailsComponent } from './cartoon-details-modal.component';

describe('CartoonDetailsComponent', () => {
  let component: CartoonDetailsComponent;
  let fixture: ComponentFixture<CartoonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
