import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-card-part',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatTooltip,
    CdkDragHandle,
  ],
  templateUrl: './card-part.component.html',
  styleUrl: './card-part.component.scss'
})
export class CardPartComponent {

  @Output() editEmiter = new EventEmitter<void>();
  @Output() deleteEmiter = new EventEmitter<void>();

  @Input() cardTitle!: string;


}
