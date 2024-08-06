import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionTagComponent } from './multi-selection-tag.component';

describe('MultiSelectionTagComponent', () => {
  let component: MultiSelectionTagComponent;
  let fixture: ComponentFixture<MultiSelectionTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectionTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectionTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
