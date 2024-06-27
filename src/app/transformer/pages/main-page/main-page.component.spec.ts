import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';

fdescribe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainPageComponent,
        BrowserAnimationsModule
      ],
      providers: [
        MarkdownService,
        { provide: SECURITY_CONTEXT, useValue: 'valor_de_contexto' },
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
});
