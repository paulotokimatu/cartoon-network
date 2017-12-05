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
});
