import { Injectable } from '@angular/core';
import { DocumentPart } from '../interfaces/DocumentPart.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  actualDocumentPart?: DocumentPart = {
    partTitle: 'Title',
    partText: '#Title'
  }

  documentParts: DocumentPart[] = [
    {
      partTitle: 'Title',
      partText: '# Title'
    },
    {
      partTitle: 'Subtitle',
      partText: '## Subtitle'
    },
    {
      partTitle: 'List',
      partText: '- Element 1'
    },
  ];

  text?: string;

  addDocumentPart(documentPart: DocumentPart) {
    this.documentParts.push(documentPart);
  }

  setActualDocumentPart(position: number) {
    this.actualDocumentPart = this.documentParts[position];
  }

  getTextString() {

    this.text = '';

    this.documentParts.forEach(part => {
      this.text = this.text + part.partText + '\n';
    });
  }
}
