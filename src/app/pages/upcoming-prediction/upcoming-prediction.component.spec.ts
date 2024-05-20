import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPredictionComponent } from './upcoming-prediction.component';

describe('UpcomingPredictionComponent', () => {
  let component: UpcomingPredictionComponent;
  let fixture: ComponentFixture<UpcomingPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingPredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
