import { TestBed } from '@angular/core/testing';

import { CardService } from './card-service.service';

describe('CardService', () => {
  let service: CardService;

  const part = {
    partTitle: '',
    partText: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addDocumentPart should push a document part', () => {

    service.addDocumentPart(part);

    expect(service.documentParts).toContain(part);
  });

  it('setActualDocumentPart sets the part of documentParts correctly', () => {

    service.documentParts = [
      {
        partTitle: '',
        partText: ''
      }
    ]

    service.setActualDocumentPart(0, 'inDocument');

    expect(service.actualDocumentPart).toEqual(part)
  });

  it('setActualDocumentPart sets the part of unUsedComponents correctly', () => {

    service.unUsedComponents = [
      {
        partTitle: '',
        partText: ''
      }
    ]

    service.setActualDocumentPart(0, 'outDocument');

    expect(service.actualDocumentPart).toEqual(part)
  });

  it('deleteActualDocumentPart works correctly', () => {
    service.deleteActualDocumentPart();

    expect(service.actualDocumentPart).toBe(undefined);
  });

  it('saveComponents works correctly', () => {
    const spyLocalStorageSetItem = spyOn(localStorage, 'setItem');

    service.saveComponents();

    expect(spyLocalStorageSetItem).toHaveBeenCalled();
  });

  it('loadComponents works when there are components at localStorage', () => {
    const spylocalStorageGetItem = spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([part]));

    service.loadComponents();

    expect(spylocalStorageGetItem).toHaveBeenCalled();
  });

  it('resetComponents works correctly', () => {
    const spylocalStoraRemoveItem = spyOn(localStorage, 'removeItem');
    const spyGetReadMeString = spyOn(service, 'getReadMeString');

    service.resetComponents();

    expect(spylocalStoraRemoveItem).toHaveBeenCalled();
    expect(spyGetReadMeString).toHaveBeenCalled();
  });

});
