import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideOnePredictionComponent } from './aside-one-prediction.component';

describe('AsideOnePredictionComponent', () => {
  let component: AsideOnePredictionComponent;
  let fixture: ComponentFixture<AsideOnePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideOnePredictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideOnePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
