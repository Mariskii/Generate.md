import { Component, inject } from '@angular/core';
import { CardPartComponent } from '../card-part/card-part.component';
import { DocumentPart } from '../../interfaces/DocumentPart.interface';
import { CardService } from '../../services/card-service.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, DragDropModule, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NewComponentModalComponent } from '../new-component-modal/new-component-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

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
    MatButtonModule,
    MatTooltip
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent{

  cardService = inject(CardService);
  dialog = inject(MatDialog);



  setEdit(position: number, sectionOfPart: string) {
    this.cardService.setActualDocumentPart(position, sectionOfPart);
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

    this.cardService.getReadMeString();
    this.cardService.saveComponents();
  }

  deletePart(listParts: DocumentPart[], deletePosition: number) {
    listParts.splice(deletePosition,1);
    this.cardService.getReadMeString();


    if(listParts.length === 0) {
      this.cardService.deleteActualDocumentPart();
    }
  }

  openDialog(part?: DocumentPart) {
    const dialogRef = this.dialog.open(NewComponentModalComponent, {
      data: part || {partTitle:''}
    });

    let dialogSuscription = dialogRef.afterClosed().subscribe(result => {

      if(result) {

        if(!part) {
          this.cardService.documentParts.push({partTitle:result, partText:''});
        }
        else {
          part.partTitle = result;
        }

        this.cardService.saveComponents();
      }

      dialogSuscription.unsubscribe();
    });

  }

  resetComponents() {
    this.cardService.resetComponents();
  }
}
