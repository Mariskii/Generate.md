import { Injectable } from '@angular/core';
import { DocumentPart } from '../interfaces/DocumentPart.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  documentParts: DocumentPart[] = [
    {
      partTitle: 'Title',
      partText: '# Title\n'
    },
    {
      partTitle: 'Subtitle',
      partText: '## Subtitle'
    },
    {
      partTitle: 'List',
      partText: '- Element 1'
    },
    {
      partTitle: 'Syntax Highlight',
      partText: `
### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`
      `
    }
  ];

  unUsedComponents: DocumentPart[] = [
    {
      partTitle: 'Technologies',
      partText: '# Technologies'
    },
    {
      partTitle: 'Technologies 2',
      partText: '# Technologies 2'
    },
  ];

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
}
