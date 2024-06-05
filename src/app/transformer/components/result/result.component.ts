import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../../services/card-service.service';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    MatCardModule,
    MarkdownComponent,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  content:string = 'code';

  cardService = inject(CardService);

  toggleContent(newContent: string) {
    this.content = newContent;
  }

}
