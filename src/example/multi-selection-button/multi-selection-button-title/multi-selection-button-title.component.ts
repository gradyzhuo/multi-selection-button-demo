import { Component, Input } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { NgIf, NgTemplateOutlet } from '@angular/common';

const ANIMATION_TIMING_IN = '0.4s ease-out'
const ANIMATION_TIMING_OUT = '0.3s ease-out'

@Component({
  selector: 'multi-selection-button-title',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
  ],
  templateUrl: './multi-selection-button-title.component.html',
  styleUrl: './multi-selection-button-title.component.scss',
  animations: [
    trigger("header", [
      state(
        'small',
        style({
          top: '-9px',
          left: '14px',
          height: '16px',
        }),
      ),
      state(
        'normal',
        style([
          {
            height: '24px',
          }
        ]),
      ),
      transition('small => normal', [
        group([
          animate(ANIMATION_TIMING_OUT),
          query(".container-header", animate(ANIMATION_TIMING_OUT, style({
            height: '24px'
          }))),
          query(".text-name",
            animate(ANIMATION_TIMING_OUT, style({
              fontSize: '14px'
            })))
        ])
      ]),
      transition('normal => small', [
        group([
          animate(ANIMATION_TIMING_IN),
          query(".container-header", animate(ANIMATION_TIMING_IN, style({
            height: '16px'
          }))),
          query(".text-name",
            animate(ANIMATION_TIMING_IN, style({
              fontSize: '12px'
            }))
          )
        ])
      ]),
    ]),
    trigger("font", [
      state(
        'small',
        style({
          fontSize: '12px'
        }),
      ),
      state(
        'normal',
        style({
          fontSize: '14px'
        }),
      ),
    ]),
    trigger("icon", [
      state(
        'small',
        style({
          // width: '16px',
          height: '16px'
        }),
      ),
      state(
        'normal',
        style({
          height: '24px'
        }),
      ),
    ])

  ]
})
export class MultiSelectionButtonTitleComponent {
  @Input()
  counter: number = 0

  @Input()
  title: string = ""

  @Input()
  iconFilePath?: string


  isActivating(): boolean{
    return this.counter > 0
  }

}
