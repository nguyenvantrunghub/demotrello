import {Component, OnDestroy} from '@angular/core';
import { navItemsProjectManager} from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout-projectmanager.component.html'
})
export class DefaultLayoutProjectManagerComponent implements OnDestroy {
  public navItems = navItemsProjectManager;
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
