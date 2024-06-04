import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../../services/card-service.service';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit{

  cardService = inject(CardService);

  myPropSubject = new Subject();

 constructor() {
   this.myPropSubject.subscribe((val) => {

   });
 }

  ngOnInit(): void {
    this.myPropSubject.next('some arbitrary value');
  }
}
