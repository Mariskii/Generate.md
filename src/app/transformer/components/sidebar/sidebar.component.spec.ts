import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, of } from 'rxjs';

const MockCardService = {
  setActualDocumentPart:(position: number, sectionOfPart: string) => {},
  deleteActualDocumentPart:() => {}
}

fdescribe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [
        { provide: MockCardService, useValue: MockCardService },
        {
          provide: MatDialog,
          useValue: {
              open() {
                  return {
                      afterClosed() {
                          return of('result');
                      }
                  };
              }
          }
      }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setEdit works correctly', () => {

    const spySetActualDocumentPart = spyOn(component.cardService, 'setActualDocumentPart');

    component.setEdit(1,'');

    expect(spySetActualDocumentPart).toHaveBeenCalled();

  });

  it('drop works correctly', () => {




  });

  it('deletePart works correctly', () => {

    const spyDeleteActualDocumentPart = spyOn(component.cardService, 'deleteActualDocumentPart');

    const parts:DocumentPart[] = []

    component.deletePart(parts,1);

    expect(spyDeleteActualDocumentPart).toHaveBeenCalled();
  });

  it('openDialog works correctly when there is no part provided', () => {

    const spySaveComponents = spyOn(component.cardService, 'saveComponents');

    component.openDialog();

    expect(spySaveComponents).toHaveBeenCalled();
  });

  it('openDialog works correctly when there is a part provided', () => {

    const spySaveComponents = spyOn(component.cardService, 'saveComponents');

    let part = {
      partTitle:'',
      partText:''
    }

    component.openDialog(part);

    expect(spySaveComponents).toHaveBeenCalled();
    expect(part.partTitle).toEqual('result');
  });

  it('openConfirmation works correctly', () => {

    const spyResetComponents = spyOn(component.cardService, 'resetComponents');

    component.openConfirmation();

    expect(spyResetComponents).toHaveBeenCalled();
  });

});
