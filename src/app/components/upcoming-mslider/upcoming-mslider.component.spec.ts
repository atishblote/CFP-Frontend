import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMSliderComponent } from './upcoming-mslider.component';

describe('UpcomingMSliderComponent', () => {
  let component: UpcomingMSliderComponent;
  let fixture: ComponentFixture<UpcomingMSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
