import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedBlogsComponent } from './archived-blogs.component';

describe('ArchivedBlogsComponent', () => {
  let component: ArchivedBlogsComponent;
  let fixture: ComponentFixture<ArchivedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
