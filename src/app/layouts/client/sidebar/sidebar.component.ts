import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuClient } from '../../../shared/menu-items/menu-client';
@Component({
  selector: 'client-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.componet.css']
})
export class ClientSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  panelOpenState = false;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuClient
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
