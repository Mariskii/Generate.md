import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../../services/card-service.service';
import { MatCardModule } from '@angular/material/card';
import { MarkdownComponent, MarkdownModule, MarkdownService } from 'ngx-markdown';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MarkdownComponent,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

  content:string = 'preview';

  cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.getTextString();
  }

  toggleContent(newContent: string) {
    this.content = newContent;
  }

  downloadFile() {
    this.cardService.downloadFile();
  }

}
