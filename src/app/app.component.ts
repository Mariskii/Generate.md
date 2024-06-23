import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardService } from './transformer/services/card-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'MDGenerator';

  cardService = inject(CardService);

  ngOnInit(): void {
    this.cardService.loadComponents();
  }
}
