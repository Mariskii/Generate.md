import { Component, inject } from '@angular/core';
import { CardPartComponent } from '../card-part/card-part.component';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';
import { CardService } from '../../services/card-service.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule, transferArrayItem} from '@angular/cdk/drag-drop';

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
    {
      partTitle: 'Technologies 2',
      partText: '# Technologies 2'
    },
  ];

  setEdit(position: number) {
    this.cardService.setActualDocumentPart(position);
  }

  drop(event: CdkDragDrop<DocumentPart[]>) {
    //moveItemInArray(this.cardService.documentParts, event.previousIndex, event.currentIndex);


    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this.cardService.getTextString();
  }
}
