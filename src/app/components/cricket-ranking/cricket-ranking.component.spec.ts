import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketRankingComponent } from './cricket-ranking.component';

describe('CricketRankingComponent', () => {
  let component: CricketRankingComponent;
  let fixture: ComponentFixture<CricketRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
