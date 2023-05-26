import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DeckSectionComponent} from './deck-section.component';

describe('DeckSectionComponent', () => {
  let component: DeckSectionComponent;
  let fixture: ComponentFixture<DeckSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeckSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
