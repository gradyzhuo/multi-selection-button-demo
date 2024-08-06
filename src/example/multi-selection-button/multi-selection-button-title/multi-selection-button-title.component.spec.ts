import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionButtonTitleComponent } from './multi-selection-button-title.component';

describe('MultiSelectionButtonTitleComponent', () => {
  let component: MultiSelectionButtonTitleComponent;
  let fixture: ComponentFixture<MultiSelectionButtonTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectionButtonTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectionButtonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
