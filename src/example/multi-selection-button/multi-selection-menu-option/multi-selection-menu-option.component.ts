import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'multi-selection-menu-option',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './multi-selection-menu-option.component.html',
  styleUrl: './multi-selection-menu-option.component.scss'
})
export class MultiSelectionMenuOptionComponent {
  @Input()
  id: string = ""

  @Input()
  title: string = ""

  @Input()
  checked: boolean = false

  @Output()
  optionChecked$ = new EventEmitter<string>()

  constructor(){
    this.optionChecked$.subscribe((id)=>{
      this.checked = !this.checked
    })
  }
}
