import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SavedDeckComponent} from './saved-deck.component';

describe('SavedDeckComponent', () => {
  let component: SavedDeckComponent;
  let fixture: ComponentFixture<SavedDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedDeckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
