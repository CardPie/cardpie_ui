import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SaveDeckDialogComponent} from './save-deck-dialog.component';

describe('SaveDeckDialogComponent', () => {
  let component: SaveDeckDialogComponent;
  let fixture: ComponentFixture<SaveDeckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveDeckDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveDeckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
