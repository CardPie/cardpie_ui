import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CardpieIntroduceComponent} from './cardpie-introduce.component';

describe('CardpieIntroduceComponent', () => {
  let component: CardpieIntroduceComponent;
  let fixture: ComponentFixture<CardpieIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardpieIntroduceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardpieIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
