import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBuyUpcomingMatchComponent } from './aside-buy-upcoming-match.component';

describe('AsideBuyUpcomingMatchComponent', () => {
  let component: AsideBuyUpcomingMatchComponent;
  let fixture: ComponentFixture<AsideBuyUpcomingMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBuyUpcomingMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideBuyUpcomingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
