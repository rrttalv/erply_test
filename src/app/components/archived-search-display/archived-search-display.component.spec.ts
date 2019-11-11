import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedSearchDisplayComponent } from './archived-search-display.component';

describe('ArchivedSearchDisplayComponent', () => {
  let component: ArchivedSearchDisplayComponent;
  let fixture: ComponentFixture<ArchivedSearchDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedSearchDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedSearchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
