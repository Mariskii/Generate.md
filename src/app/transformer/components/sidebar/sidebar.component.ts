import { Component, inject } from '@angular/core';
import { CardPartComponent } from '../card-part/card-part.component';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';
import { CardService } from '../../services/card-service.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NewComponentModalComponent } from '../new-component-modal/new-component-modal.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CardPartComponent,
    CdkDrag,
    CdkDropList,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent{

  cardService = inject(CardService);
  dialog = inject(MatDialog);

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

  deletePart(listParts: DocumentPart[], deletePosition: number) {
    listParts.splice(deletePosition,1);
    this.cardService.getTextString();
  }

  openDialog(part?: DocumentPart) {
    const dialogRef = this.dialog.open(NewComponentModalComponent, {
      data: part || {partTitle:''}
    });

    let dialogSuscription = dialogRef.afterClosed().subscribe(result => {

      if(result) {

        if(!part) {
          this.cardService.documentParts.push({partTitle:result, partText:''})
        }
        else {
          part.partTitle = result;
        }
      }

      dialogSuscription.unsubscribe();
    });

  }
}
