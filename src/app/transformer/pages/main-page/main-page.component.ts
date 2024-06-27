import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { TextAreaComponent } from '../../components/text-area/text-area.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ResultComponent } from '../../components/result/result.component';
import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    TextAreaComponent,
    SidebarComponent,
    ResultComponent,
    MatSidenavModule,
    HeaderComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnDestroy, AfterContentInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  sideBarMode:MatDrawerMode = 'side';
  private breakpointSubscription!: Subscription;

  breakPointObserver = inject(BreakpointObserver)
  changesDetection = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    this.breakpointSubscription = this.breakPointObserver.observe([
      Breakpoints.Tablet,
      Breakpoints.Small,
      Breakpoints.Handset

    ]).subscribe(result => {

      if(result.matches) {
        this.sideBarMode = 'over'
      } else  {
        this.sideBarMode = 'side';
        this.changesDetection.detectChanges();
        this.drawer.open();
      }
    });
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }

}
