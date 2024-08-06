import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionMenuOptionComponent } from './multi-selection-menu-option.component';

describe('MultiSelectionMenuOptionComponent', () => {
  let component: MultiSelectionMenuOptionComponent;
  let fixture: ComponentFixture<MultiSelectionMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectionMenuOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectionMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
