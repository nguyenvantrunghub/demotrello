import {Component, OnDestroy} from '@angular/core';
import { navItemsStaff} from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout-staff.component.html'
})
export class DefaultLayoutStaffComponent implements OnDestroy {
  public navItems = navItemsStaff;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
