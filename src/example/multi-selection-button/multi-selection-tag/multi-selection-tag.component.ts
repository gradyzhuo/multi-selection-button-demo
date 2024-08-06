import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface MultiSelectionTagModel{
  id: string
  display: string
}

@Component({
  selector: 'multi-selection-tag',
  standalone: true,
  imports: [],
  templateUrl: './multi-selection-tag.component.html',
  styleUrl: './multi-selection-tag.component.scss'
})
export class MultiSelectionTagComponent {
  @Input()
  id: string = ""

  @Input()
  title: string = ""

  @Output()
  deletedButtonClicked$ = new EventEmitter<string>()
}
