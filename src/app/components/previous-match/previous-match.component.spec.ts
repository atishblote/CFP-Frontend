import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousMatchComponent } from './previous-match.component';

describe('PreviousMatchComponent', () => {
  let component: PreviousMatchComponent;
  let fixture: ComponentFixture<PreviousMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
