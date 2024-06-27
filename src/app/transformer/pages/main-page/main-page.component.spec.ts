import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';
import { Subject, of } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

let breakpointSubject: Subject<BreakpointState>;

const MockBreakpointObserver = {
  observe: () => breakpointSubject
}

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {

    breakpointSubject  = new Subject<BreakpointState>();

    await TestBed.configureTestingModule({
      imports: [
        MainPageComponent,
        BrowserAnimationsModule
      ],
      providers: [
        MarkdownService,
        { provide: SECURITY_CONTEXT, useValue: 'valor_de_contexto' },
        { provide: BreakpointObserver, useValue: MockBreakpointObserver },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('breakPointObserver when the breakpoint matches', () => {
    breakpointSubject.next({ matches: true, breakpoints: {} });

    expect(component.sideBarMode).toBe('over');
  });

  it('should set sideBarMode to "side" and call detectChanges and open drawer when Handset breakpoint does not match', () => {
    const spyDetectChanges = spyOn(component.changesDetection, 'detectChanges');
    const spyOpenDrawer = spyOn(component.drawer, 'open');


    breakpointSubject.next({ matches: false, breakpoints: {} });

    expect(component.sideBarMode).toBe('side');
    expect(spyDetectChanges).toHaveBeenCalled();
    expect(spyOpenDrawer).toHaveBeenCalled();
  });
});
