import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CardService } from '../../services/card-service.service';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent implements OnInit, OnDestroy{

  @Output()
  onDebounce: EventEmitter<void> = new EventEmitter();

  debouncer: Subject<void> = new Subject<void>();
  debouncerSubscription?: Subscription;

  cardService = inject(CardService);

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(() => {

      this.cardService.saveComponents();

    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  onKeyPress() {
    this.debouncer.next();
  }

}
