import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionButtonComponent } from './multi-selection-menu-button.component';

describe('MultiSelectionMenuButtonComponent', () => {
  let component: MultiSelectionButtonComponent;
  let fixture: ComponentFixture<MultiSelectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
