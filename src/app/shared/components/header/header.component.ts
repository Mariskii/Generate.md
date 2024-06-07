import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleAside = new EventEmitter<void>();

  clickToggle() {
    this.toggleAside.emit()
  }
}
