import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNextPredictionComponent } from './aside-next-prediction.component';

describe('AsideNextPredictionComponent', () => {
  let component: AsideNextPredictionComponent;
  let fixture: ComponentFixture<AsideNextPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNextPredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideNextPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
