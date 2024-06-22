import { Injectable } from '@angular/core';
import { DocumentPart } from '../interfaces/DocumentPart.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  documentParts: DocumentPart[] = [
    {
      partTitle: 'Title',
      partText: '# Title of the project\n'
    },
    {
      partTitle: 'Authors',
      partText: '## Authors \n- [@octokatherine](https://www.github.com/octokatherine)'
    },
  ];

  unUsedComponents: DocumentPart[] = [
    {
      partTitle: 'Apendix',
      partText: '## Appendix\nAny additional information goes here'
    },
    {
      partTitle: 'Badges',
      partText: '## Badges\nAdd badges from somewhere like: [shields.io](https://shields.io/)\n[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)'
    },
    {
      partTitle: 'Tech',
      partText: '## Tech Stack\n**Client:** Angular\n**Server:** Spring boot'
    },
    {
      partTitle: 'Documentation',
      partText: '## Documentation\n[Documentation](https://fakelinktodocumentation)'
    },
    {
      partTitle: 'Acknowledgments',
      partText: '## Acknowledgements\n- [Readme.so](https://readme.so/es)'
    },
    {
      partTitle: 'Environment Variables',
      partText: '## Environment Variables\nTo run this project, you will need to add the following environment variables to your .env file\n`API_KEY`\n`ANOTHER_API_KEY`'
    },
    {
      partTitle: 'Logo',
      partText: '![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)'
    },
    {
      partTitle: 'Color Reference',
      partText: '## Colors\n| Color             | Hex                                                                |\n| ----------------- | ------------------------------------------------------------------ |\n| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |'
    },
    {
      partTitle: 'Demo',
      partText: 'Here you can put a gif or link to the demo of the project'
    },
    {
      partTitle: 'Github About Me',
      partText: '## 🚀 About Me\nTell something about you :).'
    },
    {
      partTitle: 'Skills',
      partText: '## 🛠 Skills\nJavascript, HTML, CSS...'
    },
    {
      partTitle: 'Used By',
      partText: '## Used By\nThis project is used by the following companies:\n- Company 1\n- Company 2'
    },
    {
      partTitle: 'Screenshot',
      partText: '## Screenshots\n![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)'
    }
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
