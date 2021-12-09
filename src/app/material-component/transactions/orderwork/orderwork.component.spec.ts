import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderworkComponent } from './orderwork.component';

describe('OrderworkComponent', () => {
  let component: OrderworkComponent;
  let fixture: ComponentFixture<OrderworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
