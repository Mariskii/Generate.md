import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';


@Component({
  selector: 'app-new-component-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './new-component-modal.component.html',
  styleUrl: './new-component-modal.component.scss'
})
export class NewComponentModalComponent {

  constructor(
    public dialogRef: MatDialogRef<NewComponentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DocumentPart,
  ) {}

  title:string = this.data.partTitle;

  titleFormControl = new FormControl(this.title, [Validators.required]);

  onNoClick(): void {
    this.dialogRef.close();
  }

  isValidField() {
    return this.titleFormControl.errors && this.titleFormControl.touched;
  }
}
