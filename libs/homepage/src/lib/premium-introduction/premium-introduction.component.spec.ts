import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PremiumIntroductionComponent} from './premium-introduction.component';

describe('PremiumIntroductionComponent', () => {
  let component: PremiumIntroductionComponent;
  let fixture: ComponentFixture<PremiumIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumIntroductionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
