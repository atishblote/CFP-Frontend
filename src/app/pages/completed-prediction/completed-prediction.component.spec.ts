import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPredictionComponent } from './completed-prediction.component';

describe('CompletedPredictionComponent', () => {
  let component: CompletedPredictionComponent;
  let fixture: ComponentFixture<CompletedPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedPredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
