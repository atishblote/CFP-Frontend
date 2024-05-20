import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPlanAllComponent } from './buy-plan-all.component';

describe('BuyPlanAllComponent', () => {
  let component: BuyPlanAllComponent;
  let fixture: ComponentFixture<BuyPlanAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPlanAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPlanAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
