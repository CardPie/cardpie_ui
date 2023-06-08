import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CreateNewDecksPopupComponent} from './create-new-decks-popup.component';

describe('CreateNewDecksPopupComponent', () => {
  let component: CreateNewDecksPopupComponent;
  let fixture: ComponentFixture<CreateNewDecksPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewDecksPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewDecksPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
