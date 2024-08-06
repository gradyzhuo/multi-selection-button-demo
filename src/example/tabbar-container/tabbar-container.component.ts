import { CdkPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Pipe,
  PipeTransform,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import {
  TabbarComponent,
  TabbarStyle,
  TabModel,
} from './tabbar/tabbar.component';
import { PortalModule } from '@angular/cdk/portal';
import { NgClass } from '@angular/common';

export interface TabPortalModel<Context = any> {
  tabItem: TabModel;
  context?: Context;
}

@Pipe({ name: 'pluck', standalone: true })
export class PluckPipe implements PipeTransform {
  transform(input: any[], key: string): any {
    return input.map((value) => value[key]);
  }
}

@Component({
  selector: 'app-tabbar-container',
  standalone: true,
  imports: [PortalModule, TabbarComponent, PluckPipe, CdkPortal, NgClass],
  templateUrl: './tabbar-container.component.html',
  styleUrl: './tabbar-container.component.scss',
})
export class TabbarContainerComponent implements OnChanges, AfterViewInit {
  @Input()
  viewModels: TabPortalModel<any>[] = [];

  @Input()
  selectedIndex: number = -1;

  @Output()
  selectedIndexChanged$ = new EventEmitter<number>();

  @Input()
  tabbarStyle: TabbarStyle = TabbarStyle.style1;

  @ContentChildren(CdkPortal)
  portals!: QueryList<CdkPortal>;

  currentPortal!: Portal<any>;

  changeTab(tabIndex: number) {
    if (this.selectedIndex != tabIndex) {
      this._changeTab(tabIndex);
    }
  }

  _changeTab(tabIndex: number) {
    if (this.portals) {
      const portal = this.portals.get(tabIndex);
      if (portal) {
        const viewModel = this.viewModels[tabIndex];
        portal.context = viewModel.context;
        this.currentPortal = portal;
        this.selectedIndexChanged$.emit(tabIndex);
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.portals) {
      this.selectedIndex = 0;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.

    if ('selectedIndex' in changes) {
      this.changeTab(this.selectedIndex);
    }
  }
}
