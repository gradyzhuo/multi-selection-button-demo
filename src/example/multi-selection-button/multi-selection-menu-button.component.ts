import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgFor, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkOverlayOrigin, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { MultiSelectionButtonTitleComponent } from './multi-selection-button-title/multi-selection-button-title.component';
import { MultiSelectionTagComponent } from './multi-selection-tag/multi-selection-tag.component';
import { MultiSelectionMenuOptionComponent } from './multi-selection-menu-option/multi-selection-menu-option.component';

export interface MultiSelectionMenuOption<Value=any>{
  id: string
  name: string
  value: Value
}

export interface MultiSelectionButtonModel{
  id: string
  name: string
  options: MultiSelectionMenuOption[]
}

export interface MultiSelectionResult{
  id: string
  selectedOptions: MultiSelectionMenuOption[]
}


@Component({
  selector: 'multi-selection-button',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    MultiSelectionButtonTitleComponent,
    MultiSelectionTagComponent,
    MultiSelectionMenuOptionComponent,
    NgIf,
    NgFor,
    NgStyle,
    NgClass,
    CdkMenuModule,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
  ],
  templateUrl: './multi-selection-menu-button.component.html',
  styleUrl: './multi-selection-menu-button.component.scss',
  animations: [
    trigger("content", [
      state(
        'display',
        style(
          {
            opacity: '100%',
            // height: 'auto'
          }
        ),
      ),
      state(
        'non-display',
        style([
          {
            opacity: '0%',
            height: '0px'
          }
        ]),
      ),
      transition('display => non-display', [
        animate('0.4s')
      ]),
      transition('non-display => display', [
        animate('0.4s 0ms')
      ]),
    ]),
  ]
})
export class MultiSelectionButtonComponent implements OnInit{
  isDisplayingMenu: boolean = false

  @Input()
  model?: MultiSelectionButtonModel

  @Input()
  optionIconFilePath?: string

  @Output()
  selectionResultChanged$ = new EventEmitter<MultiSelectionResult>()

  @Input()
  selectedIds: string[] = []

  selectedOptions: MultiSelectionMenuOption[] = []

  click(sender: MouseEvent | PointerEvent) {
    this.isDisplayingMenu = !this.isDisplayingMenu
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.selectedOptions = this.model?.options.filter(option => {
      return this.selectedIds.includes(option.id)
    }) || []
  }

  removeItem(id: any){
    const index = this.selectedIds.findIndex(item => {
      return item === id
    })

    if(index > -1){
      this.selectedIds.splice(index, 1)
      this.relayout()
    }

  }

  addItem(id: string){
    const index = this.selectedIds.findIndex(item => {
      return item === id
    })
    if (index == -1){
      this.selectedIds.push(id)
      this.relayout()
    }
  }

  selectedItem(id: string){
    const index = this.selectedIds.findIndex(item => {
      return item === id
    })

    if(index > -1){
      this.removeItem(id)
    }else{
      this.addItem(id)
    }

    this.relayout()
  }

  isOptionSelected(optionId: string){
    return this.selectedIds.includes(optionId)
  }

  relayout(){
    if(this.model){
      this.selectedOptions = this.model.options.filter(option => {
        return this.selectedIds.includes(option.id)
      })

      const selectionResult: MultiSelectionResult = {
        id: this.model.id,
        selectedOptions: this.selectedOptions
      }

      this.selectionResultChanged$.emit(selectionResult)
    }

  }


  isActivating(): boolean{
    return this.selectedIds.length > 0
  }

}
