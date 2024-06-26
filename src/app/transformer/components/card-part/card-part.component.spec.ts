import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartComponent } from './card-part.component';

describe('CardPartComponent', () => {
  let component: CardPartComponent;
  let fixture: ComponentFixture<CardPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
