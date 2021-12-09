import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderworkdetailsComponent } from './orderworkdetails.component';

describe('OrderworkdetailsComponent', () => {
  let component: OrderworkdetailsComponent;
  let fixture: ComponentFixture<OrderworkdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderworkdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderworkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
