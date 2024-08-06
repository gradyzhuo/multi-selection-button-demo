import { Component } from '@angular/core';
import { MultiSelectionButtonComponent, MultiSelectionButtonModel, MultiSelectionResult } from './multi-selection-button/multi-selection-menu-button.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MultiSelectionButtonComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {

  model: MultiSelectionButtonModel = {
    id: 'test',
    name: 'hello',
    options: [
      {
        id: '1',
        name: 'xxx',
        value: undefined
      },
      {
        id: '2',
        name: 'yyy',
        value: undefined
      }
    ]
  }

  defaultIds = ["2"]

  selectionChanged(event: MultiSelectionResult){
    console.log(event)
  }
}
