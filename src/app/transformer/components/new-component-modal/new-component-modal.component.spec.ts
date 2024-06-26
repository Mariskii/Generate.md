import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentModalComponent } from './new-component-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MockDialogRef = {
  close: () => {}
}

fdescribe('NewComponentModalComponent', () => {
  let component: NewComponentModalComponent;
  let fixture: ComponentFixture<NewComponentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NewComponentModalComponent,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: MockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onNoClick works correctly', () => {

    const spyCloseDialog = spyOn(component.dialogRef, 'close');

    component.onNoClick();

    expect(spyCloseDialog).toHaveBeenCalled();
  });
});
