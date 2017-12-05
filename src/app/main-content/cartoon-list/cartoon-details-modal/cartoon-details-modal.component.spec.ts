import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonDetailsModalComponent } from './cartoon-details-modal.component';

describe('CartoonDetailsModalComponent', () => {
  let component: CartoonDetailsModalComponent;
  let fixture: ComponentFixture<CartoonDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonDetailsModalComponent);
    component = fixture.componentInstance;
    component.selectedCartoon = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit signal to close', () => {
    component.changeCartoonDetailsModal.subscribe(response => {
       expect(response).toEqual(false);
    });

    component.onClose();
  });
});
