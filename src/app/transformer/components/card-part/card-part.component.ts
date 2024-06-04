import { Component, Input, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardService } from '../../services/card-service.service';

@Component({
  selector: 'app-card-part',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './card-part.component.html',
  styleUrl: './card-part.component.scss'
})
export class CardPartComponent {

  @Input() cardTitle!: string;

}
