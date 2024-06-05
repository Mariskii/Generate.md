import { Component, inject } from '@angular/core';
import { CardPartComponent } from '../card-part/card-part.component';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';
import { CardService } from '../../services/card-service.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CardPartComponent,
    CdkDrag,
    CdkDropList,
    DragDropModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent{

  cardService = inject(CardService);

  componentsDocument: DocumentPart[] = [
    {
      partTitle: 'Technologies',
      partText: '# Technologies'
    },
  ];

  setEdit(position: number) {
    this.cardService.setActualDocumentPart(position);
  }

  drop(event: CdkDragDrop<DocumentPart[]>) {
    moveItemInArray(this.cardService.documentParts, event.previousIndex, event.currentIndex);
    this.cardService.getTextString();
  }

  addToDocument(event: any) {
    console.log(event.target);

  }
}
