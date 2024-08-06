import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { NgClass } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

interface TabItem {
  content: any;
  hidden?: boolean;
}

export interface TabModel {
  id: string;
  display: string;
  disabled?: boolean;
  leftItem?: TabItem;
  rightItem?: TabItem;
}

export enum TabbarStyle {
  style1 = 'style1',
  style2 = 'style2',
  phase = 'phase',
}

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [CdkListbox, CdkOption, NgClass],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
})
export class TabbarComponent implements AfterContentInit, OnChanges {
  @Input()
  tabs: TabModel[] = [];

  @Input()
  style: TabbarStyle = TabbarStyle.style2;

  currentTab: any;

  @Input()
  selectedIndex: number = -1;

  selectedTabChanged = new BehaviorSubject<number>(this.selectedIndex);

  @Output()
  selectedTabChanged$ = this.selectedTabChanged.asObservable();

  selectTab(tab: TabModel) {
    if (this.currentTab && this.compareTab(this.currentTab, tab)) {
      return;
    }

    this.currentTab = tab;
    this.selectedIndex = this.tabs.findIndex((value) => {
      return this.compareTab(value, tab);
    });
    this.selectedTabChanged.next(this.selectedIndex);
  }

  selectTabByIndex(index: number) {
    this.selectTab(this.tabs[index]);
  }

  compareTab(lhs: TabModel, rhs: TabModel) {
    return lhs.id === rhs.id;
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    this.currentTab = this.tabs[this.selectedIndex];
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.

    if ('selectedIndex' in changes) {
      this.selectTabByIndex(this.selectedIndex);
    }
  }
}
