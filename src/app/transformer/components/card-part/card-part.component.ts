import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-part',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
  ],
  templateUrl: './card-part.component.html',
  styleUrl: './card-part.component.scss'
})
export class CardPartComponent {

  @Output() editEmiter = new EventEmitter<void>();

  @Input() cardTitle!: string;

  editClick() {
    this.editEmiter.emit();
  }
}
