import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

const MockDialogRef = {
  close: () => {}
}

describe('ConfirmationDialogComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogComponent],
      providers: [
        {provide: MatDialogRef, useValue: MockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);
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

  it('confirmation works correctly', () => {

    const spyCloseDialog = spyOn(component.dialogRef, 'close');

    component.confirmation();

    expect(spyCloseDialog).toHaveBeenCalledWith(true);
  })
});
