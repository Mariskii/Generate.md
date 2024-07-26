import { Injectable } from '@angular/core';
import { DocumentPart } from '../interfaces/DocumentPart.interface';
import { demoInDocumentParts, demoOutDocumentParts } from '../data/components.data';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  documentParts: DocumentPart[] = structuredClone(demoInDocumentParts);

  unUsedComponents: DocumentPart[] = structuredClone(demoOutDocumentParts);

  actualDocumentPart?: DocumentPart = this.documentParts[0];

  text: string = '';

  addDocumentPart(documentPart: DocumentPart) {
    this.documentParts.push(documentPart);
  }

  setActualDocumentPart(position: number, sectionOfPart: string) {
    this.actualDocumentPart = sectionOfPart === 'inDocument'
    ? this.documentParts[position]
    : this.unUsedComponents[position];
  }

  deleteActualDocumentPart() {
    this.actualDocumentPart = undefined;
  }

  getReadMeString() {

    this.text = '';

    this.documentParts.forEach(part => {
      this.text = this.text + part.partText + '\n';
    });
  }

  downloadFile(): void {
    const blob = new Blob([this.text], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  //Persistance of the components of the document

  saveComponents() {
    localStorage.setItem('componentsInDocument', JSON.stringify(this.documentParts));
    localStorage.setItem('componentsOutDocument', JSON.stringify(this.unUsedComponents));
  }

  loadComponents() {
    let savedComponents = localStorage.getItem('componentsOutDocument');

    if(savedComponents)
      this.unUsedComponents = JSON.parse(savedComponents);

    savedComponents = localStorage.getItem('componentsInDocument');

    if(savedComponents)
      this.documentParts = JSON.parse(savedComponents);

    this.setActualDocumentPart(0, 'inDocument');
  }

  resetComponents() {
    localStorage.removeItem('componentsInDocument');
    localStorage.removeItem('componentsOutDocument');

    this.documentParts = structuredClone(demoInDocumentParts);
    this.unUsedComponents = structuredClone(demoOutDocumentParts);

    this.getReadMeString();
    this.setActualDocumentPart(0, 'inDocument');
  }
}
