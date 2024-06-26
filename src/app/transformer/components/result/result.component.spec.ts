import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';

const MockCardService = {
  downloadFile:() => {}
}

fdescribe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent],
      providers: [
        MarkdownService,
        { provide: SECURITY_CONTEXT, useValue: 'valor_de_contexto' },
        { provide: MockCardService, useValue: MockCardService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleContent works correctly', () => {

    component.toggleContent('preview');

    expect(component.content).toEqual('preview');
  });

  it('downloadFile works correctly', () => {

    const spyDownload = spyOn(component.cardService, 'downloadFile');

    component.downloadFile();

    expect(spyDownload).toHaveBeenCalled();
  })
});
